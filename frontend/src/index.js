import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './globals.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChakraProvider} from "@chakra-ui/react";
import ChatProvider from './context/ChatProvider';


ReactDOM.render(
  <BrowserRouter>
  <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </ChatProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
