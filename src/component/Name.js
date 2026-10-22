import React from "react";

const Name = () => {
  const names = ["aaa", "bbb ", "cccc"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
};

export default Name;
