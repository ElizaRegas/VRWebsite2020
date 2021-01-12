import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";

const HamburgerNav = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <div id="mySidebar">
      <div class="hamburgerNav" id="mySmallScreenNav">
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
            <a href="#home" class="active">
              Home
            </a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerNav;
