import React from "react";
import "./Home.css";
import image from "../assets/IMG_0541.JPEG";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-section-bg">
        <div className="container">
          <div className="row align-items-center p-4 p-md-5 mb-4">
            {/* Text Section */}
            <div className="col-md-6 rubikSprayPaint">
              <h1>
                Hi, <br /> I'm Maluleki Mathebula
              </h1>
              <p>
                A passionate Full Stack Developer <br />
                into building intuitive web applications <br /> that enhance user experience
                and solve real-world problems.
              </p>
              <p className="mb-0">
                <a href="#projects">Explore My Work →</a>
              </p>
            </div>
            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img src={image} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Programming Frameworks and Languages Section */}
      <div className="home-section">
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pacifico">Programming Frameworks and Languages</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <img src="/icons/icons8-javascript-64.png" alt="javascript" />
            </div>
            <div className="feature col">
              <img src="/icons/icons8-c-48.png" alt="C Programming" />
            </div>
            <div className="feature col">
              <img src="/icons/icons8-.net-framework-48 (1).png" alt=".NET Framework" />
            </div>
            <div className="feature col">
              <img src="/icons/react.svg" alt="React" />
            </div>
            <div className="feature col">
              <img src="/icons/github.png" alt="GitHub" />
            </div>
            <div className="feature col">
              <img src="/icons/icons8-angularjs-64.png" alt="AngularJS" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects-section py-5">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="row">
            {/* Project 1 */}
            <div className="col-md-4 mb-4">
              <div className="project-card">
                <img src="/assets/project1-image.jpg" alt="Project 1" className="project-img" />
                <h4>Project Name 1</h4>
                <p>
                  A brief description of this project, including the technologies used and its purpose.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="col-md-4 mb-4">
              <div className="project-card">
                <img src="/assets/project2-image.jpg" alt="Project 2" className="project-img" />
                <h4>Project Name 2</h4>
                <p>
                  A brief description of this project, highlighting what it solves and the tech stack used.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="col-md-4 mb-4">
              <div className="project-card">
                <img src="/assets/project3-image.jpg" alt="Project 3" className="project-img" />
                <h4>Project Name 3</h4>
                <p>
                  A brief description of this project, with emphasis on its impact and technology used.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
