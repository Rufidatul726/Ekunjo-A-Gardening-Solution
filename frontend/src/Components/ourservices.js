import '../CSSfiles/service.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import PlantDetails from '../pages/services/viewPlantDetails';
import FindNursery from '../pages/services/nursery';
import Fertilizer from '../pages/services/getFertilizerAmount';
import ViewPlantDisease from '../pages/services/viewPlantDisease';

export default function OurServices() {

    const [clickPlant, setClickPlant] = React.useState(null);
    const [clickNursery, setClickNursery] = React.useState(false);
    const [clickFertilizer, setClickFertilizer] = React.useState(false);
    const [clickDisease, setClickDisease] = React.useState(false);

    const clickPlantRef = React.useRef(null);
    const clickNurseryRef = React.useRef(null);
    const clickFertilizerRef = React.useRef(null);
    const clickDiseaseRef = React.useRef(null);

    const handleNurseryClick = () => {
        setClickNursery(!clickNursery);
        setClickPlant(false);
        setClickDisease(false);
        setClickFertilizer(false);
        if (clickNursery) {
            console.log(clickNurseryRef.current);
            clickNurseryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handlePlantDetailsClick = () => {
        setClickPlant(!clickPlant);
        setClickDisease(false);
        setClickNursery(false);
        setClickFertilizer(false);
        if (clickPlant) {
            clickPlantRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleFertilizerClick = () => {
        setClickFertilizer(!clickFertilizer);
        setClickPlant(false);
        setClickNursery(false);
        setClickDisease(false);
        if (clickFertilizer) {
            clickFertilizerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleDiseaseClick = () => {
        setClickDisease(!clickDisease);
        setClickPlant(false);
        setClickNursery(false);
        setClickFertilizer(false);
        if (clickDisease) {
            clickDiseaseRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }




    return (
        <div className='row mt-5'>
            <div className='col d-flex flex-column'>
                <Button className="col-md-4 button-36" data-aos="fade-up" data-aos-delay="200" onClick={handleNurseryClick}>
                    <h3 className="card-title">Find Nursery</h3>
                </Button>
                <Button className="col-md-4 button-36 mt-3" data-aos="fade-up" data-aos-delay="200" onClick={handlePlantDetailsClick}>
                    <h3 className="card-title">Search plant details</h3>
                </Button>
                <Button className="col-md-4 button-36 mt-3" data-aos="fade-up" data-aos-delay="200" onClick={handleFertilizerClick}>
                    <h3 className="card-title">Get amount of fertilizer</h3>
                </Button>
                <Button className="col-md-4 button-36 mt-3" data-aos="fade-up" data-aos-delay="200" onClick={handleDiseaseClick}>
                    <h3 className="card-title">View Disease of Plant</h3>
                </Button>
            </div>

            <div className='col'>
                {clickNursery &&
                    <div ref={clickNurseryRef}>
                        <FindNursery />
                    </div>
                }
                {clickPlant &&
                    <div ref={clickPlantRef}> <PlantDetails /> </div>
                }
                {clickFertilizer &&
                    <div ref={clickFertilizerRef}> <Fertilizer /> </div>
                }
                {clickDisease &&
                    <div ref={clickDiseaseRef}> <ViewPlantDisease /> </div>
                }
            </div>

        </div>
    )
}
