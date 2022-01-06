import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

import UserService from "../../services/user.service";
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

    const [ content, setContent ] = useState("");

    useEffect(() => {
        UserService.getUserContent().then(
            res => {
                setContent(res.data);
            },
            err => {
                const _content =
                    (err.res && err.res.data && err.res.data.message) ||
                    err.message ||
                    err.toString();

                setContent(_content)
            }
        );
    }, []);

    return (
        <div id='content'>
            <h3>{content}</h3>
            <Map />
            <div id='person-div'>
                <Person name='Rob' teams={["Quorn", "Quorn", "Ilkeston Town"]}/>                
            </div>
        </div>
    )
}
