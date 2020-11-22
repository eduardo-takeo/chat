import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from './pages/Login'
import Chat from './pages/Chat'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Chat />
                </Route>
            </Switch>
        </Router>
    )
}