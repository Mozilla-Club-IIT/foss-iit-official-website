import React from "react";
import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";

type propType = {
  key: number;
  name: string;
  des: string;
  date: string;
  btn: string;
  pastEvent: boolean;
};

function EventCard(props: propType) {
  // Shortned month names to use in event carousel
  const monthStr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Setup date to use in carousel
  const eventDate = new Date(`${props.date}`);
  const day = eventDate.getDate();
  const month = monthStr[eventDate.getMonth()];
  const year = eventDate.getFullYear();

  return (
    <div className={Styles.container}>
      <div className={Styles.eventDate}>
        <div>
          <p>{day}</p>
          <p>{month}</p>
          <p>{year}</p>
        </div>
      </div>
      <div className={Styles.detailContainer}>
        <div className={Styles.eventDetails}>
          <h3>{props.name}</h3>
          <p>{props.des}</p>
          <div className={Styles.btnContainer}>
            <button>{props.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
