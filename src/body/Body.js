import React, { Component } from 'react';
import './Body.css';
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";
import {Route} from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Menu />
        <Route exact={true} path="/" render={() => (
          <div>Root page</div>
        )} />
        <Route path="/somePath" component={Content} />
      </div>
    );
  }
}

export default Body;
