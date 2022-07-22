/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import CardInPort from "./CardInPort";
const Portfolio = () => {
  const contentPortfolio = [
    {
      title: "This is a portfolio item1 title",
      image: IMG1,
      link_git: "https://github.com",
      link_demo: "https://github.com",
    },
    {
      title: "This is a portfolio item2 title",
      image: IMG2,
      link_git: "https://github.com",
      link_demo: "https://github.com",
    },
    {
      title: "This is a portfolio item3 title",
      image: IMG3,
      link_git: "https://github.com",
      link_demo: "https://github.com",
    },
    {
      title: "This is a portfolio item4 title",
      image: IMG4,
      link_git: "https://github.com",
      link_demo: "https://github.com",
    },
    {
      title: "This is a portfolio item5 title",
      image: IMG5,
      link_git: "https://github.com",
      link_demo: "https://github.com",
    },
    {
      title: "This is a portfolio item6 title",
      image: IMG6,
      link_git: "https://github.com",
      link_demo: "https://github.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {contentPortfolio.map((element, idx) => {
          return <CardInPort content={element} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
