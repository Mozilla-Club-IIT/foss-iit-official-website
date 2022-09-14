import React from "react";
import Styles from "../scss/footer.module.scss";

import mozillaClubLogo from "../assets/logos/Mozilla club logo.png";
import fossLogo from "../assets/logos/FOSS IIT logo.png";
import womenFossLogo from "../assets/logos/WIF logo.png";

import {
  BsFacebook,
  BsInstagram,
  BsArrowRight,
  BsYoutube,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function footer() {
  const linkClicked = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.section1}>
          <div className={Styles.clubLogos}>
            <img src={mozillaClubLogo} alt="" />
            <img src={fossLogo} alt="" />
            <img src={womenFossLogo} alt="" />
          </div>
          <p className={Styles.heading}>
            Mozilla campus club and foss community of IIT
          </p>
          <p className={Styles.description}>
            The Mozilla and FOSS community of IIT is proud to present the
            inaugral hackathon aimed to bring out young talent, aspiring
            idealists and enduring developers to sharpen and polish their
            skills.
          </p>
        </div>
        <div className={Styles.section2}>
          <h4>Useful Links</h4>
          {/* Need to route all these links */}
          <div className={Styles.linkColumns}>
            <div className={Styles.column}>
              <a href="#">Join Us</a>
              <a href="#">Events</a>
              <Link onClick={linkClicked} to="/about">
                About
              </Link>
              <a href="#">Contact Us</a>
            </div>
            <div className={Styles.column}>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className={Styles.section3}>
          <div className={Styles.subscribe}>
            <h4>Subscribe</h4>
            <div className={Styles.inputSection}>
              <input type="text" placeholder="Email" className={Styles.email} />
              <div className={Styles.emailSubBtn}>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className={Styles.socials}>
            <h4>Connect with Us</h4>
            <div className={Styles.socialIcons}>
              <a
                href="https://www.facebook.com/IITMozillaCampusClub"
                target="_blank"
              >
                <div className={Styles.icon}>
                  <BsFacebook className={Styles.facebookIcon} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/IITMozillaCampusClub"
                target="_blank"
              >
                <div className={Styles.icon}>
                  <BsYoutube className={Styles.ytIcon} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/IITMozillaCampusClub"
                target="_blank"
              >
                <div className={Styles.icon}>
                  <FaLinkedinIn className={Styles.linkedInIcon} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/IITMozillaCampusClub"
                target="_blank"
              >
                <div className={Styles.icon}>
                  <BsInstagram className={Styles.instaIcon} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.copyrights}>
        <p>
          Copyright © 2022 | Meet the{" "}
          <Link onClick={linkClicked} to="/devs">
            devs
          </Link>
          {/* Need to route */}
        </p>
      </div>
    </footer>
  );
}

export default footer;
