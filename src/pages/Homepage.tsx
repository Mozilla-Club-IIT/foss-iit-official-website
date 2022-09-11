import React from "react";
import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import Vision from "../components/Home/Vision";
import WhoWeAre from "../components/Home/WhoWeAre";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Mission />
      <Vision />
    </div>
  );
};

export default Homepage;
