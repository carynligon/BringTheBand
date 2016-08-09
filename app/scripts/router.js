import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import HomePage from './components/HomePage';
import Modal from './components/Modal';
import Login from './components/Login';
import Signup from './components/Signup';
import VotedForPage from './components/VotedForPage';
import SearchResults from './components/SearchResults';

const router = (
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/votedFor" component={VotedForPage}>
      <Route path="/votedFor/:artistId" component={Modal}/>
    </Route>
    <Route path="/" component={HomePage}>
      <Route path="/:artistName" component={SearchResults}>
        <Route path="/:artistName/:artistId" component={Modal}/>
      </Route>
    </Route>
  </Router>
);

export default router;
