import React, { Component } from "react";
import Client from "../Client/Client";
import "./Clients.css";
import Pagination from "jw-react-pagination";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.props.clients ? (
            <Pagination
              items={this.props.clients}
              onChangePage={this.onChangePage}
              pageSize={10}
            />
          ) : (
            ""
          )}
        </div>
        <div className="row">
          {this.state.pageOfItems.map((client, index) => (
            <Client
              key={index}
              src={client.logo}
              name={client.name}
              id={client.id}
            />
          ))}
        </div>
        <div className="row">
          {this.props.clients ? (
            <Pagination
              items={this.props.clients}
              onChangePage={this.onChangePage}
              pageSize={10}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Clients;
