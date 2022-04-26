import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import axios from 'axios';

import { Map, Person } from '../../components';

export function Tracker() {

    const [ teams, setTeams ] = useState([]);
    const [ showUserContent, setShowUserContent ] = useState(false);
    const { user: currentUser } = useSelector(state => state.auth);
   
    // Fetch the required data from the DB and match the current logged in user with their stats data to make a teams array
    useEffect(() => {
        const fetchStatsAndTeams= async () => {
            try {
                let dataStats = await axios.get('https://facup.herokuapp.com/api/stats/');
                let dataTeams = await axios.get('https://facup.herokuapp.com/api/teams/');

                let teamData = dataStats.data.find(stat => stat.username === currentUser.id); // Match the current user up with their stat data

                // Make an array of team names
                const teamIds = Object.values(teamData).splice(3); // Make an array of the team ids from the current data
                const teamNames = teamIds.map(id => dataTeams.data.find(team => team.id === id).name); // Match each id up with its entry to get its name
                setTeams(teamNames);
            } catch (err) {
                console.warn(err)
            }
        }
        fetchStatsAndTeams()
    }, [])

    useEffect(() => {        
        setShowUserContent(currentUser);        
    }, [currentUser]);

    if (!currentUser) {
        return <Redirect to="/login" />
    };

    return (
        <>
            <div className={showUserContent ? 'show' : 'hide'}>
                <div id='content'>
                    <Map />
                    <div id='person-div'>
                        <NavLink exact to='/profile'>Add your teams!</NavLink>
                        <Person name={currentUser.username} teams={teams}/>
                    </div>
                </div>
            </div>

            <h1 className={!showUserContent ? 'show' : 'hide'}>Please login to view this page.</h1>
        </>
    )
}
