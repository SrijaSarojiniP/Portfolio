import React from "react";
import "./Demo.css";

// mushroom workflow images
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";

const images = [m1, m2, m3, m4];   // add more if you have them

const MushroomDemo = () => (
  <div className="demo-container">
    <h2 className="demo-title">Project Workflow: Mushroom Toxicity Classifier</h2>
    <div className="workflow-images">
      {images.map((img, i) => (
        <div key={i} className="workflow-step">
          <img src={img} alt={`Step ${i + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

export default MushroomDemo;
