import React from "react";
import Practice from "./practice";

const List = () => {
  const names = ["Tom", "Jammy", "Bruce"];
  const list = names.map((name) => <Practice name={name} />);
  return (
    <div>
      {/* <Practice/> */}
      {list}
    </div>
  );
};

export default List;
