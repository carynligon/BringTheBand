import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import VotedForPage from './components/VotedForPage';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/votedFor" component={VotedForPage}/>
  </Router>
);

export default router;
