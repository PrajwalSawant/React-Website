import React, { Component } from "react";
import Practice from "./practice";

class Practicetxt extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage(childName) {
    // this.setState({
    // message: "Thankyou user",
    alert(`hello ${this.state.message} from ${childName}`);

    // });
  }
  render() {
    // return (
    //   <div>
    // if (this.state.isLogin) {
    //   return <div>welcome user</div>;
    // } else {
    //   return <div>login please</div>;
    // }
    // let text;
    // if (this.state.isLogin) {
    //   text = <div>welcome user</div>;
    // } else {
    //   text = <div>login plz</div>;
    // }
    // return <div>{text}</div>;
    return this.state.isLogin && <div>welcome user</div>;

    {
      /* <h3> {this.state.message}</h3> */
    }
    {
      /* <button onClick={() => this.changeMessage()}>Submit</button> */
    }
    {
      /* <Practice greet={this.changeMessage} /> */
    }

    //   </div>
    // );
  }
}

export default Practicetxt;
