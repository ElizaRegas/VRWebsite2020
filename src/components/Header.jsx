import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../App.css";

const Header = ({ isDropdownOpen, setIsDropdownOpen }) => {
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
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Media
                </Link>
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
