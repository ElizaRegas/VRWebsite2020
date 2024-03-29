import React, { useEffect, useState } from "react";
import "../App.scss";

const Dropdown = ({ setIsDropdownOpen, setSidebarIsOpen }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1201);

  // Event listener for dropdown items in the hamburger nav
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const smallScreen = window.innerWidth < 1201;
        if (smallScreen !== isSmallScreen) setIsSmallScreen(smallScreen);
      },
      false
    );
  }, [isSmallScreen]);

  return (
    <div className={`${isSmallScreen ? "dropdown-menu-ss" : "dropdown-menu"}`}>
      <div
        className="headerTop__nav-container--dropdownStyling"
        aria-labelledby="navbarDropdown"
      >
        {/* <div>
          <a
            id={`${isSmallScreen ? "dropdownItemSS" : "dropdown-item"}`}
            href="/portfolio"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
          >
            Portfolio
          </a>
        </div> */}
        <div className="headerTop__nav-container--ddItemPadding">
          <a
            className={`${
              isSmallScreen
                ? "headerTop__nav-container--dropdownItemSS"
                : "headerTop__nav-container--dropdown-item"
            }`}
            href="https://www.codeprep.io/podcast/"
            target="_blank"
            rel="noopener noreferrer"
            // onClick={() => setIsDropdownOpen(false)}
            onClick={() => setSidebarIsOpen(false)}
          >
            Podcast
          </a>
        </div>
        <div>
          <a
            className={`${
              isSmallScreen
                ? "headerTop__nav-container--dropdownItemSS"
                : "headerTop__nav-container--dropdown-item"
            }`}
            href="https://medium.com/@valarieregas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSidebarIsOpen(false)}
          >
            Blog
          </a>
        </div>
        <div>
          <a
            className={`${
              isSmallScreen
                ? "headerTop__nav-container--dropdownItemSS"
                : "headerTop__nav-container--dropdown-item"
            }`}
            href="https://www.womenwhocode.com/atlanta/about"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSidebarIsOpen(false)}
          >
            Leadership
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
