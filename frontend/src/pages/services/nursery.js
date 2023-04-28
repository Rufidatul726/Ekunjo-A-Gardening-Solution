import { useEffect } from 'react';
import data from '../../jsonfiles/data.json';
import '../../../node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import redMarker from '../../images/redMarker.png';
import './styles.css';

const FindNursery = () => {
  useEffect(() => {
    const mapOptions = {
      center: [23.385044, 90.486671],
      zoom: 10,
    };

    const map = L.map('map', mapOptions);
    const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    map.addLayer(tileLayer);
    
    const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    });

    map.addLayer(googleStreets);

    const myIcon = L.icon({
      iconUrl: redMarker,
      iconSize: [60, 60],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
      });

    navigator.geolocation.getCurrentPosition((position) => {
      const userLat = position.coords.latitude;
      const userLong = position.coords.longitude;

      const redMarker = L.marker([userLat, userLong], { icon: myIcon });
      const popUp = redMarker.bindPopup('Your current location');
      popUp.addTo(map);
      redMarker.openPopup();

      // close the pop up after 3 seconds
      setTimeout(() => {
        redMarker.closePopup();
      }, 5000);
      const userLatLng = L.latLng(userLat, userLong);

      data.forEach((nursery) => {
        const nurseryLatLng = L.latLng(nursery.LATITUDE, nursery.LONGITUDE);
        nursery.distance = userLatLng.distanceTo(nurseryLatLng);
      });

      data.sort((a, b) => a.distance - b.distance);

      const colors = ["violet", "blue", "green", "orange", "black"];

      for (let i = 0; i < 5 && i < data.length; i++) {
        const nursery = data[i];
        const nurseryLatLng = L.latLng(nursery.LATITUDE, nursery.LONGITUDE);
      
        const marker = L.marker(nurseryLatLng, { icon: L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41], }) }).addTo(map);
        const color = colors[i % colors.length];
        marker.setIcon(L.icon({
          iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        }));
        
        marker.bindPopup(`${nursery.NAME}<br>Distance: ${nursery.distance.toFixed(2)} meters`);
        
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            nurseryLatLng,
          ],
          lineOptions: {
            styles: [{ color: color }]
          },
          show: false,
          routeWhileDragging: true,
          showAlternatives: false,
          createMarker: function () {
            return null;
          },
        });
      
        routingControl.addTo(map);
      }
      
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '100vh'} } />;
};

export default FindNursery;