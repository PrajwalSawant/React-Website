import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.greet()}>Submit</button>
    </div>
  );
};

export default Child;
