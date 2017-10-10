import React, { Component } from 'react';
import './TournamentOverview.css';
import {Link} from "react-router-dom";

class TournamentOverview extends Component {
  render() {
    return (
      <div className="TournamentOverview">
        <p>Overview of tournaments</p>
        <Link to={`/tournament/12`}>Tournament DETAIL</Link>
      </div>
    );
  }
}

export default TournamentOverview;
