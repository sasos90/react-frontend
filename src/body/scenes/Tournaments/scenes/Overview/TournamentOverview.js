import React, { Component } from 'react';
import './TournamentOverview.css';
import {Link, withRouter} from "react-router-dom";
class TournamentOverview extends Component {

  currentUrl = '';

  render() {
    this.currentUrl = this.props.match.url;
    return (
      <div className="TournamentOverview">
        <p>Overview of tournaments</p>
        <Link to={`/tournaments/12`}>Tournament 12 DETAIL</Link>
      </div>
    );
  }
}

export default withRouter(TournamentOverview);
