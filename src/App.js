import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;
