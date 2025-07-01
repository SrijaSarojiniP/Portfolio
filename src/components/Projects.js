import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import projectImage from "../assets/mediconnect.jpg"; // Your project image
import mushroomLogo from "../assets/Mushroom_logo.png"; 
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "MediConnect",
      image: projectImage,
      techStack: "Python (tkinter), MySQL (backend)",
      description:
        "Developing a mobile application for college hostel students to access and share essential medicines within their campus community.",
      demoLink: "/demo", // Link to the Demo page
      gitHubLink: "https://github.com/SrijaSarojiniP",
    },
    {
    title: "Mushroom Toxicity Classifier",
    image: mushroomLogo, // replace with your mushroom-project image
    techStack: "Python (Pandas, Scikit-learn, Flask), Random Forest",
    description:
      "ML model that predicts whether a mushroom is poisonous or edible from user-entered features.", 
    demoLink: "/mushdemo",        // route to your demo page
    gitHubLink: "https://github.com/SrijaSarojiniP/Mushrom_Classification",
  }
  ];

  return (
    <section className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects 💻
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-left">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-right">
              <motion.h3
                className="project-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.title}
              </motion.h3>
              <p className="project-tech-stack">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <p className="project-description">
                <strong>Description:</strong> {project.description}
              </p>

              <div className="project-buttons">
                <motion.a
                  href={project.gitHubLink}
                  className="project-button github-button"
                  whileHover={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </motion.a>

                {/* Demo button links to the demo page */}
                <Link to={project.demoLink}>
                  <motion.button
                    className="project-button demo-button"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
