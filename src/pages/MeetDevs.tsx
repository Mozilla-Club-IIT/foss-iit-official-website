import React from "react";
import HeroSection from "../components/devs/HeroSection";
import Technologies from "../components/devs/Technologies";
import TheTeam from "../components/devs/TheTeam";
import Footer from "../components/Footer";

function MeetDevs() {
  return (
    <div>
      <HeroSection />
      <Technologies />
      <TheTeam />
      <Footer />
    </div>
  );
}

export default MeetDevs;
