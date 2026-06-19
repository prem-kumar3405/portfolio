import "./Skills.css";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiFastapi
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      icon: <FaJava />,
      name: "Java"
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS"
    },
    {
      icon: <SiMysql />,
      name: "MySQL"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI"
    },
    {
      icon: <FaDatabase />,
      name: "REST APIs"
    },
    {
      icon: "🤖",
      name: "RAG"
    },
    {
      icon: "⚡",
      name: "LangChain"
    }
  ];

  return (
    <section id="skills" className="skills">

      <h2 className="section-title">
        Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;