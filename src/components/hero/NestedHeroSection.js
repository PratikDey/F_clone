import React from "react";
import StartRemoteHiring from "./StartRemoteHiring";
import SignUpAndCode from "./SignUpAndCode";
import HeroImage from "./HeroImage";

export default function NestedHeroSection() {
  return (
    <div>
      <HeroImage />
      <div>
        <StartRemoteHiring />
      </div>
      <div>
        <SignUpAndCode />
      </div>
    </div>
  );
}
