import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

const Home = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <div>
      <section>
        <div className="landingBg">
          <Header />
          <div class="landing landingCenterText" data-aos="fade-right">
            DevOps Engineer.
            <br />
            Tech Evangelist.
            <br />
            Relationship builder.
            <br />
            Queen of the YAMLs.
            <br />
            Total nerd.
            <div data-aos="fade-up">
              <a href="/contact" class="btn buttonStyle" id="bookMeButton">
                Book Me
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
