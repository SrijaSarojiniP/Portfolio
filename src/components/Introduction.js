import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";
import hiGif from "../assets/hi.gif";

const Introduction = () => {
  const name = "SRIJA   SAROJINI"; // Capitalized name with gap
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  // Rotating lines
  const lines = [
    "Student at SVECW '26",
    "Computer Science and Engineering",
    // "Full Stack Developer",
  ];
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lines.length]); // ✅ include dependency to satisfy eslint

  return (
    <section id="home" className="introduction">
      {/* Background GIF */}
      <div className="background-gif">
        <img src={hiGif} alt="HI GIF" className="gif-background" />
      </div>

      <div className="intro-container">
        <div className="intro-box">
          {/* Static Text */}
          <p className="static-text">
            Hello There! I am <span className="hand-icon">👋</span>
          </p>

          {/* Animated Name */}
          <div className="animated-name">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                className="animated-letter"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* About Me Button */}
          <button className="about-button" onClick={handleAboutClick}>
            About Me
          </button>

          {/* Rotating Lines */}
          <motion.p
            className="rotating-lines"
            key={currentLineIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {lines[currentLineIndex]}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
