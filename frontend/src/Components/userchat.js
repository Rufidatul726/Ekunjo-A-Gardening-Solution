import React, { useEffect } from 'react';
import { useState } from 'react';
import '../CSSfiles/chat.css';
import userImage from '../images/user.png';
import sendImage from '../images/send.png';

export default function UserChat(){
    //const [user, setUser] = useState("JSON.parse(localStorage.getItem('userDetails'))");
    const [message, setMessage] = useState("");
    const [conversation, setConversation] = useState(
        [
            { sender: "1", receiver: "2", message: "Hello" },
            { sender: "2", receiver: "1", message: "Hi" },
            { sender: "1", receiver: "2", message: "How are you?" },
            { sender: "2", receiver: "1", message: "I'm fine" }
        ]
    );
    const [user, setUser] = useState(
        {
            name: "User Name",
            id: "1",
            phone: "1234567890",
        }
    );

    // useEffect(() => {
    //     const logginUser = JSON.parse(localStorage.getItem("userDetails"));
    //     const fetchConversations = async (conversationID) => {
    //         const res = await fetch("http://localhost:5000/api/conversations/${logginUser.id}", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         const data = await res.json();
    //         setConversation(data);
    //     };
    //     fetchConversations();
    // }, []);

    // const fetchmessage = async (conversationID) => {
    //     const res = await fetch("http://localhost:5000/api/messages/${conversationID}", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     body: JSON.stringify({ conversationID, senderID: user.id, message, receiverID });
    //     const data = await res.json();
    //     setConversation(data);
    // };

    const fetchmessage = () => {
        console.log("fetchmessage");
    };

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("sendMessage");
        console.log(message);
        setConversation([...conversation, { sender: user.id, receiver: "2", message: message }]);
        setMessage("");

        
        // const res = await fetch("http://localhost:5000/api/messages", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ conversationID, senderID, message, receiverID }),
        // });
        // const data = await res.json();
        // setConversation([...conversation, data]);
        // e.target.elements.message.value = "";
    };


    return(
      <div className='serviceProvider'>
        <div className='serviceProvider__container'>
            <div className='user__middle'>
                <div className='serviceProvider__middle__container mt-3'>
                    <img src={userImage} alt='user' className='serviceProvider__image ml-4'/>                
                    <div className='ml-14 mx-14'>
                        <div className='serviceProvider__left__name mt-3 '>
                            <h3>User Name</h3>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
                <div className='h-75 border w-100 overflow-scroll shadow-sm'
                    style={{scrollBehavior: 'smooth'}}
                >
                    <div className='serviceProvider__middle__container__chat'>
                       {/* <div className='serviceProvider__middle__container__chat__left'>
                            Hii!
                        </div>
                        <div className='serviceProvider__middle__container__chat__right'>
                            Hello!
                        </div>
                        <div className='serviceProvider__middle__container__chat__left'>
                            Welcome to Ekunjo support! How can I help you?
                        </div>
                        <div className='serviceProvider__middle__container__chat__right'>
                            I am facing problems with my mango tree. I tried a lot of things but nothing worked. Can you help me?
                        </div>
                        <div className='serviceProvider__middle__container__chat__left'>
                            Sure! Please send me the pictures of your tree.
                        </div>
                        <div className='serviceProvider__middle__container__chat__right'>
                            <img src={userImage} alt='user' className='serviceProvider__image '/>
                        </div> */}
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
            {/* <div className='serviceProvider__right'></div> */}
        </div>
      </div>
    );
}