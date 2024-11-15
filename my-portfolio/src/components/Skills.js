import { Image, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useMemo, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Skill Icons
import HTML from '../assets/images/html-logo.png';
import CSS from '../assets/images/css-logo.png';
import Javascript from '../assets/images/javascript-logo.png';
import NodeJS from '../assets/images/node.png';
import ReactImg from '../assets/images/react.png';
import Python from '../assets/images/python-logo.png';
import Java from '../assets/images/java-logo.png';
import SQL from '../assets/images/sql-logo.png';
import spin from '../assets/images/spin-me.webp';
// Language Icons
import spanish from '../assets/images/languages/spanish.png';
import english from '../assets/images/languages/english.png';
import italian from '../assets/images/languages/italian.png';
import japanese from '../assets/images/languages/japanese.png';
import french from '../assets/images/languages/french.png';
import german from '../assets/images/languages/german.png';
// Nation Icons
import mondstadt from '../assets/images/languages/mondstadt.png';

// Languages with properties: name, color, proficiency
const languages = [
  { name: 'Spanish', color: '#C70039', icon: spanish, nation: mondstadt, proficiency: 5 },
  { name: 'English', color: '#3A7D44', icon: english, proficiency: 5 },
  { name: 'Italian', color: '#6D9EEB', icon: italian, proficiency: 4 },
  { name: 'Japanese', color: '#9479C0', icon: japanese, proficiency: 3.5 },
  { name: 'French', color: '#CE3737', icon: french, proficiency: 4 },
  { name: 'German', color: '#28B463', icon: german, proficiency: 2.5 },
];

export const Skills = () => {
  const skills = useMemo(
    () => [
      { name: 'HTML', image: HTML, color: '#E34C26' },
      { name: 'CSS', image: CSS, color: '#264DE4' },
      { name: 'Javascript', image: Javascript, color: '#F0DB4F' },
      { name: 'NodeJS', image: NodeJS, color: '#53A040' },
      { name: 'React', image: ReactImg, color: '#61DBFB' },
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

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      skillIcons.forEach((icon) => {
        icon.removeEventListener('mouseover', handleMouseOver);
        icon.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [isPaused, skills]);

  // Bookshelf Component
  const renderBookshelf = () => {
    return (
      <div className="bookshelf">
        {languages.map((language, index) => {
          const bookStyle = {
            backgroundColor: language.color,
            height: `${language.proficiency * 50}px`,
            transform: language.name === 'Spanish' ? 'translate(-16px, -2.5px) rotate(+7.5deg)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            writingMode: 'vertical-lr',
          }; 

          return (
            <div className="book" key={index} style={bookStyle}>
              {language.name}
              <img src={language.icon} alt={`${language.name} icon`} style={{  marginTop: '4px', width: '30px', height: '30px' }} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="skills">
      <h2 className="text-center mb-5 section-title red-text">My Skills</h2>
      <Row>
        <Col lg={6} className="technical-skills mb-lg-0">
          <div className="skill-wheel">
            {skills.map((skill, index) => (
              <div className="skill-icon" key={index}>
                <Image src={skill.image} alt={skill.name} />
              </div>
            ))}
            <div className="skill-center" style={{ color: hoveredSkill.color }}>
              {hoveredSkill.name ? hoveredSkill.name : (
                <img src={spin} alt="Skill Animation" style={{ width: '100px', height: '100px' }} />
              )}
            </div>
          </div>
        </Col>
        <Col lg={6} className='linguistic-skills mt-lg-0'>
          {renderBookshelf()}
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
