import React from 'react'
import { useState } from 'react';
import Mango from '../../images/mango.png'
import MyCard from '../../Components/card';
// import axios from 'axios';

export default function ViewPlantDetails(){   
  const [plant, setPlant] = useState("");
  const [showComponent, setShowComponent] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plant);
    //const response =await axios.get(`http://localhost:5000/plants`,{plant});
    // const receivedString = response.data;
    // console.log(receivedString);
    // const receivedObject = JSON.parse(receivedString);
    setShowComponent(true);
  }

  const CardProps = {
    imgsrc: Mango,
    name: "Mango",
    scientificName: "Mangifera indica",
    description: "Mango is a fruit"
    }

  return(
    <div>
      <div className="col-md-10 mb-3 mb-md-0">
        <div id="basic" className="form-outline form-white">
            <input type="text" id="form1" className="form-control form-control-lg" value={plant} 
                    onChange={e => setPlant(e.target.value)} required />
            <label className="form-label" form="form1">Enter Plant Name</label>
        </div>
      </div>          
      <div className="col-md-2">
          <input className="btn btn-info btn-block btn-lg" type="submit" value="Search" onClick={handleSubmit} />
          {showComponent && 
            <MyCard {...CardProps}/>
          }
      </div>
    </div>
  );
 
}

//export default React.memo(PlantInfo)