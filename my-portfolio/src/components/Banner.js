import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import laptopFrame from '../assets/images/laptopFrame.png';


export const Banner = () => {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (isHovered) {
            setXAxis((e.clientX / window.innerWidth) * 60 - 30);
            setYAxis((e.clientY / window.innerHeight) * 60 - 30);
        }
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
        setXAxis(0);
        setYAxis(0);
    };

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
                                        I am software developer with a multicultural background and a passion for continuous learning and professional growth.
                                    </p>
                                    <a href="#contact" id="connect-btn">
                                        Let’s Connect <i className="bi bi-arrow-right-circle"></i>
                                    </a>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>

                    {/* Right side: Image section */}
                    <Col className="intro-right m-auto" xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div 
                                    className={isVisible ? "animated fadeInRight" : ""}
                                    onMouseMove={handleMouseMove}
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                >
                                    <div className="profile-image-container">
                                        <img
                                            src={laptopFrame}
                                            alt="Profile"
                                            className="profile-image"
                                            style={{
                                                transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`,
                                            }}
                                        />
                                    </div>
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