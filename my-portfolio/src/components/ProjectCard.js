import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import king from '../assets/images/king.jpeg'
import { Image } from 'react-bootstrap';

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-face card-front">
                    <div className="card-front-content">
                        <Image src={king} alt='project-card'/>
                    </div>
                </div>
                <div className="card-face card-back">
                    <img src={image} alt={title} className="project-image" />
                    <div className="project-info">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
