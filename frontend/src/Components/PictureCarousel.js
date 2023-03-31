import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BgImage from "../images/Background.svg";
import "../CSSfiles/PictureCarousel.css";
import BgImage1 from "../images/Background1.svg";
import BgImage2 from "../images/Background2.svg";
import BgImage3 from "../images/Background3.svg";

function PictureCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>    
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage3}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default PictureCarousel;