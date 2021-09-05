import React from 'react'

import {
    AiOutlineRocket,
    AiOutlineSketch,
    AiOutlineRise,
    AiOutlineSend,
    AiOutlineMail,
    AiOutlineBlock,
    AiOutlineNotification,
    AiOutlineFileSearch,
    AiOutlineTeam,
    AiOutlineSync,
    AiOutlineFundView,
    AiOutlineProject,
  } from "react-icons/ai";

  
export default function Price() {
    return (
        <div className="homeprice">
           <div className="page-title-area">
        <h1>Price</h1>
      </div>
        <div className="container">
          <div className="">
            <h6>PRICING</h6>
            <h4>Our Flexible Pricing Plan</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="homeprice-box">
                <AiOutlineSend className="icon1" />
                <div className="homeprice-header">
                  <h3> Starter Plan</h3>
                </div>
                <div className="homeprice-list">
                  <ul>
                    <li>10GB Bandwidth Internet</li>
                    <li>Business & Financ Analysing</li>
                    <li>25 Social Media Reviews</li>
                    <li>Customer Managemet</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="homeprice-price">
                  $20.99
                  <span>Per Month</span>
                </div>
                <button className="btn learn-more-btn">Book Now</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="homeprice-box">
                <AiOutlineBlock className="icon2" />
                <div className="homeprice-header">
                  <h3> Advance Plan</h3>
                </div>
                <div className="homeprice-list">
                  <ul>
                    <li>30GB Bandwidth Internet</li>
                    <li>Business & Financ Analysing</li>
                    <li>30 Social Media Reviews</li>
                    <li>Customer Managemet</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="homeprice-price">
                  $25.99
                  <span>Per Month</span>
                </div>
                <button className="btn learn-more-btn">Book Now</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="homeprice-box">
                <AiOutlineSketch className="icon3" />
                <div className="homeprice-header">
                  <h3> Premium Plan</h3>
                </div>
                <div className="homeprice-list">
                  <ul>
                    <li>50GB Bandwidth Internet</li>
                    <li>Business & Financ Analysing</li>
                    <li>35 Social Media Reviews</li>
                    <li>Customer Managemet</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="homeprice-price">
                  $30.99
                  <span>Per Month</span>
                </div>
                <button className="btn learn-more-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}


