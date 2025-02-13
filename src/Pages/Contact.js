import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6">
          <h2>
            <span className="text-primary">Connect</span> with me today!
          </h2>
          <p>
            Contact me today to learn more about how I can help you with your
          </p>
          <div className="d-flex gap-3 mt-3">
            <p><i className="fas fa-phone"></i> +27 78 328 2222</p>
            <p><i className="fas fa-envelope"></i> maluleki01@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> See Our Locations</p>
          </div>
          <div className="mt-4 p-3 bg-light rounded">
            <h5>Want to Join Our Talented Team?</h5>
            <a href="#" className="btn btn-primary mt-2">Visit Our Job Board</a>
          </div>
        </div>

        {/* Right Section - Google Forms Link */}
        <div className="col-md-6">
          <div className="p-4 bg-dark text-white rounded text-center">
            <h4>Contact Us</h4>
            <p>Fill out our Google Form, and we’ll get back to you as soon as possible.</p>
            <a 
              href="https://forms.google.com/your-form-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary mt-3"
            >
              Go to Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
