import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Talks from "./pages/Talks";
// import Contact from "./pages/Contact";
// import AOS from "aos";
import "./App.scss";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <main>
      <Switch>
        {/* <Route
          path="#about"
          component={About}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        /> */}
        <Route
          path="/portfolio"
          component={Portfolio}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        {/* <Route
          path="#talks"
          component={Talks}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        /> */}
        {/* <Route
          path="/contact"
          component={Contact}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        /> */}
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
