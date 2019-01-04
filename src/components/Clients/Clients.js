import React, { Component } from "react";
import Client from "../Client/Client";

class Clients extends Component {
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
      <div className="row">
        {this.state.clients.map((client, index) => (
          <Client key={index} src={client.logo} name={client.name} />
        ))}
      </div>
    );
  }
}

export default Clients;
