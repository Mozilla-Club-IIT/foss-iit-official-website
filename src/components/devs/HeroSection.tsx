import teamImage from "../../assets/svg/team.svg";
import Styles from "../../scss/meet-devs/heroSection.module.scss";

function HeroSection() {
  const ctaClicked = () => {
    const element = document.getElementById("technologies");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Meet the devs</h1>
      <h4>
        Get to the know the ins and outs of the page and the team behind it{" "}
      </h4>
      <img src={teamImage} alt="" className={Styles.teamImage} />
      {/* Animated scroll button */}
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

export default HeroSection;
