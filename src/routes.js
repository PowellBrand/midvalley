import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home/home';
import Board from './components/board/board';
import Contact from './components/contact/contact';
import Contractors from './components/contractors/contractors';
import District from './components/district/district';
import Pay from './components/payBill/payBill';
import Other from './components/othercontacts/other';



export default function Router() {
    return (

        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Board" component={Board} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Contractors" component={Contractors} />
            <Route path="/District-info" component={District} />
            <Route path="/Pay-my-bill" component={Pay} />
            <Route path="/Other-Contacts" component={Other} />
        </Switch>

    )
}