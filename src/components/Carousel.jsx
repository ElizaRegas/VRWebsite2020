import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import buddha from "../images/buddha.jpg";
import clean from "../images/clean2-icon-1.jpg";
import stem from "../images/shes-in-stem.jpg";
import foodie from "../images/foodie-finder.jpg";
import fridge from "../images/openfridge-slide.jpg";
import train from "../images/train-track.jpg";
import gif from "../images/giphy.jpg";
import nasty from "../images/nasty-trivia.jpg";
import hangman from "../images/hangman.jpg";
import "../App.scss";

const PortfolioItems = () => {
  return (
    <div id="portfolioLinks">
      <Carousel>
        <div className="container portfolioPic">
          <img src={clean} alt="clean titans application" />
          <a
            target="blank"
            href="https://github.com/melheins/clean-titans-2.0-app"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application/Team Project</p>
              <p className="portfolioTitleText">Clean Titans</p>
              <p className="portfolioBodyText">
                Clean Titans 2.0 is the current version of an application
                designed to teach children to responsibly do their chores. This
                was completed as my final project while attending the Coding
                Boot Camp at GA Tech.
              </p>
              <p className="techText">React, SQL, Node, Express, AuthO</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={stem} alt="stem project" />
          <a
            target="blank"
            href="https://github.com/ValarieR/shes-in-stem"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Hackathon Project</p>
              <p className="portfolioTitleText">She's in STEM</p>
              <p className="portfolioBodyText">
                She's in STEM was a project on which I worked while attending
                the Women Who Code ATL Annual Hackathon in 2017.
              </p>
              <p className="techText">JavaScript, Materialize, Firebase</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={foodie} alt="foodie application" />
          <a
            target="blank"
            href="https://github.com/ValarieR/friend-finder"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Foodie Finder</p>
              <p className="portfolioBodyText">
                Foodie Finder is a friend finding application in which the user
                answers questions and is matched with people who enjoy similar
                foods.
              </p>
              <p className="techText">JavaScript, Node, Express</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={fridge} alt="open fridge application" />
          <a
            target="blank"
            href="https://valarier.github.io/open-fridge-web-app/"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Open Fridge</p>
              <p className="portfolioBodyText">
                Open Fridge is a recipe finding app which allows the user to
                enter ingredients they have in their home, and returns recipes
                which include those items.
              </p>
              <p className="techText">HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={train} alt="train scheduler application" />
          <a
            target="blank"
            href="https://valarier.github.io/train-scheduler/"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Train Scheduler</p>
              <p className="portfolioBodyText">
                The train scheduler was a homework assignment designed to
                reinforce skills with moments.js.
              </p>
              <p className="techText">HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={gif} alt="giftastic application" />
          <a
            target="blank"
            href="https://valarier.github.io/gif-tastic/"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Giftastic</p>
              <p className="portfolioBodyText">
                Giftastic was a homework assignment designed to teach API/AJAX
                calls.
              </p>
              <p className="techText">HTML, CSS, JavaScript, APIs</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={nasty} alt="Nasty Women Trivia application" />
          <a
            target="blank"
            href="https://valarier.github.io/trivia-game/"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Nasty Women Trivia</p>
              <p className="portfolioBodyText">
                Nasty Women Trivia is a trivia game, the theme of which is
                uppity women I admire.
                <br></br>
                Test your knowledge about a few brave, bright, creative,
                butt-kicking ladies.
              </p>
              <p className="techText">HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={buddha} alt="Crystal Clarity application" />
          <a
            target="blank"
            href="https://valarier.github.io/crystal-clarity/"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Crystal Clarity</p>
              <p className="portfolioBodyText">
                Crystal Clarity was one of my first javascript assignments. It
                is a counting game, and a lot of fun to play!
                <br></br>
                Come and seek enlightenment with a few of your friendly
                neighborhood deities!
              </p>
              <p className="techText">HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="container portfolioPic">
          <img src={hangman} alt="hangman application" />
          <a
            target="blank"
            href="https://valarier.github.io/geek-hangman-game/"
            rel="noopener noreferrer"
          >
            <div className="portfolioCard">
              <p className="portfolioTypeText">Application</p>
              <p className="portfolioTitleText">Hangman for Geeks</p>
              <p className="portfolioBodyText">
                Geeky Hangman was an early javascript homework assignment.
              </p>
              <p className="legend">HTML, CSS, Javascript</p>
            </div>
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default PortfolioItems;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
