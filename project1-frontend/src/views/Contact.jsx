import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const hanldeSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div>Contact page</div>
      <form onSubmit={hanldeSubmission}>
        <div>
          <label htmlFor="">Namn</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
        </div>

        <div>
          <label htmlFor="">Telefon</label>
          <br />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <br />
        </div>

        <div>
          <label htmlFor="">E-Post</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
        </div>

        <div>
          <label htmlFor="">Meddelande</label>
          <br />
          <textarea
            type="message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Skicka</button>
      </form>
    </>
  );
}
export default Contact;
