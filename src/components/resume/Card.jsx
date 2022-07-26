import "./card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import AccordionMui from "./AccordionMui";
import Divider from "@mui/material/Divider";

function Card({ content }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  // {
  //   content.accord.map((element, idx) => {
  //     return <AccordionMui />;
  //   });
  // }
  return (
    <animated.div
      className="card__carousel"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <h2>{content.title}</h2>
      <Divider />
      <div className="card__accord">
        <AccordionMui accord={content.accord} bullet={content.bullets} />
      </div>
    </animated.div>
  );
}

export default Card;
