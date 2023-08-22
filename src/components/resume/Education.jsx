/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { CertModal } from "./CertModal";
import { FaUserGraduate } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { GiBookCover } from "react-icons/gi";
import { HiEye } from "react-icons/hi";
import "./education.css";

const Education = () => {
  const [isOpen, setIsopen] = useState(false);
  const [showCert, setShowCert] = useState(0);

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
            <h4>
              Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games&ensp;{" "}
              <a
                onClick={() => {
                  setShowCert(0);
                  setIsopen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <HiEye />
              </a>
              <CertModal
                isOpen={isOpen}
                setIsopen={setIsopen}
                cert={showCert}
              />
            </h4>
          </div>
          <div className="education__course">
            <GoPrimitiveDot />
            <h4>
              Curso de desarrollo de videojuegos con Unity 2021&ensp;{" "}
              <a
                onClick={() => {
                  setShowCert(1);
                  setIsopen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <HiEye />
              </a>
              <CertModal
                isOpen={isOpen}
                setIsopen={setIsopen}
                cert={showCert}
              />
            </h4>
          </div>

          <div className="education__course">
            <GoPrimitiveDot />
            <h4>
              Modern React with Redux&ensp;{" "}
              <a
                onClick={() => {
                  setShowCert(2);
                  setIsopen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <HiEye />
              </a>
              <CertModal
                isOpen={isOpen}
                setIsopen={setIsopen}
                cert={showCert}
              />{" "}
            </h4>
          </div>
          <div className="education__course">
            <GoPrimitiveDot />
            <h4>
              The Complete React Native + Hooks Course&ensp;{" "}
              <a
                onClick={() => {
                  setShowCert(3);
                  setIsopen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <HiEye />
              </a>
              <CertModal
                isOpen={isOpen}
                setIsopen={setIsopen}
                cert={showCert}
              />
            </h4>
          </div>
          <div className="education__course">
            <GoPrimitiveDot />
            <h4>
              Unity 2D Dungeon Gunner Roguelike Development Course&ensp;{" "}
              <a
                onClick={() => {
                  setShowCert(4);
                  setIsopen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <HiEye />
              </a>
              <CertModal
                isOpen={isOpen}
                setIsopen={setIsopen}
                cert={showCert}
              />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
