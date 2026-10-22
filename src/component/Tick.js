import React, { Component } from "react";

class Tick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Tick;
