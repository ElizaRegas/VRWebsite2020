import React from "react";
import Dropdown from "./Dropdown";


const FullNav = ({ isDropdownOpen, setIsDropdownOpen }) => {
  
  return (
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
          <a
            className={`${
              isDropdownOpen
                ? "headerTop__nav-container--nav-link-open"
                : "headerTop__nav-container--nav-link"
            }`}
            href="/#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FullNav;
