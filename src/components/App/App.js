import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clients from "../Clients/Clients";
import Searchbar from "../Searchbar/Searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
    this.searchFilter = this.searchFilter.bind(this);
    
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



  searchFilter(searchTerm, filterType) {
    alert(`https://api.renmark.ir/companies?${filterType}=${searchTerm} `);
    fetch(`https://api.renmark.ir/companies?${filterType}=${searchTerm}`)
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
        <Searchbar searchFilter={this.searchFilter} />
        <Clients clients={this.state.clients} />
      </div>
    );
  }
}

export default App;
