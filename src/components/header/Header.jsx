import React from "react";
import "./header.css";
import CTA from "./CTA";
import StarsCanvas from "./Stars";
import HeaderSocials from "./HeaderSocials";

import Scene from "./Scene";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I´m</h3>
        <h1>Rodrigo Quiroz</h1>
        <h4 className="text-light">Fullstack and Game Developer</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <Scene />
        </div>

        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
      <StarsCanvas />
    </header>
  );
};

export default Header;
