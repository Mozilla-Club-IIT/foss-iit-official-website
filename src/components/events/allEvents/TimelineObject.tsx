import React from "react";
import Timelinkcard from "./TimelineCard";
import styles from "../../../scss/events/AllEvents/Timeline.module.scss";

const TimelineObject = () => {
  return (
    <div className={styles.timelineObject}>
      <Timelinkcard />
    </div>
  );
};

export default TimelineObject;
