import React from "react";
import Header from "../components/Header";
import About from "../pages/About";
import Talks from "../pages/Talks";
import Footer from "../components/Footer";
import "../App.scss";

const Home = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
      <div id="homeBackgroundColor">
        <section>
          <div className="landingBg homeCenter">
            <Header />
            <div className="landingCenterText">
              DevOps Engineer.
              <br />
              Tech Evangelist.
              <br />
              Relationship builder.
              <br />
              Queen of the YAMLs.
              <br />
              Total nerd.
              <div className="bookMeFade">
                <a
                  href="/contact"
                  className="btn buttonStyle talksButtons"
                  id="bookMeButton"
                >
                  Book Me
                </a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <About />
          <Talks />
          <Footer />
        </div>
      </div>
  );
};

export default Home;
