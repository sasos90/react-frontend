import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown">
        <h3>{this.props.title}</h3>
        <div className="wrapper">
          <select name="">
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
}

Dropdown.propTypes = {
  title: PropTypes.string
};

export default Dropdown;
