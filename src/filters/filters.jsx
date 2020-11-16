import React from "react";
import './filters.scss';

function Filters() {
    return(
        <div className="filter">
            <h3 className="filter__header">количество пересадок</h3>
            <div className="filter__content">
                <label className="filter__item">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox__text">Все</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox__text">Без пересадок</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox__text">1 пересадка</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox__text">2 пересадки</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox__text">3 пересадки</span>
                </label>
            </div>
        </div>
    )
}

export default Filters;