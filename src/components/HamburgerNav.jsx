import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dropdown from "./Dropdown";
import github from "../images/github-white.png";
import papercall from "../images/papercall-white.png";
import twitter from "../images/twitter-white.png";
import "../App.scss";

const HamburgerNav = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isSSDropdownOpen, setIsSSDropdownOpen] = useState(false);

  return (
    <Router>
      <div>
        <div className="hamburgerNav">
          {!sidebarIsOpen && (
            <i
              className="fa fa-2x fa-bars"
              onClick={() => setSidebarIsOpen(true)}
            ></i>
          )}
          {sidebarIsOpen && (
            <div className="hamburgerNav__sidebar">
              <div
                className="hamburgerNav__closeButton"
                onClick={() => setSidebarIsOpen(false)}
              >
                ×
              </div>
              <ul className="hamburgerNav__navbar-ss">
                <li className="hamburgerNav__nav-item-ss">
                  <a className="hamburgerNav__nav-link-ss" href="/">
                    Home
                  </a>
                </li>
                <li className="hamburgerNav__nav-item-ss">
                  <a
                    className="hamburgerNav__nav-link-ss"
                    href="/about"
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li className="hamburgerNav__nav-item-ss">
                  <a className="hamburgerNav__nav-link-ss" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="hamburgerNav__nav-item-ss dropdown">
                  <div
                    className="hamburgerNav__nav-link-ss dropdown-toggle mediaDiv"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setIsSSDropdownOpen(!isSSDropdownOpen)}
                  >
                    Media
                  </div>
                  {isSSDropdownOpen && (
                    <Dropdown
                      isSSDropdownOpen={isSSDropdownOpen}
                      setIsSSDropdownOpen={setIsSSDropdownOpen}
                    />
                  )}
                </li>
                {isSSDropdownOpen && (
                  <li className="hamburgerNav__nav-item-ss">
                    <a className="hamburgerNav__contactDropdownOpen" href="/contact">
                      Contact
                    </a>
                  </li>
                )}
                {!isSSDropdownOpen && (
                  <li className="hamburgerNav__nav-item-ss">
                    <a href="/contact" className="hamburgerNav__nav-link-ss">
                      Contact
                    </a>
                  </li>
                )}
              </ul>

              {/* Social media icons */}
              <div className="hamburgerNav__icons-ss">
                <ul className="flex">
                  <li className="hamburgerNav__faIcons-ss">
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
                  <li className="hamburgerNav__faIcons-ss">
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
                  <li className="hamburgerNav__faIcons-ss">
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
          )}
        </div>
      </div>
    </Router>
  );
};

export default HamburgerNav;
