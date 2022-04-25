import React, { useState, useEffect } from 'react';
import './style.css';

export function CountdownTimer() {    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })

    const [ currentMonth, setCurrentMonth ] = useState(new Date().getMonth());
    const [ currentHour, setCurrentHour ] = useState(new Date().getHours());
    const [ currentMin, setCurrentMin ] = useState(new Date().getMinutes());
    const [ currentSec, setCurrentSec ] = useState(new Date().getSeconds());

    const d = daysBetween(`${new Date().getMonth() + 1}/${new Date().getDate() + 1}/20${new Date().getYear().toString().slice(1)}`), h = 23 - parseInt(currentHour), m = 59 - currentMin, s = 59 - currentSec; // Sets the inital remaining hours, mins and secs for the current time
    const [ [days, hours, mins, secs], setTime ] = useState([d, h, m, s]);

    // Handle the different outcomes for one second passing
    const tick = () => {   
        if (days === 0 && hours === 0 && mins === 0 && secs === 0) reset()
        else if (hours === 0 && mins === 0 && secs === 0) setTime([days - 1, 23, 59, 59])
        else if (mins === 0 && secs === 0) setTime([days, hours - 1, 59, 59]);
        else if (secs === 0) setTime([days, hours, mins - 1, 59]);
        else setTime([days, hours, mins, secs - 1]);        
    };

    // Works out the days between the current date and the 1st August of the current year
    function daysBetween(currentDate, resetDay = `8/1/20${new Date().getYear().toString().slice(1)}`) {
        return Math.round((parseDate(resetDay) - parseDate(currentDate))/(1000*60*60*24));
    }

    // Turns a date into an easier to work with strin
    function parseDate(date) {
        let mdy = date.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1])
    }

    // Reset the timer if it reaches 0
    const reset = () => setTime([parseInt(h), parseInt(m), parseInt(s)]);

  return (   
      <>
        {
            4 < currentMonth && currentMonth < 7
                ?
                    <>
                        <h1>Next seasons team selection goes live:</h1>
                        <div>{`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</div>
                    </>
                : 
                    null
        } 
    </> 
  )
}
