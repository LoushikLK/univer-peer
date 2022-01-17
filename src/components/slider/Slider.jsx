import React, { useRef, useState, useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (props.imageArray.length - 1 === currentIndex) {
      setTimeout(() => {
        slideRef.current?.scrollTo(0, 0);
      }, 4500);
    }
    let timeoutFn = setTimeout(() => {
      slideRef.current?.scrollBy(slideRef.current?.offsetWidth, 0);
    }, 4500);

    return () => {
      clearTimeout(timeoutFn);
    };
  }, [currentIndex, props.imageArray.length]);

  return (
    <>
      <div className="slide-main">
        <div
          className="slide-main-container"
          ref={slideRef}
          onScroll={() => {
            setCurrentIndex(
              Math.floor(
                slideRef.current?.scrollLeft / slideRef.current?.offsetWidth
              )
            );
          }}
        >
          <div className="slider-btn">
            <span
              className="slider-icons"
              onClick={() => {
                slideRef.current?.scrollBy(-slideRef.current?.offsetWidth, 0);
              }}
            >
              <ArrowBackIosNew />
            </span>
            <span
              className="slider-icons"
              onClick={() => {
                slideRef.current?.scrollBy(slideRef.current?.offsetWidth, 0);
              }}
            >
              <ArrowForwardIos />
            </span>
          </div>

          {props.imageArray.map((image, index) => {
            return (
              <div className="slider-child" key={index}>
                <img src={image} alt="slide-images" className="slider-image" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
