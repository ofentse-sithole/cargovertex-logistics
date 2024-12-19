import React, { useState } from 'react';
import './MiddleContact.css'; // Assuming you have a CSS file for styling

const MiddleContact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted', form);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please feel free to reach out to us using the form below or via our contact information.</p>
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@cargovertex.com</p>
          <p><strong>Phone:</strong> +27 123 456 7890</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default MiddleContact;
