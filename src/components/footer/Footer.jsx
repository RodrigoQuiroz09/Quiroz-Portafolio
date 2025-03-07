/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Quiroz
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/rodrigo.quirozreyes/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/rodquiroz0911/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Rodrigo91710310">
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
