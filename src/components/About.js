import React from "react";

const About = () => {
  return (
    <section id="about" className="container my-5">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="intro">Who am I?</p>
        <p className="bio">
          I am <span className="highlight-name">Khatira Fikrat</span>, a junior
          developer and student at the American University of Afghanistan...
        </p>
      </div>
      <div className="about-image">
        <img src="./assets/images/pic1.svg" alt="Khatira image" />
      </div>
    </section>
  );
};

export default About;
