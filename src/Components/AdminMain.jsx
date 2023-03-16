import React from "react";
import CollapsibleExample from "./Navbar";
import Sidebar from "./sidebar";
import { Admin } from "./Admin";

export default function AdminMain() {
  return (
    <>
      <CollapsibleExample />
      <Admin />
    </>
  );
}
