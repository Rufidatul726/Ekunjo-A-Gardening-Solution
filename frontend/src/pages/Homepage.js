import react from 'react';
import PictureCarousel from '../Components/PictureCarousel';
import '../CSSfiles/Homepage.css';
import MyFooter from '../Components/footer';
import MyNavbar from '../Components/navbar';
import OurServices from '../Components/ourservices';

export default function Homepage(){
    const serviceref = react.useRef(null);

    return (
        <div id='home-body'>
            <MyNavbar/>
            <OurServices/>
            <MyFooter/>
        </div>
    );
}
