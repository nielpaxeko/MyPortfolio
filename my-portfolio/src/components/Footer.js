import React from 'react';

export const Footer = () => {
    return (
        <section id='footer'>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>

                <ul className="menu">
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
                <p className="copyright">© 2024 Edgar Pacheco</p>
            </footer>
        </section>

    );
};

export default Footer;