import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

const routes = (
    <BrowserRouter history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});

//meteor add accounts-ui accounts-password
//meteor remove insecure
//meteor remove autopublish
