import React, { Component } from 'react';
import './Content.css';
import {Route} from "react-router-dom";
import Overview from "../../scenes/Tournaments/scenes/Overview/Overview";
import Detail from "../../scenes/Tournaments/scenes/Detail/Detail";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Route exact={true} path="/" render={() => (
          <div>Home page</div>
        )} />
        <Route path="/tournaments" component={Overview} />
        <Route path="/tournament/:tournamentId" component={Detail} />
      </div>
    );
  }
}

export default Content;
