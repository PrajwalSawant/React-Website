import React, { useEffect } from "react";
import { useState } from "react";

const TickHook = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <h2>{count}</h2>;
};

export default TickHook;
