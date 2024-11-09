import { Image } from 'react-bootstrap';
import { useEffect, useState, useMemo, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTML from '../assets/images/html-logo.png';
import CSS from '../assets/images/css-logo.png';
import Javascript from '../assets/images/javascript-logo.png';
import NodeJS from '../assets/images/node.png'
import React from '../assets/images/react.png'
import Python from '../assets/images/python-logo.png';
import Java from '../assets/images/java-logo.png';
import SQL from '../assets/images/sql-logo.png';
import spin from '../assets/images/spin-me.webp';

export const Skills = () => {
  const skills = useMemo(
    () => [
      { name: 'HTML', image: HTML, color: '#E34C26' },
      { name: 'CSS', image: CSS, color: '#264DE4' },
      { name: 'Javascript', image: Javascript, color: '#F0DB4F' },
      { name: 'NodeJS', image: NodeJS, color: '#53A040' },
      { name: 'React', image: React, color: '#61DBFB' },
      { name: 'Python', image: Python, color: '#2596be' },
      { name: 'Java', image: Java, color: '#CE3737' },
      { name: 'SQL', image: SQL, color: '#BE63F9' },
    ],
    []
  );

  const [hoveredSkill, setHoveredSkill] = useState({ name: '', color: '#333' });
  const [isPaused, setIsPaused] = useState(false);
  const angleRef = useRef(0);
  const animationRef = useRef();

  useEffect(() => {
    const skillIcons = document.querySelectorAll('.skill-icon');
    const totalSkills = skillIcons.length;
    const radius = 180;
    const animationSpeed = 0.0075;

    const updatePositions = () => {
      skillIcons.forEach((icon, index) => {
        const skillAngle = (index / totalSkills) * 2 * Math.PI + angleRef.current;
        const x = radius * Math.cos(skillAngle);
        const y = radius * Math.sin(skillAngle);
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const animate = () => {
      if (!isPaused) {
        angleRef.current += animationSpeed;
      }
      updatePositions();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const handleMouseOver = (index) => {
      setIsPaused(true);
      setHoveredSkill({ name: skills[index].name, color: skills[index].color });
      skillIcons.forEach((otherIcon, otherIndex) => {
        if (index !== otherIndex) {
          otherIcon.classList.add('grayscale');
        }
      });
    };

    const handleMouseOut = () => {
      setIsPaused(false);
      setHoveredSkill({ name: '', color: '#333' });
      skillIcons.forEach((otherIcon) => {
        otherIcon.classList.remove('grayscale');
      });
    };

    skillIcons.forEach((icon, index) => {
      icon.addEventListener('mouseover', () => handleMouseOver(index));
      icon.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      skillIcons.forEach((icon, index) => {
        icon.removeEventListener('mouseover', () => handleMouseOver(index));
        icon.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [isPaused, skills]);

  return (
    <section id='skills'>
      <h2 className='text-center mb-5 section-title red-text'>My Skills</h2>
      <div className="skill-wheel">
        {skills.map((skill, index) => (
          <div className="skill-icon" key={index}>
            <Image src={skill.image} alt={skill.name} />
          </div>
        ))}
        <div className="skill-center" style={{ color: hoveredSkill.color }}>
          {hoveredSkill.name ? hoveredSkill.name :   <img src={spin} alt="Skill Animation" style={{ width: '100px', height: '100px' }} />}
        </div>
      </div>
    </section>
  );
};

export default Skills;