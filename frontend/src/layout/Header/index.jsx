import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';
import './style.css';

export function Header() {
    return (
        <header>
            <nav id='navbar'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/tracker'>Tracker</NavLink>
                <BackButton />
            </nav>
        </header>
    )
}
