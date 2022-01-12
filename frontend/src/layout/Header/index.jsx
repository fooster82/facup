import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import './style.css';

import { Button } from '../../components';
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { history } from "../../helpers/history";


export function Header() {
    let historyBtn = useHistory()

    const [ showAdminContent, setShowAdminContent ] = useState(false);

    const { user: currentUser } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen(location => {
            dispatch(clearMessage());
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowAdminContent(currentUser.role.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <header>
            <nav id='navbar'>
                <NavLink exact to='/'>&#9917;</NavLink>

                <NavLink exact to='/home'>Home</NavLink>

                {showAdminContent && <NavLink to='admin'>Admin Page</NavLink>}

                {currentUser && <NavLink to='/tracker'>Tracker</NavLink>}

                {currentUser ? (
                    <>
                        <NavLink to='/profile'>{currentUser.username}</NavLink>
                        <NavLink to='/login' onClick={logOut}>Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/register'>Sign Up</NavLink>
                    </>              
                )}
                

                
                <Button text={"Back"} click={historyBtn.goBack}/>
            </nav>
        </header>
    )
}
