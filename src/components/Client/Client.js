import React, { Component } from "react";
import "./Client.css";
class Client extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="client">
          <img className="client__img" src={this.props.src} alt="" />
          <p className="client__name">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default Client;
