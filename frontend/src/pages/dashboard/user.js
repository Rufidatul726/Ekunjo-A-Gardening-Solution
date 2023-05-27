import react, { useEffect } from 'react';
import '../../CSSfiles/user.css';
import OurServices from '../../Components/ourservices';
import Chat from '../../Components/userchat';
import { Navigate } from 'react-router-dom';

export default function User() {
    const [user, setUser] = react.useState(null);
    const [plants, setPlants] = react.useState([]);
    const [newPlant, setNewPlant] = react.useState('');
    const [clickService, setClickService] = react.useState(false);
    const [clickChat, setClickChat] = react.useState(false);

    const [isLoggedin, setIsLoggedin] = react.useState(false);

    useEffect (() => {
        const token = localStorage.getItem(token);
        if(token){
            setIsLoggedin(!isLoggedin);
        }
        else{
            Navigate('/login');
        }
    }, []);

    
    
    const serviceref = react.useRef(null);
    const chatref = react.useRef(null);

    const handleServiceClick = () => {
        setClickChat(false);
        setClickService(!clickService);
        serviceref.current.scrollIntoView({ behavior: "smooth" });
    }
    

    react.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        setUser(user);
    }, []);

    react.useEffect(() => {
        const plants = JSON.parse(localStorage.getItem('plants'));
        setPlants(plants);
    }, []);

    const handlePlantClick = () => {
        const newPlant = prompt('Enter plant name');
        const newPlants = [...plants, newPlant];
        localStorage.setItem('plants', JSON.stringify(newPlants));
        setPlants(newPlants);
    }

    const handlePlantSubmit = (event) => {
        event.preventDefault();
        const newPlants = [...plants, newPlant];
        ocalStorage.setItem('plants', JSON.stringify(newPlants));
        setPlants(newPlants);
        setNewPlant('');
    }

    const handleInputChange = (event) => {
        setNewPlant(event.target.value);
    }

    const handleChatClick = (event) => {
        setClickChat(!clickChat);
        setClickService(false);
        chatref.current.scrollIntoView({ behavior: "smooth" });
    }


        return (
            <div className="profile-dashboard d-flex flex-column align-items-center justify-content-center">
                <h1>Welcome {user}</h1>

                {plants.length > 0 && (
                    <div className="plant-list">
                        <h2>Your plants are:</h2>
                        <ul>
                            {plants.map((plant, index) => (
                                <li key={index}>{plant}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="dashboard-components text-align-center">
                    <div className="dashboard-component btn btn-outline">
                        <form onSubmit={handlePlantSubmit} className="form-inline">
                            <label htmlFor="newPlant"><h2>Add a new plant</h2></label>
                            <input type="text" placeholder="Enter plant name"  value={newPlant} onChange={handleInputChange}/>
                        </form>
                    </div>
                    <div className="dashboard-component btn btn-outline" onClick={handleServiceClick}>
                        <h2>Get Our Services</h2>
                    </div>
                    <div className="dashboard-component btn btn-outline" onClick={handleChatClick}>
                            <label className='form-label'><h2>Chat with Us</h2></label>
                            {/* <img src='ChatImg' alt='Click Here'/> */}
                            {/* <textarea className='form-control' rows={3}  placeholder='Enter your question' value={newMessage}/> */}
                    </div>
                </div>
                <div className="chat" ref={chatref}>
                    {
                        clickChat && <Chat/>

                    }
                </div>

                <div className="services" ref={serviceref}>
                    {
                        clickService && <OurServices />
                    }
                </div>
            </div>
        );
    
}