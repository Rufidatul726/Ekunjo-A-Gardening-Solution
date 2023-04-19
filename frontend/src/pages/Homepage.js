import PictureCarousel from '../Components/PictureCarousel';
import '../CSSfiles/Homepage.css';
import { Link } from 'react-router-dom';
import MyFooter from '../Components/footer';
import MyNavbar from '../Components/navbar';

export default function Homepage(){
    return (
        <div id='home-body'>
            <MyNavbar/>
        <div id='homepage-div'>
            <section id="hero" className=" d-flex flex-column align-items-center justify-content-center">

                <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
                            id='carousel-div'
                        >
                            <PictureCarousel/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200" id='title-div'>
                    <h1>Your one stop solution for your gardening needs</h1>
                    <br/>
                    <h5>From getting general information about plants to detecting diseases, and many more!</h5>
                    </div>
                </div>
                </div>
                {/* <div className="container">
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
                </div> */}
            </section>
            <div id='card-whole-div'>
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
            </div>
         <MyFooter/>
        </div>
    );
}
