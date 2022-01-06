import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './layout';
import { Home, Login, Register, Profile, Tracker, AdminPage } from './pages';


export function App() {
    return (
        <>
            <Header />

            <Switch>

                <Route exact path={["/", "/home"]} component={Home} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/register" component={Register} />

                <Route exact path="/profile" component={Profile} />

                <Route path='/tracker' component={Tracker}/>
                   
                <Route path='/admin' component={AdminPage} />
                  
                <Route>
                    <h1>&#129429; This page doesn't exist &#129430;</h1>
                </Route>

            </Switch>

            <Footer />
        </>
    )
}
