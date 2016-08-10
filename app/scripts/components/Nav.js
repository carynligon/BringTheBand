import React from 'react';
import {Link} from 'react-router';

import store from '../store';
import settings from '../settings';

const Nav = React.createClass({
  getInitialState: function() {
    let loggedIn;
    if (localStorage.getItem('username') === 'Anonymous') {
      loggedIn = false;
    } else if (!localStorage.getItem('authtoken')) {
      loggedIn = false;
    } else {
      loggedIn = true;
    }
    return {
      loggedIn: loggedIn
    }
  },
  logout: function() {
    store.session.logout();
  },
  listener: function() {
    if (store.session.get('authtoken')) {
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  },
  componentDidMount: function() {
    store.session.on('change', this.listener);
  },
  componentWillUnmount: function() {
    store.session.off('change add update', this.listener)
  },
  render: function() {
    let links;
    if (this.state.loggedIn === true) {
      links = (
        <div className="changing-links">
          <input type="button" id="logout-btn" value="Logout" onClick={this.logout}/>
        </div>
      );
    } else if (location.hash.split('?')[0].split('/')[1] === 'login' || location.hash.split('?')[0].split('/')[1] === 'signup') {
      links = (
        <div className="changing-links">
        </div>
      );
    } else {
      links = (
        <div className="changing-links">
          <Link to='/login'>Login</Link>
          <Link to='signup'>Sign Up</Link>
        </div>
      );
    }
    return (
      <nav>
        <Link to='/'><i className="fa fa-home home-icon" aria-hidden="true"/>Home</Link>
        <Link to='/votedFor'>Votes</Link>
        {links}
      </nav>
    );
  }
});

export default Nav;
