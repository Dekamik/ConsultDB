import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Consultants } from './components/Consultants/List/Consultants';
import { ConsultantDetailView } from './components/Consultants/Detail/ConsultantDetailView';
import { HOME, CONSULTANTS, CONSULTANT_DETAIL } from './routing/WebRouting';

import './custom.css'

export default class App extends React.Component {
    render () {
        return (
            <Layout>
                <Route exact path={HOME} component={Home} />
                <Route path={CONSULTANTS} component={Consultants} />
                <Route exact path={CONSULTANT_DETAIL} component={ConsultantDetailView} />
                <Route path={`${CONSULTANT_DETAIL}/:id`} component={ConsultantDetailView} />
            </Layout>
        );
    }
}
