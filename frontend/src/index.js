import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './style.css';
import store from './store';

import { App } from './App';

ReactDOM.render(
    
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 

    document.getElementById('root')
);
