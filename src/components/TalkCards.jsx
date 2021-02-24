import React from "react";

const TalkCards = () => {
  return (
    <div>
      <section className="talkCards">

        <div className="row">
          <div className="col-1-of-4">
            <div className="card">
              <a
                href="https://www.recallact.com/presentation/listen-your-mother-why-tech-needs-moms"
                target="_blank"
                rel="noopener noreferrer"
                itemProp="url"
              >
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <div className="card__details">
                    <p className="card__details-title">"Listen to Your Mother: Why Tech Needs Moms"</p>
                    <p className="card__details-conference">We RISE Conference</p>
                    <p className="card__details-date">June 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="card">
              <a
                  href="https://www.recallact.com/presentation/ignite-talks-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="url"
                >
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <div className="card__details">
                    <p className="card__details-title">"Mother Nodes Best"</p>
                    <p className="card__details-conference">DevOps Days Atlanta</p>
                    <p className="card__details-date">April 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="card">
              <a
                  href="https://bootcamp.pe.gatech.edu/blog/the-mom-advantage-why-tech-needs-mommies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="url"
                >
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <div className="card__details">
                    <p className="card__details-title">"The Mom Advantage: Why Tech Needs Mommies"</p>
                    <p className="card__details-conference">Women Who Code</p>
                    <p className="card__details-date">March 2018</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="card">
              <a
                  href="https://www.youtube.com/watch?v=dCjmdXhQE4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="url"
                >
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--4">&nbsp;</div>
                  <div className="card__details">
                    <p className="card__details-title">"Proper Care and Feeding of Junior Developers"</p>
                    <p className="card__details-conference">Code on the Beach</p>
                    <p className="card__details-date">August 2018</p>
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
