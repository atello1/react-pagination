import React, { Component } from "react";
import Client from "../Client/Client";
import Pagination from "jw-react-pagination";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleItems: [],
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    fetch("https://api.renmark.ir/companies")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ exampleItems: response.data });
      });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.state.pageOfItems.map((client, index) => (
            <Client key={index} src={client.logo} name={client.name} />
          ))}
        </div>
        <div className="row">
          <Pagination
            items={this.state.exampleItems}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Clients;
