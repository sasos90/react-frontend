// @flow
import React from 'react';
import './App.css';
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import {setLoggedIn} from "./actions/index";

type Props = {
};

type State = {
};

let user = localStorage.user;
if (user) {
  store.dispatch(setLoggedIn(JSON.parse(user)));
}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Body />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }

  componentDidMount() {
  }
}

export default App;
