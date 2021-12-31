import React from 'react';
import './style.css';
import PropTypes from 'prop-types'; 

export  function Button({ click, text }) {
    return (
        <button onClick={click}>{text}</button>
    )
}

Button.propTypes = {
    click: PropTypes.func,
    text: PropTypes.string.isRequired
}