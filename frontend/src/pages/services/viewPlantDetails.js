import React, { useState, useEffect } from 'react';
import MyCard from '../../Components/card';
import axios from 'axios';
import './plant-list.css';

export default function ViewPlantDetails() {
  const [plant, setPlant] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [filter, setFilter] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5656/plants').then((res) => {
      setPlant(res.data);
      setFilter(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    const searchItem = e.target.value.toLowerCase();
    if (searchItem === '') {
      setFilter([]);
      setShowComponent(false);
      setSelectedPlant(null);
    } else {
      const filteredPlants = plant.filter((p) =>
        p.plantName.toLowerCase().includes(searchItem)
      );
      setFilter(filteredPlants);
      setShowComponent(true);
    }
  };

  const handleSelectPlant = (plantName) => {
    const selectedPlant = plant.find((p) => p.plantName === plantName);
    setSelectedPlant(selectedPlant);
  };

  return (
    <div>
      <h1 className="text-center" id="diseasedetecttitle-div">Look for a plant</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-12 mb-3 mb-md-0">
            <div id="basic" className="form-outline form-control">
              <input
                type="search"
                id="form1"
                className="form-control form-control-lg"
                name="searchItem"
                placeholder="Search"
                onChange={handleSubmit}
                required
              />
            </div>
          </div>
          <div className="col-md-12 mt-4">
            {showComponent && (
              <div className="plant-list">
                {filter.map((p) => (
                  <div
                    key={p.plantName}
                    className={`plant-title ${selectedPlant && selectedPlant.plantName === p.plantName ? 'active' : ''}`}
                    onClick={() => handleSelectPlant(p.plantName)}
                  >
                    <span>{p.plantName}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          {selectedPlant && (
            <MyCard
              plantName={selectedPlant.plantName}
              plantInfo={selectedPlant.plantInfo}
              optimalTemp={selectedPlant.optimalTemp}
              suntime={selectedPlant.suntime}
            />
          )}
        </div>
      </div>
    </div>
  );
}
