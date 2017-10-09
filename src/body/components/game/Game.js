import React, { Component } from 'react';
import './Game.css';
import Menu from "../menu/Menu";
import Content from "../content/Content";

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Game;
