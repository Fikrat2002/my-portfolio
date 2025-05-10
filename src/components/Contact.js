import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      alert("Form submitted successfully!");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <section id="contact" className="container my-5">
      <div className="contact-container">
        <div className="contact-image">
          <img src="./assets/images/contact.svg" alt="Contact Image" />
        </div>
        <div className="contact-form">
          <h2>Contact us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
