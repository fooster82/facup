import React, { useEffect, useState } from 'react';
import './style.css';

import axios from 'axios';

export function SelectTeam() {

    const [ teams, setTeams ] = useState([]);

    const [ matchedEPR, setMatchedEPR ] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let { data } = await axios.get('http://127.0.0.1:8000/api/teams/');
                data.forEach(d => setTeams(prev => [...prev, d.name]));
            } catch (err) {
                console.warn(err);
            }
        }
        fetchTeams();
    }, []);
    
    function findH(name) {
        return name.includes('h') || name.includes('H');
    }

    function findMatch(e) {
        const letter = String.fromCharCode(e.keyCode)
        const matchedTeams = teams.filter(name => {
            return name.includes(letter) || name.includes(letter.toLowerCase())
        })
        setMatchedEPR(matchedTeams)
    }


    
    return (
        <>
            <div>All our teams  with an 'h' in are: {teams.filter(findH)}</div>

            <h1>Enter your teams below!</h1>

            <form id="add-teams-form" onSubmit={e => {e.preventDefault(); console.log("hello")}} >                
                <label><b>Extra Preliminary Round:</b>    
                    <input onKeyUp={findMatch} type="text" placeholder="Enter team name..." name="EPR" />
                    <ul>
                        {matchedEPR.map(i => (
                            <li key={i.id}>{i}</li>
                        ))}
                    </ul>    
                </label> 

                <label><b>Preliminary Round:</b>    
                    <input type="text" placeholder="Enter team name..." name="PR" />    
                </label> 

                <label><b>First Round Qualifying:</b>    
                    <input type="text" placeholder="Enter team name..." name="Q1" />    
                </label>

                <label><b>Second Round Qualifying:</b>    
                    <input type="text" placeholder="Enter team name..." name="Q2" />    
                </label>

                <label><b>Third Round Qualifying:</b>    
                    <input type="text" placeholder="Enter team name..." name="Q3" />    
                </label>

                <label><b>Fourth Round Qualifying:</b>    
                    <input type="text" placeholder="Enter team name..." name="Q4" />    
                </label>

                <label><b>First Round:</b>    
                    <input type="text" placeholder="Enter team name..." name="R1" />    
                </label>

                <label><b>Second Round:</b>    
                    <input type="text" placeholder="Enter team name..." name="R2" />    
                </label>

                <label><b>Third Round:</b>    
                    <input type="text" placeholder="Enter team name..." name="R3" />    
                </label>

                <label><b>Fourth Round:</b>    
                    <input type="text" placeholder="Enter team name..." name="R4" />    
                </label>

                <label><b>Fifth Round:</b>    
                    <input type="text" placeholder="Enter team name..." name="R5" />    
                </label>

                <label><b>Quarter-Final:</b>    
                    <input type="text" placeholder="Enter team name..." name="QF" />    
                </label>

                <label><b>Semi-Final:</b>    
                    <input type="text" placeholder="Enter team name..." name="SF" />    
                </label>

                <label><b>Final:</b>    
                    <input type="text" placeholder="Enter team name..." name="F" />    
                </label>

                <input type="submit" name="submit" value="Add Teams" />
            </form>
        </>
    );
}
