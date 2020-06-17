import React from "react";
import StartRemoteHiring from "./StartRemoteHiring";
import SignUpAndCode from "./SignUpAndCode";
import HeroImage from "./HeroImage";

export default function NestedHeroSection() {
  return (
    <div className="grid grid-cols-3">
      <StartRemoteHiring />
      <SignUpAndCode />
      <HeroImage />
    </div>
  );
}
