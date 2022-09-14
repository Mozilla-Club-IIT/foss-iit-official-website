import React from "react";
import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Vision from "../components/homepage/Vision";
import WhoWeAre from "../components/homepage/WhoWeAre";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import data from "../assets/data/imgCarouselData";
import ImgCarousel from "../components/homepage/ImgCarousel";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Carousel>
        {data.map((data) => (
          <ImgCarousel key={data.id} name={data.name} image={data.image} />
        ))}
      </Carousel>
      <Mission />
      <Vision />
      <Footer />
    </div>
  );
};

export default Homepage;
