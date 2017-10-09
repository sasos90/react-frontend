import React, { Component } from 'react';
import './Body.css';
import Home from "./scenes/Home/Home";
import Game from "./components/game/Game";

class Body extends Component {

  constructor() {
    super();
    // @Todo: Set loggedIn state with REST API. Login functionality
    this.state = {
      loggedIn: true
    };
  }

  render() {
    return (
      <div className="Body">
        {this.state.loggedIn ? <Game /> : <Home />}
      </div>
    );
  }
}

export default Body;
