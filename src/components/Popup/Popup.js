import React, {Component} from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="Popup">
        <div className="close-panel" onClick={() => this.props.onClose()}></div>
        <div className="content-wrapper">
          <div className="close-button" onClick={() => this.props.onClose()}>[X]</div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
