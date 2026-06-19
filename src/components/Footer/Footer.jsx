import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Prem Kumar</h2>

        <p>
          Java Backend Developer | Spring Boot Developer |
          LeetCode Knight
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/prem-kumar3405"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/premkumarrajamani/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/prem_cse_03/"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode />
          </a>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Prem Kumar. All Rights Reserved.
          </p>

          <p>
            Built with React by Prem Kumar
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;