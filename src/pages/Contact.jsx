import React from "react";
import Header from "../components/Header";
import Emailjs from "../components/Emailjs";
import "../App.css";

const Contact = () => {
  return (
    <div>
      <div className="contactBg">
        <Header />
        <Emailjs />
      </div>
    </div>
  );
};

export default Contact;
