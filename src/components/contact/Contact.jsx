import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

import ContactOption from "./ContactOption";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oj3l9vm",
        "template_fcq4zyb",
        form.current,
        "quMgy-BvXdXjMfMBQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const contactOptions = [
    {
      type: "Email",
      info: "quirozdev@hotmail.com",
      ref: "mailto:quirozdev@hotmail.com",
    },
    {
      type: "Messenger",
      info: "Rodrigo Quiroz Reyes",
      ref: "https://m.me/rodrigo.quirozreyes/",
    },
  ];

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption contactOptions={contactOptions[0]} icon={0} />
          <ContactOption contactOptions={contactOptions[1]} icon={1} />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
