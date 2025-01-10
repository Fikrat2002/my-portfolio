import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center my-4">
          <h1 className="section-title">Skills</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4 text-center">
          <h2 className="section-subtitle">Tools</h2>
          <div className="tree" id="tree1">
            <ul>
              <li>
                <span className="node"><i className="fab fa-vscode"></i> VScode</span>
                <ul>
                  <li>
                    <span className="node"><i className="fab fa-github"></i> GitHub</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 mb-4 text-center">
          <h2 className="section-subtitle">Languages</h2>
          <div className="tree" id="tree2">
            <ul>
              <li>
                <span className="node"><i className="fab fa-html5"></i> HTML5</span>
                <ul>
                  <li>
                    <span className="node"><i className="fab fa-css3-alt"></i> CSS3</span>
                    <ul>
                      <li>
                        <span className="node"><i className="fab fa-js"></i> JavaScript</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
