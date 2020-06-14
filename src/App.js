import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Container } from "@material-ui/core";
import StartRemoteHiring from "./components/hero/StartRemoteHiring";
import SignUpAndCode from "./components/hero/SignUpAndCode";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navbar />
        <h1>Matching developers with great companies.</h1>
        <StartRemoteHiring />
        <SignUpAndCode />
      </Container>
    </div>
  );
}

export default App;
