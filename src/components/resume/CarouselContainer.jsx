import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carousel";
import Card from "./Card";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const CarouselContainer = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const content_cards = [
    {
      bullets: true,
      title: "Game Development",
      accord: [
        {
          subtitle: "Unity Engine",
          skills: [
            ["C#", "Experienced"],
            ["Script. Obj.", "Experienced"],
            ["Courutines", "Experienced"],
            ["Physics 3D/2D", "Intermediate"],
            ["Tiles 2D", "Intermediate"],
            ["Particle Effects", "Basic"],
            ["AI-PathFinding", "Intermediate"],
            ["UI/UX", "Intermediate"],
          ],
        },
        {
          subtitle: "Unreal Engine",
          skills: [
            ["C/C++", "Experienced"],
            ["Blueprints", "Basic"],
            ["Class Inheritance", "Intermediate"],
            ["Blueprint-Behavihours", "Basic"],
          ],
        },
      ],
    },
    {
      bullets: true,
      title: "Web Develpment",
      accord: [
        {
          subtitle: "Frontend",
          skills: [
            ["HTML", "Intermediate"],
            ["CSS", "Intermediate"],
            ["JavaScript", "Experienced"],
            ["Material-UI", "Experienced"],
            ["React", "Experienced"],
            ["React-Native", "Experienced"],
          ],
        },
        {
          subtitle: "Database Management",
          skills: [
            ["MongoDB", "Intermediate"],
            ["MySQL", "Intermediate"],
          ],
        },
        {
          subtitle: "Backend",
          skills: [
            ["Express", "Intermediate"],
            ["Flask", "Intermediate"],
          ],
        },
      ],
    },
    {
      bullets: true,
      title: "Other Languages",
      accord: [
        {
          subtitle: "Python",
          skills: [
            ["Pandas & Matplot", "Intermediate"],
            ["Tkinter", "Intermediate"],
            ["OpenCv", "Intermediate"],
            ["Tensorflow", "Basic"],
          ],
        },
        {
          subtitle: "Java",
          skills: [
            ["OOP Programing", "Intermediate"],
            ["Swing", "Basic"],
          ],
        },
      ],
    },
    {
      bullets: true,
      title: "Miscellaneous",
      accord: [
        {
          subtitle: "Package Manager",
          skills: [
            ["NPM", "Intermediate"],
            ["Yarn", "Intermediate"],
          ],
        },
        {
          subtitle: "Version Control",
          skills: [
            ["Git Hub", "Intermediate"],
            ["Git", "Intermediate"],
          ],
        },
        {
          subtitle: "Hosting Services",
          skills: [
            ["AWS", "Basic"],
            ["Git Hub Pages", "Intermediate"],
            ["Heroku", "Intermediate"],
          ],
        },
      ],
    },
    {
      bullets: true,
      title: "Hobbies",
      accord: [
        {
          subtitle: "Music",
          skills: [
            ["Guitar", "Intermediate"],
            ["Bass", "Intermediate"],
            ["Choir", "Intermediate"],
          ],
        },
        {
          subtitle: "Favourite Games",
          skills: [
            ["Smite", ""],
            ["Life is Strange", ""],
            ["Riot Games", "Lol, Valorant"],

            ["Tell Tale Games", "TWD, Wolf Among Us"],

            ["Adventure FPS", "Far Cry, Fallout"],
            ["Minecraft", ""],
          ],
        },
      ],
    },
    {
      bullets: false,
      title: "Soft Skills",
      accord: [
        {
          subtitle: "Quick & Visual Learner",
          skills:
            "I am a strong visual learner, determined to solve problems and quickly find an effective solution.",
        },
        {
          subtitle: "Effective Problem Solver",
          skills:
            "I have the ability to solve problems and determine the cause of the problem. Prioritize, diagnose, and select the alternatives for a solution",
        },
      ],
    },
  ];
  const cards = [
    {
      key: uuidv4(),
      content: <Card content={content_cards[0]} />,
    },
    {
      key: uuidv4(),
      content: <Card content={content_cards[1]} />,
    },
    {
      key: uuidv4(),
      content: <Card content={content_cards[2]} />,
    },
    {
      key: uuidv4(),
      content: <Card content={content_cards[3]} />,
    },
    {
      key: uuidv4(),
      content: <Card content={content_cards[4]} />,
    },
    {
      key: uuidv4(),
      content: <Card content={content_cards[5]} />,
    },
  ];

  return (
    <div className="carousel__container">
      <Carroussel
        cards={cards}
        offset={windowSize.innerWidth < 700 ? 0 : 2}
        showArrows={false}
      />
    </div>
  );
};

export default CarouselContainer;
