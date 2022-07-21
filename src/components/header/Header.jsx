import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";

import Scene from "./Scene";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m</h5>
        <h1>Rodrigo Quiroz</h1>
        <h5 className="text-light">Fullstack and Game Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <Scene />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
