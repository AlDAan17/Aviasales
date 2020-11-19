import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import { connect } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './loading.scss'

function Loading ({ successfulDownload, error }) {
    if (successfulDownload || error) {
        return (
            <Alert
                message={error ? 'Sorry, tickets doesn\'t loaded' : 'Tickets loaded successfully'}
                type={error ? 'error' : 'success'}
                className="notification"
            />
        );
    }
    return (
        <LoadingOutlined className="spin" spin />
    )
}

const mapStateToProps = (state) => ({
    successfulDownload: state.successfulDownload,
    error: state.error,
});

Loading.propTypes = {
    successfulDownload: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Loading);