import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="section-title">
        Contact Me
      </h2>

      <p className="contact-subtitle">
        Feel free to reach out for opportunities,
        collaborations, or just a friendly conversation.
      </p>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>premkumar.cse34@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 8610770689</p>
            </div>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/premkumarrajamani/"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/prem-kumar3405"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;