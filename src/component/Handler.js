import React from "react";

const clickHandler = (event, count = 1) => {
  console.log("count", event, count);
};

const Handler = () => {
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
};

export default Handler;
