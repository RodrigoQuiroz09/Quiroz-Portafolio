import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";
const Skills = ({ skill, exp }) => {
  return (
    <article className="skills__details">
      <BsPatchCheckFill className="skills__details-icon" />
      <div>
        <h4>{skill}</h4>
        <small className="text-light">{exp}</small>
      </div>
    </article>
  );
};

export default Skills;
