import React, { Component } from 'react';
import './TeamTraining.css';
import Dropdown from "../../../../components/dropdown/dropdown";


class TeamTraining extends Component {
  render() {
    return (
      <div className="TeamTraining">
        <div className="day-part-wrapper">
          <div className="part morning">
            <Dropdown title={'Morning'} />
          </div>
          <div className="part evening">
            <Dropdown title={'Evening'} />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamTraining;
