import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import img1 from "../../assets/img/portfolio/game.png"
class About extends Component {
    render(){
        return(
            <div>
                <Header 
                    title="We are what we are"
                    subtitle="This is who we are, we are we are we are"
                    image={img1}
                />
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                        </div>
                        <div className="text-center mt-4">
                            <Link className="btn btn-xl btn-outline-light" to="https://startbootstrap.com/theme/freelancer/">
                                <i className="fas fa-download mr-2"></i>
                                Free Download!
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    };
}

export default About;