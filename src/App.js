import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastProvider } from 'react-toast-notifications';

import { store } from './store';
import Routes from './routes';

import './scss/styles.scss';

const browserHistory = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter history={browserHistory}>
                    <ToastProvider>
                        <Routes />
                    </ToastProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}
