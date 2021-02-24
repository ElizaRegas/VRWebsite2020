import React from "react";
import TalkCards from "../components/TalkCards";
import Footer from "../components/Footer";
// import mother from "../images/ListenToYourMother.jpg";
import "../App.scss";
import Header from "../components/Header";

const Talks = () => {
  return (
    <section>
      <div class="talks" id="speaking">
        <div class="flex">
          <a
            href="/contact"
            class="btn buttonStyle talks__buttons talks__book"
            // id="talksBook"
          >
            Book Me
          </a>
          <h2 class="text-center talks__heading">Tech Talks</h2>
          <a
            href="https://www.papercall.io/speakers/valarieregas"
            target="_blank"
            class="btn buttonStyle talks__buttons talks__browse"
            // id="talksBrowse"
            rel="noopener noreferrer"
          >
            Browse
          </a>
        </div>

        <TalkCards />
      </div>
      <div className="landingPage__landingBg footerBg">
        <Header />
        <a href="/contact" class="btn buttonStyle talksButtons" id="footerBook">
          Book Me
        </a>
        <Footer />
      </div>
    </section>
  );
};

export default Talks;
