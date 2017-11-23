import React, { Component } from 'react';
import './Header.css';
import logo from './images/logo.svg';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login} from "../actions/index"
import Login from "./components/login/Login";
import {withRouter} from "react-router-dom";
import Modal from "../shared/Modal/Modal";

class Header extends Component {

  constructor() {
    super();

    // define state
    this.state = {
      registerPopupOpened: false,
      loginPopupOpened: false
    };

    this.openRegisterPopup = this.openRegisterPopup.bind(this);
    this.openLoginPopup = this.openLoginPopup.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.closeRegisterPopup = this.closeRegisterPopup.bind(this);
    this.closeLoginPopup = this.closeLoginPopup.bind(this);
  }

  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <div className="account-wrapper">
          {!this.props.user.loggedIn &&
          <div className="register-action">
            <button className="register" onClick={this.openRegisterPopup}>REGISTER</button>
          </div>}
          {!this.props.user.loggedIn &&
          <div className="login-action">
            <button className="login" onClick={this.openLoginPopup}>LOGIN</button>
          </div>}

          {this.state.registerPopupOpened && <Modal onClose={this.closeRegisterPopup} className="register-popup">
            <div>Popup for register</div>
          </Modal>}
          {this.state.loginPopupOpened && <Modal onClose={this.closeLoginPopup} className="login-popup">
            <div>
              <Login loginSubmitted={this.closeLoginPopup} />
            </div>
          </Modal>}
        </div>
      </div>
    );
  }

  loginUser() {
    this.closeLoginPopup();
    this.props.login({
      username: 'saso',
      password: 'sasoPw'
    });
  }

  openRegisterPopup() {
    this.setState({
      registerPopupOpened: true,
      loginPopupOpened: false
    });
  }

  closeRegisterPopup() {
    this.setState({
      registerPopupOpened: false
    });
  }

  openLoginPopup() {
    this.setState({
      loginPopupOpened: true,
      registerPopupOpened: false
    });
  }

  closeLoginPopup() {
    this.setState({
      loginPopupOpened: false
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

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Header));
