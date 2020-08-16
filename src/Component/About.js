import React, { Component } from "react";
import aboutImg from "../Assets/Images/about.png";

class About extends Component {
  render() {
    return (
      <div className="hx-about-style-1" id="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
              <div className="hx-about-content">
                <div className="hx-site-title">
                  <h2>About Me</h2>
                </div>
                <p>
                  Welcome to my Portfolio! I am a Software Engineer with a
                  Bioengineering background. I recently graduated from UT Austin
                  with a Certificate in Full Stack Web Development that
                  developed new skills such as React.js, Node.js, MySQL and
                  more.
                </p>

                <p>
                  Outside of software, some of my favorite hobbies include
                  playing chess, poker, badminton, and binge watching just about
                  anything. I love the outdoors as well and am always excited to
                  find a new fishing spot here in Austin.
                </p>

                <p>
                  I am excited to utilize my skills in the future as part of a
                  fast-paced, quality-driven team. Please email me with any
                  questions and offers. I can't wait to start our project
                  together!
                </p>

                <div className="btns">
                  <a
                    href="https://drive.google.com/file/d/1190UGB483UFE_X3OeSRpfTWfe5C8OVH3/view?usp=sharing"
                    target="_blank"
                    className="theme-btn"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="hx-about-img">
                <img src={aboutImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
