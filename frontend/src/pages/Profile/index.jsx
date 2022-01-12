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
                <strong>Email:</strong> {currentUser.email}
            </p>
            
            
            <p>
                <strong>Role:</strong> {currentUser.role} 
            </p>
        </div>
    )
}