import React from "react";
import github from "../images/github-white.png";
import papercall from "../images/papercall-white.png";
import twitter from "../images/twitter-white.png";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="landing footer">
        <div className="flex">
          <div className="copyrightText">
            <p>© 2020 Valarie Regas</p>
          </div>
          <ul className="icons flex">
            <li className="faIcons">
              <a
                href="https://github.com/valarier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  width="28em"
                  height="28em"
                  alt="Github: Valarie Regas"
                ></img>
              </a>
            </li>
            <li className="faIcons">
              <a
                href="https://www.papercall.io/speakers/valarieregas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={papercall}
                  width="28em"
                  height="28em"
                  alt="Papercall: Valarie Regas"
                ></img>
              </a>
            </li>
            <li className="faIcons">
              <a
                href="https://twitter.com/ValarieRegas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  width="28em"
                  height="28em"
                  alt="Twitter: Valarie Regas"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
