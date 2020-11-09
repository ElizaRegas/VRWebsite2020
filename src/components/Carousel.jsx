import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import buddha from "../images/buddha.jpg";
import clean from "../images/clean2-icon-1.jpg";
import stem from "../images/shes-in-stem.jpg";
import foodie from "../images/foodie-finder.jpg";
import fridge from "../images/openfridge-slide.jpg";
import train from "../images/train-track.jpg";
import gift from "../images/giphy.jpg";
import nasty from "../images/nasty-trivia.jpg";
import hangman from "../images/hangman.jpg";
import "../App.css";

const PortfolioItems = () => {
  return (
    <Carousel>
      <div className="container portfolioPic">
        <img src={clean} alt="clean titans application" className="imageSize" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application/Team Project</p>
          <p className="portfolioTitleText">Clean Titans</p>
          <p className="portfolioBodyText">
            Clean Titans 2.0 is the current version of an application designed
            to teach children to responsibly do their chores. This was completed
            as my final project while attending the Coding Boot Camp at GA Tech.
          </p>
          <p className="legend">Legend 1</p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={stem} alt="stem project" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Hackathon Project</p>
          <p className="portfolioTitleText">She's In STEM</p>
          <p className="portfolioBodyText">
            She's in STEM was a project on which I worked while attending the
            Women Who Code ATL Annual Hackathon in 2017.
          </p>
          <p className="legend">Javascript, Materialize, Firebase</p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={foodie} alt="foodie application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Foodie Finder</p>
          <p className="portfolioBodyText">
            Foodie Finder is a friend finding application in which the user
            answers questions and is matched with people who enjoy similar
            foods.
          </p>
          <p className="legend">Javascript, Node, Express</p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={fridge} alt="open fridge application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Open Fridge</p>
          <p className="portfolioBodyText">
            Open Fridge is a recipe finding app which allows the user to enter
            ingredients they have in their home, and returns recipes which
            include those items.
          </p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={train} alt="train scheduler application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Train Scheduler</p>
          <p className="portfolioBodyText">
            The train scheduler was a homework assignment designed to reinforce
            skills with moments.js.
          </p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={gift} alt="giftastic application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Giftastic</p>
          <p className="portfolioBodyText">
            Giftastic was a homework assignment designed to teach API/AJAX
            calls.
          </p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={nasty} alt="Nasty Women Trivia application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Nasty Women Trivia</p>
          <p className="portfolioBodyText">
            Nasty Women Trivia is a trivia game, the theme of which is uppity
            women I admire.
            <br></br>
            Test your knowledge about a few brave, bright, creative,
            butt-kicking ladies.
          </p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={buddha} alt="Crystal Clarity application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Crystal Clarity</p>
          <p className="portfolioBodyText">
            Crystal Clarity was one of my first javascript assignments. It is a
            counting game, and a lot of fun to play!
            <br></br>
            Come and seek enlightenment with a few of your friendly neighborhood
            deities!
          </p>
        </div>
      </div>

      <div className="container portfolioPic">
        <img src={hangman} alt="hangman application" />
        <div className="portfolioCard">
          <p className="portfolioTypeText">Application</p>
          <p className="portfolioTitleText">Hangman for Geeks</p>
          <p className="portfolioBodyText">
            Geeky Hangman was an early javascript homework assignment.
          </p>
          <p className="legend">HTML, CSS, Javascript</p>
        </div>
      </div>
    </Carousel>
  );
};

export default PortfolioItems;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
