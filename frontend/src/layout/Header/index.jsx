import React from 'react';
import { useHistory } from 'react-router';

import { NavLink } from 'react-router-dom';
import { Button } from '../../components';
import './style.css';

export function Header() {
    let history = useHistory()

    return (
        <header>
            <nav id='navbar'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/tracker'>Tracker</NavLink>
                <NavLink to='admin'>Admin Page</NavLink>
                <Button text={"Back"} click={history.goBack}/>
            </nav>
        </header>
    )
}
