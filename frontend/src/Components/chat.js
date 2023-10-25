import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Contacts from '../Components/contacts';
import Welcome from '../Components/welcome';
import ChatContainer from './chatContainer';

const Chat = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [user, setUser] = useState({});
    const [currentSelected, setCurrentSelected] = useState({});

    const handleCurrentSelected = (chat) => {
        setCurrentSelected(chat);
    }


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        if(!user){
            navigate('/login');
        }
        setUser(user);
    }, [navigate]);

    useEffect(() => {
        const fetchContacts = async () => {
            const res = await axios.get(`http://localhost:5656/users`);
            setContacts(res.data);
        }
        fetchContacts();
    }, []);
    

    return (
        <Container>
            <div className="container">
                <Contacts contacts={contacts} user={user} changeCurrentSelected={handleCurrentSelected}/>
                {
                    currentSelected.user ? 
                    <ChatContainer currentSelected={currentSelected} user={user}/> : 
                    <Welcome user={user}/>
                }
            </div>
        </Container>
    )
}

export default Chat;


const Container = styled.div`
    width: 100%;
    height: 100vh ;
    background-color: #4d97676c;
    border-radius: 5%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: white;
    .container {
        width: 90%;
        height: 85%;
        background-color: #ffffff1f;
        display: grid;
        grid-template-columns: 25% 75%;
        @media (max-width: 768px) {
            grid-template-columns: 35% 65%;
        }
    }
`;