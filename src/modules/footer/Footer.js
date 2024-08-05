import React from "react";
import "./style/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container container">
        <h1 className="footer--title">Harshit</h1>

        <ul className="footer--list">
          <li>
            <a href="#about" className="footer--link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer--link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer--link">
              Technical Skills
            </a>
          </li>
        </ul>

        <div className="footer--social">
          <a
            className="footer--social-icon"
            href="https://www.linkedin.com/in/harshit-arora-560042195"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="footer--social-icon"
            href="https://github.com/harshitarora00"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <span className="footer--copyright">
          &#169; HarshitArora. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
