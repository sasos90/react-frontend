import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div>Menu</div>
        <div className="menu-headline"><NavLink to={`/`} exact={true} activeClassName={`active`}>Overview</NavLink></div>
        <div className="menu-headline"><NavLink to={`/players`} activeClassName={`active`}>Team</NavLink></div>
        <ul>
          <li><NavLink to={`/players`} activeClassName={`active`}>Players</NavLink></li>
          <li><NavLink to={`/tactics`} activeClassName={`active`}>Tactics</NavLink></li>
          <li><NavLink to={`/training`} activeClassName={`active`}>Training</NavLink></li>
          <li><NavLink to={`/hireplayers`} activeClassName={`active`}>Hire players</NavLink></li>
        </ul>
        <div className="menu-headline"><NavLink to={`/tournaments`} activeClassName={`active`}>Matches</NavLink></div>
        <ul>
          <li><NavLink to={`/tournaments`} activeClassName={`active`}>Tournaments</NavLink></li>
          <li><NavLink to={`/signtournament`} activeClassName={`active`}>Sign in</NavLink></li>
        </ul>
        <div className="menu-headline"><NavLink to={`/settings`} activeClassName={`active`}>User</NavLink></div>
        <ul>
          <li><NavLink to={`/settings`} activeClassName={`active`}>Settings</NavLink></li>
          <li><NavLink to={`/finduser`} activeClassName={`active`}>Find user</NavLink></li>
          <li><NavLink to={`/forum`} activeClassName={`active`}>Forum</NavLink></li>
          <li><NavLink to={`/support`} activeClassName={`active`}>Help & Support</NavLink></li>
        </ul>
        <div className="menu-headline"><NavLink to={`/logout`} activeClassName={`active`}>Logout</NavLink></div>
      </div>
    );
  }
}

export default Menu;
