import React, { Component } from 'react';
import './Content.css';
import {Route} from "react-router-dom";
import TournamentOverview from "../../scenes/Tournaments/scenes/Overview/TournamentOverview";
import TournamentDetail from "../../scenes/Tournaments/scenes/Detail/TournamentDetail";
import TournamentSignIn from "../../scenes/Tournaments/scenes/SignIn/TournamentSignIn";
import Overview from "../../scenes/Overview/Overview";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Route exact={true} path="/" render={() => (
          <Overview />
        )} />

        {/* Team */}
        <Route path="/players" component={TournamentOverview} />
        <Route path="/tactics" component={TournamentOverview} />
        <Route path="/training" component={TournamentOverview} />
        <Route path="/hireplayers" component={TournamentOverview} />

        {/* Matches */}
        <Route path="/tournaments" component={TournamentOverview} />
        <Route path="/tournament/:tournamentId" component={TournamentDetail} />
        <Route path="/signtournament" component={TournamentSignIn} />

        {/* User */}
        <Route path="/settings" component={TournamentOverview} />
        <Route path="/finduser" component={TournamentDetail} />
        <Route path="/forum" component={TournamentSignIn} />
        <Route path="/support" component={TournamentSignIn} />
      </div>
    );
  }
}

export default Content;
