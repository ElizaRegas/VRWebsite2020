import React from "react";
import Header from "../components/Header";
import Emailjs from "../components/Emailjs";
import Footer from "../components/Footer";
import "../App.scss";

const Contact = () => {
  return (
    <div>
      <div className="contactBg">
        <div className="noReverse">
          <Header />
          <Emailjs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
