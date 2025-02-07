import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"; // Make sure the custom CSS is imported

const Navbar = () => {
  const handleClick = (link) => {
    // Handle navigation logic here, like using React Router's useHistory or window.location
    console.log(`Navigating to ${link}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-brand" onClick={() => handleClick('/')}>Navbar</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page" onClick={() => handleClick('/')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleClick('/link')}>Link</button>
            </li>
            <li className="nav-item dropdown">
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => handleClick('/action')}>Action</button></li>
                <li><button className="dropdown-item" onClick={() => handleClick('/another-action')}>Another action</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={() => handleClick('/something-else')}>Something else here</button></li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="nav-link disabled" aria-disabled="true">Disabled</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
