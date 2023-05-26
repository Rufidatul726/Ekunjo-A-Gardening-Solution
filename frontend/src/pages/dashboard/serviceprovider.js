import React from 'react';
import '../../CSSfiles/chat.css';
import userImage from '../../images/user.png';

export default function ServiceProvider(){
    const contacts = [
        { name: "User1"},
        { name: "User2"},
        { name: "User3"},
        { name: "User4"},
        { name: "User5"},
    ];


    return(
      <div className='serviceProvider'>
        <div className='serviceProvider__container'>
            <div className='serviceProvider__left'>
                <div className='flex justify-center items-center'>
                    <img src={userImage} alt='user' className='serviceProvider__image mt-3'/>
                    <div className='serviceProvider__left__name'>
                        <h3>User Name</h3>
                        <p>Online</p>
                    </div>
                </div>
                <hr/>
                <div style={{marginLeft: "20px"}}>
                    <div className='text-start text-lg'>Messages</div>
                    <div className='flex items-center text-start' style={{marginTop: "20px"}}>
                        {contacts.map((contacts) => (
                            <div className='cursor-pointer flex'>
                                <h3 className='text-lg font-bold'>{contacts.name}</h3>
                                <p className='text-sm'>Online</p>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           
            <div className='serviceProvider__middle'>
                <div className='serviceProvider__middle__container mt-3'>
                    <img src={userImage} alt='user' className='serviceProvider__image '/>
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
                    <button className='serviceProvider__middle__container__input__button'>Send</button>
                </div>
            </div>
            <div className='serviceProvider__right'></div>
        </div>
      </div>
    );
}