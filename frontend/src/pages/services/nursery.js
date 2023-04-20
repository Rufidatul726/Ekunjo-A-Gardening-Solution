import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Circle, Polyline } from 'react-leaflet';
// import tileLayer from '../util/tileLayer';
import nurseriesData from '../../jsonfiles/data.json';

const center = [52.22977, 21.01178];

const Location = ({ nurseries }) => {
    const map = useMap();
    const [position, setPosition] = useState(null);
    const [nearbyNurseries, setNearbyNurseries] = useState([]);

    useEffect(() => {
        map.locate({
        setView: true
        });
        map.on('locationfound', (event) => {
        setPosition(event.latlng);
        const sortedNurseries = nurseries
            .map((nursery) => ({
            ...nursery,
            distance: event.latlng.distanceTo([nursery.latitude, nursery.longitude])
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 5);
        setNearbyNurseries(sortedNurseries);
        });
    }, [map, nurseries]);

    return position ? (
        <>
        <Circle center={position} weight={2} color={'red'} fillColor={'red'} fillOpacity={0.1} radius={500}></Circle>
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
        {nearbyNurseries.map((nursery) => (
            <>
            <Polyline positions={[position, [nursery.latitude, nursery.longitude]]} />
            <Marker key={nursery.name} position={[nursery.latitude, nursery.longitude]}>
                <Popup>{nursery.name}</Popup>
            </Marker>
            </>
        ))}
        </>
    ) : null;
};


export default function Nursery(){
    return (
        <div>       
            <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
            {/* <TileLayer {...tileLayer} /> */}
            <Location nurseries={nurseriesData} />
            </MapContainer>
        </div>
    )
}