import React from "react";
import Styles from "../../scss/about/hero.module.scss";
import heroSVG from "../../assets/svg/about-page.svg";
import { Link } from "react-router-dom";

function hero() {
  // Scrolls viewport to top of team member cards section
  const ctaClicked = () => {
    window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
  };
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Get to know the team !</h1>
      {/* Team SVG */}
      <img className={Styles.heroSVG} src={heroSVG} alt="" />
      {/* CTA arrows animation */}
      <a onClick={ctaClicked}>
        <div className={Styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  );
}

export default hero;
