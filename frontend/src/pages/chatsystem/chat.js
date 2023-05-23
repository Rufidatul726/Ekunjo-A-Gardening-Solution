import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
// import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "./chatContainer";
// import Contacts from "../components/Contacts";
import Welcome from "./welcome";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(async () => {
  //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //       )
  //     );
  //   }
  // }, []);
  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io(host);
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container className="bg-light">
        <div className="container">
          {/* <Contacts contacts={contacts} changeChat={handleChatChange} /> */}
          {/* {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )} */}
          <ChatContainer currentChat={currentChat} socket={socket} />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
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
    background: linear-gradient(rgba(6, 10, 8, 0.425),  rgba(135, 247, 174, 0.425), rgba(89, 216, 110, 0.5));
    display: grid;
    grid-template-columns: 100%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
