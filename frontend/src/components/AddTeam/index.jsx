import React from 'react';
import './style.css';

import axios from 'axios';

export function AddTeam() {

    const addTeam = async e => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/teams/', {
                name: e.target[0].value,
                ground: e.target[1].value,
                latitude: e.target[2].value,
                longitude: e.target[3].value
            })

            window.alert(`${e.target[0].value} have been added to the database!`)

            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
            e.target[3].value = "";
        } catch (error) {
            console.warn(error)
            window.alert('Whoops that didn\'t work, please check the console for the error...')
        }
    }

    return (
        <>
            <h1>Add a new team below!</h1>
            <form id="add-team-form" onSubmit={addTeam} >                
                <label><b>Enter the team's name:</b>    
                    <input type="text" placeholder="Team name" name="name" />    
                </label> 

                <label><b>Enter the team's ground name:</b>    
                    <input type="text" placeholder="Ground name" name="ground" />    
                </label> 

                <label><b>Enter the ground's latitude:</b> 
                    <input type="text" placeholder="Latitude" name="latitude" />    
                </label> 

                <label><b>Enter the ground's longitude:</b>   
                    <input type="text" placeholder="Longitude" name="longitude" />    
                </label> 

                <input type="submit" name="submit" value="Add Team" />
            </form>
        </>
    )
}

