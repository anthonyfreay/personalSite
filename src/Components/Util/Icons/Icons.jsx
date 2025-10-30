import React from 'react';
import { FaRegEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import IconsStyle from './Icons.module.css';

function Icons({ iconSize = 35 }) {
    const emailSubject = encodeURIComponent('Website Inquiry - Anthony Freay');
    return (
        <div className={`${IconsStyle.footer} ${IconsStyle.container}`} id={IconsStyle.footer}>
            <div className={IconsStyle.icons}>
                <a href={`mailto:anthonyfreay@gmail.com?subject=${emailSubject}`}
                    aria-label="Email"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaRegEnvelope size={iconSize} />
                </a>
                <a href="https://www.instagram.com/anthonyfreay"
                    aria-label="Visit Instagram Profile"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram size={iconSize} />
                </a>
                <a href="https://www.linkedin.com/in/anthonyfreay"
                    aria-label="Visit LinkedIn Profile"
                    className={IconsStyle.icon}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size={iconSize} />
                </a>
            </div>
        </div>
    );
}

export default Icons;
