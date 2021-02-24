import React from "react";
import github from "../images/github-white.png";
import papercall from "../images/papercall-white.png";
import twitter from "../images/twitter-white.png";
import "../App.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer"> */}
        <div className="footer__flex">
          <div className="copyrightText">
            <p className="copyrightTextFontSize">© 2020 Valarie Regas</p>
          </div>

          {/* Social media icons */}
          <div className="icons">
            <ul className="flex iconFloat">
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
                    className="socialImg"
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
                    className="socialImg"
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
                    className="socialImg"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
