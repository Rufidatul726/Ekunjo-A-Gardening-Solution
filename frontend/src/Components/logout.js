import React from 'react'
import styled from 'styled-components';

const Logout = () => {
  return (
    <Container>
        <img src="https://img.icons8.com/ios/50/000000/logout-rounded.png" alt="logout" />
    </Container>
  )
}

export default Logout

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    img {
        height: 40%;
    }
      
    `