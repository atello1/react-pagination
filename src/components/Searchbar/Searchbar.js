import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: " ",
      filterType: " "
    };
    this.updateStateFilters = this.updateStateFilters.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateStateFilters(filterType,e) {
    this.setState({
      searchTerm: e.target.value,
      filterType: filterType
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchFilter(this.state.searchTerm, this.state.filterType);
  }
  render() {
    return (
      <div className="searchBar row">
        <div className="col-sm-6">
          <p>Search by Exchange</p>
          <input type="text" onChange={(e) => this.updateStateFilters("exchange", e)} />

          <a href="" className="submit-exchange" onClick={this.handleSearch}>
            Submit
          </a>
        </div>
        <div className="col-sm-6">
          <p>Search by Ticker</p>
        <input type="text" onChange={(e) => this.updateStateFilters("ticker", e)} />
          <a href="" className="submit-exchange" onClick={this.handleSearch}>
            Submit
          </a>
        </div>
      </div>
    );
  }
}

export default Searchbar;
