import React, { useEffect } from 'react';
import './Legal.css';

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container legal-container">
                <div className="legal-header">
                    <h1 className="legal-title">Disclaimer</h1>
                    <p className="legal-date">Last Updated: March 2026</p>
                </div>

                <div className="legal-content">
                    <p>
                        The information contained on the Closure Point Solutions website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </p>

                    <h3>1. Professional Advice</h3>
                    <p>
                        The content provided on this website does not constitute financial, legal, or other professional advice. Any reliance you place on such information is therefore strictly at your own risk. You should consult with appropriate professionals before taking any actions based upon the information on this website.
                    </p>

                    <h3>2. External Links</h3>
                    <p>
                        Through this website, you are able to link to other websites which are not under the control of Closure Point Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                    </p>

                    <h3>3. Errors and Omissions</h3>
                    <p>
                        We take every reasonable step to ensure that the information on our website is accurate and complete. However, the site may occasionally contain typographical errors, inaccuracies, or omissions relating to service descriptions or availability. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information without prior notice.
                    </p>

                    <h3>4. Service Availability</h3>
                    <p>
                        Every effort is made to keep the website up and running smoothly. However, Closure Point Solutions takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
