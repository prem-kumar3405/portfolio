
import "./Hero.css";
import profile from "../../assets/prem.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>
          Prem <span>Kumar</span>
        </h1>

        <h2 className="typing-text">
  <TypeAnimation
    sequence={[
      "Java Full Stack Developer",
      2000,
      "Spring Boot Developer",
      2000,
      "Knight Coder @ LeetCode",
      2000,
      "AI Enthusiast",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

        <p>
          Computer Science Engineering graduate passionate about
          building scalable backend systems, full-stack web
          applications, and AI-powered solutions.
        </p>

        <div className="hero-buttons">

  <a
    href="#projects"
    className="btn primary-btn"
  >
    View Projects
  </a>

<a
  href="/Premkumar_R_Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="btn resume-btn"
>
  View Resume
</a>

  <a
    href="https://www.linkedin.com/in/premkumarrajamani/"
    target="_blank"
    rel="noreferrer"
    className="btn secondary-btn"
  >
    LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/prem_cse_03/"
    target="_blank"
    rel="noreferrer"
    className="btn secondary-btn"
  >
    LeetCode
  </a>

</div>

      </div>

      <div className="hero-image">

        <img
         src={profile}
         alt="Prem Kumar"
        />

      </div>

    </section>
  );
}

export default Hero;