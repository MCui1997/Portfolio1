import React, { Component } from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slides from "../Assets/Images/slide-2.jpg";

class Banner extends Component {
  render() {
    return (
      <section id="home" className="hero hero-slider-wrapper hero-style-1">
        <div className="hero-slider">
          <div className="slide">
            <div className="slider-image">
              <img src={Slides} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col col-md-8 col-sm-12 slide-caption">
                  <div className="slide-subtitle">
                    <h4>Austin Based Software Engineer</h4>
                  </div>
                  <div className="slide-title">
                    <h2>Michael Cui</h2>
                  </div>
                  <div className="btns">
                    <a
                      href="mailto:cuimichael500@gmail.com"
                      className="theme-btn go-contact-area"
                      target="_blank"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
