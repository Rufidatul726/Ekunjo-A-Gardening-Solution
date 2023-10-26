import React , {useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components'
import Logout from './logout';
import Chat from './chat';

const UserNav = () => {
    const [clickService, setClickService] = useState(false);
    const [clickChat, setClickChat] = useState(false);

    const chatref = React.useRef(null);

    const handleChatClick = () => {
        setClickChat(!clickChat);
        setClickService(false);
        chatref.current.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <Container>
        <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/user" className='d-flex'>
            <h3 className='logo-name me-auto text-xl-start text-nowrap bd-highlight'>E-Kunjo</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
                <Nav.Link href="/user/plant">Services</Nav.Link>
                <Nav.Link onClick={handleChatClick}>Chat</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
                <Logout/>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        <div className="chat" ref={chatref}>
                    {
                        clickChat && <Chat/>

                    }
                </div>
    </Container>
  )
}

export default UserNav

const Container = styled.div`
    width: 100%;
`