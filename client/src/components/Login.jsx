import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUsername: '',
      loginPassword: '',
      signUsername: '',
      signPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState({
      [e.target.name]: value
    })

    if (this.state.signUsername !== '') {
      this.setState({
        loginUsername: '',
        loginPassword: ''
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.loginUsername === '') {
      this.props.signUp(this.state);
    } else {
      this.props.login(this.state);
    }

  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <h1>Login</h1>

          <label>
            username
          <input name="loginUsername" onChange={this.handleChange} value={this.state.loginUsername}></input>
          </label>

          <label>
            password
          <input name="loginPassword" onChange={this.handleChange} value={this.state.loginPassword}></input>
          </label>

          <input type="submit"></input>

        </form>

        <form onSubmit={this.handleSubmit}>

          <h1>Sign Up</h1>

          <label>
            username
            <input name="signUsername" onChange={this.handleChange} value={this.state.signUsername}></input>
          </label>

          <label>
            password
            <input name="signPassword" onChange={this.handleChange} value={this.state.signPassword}></input>
          </label>

          <input type="submit"></input>
        </form>
      </div>
    )
  }

}

export default Login;