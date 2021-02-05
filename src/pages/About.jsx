import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg from "../images/aboutAlt.jpg";
import "../App.scss";

const About = () => {
  return (
    <div>
      <section id="aboutCenter">
        <Header />
        <div className="aboutSection" id="aboutId">
          <div className="landingAbout">
            <div className="flex">
              <div className="aboutImgDiv">
                <img
                  src={aboutImg}
                  className="img-fluid"
                  alt=""
                  id="aboutImg"
                />
              </div>
              <div className="aboutTextDiv">
                <h3 className="aboutHeaders">
                  Always Learning, Always Enjoying
                </h3>
                <p className="aboutText">
                  I am an Atlanta native, which makes me a rarity in this city!
                  Though I have lived elsewhere over the years, Atlanta is the
                  home of my heart.
                  <br />
                  <br />I subscribe to the Tyrion Lannister mentality on
                  life-long learning: "The mind needs books like a sword needs a
                  whetstone." Whether it be in a formal academic environment or
                  exploring the world on my own, I am always striving to learn
                  more.
                </p>
                <h3 className="aboutHeaders">Grit and Determination</h3>
                <p className="aboutText">
                  In my late teens, I had the privilege of representing my
                  country internationally as a member of the US Jr. World Judo
                  Team. Judo teaches two important maxims: mutual welfare and
                  benefit, and also maximum efficiency of mind and body. These
                  philosophies have served me well in all aspects of my life
                  thus far. In all things, I strive to exceed expectations,
                  while also working to help those around me excel.
                  <br />
                  <br />
                  Whether it be on the mats, at work, at home, or at the laptop
                  I am tenacious. When I put my mind to a task I accomplish it.
                </p>
              </div>
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

export default About;
