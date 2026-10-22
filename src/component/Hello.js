import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} is from {props.city}
      </h1>

      {props.children}
    </div>
  );
};

export default Hello;
