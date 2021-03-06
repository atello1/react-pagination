import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: " ",
      filterType: " "
    };
    this.updateStateFilters = this.updateStateFilters.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.handleOnfocus = this.handleOnfocus.bind(this);
  }

  updateStateFilters(filterType, e) {
    this.setState({
      searchTerm: e.target.value,
      filterType: filterType
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchFilter(this.state.searchTerm, this.state.filterType);
  }

  clearFilters(e) {
    e.preventDefault();
    this.props.searchFilter("", "");
  }

  handleOnfocus(e) {
    document.getElementById("inputExchange").value = "";
    document.getElementById("inputTicker").value = "";
    this.setState({
      searchTerm: "",
      filterType: ""
    });
  }

  render() {
    return (
      <div className="searchBar">
        <div className="align-content-center justify-content-center row searchBarInner">
          <div className="col-sm-12">
            <h1>Our clients</h1>
          </div>
          <div className="col-md-4">
            <p class="label">Search by Exchange</p>

            <div class="searchArea">
              <a onClick={this.handleSearch}>Submit</a>
              <div class="inputDiv">
                <input
                  id="inputExchange"
                  type="text"
                  onFocus={this.handleOnfocus}
                  onChange={e => this.updateStateFilters("exchange", e)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p class="label">Search by Ticker</p>

            <div class="searchArea">
              <a onClick={this.handleSearch}>Submit</a>
              <div class="inputDiv">
                <input
                  id="inputTicker"
                  type="text"
                  onFocus={this.handleOnfocus}
                  onChange={e => this.updateStateFilters("ticker", e)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <a className="seeAll" href="" onClick={this.clearFilters}>
              See all clients
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
