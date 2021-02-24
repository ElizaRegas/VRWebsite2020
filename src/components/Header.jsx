import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.scss";
import HamburgerNav from "./HamburgerNav";
import FullNav from "./FullNav";

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
          <FullNav isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
        </nav>
      </header>
    </Router>
  );
};

export default Header;
