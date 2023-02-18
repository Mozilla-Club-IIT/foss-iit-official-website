import React from "react";
import Styles from "../scss/footer.module.scss";

import mozillaClubLogo from "../assets/logos/Mozilla club logo.png";
import fossLogo from "../assets/logos/FOSS IIT logo.png";
import womenFossLogo from "../assets/logos/WIF logo.png";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  message: string;
};

function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const request = new Request("/api/subscribe", {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    fetch(request).then((response) => {
      response.json().then((value) => {
        if (response.status !== 200) {
          setError("email", {
            type: "focus",
            message: value.error,
          });
          return;
        }

        reset();
      });
    });
  };

  console.log(errors.email);

  // Scroll to top function when clicking on footer link
  const linkClicked = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className={Styles.footer}>
        {/* ---------- Footer section 1 ---------------- */}
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

        {/* ---------- Footer section 2 ---------------- */}
        <div className={Styles.section2}>
          <h4>Useful Links</h4>
          {/* Need to route all these links */}
          <div className={Styles.linkColumns}>
            <div className={Styles.column}>
              <NavLink to="#" onClick={linkClicked} >Join Us</NavLink>
              <NavLink to="events" onClick={linkClicked} >Events</NavLink>
              <NavLink to="about" onClick={linkClicked} >About</NavLink>
              <NavLink to="contact" onClick={linkClicked} >Contact Us</NavLink>
            </div>
            <div className={Styles.column}>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        {/* ---------- Footer section 3 ---------------- */}

        <div className={Styles.section3}>
          <div className={Styles.subscribe}>
            <h4>Subscribe</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={Styles.inputSection}
            >
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                className={
                  errors.email
                    ? `${Styles.email} ${Styles.emailErr}`
                    : Styles.email
                }
              />

              <input type="submit" className={Styles.emailSubBtn} value="➜" />
            </form>
          </div>

          {/* Social icons */}
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

      {/* Copyright section */}
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

export default Footer;
