import React, { Component } from "react";

class CounterC extends Component {
  state = {
    count: 0,
  };

  handleCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <div onClick={this.handleCounter}>{this.state.count}</div>;
  }
}

export default CounterC;
