import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

import store from '../store';


const Signup = React.createClass({
  newUser: function(e) {
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
      }
    });
  },
  render: function() {
    return (
      <form className="signup-form" onSubmit={this.newUser}>
        <input id="first-name" type="text" name="first-name" placeholder="first name" ref="firstName"/>
        <input id="last-name" type="text" name="last-name" placeholder="last name" ref="lastName"/>
        <input id="email" type="email" name="email" placeholder="email" ref="email"/>
        <input id="username" type="text" name="username" placeholder="username" ref="username"/>
        <input id="password" type="password" name="password" placeholder="password" ref="password"/>
        <input type="submit" name="submit" value="submit"/>
      </form>
    );
  }
});

export default Signup;
