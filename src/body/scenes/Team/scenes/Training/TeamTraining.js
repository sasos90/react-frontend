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

  constructor() {
    super();
    this.trainSubmit = this.trainSubmit.bind(this);
  }

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
        <button className="train" onClick={this.trainSubmit}>Train</button>
      </div>
    );
  }

  trainSubmit() {
    // TODO: Save training options!
  }
}

export default TeamTraining;
