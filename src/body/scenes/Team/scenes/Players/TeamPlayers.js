import React, { Component } from 'react';
import './TeamPlayers.css';
import {players} from "../../../../../mock/players";
import Player from "../../../../components/player/Player";

class TeamPlayers extends Component {

  render() {
    return (
      <div className="TeamPlayers">
        {this.getTeamPlayers()}
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
