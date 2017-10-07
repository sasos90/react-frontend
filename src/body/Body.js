import React, { Component } from 'react';
import './Body.css';
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Body;
