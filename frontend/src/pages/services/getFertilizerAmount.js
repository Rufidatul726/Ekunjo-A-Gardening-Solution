import React from 'react'
import { useState } from 'react';
// import axios from 'axios';

function GetFertilizerAmount(){   
  const [plant, setPlant] = useState("");
  const [number, setNumber] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plant, number);
    setShowComponent(true);
  }

    const onPlantNameChange = (e) => {
        setPlant(e.target.value);
    };

    const onPlantNumberChange = (e) => {
        setNumber(e.target.value);
    };


  return(
    <div>
        <section class="intro">
            <div class="bg-image h-100">
                <div class="mask d-flex align-items-center h-100">
                <div class="container">
                    <div class="card mask-custom p-4">
                    <div class="card-body">
                        <p class="h1 font-weight-bold mb-4 text-black">Get Necessary Amount of Fertilizer For Your Plants</p>
                        <div class="row justify-content-center">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <div id="basic" class="form-outline form-white">
                            <input type="text" id="form1" class="form-control form-control-lg" onChange={onPlantNameChange}/>
                            <label class="form-label" for="form1">Enter Plant Name</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div id="numberOfPlants" class="form-outline form-white">
                            <input type="number" id="form2" class="form-control form-control-lg" onChange={onPlantNumberChange}/>
                            <label class="form-label" for="form2">Enter Number of Plants</label>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <input class="btn btn-info btn-block btn-lg" type="submit" value="Search" onClick={handleSubmit}/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  ); 
}

export default GetFertilizerAmount;