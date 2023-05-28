import Styles from "../../scss/events/events.module.scss";
import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";
import data from "../../assets/data/pastEventsData";

function PastEvents() {
  return (
    <div className={Styles.container}>
      <h2>Past Events</h2>
      <Carousel>
        {data.map((data: any) => (
          <EventCarousel
            key={data.id}
            name={data.name}
            image={data.image}
            des={data.description}
            date={data.date}
            btn={data.buttonTxt}
            link={data.link}
            pastEvent={true}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default PastEvents;
