import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "armaan",
    };
  }

  // componentDidMount() {
  //     setInterval(()=>{
  //         this.setState(prevState)=>{

  //         }
  //     })
  // }

  render() {
    return (
      <div>
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
