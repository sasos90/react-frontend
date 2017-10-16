import React, {Component} from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="Popup">
        <div className="close-panel" onClick={() => this.props.onClose({closed: true})}></div>
        <div className="content-wrapper">
          <div className="close-button" onClick={() => this.props.onClose({closed: true})}>[X]</div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
