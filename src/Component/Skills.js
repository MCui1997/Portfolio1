import React, { Component } from "react";
import ReactDOM from "react-dom";
import skillsImg_1 from "../Assets/Images/1.jpg";
import skillsImg_2 from "../Assets/Images/2.jpg";
import skillsImg_3 from "../Assets/Images/3.jpg";
import skillsImg_4 from "../Assets/Images/4.jpg";
import skillsImg_5 from "../Assets/Images/5.jpg";
import skillsImg_6 from "../Assets/Images/6.jpg";

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="hx-skills-area ptb-100-70">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 grid col-12">
              <div className="hx-skills-item">
                <div className="hx-skills-single">
                  <div className="skills-img">
                    <img src={skillsImg_1} />
                  </div>
                  <div className="hx-skills-content">
                    <h3>HTML5, CSS, JavaScript</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 grid col-12">
              <div className="hx-skills-item">
                <div className="hx-skills-single">
                  <div className="skills-img">
                    <img src={skillsImg_2} />
                  </div>
                  <div className="hx-skills-content">
                    <h3>React.js</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 grid col-12">
              <div className="hx-skills-item">
                <div className="hx-skills-single">
                  <div className="skills-img">
                    <img src={skillsImg_3} />
                  </div>
                  <div className="hx-skills-content">
                    <h3>Node.js</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 grid col-12">
              <div className="hx-skills-item">
                <div className="hx-skills-single">
                  <div className="skills-img">
                    <img src={skillsImg_4} />
                  </div>
                  <div className="hx-skills-content">
                    <h3>MySQL</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 grid col-12">
              <div className="hx-skills-item">
                <div className="hx-skills-single">
                  <div className="skills-img">
                    <img src={skillsImg_5} />
                  </div>
                  <div className="hx-skills-content">
                    <h3>MongoDB</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 grid col-12">
              <div className="hx-skills-item">
                <div className="hx-skills-single">
                  <div className="skills-img">
                    <img src={skillsImg_6} />
                  </div>
                  <div className="hx-skills-content">
                    <h3>Other Technologies</h3>
                    <br></br>
                    <p>Xcode</p>
                    <p>MATLAB</p>
                    <p>Python</p>
                    <p>Arduino IDE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
