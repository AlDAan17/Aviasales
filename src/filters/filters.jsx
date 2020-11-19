import React from "react";
import './filters.scss';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {showAll, showNothing, showOne, showThree, showTwo} from "../redux/actions";

const Filters = ({checkboxes, dispatch}) => {
    return(
        <div className="filter">
            <h3 className="filter__header">количество пересадок</h3>
            <div className="filter__content">
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={checkboxes.all}
                           onChange={(event) => dispatch(showAll(event.target.checked))}/>
                    <span className="checkbox__text">Все</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={checkboxes.nothing}
                           onChange={(event) => dispatch(showNothing(event.target.checked))}
                    />
                    <span className="checkbox__text">Без пересадок</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={checkboxes.one}
                           onChange={(event) => dispatch(showOne(event.target.checked))}/>
                    <span className="checkbox__text">1 пересадка</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={checkboxes.two}
                           onChange={(event) => dispatch(showTwo(event.target.checked))}/>
                    <span className="checkbox__text">2 пересадки</span>
                </label>
                <label className="filter__item">
                    <input type="checkbox" className="checkbox"
                           checked={checkboxes.three}
                           onChange={(event) => dispatch(showThree(event.target.checked))}/>
                    <span className="checkbox__text">3 пересадки</span>
                </label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    checkboxes: {...state.checkboxes},
});

Filters.propTypes = {
    checkboxes: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Filters);