import React, { Component } from 'react';
import './PlayerDetail.css';
import {withRouter} from "react-router-dom";

class PlayerDetail extends Component {

  playerId;

  componentWillMount() {
    this.playerId = this.props.match.params.playerId;
  }

  render() {
    return (
      <div className="PlayerDetail">
        Player detail: {this.playerId}
      </div>
    );
  }
}

export default withRouter(PlayerDetail);
