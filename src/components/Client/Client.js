import React, { Component } from "react";
import "./Client.css";
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    };

    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(id) {
    alert("Show details of the company with the id: " + this.props.id);
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="client" onClick={this.showDetails.bind(this)}>
          <img className="client__img" src={this.props.src} alt="" />
          <p className="client__name">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default Client;
