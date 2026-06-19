import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <h2 className="section-title">
        About Me
      </h2>

      <div className="about-container">

        <div className="about-card">

          <h3>Who Am I?</h3>

          <p>
            I am Prem Kumar, a Computer Science Engineering graduate
            with a strong interest in Java Backend Development,
            Spring Boot, and Full Stack Development.
          </p>

          <p>
            I enjoy solving coding problems, building scalable
            applications, and continuously learning modern
            technologies.
          </p>

        </div>

        <div className="about-card">

          <h3>Education</h3>

          <p>
            Bachelor of Engineering
          </p>

          <p>
            Computer Science Engineering
          </p>

          <p>
            CGPA: <span>8.35 / 10</span>
          </p>

        </div>

        <div className="about-card">

          <h3>Highlights</h3>

          <ul>

            <li>✔ Solved 1000+ Coding Problems</li>

            <li>✔ Strong in Java & DSA</li>

            <li>✔ Spring Boot Developer</li>

            <li>✔ REST API Development</li>

            <li>✔ Learning Agentic AI</li>

            <li>✔ Learning RAG & LangChain</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;