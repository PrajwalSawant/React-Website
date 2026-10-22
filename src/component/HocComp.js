import React from "react";

const UpdatedComponent = (OriginalComponent, Counter1) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + Counter1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          name="Armaan"
          count={this.state.count}
          increment={this.handleIncrement}
          //   {...this.props}
        />
      );
    }
  }

  return NewComponent;
};
export default UpdatedComponent;
