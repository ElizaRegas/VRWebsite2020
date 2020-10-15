import React from "react";
import Header from "../components/Header";
import Emailjs from "../components/Emailjs";
import Footer from "../components/Footer";
import "../App.css";

const Contact = () => {
  return (
    <div>
      <div className="contactBg">
        <Header />
        <Emailjs />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
