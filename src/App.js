import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AOS from "aos";
import "./App.css";

function App() {
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
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
