import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Button } from '../Button';

export function Person({ name, teams }) {

    const [ showTeams, setShowTeams ] = useState();

    const handleClick = () => setShowTeams(prevShowTeams => !prevShowTeams)

    return (
        <>
            <Button click={handleClick} text={`Toggle ${name}'s teams`} />

            <div className={showTeams ? 'show' : 'hide'}>
                <div className='card'>
                    <h1>{name}'s team at each stage</h1>
                    <ul>
                        <li>Extra Preliminary Round: {teams[0]}</li>
                        <li>Preliminary Round: {teams[1]}</li>
                        <li>First Round Qualifying: {teams[2]}</li>
                        <li>Second Round Qualifying: {teams[3]}</li>
                        <li>Third Round Qualifying: {teams[4]}</li>
                        <li>Fourth Round Qualifying: {teams[5]}</li>
                        <li>First Round Proper: {teams[6]}</li>
                        <li>Second Round Proper: {teams[7]}</li>
                        <li>Third Round Proper: {teams[8]}</li>
                        <li>Fourth Round Proper: {teams[9]}</li>
                        <li>Fifth Round Proper: {teams[10]}</li>
                        <li>Quarter-Final: {teams[11]}</li>
                        <li>Semi-Final: {teams[12]}</li>
                        <li>Final: {teams[13]}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    teams: PropTypes.array.isRequired
}