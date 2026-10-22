import React from "react";

const Error = ({ heroName }) => {
  if (heroName === "Jerry") {
    throw new Error("Not a Hero");
  }
  return <div>{heroName}</div>;
};

export default Error;
