import React, { Component } from 'react';
import './Body.css';
import Home from "./scenes/Home/Home";
import Game from "./components/game/Game";
import { connect } from 'react-redux';

class Body extends Component {
  render() {
    if (!this.props.user) {
      return (<Home />);
    }
    return (
      <div className="Body">
        {this.props.user.loggedIn ? <Game /> : <Home />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Body);
