import React, { Component } from 'react';
import './Menu.css';
import {Link} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div>Menu</div>
        <ul>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/tournaments`}>Tournaments</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
