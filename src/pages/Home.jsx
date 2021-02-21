import React from "react";
import Header from "../components/Header";
// import About from "../pages/About";
// import Talks from "../pages/Talks";
// import Footer from "../components/Footer";
import "../App.scss";

const Home = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
      <div>
        <section className="landingPage">
          <div className="landingPage__landingBg">
            <Header />
            <div className="landingPage__landingText">
              DevOps Engineer.
              <br />
              Tech Evangelist.
              <br />
              Relationship builder.
              <br />
              Queen of the YAMLs.
              <br />
              Total nerd.
              <div className="landingPage__bookButton">
                <a
                  href="/contact"
                  className="btn buttonStyle landingPage__bookButton"
                  id="bookMeButton"
                >
                  Book Me
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <div>
          <About />
          <Talks />
          <Footer />
        </div> */}
      </div>
  );
};

export default Home;
