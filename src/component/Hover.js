import React, { Component } from "react";
import UpdatedComponent from "./HocComp";

class Hover extends Component {
  render() {
    return (
      <h2 onMouseOver={this.props.increment}>
        {this.props.name} Hovered {this.props.count} times
      </h2>
    );
  }
}

export default UpdatedComponent(Hover);

//export default Hover;
