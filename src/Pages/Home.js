import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-section-bg"> {/* Add a specific class for the background */}
        <div className="container">
          <div className="p-4 p-md-5 mb-4">
            <div className="rubikSprayPaint">
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
          </div>
        </div>
      </div>
      
      {/* New section for columns with icons */}
   {/* New section for columns with icons */}
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
            <img src="/icons/react.svg" alt=".NET Framework" />
          </div>
          <div className="feature col">
            <img src="/icons/github.png" alt=".NET Framework" />
          </div>
          <div className="feature col">
            <img src="/icons/icons8-angularjs-64.png" alt=".NET Framework" />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Home;
