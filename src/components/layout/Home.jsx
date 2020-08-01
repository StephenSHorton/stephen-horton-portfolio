import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-wrapper">
      <h1 className="text-center">Hi there</h1>
      <blockquote
        className="blockquote text-center"
        style={{
          marginTop: "100px",
        }}
      >
        <p className="mb-0">"Find something that you love to do and do it."</p>
        <footer className="blockquote-footer">
          <cite title="Source Title">Anonymous</cite>
        </footer>
      </blockquote>
      <div className="profile-pic">
        <img alt="profile" src="https://gdurl.com/llUw" />
      </div>
      <div className="summary">
        <h3 style={{ marginBottom: "20px" }}>
          My name is Stephen Horton. I'm a software engineer looking for a long
          term job. Here's what you'll love about me:
        </h3>
        <ul>
          <li>I am an expert in javascript</li>
          <li>I love building websites using React</li>
          <li>I learn things quickly</li>
          <li>I aspire to be a project manager</li>
          <li>Code is art</li>
          <li>Roadblocks are stepping stones</li>
        </ul>
        <p>
          My favorite hobby is building games! And I've built{" "}
          <a
            href="https://www.roblox.com/games/2057709189/Shrink-Grow-SIMULATOR?refPageId=d575da22-d877-4705-842a-eb19ce009d20"
            target="_blank"
            rel="noopener noreferrer"
          >
            experiences
          </a>{" "}
          that leave people coming back again and again. I'm passionate about
          innovative technology. I'm interested in Machine Learning and Data
          Science. I have excellent customer service and communication skills.
          As well as fluency in Spanish. I'm used to dynamic problem solving and
          solution driven development as well as being consistently recognized
          for performing under little supervision and keeping a professional
          attitude.
        </p>
        <p className="text-center">
          <Link to="/contact">Contact me</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
