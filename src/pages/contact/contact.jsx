import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contactPage">
      <div className="container">
        <form>
          <h3>Get In Touch</h3>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="E-mail id" required />
          <input type="text" id="phone" placeholder="Phone no." required />
          <textarea
            id="message"
            rows="4"
            placeholder="How can I help you?"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
