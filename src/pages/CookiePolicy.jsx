import React, { useEffect } from 'react';
import './Legal.css';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container legal-container">
                <div className="legal-header">
                    <h1 className="legal-title">Cookie Policy</h1>
                    <p className="legal-date">Last Updated: March 2026</p>
                </div>

                <div className="legal-content">
                    <p>
                        Closure Point Solutions strives to ensure that your experience on our website is as informative and relevant as possible. To achieve this, we use cookies to collect information regarding your website navigation.
                    </p>

                    <h3>1. What Are Cookies?</h3>
                    <p>
                        Cookies are small text files placed in the browser directory of your computer, smartphone, or other electronic devices when you visit our website. They help the website remember your actions and preferences over time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                    </p>

                    <h3>2. How We Use Cookies</h3>
                    <p>
                        We use cookies for several purposes, including:
                    </p>
                    <ul>
                        <li><strong>Strictly Necessary Cookies:</strong> Essential for the core functionality of the website, such as security, network management, and accessibility.</li>
                        <li><strong>Performance and Analytical Cookies:</strong> Useful for compiling aggregate usage statistics and analyzing how visitors use our site, allowing us to improve performance.</li>
                        <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website and remember your preferences.</li>
                    </ul>

                    <h3>3. Third-Party Cookies</h3>
                    <p>
                        In some instances, we may use trusted third-party services (such as JivoChat or Google Analytics) that also place cookies on your device to analyze usage patterns and enable integrated communication widgets. These third-party cookies are governed by the respective privacy policies of these providers.
                    </p>

                    <h3>4. Managing Your Cookie Preferences</h3>
                    <p>
                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, but your access to some functionality and areas of our website might be restricted or display incorrectly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
