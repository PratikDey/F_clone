import React from "react";
import Navbar from "./components/navbar/Navbar";

import NestedHeroSection from "./components/hero/NestedHeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Macthing developers jug jug dhore</h1>
      <NestedHeroSection />
    </div>
  );
}

export default App;
