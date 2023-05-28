import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import Vision from "../components/homepage/Vision";
import WhoWeAre from "../components/homepage/WhoWeAre";
import Carousel from "../components/Carousel";
import ImgCarousel from "../components/homepage/ImgCarousel";
import { EventData, upcomingEventsData } from "../assets/data/eventsData";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      {/* <Carousel>
        {upcomingEventsData.map((data: EventData) => (
          <ImgCarousel
            key={data.id}
            name={data.name}
            image={data.image}
            des={data.description}
          />
        ))}
      </Carousel> */}
      <Mission />
      <Vision />
    </div>
  );
};

export default Homepage;
