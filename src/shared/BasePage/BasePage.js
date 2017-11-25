import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasePage.css';

class BasePage extends Component {

  render() {
    return (
      <div className="BasePage">
        <h2>{this.props.title}</h2>
        <div className='sub-page-wrapper'>{this.props.subPage}</div>
      </div>
    );
  }
}

BasePage.propTypes = {
  title: PropTypes.string.isRequired,
  subPage: PropTypes.element.isRequired
};

export default BasePage;
