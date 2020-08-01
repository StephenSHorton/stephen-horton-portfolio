import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar navbar-expand-lg fixed-top navbar-light bg-light"
      style={{
        boxShadow: "0px 0px 20px 3px rgb(0,0,0,.1)",
      }}
    >
      <Link className="navbar-brand" to="/">
        SH
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Me <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
