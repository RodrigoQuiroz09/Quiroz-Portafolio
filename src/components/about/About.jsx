import React, { useEffect, useState } from "react";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const About = () => {
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div
        className="container about__container"
        data-aos={windowSize.innerWidth > 1200 ? "fade-right" : ""}
      >
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div
          className="about__content"
          data-aos={windowSize.innerWidth > 1200 ? "fade-left" : ""}
        >
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed </small>
            </article>
            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>Code</h5>
              <small>10,000+ Lines of Code</small>
            </article>
          </div>
          <p>
            Inventive and determined software engineer, focus on Game
            development and frontend software seeking to make my creative skills
            and programming knowledge more valuable to my users.
          </p>
          <p>
            Reputable for resolving problems, adept at coding and implementing
            features, well-organized professional and passionate about
            developing new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
