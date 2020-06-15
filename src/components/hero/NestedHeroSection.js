import React from "react";
import StartRemoteHiring from "./StartRemoteHiring";
import SignUpAndCode from "./SignUpAndCode";
import { Grid } from "@material-ui/core";

export default function NestedHeroSection() {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item sm={3}>
        <StartRemoteHiring />
      </Grid>
      <Grid item sm={3}>
        <SignUpAndCode />
      </Grid>
    </Grid>
  );
}
