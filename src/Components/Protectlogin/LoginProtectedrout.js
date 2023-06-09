import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/Authcontext';

const LoginProtectedrout = ({ children }) => {
    const { user } = UserAuth();

    if (user && Object.keys(user).length !== 0) {
        // User is already logged in, redirect to the home page
        return <Navigate to='/' replace={true} />;
    }

    // User is not logged in, allow rendering the children
    return children;
};

export default LoginProtectedrout;
