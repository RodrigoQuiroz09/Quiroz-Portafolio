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
      title: "Maze Hunter",
      image: IMG1,
      link_git: "https://github.com/RodrigoQuiroz09/MazeHunter",
    },
    {
      title: "Infinite Runner",
      image: IMG2,
      link_git: "https://github.com/RodrigoQuiroz09/Infinite-Runner",
    },
    {
      title: "Wave Function Collapse",
      image: IMG3,
      link_git:
        "https://github.com/RodrigoQuiroz09/TileBased-WaveFunctionCollapse",
    },
    {
      title: "AIFA Reservation App",
      image: IMG4,
      link_git: "https://github.com/RodrigoQuiroz09/AIFA_Arquitectura",
    },
    {
      title: "Particle Filter",
      image: IMG5,
      link_git: "https://github.com/RodrigoQuiroz09/Particle-Filter-TC2011.700",
    },
    {
      title: "Steampunk Guitar Simulation",
      image: IMG6,
      link_git: "https://github.com/RodrigoQuiroz09/ProyectoGraficasReact",
    },
    {
      title: "Portafolio",
      image: IMG1,
      link_git: "https://github.com/RodrigoQuiroz09/Quiroz-Portafolio",
    },
    {
      title: "Object Detection",
      image: IMG2,
      link_git:
        "https://github.com/RodrigoQuiroz09/Object-Detection-Vision-Robots",
    },
    {
      title: "Books App",
      image: IMG3,
      link_git: "https://github.com/RodrigoQuiroz09/PF-DB_Avanzadas",
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
