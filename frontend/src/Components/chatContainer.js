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
      const res = await axios.post(`http://localhost:5656/getmsg`, {
        from: user.id,
        to: currentSelected.user.receiverId
      });
      console.log(res.data);
      setMessages(res.data);
    }
    fetchChat();
  }, [currentSelected, user]);

  const handleChat = async (message) => {
    console.log(message);
    console.log(user.id);
    console.log(currentSelected.user.receiverId);
    const res = await axios.post(`http://localhost:5656/addmsg`, {
      from: user.id,
      to: currentSelected.user.receiverId,
      message: message
    });
    console.log(res.data);
    setMessages([...messages, res.data]);
  }
    
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
      </div>
      <div className="chat-body">
        <div className="chat-message">
          {messages.map((message) => {
            return (
              <div 
              // ref={scrollRef} key={uuidv4()}
              >
                <div
                  className={`message ${
                    message.fromSelf ? "sended" : "recieved"
                  }`}
                >
                  <div className="content ">
                    <p>{message.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-input">
        <ChatInput handleChat={handleChat}/>
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
        overflow-y: scroll;
        padding: 1rem;
        .chat-message {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .message {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 1rem;
                &.sended {
                    justify-content: flex-end;
                }
                &.recieved {
                    justify-content: flex-start;
                }
                .content {
                    width: 40%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    background-color: #4d9767;
                    color: #fff;
                    padding: 0.5rem 1rem;
                    p {
                        font-size: 1rem;
                    }
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