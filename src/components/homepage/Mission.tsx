import React from "react";
import styles from "../../scss/Home/Mission.module.scss";

const Mission = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>OUR MISSION</h1>
      <div className={styles.details}>
        <p className={styles.text}>
          To advocate for the innovation and development of open-source projects
          and strive to make the information on the web accessible and free for
          all. Vision - To acquire software freedom and to make the Internet
          free and accessible to all spark a movement a loud voice, a breeding
          ground for new ideas, a massive force, and a deep talent pool that
          powers the open web to new heights.
        </p>
      </div>
    </div>
  );
};

export default Mission;
