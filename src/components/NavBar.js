import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent">
      <img src="./assets/images/logo.svg" alt="logo" className="logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {["Home", "About Me", "Skills", "Projects", "Certificates", "Contact"].map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={`#${item.toLowerCase().replace(" ", "")}`}><b>{item}</b></a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
