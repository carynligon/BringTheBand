import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

import store from '../store';
import settings from '../settings';

import Nav from './Nav';


const Signup = React.createClass({
  newUser: function(e) {
    localStorage.clear();
    e.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let email = this.refs.password.email;
    store.userCollection.create({
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName
    }, {
      success: function(response) {
        console.log(response);
        window.localStorage.setItem('authtoken', response.get('authtoken'));
        window.localStorage.setItem('username', response.get('username'));
        response.unset('password');
        store.session.set({
          username: username,
        })
        hashHistory.push('/');
      },
      error: function(response) {
        console.log('error: ' + response);
        localStorage.setItem('authtoken', settings.anonymousToken);
      }
    });
  },
  render: function() {
    return (
      <div className="login-wrapper">
        <Nav/>
        <form className="signup-form" onSubmit={this.newUser}>
          <h2>Sign up</h2>
          <label htmlFor="first-name">first name</label>
          <input id="first-name" type="text" name="first-name" placeholder="first name" ref="firstName"/>
          <label htmlFor="last-name">last name</label>
          <input id="last-name" type="text" name="last-name" placeholder="last name" ref="lastName"/>
          <label htmlFor="email">email</label>
          <input id="email" type="email" name="email" placeholder="email" ref="email"/>
          <label htmlFor="username">username</label>
          <input id="username" type="text" name="username" placeholder="username" ref="username"/>
          <label htmlFor="password">password</label>
          <input id="password" type="password" name="password" placeholder="password" ref="password"/>
          <input type="submit" name="submit" value="submit"/>
          <p>Already have an account?<Link to="/login">Login!</Link></p>
        </form>
      </div>
    );
  }
});

export default Signup;
