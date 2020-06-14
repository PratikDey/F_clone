import React from "react";
import logo from "../../img/logo.gif";
import { Box } from "@material-ui/core";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <img src={logo} alt="logo" />
        <div>
          <SignIn />
          <SignUp />
        </div>
      </Box>
    </div>
  );
}
