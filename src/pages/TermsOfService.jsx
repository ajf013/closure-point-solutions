import React, { useEffect } from 'react';
import './Legal.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container legal-container">
                <div className="legal-header">
                    <h1 className="legal-title">Terms of Service</h1>
                    <p className="legal-date">Last Updated: March 2026</p>
                </div>

                <div className="legal-content">
                    <p>
                        Welcome to Closure Point Solutions. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our website.
                    </p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you and Closure Point Solutions concerning your access to and use of our website and related services, including Manpower Supply, Vendor Management, and Recruitment.
                    </p>

                    <h3>2. Use of Services</h3>
                    <p>
                        You agree to use our website and services only for lawful purposes and in accordance with these Terms. You are prohibited from:
                    </p>
                    <ul>
                        <li>Using the site in any way that violates applicable federal, state, or international law.</li>
                        <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the site.</li>
                        <li>Attempting to interfere with the proper working of the site, including introducing viruses or other malicious material.</li>
                    </ul>

                    <h3>3. Intellectual Property</h3>
                    <p>
                        The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by Closure Point Solutions or its licensors. You may not reproduce, distribute, or create derivative works from this content without express written permission.
                    </p>

                    <h3>4. Disclaimer of Warranties</h3>
                    <p>
                        Our website and services are provided on an "as-is" and "as-available" basis. Closure Point Solutions makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, or materials included.
                    </p>

                    <h3>5. Limitation of Liability</h3>
                    <p>
                        In no event shall Closure Point Solutions, its directors, employees, or agents be liable for any indirect, consequential, or incidental damages arising out of or in connection with your use of the website or our services.
                    </p>

                    <h3>6. Governing Law</h3>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Closure Point Solutions is registered, without regard to its conflict of law provisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
