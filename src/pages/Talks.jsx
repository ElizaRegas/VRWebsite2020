import React from "react";
import TalkCards from "../components/TalkCards";
import mother from "../images/ListenToYourMother.jpg";
import "../App.scss";

const Talks = () => {
  return (
    <section>
      <div class="landing" id="speaking">
        <div class="flex talksButtonsTopPadding">
          <a
            href="/contact"
            class="btn buttonStyle talksButtons"
            id="talksBook"
          >
            Book Me
          </a>
          <h3 class="text-center" id="talksHeading">
            Tech Talks
          </h3>
          <a
            href="https://www.papercall.io/speakers/valarieregas"
            target="_blank"
            class="btn buttonStyle talksButtons"
            id="talksBrowse"
            rel="noopener noreferrer"
          >
            Browse
          </a>
        </div>

        <TalkCards />

      </div>
    </section>
  );
};

export default Talks;
