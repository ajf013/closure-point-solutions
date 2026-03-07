import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted or dismissed the cookie policy
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay so it slides up after the initial page load
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDismiss = () => {
        localStorage.setItem('cookieConsent', 'dismissed');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <div className="cookie-text">
                    <strong>We use cookies! 🍪</strong>
                    <p>
                        Closure Point Solutions uses cookies to ensure you get the best experience on our website.
                        By continuing to use this site, you consent to our use of cookies as detailed in our{' '}
                        <Link to="/cookie-policy" className="cookie-link" onClick={() => setIsVisible(false)}>
                            Cookie Policy
                        </Link>.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button onClick={handleAccept} className="btn btn-primary btn-sm cookie-accept">
                        Accept All
                    </button>
                    <button onClick={handleDismiss} className="cookie-close" aria-label="Close cookie banner">
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
