import React, { useState, useRef, useEffect } from 'react';
import './style.css';

import axios from 'axios';

export  function DropdownMenu() {

    const [ showMenu, setShowMenu ] = useState(false);
    const [ teams, setTeams ] = useState([]);

    const teamsMenu = useRef();
    const dropdownForm = useRef();

    // Get all the team names from the DB
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('https://facup.herokuapp.com/api/teams/');
                data.forEach(t => setTeams(prev => [...prev, t.name]));
            } catch (err) {
                console.warn(err);
            }
        } 
        fetchTeams();
    }, []) 
    
    // Adds the event listener for the closing functionality of the drop down menu
    useEffect(() => {
        const handleClickOutside = e => {
            if (!teamsMenu.current.contains(e.target)) {
                setShowMenu(false); // If a click happens outside the menu, close it
            };
        };
        document.addEventListener("click", handleClickOutside);
    }, []);

    function handleClick(e) {
        let selectedTeam = e.target.textContent;
        dropdownForm.current.value = selectedTeam;
        setShowMenu(false);
    }

    return (
    <div id='dropdown-menu' ref={teamsMenu}>
        <input 
            id='dropdown-form'
            ref={dropdownForm}
            type="text" 
            placeholder="-------------               &#9660;" 
            onClick={() => setShowMenu(!showMenu)}             
        />
        {
            showMenu 
                ? 
                (   
                    <div  id='dropdown-list'>
                        <button onClick={handleClick} className='dropdown-item' key='0'>-------------</button>
                        {teams.map(i => {
                            return (
                                <button onClick={handleClick} className='dropdown-item' key={i.id}>{i}</button>
                            )
                        })}
                    </div>
                ) 
                : 
                (
                    null
                )
        }        
    </div>
    )
}
