import React, { Component } from 'react';
import './TournamentOverview.css';
import {Link, Route, Switch} from "react-router-dom";
import TournamentDetail from "../Detail/TournamentDetail";

class TournamentOverview extends Component {

  currentUrl = '';

  constructor() {
    super();
  }

  render() {
    this.currentUrl = this.props.match.url;
    return (
      <div className="TournamentOverview">
        <p>Overview of tournaments</p>
        <Link to={`/tournaments/12`}>Tournament DETAIL</Link>
        <Route path={`${this.currentUrl}/:tournamentId`} component={TournamentDetail} />
      </div>
    );
  }
}

export default TournamentOverview;
