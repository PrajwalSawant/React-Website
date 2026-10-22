import React, { Component } from "react";
import UpdatedComponent from "./HocComp";

class Counter extends Component {
  render() {
    return (
      <button onClick={this.props.increment}>
        {this.props.name} Clicked {this.props.count} times
      </button>
    );
  }
}

export default UpdatedComponent(Counter);
// export default Counter;
