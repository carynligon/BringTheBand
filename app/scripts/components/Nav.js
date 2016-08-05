import React from 'react';
import {Link} from 'react-router';

import store from '../store';

const Nav = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: store.session.get('authtoken') ? true : false
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
        <Link to='/'><i className="fa fa-home home-icon" aria-hidden="true"/>Home</Link>
        <Link to='/votedFor'>Votes</Link>
        {links}
      </nav>
    );
  }
});

export default Nav;
