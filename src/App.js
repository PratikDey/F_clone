import React from "react";
import Navbar from "./components/navbar/Navbar";

import NestedHeroSection from "./components/hero/NestedHeroSection";

function App() {
  return (
    <div>
      <div className="w-9/12 my-0 mx-auto max-w-full py-5 top-0">
        <Navbar />
        <h1 className="my-8 text-4xl font-semibold">
          Matching developers jug jug dhore
        </h1>

        <NestedHeroSection />
      </div>
    </div>
  );
}

export default App;
