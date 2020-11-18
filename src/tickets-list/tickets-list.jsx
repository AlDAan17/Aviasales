import React from "react";
import { connect } from 'react-redux';
import { message, Alert } from 'antd';
import './tickets-list.scss'
import Ticket from "../ticket";

function TicketsList({tickets, error, checkboxes, tab}) {

    const isNeedRender =(numberOfStops, specificCheckboxes) => {
        switch (numberOfStops) {
            case 0:
                return specificCheckboxes.nothing;
            case 1:
                return specificCheckboxes.one;
            case 2:
                return specificCheckboxes.two;
            case 3:
                return specificCheckboxes.three;
            default:
                return false;
        }
    }

    const ticketsSorted = tickets.slice().sort((prevCard, nextCard) => {
        if (tab === 'fastest') {
            return prevCard.segments[0].duration - nextCard.segments[0].duration;
        }
        return prevCard.price - nextCard.price;
    });

    const elements = ticketsSorted.map((ticket) => {
        const stopsIn = ticket.segments[0].stops.length;
        const stopsFrom = ticket.segments[1].stops.length;
        if (isNeedRender(stopsIn, checkboxes) || isNeedRender(stopsFrom, checkboxes)) {
            return <Ticket key={ticket.id} {...ticket} />;
        }
        return false;
    }).filter(Boolean);

    if (error) message.error('Impossible to get tickets', 1.3);

    return(
        !elements.length ? <Alert message="Рейсов, подходящих под заданные параметры, не найдено" type='info' style={{marginTop: '20px'}}/>
        : <div>{elements}</div>
    )
}

function mapStateToProps(state){
    return{
        tickets:state.tickets,
        checkboxes:state.checkboxes,
        tab:state.tab,
        error:state.error,
    }
}

export default connect(mapStateToProps)(TicketsList);