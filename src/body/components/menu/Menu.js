import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div>Menu</div>
        <ul>
          <li><NavLink to={`/`} exact={true} activeClassName={`active`}>Home</NavLink></li>
          <li><NavLink to={`/tournaments`} activeClassName={`active`}>Tournaments</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
