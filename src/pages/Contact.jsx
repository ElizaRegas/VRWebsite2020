import React from "react";
// import Header from "../components/Header";
import Emailjs from "../components/Emailjs";
// import Footer from "../components/Footer";
import "../App.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div id="contact" className="contactBg">
        <div className="contact__textDiv">
          <h2 className="contactMe">Contact me!</h2>
          {/* <Header /> */}
          <Emailjs />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
