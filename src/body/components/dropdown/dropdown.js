import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown">
        <h3>{this.props.title}</h3>
        <div className="wrapper">
          Items...
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string
};

export default Dropdown;
