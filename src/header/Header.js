import React, { Component } from 'react';
import './Header.css';
import logo from './images/logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React!</h2>
                </div>
            </div>
        );
    }
}

export default Header;
