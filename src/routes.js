import React from 'react';
import { Route, Switch } from "react-router-dom";
// import Home from './components/home/home';


export default function Router() {
    return (

            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>

    )
}