import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";  // Import the download icon from react-icons
import "./About.css"; // Add custom styles for this page
import profilePic from "../assets/myphoto.jpg"; // Make sure the photo is in the assets folder
import resume from "../assets/srijasarojini_resume.pdf"; // Import your resume file

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        {/* Left Section: Profile Picture */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
        >
          <img src={profilePic} alt="Profile" />
        </motion.div>

        {/* Right Section: About Text */}
        <motion.div
          className="about-text-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="about-header"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="about-text"
          >
            "Hi! I'm Srija Sarojini Polimati.
            I'm currently learning and developing my skills in programming languages like Python, Java, and C.
            My primary interests lie in building Full Stack and Machine Learning projects,
            and I'm also exploring Artificial Intelligence.
            Outside of coding, I enjoy painting, gardening, and singing."
            
          </motion.p>

          {/* Download Resume Button */}
          <motion.a
            href={resume}  // Link to the resume file
            download="Resume.pdf"  // Specify the download file name
            className="download-resume-btn"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
