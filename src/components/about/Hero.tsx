import React from "react";
import Styles from "../../scss/about/hero.module.scss";
import heroSVG from "../../assets/svg/about-page.svg";
import scrollIcon from "../../assets/svg/scroll.svg";

function hero() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Get to know the team !</h1>
      <img className={Styles.heroSVG} src={heroSVG} alt="" />
      {/* <img className={Styles.scrollIcon} src={scrollIcon} alt="" /> */}
      <div className={Styles.arrow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default hero;
