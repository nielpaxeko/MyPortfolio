import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        // Cleanup on component unmount
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container className='nav-container'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-links">
                            <Nav.Link
                                href="#home"
                                className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('home')}>
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#about"
                                className={activeLink === "about" ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('about')}>
                                About
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}>
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('projects')}>
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                {/* <i
                                    className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}
                                    id="dark-mode-toggle"
                                    onClick={toggleDarkMode}
                                    style={{ cursor: 'pointer' }}
                                ></i> */}
                                <a href='https://www.instagram.com/nielpaxeko/'><i className="bi bi-instagram"></i></a>
                                <a href='https://www.linkedin.com/in/edgar-pacheco-verdugo-94437130a'><i className="bi bi-linkedin"></i></a>
                                <a href='https://github.com/nielpaxeko'><i className="bi bi-github"></i></a>
                            </div>
                            <Button className='rounded-pill' href='#contact'>Contact Me</Button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

export default NavBar;
