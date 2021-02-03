import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.scss";

const Home = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <div id="homeBackgroundColor">
      <section>
        <div className="landingBg">
          <Header />
          <div className="landing landingCenterText">
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
              <a href="/contact" className="btn buttonStyle" id="bookMeButton">
                Book Me
              </a>
            </div>
          </div>
        </div>
      </section>
        <div>
          <Footer />
        </div>
    </div>
  );
};

export default Home;
