import React, { Component } from 'react';
import './Detail.css';
import {Link} from "react-router-dom";

class Overview extends Component {
  render() {
    const tournamentId = this.props.match.params.tournamentId;
    console.log('Tournament ID: ' + tournamentId);
    return (
      <div className="Detail">
        <Link to={`/tournaments`}>Back to tournaments</Link>
        <div>Tournament detail for ID: {tournamentId}</div>
      </div>
    );
  }
}

export default Overview;
