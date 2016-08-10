import $ from 'jquery';
import React from 'react';
import {hashHistory, Link} from 'react-router';

import store from '../store';
import settings from '../settings';

import Nav from './Nav';

const Login = React.createClass({
  loginUser: function(e) {
    localStorage.clear();
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    store.session.save({
      username: username,
      password: password
    }, {
      success: function(model, response) {
        window.localStorage.setItem('authtoken', response._kmd.authtoken);
        window.localStorage.setItem('username', response.username);
        model.unset('password');
        store.session.set({
          username: username,
          password: password
        })
        hashHistory.push('/');
      },
      error: function(response) {
        document.getElementById('username').style.color = '#f32424';
        document.getElementById('password').style.color = '#f32424';
        document.getElementById('error-message').textContent = 'Invalid username or password';
        console.log('error: ' + response);
        localStorage.setItem('authtoken', settings.anonymousToken);
      }
    });
  },
  render: function() {
    return (
      <div className="login-wrapper">
        <Nav/>
        <form className="login-form" onSubmit={this.loginUser}>
          <h2>Login</h2>
          <label htmlFor="username">username</label>
          <input id="username" type="text" name="username" placeholder="username" ref="username"/>
          <label htmlFor="password">password</label>
          <input id="password" type="password" name="password" placeholder="password" ref="password"/>
          <p id="error-message"></p>
          <input type="submit" name="submit" value="submit"/>
          <p>Need an account?<Link to="/signup">Sign up!</Link></p>
        </form>
      </div>
    );
  }
});

export default Login;
