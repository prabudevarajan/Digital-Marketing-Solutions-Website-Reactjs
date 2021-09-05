import React from "react";
import aboutus from "../../assets/Images/about-us.jpg";
import { AboutPageText } from "./data";
export default function Aboutus() {
  return (
    <div className="abouthome">
      <div className="page-title-area">
        <h1>About Us</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 pt-5">
            <img src={aboutus} className="img-fluid mt-5 pt-5" alt="aboutus" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="abouthome">
              <h6 className="mt-3">{AboutPageText.about_subheader}</h6>
              <h4 className="mt-3">{AboutPageText.about_header}</h4>
              <p className="mt-3 text-justify">{AboutPageText.about_des1}</p>
              <p className="text-justify">{AboutPageText.about_des2}</p>

              <button className="btn readmore mt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
