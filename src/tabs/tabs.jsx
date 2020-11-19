import React from "react";
import './tabs.scss';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import { connect } from 'react-redux';
import {selectTab} from "../redux/actions";

function Tabs({activeTab, selectTabDispatch}) {
    return(
        <Radio.Group
            size="large"
            buttonStyle="solid"
            value={activeTab}
            onChange={(event) => selectTabDispatch(event.target.value)}
            className="tickets__button"
        >
            <Radio.Button className="tickets__button-item" value="cheapest">
                самый дешевый
            </Radio.Button>
            <Radio.Button className="tickets__button-item" value="fastest">
                самый быстрый
            </Radio.Button>
        </Radio.Group>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.tab,
});

const mapDispatchToProps = (dispatch) => ({
    selectTabDispatch: (value) => dispatch(selectTab(value)),
});

Tabs.propTypes = {
    activeTab: PropTypes.string.isRequired,
    selectTabDispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);