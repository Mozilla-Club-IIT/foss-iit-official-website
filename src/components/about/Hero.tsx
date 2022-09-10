import React from "react";
import Styles from "../../scss/about/hero.module.scss";
import heroSVG from "../../assets/svg/about-page.svg";
import background from "../../assets/svg/background.svg";
import scrollIcon from "../../assets/svg/scroll.svg";

function hero() {
  return (
    <div className={Styles.container}>
      {/* <img className={Styles.background} src={background} /> */}
      <h1 className={Styles.h1}>Get to know the team !</h1>
      <img className={Styles.hero} src={heroSVG} alt="" />
      <img src={scrollIcon} alt="" className={Styles.scrollIcon} />
    </div>
  );
}

export default hero;
