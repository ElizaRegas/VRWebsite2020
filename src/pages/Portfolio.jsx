import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel.jsx";
import Footer from "../components/Footer";
import "../App.css";

const Portfolio = () => {
  return (
    <div>
      <div id="portfolio">
        <Header />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
