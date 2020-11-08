import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import buddha from "../images/buddha.jpg";
import clean from "../images/clean2-icon-1.png";
import stem from "../images/shes-in-stem.jpg";
import foodie from "../images/foodie-finder.jpg";
import "../App.css";

const PortfolioItems = () => {
  return (
    <Carousel>
      <div className="container portfolioPic">
        <img src={clean} alt="clean titans application" />
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
