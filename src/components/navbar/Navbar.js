import React from "react";
import logo from "../../img/logo.gif";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img className="w-48" src={logo} alt="logo" />
        <div className="flex">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
}
