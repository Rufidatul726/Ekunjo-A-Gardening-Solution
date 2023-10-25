import React , {useState} from 'react';
import styled from 'styled-components';

const ChatInput = ({handleChat}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(message.length > 0){
            handleChat(message);
            setMessage('');
        }
    }

  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Send</button>
        </form>
    </Container>
  )
}

export default ChatInput

const Container = styled.div`
    width: 100%;
    height: 100%;
    form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        input {
            width: 80%;
            height: 50%;
            background-color: #fff;
            border-radius: 15px;
            border: none;
            outline: none;
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
        button {
            width: 15%;
            height: 50%;
            border-radius: 15px;
            border: none;
            outline: none;
            background-color: #4d9767;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
        }
    }
`