import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <div>
      <img src="../../../public/img/logo.gif" />
      <SignIn />
      <SignUp />
    </div>
  );
}
