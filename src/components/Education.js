import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Education.css";

const Education = () => {
  const [activeSection, setActiveSection] = useState("school");

  const educationData = {
    school: {
      title: "🏫 Tirumala English Medium High School ",
      location: "Rajahmundry, Andhra Pradesh",
      subject: "SSC board",
      description:
        "🌟 Built a strong foundation in mathematics, science, and language arts. Participated in various extracurricular activities like sports and art competitions.",
    },
    intermediate: {
      title: "📚 Tirumala Mahila Junior Kalasala ",
      location: "Rajahmundry, Andhra Pradesh",
      subject: "Math, Physics, Chemistry",
      description:
        "✨ Focused on advanced science subjects, preparing for engineering entrance exams. Excelled in academics.",
    },
    btech: {
      title: "💻 Shri Vishnu Engineering College for Women",
      location: "Bhimavaram, Andhra Pradesh",
      subject: "Computer Science and Engineering",
      description:
        "🖥️ Specializing in full-stack development, data structures and algorithms. Completed multiple projects and internships to gain practical experience.",
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="education-section">
      {/* Title */}
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Education Life 🎓
      </motion.h2>

      {/* Container */}
      <div className="education-container">
        {/* Sidebar */}
        <motion.div
          className="education-sidebar"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["school", "intermediate", "btech"].map((section, index) => (
            <motion.button
              key={section}
              className={`sidebar-button ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => handleSectionChange(section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              {section === "school"
                ? "0-10 🏫"
                : section === "intermediate"
                ? "11-12 📚"
                : "Bachelor 💻"}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          className="education-content"
          key={activeSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="content-title">{educationData[activeSection].title}</h3>
          <p className="content-location">{educationData[activeSection].location}</p>
          <p className="content-subject">
            <strong>Subject: </strong>
            {educationData[activeSection].subject}
          </p>
          <p className="content-description">
            {educationData[activeSection].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
