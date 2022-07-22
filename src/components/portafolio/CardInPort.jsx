import React from "react";

const CardInPort = ({ content }) => {
  return (
    <article
      class="card"
      style={{
        background: `url(${content.image}) center no-repeat `,
      }}
    >
      <div class="card__content">
        <h3 class="card__title">TITLE</h3>
        <p class="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          reprehenderit! Neque consequatur velit...
        </p>
      </div>
    </article>
  );
};

export default CardInPort;
