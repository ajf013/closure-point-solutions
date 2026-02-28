import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        const form = e.target;
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => setStatus('success'))
            .catch((error) => setStatus('error'));
    };

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
                        {status === 'success' ? (
                            <div className="contact-form" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <CheckCircle size={48} color="var(--accent)" />
                                </div>
                                <h3>Message Sent!</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Thank you for reaching out. We will get back to you shortly at closurepointsolutions@gmail.com.</p>
                                <button onClick={() => setStatus('')} className="btn btn-outline" style={{ border: '1px solid var(--text-secondary)' }}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                                <input type="hidden" name="form-name" value="contact" />
                                <h3>Send a Message</h3>

                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Needed</label>
                                    <select id="service" name="service" required>
                                        <option value="vendor">Vendor Management</option>
                                        <option value="recruitment">Recruitment</option>
                                        <option value="manpower">Manpower Supply</option>
                                        <option value="other">Other / General Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-full submit-btn" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                                </button>
                                {status === 'error' && <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem' }}>There was an error sending your message. Please try again.</p>}
                            </form>
                        )}
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
