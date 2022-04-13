import React, { useState, useRef, useEffect, useMemo, createRef } from 'react';
import './style.css';

import axios from 'axios';

export function DropdownMenu(props) {

    const round = props.round;
    const name = props.name;
    const addTeam = props.addTeam

    const [ showMenu, setShowMenu ] = useState(false);
    const [ teamToAdd, setTeamToAdd ] = useState(null);
    const [ teams, setTeams ] = useState([]);
    const [ teamNames, setTeamNames ] = useState([])

    const teamsMenu = useRef();
    const dropdownForm = useRef();
    const teamButtons = useMemo(() => Array(teams.length).fill(0).map(() => createRef()), []);

    // Get all the team names from the DB
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('https://facup.herokuapp.com/api/teams/');
                data.forEach(t => setTeams(prev => [...prev, t]));
                data.forEach(t => setTeamNames(prev => [...prev, t.name]));                
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
        
        setTeamToAdd(matchTeam(selectedTeam)); // Try to match the current search term to a team in the DB        
        console.log(teamToAdd)
        addTeam("bulls") // Sends the team to add back to the parent component

        setShowMenu(false); // Close the menu when a team is selected
    }

    // Finds a team that best matches what the user has currently typed in
    function findMatch (searchWord) {
        const teamButtonRefs = teamButtons.current.children; // Stores each of the team buttons in a variable

        Array.from(teamButtonRefs).forEach(button => button.disabled = false); // Enables all buttons

        // Checks for any matches between the current search term and the team buttons and then returns those that don't
        const unmatchedTeamButtons = Array.from(teamButtonRefs).filter(button => {
            return !Object.values(button.textContent).join('').toLowerCase().includes(searchWord.toLowerCase());
        })
        
        unmatchedTeamButtons.forEach(button => button.disabled = true); // Hides the teams that don't match what is currently typed
    }

    // Attempt to match a string with a team name in the DB
    function matchTeam(possibleTeam) {
        let matchedTeam = teams.find(team => team.name.toLowerCase() === possibleTeam.toLowerCase()); // Search the DB for the team

        if(matchedTeam != undefined) return matchedTeam; // If there is a match then return it
        else return null;
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
                        <button 
                            onClick={e => handleClick(e.target.textContent)} 
                            className='dropdown-item' 
                            key='-1'
                        >-------------</button>
                        {teamNames.map((name, i) => {
                            return (
                                <button 
                                    ref={teamButtons[i]} 
                                    onClick={e => handleClick(e.target.textContent)} 
                                    className='dropdown-item' 
                                    key={i}
                                >{name}</button>
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