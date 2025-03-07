/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import CV from "../../assets/CV_Rodrigo_Quiroz.pdf";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href={CV} download target="_blank">
        <IoDocumentAttach size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigo-q-3b8213129/"
        target="_blank"
      >
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com/RodrigoQuiroz09" target="_blank">
        <FaGithub size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
