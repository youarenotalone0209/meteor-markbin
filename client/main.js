import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './components/app';
import BinsList from './components/bins/bins_list';
import BinsMain from './components/bins/bins_main';

import { Bins } from '../imports/collections/bins';

const routes = (
    <App>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BinsList} />
                <Route exact path="/bins/:binId" render={(props) => <BinsMain {...props} />} />
            </Switch>
        </BrowserRouter>
    </App>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});

