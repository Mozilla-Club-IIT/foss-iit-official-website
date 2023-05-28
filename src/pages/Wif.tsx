import React from "react";
import Hero from "../components/about/Hero";
import TheTeam from "../components/about/AboutTheTeam";
import AboutTheWifTeam from "../components/wif/AboutTheWifTeam";
import Styles from "../scss/about/hero.module.scss";
import heroSVG from "../assets/svg/about-page.svg";

const Wif = () => {
  const ctaClicked = () => {
    window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className={Styles.container}>
        <h1 className={Styles.h1}>Get to know the committee of WIF !</h1>
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
      <AboutTheWifTeam />
    </div>
  );
};

export default Wif;
