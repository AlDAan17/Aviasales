import React from "react";
import './tabs.scss';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

function Tabs({activeTab, setActiveTab}) {
    return(
        <Radio.Group
            size="large"
            buttonStyle="solid"
            value={activeTab}
            onChange={(event) => setActiveTab(event.target.value)}
            className="tickets__button"
        >
            <Radio.Button className="tickets__button-item" value={1}>
                самый дешевый
            </Radio.Button>
            <Radio.Button className="tickets__button-item" value={2}>
                самый быстрый
            </Radio.Button>
        </Radio.Group>
    )
}

export default Tabs;