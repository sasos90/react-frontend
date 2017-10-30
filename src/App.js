// @flow
import React from 'react';
import './App.css';
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";

type Props = {
};

type State = {
};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }

  componentDidMount() {
  }
}

export default App;
