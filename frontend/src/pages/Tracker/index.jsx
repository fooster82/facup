import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {

    const [ teamsR, setTeamsR ] = useState([]);
    const [ showUserContent, setShowUserContent ] = useState(false);
    const { user: currentUser } = useSelector(state => state.auth);
   

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/stats/');
                let teamDataR = data[0].team1;
                setTeamsR(teamDataR);                
            } catch (err) {
                console.warn(err)
            }
        }
        fetchTeams()
    }, [])

    useEffect(() => {        
        setShowUserContent(currentUser);        
    }, [currentUser]);

    return (
        <>
            <div className={showUserContent ? 'show' : 'hide'}>
                <div id='content'>
                    <Map />
                    <div id='person-div'>
                        <Person name='Rob' teams={["Quorn", "Quorn", "Ilkeston Town"]}/>
                    </div>
                </div>
            </div>

            <h1 className={!showUserContent ? 'show' : 'hide'}>Please login to view this page.</h1>
        </>
    )
}
