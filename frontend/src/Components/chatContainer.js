import React from 'react'
import styled from 'styled-components';

const ChatContainer = ({currentSelected, user}) => {
    console.log(currentSelected);
    console.log(user);
    
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          {/* <img src={currentSelected.image} alt="user" /> */}
          <span>{currentSelected.name}</span>
        </div>
      </div>
    </Container>
  )
}

export default ChatContainer

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #041d03;
    border-radius: 15% 10%;
    color: white;
    .welcome {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;    
    }
    .robot {
        height: 50%;
    }
`
