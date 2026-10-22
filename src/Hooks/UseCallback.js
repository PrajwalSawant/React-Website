import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";

const UseCallBack = () => {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <h2>UseCallback Example</h2>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  );
};

export default UseCallBack;
