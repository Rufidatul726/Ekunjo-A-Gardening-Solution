import React, { useEffect } from 'react';
import { useState } from 'react';
import { io } from 'socket.io-client';
import '../CSSfiles/chat.css';
import userImage from '../images/user.png';
import sendImage from '../images/send.png';

export default function UserChat(){
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState(null);
    const [conversation, setConversation] = useState([]);
    const [conversationId, setConversationId]= useState([]);
    const [user, setUser] = useState({});
    const [receiverId, setReceiverId] = useState("");

    useEffect(() => {
        const newSocket = io("ws://localhost:4545");
        setSocket(newSocket);
    }, []);

    useEffect(() => {
        socket?.on("getMessage", (data) => {
            setConversation((prev) => [...prev, data]);
        });
    }, [socket]);    

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userDetails"));
        setUser(user);
        if(user){
            const fetchConversations = async (conversationID) => {
                const res = await fetch('http://localhost:5656/conversation/' + user.id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();
                // console.log(data);
                console.log(data[0].conversationId);
                // setConversation(data);
                setConversationId(data[0].conversationId)
            };
            const fetchreceiver = async () => {
                const res = await fetch('http://localhost:5656/user', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();
                const object = data[0].user;
                const receiverID = object.receiverId;
                setReceiverId(receiverID);
                console.log(receiverID);
            };
            fetchConversations();
            fetchreceiver();
        }
    }, []);

    // useEffect(() => {
    //     console.log(conversationId);
    //     if(conversationId){
    //         const getConMessages = async () => {
    //             const res = await fetch('http://localhost:5656//message/' + conversationId, {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             });
    //             const data = await res.json();
    //             console.log(data);
    //             setConversation(data);
    //         };

    //         getConMessages();
    //     }
    // }, [conversationId]);

    const sendMessage = async(e) => {
        e.preventDefault();

        const senderId = user._id;
        const conversationId = 'new';

        socket?.emit("sendMessage", {
            senderId,
            receiverId,
            message,
        });

        const res = await fetch('http://localhost:5656/message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ conversationId, senderId, message, receiverId }),
        });
        const data = await res.json();
        console.log(data);
        setConversation([...conversation, data]);
        console.log(conversation);
        setMessage("");
    };


    


    return(
      <div className='serviceProvider'>
        <div className='serviceProvider__container'>
            <div className='user__middle'>
                <div className='serviceProvider__middle__container mt-3'>
                    <img src={userImage} alt='user' className='serviceProvider__image mx-4'/>                
                    <div className='ml-14 mx-14'>
                        <div className='serviceProvider__left__name mt-3'>
                            <h3>{user.username}</h3>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                </div>
                <div className='h-75 border w-100 overflow-scroll shadow-sm' style={{scrollBehavior: 'smooth'}}>
                    <div className='serviceProvider__middle__container__chat'>
                        {
                            conversation.map((c) => (
                                <div className={c.sender === user.id ? "serviceProvider__middle__container__chat__right" : "serviceProvider__middle__container__chat__left"}>
                                    {c.message}
                                </div>
                            )) 
                        }
                    </div>
                </div>
                <div className='serviceProvider__middle__container__input'>
                    <input type='text' placeholder='Type a message' className='serviceProvider__middle__container__input__box' 
                        value={message} onChange={(e) => setMessage(e.target.value)} required
                    />
                    <button type='submit' disabled={!message} className='serviceProvider__middle__container__input__button' onClick={sendMessage}  >
                        <img src={sendImage} alt='send' height={30} width={30}/>
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
}