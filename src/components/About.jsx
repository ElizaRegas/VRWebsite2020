import React from "react";
import Header from "../components/Header";
import aboutImg from "../images/aboutAlt.jpg";
import upArrow from "../images/upArrow.png";
import "../App.css";

const About = () => {
  return (
    <section>
      <Header />
      <div class="aboutSection" id="about">
        <div class="landingAbout">
          <div class="flex">
            <div class="aboutImgDiv" data-aos="fade-right">
              <img src={aboutImg} class="img-fluid" alt="" id="aboutImg" />
            </div>
            <div class="aboutTextDiv" data-aos="fade-left">
              <h3 class="aboutHeaders">Always Learning, Always Enjoying</h3>
              <p class="aboutText">
                I am an Atlanta native, which makes me a rarity in this city!
                Though I have lived elsewhere over the years, Atlanta is the
                home of my heart.
                <br />
                <br />I subscribe to the Tyrion Lannister mentality on life-long
                learning: "The mind needs books like a sword needs a whetstone."
                Whether it be in a formal academic environment or exploring the
                world on my own, I am always striving to learn more.
              </p>
              <h3 class="aboutHeaders">Grit and Determination</h3>
              <p class="aboutText">
                In my late teens, I had the privilege of representing my country
                internationally as a member of the US Jr. World Judo Team. Judo
                teaches two important maxims: mutual welfare and benefit, and
                also maximum efficiency of mind and body. These philosophies
                have served me well in all aspects of my life thus far. In all
                things, I strive to exceed expectations, while also working to
                help those around me excel.
                <br />
                <br />
                Whether it be on the mats, at work, at home, or at the laptop I
                am tenacious. When I put my mind to a task I accomplish it.
              </p>
            </div>
          </div>
          {/* <a href="/">
            <img
              className="upArrow upArrowAbout"
              src={upArrow}
              alt="back to the top"
              data-aos="zoom-in"
            />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
