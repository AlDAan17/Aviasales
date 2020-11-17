import React from "react";
import { connect } from 'react-redux';
import './tickets-list.scss'
import Ticket from "../ticket";

function TicketsList({tickets}) {
    const elements = tickets.map((ticket) => {
        return <Ticket key={ticket.id} {...ticket} />;
    });
    return(
        <div>{elements}</div>
    )
}

function mapStateToProps(state){
    return{
        tickets:state.tickets.slice(0,5),
    }
}

export default connect(mapStateToProps)(TicketsList);