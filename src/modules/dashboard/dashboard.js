import React from 'react';
import './dashboard.scss';

const Dashboard = () => {
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  {localStorage.getItem('token')}  
                   
                </div>
            </div>
        </React.Fragment>
    );
};
export default Dashboard;
