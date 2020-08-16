import React, { Component } from 'react';
import blogImg_1 from '../Assets/Images/blog/1.jpg';
import blogImg_2 from '../Assets/Images/blog/2.jpg';
import blogImg_3 from '../Assets/Images/blog/3.jpg';
import blogAuthor from '../Assets/Images/blog/7.jpg';

class Blog extends Component {
    render() {
        return (
            <section id="blog" className="blog-section section-padding">
                <div className="container">
                    <div className="col-l2">
                        <div className="section-title section-title2 text-center">
                            <span>From my Blog</span>
                            <h2>Latest News</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-grids clearfix">
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={blogImg_1}/>
                                    </div>
                                    <div className="details">
                                        <h3><a href="#">Everything is easy when you think it easy</a></h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={blogAuthor}/>
                                                By <a href="#">Lily Anne</a>
                                            </li>
                                            <li>Octobor 12,2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={blogImg_2}/>
                                    </div>
                                    <div className="details">
                                        <h3><a href="#">Everything is easy when you think it easy</a></h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={blogAuthor}/>
                                                By <a href="#">Lily Anne</a>
                                            </li>
                                            <li>Octobor 12,2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={blogImg_3}/>
                                    </div>
                                    <div className="details">
                                        <h3><a href="#">Everything is easy when you think it easy</a></h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={blogAuthor}/>
                                                By <a href="#">Lily Anne</a>
                                            </li>
                                            <li>Octobor 12,2019</li>
                                        </ul>
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

export default Blog;