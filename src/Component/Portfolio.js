import React, { Component } from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFacebook,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery_1 from "../Assets/Images/gallery/img-1.jpg";
import Gallery_2 from "../Assets/Images/gallery/img-2.jpg";
import Gallery_3 from "../Assets/Images/gallery/img-3.jpg";
import Gallery_4 from "../Assets/Images/gallery/img-4.jpg";
import Gallery_5 from "../Assets/Images/gallery/img-5.jpg";
import Gallery_6 from "../Assets/Images/gallery/img-6.jpg";

class Porfolio extends Component {
  state = {
    onfrontEnd: false,
    onbackEnd: false,
    onfullStack: false,
    onEngineering: false,
    isOpen: false,
  };

  render() {
    const allElement = (event) => {
      event.preventDefault();
      this.setState({
        onfullStack: true,
        onbackEnd: true,
        onfrontEnd: true,
        onEngineering: true,
      });
    };

    const frontEnd = (event) => {
      event.preventDefault();
      this.setState({
        onfrontEnd: true,
        onbackEnd: false,
        onfullStack: false,
        onEngineering: false,
        isOpen: true,
      });
    };

    const backEnd = (event) => {
      event.preventDefault();
      this.setState({
        onbackEnd: true,
        onfrontEnd: false,
        onfullStack: false,
        onEngineering: false,
        isOpen: true,
      });
    };

    const fullStack = (event) => {
      event.preventDefault();
      this.setState({
        onfullStack: true,
        onbackEnd: false,
        onfrontEnd: false,
        onEngineering: false,
        isOpen: true,
      });
    };

    const Engineering = (event) => {
      event.preventDefault();
      this.setState({
        onEngineering: true,
        onfullStack: false,
        onbackEnd: false,
        onfrontEnd: false,
        isOpen: true,
      });
    };

    console.log(this.state.onfrontEnd);

    return (
      <section id="portfolio" className="gallery-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title">
                  <h2>Portfolio</h2>
                </div>
                <ul>
                  <li>
                    <a
                      data-filter="*"
                      href="#"
                      className="current"
                      onClick={allElement}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Web-Design" href="#" onClick={frontEnd}>
                      Front End
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Print-Design" href="#" onClick={backEnd}>
                      Back End
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".Web-Application"
                      href="#"
                      onClick={fullStack}
                    >
                      Full Stack
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".Engineering"
                      href="#"
                      onClick={Engineering}
                    >
                      Engineering
                    </a>
                  </li>
                </ul>
              </div>

              <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                <div
                  className={
                    this.state.onfullStack
                      ? "grid active"
                      : "grid" && this.state.onfullStack
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_2} alt="" className="img img-responsive" />
                  <div className="icon">
                    <a
                      href="https://ancient-waters-57697.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed</h4>
                    </a>

                    <a
                      href="https://github.com/MCui1997/Plant-Partner"
                      target="_blank"
                    >
                      <h4>Repo</h4>
                    </a>
                  </div>
                </div>

                <div
                  className={
                    this.state.onfrontEnd
                      ? "grid active"
                      : "grid" && this.state.onfrontEnd
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_1} className="img img-responsive" alt="" />
                  <div className="icon">
                    <a
                      href="https://mcui1997.github.io/Fish-Guide-Friend/"
                      target="_blank"
                    >
                      <h4>Deployed</h4>
                    </a>
                    <a
                      href="https://github.com/MCui1997/Fish-Guide-Friend"
                      target="_blank"
                    >
                      <h4>Repo</h4>
                    </a>
                  </div>
                </div>

                <div
                  className={
                    this.state.onfrontEnd
                      ? "grid active"
                      : "grid" && this.state.onfrontEnd
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_6} alt="" className="img img-responsive" />
                  <div className="icon">
                    <a
                      href="https://mcui1997.github.io/Charity-Studio-Template/"
                      target="_blank"
                    >
                      <h4>Deployed</h4>
                    </a>

                    <a
                      href="https://github.com/MCui1997/Charity-Studio-Template"
                      target="_blank"
                    >
                      <h4>Repo</h4>
                    </a>
                  </div>
                </div>

                <div
                  className={
                    this.state.onbackEnd
                      ? "grid active"
                      : "grid" && this.state.onbackEnd
                      ? "grid active"
                      : "grid" && this.state.onfullStack
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_5} alt="" className="img img-responsive" />
                  <div className="icon">
                    <a
                      href="https://pure-badlands-52253.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed</h4>
                    </a>

                    <a
                      href="https://github.com/MCui1997/MERN-Tube"
                      target="_blank"
                    >
                      <h4>Repo</h4>
                    </a>
                  </div>
                </div>

                <div
                  className={
                    this.state.onfullStack
                      ? "grid active"
                      : "grid" && this.state.onfullStack
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_3} alt="" className="img img-responsive" />
                  <div className="icon">
                    <a
                      href="https://fatidique-moliere-85099.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed</h4>
                    </a>

                    <a
                      href="https://github.com/MCui1997/Note-Taker"
                      target="_blank"
                    >
                      <h4>Repo</h4>
                    </a>
                  </div>
                </div>

                <div
                  className={
                    this.state.onEngineering
                      ? "grid active"
                      : "grid" && this.state.onEngineering
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_4} alt="" className="img img-responsive" />
                  <div className="icon">
                    <a
                      href="https://github.com/MCui1997/EMG-Claw/blob/master/index.c"
                      target="_blank"
                    >
                      <h4>Deployed</h4>
                    </a>

                    <a
                      href="https://drive.google.com/file/d/1es_rEDWa2_SXev56h4hMHBwC8zMZt6AW/view"
                      target="_blank"
                    >
                      <h4>Repo</h4>
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

export default Porfolio;
