import React from 'react';
import { FaRegEnvelope, FaInstagram, FaLinkedin, FaGithub, FaRegFileAlt } from 'react-icons/fa';
import IconsStyle from './Icons.module.css';

function Icons({ iconSize = 35 }) {
    const emailSubject = encodeURIComponent('Website Inquiry - Anthony Freay');
    return (
        <div className={`${IconsStyle.footer} ${IconsStyle.container}`} id={IconsStyle.footer}>
            <div className={IconsStyle.icons}>
                <a href={`mailto:anthonyfreay@gmail.com?subject=${emailSubject}`}
                    aria-label="Email"
                    title="Email"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaRegEnvelope size={iconSize} />
                </a>
                <a href="https://www.instagram.com/anthonyfreay"
                    aria-label="Visit Instagram Profile"
                    title="Instagram"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram size={iconSize} />
                </a>
                {/* <span className={IconsStyle.divider}>|</span> */}
                <a href="https://www.linkedin.com/in/anthonyfreay"
                    aria-label="Visit LinkedIn Profile"
                    title="LinkedIn"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size={iconSize} />
                </a>
                <a
                    href="/resume-anthony_freay-f2024.pdf"
                    aria-label="View Résumé"
                    title="Résumé"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaRegFileAlt size={iconSize} />
                </a>
                <a href="https://github.com/anthonyfreay"
                    aria-label="Visit GitHub Profile"
                    title="GitHub"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub size={iconSize} />
                </a>


            </div>
        </div>
    );
}

export default Icons;
