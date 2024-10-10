import React from "react";
import "./footer.css";
import { github, linkedin, logo } from "../../assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="social-links">
          <a
            href="https://github.com/AndresPineros29/fitclub-landingpage"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-links-img" src={github} alt="github_icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/andres-felipe-pi%C3%B1eros-pabon-0b1524264/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-links-img" src={linkedin} alt="linkedin_icon" />
          </a>
        </div>
        <div className="logo-f">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
