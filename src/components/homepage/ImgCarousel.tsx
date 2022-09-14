import React from "react";

type propType = {
  key: number;
  name: string;
  image: string;
};
function ImgCarousel(prop: propType) {
  return (
    <>
      <img src={prop.image} alt="" />
    </>
  );
}

export default ImgCarousel;
