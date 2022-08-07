import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import {Nav, Navbar, Container, Button, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import Login from './Authentication/Login';
import logo from '../assets/shegang.png';
import her from '../assets/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg'
import 'tachyons';
import { ChatState } from '../context/ChatProvider';


function Navigation () {

    const { user } = ChatState();


    return (
        
<nav class="flex justify-between bb b--white-10">
  <a class="link white-70 hover-white no-underline flex items-center pa3" href="/">
   <img src={logo} style={{width: 50, height: 50, borderRadius: 8 }}/>
  </a>
  <div class="flex-grow pa3 flex items-center">
    <a class="f6 link dib white dim mr3 mr4-ns" href="/chats">Dashboard</a>
    <a class="f6 link dib white dim mr3 mr4-ns" href="/meetups/shegang">Meetups</a>
    <a class="f6 link dib white dim mr3 mr4-ns" href="/">Advise</a>
    <a class="f6 link dib white dim mr3 mr4-ns" href="/updates/h.e.r.-updates">H.E.R. Updates</a>

    {!user && (
        <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/login">Login/Signup</a>
    )}
  </div>
</nav>

    );
}

export default Navigation;