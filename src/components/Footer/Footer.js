import React from 'react';
import './footer.css'
import FooterSocials from './FooterSocials';

const Footer = () => {
    return (
        <section id="footer">
            <h1>Connect with us</h1>
            <div className="container footer__body">
                <h2>Follow Us for great events</h2>
                <div className="socials">
                    <h2>Here are our socials</h2>
                    <FooterSocials />
                </div>
            </div>
        </section>
    );
};

export default Footer;