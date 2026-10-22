import React from "react";
import { useState } from "react";

const Element = () => {
  const [message, setMessage] = useState("Hello User");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("thankyou User")}>submit</button>
    </div>
  );
};

export default Element;
