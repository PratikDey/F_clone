import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Container } from "@material-ui/core";

import NestedHeroSection from "./components/hero/NestedHeroSection";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navbar />
        <NestedHeroSection />
      </Container>
    </div>
  );
}

export default App;
