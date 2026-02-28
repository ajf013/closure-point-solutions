import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer section">
            <div className="container">
                <div className="contact-wrapper glass-panel">
                    <div className="contact-info" data-aos="fade-right">
                        <h2 className="contact-title">Ready to Transform Your <span className="gradient-text">Workforce?</span></h2>
                        <p className="contact-desc">
                            Get in touch with Closure Point Solutions today. Our team of experts is ready to help you with vendor management, recruitment, and manpower needs.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>closurepointsolutions@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 91138 11578</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Visit Us</h4>
                                    {/* <p>123 Innovation Drive, Tech City, TC 90210</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container" data-aos="fade-left">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>Send a Message</h3>

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select id="service">
                                    <option value="vendor">Vendor Management</option>
                                    <option value="recruitment">Recruitment</option>
                                    <option value="manpower">Manpower Supply</option>
                                    <option value="other">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-full submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom" data-aos="fade-up" data-aos-offset="0">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Closure Point Solutions" className="logo-image" />
                        <span>Closure Point Solutions</span>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} Closure Point Solutions. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
