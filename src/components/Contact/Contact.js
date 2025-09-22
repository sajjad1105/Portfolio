import React from "react";
import "./ContactCSS.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-ribbon">
            <div className="ribbon-top">MD SAJJAD KHAN</div>
            <div className="ribbon-bottom">A FULL-STACK DEVELOPER</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href="http://www.linkedin.com/in/md-sajjad-khan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://github.com/sajjad1105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href="sajjadrockstar8294@gmail.com">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
              <a
                href="+917903653732"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-user footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2025 ❤️ © Designed and built bY MD SAJJAD KHAN.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
