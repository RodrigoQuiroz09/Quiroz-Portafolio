import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div className="carousel__content">
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "0rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <MdKeyboardArrowLeft
            className="forwardandbackicons"
            onClick={() => {
              setGoToSlide(goToSlide - 1);
            }}
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <MdKeyboardArrowRight
            className="forwardandbackicons"
            onClick={() => {
              setGoToSlide(goToSlide + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
