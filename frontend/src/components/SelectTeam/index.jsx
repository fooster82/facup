import React, { useEffect, useState } from 'react';
import './style.css';

import axios from 'axios';

export function SelectTeam() {

    const [ teams, setTeams ] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/teams/');
                setTeams(data)
            } catch (err) {
                console.warn(err)
            }
        }
        fetchTeams()
    }, [])

    console.log(teams);
    
    return <div>Yo</div>;
}
