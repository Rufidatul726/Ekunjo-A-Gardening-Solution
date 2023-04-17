
import SideNavbar from '../Components/sidenavbar';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSSfiles/Homepage.css';

export default function Homepage(){
    return (
        <div className='Homepage-div'>    
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <SideNavbar />
                    </Col>
                    <Col md={10} className="slideshow-container">
                        <div className="slide slide-1"></div>
                        <div className="slide slide-2"></div>
                        <div className="slide slide-3"></div>
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
        </div>
    );
}