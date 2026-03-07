import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mdaljjbg", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus(''), 8000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <footer id="contact" className="footer section">
            <div className="container">
                <div className="contact-wrapper glass-panel">
                    <div className="contact-info" data-aos="fade-right">
                        <h3 className="contact-title">Ready to Transform Your <span className="gradient-text">Workforce?</span></h3>
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
                                    <p><a href="mailto:closurepointsolutions@gmail.com" className="contact-link">closurepointsolutions@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p><a href="tel:+919113811578" className="contact-link">+91 91138 11578</a></p>
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
                        <form className="contact-form" onSubmit={handleSubmit}>
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

                            {status === 'success' && (
                                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857' }}>
                                    <CheckCircle size={20} />
                                    <span>Message successfully sent!</span>
                                </div>
                            )}
                            {status === 'error' && <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem' }}>There was an error sending your message. Please try again.</p>}
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
                        <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                        <Link to="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
                        <Link to="/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</Link>
                        <Link to="/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
