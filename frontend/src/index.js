import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
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
