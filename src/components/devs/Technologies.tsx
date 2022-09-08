import React from "react";
import { BsGithub } from "react-icons/bs";
import Styles from "../../scss/meet-devs/technologies.module.scss";

import mongoLogo from "../../assets/svg/mongodb-logo.svg";
import expressLogo from "../../assets/svg/express-logo.svg";
import reactLogo from "../../assets/svg/react-logo.svg";
import nodeLogo from "../../assets/svg/nodejs-logo.svg";
import typeScriptLogo from "../../assets/svg/typescript-logo.svg";
import sassLogo from "../../assets/svg/sass-logo.svg";
import arrow from "../../assets/svg/curved-arrow.svg";

function technologies() {
  return (
    <div className={Styles.container}>
      <h2>Technologies used</h2>

      <div className={Styles.mernCards}>
        <div className={Styles.card}>
          <h3>M</h3>
          <img src={mongoLogo} alt="" />
          <p>MongoDB</p>
        </div>
        <div className={Styles.card}>
          <h3>E</h3>
          <img src={expressLogo} alt="" className={Styles.expressLogo} />
          <p>Express</p>
        </div>
        <div className={Styles.card}>
          <h3>R</h3>
          <img src={reactLogo} alt="" />
          <p>React</p>
        </div>
        <div className={Styles.card}>
          <h3>N</h3>
          <img src={nodeLogo} alt="" />
          <p>Node.js</p>
        </div>
      </div>
      <div className={Styles.subTech}>
        <div className={Styles.card}>
          <img src={typeScriptLogo} alt="" />
          <p>TypeScript</p>
        </div>
        <div className={Styles.card}>
          <img src={sassLogo} alt="" />
          <p>SASS</p>
        </div>
      </div>

      <div className={Styles.gitSection}>
        <div className={Styles.pointerArrowContainer}>
          <p>Take a sneak peek...</p>
          <img src={arrow} alt="" />
        </div>

        <div className={Styles.gitBtn}>
          <BsGithub />
          <p>Git Repository</p>
        </div>
      </div>
    </div>
  );
}

export default technologies;
