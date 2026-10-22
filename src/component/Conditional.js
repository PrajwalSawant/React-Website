import React from "react";

const Conditional = () => {
  const isLoggedIn = true;
  return <div>Welcome {isLoggedIn && "Armaan"}</div>;
};

export default Conditional;
