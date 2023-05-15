import React from 'react';
import { useState } from 'react';
import '../../CSSfiles/detectdisease.css';
import Plantdisease from '../../images/plantdiseasedetection.png';

export default function ViewPlantDisease(){
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [preview, setPreview] = React.useState(null);

    const handleChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            <h1 className="text-center" id='diseasedetecttitle-div'>Plant Disease Detection</h1>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <form method="post" action="#" id="#">
                        <div className="form-group files">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="" onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-outline" style={{height: "40px" , margin: "10px"}}>Detect Disease</button>
                    </form>
                </div>
                <div className="img-holder col-md-4 mx-auto">
                    {preview?
                        <img src={preview} alt="Plant Disease" width="300" height="300" />
                    :
                        <img src={Plantdisease} alt="Plant Disease" width="300" height="300" />
                    }   
                </div>
            </div>
            {
                preview?
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}