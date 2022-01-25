import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {

    const [ teams, setTeams ] = useState([]);
    const [ showUserContent, setShowUserContent ] = useState(false);
    const { user: currentUser } = useSelector(state => state.auth);
   

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/stats/');
                console.log(data)
                let teamData = data[0].team1;
                setTeams(teamData);                
            } catch (err) {
                console.warn(err)
            }
        }
        fetchTeams()
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
                        <Person name={currentUser.username} teams={[]}/>
                    </div>
                </div>
            </div>

            <h1 className={!showUserContent ? 'show' : 'hide'}>Please login to view this page.</h1>
        </>
    )
}
