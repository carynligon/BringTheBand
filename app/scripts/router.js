import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import HomePage from './components/HomePage';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
  </Router>
);

export default router;
