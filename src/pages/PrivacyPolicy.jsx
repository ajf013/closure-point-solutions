import React, { useEffect } from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container legal-container">
                <div className="legal-header">
                    <h1 className="legal-title">Privacy Policy</h1>
                    <p className="legal-date">Last Updated: March 2026</p>
                </div>

                <div className="legal-content">
                    <p>
                        At Closure Point Solutions, we are committed to protecting the privacy and security of our clients, candidates, and website visitors. This Privacy Policy outlines how we collect, utilize, and disclose information when you interact with our website and services.
                    </p>

                    <h3>1. Information Collection</h3>
                    <p>
                        We may collect personal information such as your name, email address, phone number, professional background, and other relevant details when you interact with our website, apply for a position via our recruitment services, or contact us for vendor management inquiries. Additionally, we may automatically collect standard technical information like your IP address, browser type, and operating system.
                    </p>

                    <h3>2. Use of Information</h3>
                    <p>
                        The information we collect is used to:
                    </p>
                    <ul>
                        <li>Understand your needs and provide better services.</li>
                        <li>Process job applications and facilitate recruitment.</li>
                        <li>Manage and vet vendor onboarding processes.</li>
                        <li>Send important updates, announcements, or service changes.</li>
                        <li>Compile aggregate usage statistics to improve our website experience.</li>
                    </ul>

                    <h3>3. Information Sharing</h3>
                    <p>
                        Closure Point Solutions respects your privacy. We may share aggregate, non-personally identifiable information with trusted partners. However, your personal information will not be disclosed, sold, or transferred to third parties without your explicit consent, except when strictly necessary to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.
                    </p>

                    <h3>4. Data Security</h3>
                    <p>
                        We implement a variety of technical and structural security measures designed to protect our website and the personal information we hold from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no transmission of data over the internet can be guaranteed to be 100% secure.
                    </p>

                    <h3>5. Changes to This Policy</h3>
                    <p>
                        We reserve the right to modify or change this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
