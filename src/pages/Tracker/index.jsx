import React from 'react';
import './style.css';

import { Map } from '../../components';
import { Person } from '../../components';

export function Tracker() {
    return (
        <>
            <Map />
            <div id='person-div'>
                <Person name='Rob' teams={['Quorn', 'Quorn', 'Ilkeston Town', 'Halesowen Town', 'Handsworth', 'Pontefract Colliers', 'FC Halifax Town', 'FC Halifax Town']}/>
                <Person name='Adelle' teams={['Mousehole AFC', 'Mousehole AFC', 'Plymouth Parkway', 'Gosport Borough', 'Yate Town', 'Yate Town', 'Yate Town', 'Yeovil']}/>
                <Person name='Pat' teams={['Hadley', 'Hadley', 'Hadley', 'Hadley', 'Enfield Town', 'Chelmsford City', 'Harrow Borough', 'Portsmouth']}/>
            </div>
        </>
    )
}
