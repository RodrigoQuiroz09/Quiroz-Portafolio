/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/InfiniteRunner.gif";
import IMG3 from "../../assets/wfc.gif";
import IMG4 from "../../assets/aifa.png";
import IMG5 from "../../assets/particles.gif";
import IMG6 from "../../assets/guitar.gif";
import IMG7 from "../../assets/port.png";
import IMG8 from "../../assets/detect.png";
import IMG9 from "../../assets/bookapp.png";
import IMG10 from "../../assets/Pokemon.gif";
import IMG11 from "../../assets/toon.gif";
import IMG12 from "../../assets/Gunner.gif";
import IMG13 from "../../assets/book2up.png";
// {
//   language: "English",
//   title: "Maze Hunter",
//   image: IMG1,
//   link_git: "https://github.com/RodrigoQuiroz09/MazeHunter",
//   desc: "3d game, low poly, with top view with map similar to pacman where the player must collect all the keys to go to the next level where a great reward awaits him.",
// },
import CardInPort from "./CardInPort";
const Portfolio = () => {
  const contentPortfolio = [
    {
      language: "English",
      title: "Dungeon Gunner Rougelike",
      image: IMG12,
      link_git: "https://github.com/RodrigoQuiroz09/Dungeon_Gunner",
      desc: "Utilizing Unity's 2D Game Engine capabilities to craft a Rogue-like dungeon shooter in a 2D format/isometric, akin to titles such as 'Enter The Gungeon' and 'The Binding Of Isaac'.",
    },

    {
      language: "English",
      title: "Infinite Runner",
      image: IMG2,
      link_git: "https://github.com/RodrigoQuiroz09/Infinite-Runner",
      desc: "A scientist who seeks to escape from a underground facility and must make his way through platforms, shooting his enemies, jumping over obstacles.",
    },
    {
      language: "English",
      title: "Wave Function Collapse",
      image: IMG3,
      link_git:
        "https://github.com/RodrigoQuiroz09/TileBased-WaveFunctionCollapse",
      desc: "Algorithm for procedural generation of images in a generic tile-based perspective.",
    },
    {
      language: "English",
      title: "Pokymon",
      image: IMG10,
      link_git: "https://github.com/RodrigoQuiroz09/Pokymon",
      desc: "A recreation of the formula of Pokemon which contains Pokemon Battle, Pokemon Encounters and Battle against trainers",
    },
    {
      language: "English",
      title: "Toon Tanks",
      image: IMG11,
      link_git: "https://github.com/RodrigoQuiroz09/ToonTanks",
      desc: "You control a blue tank that can move around a world, can aim and shoot. In addition there are enemies that can destroy the player and you have to take them down.",
    },
    {
      language: "Spanish",
      title: "Steampunk Guitar Simulation",
      image: IMG6,
      link_git: "https://github.com/RodrigoQuiroz09/ProyectoGraficasReact",
      desc: "Interactive steampunk style guitar made with blender and three js",
    },
    {
      language: "English",
      title: "AIFA Reservation App",
      image: IMG4,
      link_git: "https://github.com/RodrigoQuiroz09/AIFA_Arquitectura",
      desc: "University project that seeks to simulate an airport hangar reservation system. It counts with 2 portals (airline and administrator) to make requests and confirmations of the gates.",
    },
    {
      language: "English",
      title: "Book 2 Up App",
      image: IMG13,
      link_git: "https://github.com/EmilioAG99/book2up-front/tree/main/src",
      desc: "University project that seeks to simulate e-commerce bookstore. It counts with 2 portals (library and administrator) to buy books and adds them to their inventory and to manage catalog.",
    },
    {
      language: "Spanish",
      title: "Books App",
      image: IMG9,
      link_git: "https://github.com/RodrigoQuiroz09/PF-DB_Avanzadas",
      desc: "BOOKIES is a mobile application focused on receiving the user's particular tastes in reading (authors and preferred reading categories) to provide different options of literary works that may be to their liking. ",
    },
    {
      language: "English",
      title: "Portafolio",
      image: IMG7,
      link_git: "https://github.com/RodrigoQuiroz09/Quiroz-Portafolio",
      desc: "This portafolio is build with the intention to expose my projects as well as my resume and show my skills",
    },

    {
      language: "Spanish",
      title: "Particle Filter",
      image: IMG5,
      link_git: "https://github.com/RodrigoQuiroz09/Particle-Filter-TC2011.700",
      desc: "Object tracking with particle filter in python to automatically identify objects of interest in a video",
    },
    {
      language: "Spanish",
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
