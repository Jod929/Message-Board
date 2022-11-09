import React, { Component } from 'react';
import Login from './Login.jsx';
import Messages from './Messages.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      messages: [],
      currentUser: ''
    }
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.getAllMessage = this.getAllMessage.bind(this);
  }

  login(userInfo) {
    console.log('user info in app login', userInfo)
    axios({
      method: 'post',
      url: '/verifyUser',
      data: userInfo
    })
    .then((response) => {

      if (response.data.length !== 0) {
        this.setState({
          loggedIn: true,
          currentUser: userInfo.loginUsername
        })
        console.log('thisState', this.state);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  signUp(userInfo) {
    console.log('user info in app signUp', userInfo)
    axios({
      method: 'post',
      url: '/addUser',
      data: userInfo
    })
    .then((response) => {
      console.log('res from sign uo', response)
      this.setState({
        loggedIn: true,
        currentUser: userInfo.signUsername
      })
      console.log('thisState', this.state);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getAllMessage() {
    axios({
      method: 'get',
      url: '/allMessages'
    })
    .then((response) => {
      console.log('all messages', response)
      let messageArr = response.data;
      this.setState({
        messages: messageArr
      })
    })
    .catch((err) => {
      console.log(err);
    })
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
        <Messages getAllMessage={this.getAllMessage} messages={this.state.messages}/>
      </div>
    )
   }
  }
}

export default App;