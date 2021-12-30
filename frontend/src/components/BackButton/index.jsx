import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

export function BackButton() {
    let history = useHistory();

    return <button onClick={history.goBack}>Back</button>
}
