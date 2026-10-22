import React from "react";
import { useState } from "react";
import HookClient from "../component/HookClient";

const ToggleHook = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <HookClient />}
    </div>
  );
};

export default ToggleHook;
