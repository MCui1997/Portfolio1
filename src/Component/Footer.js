import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                    <img src={Logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faPinterestP} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>    
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright - 2020<span> Developed by AutWorks</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;