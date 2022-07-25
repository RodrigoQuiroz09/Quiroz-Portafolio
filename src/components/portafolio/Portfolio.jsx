/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/inprogress.png";
import IMG2 from "../../assets/InfiniteRunner.gif";
import IMG3 from "../../assets/wfc.gif";
import IMG4 from "../../assets/aifa.png";
import IMG5 from "../../assets/particles.gif";
import IMG6 from "../../assets/guitar.gif";
import IMG7 from "../../assets/port.png";
import IMG8 from "../../assets/detect.png";
import IMG9 from "../../assets/bookapp.png";

import CardInPort from "./CardInPort";
const Portfolio = () => {
  const contentPortfolio = [
    {
      title: "Maze Hunter",
      image: IMG1,
      link_git: "https://github.com/RodrigoQuiroz09/MazeHunter",
      desc: "3d game, low poly, with top view with map similar to pacman where the player must collect all the keys to go to the next level where a great reward awaits him.",
    },
    {
      title: "Infinite Runner",
      image: IMG2,
      link_git: "https://github.com/RodrigoQuiroz09/Infinite-Runner",
      desc: "A scientist who seeks to escape from a underground facility and must make his way through platforms, shooting his enemies, jumping over obstacles.",
    },
    {
      title: "Wave Function Collapse",
      image: IMG3,
      link_git:
        "https://github.com/RodrigoQuiroz09/TileBased-WaveFunctionCollapse",
      desc: "Algorithm for procedural generation of images in a generic tile-based perspective.",
    },
    {
      title: "AIFA Reservation App",
      image: IMG4,
      link_git: "https://github.com/RodrigoQuiroz09/AIFA_Arquitectura",
      desc: "University project that seeks to simulate an airport hangar reservation system. It counts with 2 portals (airline and administrator) to make requests and confirmations of the gates.",
    },
    {
      title: "Books App",
      image: IMG9,
      link_git: "https://github.com/RodrigoQuiroz09/PF-DB_Avanzadas",
      desc: "BOOKIES is a mobile application focused on receiving the user's particular tastes in reading (authors and preferred reading categories) to provide different options of literary works that may be to their liking. ",
    },
    {
      title: "Portafolio",
      image: IMG7,
      link_git: "https://github.com/RodrigoQuiroz09/Quiroz-Portafolio",
      desc: "This portafolio is build with the intention to expose my projects as well as my resume and show my skills",
    },
    {
      title: "Steampunk Guitar Simulation",
      image: IMG6,
      link_git: "https://github.com/RodrigoQuiroz09/ProyectoGraficasReact",
      desc: "Interactive steampunk style guitar made with blender and three js",
    },
    {
      title: "Particle Filter",
      image: IMG5,
      link_git: "https://github.com/RodrigoQuiroz09/Particle-Filter-TC2011.700",
      desc: "Object tracking with particle filter in python to automatically identify objects of interest in a video",
    },
    {
      title: "Object Detection",
      image: IMG8,
      link_git:
        "https://github.com/RodrigoQuiroz09/Object-Detection-Vision-Robots",
      desc: "Use of deep learning models such as Yolo, Caffe and Tensorflow to measure the accuracy of each.",
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
