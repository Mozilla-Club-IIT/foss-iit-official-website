import React from "react";
import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Vision from "../components/homepage/Vision";
import WhoWeAre from "../components/homepage/WhoWeAre";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Mission />
      <Vision />
      <Footer />
    </div>
  );
};

export default Homepage;
