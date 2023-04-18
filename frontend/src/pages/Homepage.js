import {PieChart} from 'react-minimal-pie-chart';
import ViewPlantDetails from './services/viewPlantDetails';
import '../CSSfiles/Homepage.css';
import { Link } from 'react-router-dom';

export default function Homepage(){
    return (
        <div id='homepage-div'>
            <section id="hero" className="d-flex align-items-center justify-content-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="logo me-auto "><a href="#">E-Kunjo</a></h1>
                    <h3>Better Solutions For Your Gardening</h3>
                    <ViewPlantDetails/>
                    </div>
                </div>
                </div>
                <div className="container">
                    <h5>Relative amounts (out of 100) of the essential nutrients required by most plants</h5>
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200" id='pie-div'>
                        <PieChart className='pie-chart'
                            data={[
                                { title: 'Carbon(C)', value: 45, color: '#344E41' },
                                { title: 'Oxygen(O)', value: 45, color: '#3A5A40' },
                                { title: 'Hydrozen', value: 6, color: '#588157' },
                                { title: 'Nitrogen', value: 1.7, color: '#A3B18A' },
                                { title: 'Potassiam(K)', value: 1.2, color: '#775253' },
                                { title: 'Phosphorus(P)', value: 0.7, color: '#351431' },
                            ]}
                            label={({ dataEntry }) => dataEntry.title +' '+ dataEntry.value + '%'}
                            labelPosition={70}
                            labelStyle={{
                                fontSize: '3.5px',
                                fontFamily: 'sans-serif',
                                fill: '#FFFFFF' 
                            }}
                            center={[50, 50]}

                        />;
                        </div>
                    </div>
                </div>
            </section>
            <div id='card-whole-div'>
                <div className="container d-flex align-items-center justify-content-center">
                    <h1>Our Services</h1>
                </div>
                <div className="row">
                    <Link to= '/services/nursery' className="col-sm-4 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="card" id='card-div'>
                            <div class="card-body">
                                <h3 class="card-title">Find Nursery</h3>
                                <p class="card-text">Find the nearest nurseries around you!</p> 
                            </div>
                        </div>
                    </Link>
                    <Link to= '/services/fertilizer' className="col-sm-4 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="card" id='card-div'>
                            <div class="card-body">
                                <h3 class="card-title">Get amount of fertilizer</h3>
                                <p class="card-text">See how much fertilizers your plant needs!</p>  
                            </div>
                        </div>
                    </Link>
                    <Link to= '/services/nursery' className="col-sm-4 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="card" id='card-div'>
                            <div class="card-body">
                                <h3 class="card-title">View Disease of Plant</h3>
                                <p class="card-text">Don't know the disease of your plant? Click here!</p>  
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
