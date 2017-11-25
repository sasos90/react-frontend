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
import BasePage from "../../../shared/BasePage/BasePage";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact={true} path="/" render={() => (
            <BasePage title='Overview' subPage={<Overview />}/>
          )} />

          {/* Team */}
          <Route path="/players" render={() => (
            <BasePage title='Players' subPage={<TeamPlayers />}/>
          )} />
          <Route path="/tactics" render={() => (
            <BasePage title='Tactics' subPage={<TeamTactics />}/>
          )} />
          <Route path="/training" render={() => (
            <BasePage title='Training' subPage={<TeamTraining />}/>
          )} />
          <Route path="/hireplayers" render={() => (
            <BasePage title='Hire players' subPage={<TeamHirePlayers />}/>
          )} />

          {/* Matches */}
          <Route path="/tournaments" render={() => (
            <BasePage title='Tournaments' subPage={<TournamentOverview />}/>
          )} />
          <Route path="/signtournament" render={() => (
            <BasePage title='Sign for a tournament' subPage={<TournamentSignIn />}/>
          )} />

          {/* User */}
          <Route path="/settings" render={() => (
            <BasePage title='Settings' subPage={<UserSettings />}/>
          )} />
          <Route path="/finduser" render={() => (
            <BasePage title='Find user' subPage={<UserFindUser />}/>
          )} />
          <Route path="/forum" render={() => (
            <BasePage title='Forum' subPage={<UserForum />}/>
          )} />
          <Route path="/support" render={() => (
            <BasePage title='Support' subPage={<UserSupport />}/>
          )} />
          <Route render={() => (
            <div>404 NO MATCH</div>
          )} />
        </Switch>
      </div>
    );
  }
}

export default Content;
