import React, { Component } from 'react';
import './Login.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login} from "../../../actions/index";

class Login extends Component {

  constructor() {
    super();

    // define state
    this.state = {
      username: '',
      password: ''
    };

    this.loginUser = this.loginUser.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Login">
        <div>
          <input type="text" name="username" value={this.state.username} onChange={this.inputChange} placeholder="Username" />
          <input type="password" name="password" value={this.state.password} onChange={this.inputChange} placeholder="Password" />
          <button className="login-user" onClick={this.loginUser}>Login</button>
        </div>
      </div>
    );
  }

  loginUser() {
    this.props.loginSubmitted();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    login: login
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
