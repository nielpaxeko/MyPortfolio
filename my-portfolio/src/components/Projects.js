import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import rover from '../assets/images/rover.png'
import VayKay from '../assets/images/VayKay.png'
import globetrotter from '../assets/images/globetrotter.png'

const projects = [
    {
        id: 1,
        title: 'Rover',
        description: 'A social media site aimed at travelers that allows them to share their travel experiences with others.',
        image: rover
    },
    {
        id: 2,
        title: 'VayKay',
        description: 'A java based app made for users planning their next vacation. Features include flights search, itinerary creation as well as currency exchange and weather lookup.',
        image: VayKay
    },
    {
        id: 3,
        title: 'Globetrotter',
        description: 'A site that allows users to keep track of which cities and countries they have visited and want to visit.',
        image: globetrotter
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects">
            <Container>
                <h2 className="text-center section-title red-text">Academic Portfolio</h2>
                <h3 className='text-center pink-text mb-5 subtitle'>Milestones Along the Way</h3>
                <Row>
                    {projects.map((project) => (
                        <Col key={project.id} sm={12} md={6} lg={4} className="mb-4 card-col">
                            <Card className="h-100">
                                <Card.Img variant="top" src={project.image} alt={project.title} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    );
};

export default ProjectsSection;

