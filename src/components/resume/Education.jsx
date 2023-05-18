import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { GiBookCover } from "react-icons/gi";
import "./education.css";
const Education = () => {
  return (
    <div className="education__container">
      <div className="education__card">
        <div className="education__school">
          <FaUserGraduate size={35} />
          <h3>Bachelor of Computer Science and Technology</h3>
          <h3>Tecnologico de Monterrey (ITESM)</h3>
          <h4>2018-2023</h4>

          <h5>GPA 9.6</h5>
          <div className="education__desc">
            <GoPrimitiveDot />
            <div>
              Participate, individually or in a team, in the development of
              software solutions for real-life problems.
            </div>
          </div>
          <div className="education__desc">
            <GoPrimitiveDot />
            <div>
              Function effectively as a member or leader of a team engaged in
              the work to be done.
            </div>
          </div>
        </div>
        <div className="education__courses">
          <GiBookCover size={35} />
          <h3>Online Courses</h3>
          <div className="education__course">
            <GoPrimitiveDot />
            <h4>Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games</h4>
          </div>
          <div className="education__course">
            <GoPrimitiveDot />
            <h4>Curso de desarrollo de videojuegos con Unity 2021</h4>
          </div>

          <div className="education__course">
            <GoPrimitiveDot />
            <h4>Modern React with Redux </h4>
          </div>
          <div className="education__course">
            <GoPrimitiveDot />
            <h4>The Complete React Native + Hooks Course </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
