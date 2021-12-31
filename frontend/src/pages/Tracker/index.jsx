import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {

    const [ teamsR, setTeamsR ] = useState([]);
    const [ teamsA, setTeamsA ] = useState([]);
    const [ teamsP, setTeamsP ] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/stats/');

                let teamDataR = data[0].teams;
                let teamDataA = data[1].teams;
                let teamDataP = data[2].teams;

                setTeamsR(teamDataR);
                setTeamsA(teamDataA);
                setTeamsP(teamDataP);
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
                <Person name='Adelle' teams={teamsA}/>
                <Person name='Pat' teams={teamsP}/>
            </div>
        </div>
    )
}
