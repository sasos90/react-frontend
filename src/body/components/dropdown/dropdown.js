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
            {this.props.options.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    selected: PropTypes.boolean
  })).isRequired
};

export default Dropdown;
