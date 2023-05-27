import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function GetFertilizerAmount(){   
  const [plant, setPlant] = useState({});
  const [plantName, setPlantName] = useState("");
  const [number, setNumber] = useState(0.0);
  const [showComponent, setShowComponent] = useState(false);
  const [potassium, setPotassium] = useState(0.0);
  const [nitrogen, setNitrogen] = useState(0.0);
  const [phosphorus, setPhosphorus] = useState(0.0);

const handleSubmit = (e) => {
  e.preventDefault();
  axios.get(`http://localhost:5656/plants/${plantName}`).then((res) => {
    const plantData = res.data;
    setPlant(plantData);
    console.log(plantData);
    //setFilter(plantData);

    let k = plantData[0].K * number;
    setPotassium(k);
    let n = plantData[0].N * number;
    setNitrogen(n);
    let p = plantData[0].P * number;
    setPhosphorus(p);

    setShowComponent(true);
  });
};


    const onPlantNameChange = (e) => {
        setPlantName(e.target.value);
    };

    const onPlantNumberChange = (e) => {
        setNumber(e.target.value);
    };


  return(
    <div>
       <h1 className="text-center" id='diseasedetecttitle-div'>Search for required amount of fertilizer</h1>
        <section className="intro">
              <div className="row justify-content-center">
              <div className="col-md-6 mb-3 mb-md-0">
                  <div id="basic" className="form-outline form-white">
                      <input type="text" id="form1" className="form-control form-control-lg" onChange={onPlantNameChange}/>
                      <label className="form-label" for="form1">Enter Plant Name</label>
                  </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                  <div id="numberOfPlants" className="form-outline form-white">
                  <input type="number" id="form2" className="form-control form-control-lg" onChange={onPlantNumberChange}/>
                  <label className="form-label" for="form2">Enter Number of Plants</label>
                  </div>
              </div>
              <div className="col-md-2">
                  <input className="btn btn-info btn-block btn-lg" type="submit" value="Search" onClick={handleSubmit}/>
              </div>
          </div>
          {
              showComponent && <section className="intro">
                  <br></br><br></br>
              <div className="bg-image h-100" >
                <div className="mask d-flex align-items-center h-100">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="card mask-custom">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-borderless text-black mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row">potassium : {potassium}</th>
                                  </tr>
                                  <tr>
                                      <th scope="row">Nitrogen: {nitrogen}</th>
                                  </tr>
                                  <tr>
                                      <th scope="row">Phosphorus: {phosphorus}</th>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        </section>
    </div>
  ); 
}

export default GetFertilizerAmount;