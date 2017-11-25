import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';

class Player extends Component {
  render() {
    return (
      <div className="Player">
        <div className="name">{this.props.player.name}</div>
        <div className="age">{this.props.player.age} years</div>
        <div className="height">{this.props.player.height} cm</div>
        <div className="weight">{this.props.player.weight} kg</div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired
  }).isRequired
};

export default Player;
