import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {

    const [ teamsR, setTeamsR ] = useState([]);   
    const [ teamsP, setTeamsP ] = useState([]);
    const [ teamsA, setTeamsA ] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/stats/');

                let teamDataR = data[0].teams;
                let teamDataP = data[1].teams;
                let teamDataA = data[2].teams;                

                setTeamsR(teamDataR);                
                setTeamsP(teamDataP);
                setTeamsA(teamDataA);
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
                <Person name='Rob' teams={teamsR}/>                
                <Person name='Pat' teams={teamsP}/>
                <Person name='Adelle' teams={teamsA}/>
            </div>
        </div>
    )
}
