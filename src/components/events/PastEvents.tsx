import Styles from "../../scss/events/events.module.scss";
import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";
import { EventData, pastEventsData } from "../../assets/data/eventsData";

function PastEvents() {
  return (
    <div className={Styles.container}>
      <h2>Past Events</h2>
      <Carousel>
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
