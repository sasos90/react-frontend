import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import './Modal.css';

const modalContainer = document.getElementById('modal-container');

class Modal extends Component {

  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentWillMount() {
    modalContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    modalContainer.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="close-panel" onClick={this.props.onClose}></div>
        <div className="content-wrapper">
          <div className="close-button" onClick={this.props.onClose}>[X]</div>
          {this.props.children}
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
