import React, { useEffect } from 'react';
import { useState } from 'react';
import { io } from 'socket.io-client';
import userImage from '../../images/user.png';
import sendImage from '../../images/send.png';

export default function ServiceProvider(){
    const [socket, setSocket] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [user, setUser] = useState("JSON.parse(localStorage.getItem('userDetails'))");
    const [message, setMessage] = useState("");
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const logginUser = JSON.parse(localStorage.getItem("userDetails"));
        const fetchConversations = async (conversationID) => {
            const res = await fetch("http://localhost:5656/conversation/${logginUser._id}", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setConversation(data);
            console.log('conversation' + data);
        };
        fetchConversations();
    }, []);

    const fetchmessage = async (conversationId) => {
        const res = await fetch("http://localhost:5656/message/${conversationID}", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        body: JSON.stringify({ conversationId, senderId: user.id, message, receiverId: "2" });
        const data = await res.json();
        setConversation(data);
    };

    useEffect(() => {
        setSocket(io("http://localhost:4545"));
        console.log(socket);
    }, [socket]);

    useEffect(() => {
        socket?.emit("addUser", user._id);
        socket?.on("getUsers", (users) => {
            console.log(users);
        });
        socket?.on("getMessage", (data) => {
            console.log(data);
            setConversation((prev) => [...prev, data]);
        }
        );
    }, [socket, user]);

    useEffect(() => {
        const getContacts = async () => {
            const res = await fetch("http://localhost:5656/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setContacts(data);
            console.log(data);
        };
        getContacts();
    }, []);

    const sendMessage = async(e) => {
        e.preventDefault();
        console.log("sendMessage");
        console.log(message);
        setConversation([...conversation, { sender: user.id, receiver: "2", message: message }]);
        setMessage("");

        const receiverId = "2";
        const senderId = user.id;
        const conversationId = "1";

        socket?.emit("sendMessage", {
            senderId: user.id,
            receiverId: "2",
            text: message,
        });

        const res = await fetch("http://localhost:5656/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ conversationId, senderId, message, receiverId }),
        });
        const data = await res.json();
        setConversation([...conversation, data]);
        e.target.elements.message.value = "";
    };


    return(
      <div className='serviceProvider'>
        <div className='serviceProvider__container'>
            <div className='serviceProvider__left overflow-auto'>
                <div className='flex justify-center items-center'>
                    <img src={userImage} alt='user' className='serviceProvider__image mt-3'/>
                    <div className='serviceProvider__left__name'>
                        <h3>{user.name}</h3>
                        <p>{user.phone}</p>
                    </div>
                </div>
                <hr/>
                <div style={{marginLeft: "20px"}}>
                    <div className='text-start text-lg'>Messages </div>
                    <div className='flex items-center text-start' style={{marginTop: "20px"}} >
                        {contacts.length >0
                            ? (
                                contacts.map((c) => (
                                    <div className='flex items-center' onClick={() => fetchmessage(c.conversationId)}>
                                        <img src={userImage} alt='user' className='serviceProvider__image mt-3'/>
                                        <div className='serviceProvider__left__name'>
                                            <h3>{c.name}</h3>
                                            <p>{c.phone}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <span className='text-lg font-bold'>No Contacts</span>
                            )
                        }
                        
                    </div>
                </div>
            </div>
           
            <div className='serviceProvider__middle'>
                <div className='serviceProvider__middle__container mt-3'>
                    <img src={userImage} alt='user' className='serviceProvider__image ml-4'/>                
                    <div className='ml-14 mx-14'>
                        <div className='serviceProvider__left__name mt-3 '>
                            <h3>User Name</h3>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
                <div className='h-75 border w-100 overflow-auto shadow-sm'>
                    <div className='serviceProvider__middle__container__chat'>
                        {conversation.length === 0 ? (
                        conversation.map((c) => (
                            <div className={c.sender === user.id ? "serviceProvider__middle__container__chat__right" : "serviceProvider__middle__container__chat__left"}>
                                {c.message}
                            </div>))    ) : (
                            <span className='serviceProvider__middle__container__chat__start'>Start a conversation</span>
                        )
                        }
                    </div>
                </div>
                <div className='serviceProvider__middle__container__input'>
                    <input type='text' placeholder='Type a message' className='serviceProvider__middle__container__input__box' 
                        value={message} onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type='submit' disabled={!message} className='serviceProvider__middle__container__input__button' onClick={sendMessage}>
                        <img src={sendImage} alt='send' height={30} width={30}/>
                    </button>
                </div>
            </div>
            {/* <div className='serviceProvider__right'></div> */}
        </div>
      </div>
    );
}