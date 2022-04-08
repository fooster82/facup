import React, { useEffect, useState } from 'react';
import './style.css';

import { DropdownMenu } from '../DropdownMenu';

export function SelectTeams() {   
    
    return (
        <>
            <h1>Enter your teams below!</h1>

            <form id="add-teams-form" onSubmit={e => {e.preventDefault(); console.log("hello")}} >         

                <DropdownMenu round={'Extra Preliminary Round'} name={'EPR'}/>
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