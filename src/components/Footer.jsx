import React from "react";
import github from "../images/github-white.png";
import papercall from "../images/papercall-white.png";
import twitter from "../images/twitter-white.png";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div class="landing footer">
        <div class="flex">
          <div class="copyrightText footerMargin">
            <p>© 2020 Valarie Regas</p>
          </div>
          <div class="icons">
            <ul class="flex">
              <li class="faIcons">
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
              <li class="faIcons">
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
              <li class="faIcons">
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
      </div>
    </footer>
  );
};

export default Footer;
