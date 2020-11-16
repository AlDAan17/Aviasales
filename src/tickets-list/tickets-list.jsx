import React from "react";
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

export default TicketsList;