import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {

    const [ teams, setTeams ] = useState([]);
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/stats/');
                let teamData = data[0].teams
                setTeams(teamData)
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
                <Person name='Rob' teams={teams}/>
                <Person name='Adelle' teams={['Mousehole AFC', 'Mousehole AFC', 'Plymouth Parkway', 'Gosport Borough', 'Yate Town', 'Yate Town', 'Yate Town', 'Yeovil']}/>
                <Person name='Pat' teams={['Hadley', 'Hadley', 'Hadley', 'Hadley', 'Enfield Town', 'Chelmsford City', 'Harrow Borough', 'Portsmouth']}/>
            </div>
        </div>
    )
}
