import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home_1 from "../Assets/Images/home/img-1.jpg";
import Home_2 from "../Assets/Images/home/img-2.jpg";
import Home_3 from "../Assets/Images/home/img-3.jpg";
import Home_4 from "../Assets/Images/home/img-4.jpg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <header id="header" className="site-header header-style-1">
        <nav className="navigation navbar navbar-default">
          <div className="container-fluid">
            <div
              id="navbar"
              className={
                this.state.isOpen
                  ? "navbar-collapse navigation-holder active"
                  : "navbar-collapse navigation-holder"
              }
            >
              <button
                className="close-navbar"
                onClick={() => this.setState({ isOpen: false })}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button
                className="close-navbar-2"
                onClick={() => this.setState({ isOpen: false })}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <ul className="nav navbar-nav">
                <li className="home">
                  <a href="#home">
                    <img src={Home_1} alt="" />
                  </a>
                </li>
                <li className="about">
                  <a href="#about">
                    <img src={Home_2} alt="" />
                  </a>
                </li>
                <li className="skills">
                  <a href="#skills">
                    <img src={Home_3} alt="" />
                  </a>
                </li>
                <li className="portfolio">
                  <a href="#portfolio">
                    <img src={Home_4} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-open-btn-holder">
              <button
                className="menu-open-btn"
                onClick={() => this.setState({ isOpen: true })}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
