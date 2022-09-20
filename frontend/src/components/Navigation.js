import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import "tachyons";
import { ChatState } from "../context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/shegang.png";

function Navigation() {
  const { user } = ChatState();
  let navigate = useNavigate();

  const toast = useToast();

  const logoutHandler = () => {
    toast({
      title: "Logout Successful. Click refresh to hide the Logout button",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ fontSize: "15px" }}
      className="bg-black-gradient w-full"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            className="dib"
            alt="logo"
            src={logo}
            style={{ width: 50, height: 50, borderRadius: 8 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-aut">
            {user && (
              <Nav.Link className="text-white" href="/chats">
                Dashboard
              </Nav.Link>
            )}
            <Nav.Link className="text-white" href="/meetups/shegang">
              Meetups
            </Nav.Link>
            <Nav.Link className="text-white" href="/advise/advise">
              Advise
            </Nav.Link>
          </Nav>

          <Nav>
            {user && (
              <Button
                variant="outline-secondary"
                style={{ color: "white" }}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
            {!user && (
              <Button
                variant="outline-secondary"
                style={{ color: "white" }}
                href="/login"
              >
                Login/Signup
              </Button>
            )}
            <NavDropdown title="H.E.R." id="collasible-nav-dropdown">
              <NavDropdown.Item
                className="text-white"
                href="/updates/h.e.r.-updates"
              >
                H.E.R. Updates
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-white"
                href="#action/3.2"
              ></NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/albums/albums">
                Albums
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-white" href="/videos/videos">
                Videos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-white" href="/samples/samples">
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
