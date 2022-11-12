import React from "react";
import Styles from "../../../scss/events/AllEvents/AllEventsHero.module.scss";
import heroImg1 from "../../../assets/svg/event-hero-image1.svg";
import heroImg2 from "../../../assets/svg/event-hero-image2.svg";
import { Link } from "react-router-dom";

function AllEventsHero() {
  const ctaClicked = () => {
    window.scrollTo({ top: 750, left: 0, behavior: "smooth" }); // This scrolls the website to the top when user click on a link in nav bar
  };
  return (
    <div className={Styles.container}>
      <h1>ALL EVENTS</h1>

      <img src={heroImg1} alt="" className={Styles.img1} />
      <div className={Styles.elementContainer}>
        <Link onClick={ctaClicked} to="/events">
          <button className={Styles.eventBtn}>Events</button>
        </Link>
        <div className={Styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <img src={heroImg2} alt="" className={Styles.img2} />
    </div>
  );
}

export default AllEventsHero;
