import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    mail: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const hanldeSubmission = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:8080/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to send Message!");
      }
      alert("Message sent!");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
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
            name="phoneNumber"
            id="phone"
            value={formData.phoneNumber}
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
            name="mail"
            id="email"
            value={formData.mail}
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
