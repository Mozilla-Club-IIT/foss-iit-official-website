import React from "react";
import Styles from "../../scss/events/eventCarousel.module.scss";

type propType = {
  key: number;
  name: string;
  image?: string;
  des: string;
  date: string;
  btn?: string;
  link?: string;
  pastEvent: boolean;
};

function eventCarousel(props: propType) {
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
      <div className={Styles.imgDateContainer}>
        <img src={props.image} alt="" />
        {/* Check whether the event is past event or not and add specific class name */}
        <div
          className={
            props.pastEvent
              ? `${Styles.dateContainer} ${Styles.pastEvent}`
              : `${Styles.dateContainer}`
          }
        >
          <div>
            <p>{day}</p>
            <p>{month}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
      <div className={Styles.detailContainer}>
        <div className={Styles.eventDetails}>
          <h3>{props.name}</h3>
          <p>{props.des}</p>
        </div>

        <div className={Styles.btnContainer}>
          <button>{props.btn}</button>
        </div>
      </div>
    </div>
  );
}

export default eventCarousel;
