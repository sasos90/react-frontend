import React, { Component } from 'react';
import './Menu.css';
import {Link} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div>Menu</div>
        <Link to={`/tournaments`}>Go to tournaments</Link>
      </div>
    );
  }
}

export default Menu;
