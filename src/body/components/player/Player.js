import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';

class Player extends Component {

  render() {
    return (
      <div className="Player" onClick={this.toPlayerDetail.bind(this, this.props.player)}>
        <div className="image-wrapper">
          <img src={this.props.player.picture} alt=""/>
        </div>
        <div className="data-wrapper">
          <div className="name">{this.props.player.name}</div>
          <div className="age">{this.props.player.age} years</div>
          <div className="height-weight">{`${this.props.player.height} cm, ${this.props.player.weight} kg`}</div>
          <div className="skills-wrapper">
            <div className="speed">Speed: {this.props.player.skills.speed}</div>
            <div className="technique">Technique: {this.props.player.skills.technique}</div>
            <div className="jump">Jump: {this.props.player.skills.jump}</div>
            <div className="experience">Experience: {this.props.player.skills.experience}</div>
            <div className="fatigue">Fatigue: {this.props.player.skills.fatigue}</div>
          </div>
        </div>
      </div>
    );
  }

  toPlayerDetail(player) {
    console.table(player);
  }
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    skills: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      technique: PropTypes.number.isRequired,
      jump: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      fatigue: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default Player;
