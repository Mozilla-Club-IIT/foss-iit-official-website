import React from "react";
import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";
import Carousel from "../../Carousel";
import data from "../../../assets/data/upcomingEventsData";
import EventCarousel from "../eventCarousel";

function Timelinkcard() {
  return (
    <div className={Styles.container}>
      
        {data.map((data) => (
        <div className={Styles.container}>
        <EventCarousel
            key={data.id}
            name={data.name}
            image={data.image}
            des={data.description}
            date={data.date}
            btn={data.buttonTxt}
            pastEvent={data.pastEvent}
          />
          </div>
        ))}
      </div>
  );
}

export default Timelinkcard;