import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message, Alert } from 'antd';
import './tickets-list.scss'
import Ticket from "../ticket";

function TicketsList({tickets, error, checkboxes, tab, successfulDownload}) {

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

    const elements = ticketsSorted.reduce((acc, ticket) => {
        const stopsIn = ticket.segments[0].stops.length;
        const stopsFrom = ticket.segments[1].stops.length;
        if (isNeedRender(stopsIn, checkboxes) || isNeedRender(stopsFrom, checkboxes)) {
            acc.push(<Ticket key={ticket.id} {...ticket} />);
        }
        return acc;
    }, []).slice(0, 5);

    if (error) message.error('Не получилось получить билеты', 1.3);

    if (!elements.length) {
        return (
            <Alert message={successfulDownload || error ? "Рейсов, подходящих под заданные параметры, не найдено" : "Загрузка..."}
                   type='info'
                   style={{marginTop: '20px'}}
            />
        )
    }
    return <div>{elements}</div>
}

function mapStateToProps(state){
    return{
        tickets:state.tickets,
        checkboxes:state.checkboxes,
        tab:state.tab,
        error:state.error,
        successfulDownload: state.successfulDownload,
    }
}

TicketsList.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
    checkboxes: PropTypes.objectOf(PropTypes.bool).isRequired,
    tab: PropTypes.string.isRequired,
    successfulDownload: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TicketsList);