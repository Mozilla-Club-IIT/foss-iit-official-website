import { useEffect, useRef, useState } from "react";
import Styles from "../scss/Carousel.module.scss";

import {
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";

type propType = {
  children: any[]
};

// An array of event/blog objects will be passed into the carousel as children
function Carousel(props: propType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef<any>([]);
  const firstRenderRef = useRef(true);

  const slides = props.children.map((item: any, index: number) => {
    return (
      <div
        key={index}
        ref={(ref) => { slidesRef.current.push(ref) }}
      >
        {item}
      </div>
    );
  });

  // What type is this supposed to be?
  const prevSlide = (e: any) => {
    e.preventDefault();

    setCurrentIndex((prevState) => {
      return (prevState === 0) ? (props.children.length - 1) : (prevState - 1);
    });
  }

  const nextSlide = (e: any) => {
    e.preventDefault();

    setCurrentIndex((prevState) => {
      return (prevState === (props.children.length - 1)) ? 0 : (prevState + 1);
    });
  }

  useEffect(() => {
    // Check if this is the first render
    if (!firstRenderRef.current) {
      // Use a native DOM method to scroll to the current slide
      slidesRef.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    } else {
      firstRenderRef.current = false;
    }
  }, [currentIndex]);

  return (
    <div className={Styles.carousel}>
      <button className={Styles.carouselButton} onClick={prevSlide}>
        <BsArrowLeft />
      </button>
      <div className={Styles.cardContainer}>
        {slides}
      </div>
      <button className={Styles.carouselButton} onClick={nextSlide}>
        <BsArrowRight />
      </button>
    </div>
  );
}

export default Carousel;