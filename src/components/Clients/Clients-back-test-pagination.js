import React, { Component } from "react";
import Client from "../Client/Client";
import Pagination from "react-paginating";
//import PaginationComponent from "../Pagination/Pagination";

const limit = 2;
const pageCount = 3;

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
currentPage: 1
    };
  }

  componentWillMount() {
    fetch("https://api.renmark.ir/companies")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
     this.setState({ clients: response.data });




console.log(this.state.clients[1]);
console.log(response);
      });
  }

  handlePageChange = (page, e) => {
    this.setState({
     currentPage: page
    });
  };

//this.state.clients[currentPage - 1]
  render() {
    const total = this.state.clients.length * limit;
        const { currentPage } = this.state;
    return (
      <div className="row">
        <h1>sss</h1>
          {this.state.clients.map((client, index) => (
            <Client key={index} src={client.logo} name={client.name} />
          ))}
<h1>sss</h1>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {">"}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}

export default Clients;
