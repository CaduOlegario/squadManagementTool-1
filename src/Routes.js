import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/home">
                <Dashboard />
            </Route>
            <Route>
                <Dashboard />
            </Route>
        </Switch>
    );
}