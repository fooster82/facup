import React, { useState } from 'react';
import './style.css';

import axios from 'axios';
import { DropdownMenu } from '../DropdownMenu';

export function SelectTeams() {  

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

    async function postTeams(e) {
        e.preventDefault(); // Stops the button just reloading the page

        let date = new Date().getFullYear() // Get the current year
    
        // Set the ID of the current user and get their username
        let userId = JSON.parse(localStorage.getItem("user")).id  

        // Post the above details to set the user's teams
        try {
            console.log(team1)
            await axios.post('https://facup.herokuapp.com/api/stats/', {                
                    username: userId,
                    year: date,
                    team1: team1.id,
                    team2: team2.id,
                    team3: team3.id,
                    team4: team4.id,
                    team5: team5.id,
                    team6: team6.id,
                    team7: team7.id,
                    team8: team8.id,
                    team9: team9.id,
                    team10: team10.id,
                    team11: team11.id,
                    team12: team12.id,
                    team13: team13.id,
                    team14: team14.id,
                })
        } catch(err) {
            console.log(err);
        }
    }
    
    // Callback funtion for each round, which is called in the dropdown menu component
    const setTeam1Callback = teamToAdd => setTeam1(teamToAdd);
    const setTeam2Callback = teamToAdd => setTeam2(teamToAdd);
    const setTeam3Callback = teamToAdd => setTeam3(teamToAdd);
    const setTeam4Callback = teamToAdd => setTeam4(teamToAdd);
    const setTeam5Callback = teamToAdd => setTeam5(teamToAdd);
    const setTeam6Callback = teamToAdd => setTeam6(teamToAdd);
    const setTeam7Callback = teamToAdd => setTeam7(teamToAdd);
    const setTeam8Callback = teamToAdd => setTeam8(teamToAdd);
    const setTeam9Callback = teamToAdd => setTeam9(teamToAdd);
    const setTeam10Callback = teamToAdd => setTeam10(teamToAdd);
    const setTeam11Callback = teamToAdd => setTeam11(teamToAdd);
    const setTeam12Callback = teamToAdd => setTeam12(teamToAdd);
    const setTeam13Callback = teamToAdd => setTeam13(teamToAdd);
    const setTeam14Callback = teamToAdd => setTeam14(teamToAdd);
    
    return (
        <>
            <h1>Enter your teams below!</h1>

            <form id="add-teams-form" onSubmit={e => {postTeams(e)}} >         

                <DropdownMenu addTeam={setTeam1Callback} round={'Extra Preliminary Round'} name={'EPR'}/>
                <DropdownMenu addTeam={setTeam2Callback} round={'Preliminary Round'} name={'PR'}/>
                <DropdownMenu addTeam={setTeam3Callback} round={'First Round Qualifying'} name={'Q1'}/>
                <DropdownMenu addTeam={setTeam4Callback} round={'Second Round Qualifying'} name={'Q2'}/>
                <DropdownMenu addTeam={setTeam5Callback} round={'Third Round Qualifying'} name={'Q3'}/>
                <DropdownMenu addTeam={setTeam6Callback} round={'Fourth Round Qualifying'} name={'Q4'}/>
                <DropdownMenu addTeam={setTeam7Callback} round={'First Round'} name={'R1'}/>
                <DropdownMenu addTeam={setTeam8Callback} round={'Second Round'} name={'R2'}/>
                <DropdownMenu addTeam={setTeam9Callback} round={'Third Round'} name={'R3'}/>
                <DropdownMenu addTeam={setTeam10Callback} round={'Fourth Round'} name={'R4'}/>
                <DropdownMenu addTeam={setTeam11Callback} round={'Fifth Round'} name={'R5'}/>
                <DropdownMenu addTeam={setTeam12Callback} round={'Quarter-Final'} name={'QF'}/>
                <DropdownMenu addTeam={setTeam13Callback} round={'Semi-Final'} name={'SF'}/>
                <DropdownMenu addTeam={setTeam14Callback} round={'Final'} name={'F'}/>

                <input type="submit" name="submit" value="Add Teams" />
            </form>
        </>
    );
}