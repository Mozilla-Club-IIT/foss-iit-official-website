import React from "react";
import teamImage from "../../assets/svg/team.svg";
import scrollIcon from "../../assets/svg/scroll.svg";
import Styles from "../../scss/meet-devs/heroSection.module.scss";

function HeroSection() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Meet the devs</h1>
      <h4>
        Get to the know the ins and outs of the page and the team behind it{" "}
      </h4>
      <img src={teamImage} alt="" className={Styles.teamImage} />
      <img src={scrollIcon} alt="" className={Styles.scrollIcon} />
    </div>
  );
}

export default HeroSection;
