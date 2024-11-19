/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Button, Container, Row, Col, Image, Alert } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import contactImage from '../assets/images/contact-img.png'

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Send email using EmailJS
        emailjs.send('service_3exyj6q', 'template_ek8l42j', formData, 'wwC6zvn93sqs6zEN-')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                setIsSent(true);
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                setErrorMessage('Failed to send message. Please try again later.');
            });
    };


    return (
        <section id="contact">
            <h2 className="text-center section-title red-text">Contact Me</h2>
            <h3 className='text-center pink-text mb-5 subtitle'>The Road Awaits, Let's connect and take the first step!</h3>
            <Container className="img-fluid rounded-4 contact-container">
                <Row>
                    {/* Left Div */}
                    <Col lg={6} className="left p-4">
                        <h2 className="text-center mb-3 pink-text" style={{ fontWeight: 'bold' }}>Let's Get in Touch</h2>
                        <Form onSubmit={handleSubmit} className="contact-form">
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="rounded-2"
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="rounded-2"
                                />
                            </Form.Group>

                            <Form.Group controlId="formSubject" className="mb-3">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="rounded-2"
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="rounded"
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <button className="rounded-pill btn-pink" type="submit">
                                    Send Message
                                </button>
                            </div>
                            {isSent && <Alert variant="success" className="mt-3 text-center">Message sent successfully!</Alert>}
                            {errorMessage && <Alert variant="danger" className="mt-3 text-center">{errorMessage}</Alert>}
                        </Form>
                    </Col>
                    {/* Right Div */}
                    <Col lg={6} md={0} className="right p-0">
                        <Image src={contactImage} alt="contact-img" className="contact-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}