import React from 'react';
import { Navigate } from "react-router-dom";

export default function NotLoggedinRoute({element: Component, ...props}) {
    return (
        !props.loggedIn ? <Component {...props} /> : <Navigate to="/movies" replace/>
    )
}