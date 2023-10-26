import React from 'react'
import styled from 'styled-components'
import BgImage from "../images/bg (4).jpeg";

const WelcomeEkunjo = () => {
  return (
    <Container>
        <div className="container">
            <div className="heading"><h1>Welcome to E-Kunjo</h1></div>
            <div className="content">
                <img src={BgImage} alt="welcome"/>
                <p>
                    E-Kunjo is an online platform that provides information about plants, nurseries, fertilizers and diseases. 
                    It also provides a platform for the users to get help from the experts if the face any problems related to plants.  
                    The users can also get information about the diseases and their remedies.
                </p>
            </div>
        </div>
    </Container>
  )
}

export default WelcomeEkunjo

const Container = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        .heading {
            width: 100%;
            height: 15%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h1 {
                font-size: 3.5rem;
            }
        }
        .content {
            width: 100%;
            height: 85%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                border-radius: 50%;
                width: 40%;
                height: 65%;
            }
            p {
                font-size: 1rem;
            }
        }
    }
    
    `