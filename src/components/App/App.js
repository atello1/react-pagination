import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clients from "../Clients/Clients";

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Clients />
      </div>
    );
  }
}

export default App;
