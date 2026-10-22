import React, { useEffect, useRef } from "react";
import { useState } from "react";

const UseRef = () => {
  const [timer, setTimer] = useState(0);
  const IntervalRef = useRef();

  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);
  return (
    <div>
      Counter ={timer}
      <button onClick={() => clearInterval(IntervalRef.current)}>Clear</button>
    </div>
  );
};

export default UseRef;
