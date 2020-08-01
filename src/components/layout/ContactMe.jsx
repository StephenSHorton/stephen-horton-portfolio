import React from "react";

const ContactMe = () => {
  const marginStyle = { marginBottom: "50px" };
  return (
    <div
      className="ContactMe-wrapper"
      style={{ display: "grid", justifyContent: "center" }}
    >
      <h1 className="text-center" style={marginStyle}>
        Contact Me
      </h1>
      <h3 className="text-center" style={marginStyle}>
        4stephenhorton@gmail.com
      </h3>
      <a
        className="btn btn-info"
        href="https://github.com/StephenSHorton"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "white",
          ...marginStyle,
        }}
      >
        GitHub
      </a>
      <a
        className="btn btn-info"
        href="https://www.linkedin.com/in/stephenshorton/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white", ...marginStyle }}
      >
        LinkedIn
      </a>
    </div>
  );
};

export default ContactMe;
