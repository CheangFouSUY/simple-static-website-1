import React, { Component } from 'react';
import Portfolio from "./Portfolio";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import img1 from "../../assets/img/portfolio/cabin.png";
import img2 from "../../assets/img/portfolio/cake.png";
import img3 from "../../assets/img/portfolio/circus.png";
import img4 from "../../assets/img/portfolio/game.png";
import img5 from "../../assets/img/portfolio/safe.png";
import img6 from "../../assets/img/portfolio/submarine.png";
import img7 from "../../assets/img/avataaars.svg";
const portfolio = [
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img5},
    {image: img6}
]
class Home extends Component {
    render(){
        return (
            <div> 
                <Header 
                    title="Start Bootstrap"
                    subtitle="Web Developer - UX/UI Lead"
                    image={img7}
                />
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row justify-content-center">
                            {portfolio.map((item, i) => {
                                return (<Portfolio key={i} image={item.image} />)
                            })}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    };
}

export default Home;