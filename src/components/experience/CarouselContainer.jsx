import React from "react";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carousel";
import Card from "./Card";

const CarouselContainer = () => {
  const content_cards = [
    {
      title: "Game Development",
      accord: [
        {
          subtitle: "Unity Engine",
          skills: [
            ["C#", "Experienced"],
            ["Scriptable Objects", "Experienced"],
            ["Courutines", "Experienced"],
            ["Particle Effects", "Basic"],
            ["AI-PathFinding", "Intermediate"],
            ["UI/UX (Canvas)", "Intermediate"],
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
      title: "Web Develpment",
      accord: [
        {
          subtitle: "Frontend",
          skills: [
            ["C#", "Experienced"],
            ["Scriptable Objects", "Experienced"],
            ["Courutines", "Experienced"],
            ["Particle Effects", "Basic"],
            ["AI-PathFinding", "Intermediate"],
            ["UI/UX (Canvas)", "Intermediate"],
          ],
        },
        {
          subtitle: "Backend",
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
      title: "Other Languages",
      accord: [
        {
          subtitle: "Unity Engine",
          skills: [
            ["C#", "Experienced"],
            ["Scriptable Objects", "Experienced"],
            ["Courutines", "Experienced"],
            ["Particle Effects", "Basic"],
            ["AI-PathFinding", "Intermediate"],
            ["UI/UX (Canvas)", "Intermediate"],
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
  ];
  return (
    <div className="carousel__container">
      <Carroussel cards={cards} offset={2} showArrows={false} />
    </div>
  );
};

export default CarouselContainer;
