import React from "react";
import Timelinkcard from "./TimelineCard";
import styles from "../../../scss/events/AllEvents/Timeline.module.scss";

const TimelineObject = () => {
  return (
    <div className={styles.timelineObject}>
      <div className={styles.timeline}></div>
      <Timelinkcard />
    </div>
  );
};

export default TimelineObject;
