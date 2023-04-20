import '../CSSfiles/Homepage.css';
import { Link } from 'react-router-dom';

export default function OurServices(){
    
    return (
        <div id='services-body'>
            <div className="container d-flex align-items-center justify-content-center"
            >
                <h1>Our Services</h1>
            </div>
            <div className="row">
                <Link to= '/services/nursery' className="col-sm-3 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="card" id='card-div'>
                        <div class="card-body">
                            <h3 class="card-title">Find Nursery</h3>
                            <p class="card-text">Find the nearest nurseries around you!</p> 
                        </div>
                    </div>
                </Link>
                <Link to= '/services/plantinfo' className="col-sm-3 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="card" id='card-div'>
                        <div class="card-body">
                            <h3 class="card-title">Search plant details</h3>
                                <p class="card-text">View the details of your plant</p>  
                        </div>
                    </div>
                </Link>
                <Link to= '/services/fertilizer' className="col-sm-3 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="card" id='card-div'>
                        <div class="card-body">
                            <h3 class="card-title">Get amount of fertilizer</h3>
                            <p class="card-text">See how much fertilizers your plant needs!</p> 
                        </div>
                    </div>
                </Link>
                <Link to= '/services/plantdisease' className="col-sm-3 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="card" id='card-div'>
                        <div class="card-body">
                            <h3 class="card-title">View Disease of Plant</h3>
                            <p class="card-text">Don't know the disease of your plant? Click here!</p>  
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );

}