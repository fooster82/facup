import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';

import { AddTeam } from '../../components';

export function AdminPage() {
    const [ showAdminContent, setShowAdminContent ] = useState(false);
    const { user: currentUser } = useSelector(state => state.auth);

    useEffect(() => {
        if (currentUser) {
            setShowAdminContent(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    return (
        <>
            <div className={showAdminContent ? 'show' : 'hide'}>
                <AddTeam />
            </div>

            <h1 className={!showAdminContent ? 'show' : 'hide'}>Sorry but you don't have permission to view this page.</h1>
        </>
    )
}
