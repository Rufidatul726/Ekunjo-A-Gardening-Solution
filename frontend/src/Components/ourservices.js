// import '../CSSfiles/service.css';
import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import PlantDetails from '../pages/services/viewPlantDetails';
import FindNursery from '../pages/services/nursery';
import Fertilizer from '../pages/services/getFertilizerAmount';
import ViewPlantDisease from '../pages/services/viewPlantDisease';
import WelcomeEkunjo from './welcomeEkunjo';

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
        <Container>
            <div className="button-container">
                <Button className="button" onClick={handlePlantDetailsClick}>Plant Details</Button>
                <Button className="button" onClick={handleNurseryClick}>Find Nursery</Button>
                <Button className="button" onClick={handleFertilizerClick}>Get Fertilizer Amount</Button>
                <Button className="button" onClick={handleDiseaseClick}>View Plant Disease</Button>
            </div>
            <div className="current_service">
                {
                    !clickPlant && !clickNursery && !clickFertilizer && !clickDisease &&
                   <WelcomeEkunjo/>
                }
                {clickPlant && <PlantDetails ref={clickPlantRef} />}
                {clickNursery &&
                    <div className="nursery" ref={clickNurseryRef}><FindNursery/></div>
                }
                {clickFertilizer && <Fertilizer ref={clickFertilizerRef} />}
                {clickDisease && <ViewPlantDisease ref={clickDiseaseRef} />}
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 87vh;
    display: grid;
    grid-template-columns: 21% 79%;
    overflow: hidden;
    .button-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        overflow-y: scroll;
        padding-top: 1rem;
        padding-bottom: 1rem;
        .button {
            width: 100%;
            height: 100%;
            background-color: #041d036c;
            border-radius: 5%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            h1 {
                font-size: 1.5rem;
            }
        }
    }
    .current_service {
        width: 100%;
        height: 100%;
        background-color: #041d036c;
        border-radius: 5%;  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        h1 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: 1rem;
        }
        .nursery {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            overflow-y: scroll;
        }
    }
`
