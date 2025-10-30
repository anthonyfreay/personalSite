import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import ReactGA from 'react-ga4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavStyle from "./Navbar.module.css"

function HomeNavbar() {
    const trackResumeClick = () => {
        ReactGA.event({
            category: "Resume",
            action: "click",
            label: "Resume Download"
        });
        console.log("Resume click tracked");
    };

    return (
        <Navbar expand={true} className={NavStyle.homeNavbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={NavStyle.homeNavbarToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto pe-2">
                    <a
                        href="/resume-anthony_freay-f2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.homeNavItem}
                        onClick={trackResumeClick}>
                        <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                    <a
                        href="https://github.com/anthonyfreay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.homeNavItem}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default HomeNavbar;
