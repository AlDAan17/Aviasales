import React, { useState } from 'react';
import './App.scss';
import logo from './../../src/images/logo.svg'
import Filters from "../filters";
import Tabs from "../tabs";
import TicketsList from "../tickets-list";
import TicketServiceTest from '../Services/ticket-service-test';
// import 'antd/dist/antd.css';

function App() {
    const [activeTab, setActiveTab] = useState(1);
    const tickets = TicketServiceTest();
    // console.log(tickets);
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo"/>
            <section className="filters">
                <Filters />
            </section>
            <section className="tickets">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TicketsList tickets={tickets}/>
                {/*<TicketsList />*/}
                {/*<TicketsList />*/}
                {/*<TicketsList />*/}
            </section>
        </div>
    );
}

export default App;
