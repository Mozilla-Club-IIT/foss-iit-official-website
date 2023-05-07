import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Vision from "../components/homepage/Vision";
import WhoWeAre from "../components/homepage/WhoWeAre";

import Carousel from "../components/Carousel";
import ImgCarousel from "../components/homepage/ImgCarousel";
import { useState, useEffect } from "react";
import { getPeople } from "../lib/api";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPeople().then((people)=>{

    })
  }, []);

  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Carousel>
        {data.map((data: any) => (
          <ImgCarousel
            key={data.id}
            name={data.title}
            image={data.image}
            des={data.info}
          />
        ))}
      </Carousel>
      <Mission />
      <Vision />
    </div>
  );
};

export default Homepage;
