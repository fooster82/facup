import React from 'react';
import './style.css';

import { Rules, DropdownMenu } from '../../components';


import axios from 'axios';
import { useState, useEffect } from 'react';

export function Home() {

    const [ teams, setTeams ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ currentSearch, setCurrentSearch ] = useState(null);  
    
    // Get the relevant data from the api
    useEffect(() => {
        const fetchUsersAndTeams = async () => {
            try {
                let userData = await axios.get('https://facup.herokuapp.com/api/users/');
                let teamData = await axios.get('https://facup.herokuapp.com/api/teams/');
                
                setUsers(userData);
                setTeams(teamData);
            } catch (err) {
                console.warn(err);
            }
        }
        fetchUsersAndTeams();
    }, []);  
    
    function handleInput(searchWord) {
        setCurrentSearch(searchWord);
    }

    function matchTeam(possibleTeam) {
        let matchedTeam = teams.data.find(team => team.name.toLowerCase() === possibleTeam.toLowerCase()); // Search the Db for the team

        if(matchedTeam != undefined) return matchedTeam; // If there is a match then return it
        else return null;
    }

    async function postTeams(e) {
        e.preventDefault(); // Stops the button just reloading the page

        // Get the current year
        let date = new Date().getFullYear()
    
        // Set the ID of the current user and get their username
        let userId = JSON.parse(localStorage.getItem("user")).id  
        let username = users.data.find(user => user.id === userId).username;

        // Try to match the current search term to a team in the DB and notify the user if there isn't
        let teamToAdd = matchTeam(currentSearch);

        // Post the above details to set the user's teams
        try {
            await axios.post('https://facup.herokuapp.com/api/stats/', {
                    user: username,
                    year: date,
                    team1: teamToAdd.id,
                    team2: null,
                    team3: null,
                    team4: null,
                    team5: null,
                    team6: null,
                    team7: null,
                    team8: null,
                    team9: null,
                    team10: null,
                    team11: null,
                    team12: null,
                    team13: null,
                    team14: null,
                })
        } catch(err) {
            console.log(err);
        }
    }



    return (
       <>
        <Rules />

        <form onSubmit={postTeams}>
            <input type="text" placeholder='team1' onChange={e => handleInput(e.target.value)}/>
            <button>Testing</button>
        </form>

        <DropdownMenu />
        <DropdownMenu />
       </>
    )
}
