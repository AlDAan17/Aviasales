import React from "react";
import './ticket.scss';
import PropTypes from 'prop-types';
import minToHours from '../services/minutes-to-hours';
import travelTime from '../services/travel-time';
import calculateStops from '../services/calculate-stops';

function Ticket({ price, carrier, segments }) {
    const ways = segments.map((way) => {
        return (
            <React.Fragment key={way.date}>
                <CardRow head={`${way.origin}-${way.destination}`} value={travelTime(way.date, way.duration)} />
                <CardRow head="В ПУТИ" value={minToHours(way.duration)} />
                <CardRow head={calculateStops(way.stops)} value={way.stops.join(', ')} />
            </React.Fragment>
        );
    });
    return (
        <div className="ticket">
            <p className="ticket__price">{price.toLocaleString('ru-RU')} Р</p>
            <div />
            <img alt={`logo ${carrier}`} src={`//pics.avs.io/99/36/${carrier}.png`} />
            {ways}
        </div>
    );
}

function CardRow({ head, value }) {
    return (
        <div className="ticket__item">
            <span className="ticket__item-head">{head}</span>
            {value && <span className="ticket__item-value">{value}</span>}
        </div>
    );
}

Ticket.propTypes = {
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CardRow.propTypes = {
    head: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Ticket;