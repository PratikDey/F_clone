import React from "react";
import logo from "../../img/logo.gif";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <div>
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
}
