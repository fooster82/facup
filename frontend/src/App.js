import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './layout';
import { Home, Tracker } from './pages';


export function App() {
    return (
        <>
            <Header />

            <Switch>

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route path='/tracker'>
                    <Tracker />                    
                </Route>

                <Route>
                    <h1>&#129429; This page doesn't exist &#129430;</h1>
                </Route>

            </Switch>

            <Footer />
        </>
    )
}
