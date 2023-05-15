import '../CSSfiles/Homepage.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import PlantDetails from '../pages/services/viewPlantDetails';
import FindNursery from '../pages/services/nursery';
import Fertilizer from '../pages/services/getFertilizerAmount';
import ViewPlantDisease from '../pages/services/viewPlantDisease';

export default function OurServices(){

    const [clickPlant, setClickPlant] = React.useState(null);
    const [clickNursery, setClickNursery] = React.useState(false);
    const [clickFertilizer, setClickFertilizer] = React.useState(false);
    const [clickDisease, setClickDisease] = React.useState(false);

    const clickPlantRef = React.useRef(null);
    const clickNurseryRef = React.useRef(null);
    const clickFertilizerRef = React.useRef(null);
    const clickDiseaseRef = React.useRef(null);

    const handleNurseryClick= () => {
        setClickNursery(!clickNursery);
        setClickPlant(false);
        setClickDisease(false);
        setClickFertilizer(false);
        if(clickNursery){
            console.log(clickNurseryRef.current);
            clickNurseryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handlePlantDetailsClick = () => {
        setClickPlant(!clickPlant);
        setClickDisease(false);
        setClickNursery(false);
        setClickFertilizer(false);
        if(clickPlant){
            clickPlantRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleFertilizerClick = () => {
        setClickFertilizer(!clickFertilizer);
        setClickPlant(false);
        setClickNursery(false);
        setClickDisease(false);
        if(clickFertilizer){
            clickFertilizerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleDiseaseClick = () => {
        setClickDisease(!clickDisease);
        setClickPlant(false);
        setClickNursery(false);
        setClickFertilizer(false);
        if(clickDisease){
            clickDiseaseRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }



    // const handleServClick = (index) => {
    //     console.log(index);
    //     if(index === 0){
    //         return handleNurseryClick;
    //     }
    //     else if(index === 1){
    //         return handlePlantClick;
    //     }
    //     else if(index === 2){
    //         return handleFertilizerClick;
    //     }
    //     else if(index === 3){
    //         return handlePesticideClick;
    //     }

    // }

    // const handlePlantClick = () => {
    //     setClickPlant(true);
    //     setClickNursery(false);
    //     setClickFertilizer(false);
    //     setClickDisease(false);
    // }

    // const handleNurseryClick = () => {
    //     setClickPlant(false);
    //     setClickNursery(true);
    //     setClickFertilizer(false);
    //     setClickDisease(false);
    // }

    // const handleFertilizerClick = () => {
    //     setClickPlant(false);
    //     setClickNursery(false);
    //     setClickFertilizer(true);
    //     setClickDisease(false);
    // }

    // const handlePesticideClick = () => {
    //     setClickPlant(false);
    //     setClickNursery(false);
    //     setClickFertilizer(false);
    //     setClickDisease(true);
    // }



    return (
        <div id='services-body'>
            <div className="container d-flex align-items-center justify-content-center">
                <h1>Our Services</h1>
            </div>
            <div className="row" id="servicelist">
                <Button className="col-sm-3 d-flex flex-column justify-content-center" id='card-btn' data-aos="fade-up" data-aos-delay="200" onClick={handleNurseryClick}>
                        <div className="card" id='card-div'>
                            <div className="card-body">
                                <h3 className="card-title">Find Nursery</h3>
                                <p className="card-text">'Find the nearest nurseries around you!'</p>
                            </div>
                        </div>
                </Button>
                <Button className="col-sm-3 d-flex flex-column justify-content-center" id='card-btn' data-aos="fade-up" data-aos-delay="200" onClick={handlePlantDetailsClick}>
                        <div className="card" id='card-div'>
                            <div className="card-body">
                                <h3 className="card-title">Search plant details</h3>
                                <p className="card-text">View the details of your plant</p>
                            </div>
                        </div>
                </Button>
                <Button className="col-sm-3 d-flex flex-column justify-content-center" id='card-btn' data-aos="fade-up" data-aos-delay="200" onClick={handleFertilizerClick}>
                        <div className="card" id='card-div'>
                            <div className="card-body">
                                <h3 className="card-title">Get amount of fertilizer</h3>
                                <p className="card-text">See how much fertilizers your plant needs!</p>
                            </div>
                        </div>
                </Button>
                <Button className="col-sm-3 d-flex flex-column justify-content-center" id='card-btn' data-aos="fade-up" data-aos-delay="200" onClick={handleDiseaseClick}>
                        <div className="card" id='card-div'>
                            <div className="card-body">
                                <h3 className="card-title">View Disease of Plant</h3>
                                <p className="card-text">Don\'t know the disease of your plant? Click here!</p>
                            </div>
                        </div>
                </Button>
            </div>
          
            <div id='popup-div'>
                {clickNursery && <FindNursery/>}
                {clickPlant && <PlantDetails/>}
                {clickFertilizer && <Fertilizer/>}
                {clickDisease && <ViewPlantDisease/>}
            </div>
            
        </div>
    )
}
