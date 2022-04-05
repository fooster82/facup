import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export  function DropdownMenu() {

    const [ showMenu, setShowMenu ] = useState(false);

    const teamsMenu = useRef();
    
    useEffect(() => {
        const handleClickOutside = e => {
            if (!teamsMenu.current.contains(e.target)) {
                setShowMenu(false); // If a click happens outside the menu, close it
            };
        };
        document.addEventListener("click", handleClickOutside);
    }, []);

    return (
    <div ref={teamsMenu}>
        <input 
            id='dropdown-menu' 
            type="text" 
            placeholder="-------------               &#9660;" 
            onClick={() => setShowMenu(!showMenu)}             
        />
        {
            showMenu 
                ? 
                (   
                    <div  className="menu">
                        <button>option 1</button>
                        <button>option 2</button>
                        <button>option 3</button>
                    </div>
                ) 
                : 
                (
                    null
                )
        }        
    </div>
    )
}
