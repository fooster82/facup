import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

import { App } from './App';
const {"v4": uuidv4} = require('uuid');

ReactDOM.render(
    
    <Router>
        <App />
    </Router>, 

    document.getElementById('root')
);
