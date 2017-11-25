import React, { Component } from 'react';
import './Content.css';
import {Route, Switch} from "react-router-dom";
import TournamentOverview from "../../scenes/Tournaments/scenes/Overview/TournamentOverview";
import TournamentSignIn from "../../scenes/Tournaments/scenes/SignIn/TournamentSignIn";
import Overview from "../../scenes/Overview/Overview";
import TeamPlayers from "../../scenes/Team/scenes/Players/TeamPlayers";
import TeamTactics from "../../scenes/Team/scenes/Tactics/TeamTactics";
import TeamTraining from "../../scenes/Team/scenes/Training/TeamTraining";
import TeamHirePlayers from "../../scenes/Team/scenes/HirePlayers/TeamHirePlayers";
import UserSettings from "../../scenes/User/scenes/Settings/UserSettings";
import UserFindUser from "../../scenes/User/scenes/FindUser/UserFindUser";
import UserForum from "../../scenes/User/scenes/Forum/UserForum";
import UserSupport from "../../scenes/User/scenes/Support/UserSupport";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact={true} path="/" render={() => (
            <Overview />
          )} />

          {/* Team */}
          <Route path="/players" component={TeamPlayers} />
          <Route path="/tactics" component={TeamTactics} />
          <Route path="/training" component={TeamTraining} />
          <Route path="/hireplayers" component={TeamHirePlayers} />

          {/* Matches */}
          <Route path="/tournaments" component={TournamentOverview} />
          <Route path="/signtournament" component={TournamentSignIn} />

          {/* User */}
          <Route path="/settings" component={UserSettings} />
          <Route path="/finduser" component={UserFindUser} />
          <Route path="/forum" component={UserForum} />
          <Route path="/support" component={UserSupport} />
          <Route render={() => (
            <div>404 NO MATCH</div>
          )} />
        </Switch>
      </div>
    );
  }
}

export default Content;
