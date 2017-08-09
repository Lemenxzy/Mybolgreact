import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const lazyLoadPage = pageName => (location, cb) => {
    let bundle = require('bundle-loader?lazy!./containers/' + pageName + '/index.jsx');
    bundle(component => cb(null, component))
}

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute getComponent={lazyLoadPage('home')}/>
            <Route path="home" getComponent={lazyLoadPage('home')} />
            <Route path="webpage" getComponent={lazyLoadPage('webpage')} />
            <Route path="backstage" getComponent={lazyLoadPage('backstage')} />
            <Route path="about" getComponent={lazyLoadPage('about')} />
            <Route path="tell" getComponent={lazyLoadPage('tell')} />
        </Route>

    </Router>
);


export default RouteConfig;