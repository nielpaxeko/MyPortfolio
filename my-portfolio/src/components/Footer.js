import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <section id='footer'>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted p-5">
                <div className="container text-center text-md-start">
                    <div className="row footer-row">
                        <div className="col-md-3 mb-4 footer-box">
                            <h6 className="text-uppercase fw-bold mb-3 red-text">
                                My Projects
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Rover</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">VayKay</a>
                            </p>
                            <p>
                                <a href="https://globetrotter-pacheco.vercel.app" className="text-reset">Globetrotter</a>
                            </p>
                        </div>
                        <div className="col-md-3 mb-4 footer-box">
                            <h6 className="text-uppercase fw-bold mb-3 red-text">Contact Info</h6>
                            <p><i className="bi bi-house-fill"></i> Selden, NY 11784, US</p>
                            <p><i className="bi bi-envelope-at-fill"></i> edgar.pacheco.vgo@gmail.com</p>
                            <p><i className="bi bi-telephone-fill"></i> +1 619 678-7505</p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-4">
                    © 2024 Edgar Pacheco
                </div>

            </footer>

        </section>

    );
};

export default Footer;
