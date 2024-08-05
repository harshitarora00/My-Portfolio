import React from "react";

import "./style/Contact.css";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section--title">Get In Touch</h2>
      <div className="section--subtitle">Contact Me</div>
      <div className="contact--container container grid">
        <div className="contact--content">
          <h3 className="content--title">Talk to me</h3>
          <div className="contact--info">
            <div className="contact--card">
              <i className="fa-regular fa-envelope  contact--card-icon envelope"></i>
              <h3 className="contact--card-title">Email</h3>
              <span className="contact--card-data">
                aroraharshit015@gmail.com
              </span>

              <a
                href="mailto:goyalkaran2001@gmail.com"
                className="contact--button"
              >
                Write Me{" "}
                <i className="fa-sharp fa-solid fa-arrow-right contact--button-icon"></i>
              </a>
            </div>
            <div className="contact--card">
              <i className="fa-brands fa-whatsapp contact--card-icon whatsapp"></i>{" "}
              <h3 className="contact--card-title">WhatsApp</h3>
              <span className="contact--card-data">7451963696</span>
              <a
                href="//api.whatsapp.com/send?phone=7451963696&text=Hello, More Information!"
                className="contact--button"
                target="_blank"
                rel="noreferrer"
              >
                Write Me{" "}
                <i className="fa-sharp fa-solid fa-arrow-right contact--button-icon"></i>
              </a>
            </div>
            <div className="contact--card">
              <i className="fa-solid fa-phone contact--card-icon phone"></i>
              <h3 className="contact--card-title">Call Me</h3>
              <span className="contact--card-data">7451963696</span>
              <a href="tel:7451963696" className="contact--button">
                Dial Me
                <i className="fa-sharp fa-solid fa-arrow-right contact--button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact--content">
          <h3 className="content--title content--title-project">Hire me</h3>
          <form
            action="https://formsubmit.co/aroraharshit015@gmail.com"
            method="POST"
            className="contact--form"
          >
            <div className="contact--form-div">
              <label htmlFor="" className="contact--form-tag">
                Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Insert your name"
                className="contact--form-input"
              />
            </div>
            <div className="contact--form-div">
              <label htmlFor="" className="contact--form-tag">
                Mail*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Insert your email"
                className="contact--form-input"
              />
            </div>
            <div className="contact--form-div contact--form-area ">
              <label htmlFor="" className="contact--form-tag">
                Description
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                placeholder="Write your project"
                className="contact--form-input"
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message
              <i className="fa-solid fa-paper-plane contact--send-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
