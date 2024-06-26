import React from 'react';
import FooterStyles from './Footer.module.css';
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';

function Footer({ activePage }) {
    return (
        <div className={`${FooterStyles.footer} ${FooterStyles.container}`} id={FooterStyles.footer}>
            <div className={FooterStyles.pageSection}>
                <Link to="/live" className={`${FooterStyles.pages} ${activePage === 'live' ? FooterStyles.footerActive : ''}`}>Live</Link>
                <Link to="/bw" className={`${FooterStyles.pages} ${activePage === 'bw' ? FooterStyles.footerActive : ''}`}>B & W</Link>
                <Link to="/people" className={`${FooterStyles.pages} ${activePage === 'people' ? FooterStyles.footerActive : ''}`}>People</Link>
                <Link to="/places" className={`${FooterStyles.pages} ${activePage === 'places' ? FooterStyles.footerActive : ''}`}>Places</Link>
                <Link to="/cars" className={`${FooterStyles.pages} ${activePage === 'cars' ? FooterStyles.footerActive : ''}`}>Cars</Link>
                <Link to="/events" className={`${FooterStyles.pages} ${activePage === 'events' ? FooterStyles.footerActive : ''}`}>Events</Link>
                {/* <Link to="/posters" className={`${FooterStyles.pages} ${activePage === 'posters' ? FooterStyles.footerActive : ''}`}>Posters</Link> */}
                {/* <Link to="/apparel" className={`${FooterStyles.pages} ${activePage === 'apparel' ? FooterStyles.footerActive : ''}`}>Apparel</Link> */}
                <Link to="/contact" className={`${FooterStyles.pages} ${activePage === 'contact' ? FooterStyles.footerActive : ''}`}>Contact</Link>
            </div>
            <Icons className={FooterStyles.icons} iconSize={30} />
            <p className={FooterStyles.copyright}>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>        </div>
    );
}

export default Footer;
