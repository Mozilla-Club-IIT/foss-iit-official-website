import React from "react";
import Styles from "../scss/personCard.module.scss";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

// Specifying types of the props
type propType = {
  key: number;
  name: string;
  image: string;
  position: string;
  quote: string;
  fb: string;
  twt: string;
  in: string;
  insta: string;
  git: string;
  yt: string;
};

function PersonCard(props: propType) {
  return (
    <div className={Styles.personCard}>
      <img src={props.image} alt="" />
      <div className={Styles.detailContainer}>
        <div className={Styles.personDetails}>
          <h3>{props.name}</h3>
          <h4>{props.position}</h4>
          <p>{props.quote}</p>
        </div>
        <div className={Styles.socialIcons}>
          {props.fb && (
            <a href={props.fb} target="_blank" className={Styles.icon}>
              <BsFacebook className={Styles.facebookIcon} />
            </a>
          )}
          {props.twt && (
            <a href={props.twt} target="_blank" className={Styles.icon}>
              <BsTwitter className={Styles.twitterIcon} />
            </a>
          )}

          {props.in && (
            <a href={props.in} target="_blank" className={Styles.icon}>
              <FaLinkedinIn className={Styles.linkedInIcon} />
            </a>
          )}

          {props.insta && (
            <a href={props.insta} target="_blank" className={Styles.icon}>
              <BsInstagram className={Styles.instaIcon} />
            </a>
          )}

          {props.git && (
            <a href={props.git} target="_blank" className={Styles.icon}>
              <BsGithub className={Styles.gitIcon} />
            </a>
          )}

          {props.yt && (
            <a href={props.yt} target="_blank" className={Styles.icon}>
              <BsYoutube className={Styles.ytIcon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
