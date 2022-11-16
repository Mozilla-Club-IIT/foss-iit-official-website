import React from "react";
import TimelineObject from "./TimelineObject";
import styles from "../../../scss/events/AllEvents/Timeline.module.scss";

const Timeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <TimelineObject />
    </div>
  );
};

export default Timeline;
