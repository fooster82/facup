import React from 'react';
import './style.css';

import map from "../../../public/assets/map.jpg";

import { MapPin } from '../MapPin';

export function Map() {
    return (
        <div id='map-container'>
            <MapPin latitude={100} longitude={1.86}/>
            <img id='map' src={map} alt="Map of England and Wales" />
        </div>
    )
}


// Map coords: 
// Top left = 55.811385336866664, -5.794861188336295 | (55.8114, -5.7949)
// Top right = 55.811385336866664, 2.0822425052460156 | (55.8114, 2.0822)
// Bottom left = 50.04558576751829, -5.794861188336295 | (50.0456, -5.7949)
// Bottom right = 50.04558576751829, 2.0822425052460156 | (50.0456, 2.0822)

// Mousehole = 50.0900, -5.5543 | 4.35, 4.35 ---> (x-50.0456)/(37/3625), (y-2.0822)/-1.755517241
// Quorn = 52.7489, -1.1803 | (expected) 264.85, 1.86
