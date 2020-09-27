import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './landing.scss';
import {
    LoginForm,
} from './components';
export default function Login() {
    return (
        <React.Fragment>
            {/* Hero section */}
            <div className="hero-section">
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 col-md-6  right">
                        <LoginForm  />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
