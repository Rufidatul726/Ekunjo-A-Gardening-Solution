import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Robot from '../images/robot.gif';

const Welcome = ({user}) => {
  return (
    <Container>
        <div className="welcome">
            <img src={Robot} alt="robot" className='robot'/>
            <h1>Welcome, {user.username}</h1>
            <h3>Here you can ask for the information about your favorite plants</h3>
        </div>
    </Container>
  )
}

export default Welcome

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
