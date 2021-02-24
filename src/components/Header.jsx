import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../App.scss";
import HamburgerNav from "./HamburgerNav";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Router>
      <header className="headerTop">
        <nav className="headerTop__container">
          <div className="headerTop__logo">
            <h1>
              <a href="index.html">Valarie Regas</a>
            </h1>
          </div>
          <div id="hamburger-nav">
            <HamburgerNav />
          </div>
          <div className="headerTop__nav-container">
            <ul>
              <li className="headerTop__nav-container--nav-item">
                <a className="headerTop__nav-container--nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="headerTop__nav-container--nav-item">
                <a className="headerTop__nav-container--nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="headerTop__nav-container--nav-item">
                <a className="headerTop__nav-container--nav-link" href="/#speaking">
                  Talks
                </a>
              </li>
              <li className="headerTop__nav-container--nav-item dropdown">
                <div
                  className="headerTop__nav-container--nav-link"
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
              <li className="headerTop__nav-container--nav-item">
                <a className={`${isDropdownOpen ? "headerTop__nav-container--nav-link-open" : "headerTop__nav-container--nav-link"}`} href="/contact">
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
