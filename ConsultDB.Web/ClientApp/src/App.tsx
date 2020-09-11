import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Consultants } from './components/Consultants/Consultants';
import { HOME, CONSULTANTS } from './routing/WebRouting';

import './custom.css'

export default class App extends React.Component {
    render () {
        return (
            <Layout>
                <Route exact path={HOME} component={Home} />
                <Route path={CONSULTANTS} component={Consultants} />
            </Layout>
        );
    }
}
