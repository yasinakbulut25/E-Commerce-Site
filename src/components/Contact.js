import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="section" id="contact">
      <div className="contact-area">
        <div className="contact-form">
          <h2 className="section-title">Contact Us</h2>
          <form action="">
            <div className="input-grid">
              <div className="input-box">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={surName}
                  required
                  onChange={(e) => setSurName(e.target.value)}
                />
              </div>
            </div>
            <div className="input-box">
              <label>E Mail</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Name</label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message.."
                required
              ></textarea>
            </div>

            <button className="send-btn" type="submit">
              Send Message <i className="bi bi-send"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
