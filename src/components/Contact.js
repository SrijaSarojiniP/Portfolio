import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing GitHub icon

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-info">
          {/* Email */}
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <FaEnvelope className="contact-icon" />
            <p>
              Email: <a href="srijasarojinipolimati7@gmail.com">srijasarojinipolimati7@gmail.com</a>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <FaPhone className="contact-icon" />
            <p>
              Phone: <a href="9391185884">9391185884</a>
            </p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          >
            <FaLinkedin className="contact-icon" />
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/srija-sarojini-polimati-1625b6254" target="_blank" rel="noopener noreferrer">linkedin.com/in/srijasarojini</a>
            </p>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          >
            <FaGithub className="contact-icon" />
            <p>
              GitHub: <a href="https://github.com/SrijaSarojiniP" target="_blank" rel="noopener noreferrer">github.com/srijasarojini</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
