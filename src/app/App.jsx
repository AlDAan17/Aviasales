import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import logo from './../../src/images/logo.svg'
import Filters from "../filters";
import Tabs from "../tabs";
import TicketsList from "../tickets-list";
import TicketServiceTest from '../services/ticket-service-test';
import './App.scss';
// import 'antd/dist/antd.css';

const App = ({all, nothing, one, two, three, tab, selectTab, showAll, showNothing, showOne, showTwo, showThree}) => {
    // const [activeTab, setActiveTab] = useState(1);
    const tickets = TicketServiceTest();
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo"/>
            <section className="filters">
                <Filters
                    all={all}
                    nothing={nothing}
                    one={one}
                    two={two}
                    three={three}
                    showAll={showAll}
                    showNothing={showNothing}
                    showOne={showOne}
                    showTwo={showTwo}
                    showThree={showThree}
                />
            </section>
            <section className="tickets">
                <Tabs activeTab={tab} setActiveTab={selectTab}/>
                <TicketsList tickets={tickets}/>
            </section>
        </div>
    );
}

export default connect((state) => state, actions)(App);
