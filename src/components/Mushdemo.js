import React from "react";
import "./Demo.css";

// mushroom workflow images
import mush1 from "../assets/mush_step1.png";
import mush2 from "../assets/mush_step2.png";
import mush3 from "../assets/mush_step3.png";
import mush4 from "../assets/mush_step4.png";

const images = [mush1, mush2, mush3, mush4];   // add more if you have them

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
