import React from "react";
import "../App.css";

const Talks = () => {
  return (
    <section>
      <div class="landing" id="speaking">
        <div class="flex">
          <a
            href="contact.html"
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
            Browse Talks
          </a>
        </div>

        <div class="gallery">
          <ul class="row">
            <li id="youTube1" className="talkLinks" data-aos="zoom-in">
              <iframe
                className="iframe imgFill"
                src="https://www.youtube.com/embed/WHheVF9d4Z8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                title="The Mom Advantage"
                id="talk1"
              ></iframe>
              <p class="whiteText">
                "The Mom Advantage: Why Tech Needs Mommies"
                <br />
                <span>
                  <i>
                    March 2018 - Women Who Code Atlanta <br />
                    International Women's Day
                  </i>
                </span>
              </p>
            </li>

            <li className="talkLinks" data-aos="zoom-in">
              <a
                href="https://www.recallact.com/presentation/ignite-talks-0"
                target="_blank"
                rel="noopener noreferrer"
                itemprop="url"
              >
                <img
                  class="imgFill"
                  src="https://valarieregas.com/wp-content/uploads/2019/01/devopsdasatl-1024x566.jpg"
                  alt="Devops Days Atlanta - April 2018 - Valarie Regas"
                  itemprop="image"
                  srcset="
                    https://valarieregas.com/wp-content/uploads/2019/01/devopsdasatl-1024x566.jpg 1024w,
                    https://valarieregas.com/wp-content/uploads/2019/01/devopsdasatl-300x166.jpg   300w,
                    https://valarieregas.com/wp-content/uploads/2019/01/devopsdasatl-768x424.jpg   768w,
                    https://valarieregas.com/wp-content/uploads/2019/01/devopsdasatl.jpg          1102w
                  "
                  sizes="(max-width: 688px) 100vw, 688px"
                  title="devopsdasatl"
                />
              </a>
              <p class="whiteText">
                "Mother Nodes Best"
                <br />
                <span>
                  <i> April 2018 - DevOps Days Atlanta </i>
                </span>
              </p>
            </li>
          </ul>

          <ul className="row">
            <li class="talkLinks row2" data-aos="zoom-in">
              <a
                href="https://www.recallact.com/presentation/listen-your-mother-why-tech-needs-moms"
                target="_blank"
                rel="noopener noreferrer"
                itemprop="url"
              >
                <div class="listenImg"></div>
              </a>
              <p class="whiteText">
                "Listen to your Mother"
                <br />
                <span>
                  <i> June 2018 - We RISE Conference </i>
                </span>
              </p>
            </li>

            <li id="youTube2" class="talkLinks row2" data-aos="zoom-in">
              <iframe
                class="iframe imgFill"
                src="https://www.youtube.com/embed/dCjmdXhQE4A"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                title="Proper Care"
              ></iframe>
              <p class="whiteText">
                "Proper Care & Feeding of Jr. Developers"
                <br />
                <span>
                  <i>
                    {" "}
                    August 2018 - Code on the Beach <br />{" "}
                  </i>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Talks;