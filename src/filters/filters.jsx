import React from "react";
import './filters.scss';

const Filters = ({all, nothing, one, two, three, showAll, showNothing, showOne, showTwo, showThree}) => {
    return(
        <div className="filter">
            <h3 className="filter__header">количество пересадок</h3>
            <div className="filter__content">
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={all}
                           onChange={(event) => showAll(event.target.checked)}/>
                    <span className="checkbox__text">Все</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={nothing}
                           onChange={(event) => showNothing(event.target.checked)}
                    />
                    <span className="checkbox__text">Без пересадок</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={one}
                           onChange={(event) => showOne(event.target.checked)}/>
                    <span className="checkbox__text">1 пересадка</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={two}
                           onChange={(event) => showTwo(event.target.checked)}/>
                    <span className="checkbox__text">2 пересадки</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={three}
                           onChange={(event) => showThree(event.target.checked)}/>
                    <span className="checkbox__text">3 пересадки</span>
                </label>
            </div>
        </div>
    )
}

export default Filters;