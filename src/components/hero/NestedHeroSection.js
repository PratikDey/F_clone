import React from "react";
import StartRemoteHiring from "./StartRemoteHiring";
import SignUpAndCode from "./SignUpAndCode";

export default function NestedHeroSection() {
  return (
    <div>
      <h1>Matching developers with great companies.</h1>
      <StartRemoteHiring />
      <SignUpAndCode />
    </div>
  );
}
