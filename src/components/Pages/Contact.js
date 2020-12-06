import React, { Component } from 'react';
import InputField from "./InputField";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import img1 from "../../assets/img/portfolio/submarine.png"

const inputfields = [
    {name:"name", label:"Name", type:"text", placeholder:"Enter Name: "},
    {name:"email", label:"Email", type:"email", placeholder:"Enter Email Address: "},
    {name:"phone", label:"Phone Number", type:"tel", placeholder:"Enter Phone Number: "},
    {name:"message", label:"Message", type:"text", placeholder:"Message: "},
]
class Contact extends Component {
    render(){
        return(
            <div>
            <Header 
                title="Contact Info"
                subtitle="Please provide us your info below"
                image={img1}
            />
                <section className="page-section" id="contact">
                    <div className="container">
                        
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                        
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                
                                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                    {inputfields.map((item, i) => {
                                        return (<InputField key={i} {...item} />)
                                    })}
                                    <br />
                                    <div id="success"></div>
                                    <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    };
}

export default Contact;