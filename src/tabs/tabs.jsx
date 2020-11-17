import React from "react";
import './tabs.scss';
import 'antd/dist/antd.css';
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

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);