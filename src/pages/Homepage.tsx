import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Vision from "../components/homepage/Vision";
import WhoWeAre from "../components/homepage/WhoWeAre";

import Carousel from "../components/Carousel";
import ImgCarousel from "../components/homepage/ImgCarousel";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = new Request(
      `/api/event?sort=date&order=DESC`
    );

    fetch(request)
      .then((response) => {
        response.json()
          .then((jsonData) => {
            setData(jsonData.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

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
