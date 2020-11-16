import React from "react";
import './ticket.scss';
import minToHours from '../Services/minutes-to-hours';
import travelTime from '../Services/travel-time';
import calculateStops from '../Services/calculate-stops';

function Ticket({ price, carrier, segments }) {
    const ways = segments.map((way) => {
        return (
            <React.Fragment key={way.date}>
                <HeadAndValue head={`${way.origin}-${way.destination}`} value={travelTime(way.date, way.duration)} />
                <HeadAndValue head="В ПУТИ" value={minToHours(way.duration)} />
                <HeadAndValue head={calculateStops(way.stops)} value={way.stops.join(', ')} />
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

function HeadAndValue({ head, value }) {
    return (
        <div className="ticket__item">
            <span className="ticket__item-head">{head}</span>
            {value && <span className="ticket__item-value">{value}</span>}
        </div>
    );
}

export default Ticket;