import react, { useEffect } from 'react';
import '../../CSSfiles/user.css';
import OurServices from '../../Components/ourservices';
import Chat from '../../Components/chat';
import UserNav from '../../Components/usernav';
// import Chat from '../../Components/userchat';

export default function User() {
    const [user, setUser] = react.useState({});
    // const [plants, setPlants] = react.useState([]);
    // const [newPlant, setNewPlant] = react.useState('');
    const [clickService, setClickService] = react.useState(false);
    const [clickChat, setClickChat] = react.useState(false);
    
    
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
        console.log(user.username);
    }, []);

    // react.useEffect(() => {
    //     const plants = JSON.parse(localStorage.getItem('plants'));
    //     setPlants(plants);
    //     if(plants === null){
    //         const temp = ['lily', 'rose', 'tulip'];
    //         localStorage.setItem('plants', JSON.stringify(temp));
    //         setPlants(temp);
    //     }
    // }, []);

    // const handlePlantClick = () => {
    //     const newPlant = prompt('Enter plant name');
    //     const newPlants = [...plants, newPlant];
    //     localStorage.setItem('plants', JSON.stringify(newPlants));
    //     setPlants(newPlants);
    // }

    // const handlePlantSubmit = (event) => {
    //     event.preventDefault();
    //     const newPlants = [...plants, newPlant];
    //     localStorage.setItem('plants', JSON.stringify(newPlants));
    //     setPlants(newPlants);
    //     setNewPlant('');
    // }

    // const handleInputChange = (event) => {
    //     setNewPlant(event.target.value);
    // }

    // const handleChatClick = (event) => {
    //     setClickChat(!clickChat);
    //     setClickService(false);
    //     chatref.current.scrollIntoView({ behavior: "smooth" });
    // }


        return (
            <div className="profile-dashboard d-flex flex-column align-items-center justify-content-center">
                <UserNav />
                <h1>Welcome {user.username}</h1>
                {/* {plants.length > 3 ? 
                    <div className="plant-list">
                        <h2>Your plants are:</h2>
                        <ul>
                            {plants.map((plant, index) => (
                               index > 3 &&  <li key={index}>{plant}</li>
                            ))}
                        </ul>
                    </div>
                 :
                    <div className="dashboard-components text-align-center">
                        You have no plants yet. Add a plant to get started.
                    </div> 
                
                } */}

                {/* <div className="dashboard-components text-align-center">
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
                    </div>
                </div> */}
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