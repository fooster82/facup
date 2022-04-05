import React from 'react';
import './style.css';

import map from "../../../public/assets/map.jpg";

export function Map() {
    return (
        <div id='map-container'>
            <img id='map' src={map} alt="Map of England and Wales" />
        </div>
    )
}


// Map coords: 
// Top left = 55.811385336866664, -5.794861188336295 | (55.81, -5.79)
// Top right = 55.811385336866664, 2.0822425052460156 | (55.81, 2.08)
// Bottom left = 50.04558576751829, -5.794861188336295 | (50.05, -5.79)
// Bottom right = 50.04558576751829, 2.0822425052460156 | (50.05, 2.08)
