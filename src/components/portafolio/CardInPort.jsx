/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub } from "react-icons/fa";

const CardInPort = ({ content }) => {
  return (
    <article
      className="card"
      style={{
        background: `url(${content.image}) center no-repeat`,
      }}
    >
      <div className="card__content">
        <h3 className="card__title">{content.title}</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          reprehenderit! Neque consequatur velit...
        </p>
        <a href={content.link_git} target="_blank" className="card__repo">
          <FaGithub />
        </a>
      </div>
    </article>
  );
};

export default CardInPort;
