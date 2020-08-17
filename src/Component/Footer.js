import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
  faLinkedin,
  faMailchimp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Assets/Images/logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-image">
                <a href="index.html">
                  <img src={Logo} />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-menu">
                <ul className="d-flex ">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/michaelcui1997/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/MCui1997" target="_blank">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/michael.cui.507"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mcui1997/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-sub">
                <p>
                  <i className="fa fa-copyright"></i>© 2020
                  <span> Michael Cui</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
