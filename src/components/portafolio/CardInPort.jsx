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
        <p className="card__description">{content.desc}</p>
        <a href={content.link_git} target="_blank" className="card__repo">
          <FaGithub />
        </a>
        <span className="card__language text-light">{content.language}</span>
      </div>
    </article>
  );
};

export default CardInPort;
