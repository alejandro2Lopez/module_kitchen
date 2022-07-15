import { ReactDOM } from "react-dom/client"
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import App from "../App";

function Routes() {
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/" component = {App} ></Route>
                    <Redirect from='/menu' to='/tutorials' />
                </Switch>
            </div>
        </Router>
    )

}
