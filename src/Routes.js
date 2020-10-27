import React from "react";
import { Route, Switch } from "react-router-dom";
import NewPage from "./components/pages/NewPage";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <NewPage />
            </Route>
            <Route path="/home">
                <NewPage />
            </Route>
            <Route>
                <NewPage />
            </Route>
        </Switch>
    );
}