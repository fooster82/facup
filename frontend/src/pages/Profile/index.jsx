import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import './style.css';

export function Profile() {
    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Redirect to="/login" />
    };

    return (
        <div>
            <h3>
                <strong>{currentUser.username}'s</strong> Profile
            </h3>
           
            <p>
                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>

            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>

            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    )
}