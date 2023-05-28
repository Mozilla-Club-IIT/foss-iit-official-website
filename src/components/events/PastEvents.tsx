import Styles from "../../scss/events/events.module.scss";
// import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";
import { EventData, pastEventsData } from "../../assets/data/eventsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PastEvents() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={Styles.container}>
      <h2>Past Events</h2>
      <Carousel responsive={responsive}>
        {pastEventsData.map((data: EventData) => (
          <EventCarousel
            key={data.id}
            name={data.name}
            image={data.image}
            des={data.description}
            date={data.date}
            btn={data.buttonText}
            link={data.link}
            pastEvent={true}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default PastEvents;
