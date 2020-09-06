import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-row">
            <div>
              <h1>Learning Verified</h1>
              <p>New York Tel Aviv London</p>
            </div>
            <ul className="footer-contact">
              <li>Contact Us</li>
              <li>
                <i className="fas fa-envelope"></i> +63 917 840 8989
              </li>
              <li>
                <i className="fas fa-phone"></i> LearningVerified@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
