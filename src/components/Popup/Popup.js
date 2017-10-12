import React, {Component} from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="Popup" onClick={() => this.props.onClose({closed: true})}>
        <div className="content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
