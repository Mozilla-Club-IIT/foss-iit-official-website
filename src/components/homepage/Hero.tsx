import React from "react";
import styles from "../../scss/Home/Hero.module.scss";
import scrollDown from "../../assets/images/CTAarrows.png";
import heroBG1 from "../../assets/images/homeHero1.png";
import heroBG2 from "../../assets/images/homeHero2.png";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitle}>
        <h1 className={styles.mozillaText}>MOZILLA CAMPUS CLUB</h1>
        <h2 className={styles.andText}>AND</h2>
        <h1 className={styles.FOSSText}>FOSS Community Of IIT</h1>
        <p className={styles.subText}>Contribute, Inspire and Innovate</p>
      </div>

      <button className={styles.CTA}>Join Us</button>
      <div className={styles.arrow}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <img src={heroBG1} className={styles.heroBG1}></img>
      <img src={heroBG2} className={styles.heroBG2}></img>
    </div>
  );
};

export default Hero;
