import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import logo from './../../src/images/logo.svg'
import Filters from "../filters";
import Tabs from "../tabs";
import TicketsList from "../tickets-list";
import TicketServiceTest from '../services/ticket-service-test';
import './App.scss';
import {asyncGetTickets} from "../redux/actions";

const App = ({dispatch}) => {
    dispatch(asyncGetTickets());
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo"/>
            <section className="filters">
                <Filters/>
            </section>
            <section className="tickets">
                <Tabs/>
                <TicketsList/>
            </section>
        </div>
    );
}

export default connect()(App);
