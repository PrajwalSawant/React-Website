import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "react",
    };
  }
  handleUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleTopic = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert(`${this.state.username}  ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>user</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUser}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopic}>
            <option value="react">React</option>
            <option value="node">Node</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
