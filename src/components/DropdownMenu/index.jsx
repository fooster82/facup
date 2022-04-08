import React, { useState, useRef, useEffect, useMemo, createRef } from 'react';
import './style.css';

import axios from 'axios';

export  function DropdownMenu(props) {

    const round = props.round;
    const name = props.name;

    const [ showMenu, setShowMenu ] = useState(false);
    const [ teams, setTeams ] = useState([]);
    const [ matchedTeams, setMatchedTeams ] = useState([]);

    const teamsMenu = useRef();
    const dropdownForm = useRef();
    const teamButtons = useMemo(() => Array(teams.length).fill(0).map(() => createRef()), []);

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

    // When a user clicks one of the team buttons, add that team to the matching text input field
    function handleClick(team) {
        let selectedTeam = team;
        dropdownForm.current.value = selectedTeam;
        setShowMenu(false); // Close the menu when a team is selected
    }

    // Finds a team that best matches what the user has currently typed in
    function findMatch (searchWord) {
        if (searchWord != '') {            
            const teamButtonRefs = teamButtons.current.children; // Stores each of the team buttons in a variable

            Array.from(teamButtonRefs).forEach(button => button.disabled = false); // Enables all buttons

            // Checks for any matches between the current search term and the team buttons and then returns those that don't
            const unmatchedTeamButtons = Array.from(teamButtonRefs).filter(button => {
                    return !Object.values(button.textContent).join('').toLowerCase().includes(searchWord.toLowerCase());
            })
            
            unmatchedTeamButtons.forEach(button => button.disabled = true); // Hides the teams that don't match what is currently typed

        } else {
            setMatchedTeams("Nothing has been searched so far");
        }        
    }
    
    return (
    <div id='dropdown-menu' ref={teamsMenu}>
        <label><b>{round}:</b></label>
        <input 
            id='dropdown-form'
            ref={dropdownForm}
            name={name}
            type="text" 
            placeholder="-------------               &#9660;" 
            onClick={() => setShowMenu(!showMenu)}  
            onChange={e => findMatch(e.target.value)}                       
        />
        {
            showMenu 
                ? 
                (   
                    <div ref={teamButtons}  id='dropdown-list'>
                        <button onClick={e => handleClick(e.target.textContent)} className='dropdown-item' key='-1'>-------------</button>
                        {teams.map((name, i) => {
                            return (
                                <button ref={teamButtons[i]} onClick={e => handleClick(e.target.textContent)} className='dropdown-item' key={i}>{name}</button>
                            )
                        })}
                    </div>
                ) 
                : 
                (
                    null
                )
        } 
        <div ref={teamButtons}></div>       
    </div>
    )
}
// 