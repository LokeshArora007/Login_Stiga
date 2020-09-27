import React, { Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Public from './public';
import Private from './private';
import { Loader } from '../shared';

const Landing = lazy(() => import('../modules/landing'));
const Dashboard = lazy(() => import('../modules/dashboard'));
const LandingLayout = lazy(() => import('../layouts/landing'));
const DashboardLayout = lazy(() => import('../layouts/dashboard'));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<Loader showLoader={true} />}>
                <Redirect exact from="/" to="/dashboard" />
                <Private exact component={Dashboard} layout={DashboardLayout} path="/dashboard" restricted={false} />

                <Public component={Landing} layout={LandingLayout} path="/login" restricted={true} />
            </Suspense>
        </Switch>
    );
};

export default Routes;
