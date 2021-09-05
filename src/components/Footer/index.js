import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      {/* header 7 newletter */}
      <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <form class="newsletter-form">
            <input
              type="text"
              class="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required=""
            />
            <button type="submit" class="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Aboutus</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Aboutus">About Us</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Price">Price</a></li>
                
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li><a href="/">Career</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/Contactus">Contact Us</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>Chennai, Tamilnadu, India</li>
                <li>+91 9874563210</li>
                <li>contact@gmail.com</li>
                <li>+3214569870</li>
              </ul>
            </div>
          </div>
        </div>
        <hr/>
        <div className="footer-end">
<h6 className="text-center">Design & Developed by Prabudevarajan</h6>
        </div>
      </div>
    </div>
  );
}
