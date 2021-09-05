import React from 'react'
import "./style.css";
import  team1  from "../../assets/Images/team_1.jpg";
import  team2  from "../../assets/Images/team_2.jpg";
import  team3  from "../../assets/Images/team_3.jpg";
import  team4  from "../../assets/Images/team_4.jpg";
import  team5  from "../../assets/Images/team_5.jpg";
import  team6  from "../../assets/Images/team_6.jpg";
export default function Team() {
    return (
        <div className="hometeam">
          <div className="page-title-area">
        <h1>Our Team</h1>
      </div>
          <div className="container">
            <div className="row pt-5 mt-5">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Acheive Your Business Goal</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <button className="btn learn-more-btn">View All</button>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={team1} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">MARTIN SMITH</h3>
                      <span class="post">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team2} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Olivia</h3>
                      <span class="post">Marketing Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team3} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">FRANKLIN HARBET</h3>
                      <span class="post">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team4} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Miranda joy</h3>
                      <span class="post">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team5} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">LINDA ANDERSON</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team6} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">KRISTIANA</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    )
}


