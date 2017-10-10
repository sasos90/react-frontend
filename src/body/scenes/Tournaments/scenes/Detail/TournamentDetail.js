import React, { Component } from 'react';
import './TournamentDetail.css';
import {Link} from "react-router-dom";

class TournamentDetail extends Component {
  render() {
    const tournamentId = this.props.match.params.tournamentId;
    console.log('Tournament ID: ' + tournamentId);
    return (
      <div className="TournamentDetail">
        <Link to={`/tournaments`}>Back to tournaments</Link>
        <div>Tournament detail for ID: {tournamentId}</div>
      </div>
    );
  }
}

export default TournamentDetail;
