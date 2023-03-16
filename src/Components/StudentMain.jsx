import React from "react";
import { Login } from "./Login";
import CollapsibleExample from "./Navbar";
import { Signin } from "./Signin";

export const StudentMain = () => {
  return (
    <div>
      <CollapsibleExample />
      <Login />
      <Signin />
    </div>
  );
};
