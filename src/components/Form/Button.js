import React, { Component } from "react";
import emailjs from 'emailjs-com';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    // this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  sendEmail(e) {
    // console.log('Form Values', this.props.formValues);
    e.preventDefault();

    emailjs.sendForm('gmail', 'Template1027', e.target, 'user_Tpz2raJQqzHJ9GS3cShGu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    this.setState({ isClicked: true });
    e.target.reset();
  }

  render() {
    const recipient = `mailto:${this.props.email}`;
    const subject = "?subject=Interested%20Client";
    const body = `&body=${this.props.formValues.message}`;

    return (
      <button
        href={`${recipient}${subject}${body}`}
        disabled={this.state.isClicked}
        onClick={this.sendEmail}
      >
        Contact Us
      </button>
    );
  }
}

export default Button;
