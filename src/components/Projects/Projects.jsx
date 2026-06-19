import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "Expense Tracker with AI Insights",
      tech: "React • Spring Boot • MySQL • Python • RAG",
      description:
        "A full-stack expense management application that allows users to track expenses and receive AI-powered spending insights.",
      features: [
        "Expense Management",
        "AI Insights",
        "PDF Reports"
      ]
    },

    {
      title: "Real-Time Messenger",
      tech: "Spring Boot • WebSocket • MySQL",
      description:
        "A real-time messaging application built using Spring Boot and WebSocket for instant communication.",
      features: [
        "Real-Time Chat",
        "Authentication",
        "WebSocket"
      ]
    },

    {
      title: "Banking Management System",
      tech: "Java • JDBC • MySQL",
      description:
        "A banking application developed using Java, JDBC, and MySQL for account and transaction management.",
      features: [
        "Account Management",
        "Fund Transfer",
        "Transaction History"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">

      <h2 className="section-title">
        Projects
      </h2>

      <p className="project-subtitle">
        Projects that demonstrate my expertise in Java,
        Spring Boot, Full Stack Development, and AI-powered
        applications.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className={`project-card ${
              index === 0 ? "featured-project" : ""
            }`}
            key={index}
          >

            <div className="project-image">

              {index === 0 && (
                <span className="featured-badge">
                  ⭐ Featured Project
                </span>
              )}

              <h3>{project.title}</h3>

            </div>

            <div className="project-content">

              <span className="tech-stack">
                {project.tech}
              </span>

              <p>
                {project.description}
              </p>

              <ul>

                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <div className="project-buttons">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a href="#">
                  Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;