import Styles from "../../scss/events/events.module.scss";
import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";
import data from "../../assets/data/upcomingEventsData";

function UpcomingEvents() {
  return (
    <div id="UpcomingEvents" className={Styles.container}>
      <h2>Upcoming Events</h2>
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
            pastEvent={false}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default UpcomingEvents;
