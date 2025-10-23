import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Util/Navbar/Navbar'

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Resume | Anthony Freay</title>
                <meta name="description" content="The resume of Anthony Freay, a software engineer and photographer based in NYC." />
                <link rel="canonical" href="https://anthonyfreay.com/resume" />

                <meta property="og:title" content="Resume | Anthony Freay" />
                <meta property="og:description" content="The resume of Anthony Freay, a software engineer and photographer based in NYC." />
                <meta property="og:image" content="https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/resume" />

                <meta name="twitter:title" content="Resume | Anthony Freay" />
                <meta name="twitter:description" content="The resume of Anthony Freay, a software engineer and photographer based in NYC." />
                <meta name="twitter:image" content="https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" />
            </Helmet>
            <Navbar />
            <h1>Resume LANDING PAGE</h1>
        </div>
    );
};

export default Resume;