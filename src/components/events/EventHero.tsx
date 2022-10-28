import React from "react";
import Styles from "../../scss/events/eventHero.module.scss";
import heroImg1 from "../../assets/svg/event-hero-image1.svg";
import heroImg2 from "../../assets/svg/event-hero-image2.svg";

function EventHero() {
  //scroll to upcoming events section
  // const ctaClicked = () => {
  //   window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
  // };
  const ctaClicked = () => {
    const element = document.getElementById("UpcomingEvents");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={Styles.container}>
      <h1>EVENTS</h1>

      <img src={heroImg1} alt="" className={Styles.img1} />
      <div className={Styles.elementContainer}>
        <button className={Styles.eventBtn}>All events</button>
        {/* Animated scroll button */}
        <a onClick={ctaClicked}>
          <div className={Styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <img src={heroImg2} alt="" className={Styles.img2} />
    </div>
  );
}

export default EventHero;
