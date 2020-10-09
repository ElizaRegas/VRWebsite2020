import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

import '../App.css';

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

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}