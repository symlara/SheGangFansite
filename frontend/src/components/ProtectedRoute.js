import React from 'react';
import { Navigate } from 'react-router-dom';
import { ChatState } from '../context/ChatProvider';

const ProtectedRoute = ({children}) => {
    const { user } = ChatState();

    if(!user) {
        return <Navigate to ='/' />
    }else {
        return children
    }
}

export default ProtectedRoute