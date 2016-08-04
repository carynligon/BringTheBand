import React from 'react';
import {Link} from 'react-router';

import store from '../store';

const Nav = React.createClass({
  getInitialState: function() {
    let loggedIn;
    if (store.session.get('username')) {
      loggedIn = true;
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
    if (store.session.get('username')) {
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
  componentWillUnMount: function() {
    store.session.off('change', this.listener)
  },
  render: function() {
    let links;
    if (this.state.loggedIn === true) {
      links = (
        <div className="changing-links">
          <input type="button" id="logout-btn" value="Logout" onClick={this.logout}/>
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
    console.log(this.state);
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/votedFor'>Votes</Link>
        {links}
      </nav>
    );
  }
});

export default Nav;