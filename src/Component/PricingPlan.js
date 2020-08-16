import React, { Component } from 'react';

class PricingPlan extends Component {
    render() {
        return (
            <div className="pricing-area ptb-100-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span>I Give You The Best</span>
                        <h2>my Pricing Plan</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-l2 col-md-4 col-sm-6 grid p-out">
                                    <div className="price-item">
                                        <div className="pricing-header">
                                            <h3>Basic</h3>
                                        </div>
                                        <div className="pricing-table">
                                            <div className="price-sub-header pricing-header-c">
                                                <h4><span>$</span>30</h4>
                                                <h5>Per Month</h5>
                                            </div>
                                            <ul>
                                                <li>Web Design</li>
                                                <li>Web Development</li>
                                                <li>Responsive Design</li>
                                                <li>Creative Design</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <div className="theme-btn"><a href="#">Order Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-l2 col-md-4 col-sm-6  grid p-out">
                                    <div className="price-item price-item-2">
                                        <div className="pricing-header">
                                            <h3>Standard</h3>
                                        </div>
                                        <div className="pricing-table pricing-table-2">
                                            <div className="price-sub-header">
                                                <h4><span>$</span>50</h4>
                                                <h5>Per Month</h5>
                                            </div>
                                            <ul>
                                                <li>Web Design</li>
                                                <li>Web Development</li>
                                                <li>Responsive Design</li>
                                                <li>Creative Design</li>
                                            </ul>
                                            <div className="pricing-footer pricing-footer-2">
                                                <div className="theme-btn"><a href="#">Order Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-l2 col-md-4 col-sm-6 grid  p-out p-out-t">
                                    <div className="price-item price-item-3">
                                        <div className="pricing-header">
                                            <h3>Premium</h3>
                                        </div>
                                        <div className="pricing-table">
                                            <div className="price-sub-header pricing-header-b">
                                                <h4><span>$</span>50</h4>
                                                <h5>Per Month</h5>
                                            </div>
                                            <ul>
                                                <li>Web Design</li>
                                                <li>Web Development</li>
                                                <li>Responsive Design</li>
                                                <li>Creative Design</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <div className="theme-btn"><a href="#">Order Now</a></div>
                                            </div>
                                        </div>
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

export default PricingPlan;