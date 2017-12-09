import React, { Component } from 'react';
import './TeamTraining.css';
import Dropdown from "../../../../components/dropdown/dropdown";


class TeamTraining extends Component {

  trainingOptions = [
    {
      value: '-1',
      label: 'Rest'
    }, {
      value: '0',
      label: 'Jumping'
    }, {
      value: '1',
      label: 'Speed'
    }, {
      value: '2',
      label: 'Shooting'
    }, {
      value: '3',
      label: 'Technique'
    }
  ];
  render() {
    return (
      <div className="TeamTraining">
        <div className="day-part-wrapper">
          <div className="part morning">
            <Dropdown title={'Morning'} value={1} options={this.trainingOptions} />
          </div>
          <div className="part evening">
            <Dropdown title={'Evening'} value={2} options={this.trainingOptions} />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamTraining;
