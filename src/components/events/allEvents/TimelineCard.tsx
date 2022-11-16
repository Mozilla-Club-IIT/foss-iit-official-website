import React from "react";
import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";
import Carousel from "../../Carousel";
import data from "../../../assets/data/upcomingEventsData";
import EventCard from "../allEvents/EventCard";

function Timelinkcard() {
  return (
    <div className={Styles.mainWrapper}>
      {data.map((data) => (
        <div className={Styles.mainContainer}>
          <EventCard
            key={data.id}
            name={data.name}
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
