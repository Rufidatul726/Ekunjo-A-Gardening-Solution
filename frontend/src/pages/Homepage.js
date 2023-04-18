import PictureCarousel from '../Components/PictureCarousel';
import Sidenavbar from '../Components/Sidenavbar';
import {PieChart} from 'react-minimal-pie-chart';
import '../CSSfiles/Homepage.css';

export default function Homepage(){
    return (
        <div id='homepage-div'> 
            <Sidenavbar />
            <section id="hero" className="d-flex align-items-center justify-content-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="logo me-auto"><a href="#">E-Kunjo</a></h1>
                    <h1>Better Solutions For Your Gardening</h1>
                    </div>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200" id='pie-div'>
                        <PieChart style={{fontSize: '3.5px', color: 'white'}}
                            data={[
                                { title: 'Carbon(C)', value: 45, color: '#E38627' },
                                { title: 'Oxygen(O)', value: 45, color: '#C13C37' },
                                { title: 'Hydrozen', value: 6, color: '#6A2135' },
                                { title: 'Nitrogen', value: 1.5, color: '#E38627' },
                                { title: 'Potassiam(K)', value: 1, color: '#C13C37' },
                                { title: 'Phosphorus(P)', value: 0.2, color: '#6A2135' },
                            ]}
                        />;
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                           
                        </div>
                    </div>
                </div>
            
                

            </section>
        </div>
    );
}

{/* <div classNameName='Homepage-div'>    
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <SideNavbar />
                    </Col>
                    <Col md={10} classNameName="slideshow-container">
                        <div classNameName="slide slide-1"></div>
                        <div classNameName="slide slide-2"></div>
                        <div classNameName="slide slide-3"></div>
                        <h1>Welcome to my homepage!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            euismod, sapien at efficitur ultricies, sapien odio eleifend
                            purus, sit amet congue ligula urna vel nunc. Fusce pharetra
                            efficitur sapien ut laoreet. Integer lobortis ac odio eget
                            convallis. Praesent ut ex ac urna feugiat rhoncus. Nulla nec
                            consectetur ex. Aenean euismod tristique justo eget imperdiet.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div> */}