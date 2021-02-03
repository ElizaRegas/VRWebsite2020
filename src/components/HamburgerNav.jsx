import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../App.scss";

const HamburgerNav = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isSSDropdownOpen, setIsSSDropdownOpen] = useState(false);

  return (
    <Router>
      <div id="mySidebar">
        <div className="hamburgerNav" id="mySmallScreenNav">
          {!sidebarIsOpen && (
            <i
              className="fa fa-2x fa-bars"
              onClick={() => setSidebarIsOpen(true)}
            ></i>
          )}
          {sidebarIsOpen && (
            <div className="sidebar" data-aos="fade-left">
              <div
                className="closeButton"
                onClick={() => setSidebarIsOpen(false)}
              >
                ×
              </div>
              <ul className="navbar-ss">
                <li className="nav-item-ss">
                  <a className="nav-link-ss" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item-ss">
                  <a
                    className="nav-link-ss"
                    href="/#about"
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item-ss">
                  <a className="nav-link-ss" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item-ss dropdown">
                  <div
                    className="nav-link-ss dropdown-toggle mediaDiv"
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
                  <li className="nav-item-ss">
                    <a className="contactDropdownOpen" href="/contact">
                      Contact
                    </a>
                  </li>
                )}
                {!isSSDropdownOpen && (
                  <li className="nav-item-ss">
                    <a href="/contact" className="nav-link-ss">
                      Contact
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default HamburgerNav;
