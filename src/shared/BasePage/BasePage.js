import React, { Component } from 'react';
import './BasePage.css';

class BasePage extends Component {

  render() {
    return (
      <div className="base-page-container">
        <h2>{this.props.title}</h2>
        <div className='sub-page-wrapper'>{this.props.subPage}</div>
      </div>
    );
  }
}

export default BasePage;
