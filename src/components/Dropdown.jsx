import React from "react";
import "../App.css";

const Dropdown = ({ setIsDropdownOpen }) => {  
  
  return (
    <div>
      <div
        id="dropdownStyling"
        className="dropdown-menu"
        aria-labelledby="navbarDropdown"
      >
        <a
          className="dropdown-item"
          href="https://www.papercall.io/speakers/valarieregas"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsDropdownOpen(false)}
        >
          Speaking
        </a>
        <a
          className="dropdown-item"
          href="https://www.codeprep.io/podcast/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsDropdownOpen(false)}
        >
          Podcast
        </a>
        <a
          className="dropdown-item"
          href="https://medium.com/@valarieregas"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsDropdownOpen(false)}
        >
          Blog
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
