import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {

    const [ teamsR, setTeamsR ] = useState([]);   

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

    return (
        <div id='content'>
            <Map />
            <div id='person-div'>
                <Person name='Rob' teams={["Quorn", "Quorn", "Ilkeston Town"]}/>                
            </div>
        </div>
    )
}
