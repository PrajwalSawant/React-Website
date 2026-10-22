import React, { Component } from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    // this.incrementFive = this.incrementFive.bind(this);
  }
  handleCount() {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // console.log(this.state.count);

    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
    console.log(this.state.count);
  }
  incrementFive = () => {
    this.handleCount();
    this.handleCount();
    this.handleCount();
    this.handleCount();
    this.handleCount();
  };

  render() {
    return (
      <div>
        <div>count -{this.state.count}</div>
        {/* <button onClick={() => this.incrementFive()}>Increment</button> */}
        <button onClick={this.incrementFive}>Increment</button>
      </div>
    );
  }
}

export default Count;
