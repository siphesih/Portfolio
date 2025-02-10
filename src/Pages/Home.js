import React from "react";
import { FaLaptopCode, FaDatabase, FaServer } from "react-icons/fa"; // Importing the icons
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="p-4 p-md-5 mb-4">
          <div className="">
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
        
        {/* New section for columns with icons */}
        <div className="px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Columns with icons</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="">
                <FaLaptopCode size={40} /> {/* Web Development Icon */}
              </div>
              <h2>Web Development</h2>
              <p>
                I specialize in building responsive and user-friendly web applications with React and Node.js, creating intuitive user interfaces and seamless experiences.
              </p>
              <a href="#web-development" className="icon-link">
                Learn More
                <FaLaptopCode size={16} /> {/* Chevron Icon */}
              </a>
            </div>

            <div className="feature col">
              <div className="">
                <FaDatabase size={40} /> {/* Database Icon */}
              </div>
              <h2>Database Management</h2>
              <p>
                I have experience working with MySQL and other databases to build reliable backends that store, retrieve, and manipulate data for dynamic web applications.
              </p>
              <a href="#database-management" className="icon-link">
                Learn More
                <FaDatabase size={16} /> {/* Chevron Icon */}
              </a>
            </div>

            <div className="feature col">
              <div className="">
                <FaServer size={40} /> {/* Backend Development Icon */}
              </div>
              <h2>Backend Development</h2>
              <p>
                With expertise in Node.js, I build robust and scalable backends that ensure fast and secure data processing, communication, and integration.
              </p>
              <a href="#backend-development" className="icon-link">
                Learn More
                <FaServer size={16} /> {/* Chevron Icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
