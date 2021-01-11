import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";

const HamburgerNav = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  const changeSidebarState = () => {
    setSidebarIsOpen(true);
    console.log(sidebarIsOpen, "changed");
  }
  return (
    <Router>
      <div
        id="mySidebar"
        className="sidebar"
        style={{ right: sidebarIsOpen ? 0 : -250 }}
      >
        <div class="hamburgerNav" id="myTopnav" onclick={changeSidebarState}>
          {!sidebarIsOpen && <i className="fa fa-2x fa-bars"></i>}
          {sidebarIsOpen && (
            <div>
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
    </Router>
  );
};

export default HamburgerNav;
