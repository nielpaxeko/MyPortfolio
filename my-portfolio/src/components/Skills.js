import { Image } from 'react-bootstrap';
import { useEffect, useState, useMemo } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
import HTML from '../assets/images/html-logo.png'
import CSSLogo from '../assets/images/css-logo.png'
import Javascript from '../assets/images/javascript-logo.png'
import Python from '../assets/images/python-logo.png'
import Java from '../assets/images/java-logo.png'
import SQL from '../assets/images/sql-logo.png'


export const Skills = () => {
    const skills = useMemo(() => [
        { name: 'HTML', image: HTML, color: '#E34C26' }, 
        { name: 'CSS', image: CSSLogo, color: '#264DE4' },
        { name: 'Javascript', image: Javascript, color: '#F0DB4F' },
        { name: 'Python', image: Python, color: '#306998' },
        { name: 'Java', image: Java, color: '#CE3737' },
        { name: 'SQL', image: SQL, color: '#BE63F9' } 
    ], []);

    // State to track the hovered skill and its color
    const [hoveredSkill, setHoveredSkill] = useState({ name: '', color: '#333' });

    useEffect(() => {
        const skillIcons = document.querySelectorAll('.skill-icon');
        const skillWheel = document.querySelector('.skill-wheel');
        const totalSkills = skillIcons.length;

        // Position the icons in a circle
        skillIcons.forEach((icon, index) => {
            const angle = (index / totalSkills) * 360;
            const radius = 120;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            icon.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        });

        skillIcons.forEach((icon, index) => {
            icon.addEventListener('mouseover', () => {
                skillWheel.style.animationPlayState = 'paused';
                icon.style.transform = icon.style.transform.replace(' scale(1)', 'scale(1.2)');
                setHoveredSkill({ name: skills[index].name, color: skills[index].color }); // Set hovered skill name and color
                skillIcons.forEach(otherIcon => {
                    if (otherIcon !== icon) {
                        otherIcon.style.filter = 'grayscale(100%)';
                    }
                });
            });

            icon.addEventListener('mouseout', () => {
                // Resume the spin
                skillWheel.style.animationPlayState = 'running';
                icon.style.transform = icon.style.transform.replace(' scale(1.2)', 'scale(1)');
                setHoveredSkill({ name: '', color: '#333' }); // Reset hovered skill name and color
                skillIcons.forEach(otherIcon => {
                    otherIcon.style.filter = 'grayscale(0)';
                });
            });
        });

        // Clean up event listeners 
        return () => {
            skillIcons.forEach(icon => {
                icon.removeEventListener('mouseover', null);
                icon.removeEventListener('mouseout', null);
            });
        };
    }, [skills]);

    return (
        <section id='skills'>
            <h1 className='text-center mb-3'>My Skills</h1>
            <div className="skill-wheel">
                {skills.map((skill, index) => (
                    <div className="skill-icon" key={index}>
                        <Image src={skill.image} alt={skill.name} />
                    </div>
                ))}
                {/* Central name display with dynamic color */}
                <div className="skill-center" style={{ color: hoveredSkill.color }}>
                    {hoveredSkill.name ? hoveredSkill.name : ''}
                </div>
            </div>
        </section>
    );
}

export default Skills;
