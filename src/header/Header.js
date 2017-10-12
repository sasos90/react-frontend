import React, { Component } from 'react';
import './Header.css';
import logo from './images/logo.svg';
import Popup from "../components/Popup/Popup";

class Header extends Component {

  constructor() {
    super();

    // define state
    this.state = {
      registerPopupOpened: false,
      loginPopupOpened: false
    };

    // bind the context to methods in order to use 'this' in them OR you can use the arrow syntax in the onClick attribute
    this.openRegisterPopup = this.openRegisterPopup.bind(this);
    this.openLoginPopup = this.openLoginPopup.bind(this);
  }

  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <div className="account-wrapper">
          <div className="register-action">
            <button className="register" onClick={this.openRegisterPopup}>REGISTER</button>
          </div>
          <div className="login-action">
            <button className="login" onClick={this.openLoginPopup}>LOGIN</button>
          </div>

          {this.state.registerPopupOpened && <Popup onClose={response => this.closeRegisterPopup(response)} className="register-popup">
            <div>Popup for register</div>
          </Popup>}
          {this.state.loginPopupOpened && <Popup onClose={response => this.closeLoginPopup(response)} className="login-popup">
            <div>Popup for login</div>
          </Popup>}
        </div>
      </div>
    );
  }

  openRegisterPopup() {
    this.setState({
      registerPopupOpened: true,
      loginPopupOpened: false
    });
  }

  closeRegisterPopup(data: any) {
    console.log(data);
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

  closeLoginPopup(data) {
    console.log(data);
    this.setState({
      loginPopupOpened: false
    });
  }
}

export default Header;
