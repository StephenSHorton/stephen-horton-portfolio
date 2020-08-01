import React from "react";

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
    </div>
  );
};

export default Home;
