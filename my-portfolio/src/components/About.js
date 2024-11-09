import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// Function to dynamically import all images from the photos folder
const importAll = (r) => {
    return r.keys().map(r);
};

// Import all images from the photos folder
const images = importAll(require.context('../assets/photos', false, /\.(png|jpe?g)$/));

export const AboutMe = () => {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col xs={0} md={6}>
                        {/* Image Slider */}
                        <div className="image-slider-container">
                            <div className="notch"></div>
                            <Carousel>
                                {images.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 slider-image"
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                    <Col xs={10} md={6} className='m-auto'>
                        <div className='about-text-container'>
                            <h2 className="purple-text mb-4 section-title">About Me</h2>
                            <p className='about-text'>
                                I am a software developer with a strong educational background in computer science and hands-on
                                experience in full-stack development, including front-end and back-end technologies such as React,
                                Node.js, and Bootstrap, as well as other programming languages like Java, Python, and SQL.
                            </p>
                            <p className='about-text mt-3'>
                                I’m someone who’s always on the move. I love to travel whenever I get the chance and frequently find myself
                                daydreaming about my next adventure. For me, traveling is more than just an escape or a sightseeing
                                distraction. It's about diving deep into the culture, learning the history, interacting with the locals,
                                and exploring new ways of life. That’s why I enjoy learning the languages of the countries
                                I plan to visit in my free time so that I can further appreciate their culture once I get there. These experiences have
                                shaped who I am today, making me more open-minded, adaptable, and curious about the world around me.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMe;
