import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../App.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Router>
      <header className="landing">
        <nav className="navbar">
          <div className="logo" data-aos="fade-down">
            <h1>
              <a href="index.html">Valarie Regas</a>
            </h1>
          </div>
          <div id="nav-container" data-aos="fade-down">
            <ul className="flex floatRight navbar">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle mediaDiv" 
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Media
                </div>
                {isDropdownOpen && (
                  <Dropdown
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                  />
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Router>
  );
};

export default Header;
