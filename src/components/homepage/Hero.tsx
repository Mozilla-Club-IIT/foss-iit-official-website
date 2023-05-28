import styles from "../../scss/Home/Hero.module.scss";
import heroBG1 from "../../assets/images/homeHero1.png";
import heroBG2 from "../../assets/images/homeHero2.png";

const Hero = () => {
  const ctaClicked = () => {
    const element = document.getElementById("WhoWeAre");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitle}>
        <h1 className={styles.mozillaText}>MOZILLA CAMPUS CLUB</h1>
        <h2 className={styles.andText}>AND</h2>
        <h1 className={styles.FOSSText}>FOSS Community Of IIT</h1>
        <p className={styles.subText}>Contribute, Inspire and Innovate</p>
      </div>

      <button onClick={ctaClicked} className={styles.CTA}>
        Explore
      </button>

      {/* Animated scroll button */}
      <a onClick={ctaClicked}>
        <div className={styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>

      {/* Man with laptop SVG */}
      <img src={heroBG1} className={styles.heroBG1}></img>

      {/* Girl SVG */}
      <img src={heroBG2} className={styles.heroBG2}></img>
    </div>
  );
};

export default Hero;
