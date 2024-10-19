// eslint-disable-next-line
import { Container, Button, Image } from 'react-bootstrap';
// eslint-disable-next-line
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import html from '../assets/images/html-logo.png'
import css from '../assets/images/css-logo.png'
import js from '../assets/images/javascript-logo.png'

export const Skills = () => {
    return (
        <div className="slider">
            <div className="list">
                <div className="item">
                    <Image src={html}></Image>
                </div>
                <div className="item">
                    <Image src={css}></Image>
                </div>
                <div className="item">
                    <Image src={js}></Image>
                </div>
            </div>
            <div className='circle'>
                Edgar Daniel Pacheco Verdugo
            </div>
            <div className='content'>
                <div>Skill</div>
                <div>Skill Name</div>
            </div>
        </div>
    )
}

export default Skills;