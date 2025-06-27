import React from "react";
import "./Demo.css"; // Import the Demo CSS for styling

// Import your images from the assets folder
import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import step4 from "../assets/step4.jpg";
import step5 from "../assets/step5.jpg";
import step6 from "../assets/step6.jpg";
import step7 from "../assets/step7.jpg";
import step8 from "../assets/step8.jpg";
import step9 from "../assets/step9.jpg";
import step10 from "../assets/step10.jpg";

const Demo = () => {
  // Array of images
  const images = [step1, step2, step3, step4, step5, step6, step7, step8, step9, step10];

  return (
    <div className="demo-container">
      <h2 className="demo-title">Project Workflow: MediConnect</h2>
      <div className="workflow-images">
        {images.map((image, index) => (
          <div key={index} className="workflow-step">
            <img src={image} alt={`Step ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
