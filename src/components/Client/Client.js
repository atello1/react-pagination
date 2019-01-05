import React, { Component } from "react";

class Client extends Component {


  render() {
    return (
<div className="client col-sm-3">
<img className="client__img" src={this.props.src} alt=""/>
<p className="client__name">
{this.props.name}

</p>

</div>
)
  }
}

export default Client;
