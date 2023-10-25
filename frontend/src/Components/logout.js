import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handlelogout = async(e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', null);
    return navigate('/login');
  }

  return (
    <Container>
      <img src="https://img.icons8.com/ios/50/000000/logout-rounded.png" alt="logout"  onClick={handlelogout}/>
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
    margin-left: 1rem;
    img {
        height: 25%;
    }
      
    `