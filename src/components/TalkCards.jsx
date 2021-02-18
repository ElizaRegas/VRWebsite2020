import React from "react";

const TalkCards = () => {
  return (
    <div>
      <section class="section-tours" id="section-tours">

        <div class="row">
          <div class="col-1-of-4">
            <div class="card">
              <a
                href="https://www.recallact.com/presentation/listen-your-mother-why-tech-needs-moms"
                target="_blank"
                rel="noopener noreferrer"
                itemprop="url"
              >
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">&nbsp;</div>
                  <div class="card__details">
                    <p class="card__details-title">"Listen to Your Mother: Why Tech Needs Moms"</p>
                    <p class="card__details-conference">We RISE Conference</p>
                    <p class="card__details-date">June 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="card">
              <a
                  href="https://www.recallact.com/presentation/ignite-talks-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemprop="url"
                >
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">&nbsp;</div>
                  <div class="card__details">
                    <p class="card__details-title">"Mother Nodes Best"</p>
                    <p class="card__details-conference">DevOps Days Atlanta</p>
                    <p class="card__details-date">April 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="card">
              <a
                  href="https://bootcamp.pe.gatech.edu/blog/the-mom-advantage-why-tech-needs-mommies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemprop="url"
                >
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">&nbsp;</div>
                  <div class="card__details">
                    <p class="card__details-title">"The Mom Advantage: Why Tech Needs Mommies"</p>
                    <p class="card__details-conference">Women Who Code</p>
                    <p class="card__details-date">March 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="card">
              <a
                  href="https://www.youtube.com/watch?v=dCjmdXhQE4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemprop="url"
                >
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--4">&nbsp;</div>
                  <div class="card__details">
                    <p class="card__details-title">"Proper Care and Feeding of Junior Developers"</p>
                    <p class="card__details-conference">Code on the Beach</p>
                    <p class="card__details-date">August 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkCards;
