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
import spin from '../assets/images/spin-me.gif';
// Language Icons
import world from '../assets/images/languages/world.png';
import spanish from '../assets/images/languages/spanish.png';
import english from '../assets/images/languages/english.png';
import italian from '../assets/images/languages/italian.png';
import japanese from '../assets/images/languages/japanese.png';
import french from '../assets/images/languages/french.png';
import german from '../assets/images/languages/german.png';
// Nation Icons
import natlan from '../assets/images/nations/natlan.png';
import penacony from '../assets/images/nations/penacony.png';
import fatui from '../assets/images/nations/fatui.png';
import inazuma from '../assets/images/nations/inazuma.png';
import fontaine from '../assets/images/nations/fontaine.png';
import mondstadt from '../assets/images/nations/mondstadt.png';

// Languages with properties: name, color, proficiency
const languages = [
  { name: 'ESP', language: 'Spanish', color: '#FEEFEB', text: '#EF7A35', icon: spanish, nation: natlan, proficiency: 5 },
  { name: 'ENG', language: 'English', color: '#8693A2', text: '#0E3463', icon: english, nation: penacony, proficiency: 5 },
  { name: 'ITA', language: 'Italian', color: '#3A7D44', text: '#0AB34C', icon: italian, nation: fatui, proficiency: 4 },
  { name: '日本語', language: 'Japanese', color: '#F65FF6', text: '#B20DBC', icon: japanese, nation: inazuma, proficiency: 3.5 },
  { name: 'FRE', language: 'French', color: '#A8EFF4', text: '#75BFD4', icon: french, nation: fontaine, proficiency: 4 },
  { name: 'DEU', language: 'German', color: '#C7EAE2', text: '#0CC79B', icon: german, nation: mondstadt, proficiency: 2.5 },
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
  const [hoveredLanguage, setHoveredLanguage] = useState({ name: 'The Polyglot’s Shelf!', color: '#b71e48', icon: world });
  const [isPaused, setIsPaused] = useState(false);
  const angleRef = useRef(0);
  const animationRef = useRef();

  useEffect(() => {
    const skillIcons = document.querySelectorAll('.skill-icon');
    const totalSkills = skillIcons.length;
    const radius = 160;
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
            height: `${language.proficiency * 45}px`,
            transform:
              language.name === 'ESP'
                ? 'translate(-16px, -2.5px) rotate(+7.5deg)'
                : language.name === 'DEU'
                  ? 'translate(8px, -2px) rotate(-7.5deg)'
                  : 'none',
            color: language.text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            writingMode: 'vertical-lr',
          };

          return (
            <div className="book" key={index} style={bookStyle} onMouseOut={() => setHoveredLanguage({ name: 'The Polyglot’s Shelf!', color: '#b71e48', icon: world })} onMouseOver={() => setHoveredLanguage({ name: language.language, color: language.text, icon: language.icon })}>
              <p className='book-name'>
                {language.name}
                <img src={language.nation} alt={`${language.name} icon`} style={{ marginTop: '4px', width: '30px', height: '30px' }} />
              </p>
            </div>
          );
        })
        }
      </div >
    );
  };

  return (
    <section id="skills">
      <h2 className="text-center section-title red-text">My Skills</h2>
      <h3 className='text-center pink-text mb-5 subtitle'>Mend your garden, and the butterflies will come</h3>
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
          {hoveredLanguage.name && (
            <div className="hovered-language" style={{ color: hoveredLanguage.color }}>
              <p className='text-center'>{hoveredLanguage.name}</p>
              <img src={hoveredLanguage.icon} alt={`${hoveredLanguage.name} icon`} style={{ width: '40px', height: '40px' }} />
            </div>
          )}

          {renderBookshelf()}
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
