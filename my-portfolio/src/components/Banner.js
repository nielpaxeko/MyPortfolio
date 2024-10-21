// eslint-disable-next-line
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import profile from '../assets/images/Profile-transparent.png';


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="intro-banner">
                    {/* Left side: Text section */}
                    <Col className="intro-left d-flex" xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animated fadeInLeft" : ""}>
                                    <h1>Hi, I'm <span className="highlight">Edgar Pacheco</span></h1>
                                    <h2>A <span className="highlight">Web and Software Developer</span></h2>
                                    <p>
                                        I am a dedicated software developer with a multicultural background and a passion for continuous learning and professional growth.
                                    </p>
                                    <a href="#contact">
                                        Let’s Connect <i className="bi bi-arrow-right-circle"></i>
                                    </a>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>

                    {/* Right side: Image section */}
                    <Col className="intro-right" xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animated fadeInRight" : ""}>
                                    <img
                                        src={profile}
                                        alt="Profile"
                                        className="profile-image"
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;