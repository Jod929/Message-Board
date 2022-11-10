import React, { Component } from 'react';
import Login from './Login.jsx';
import Messages from './Messages.jsx';
import Post from './Post.jsx';
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
    this.postMessage = this.postMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
  }

  login(userInfo) {

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
      let messageArr = response.data;
      this.setState({
        messages: messageArr
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  postMessage(userInfo) {

    axios({
      method: 'post',
      url: '/postMessage',
      data: userInfo
    })
    .then((response) => {
      let messageArr = response.data;

      this.setState({
        messages: messageArr
      })
    })
  }

  deleteMessage(messageInfo) {
    // console.log('message Info', messageInfo);
    axios({
      method: 'post',
      url: '/deleteMessage',
      data: messageInfo
    })
    .then((response) => {
      let messages = response.data;

      this.setState({
        messages: messages
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  editMessage(messageInfo) {
    console.log(messageInfo)
    let editInfo = {
      username: messageInfo.name,
      oldMessage: messageInfo.oldMessage,
      newMessage: messageInfo.newMessage
    }

    axios({
      method: 'put',
      url: '/editMessage',
      data: editInfo
    })
    .then((response) => {
      let messages = response.data;
      this.setState({
        messages: messages
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
         <Messages getAllMessage={this.getAllMessage} deleteMessage={this.deleteMessage} messages={this.state.messages} />
      </div>

    )
   } else {
    return (
      <div>
        <Post user={this.state.currentUser} postMessage={this.postMessage}/>
        <Messages getAllMessage={this.getAllMessage} deleteMessage={this.deleteMessage} editMessage={this.editMessage} messages={this.state.messages} currentUser={this.state.currentUser}/>
      </div>
    )
   }
  }

}

export default App;