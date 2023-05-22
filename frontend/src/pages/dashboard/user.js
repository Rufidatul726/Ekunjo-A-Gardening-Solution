import react from 'react';
import '../../CSSfiles/user.css';
import OurServices from '../../Components/ourservices';
import ChatImg from '../../images/chat.jpg'

export default function User() {
    const [user, setUser] = react.useState(null);
    const [plants, setPlants] = react.useState([]);
    const [newPlant, setNewPlant] = react.useState('');
    const [newMessage, setNewMessage] = react.useState('');
    const [messages, setMessages] = react.useState([]);
    const [newReply, setNewReply] = react.useState('');
    const [reply, setReply] = react.useState([]);

    const [byreply, setByReply] = react.useState([
        {'who':'user', 'message':'Hello'},
        {'who':'bot', 'message':'Hi, how can I help you?'},
        {'who':'user', 'message':'I want to know about my plants'},
        {'who':'bot', 'message':'Sure, what do you want to know?'},
        {'who':'user', 'message':'My plants are not growing well'},
        {'who':'bot', 'message':'What is the name of your plant?'},
        {'who':'user', 'message':'Aloe Vera'},
        {'who':'bot', 'message':'What is the problem?'},
        {'who':'user', 'message':'The leaves are turning yellow'},
        {'who':'bot', 'message':'It is probably due to overwatering'},
        {'who':'user', 'message':'What should I do?'},
        {'who':'bot', 'message':'Reduce the amount of water you give to your plant'},
        {'who':'user', 'message':'Thank you'},
        {'who':'bot', 'message':'You are welcome'}
    ]);
    
    const serviceref = react.useRef(null);
    const chatref = react.useRef(null);

    const handleServiceClick = () => {
        serviceref.current.scrollIntoView({ behavior: "smooth" });
    }
    

    react.useEffect(() => {
        // const user = JSON.parse(localStorage.getItem('user'));
        // setUser(user);
        setUser('Aurchey');
    }, []);

    react.useEffect(() => {
        // const plants = JSON.parse(localStorage.getItem('plants'));
        // setPlants(plants);
        setPlants(['Aloe Vera', 'Basil','Rosemary']);
    }, []);

    // const handlePlantClick = () => {
    //     const newPlant = prompt('Enter plant name');
    //     const newPlants = [...plants, newPlant];
    //     // localStorage.setItem('plants', JSON.stringify(newPlants));
    //     setPlants(newPlants);
    // }

    const handlePlantSubmit = (event) => {
        event.preventDefault();
        const newPlants = [...plants, newPlant];
        // localStorage.setItem('plants', JSON.stringify(newPlants));
        setPlants(newPlants);
        setNewPlant('');
    }

    const handleInputChange = (event) => {
        setNewPlant(event.target.value);
    }

    const handleChatClick = (event) => {
        chatref.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleConvoClick = (event) => {
        setNewMessage(event.target.value);
        setMessages([...messages, event.target.value]);
        setNewMessage('');
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
                        <img src='ChatImg' alt='Click Here'/>
                        {/* <textarea className='form-control' rows={3}  placeholder='Enter your question' value={newMessage}/> */}
                </div>
            </div>
            <div className="chat" ref={chatref}>
                {
                    <div className="chat-message">
                       
                    </div>
                    ?
                    <div className="chat-message">
                         Waiting for a service provider to join the chat.....
                        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" />
                    </div>
                    :
                    <div className="chat-message">
                        {byreply.map((reply, index) => (
                            <div key={index}>
                                {reply.who === 'user' && (
                                    <div className="chat-message">{messages}</div>
                                )}
                                {reply.who === 'bot' && (
                                    <div className="chat-message bot">{reply.message}</div>
                                )}
                            </div>
                        ))}
                    </div>

                }
            </div>

            <div className="services" ref={serviceref}>
                <OurServices />
            </div>
        </div>
    )
}