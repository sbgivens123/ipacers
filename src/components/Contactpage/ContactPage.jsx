import React, { useState } from "react";
import "./ContactPage.css";
import Header from "../Default/Header.jsx";
import Footer from "../Default/Footer.jsx";
import Links from "../Default/Links.jsx";

const API_URL = import.meta.env.PROD
  ? "https://apss-lab-api.onrender.com/api/contact"
  : "http://localhost:3000/api/contact";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      alert("Form submitted!");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="contact-page">
      <Header />
      {/* Main Container */}
      <div className="contact-container">
        <h1 className="contact-title">CONTACT</h1>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {/* Call Us Card */}
          <div className="contact-card">
            <h2>Call Us</h2>
            <div className="icon-wrapper">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </div>
            <div className="contact-info">
              <p>
                Lab Manager: <strong>(662) 325-8536</strong>
              </p>
              <p>
                ABE Office Phone: <strong>(662) 325-3282</strong>
              </p>
              <p>
                ABE Office Fax: <strong>(662) 325-3853</strong>
              </p>
            </div>
          </div>

          {/* Find Us Card */}
          <div className="contact-card">
            <h2>Find Us</h2>
            <div className="icon-wrapper">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="contact-info">
              <p>
                <a
                  href="https://experience.arcgis.com/experience/18fb04cd79a5440a86940cec9fc797b2/page/Campus-Map/#data_s=id%3Af5b30f4fa94e4afda062b9948274394e-189e5403525-layer-3%3A114"
                  target="/blank"
                >
                  #325, Agricultural and Biological Engineering (ABE),
                  Mississippi State University, MS
                </a>
              </p>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="contact-card">
            <h2>Email Us</h2>
            <div className="icon-wrapper">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="contact-info">
              <p>
                <a href="mailto:nuwanw@abe.msstate.edu">
                  nuwanw@abe.msstate.edu
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <p className="form-description">
              Have a question or want to get in touch? Fill out the form below
              and we'll get back to you as soon as possible.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a subject</option>
                <option value="Research Inquiry">Research Inquiry</option>
                <option value="Summer Camp">Summer Camp</option>
                <option value="Outreach Inquiry">Outreach Inquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={1}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="6"
              />
            </div>

            <button type="submit" className="submit-button">
              <span>Submit Message</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Prospective Students Section */}
        <div className="prospective-section">
          <h2>Prospective Students</h2>

          <div className="student-info">
            <h3>Graduate students</h3>
            <p>
              <strong>Graduate students</strong> interested in joining the APSS
              lab are encouraged to email Dr. Nuwan Wijewardane with a resume or
              CV, academic transcripts, and a cover letter detailing your
              research interests and goals.
            </p>
          </div>

          <div className="student-info">
            <h3>Undergraduate students</h3>
            <p>
              <strong>Undergraduate students</strong> interested in joining the
              lab are encouraged to email Dr. Nuwan Wijewardane with a resume or
              CV and your research interests.
            </p>
          </div>
        </div>
      </div>
      <Links />
      <Footer />
    </div>
  );
};

export default ContactPage;
