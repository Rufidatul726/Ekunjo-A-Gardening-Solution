import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Contacts = ({contacts, user, changeCurrentSelected}) => {
    const [currentSelected, setCurrentSelected] = useState({});
    
    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    const handleCurrentSelected = (index, chat) => {
        setCurrentSelected(index);
        changeCurrentSelected(chat);
    }

  return (
    <Container>
        <div className="contacts">
            {contacts.map((contact, index) => (
                <div className="contact" key={index} onClick={() => handleCurrentSelected(index, contact)}>
                    <h1>{contact.user.username}</h1>
                </div>
            ))}
        </div>
        <div className="current_user">
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
        </div>
    </Container>
  )
}

export default Contacts

const Container = styled.div`
    display: grid;
    grid-template-columns: 100%;
    overflow: hidden;
    color: white;
    .contacts {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        overflow-y: scroll;
        padding-top: 1rem;
        padding-bottom: 1rem;
        .contact {
            width: 100%;
            height: 100%;
            background-color: #041d036c;
            border-radius: 5%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            h1 {
                font-size: 1.5rem;
            }
        }
    }
    .current_user {
        width: 100%;
        height: 100%;
        background-color: #041d036c;
        border-radius: 5%;  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        h1 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: 1rem;
        }
    }
`;

