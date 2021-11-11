import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function Person({ name, teams }) {
    return (
        <div className='card'>
            <h1>{name}'s team at each stage</h1>
            <ol>
                <li>{teams[0]}</li>
                <li>{teams[1]}</li>
                <li>{teams[2]}</li>
                <li>{teams[3]}</li>
                <li>{teams[4]}</li>
                <li>{teams[5]}</li>
                <li>{teams[6]}</li>
                <li>{teams[7]}</li>
                <li>{teams[8]}</li>
                <li>{teams[9]}</li>
                <li>{teams[10]}</li>
                <li>{teams[11]}</li>
                <li>{teams[12]}</li>
                <li>{teams[13]}</li>
            </ol>
        </div>
    )
}

Person.PropTypes = {
    name: PropTypes.string.isRequired,
    teams: PropTypes.array.isRequired
}