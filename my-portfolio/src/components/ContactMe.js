/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Button, Container, Row, Col, Image, Alert } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import sql from '../assets/images/sql-logo.png'

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
            <Container className="rounded contact-container">
                <Row className="">
                    {/* Left Div */}
                    <Col lg={6} md={0} className="p-3 left">
                        <div className="contact-image">
                            <Image src={sql} alt="contact-img" className="img-fluid rounded" />
                        </div>
                    </Col>
                    {/* Right Div */}
                    <Col lg={6} md={9} className="p-3 right">
                        <h2 className="text-center" style={{color: "#d92323"}}>Contact Me</h2>
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
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <button className="rounded-pill" variant="primary" type="submit">
                                    Send Message
                                </button>
                            </div>
                            {isSent && <Alert variant="success" className="mt-3">Message sent successfully!</Alert>}
                            {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default ContactMe;