/*
 * Layout: Dashboard
 */
import React from 'react';
import PropTypes from 'prop-types';

const DashboardLayout = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <div id="wrapper">
                {children}
            </div>
        </React.Fragment>
    );
};
export default DashboardLayout;

DashboardLayout.propTypes = {
    children: PropTypes.object.isRequired,
};
