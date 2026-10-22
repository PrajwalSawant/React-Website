import React from "react";
import { UserConsumer } from "./userContext";

function ComponentE() {
  return (
    <UserConsumer>
      {(username) => {
        return <div>Hello {username}</div>;
      }}
    </UserConsumer>
  );
}

export default ComponentE;
