import React from "react";
import Styles from "../../scss/Home/imgCarousel.module.scss";

type propType = {
  key: number;
  name: string;
  image: string;
  des: string;
};
function ImgCarousel(prop: propType) {
  return (
    <div className={Styles.container}>
      <img src={prop.image} alt="" />
      <div className={Styles.detailContainer}>
        <h3>{prop.name}</h3>
        <p>{prop.des}</p>
      </div>
    </div>
  );
}

export default ImgCarousel;
