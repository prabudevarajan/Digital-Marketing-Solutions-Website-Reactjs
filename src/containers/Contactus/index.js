import React from "react";
import "./data";
import "./style.css";
import contactimg from '../../assets/Images/cntact-img.jpg';
import { AiOutlineAim,AiOutlineComment,AiOutlineFieldTime } from "react-icons/ai";

export default function Contactus() {
  return (
    <div className="contact">
       <div className="page-title-area">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon">
                  <AiOutlineAim/>
              </div>
              <h3>Our Address</h3>
              <p>Chennai, Tamilnadu, <br/> India</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon">
                  <AiOutlineComment/>
              </div>
              <h3>Contact</h3>
              <p>
                +91 987486540<br /> 04443214560
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon">
                  <AiOutlineFieldTime/>
              </div>
              <h3>Hours of Operation</h3>
              <p>
                Monday - Friday: 10:00 - 19:00 <br /> Sunday & Saturday: 10:30 - 15:00
              </p>
            </div>
          </div>
        </div>

        <div className="contact-header">
          <h6>GET IN TOUCH</h6>
          <h4>Ready to Get Started?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className="row mt-2 pt-2">
          <div className="col-lg-6 col-md-6 col-12 mt-5">
            <img src={contactimg} className="img-fluid" alt="contact" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div class="contact-form">
              <form id="contactForm">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="form-control"
                        spellcheck="false"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12">
                    <button type="submit" class="btn readmore">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675417118!2d80.06892448836716!3d13.047487785642284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1618387834124!5m2!1sen!2sin"
            width="100%"
            height="550"
            loading="lazy" className="map-style p-0 m-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
