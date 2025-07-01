import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import "./Skills.css";

import javaLogo from "../assets/logos/java.png";
import pythonLogo from "../assets/logos/python.png";
import cLogo from "../assets/logos/c.png";
import htmlcssLogo from "../assets/logos/htmlcss.png";
import reactLogo from "../assets/logos/react.png";
import mysqlLogo from "../assets/logos/mysql.png";
import mongoLogo from "../assets/logos/mongodb.png";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("languages");

  const logoData = {
    languages: [
      { label: "Java", logo: javaLogo },
      { label: "Python", logo: pythonLogo },
      { label: "C", logo: cLogo },
    ],
    frontend: [
      { label: "HTML & CSS", logo: htmlcssLogo },
      { label: "React", logo: reactLogo },
    ],
    backend: [
      { label: "MySQL", logo: mysqlLogo },
      { label: "MongoDB", logo: mongoLogo },
    ],
  };

  const renderLogos = () =>
    logoData[selectedCategory].map((skill, index) => (
      <div className="logo-container" key={index}>
        <img src={skill.logo} alt={skill.label} className="skill-logo" />
        <p>{skill.label}</p>
      </div>
    ));

  return (
    <div className="skills-page">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        <div className="skills-buttons">
          <button
            className={`skills-btn ${selectedCategory === "languages" ? "active" : ""}`}
            onClick={() => setSelectedCategory("languages")}
          >
            Languages
          </button>
          <button
            className={`skills-btn ${selectedCategory === "frontend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={`skills-btn ${selectedCategory === "backend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("backend")}
          >
            Backend
          </button>
          <button
            className="skills-btn coding-profile-btn"
            onClick={() => setSelectedCategory("codingProfile")}
          >
            Coding Profiles
          </button>
        </div>

        <div className="skills-display-box">
          {selectedCategory === "codingProfile" ? (
            <div className="coding-profile-container">
              <FaCode
                className="coding-icon"
                onClick={() => window.open("https://leetcode.com/u/SrijaSarojiniP/", "_blank")}
                title="Visit Coding Profile"
              />
              <p className="leetcode-heading">LeetCode Profile</p>
            </div>
          ) : (
            <div className="logo-box">{renderLogos()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
