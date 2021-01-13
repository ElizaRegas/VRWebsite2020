import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AOS from "aos";
import "./App.css";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 800,
      delay: 500,
      once: false,
      disable: "mobile",
    });
  }, []);

  return (
    <main>
      <Switch>
        <Route
          path="/about"
          component={About}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <Route
          path="/portfolio"
          component={Portfolio}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <Route
          path="/contact"
          component={Contact}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <Route
          path="/"
          component={Home}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
      </Switch>
    </main>
  );
}

export default App;
