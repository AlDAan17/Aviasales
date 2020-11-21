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
                <CheckboxLabel checkedItem={checkboxes.all} onChangeFunc={(event) => dispatch(showAll(event.target.checked))} transfers="Все"/>
                <CheckboxLabel checkedItem={checkboxes.nothing} onChangeFunc={(event) => dispatch(showNothing(event.target.checked))} transfers="Без пересадок"/>
                <CheckboxLabel checkedItem={checkboxes.one} onChangeFunc={(event) => dispatch(showOne(event.target.checked))} transfers="1 пересадка"/>
                <CheckboxLabel checkedItem={checkboxes.two} onChangeFunc={(event) => dispatch(showTwo(event.target.checked))} transfers="2 пересадки"/>
                <CheckboxLabel checkedItem={checkboxes.three} onChangeFunc={(event) => dispatch(showThree(event.target.checked))} transfers="3 пересадки"/>
            </div>
        </div>
    )
}

const CheckboxLabel = ({checkedItem, onChangeFunc, transfers}) =>{
    return(
        <label className="filter__item">
            <input type="checkbox" className="checkbox"
                   checked={checkedItem}
                   onChange={onChangeFunc}/>
            <span className="checkbox__text">{transfers}</span>
        </label>
    )
}

const mapStateToProps = (state) =>({
    checkboxes: {...state.checkboxes},
});

CheckboxLabel.propTypes = {
    checkedItem: PropTypes.bool.isRequired,
    onChangeFunc:PropTypes.func.isRequired,
    transfers:PropTypes.string.isRequired
}

Filters.propTypes = {
    checkboxes: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Filters);