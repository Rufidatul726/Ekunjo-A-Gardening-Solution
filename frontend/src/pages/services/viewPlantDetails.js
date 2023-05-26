import React from 'react'
import { useState } from 'react';
import MyCard from '../../Components/card';
import '../../CSSfiles/viewPlantDetails.css'
import axios from 'axios';

export default function ViewPlantDetails(){   
  const [plant, setPlant] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [filter, setFilterContent] = useState([]);

  function filterContent(plants, searchItem) {
    //console.log(plants, searchItem);
    const result = plants.filter((plant) => plant.plantName.toLowerCase().includes(searchItem));
    console.log(result);
    setPlant(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchItem = e.target.value;
    // console.log(searchItem);
    axios.get('http://localhost:5656/plants').then((res) => {
        // console.log(res.data);
        setFilterContent(res.data);
        filterContent(filter, searchItem);
    });

    setShowComponent(!showComponent);
  };

  return(
    <div>
       <h1 className="text-center" id='diseasedetecttitle-div'>Look for a plant</h1>
      <div className="col-md-12 mb-3 mb-md-0">
        <div id="basic" className="form-outline form-control">
            <input type="search" id="form1" className="form-control form-control-lg" 
                    name = 'searchItem' 
                    placeholder='Search'
                    onChange={handleSubmit} required />
        </div>
      </div>          
      <div className="col-md-2">
          
          {showComponent && 
            <div>
            {
              plant.map((p) => (<MyCard plantName={p.plantName} plantInfo={p.plantInfo} />))}
            </div>  
          }
      </div>
    </div>
  );
 
}

//export default React.memo(PlantInfo)