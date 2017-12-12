import React, { Component } from 'react';
import './TeamTraining.css';
import Dropdown from "../../../../components/dropdown/dropdown";


class TeamTraining extends Component {

  trainingOptions = [
    {
      value: -1,
      label: 'Rest'
    }, {
      value: 0,
      label: 'Jumping'
    }, {
      value: 1,
      label: 'Speed'
    }, {
      value: 2,
      label: 'Shooting'
    }, {
      value: 3,
      label: 'Technique'
    }
  ];

  // TODO: Get values from backend.
  morningTraining = 1;
  eveningTraining = 3;

  constructor() {
    super();
    this.trainSubmit = this.trainSubmit.bind(this);
    this.onMorningTrainingChange = this.onMorningTrainingChange.bind(this);
    this.onEveningTrainingChange = this.onEveningTrainingChange.bind(this);
  }

  render() {
    return (
      <div className="TeamTraining">
        <div className="day-part-wrapper">
          <div className="part morning">
            <Dropdown title={'Morning'} value={this.morningTraining} options={this.trainingOptions} valueChanged={this.onMorningTrainingChange} />
          </div>
          <div className="part evening">
            <Dropdown title={'Evening'} value={this.eveningTraining} options={this.trainingOptions} valueChanged={this.onEveningTrainingChange} />
          </div>
        </div>
        <button className="train" onClick={this.trainSubmit}>Train</button>
      </div>
    );
  }

  trainSubmit() {
    // TODO: Save training options!
    console.log('Morning training:', this.morningTraining);
    console.log('Evening training:', this.eveningTraining);
  }

  onMorningTrainingChange(value) {
    this.morningTraining = Number(value);
  }

  onEveningTrainingChange(value) {
    this.eveningTraining = Number(value);
  }
}

export default TeamTraining;
