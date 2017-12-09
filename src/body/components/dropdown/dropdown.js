import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class Dropdown extends Component {

  constructor() {
    super();
    this.state = {
      value: -1
    };

    this.valueChanged = this.valueChanged.bind(this);
  }

  componentWillMount() {
    this.setState({
      value: this.props.value || -1
    });
  }

  render() {
    return (
      <div className="Dropdown">
        <h3>{this.props.title}</h3>
        <div className="wrapper">
          <select value={this.state.value} onChange={this.valueChanged}>
            <option value="-1">Rest</option>
            <option value="0">Jumping</option>
            <option value="1">Speed</option>
            <option value="2">Shooting</option>
            <option value="3">Technique</option>
          </select>
        </div>
      </div>
    );
  }

  valueChanged(event) {
    const value = event.target.value;
    this.setState({value: value});
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number
};

export default Dropdown;
