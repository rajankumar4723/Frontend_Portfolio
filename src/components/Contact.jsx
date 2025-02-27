import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Prevent multiple submits

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Disable submit button

    try {
      const response = await axios.post(
        "https://portfolio-server-ltdq.onrender.com/api/contact/sendmessage", // ✅ Backend API
        formData
      );

      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submit
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      setResponseMessage(
        error.response?.data?.message || "❌ Error sending message. Try again!"
      );
    } finally {
      setIsLoading(false); // Re-enable submit button
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Get in touch! I'd love to hear from you.</p>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

