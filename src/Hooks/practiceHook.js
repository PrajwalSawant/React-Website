import React, { useState } from "react";

const PracticeHook = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  // incrementFive = () => {
  //   for (let i = 0; i < 5; i++) {ll
  //     setCount((prevCount) => prevCount + 1);
  //   }
  // };
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      {/* <button onClick={() => incrementFive}>Increment</button> */}
    </div>
  );
};

export default PracticeHook;
