import React, { Component } from 'react';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  login(userInfo) {
    console.log('user info in app login', userInfo)
  }

  signUp(userInfo) {
    console.log('user info in app signUp', userInfo)
  }

  render() {
   if (!this.state.loggedIn) {
    return (
      <div>
         <Login login={this.login} signUp={this.signUp}/>
      </div>

    )
   } else {
    return (
      <div>
        you are logged in
      </div>
    )
   }
  }
}

export default App;