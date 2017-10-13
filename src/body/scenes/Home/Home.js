import React, { Component } from 'react';
import './Home.css';
import bannerPicture from './img/banner-picture.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="startup-wrapper">
          <div className="banner-wrapper">
            <img src={bannerPicture} alt=""/>
          </div>
          <div className="start-tournament-wrapper">
            <input type="text" placeholder="Pick your teamname" />
            <button>Play the tournament</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
