import React from "react";
import { useState, useEffect } from "react";

const HookClient = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const logmousePosition = (e) => {
    console.log(`position`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`object`);
    window.addEventListener("mouseover", logmousePosition);

    return () => {
      console.log(`component object`);
      window.removeEventListener("mouseover", logmousePosition);
    };
  }, []);
  return (
    <div>
      Hook {x} and {y}
    </div>
  );
};

export default HookClient;
