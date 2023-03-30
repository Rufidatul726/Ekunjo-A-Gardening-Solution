import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import PictureCarousel from '../Components/PictureCarousel';

export default function Homepage(){
    return (
        <div className='Homepage-div'>
            <PictureCarousel />
            {/* <Container className='header-Container'>
                <h1>E-Kunjo</h1>
                <h3>A GOOD HELP FOR PLANT-LOVERS</h3>
            </Container>
            <Button className='btn btn-primary' id='Explore-btn' >Login</Button> */}
        </div>
    );
}