import React, { useState } from "react";
import "./ExperienceCSS.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "🧑‍💻 Technical Member",
      organization: "Algorithmic and Programming Society, Centurion University of Technology and Management",
      duration: "Dec 2022 - Present",
      details:
        "As a dedicated member of the Algorithmic and Programming Society at Centurion University Of Technology and Management, I have embraced the opportunity to contribute to the professional and technical development of students. My role involves mentoring and coaching a group of aspiring programmers, guiding their progress, and ensuring they remain focused on their goals. Additionally, I am an integral part of the core event management team, where I collaborate to organize events and workshops that enhance learning, foster collaboration, and inspire innovation among students. This experience has been deeply fulfilling, allowing me to blend my technical expertise with leadership skills while making a meaningful impact on the academic and professional journeys of my peers.",
    },
    {
      role: "🧑‍💻 Programming Skill",
      organization: "Self-Learning & Coding Platforms",
      duration: "july 2024 - Present",
      details:
        "Solved 500+ coding problems across GeeksForGeekse, HackerRank, and Codeforces. Achieved Gold Badge in Python and Silver Badge in Java on HackerRank.Focused on optimizing algorithms for time and space efficiency.",
    },
    {
      role: "🧑‍💻 Web Development",
      organization: "Centurion University Of Technology anf Management",
      duration: "july to Nov 2024 - Present",
      details:
        "Developed a responsive web application using Angular For fronted and Spring Boot fir backend , and MongoDB. Integrated RESTful APIs for dynamic data management and user authentication. Worked with a 5-member team following Agile methodology with weekly sprints.",
    },
     {
      role: "🧑‍💻 Teamwork & Collaboration",
      organization: "Centurion University Of Technology anf Management",
      duration: "july-2024 to Apr 2025 - Present",
      details:
        "Collaborated with a team of 6 to design a Automated Payroll System with Using GPS Tracking System. Implemented role-based authentication and cloud storage integration. Coordinated tasks using GitHub for version control and Trello for task management. Presented the project at the university tech fest and received Best Project Award.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-business-time"></i> Experience
      </motion.h2>
      <motion.div
        className="experience-timeline"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Add staggered animation for items
            },
          },
        }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move into place with full opacity
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.15 * index, // Delay between items
            }}
          >
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
