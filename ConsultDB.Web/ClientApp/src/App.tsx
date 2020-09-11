import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { HOME, COUNTER, FETCH_DATA } from './routing/WebRouting';

import './custom.css'

export default class App extends React.Component {
    render () {
        return (
            <Layout>
                <Route exact path={HOME} component={Home} />
                <Route path={COUNTER} component={Counter} />
                <Route path={FETCH_DATA} component={FetchData} />
            </Layout>
        );
    }
}
