import React from "react";

const Projects = () => {
  return (
    <div className="Projects-wrapper">
      <h1 className="text-center" style={{ marginBottom: "50px" }}>
        Featured Projects
      </h1>
      <div
        className="card mb-3"
        style={{
          margin: "0px 30% 0px 30%",
        }}
      >
        <h3 className="card-header">Card header</h3>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <video
          alt="Video from Gyazo"
          width="100%"
          autoplay="true"
          muted="true"
          loop="true"
          playsinline
          controls
        >
          <source
            src="https://i.gyazo.com/e1fcd4fb1377d450a3a06f64cc43e6ff.mp4"
            type="video/mp4"
          />
        </video>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="/" target="_blank" className="card-link">
            Card link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
