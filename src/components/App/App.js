import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clients from "../Clients/Clients";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };

  }

  componentDidMount() {
    fetch("https://api.renmark.ir/companies")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ clients: response.data });
      });
  }

  render() {
    return (
      <div className="App container">
      <Clients clients={this.state.clients}/>
      </div>
    );
  }
}

export default App;
