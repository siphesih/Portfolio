import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6">
          <h2>
            <span className="text-primary">Connect</span> with Our Team of Experts
          </h2>
          <p>
            Contact our team of excellence-driven experts today to bring your project to life.
          </p>
          <div className="d-flex gap-3 mt-3">
            <p><i className="fas fa-phone"></i> 713.953.5200</p>
            <p><i className="fas fa-envelope"></i> lja@lja.com</p>
            <p><i className="fas fa-map-marker-alt"></i> See Our Locations</p>
          </div>
          <div className="mt-4 p-3 bg-light rounded">
            <h5>Want to Join Our Talented Team?</h5>
            <a href="#" className="btn btn-primary mt-2">Visit Our Job Board</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-6">
          <div className="p-4 bg-dark text-white rounded">
            <h4>Contact Us</h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Location</label>
                  <input type="text" className="form-control" placeholder="Location" />
                </div>
              </div>
              <div className="mb-3">
                <label>What Expertise You're Interested In</label>
                <select className="form-control">
                  <option>Select</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Tell Us About Your Project</label>
                <textarea className="form-control" rows="4" placeholder="Leave your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
