import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdRecycling } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience__container">
      <div className="experience__grid">
        <div className="experience__card">
          <FaLeaf size={35} />
          <h4>Harvestly Co.</h4>
          <h4>July 2021 - January 2022 (6 mo)</h4>

          <h3>FRONTEND DEVELOPMENT</h3>
          <h4>San Obispo, CA (Remote Job)</h4>
          <div className="expereince__desc">
            <GoPrimitiveDot />
            <div>
              Gained experience in web designing and web development using
              Reacts framework.
            </div>
          </div>
          <div className="expereince__desc">
            <GoPrimitiveDot />
            <div>
              Learned how to use open source in a viable and efficient way to
              fix code problems and bugs.
            </div>
          </div>
          <div className="expereince__desc">
            <GoPrimitiveDot />
            <div>
              Experienced working in a real technology environment alongside
              experienced developers.
            </div>
          </div>
        </div>
        <div className="experience__card">
          <MdRecycling size={35} />
          <h4>CIBRUC</h4>
          <h4>February 2020 - June 2021 (15 mo)</h4>
          <h3>HEAD GAME DEVELOPER</h3>
          <h4>Ciudad de México, CMDX (Social Service)</h4>
          <div className="expereince__desc">
            <GoPrimitiveDot />
            <div>
              Gained experience in gameplay design, level design and game flow
              through Unity software.
            </div>
          </div>
          <div className="expereince__desc">
            <GoPrimitiveDot />
            <div>
              Lead a team using an agile methodology to deliver weekly or
              bi-weekly results.
            </div>
          </div>
          <div className="expereince__desc">
            <GoPrimitiveDot />
            <div>
              Understand the entire flow involved in releasing an application to
              the store.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
