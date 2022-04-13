import React, { useEffect, useState } from 'react';
import './style.css';

import axios
 from 'axios';
import { DropdownMenu } from '../DropdownMenu';

export function SelectTeams() {  
    const [ users, setUsers ] = useState([]);

    const [ team1, setTeam1] = useState(null);
    const [ team2, setTeam2] = useState(null);
    const [ team3, setTeam3] = useState(null);
    const [ team4, setTeam4] = useState(null);
    const [ team5, setTeam5] = useState(null);
    const [ team6, setTeam6] = useState(null);
    const [ team7, setTeam7] = useState(null);
    const [ team8, setTeam8] = useState(null);
    const [ team9, setTeam9] = useState(null);
    const [ team10, setTeam10] = useState(null);
    const [ team11, setTeam11] = useState(null);
    const [ team12, setTeam12] = useState(null);
    const [ team13, setTeam13] = useState(null);
    const [ team14, setTeam14] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let userData = await axios.get('https://facup.herokuapp.com/api/users/');
                
                setUsers(userData);
            } catch (err) {
                console.warn(err);
            }
        }
        fetchTeams();
    }, []);  

    async function postTeams(e) {
        e.preventDefault(); // Stops the button just reloading the page

        // Get the current year
        let date = new Date().getFullYear()
    
        // Set the ID of the current user and get their username
        let userId = JSON.parse(localStorage.getItem("user")).id  
        let username = users.data.find(user => user.id === userId).username;

        // Post the above details to set the user's teams
        try {
            // await axios.post('https://facup.herokuapp.com/api/stats/', {
            //         user: username,
            //         year: date,
            //         team1: team1.id,
            //         team2: team2.id,
            //         team3: team3.id,
            //         team4: team4.id,
            //         team5: team5.id,
            //         team6: team6.id,
            //         team7: team7.id,
            //         team8: team8.id,
            //         team9: team9.id,
            //         team10: team10.id,
            //         team11: team11.id,
            //         team12: team12.id,
            //         team13: team13.id,
            //         team14: team14.id,
            //     })
        } catch(err) {
            console.log(err);
        }
    }
    
    const setTeam1Callback = (teamToAdd) => setTeam1(teamToAdd);
    const logTeam = () => console.log(team1);
    
    return (
        <>
            <h1>Enter your teams below!</h1>
            <button onClick={logTeam}>log</button>

            <form id="add-teams-form" onSubmit={e => {postTeams(e)}} >         

                <DropdownMenu addTeam={setTeam1Callback} round={'Extra Preliminary Round'} name={'EPR'}/>
                <DropdownMenu round={'Preliminary Round'} name={'PR'}/>
                <DropdownMenu round={'First Round Qualifying'} name={'Q1'}/>
                <DropdownMenu round={'Second Round Qualifying'} name={'Q2'}/>
                <DropdownMenu round={'Third Round Qualifying'} name={'Q3'}/>
                <DropdownMenu round={'Fourth Round Qualifying'} name={'Q4'}/>
                <DropdownMenu round={'First Round'} name={'R1'}/>
                <DropdownMenu round={'Second Round'} name={'R2'}/>
                <DropdownMenu round={'Third Round'} name={'R3'}/>
                <DropdownMenu round={'Fourth Round'} name={'R4'}/>
                <DropdownMenu round={'Fifth Round'} name={'R5'}/>
                <DropdownMenu round={'Quarter-Final'} name={'QF'}/>
                <DropdownMenu round={'Semi-Final'} name={'SF'}/>
                <DropdownMenu round={'Final'} name={'F'}/>

                <input type="submit" name="submit" value="Add Teams" />
            </form>
        </>
    );
}