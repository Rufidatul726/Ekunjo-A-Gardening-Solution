import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
import styled from "styled-components";
// import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "./chatContainer";
import Contacts from "./contacts";
import Welcome from "./welcome";
import "../../../CSSfiles/chat.css";

export default function Chat() {
//   const navigate = useNavigate();
//   const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

//   useEffect(async () => {
//     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/login");
//     } else {
//       setCurrentUser(
//         await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         )
//       );
//     }
//   }, []);
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentUser._id);
//     }
//   }, [currentUser]);

//   useEffect(async () => {
//     if (currentUser) {
//       if (currentUser.isAvatarImageSet) {
//         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//         setContacts(data.data);
//       } else {
//         navigate("/setAvatar");
//       }
//     }
//   }, [currentUser]);

useEffect(() => {
    setCurrentUser({
        _id: "1",
        name: "Bonny Bae",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        chats: [
            {
                _id: "1",
                sender: "1",
                receiver: "2",
                message: "Hello",
                createdAt: "2021-08-01T12:00:00.000Z",
            },
            {
                _id: "2",
                sender: "2",
                receiver: "1",
                message: "Hi",
                createdAt: "2021-08-01T12:00:00.000Z",
            },
            {
                _id: "3",
                sender: "1",
                receiver: "3",
                message: "Welcome to E-kunjo",
                createdAt: "2021-08-01T12:00:00.000Z",
            },
        ],
    });
}, [currentUser]);

useEffect(() => {
    setContacts([
        {
            _id: "1", 
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            chats: [
                {
                    _id: "1",
                    sender: "1",
                    receiver: "2",
                    message: "Hello",
                    createdAt: "2021-08-01T12:00:00.000Z",
                },
                {
                    _id: "2",
                    sender: "2",
                    receiver: "1",
                    message: "Hi",
                    createdAt: "2021-08-01T12:00:00.000Z",
                },
            ],
        },
        {
            _id: "2",
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            chats: [
                {
                    _id: "1",
                    sender: "1",
                    receiver: "2",
                    message: "Hello",
                    createdAt: "2021-08-01T12:00:00.000Z",
                },
                {
                    _id: "2",
                    sender: "2",
                    receiver: "1",
                    message: "How can I help you?",
                    createdAt: "2021-08-01T12:00:00.000Z",
                },
            ],
        },
        {
            _id: "3",
            name: "Jane Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            chats: [
                {
                    _id: "1",
                    sender: "1",
                    receiver: "2",
                    message: "Hello",
                    createdAt: "2021-08-01T12:00:00.000Z",
                },
                {
                    _id: "2",
                    sender: "2",
                    receiver: "1",
                    message: "How can I help you?",
                    createdAt: "2021-08-01T12:00:00.000Z",
                },
            ],
        },
    ]);
}, [currentUser]);


  const handleChatChange = (chat) => {
    setCurrentChat(chat.chats);
  };

  return (
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
            
          {currentChat === undefined ? (
           <Welcome />
          ) : ( 
            <ChatContainer currentChat={currentChat}/>
        )} 
        </div>
      </Container>
  );
}

const Container = styled.div`
    font: Playfair Display;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
