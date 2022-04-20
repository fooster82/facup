import React, { useState, useEffect } from 'react';
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
    
    const [ hasTeams, setHasTeams ] = useState(false);
    const [ stats, setStats ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ currentTeams, setCurrentTeams ] = useState([]);

    // Get all the stats data from the DB
    useEffect(() => {
        const fetchStats = async () => {
            try {
                let { data } = await axios.get('https://facup.herokuapp.com/api/stats/');
                data.forEach(s => setStats(prev => [...prev, s]));
            } catch (err) {
                console.warn(err);
            }
        } 
        fetchStats();        
    }, []) 

    // Get all the users data from the DB
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let { data } = await axios.get('https://facup.herokuapp.com/api/users/');
                data.forEach(u => setUsers(prev => [...prev, u]));
            } catch (err) {
                console.warn(err);
            }
        } 
        fetchUsers();        
    }, []) 

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("user")); // Current user that is logged in

        matchUser(currentUser.id); // Attempt to match that user with ones that have a stat entry 

        setCurrentTeams(findTeams(currentUser)); // Find the current users team data if they have any     
    }, [users]) 
    
    // Check if the passer user ID matches with any entries in the stats DB and change the UI to reflect whether they do or don't
    function matchUser(userId) {
        // Find the matching user in the DB
        let user = stats.find(stat => stat.username.toString() === userId.toString());

        // Change the state of hasTeams depending on whether there is a matching user or not
        if (user != undefined) setHasTeams(true);
        else setHasTeams(false);            
    }

    // Find the current teams for the current user
    function findTeams(user) {
        let teams = stats.find(stat => stat.username === user.id);
        if(teams != undefined) { 
            let arrayOfArrays = Object.entries(teams);
            console.log(arrayOfArrays[3][1])
        };
    }

    // Set the current season depending on what month it is
    function setSeason(month, year) {
        if (month < 7) return `${year - 1}/${year}`;
        else return `${year}/${year + 1}`
    }

    async function postTeams(e) {
        e.preventDefault(); // Stops the button just reloading the page

        let currentYear = new Date().getFullYear() // Get the current year
        let currentMonth =  new Date().getMonth(); // Get the current month

        let season = setSeason(currentMonth, currentYear); // Sets the current season

        // Set the ID of the current user and get their username
        let userId = JSON.parse(localStorage.getItem("user")).id  

        // Post the above details to set the user's teams
        try {
            const teams= [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14] // Collect all the teams to be added in an array

            const teamIds = Array(teams.length).fill(null) // Initialise an array of the team Ids as null

            // Loop through the teams array setting the Id of any non-null values to its corresponding value in teamIds
            for (let i=0; i<teams.length; i++) {
                if(teams[i] != null || teams[i] != undefined) {
                    teamIds[i] = teams[i].id;
                }
            }
            
            // Post the user's team stat data to the DB along with their username and the current date
            await axios.post('https://facup.herokuapp.com/api/stats/', {                
                    username: userId,
                    year: season,
                    team1: teamIds[0],
                    team2: teamIds[1],
                    team3: teamIds[2],
                    team4: teamIds[3],
                    team5: teamIds[4],
                    team6: teamIds[5],
                    team7: teamIds[6],
                    team8: teamIds[7],
                    team9: teamIds[8],
                    team10: teamIds[9],
                    team11: teamIds[10],
                    team12: teamIds[11],
                    team13: teamIds[12],
                    team14: teamIds[12],
                })

                window.alert("Your teams have been added to your profile! Go to the tracker page to check them out.")
        } catch(err) {
            console.log(err);
        }
    }

    async function updateTeams() {
        console.log("beep boop")
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
            {
                hasTeams 
                    ? 
                    (
                        <>
                        <h1>Update your teams below!</h1>   

                        <form id="add-teams-form" onSubmit={e => {updateTeams(e)}} >         

                            <DropdownMenu addTeam={setTeam1Callback} round={'Extra Preliminary Round'} currentTeam={'EPR'}/>
                            <DropdownMenu addTeam={setTeam2Callback} round={'Preliminary Round'} currentTeam={'PR'}/>
                            <DropdownMenu addTeam={setTeam3Callback} round={'First Round Qualifying'} currentTeam={'Q1'}/>
                            <DropdownMenu addTeam={setTeam4Callback} round={'Second Round Qualifying'} currentTeam={'Q2'}/>
                            <DropdownMenu addTeam={setTeam5Callback} round={'Third Round Qualifying'} currentTeam={'Q3'}/>
                            <DropdownMenu addTeam={setTeam6Callback} round={'Fourth Round Qualifying'} currentTeam={'Q4'}/>
                            <DropdownMenu addTeam={setTeam7Callback} round={'First Round'} currentTeam={'R1'}/>
                            <DropdownMenu addTeam={setTeam8Callback} round={'Second Round'} currentTeam={'R2'}/>
                            <DropdownMenu addTeam={setTeam9Callback} round={'Third Round'} currentTeam={'R3'}/>
                            <DropdownMenu addTeam={setTeam10Callback} round={'Fourth Round'} currentTeam={'R4'}/>
                            <DropdownMenu addTeam={setTeam11Callback} round={'Fifth Round'} currentTeam={'R5'}/>
                            <DropdownMenu addTeam={setTeam12Callback} round={'Quarter-Final'} currentTeam={'QF'}/>
                            <DropdownMenu addTeam={setTeam13Callback} round={'Semi-Final'} currentTeam={'SF'}/>
                            <DropdownMenu addTeam={setTeam14Callback} round={'Final'} currentTeam={'F'}/>

                            <input type="submit" name="submit" value="Update Teams" />
                        </form>
                        </>
                    )
                    :
                    (
                        <>
                        <h1>Enter your teams below!</h1>

                        <form id="add-teams-form" onSubmit={e => {postTeams(e)}} >         

                            <DropdownMenu addTeam={setTeam1Callback} round={'Extra Preliminary Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam2Callback} round={'Preliminary Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam3Callback} round={'First Round Qualifying'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam4Callback} round={'Second Round Qualifying'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam5Callback} round={'Third Round Qualifying'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam6Callback} round={'Fourth Round Qualifying'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam7Callback} round={'First Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam8Callback} round={'Second Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam9Callback} round={'Third Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam10Callback} round={'Fourth Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam11Callback} round={'Fifth Round'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam12Callback} round={'Quarter-Final'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam13Callback} round={'Semi-Final'} currentTeam={null}/>
                            <DropdownMenu addTeam={setTeam14Callback} round={'Final'} currentTeam={null}/>

                            <input type="submit" name="submit" value="Add Teams" />
                        </form>
                        </>
                    )
            }
        </>
    )
}