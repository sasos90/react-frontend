// @flow
import React, { Component } from 'react';
import './App.css';
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

type Props = {
};

type State = {
  loggedIn: boolean
};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      loggedIn: this.isLoggedIn()
    });
  }

  isLoggedIn(): boolean {
    return true;
  }
}

export default App;
