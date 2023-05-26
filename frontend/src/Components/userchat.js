import React from 'react';
import { useState } from 'react';
import userImage from '../images/user.png';
import sendImage from '../images/send.png';
import '../CSSfiles/chat.css';

export default function UserChat() {
    const contacts = [
        { name: "User1"},
        { name: "User2"},
        { name: "User3"},
        { name: "User4"},
        { name: "User5"},
    ];

    //const [user, setUser] = useState("JSON.parse(localStorage.getItem('userDetails'))");
    // const [conversation, setConversation] = useState([]);
    const [user, setUser] = useState(
        {
            name: "User Name",
            id: "1",
            phone: "1234567890",
        }
    );

    const [conversation, setConversation] = useState([
        { sender: "1", receiver: "2", message: "Hello" },
        { sender: "2", receiver: "1", message: "Hi" },
        { sender: "1", receiver: "2", message: "How are you?" },
        { sender: "2", receiver: "1", message: "I'm fine" }
    ]);

    return (
        <div className='serviceProvider'>
        <div className='serviceProvider__container'>
            <div className='serviceProvider__middle'>
                <div className='serviceProvider__middle__container mt-3'>
                    <img src={userImage} alt='user' className='serviceProvider__image ml-4'/>
                    <div className='ml-8 '>
                        <div className='serviceProvider__left__name mt-3'>
                            <h3>User Name</h3>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
                <div className='h-75 border w-100 overflow-auto shadow-sm'>
                    <div className='serviceProvider__middle__container__chat'>
                       <div className='serviceProvider__middle__container__chat__left'>
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
                        </div>
                    </div>
                </div>
                <div className='serviceProvider__middle__container__input'>
                    <input type='text' placeholder='Type a message' className='serviceProvider__middle__container__input__box'/>
                    <button className='serviceProvider__middle__container__input__button'>
                        <img src={sendImage} alt='send' height={30} width={30}/>
                    </button>
                </div>
            </div>
            <div className='serviceProvider__right'></div>
        </div>
      </div>
    )
}