import { Image } from 'react-bootstrap';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import html from '../assets/images/html-logo.png'
import css from '../assets/images/css-logo.png'
import js from '../assets/images/javascript-logo.png'
import python from '../assets/images/python-logo.png'
import java from '../assets/images/java-logo.png'
import sql from '../assets/images/sql-logo.png'


export const Skills = () => {

    const skills = [html, css, js, python, java, sql]

    useEffect(() => {
        const skillIcons = document.querySelectorAll('.skill-icon');
        const skillWheel = document.querySelector('.skill-wheel'); // Use querySelector, not querySelectorAll
        const totalSkills = skillIcons.length;

        // Position the icons in a circle
        skillIcons.forEach((icon, index) => {
            const angle = (index / totalSkills) * 360;
            const radius = 120;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            icon.style.transform = `translate(${x}px, ${y}px)`;
        });

        skillIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                skillWheel.style.animationPlayState = 'paused';
                icon.style.transform += ' scale(1.25)';
                skillIcons.forEach(otherIcon => {
                    if (otherIcon !== icon) {
                        otherIcon.style.filter = 'grayscale(100%)';
                    }
                });
            });

            icon.addEventListener('mouseout', () => {
                // Resume the animation if skillWheel is defined
                skillWheel.style.animationPlayState = 'running';
                icon.style.transform = icon.style.transform.replace(' scale(1.25)', ''); // Remove scale
                skillIcons.forEach(otherIcon => {
                    otherIcon.style.filter = 'grayscale(0)'; // Remove grayscale from all icons
                });
            });
        });

        // Clean up event listeners when component unmounts
        return () => {
            skillIcons.forEach(icon => {
                icon.removeEventListener('mouseover', null);
                icon.removeEventListener('mouseout', null);
            });
        };
    }, []);

    return (
        <section id='skills'>

            <h1 className='text-center'>My Skills</h1>
            <div className="skill-wheel">
                {skills.map((skill, index) => (
                    <div className="skill-icon" key={index}>
                        <Image src={skill} alt={`Skill ${index}`} />
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Skills;