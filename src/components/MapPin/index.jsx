import React from 'react';
import './style.css';

import pin from "../../../public/assets/pin.png";

export function MapPin(props) {
    const latitude = props.latitude;
    const longitude = props.longitude;
    console.log(latitude)
    console.log(longitude)

  return (
          <img style={{left: latitude + '%', bottom: longitude + '%'}} id='pin' src={pin} alt="pin" />
  )
}

