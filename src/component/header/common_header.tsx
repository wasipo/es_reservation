import React from "react";
import Nav from "./parts/head_nav";
import ReserveSetting from '../../ReservableSetting';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../../home";

export default class Header extends React.Component {

    render() {

        return (
            <Router>
                <header>
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Route path='/ReserveSetting' component={ReserveSetting} />
                </header>
            </Router>
        );


    }


}

