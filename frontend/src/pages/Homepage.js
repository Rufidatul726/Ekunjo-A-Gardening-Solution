import PictureCarousel from '../Components/PictureCarousel';
import '../CSSfiles/Homepage.css';
import MyFooter from '../Components/footer';
import MyNavbar from '../Components/navbar';
import OurServices from '../Components/ourservices';

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
                </section>
                <div id='card-whole-div'>
                    <OurServices/>
                </div>
            </div>
         <MyFooter/>
        </div>
    );
}
