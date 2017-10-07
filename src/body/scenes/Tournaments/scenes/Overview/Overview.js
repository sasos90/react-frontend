import React, { Component } from 'react';
import './Overview.css';
import {Link} from "react-router-dom";

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <p>Overview of tournaments</p>
        <Link to={`/tournament/12`}>Tournament DETAIL</Link>
      </div>
    );
  }
}

export default Overview;
