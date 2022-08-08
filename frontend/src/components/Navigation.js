import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'tachyons';
import { ChatState } from '../context/ChatProvider';


import logo from '../assets/shegang.png';


function Navigation () {

    const { user } = ChatState();


    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#000"}}>
        <Container>
          <Navbar.Brand href="/">
          <img className="dib" alt="logo" src={logo} style={{width: 50, height: 50, borderRadius: 8 }}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items">
              <Nav.Link href="/chats">Dashboard</Nav.Link>
              <Nav.Link href="/meetups/shegang">Meetups</Nav.Link>
              <Nav.Link href="/">Advise</Nav.Link>
            </Nav>

             <Nav> 
             {!user && (
              <a class="f6 dib white bg-animate hover-bg-gray hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/login">Login/Signup</a>
            )}
             <NavDropdown title="H.E.R." id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">H.E.R. Updates</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Albums</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Videos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Song Samples
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
/* <nav class="flex justify-between bb b--white-10">
  <a class="link white-70 hover-white no-underline flex items-center pa3" href="/">
   <img className="dib" src={logo} style={{width: 50, height: 50, borderRadius: 8 }}/>
  </a>
  <div class="flex-grow pa3 flex items-center">
    <a class="f6 link dib white dim mr3 mr4-ns nav-item" href="/chats">Dashboard</a>
    <a class="f6 link dib white dim mr3 mr4-ns" href="/meetups/shegang">Meetups</a>
    <a class="f6 link dib white dim mr3 mr4-ns" href="/">Advise</a>
    <a class="f6 link dib white dim mr3 mr4-ns" href="/updates/h.e.r.-updates">H.E.R. Updates</a>

    {!user && (
        <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/login">Login/Signup</a>
    )}
  </div>
</nav> */

    );
}

export default Navigation;