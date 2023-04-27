import '../CSSfiles/Homepage.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import PlantDetails from '../pages/services/viewPlantDetails';
import ViewNursery from '../pages/services/viewNursery';
import ViewFertilizer from '../pages/services/viewFertilizer';
import ViewDisease from '../pages/services/viewDisease';

export default function OurServices(){
    // const [lastClicked, setLastClicked] = React.useState(false);
    // const [clickPlant, setClickPlant] = React.useState(false);
    // const [clickNursery, setClickNursery] = React.useState(false);
    // const [clickFertilizer, setClickFertilizer] = React.useState(false);
    // const [clickDisease, setClickDisease] = React.useState(false);
    const [clickServices, setClickServices] = React.useState(false, false, false, false);
    const [clickPlant, clickNursery, clickFertilizer, clickDisease] = clickServices;

    const clickServiceRef = React.useRef(false, false, false, false);
    const [clickPlantRef, clickNurseryRef, clickFertilizerRef, clickDiseaseRef] = clickServiceRef;

    // const clickPlantRef = React.useRef(false);
    // const clickNurseryRef = React.useRef(false);
    // const clickFertilizerRef = React.useRef(false);
    // const clickDiseaseRef = React.useRef(false);

    const services = [
        {
            title: 'Find Nursery',
            description: 'Find the nearest nurseries around you!',
            link: '/services/nursery',
            refernce: clickNurseryRef
        },
        {
            title: 'Search plant details',
            description: 'View the details of your plant',
            link: '/services/plantinfo',
            refernce: clickPlantRef
            // view: 'clickPlantRef.current.scrollIntoView({ behavior: "smooth" });'
        },
        {
            title: 'Get amount of fertilizer',
            description: 'See how much fertilizers your plant needs!',
            link: '/services/fertilizer',
            refernce: clickFertilizerRef
        },
        {
            title: 'View Disease of Plant',
            description: 'Don\'t know the disease of your plant? Click here!',
            link: '/services/plantdisease',
            refernce: clickDiseaseRef
        }
    ];

    const handleServClick = (index) => {
        console.log(index);
        
    }

    return (
        <div id='services-body'>
            <div className="container d-flex align-items-center justify-content-center">
                <h1>Our Services</h1>
            </div>
            <div className="row">
                {services.map((service, index) => (
                    // <Link to={service.link} className="col-sm-3 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200" key={index}>
                    <Button className="col-sm-3 d-flex flex-column justify-content-center" id='card-btn' data-aos="fade-up" data-aos-delay="200" key={index} onClick={handleServClick(index)}>
                        <div className="card" id='card-div'>
                            <div className="card-body">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </Button>
                     // </Link>
                ))}
            </div>
            {
                clickPlant &&
                <div className="container d-flex align-items-center justify-content-center" ref={clickPlantRef}>
                    <PlantDetails />
                </div>
            }
            {
                clickNursery &&
                <div className="container d-flex align-items-center justify-content-center" ref={clickNurseryRef}>
                    <h1>Find Nursery</h1>
                </div>
            }
            {
                clickFertilizer &&
                <div className="container d-flex align-items-center justify-content-center" ref={clickFertilizerRef}>
                    <h1>Get amount of fertilizer</h1>
                    </div>
            }

        </div>
    )
}
