// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import {isLoggedIn} from './auth';

const PrivateRoute = ({ element, cPublic }) => {
    return isLoggedIn() && cPublic ? <Navigate to="/dashboard" /> : !isLoggedIn() ? <Navigate to="/login" /> : element;
};

export default PrivateRoute;