import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BgImage from "../images/Background.svg";
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
                </Carousel.Item>    
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BgImage3}
                        alt="Fourth slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default PictureCarousel;