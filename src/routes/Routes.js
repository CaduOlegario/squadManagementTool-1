import React from "react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import TeamForm from "../components/pages/TeamForm";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard/>
            </Route>
            <Route path="/form">
                <TeamForm/>
            </Route>
            <Route>
                <Dashboard/>
            </Route>
        </Switch>
    );
}