import React from "react";
import Child from "./Child";

const Parent = () => {
  const greethandler = () => {
    alert("hello User");
  };

  return <Child greet={greethandler} />;
};

export default Parent;
