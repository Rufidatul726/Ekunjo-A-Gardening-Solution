import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logout from './logout';
import axios from 'axios';
import ChatInput from './chatInput';

const ChatContainer = ({currentSelected, user}) => {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState({});     //[currentSelected.user.username, user.username].sort().join('_')
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchChat = async () => {
      // const res = await axios.get(``);
      // console.log(res.data);
      // setMessages(res.data);
      setMessages([
        {
          "sender": "sachin",
          "receiver": "sachin",
          "message": "Hey, how are you?",
          "timestamp": "2021-06-20T12:15:00.000Z",
          "read": true
        },
        {
          "sender": "sachin",
          "receiver": "sachin",
          "message": "Hey, how are you?",
          "timestamp": "2021-06-20T12:15:00.000Z",
          "read": true
        },
        {
          "sender": "sachin",
          "receiver": "sachin",
          "message": "Hey, how are you?",
          "timestamp": "2021-06-20T12:15:00.000Z",
          "read": true
        },
        {
          "sender": "sachin",
          "receiver": "sachin",
          "message": "Hey, how are you?",
          "timestamp": "2021-06-20T12:15:00.000Z",
          "read": true
        },
        {
          "sender": "sachin",
          "receiver": "sachin",
          "message": "Hey, how are you?",
          "timestamp": "2021-06-20T12:15:00.000Z",
          "read": true
        },
      ]);
    }
    fetchChat();
  }, [user.username]);
    
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          {/* <img src={currentSelected.image} alt="user" /> */}
          <div className="user-info">
            <h3>{currentSelected.user.username}</h3>
            <p>Online {currentSelected.status}</p>
          </div>
        </div>
        <Logout user={user}/>
      </div>
      <div className="chat-body">
        <div className="chat-message">
          {
            messages.map((message, index) => (
              <div className={`message ${message.sender === user.username && 'sender'}`} key={index}>
                <p>{message.message}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="chat-input">
        <ChatInput message={message} setMessage={setMessage} chat={chat}/>
      </div>
    </Container>
  )
}

export default ChatContainer

const Container = styled.div`
    width: 100%;
    height: 100%;
    .chat-header {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        background-color: #fff;
        border-radius: 15px 15px 0 0;
        .user-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                height: 50%;
                border-radius: 50%;
            }
            .user-info {
                margin-left: 1rem;
                h3 {
                    font-size: 1.5rem;
                    color: #4d9767;
                    font-weight: 500;
                }
                p {
                    font-size: 1rem;
                    color: #8e8e8e;
                }
            }
        }
    }
    .chat-body {
        width: 100%;
        height: 70%;
        background-color: #fff;
        border-radius: 0 0 15px 15px;
        .chat-message {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            padding: 1rem;
            .message {
                width: 100%;
                height: 15%;
                background-color: #4d9767;
                border-radius: 15px;
                padding: 1rem;
                p {
                    color: #fff;
                }
            }
        }
    }
    .chat-input {
        width: 100%;
        height: 15%;
        background-color: #fff;
        border-radius: 0 0 15px 15px;
    }
`
