import React, { useEffect, useState } from "react";
import "../App.css";

const Dropdown = ({ setIsDropdownOpen }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 851);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const smallScreen = window.innerWidth < 851;
        if (smallScreen !== isSmallScreen) setIsSmallScreen(smallScreen);
      },
      false
    );
  }, [isSmallScreen]);

  return (
    <div>
      <div
        id="dropdownStyling"
        className="dropdown-menu"
        aria-labelledby="navbarDropdown"
      >
        <div>
          <a
            id={`${isSmallScreen ? "dropdownItemSS" : "dropdown-item"}`}
            href="/talks"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
          >
            Speaking
          </a>
        </div>
        <div>
          <a
            id={`${isSmallScreen ? "dropdownItemSS" : "dropdown-item"}`}
            href="https://www.codeprep.io/podcast/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
          >
            Podcast
          </a>
        </div>
        <div>
          <a
            id={`${isSmallScreen ? "dropdownItemSS" : "dropdown-item"}`}
            href="https://medium.com/@valarieregas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
