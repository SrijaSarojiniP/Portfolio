import React from "react";
import "./Certifications.css";
import certificate1 from "../assets/c1.png"; // Example image paths
import certificate2 from "../assets/c2.png";
import certificate3 from "../assets/c3.png";
import certificate4 from "../assets/c4.png";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certificates-list">
        <div className="certificate-item">
          <img
            src={certificate1}
            alt="Java by Codechef"
            className="certificate-image"
          />
          <h3 className="certificate-heading">Java by Codechef</h3>
        </div>
        <div className="certificate-item">
          <img
            src={certificate2}
            alt="Foundations of Cybersecurity by Coursera"
            className="certificate-image"
          />
          <h3 className="certificate-heading">Foundations of Cybersecurity by Coursera</h3>
        </div>
        <div className="certificate-item">
          <img
            src={certificate3}
            alt="Network Security by Eduskills"
            className="certificate-image"
          />
          <h3 className="certificate-heading">Network Security by Eduskills</h3>
        </div>
        <div className="certificate-item">
          <img
            src={certificate4}
            alt="Machine Learning by IBM"
            className="certificate-image"
          />
          <h3 className="certificate-heading">Machine Learning by IBM</h3>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
