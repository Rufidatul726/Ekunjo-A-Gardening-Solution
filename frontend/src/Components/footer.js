import { Link } from 'react-router-dom';
import ContactUs from '../images/ContactUs.svg'
import '../CSSfiles/footer.css';

export default function MyFooter(){
    return (        
        <div class="mt-5" id='footer-div'>
            <footer class="d-flex justify-content-end" style={{backgroundColor: "transparent"}}>
                <Link to={'/register'}> 
                    <img src={ContactUs} 
                        alt='Contact Us' 
                        id='contact-us-img'
                        height={70}
                    />
                </Link>
            </footer>
        </div>        
    )
}