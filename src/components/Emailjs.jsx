import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import '../App.scss';

// All functionality for emailjs.
export default function ContactUs() {

  init("user_Tpz2raJQqzHJ9GS3cShGu");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'Template1027', e.target, 'user_Tpz2raJQqzHJ9GS3cShGu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  // Input form
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input className="contact-input" type="hidden" name="contact_number" />
      <label>Name</label>
      <br />
      <input className="contact-input" type="text" name="name" />
      <br />
      <label>Email</label>
      <br />
      <input className="contact-input" type="email" name="email" />
      <br />
      <label>Message</label>
      <br />
      <textarea className="contact-input" name="message" />
      <br />
      <span id="sendButtonContact" className="btn2">
        <input id="contactButton" type="submit" value="Send" />
      </span>
    </form>
  );
}