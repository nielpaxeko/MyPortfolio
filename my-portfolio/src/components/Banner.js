import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import laptopFrame from '../assets/images/laptopFrame.png';

export const Banner = () => {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [nameText, setNameText] = useState("");
    const [titleText, setTitleText] = useState("");

    const typeWriter = (text, setState, delay = 100) => {
        let i = 0;
        const interval = setInterval(() => {
            setState(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, delay);
    };

    useEffect(() => {
        typeWriter("<Edgar Pacheco>", setNameText);
        setTimeout(() => typeWriter("<Software Developer>", setTitleText), 15 * 100);
    }, []);

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
                                <>
                                    <h1 className="intro-text">Hi, My name is <span className="highlight mb-1">{nameText}</span></h1>
                                    <h2 className="intro-text" style={{ fontWeight: 'bold' }}>I'm a <span className="highlight">{titleText}</span></h2>
                                    <a href="#contact" id="connect-btn" className="mt-1" >
                                        <span>Let’s Connect</span> <i className="bi bi-arrow-right-circle connect-text"></i>
                                    </a>
                                </>
                            )}
                        </TrackVisibility>
                    </Col>

                    {/* Right side: Image section */}
                    <Col className="intro-right m-auto" xs={12} md={6} xl={5}>
                        <div onMouseMove={handleMouseMove} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className="profile-image-container">
                                <img src={laptopFrame} alt="Profile" className="profile-image"
                                    style={{
                                        transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;