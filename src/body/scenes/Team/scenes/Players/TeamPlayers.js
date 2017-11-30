import React, { Component } from 'react';
import './TeamPlayers.css';
import players from "../../../../../mock/players";
import Player from "../../../../components/player/Player";
import {Link} from "react-router-dom";

class TeamPlayers extends Component {

  render() {
    return (
      <div className="TeamPlayers">
        <div className="players-list">
          <Link to={'/tactics'}>
            <div className="Player add-new-player">
              <div className="image-wrapper">
                <img src={'unknown.png'} alt=""/>
              </div>
              <div className="data-wrapper">
                <div>Add new player</div>
              </div>
            </div>
          </Link>
          {this.getTeamPlayers()}
        </div>
      </div>
    );
  }

  getTeamPlayers() {
    return players.map((p, i) => (
      <Player key={p.id} player={p} />
    ));
  }
}

export default TeamPlayers;
