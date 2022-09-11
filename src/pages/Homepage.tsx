import React from "react";
import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Vision from "../components/homepage/Vision";
import WhoWeAre from "../components/homepage/WhoWeAre";

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
