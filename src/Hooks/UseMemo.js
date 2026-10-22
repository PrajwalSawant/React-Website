import React from "react";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [counterone, setCounterOne] = useState(0);
  const [countertwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterone + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(countertwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterone % 2 === 0;
  }, [counterone]);

  return (
    <>
      <div>
        <button onClick={incrementOne}>
          Increment Counter one-{counterone}
        </button>
        <span>{isEven ? "even" : "odd"}</span>

        <button onClick={incrementTwo}>
          Increment counter two-{countertwo}
        </button>
      </div>
    </>
  );
};

export default UseMemo;
