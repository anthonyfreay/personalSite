import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Util/Footer/Footer';
import WorkStyle from "./Work.module.css";

const categories = [
    { path: '/live', image: "live/A7400474-music.webp", label: 'Live' },
    { path: '/bw', image: "covers/bw_cover.jpg", label: 'B & W' },
    { path: '/people', image: "covers/people_cover.jpg", label: 'People' },
    { path: '/places', image: "places/A7406615-scapes.webp", label: 'Places' },
    { path: '/cars', image: "covers/cars_cover.jpg", label: 'Cars' },
    { path: '/events', image: "events/A7404835-color-hd.webp", label: 'Events' }
];

const CategoryLink = ({ path, image, label }) => (
    <Link to={path} className={WorkStyle.coverImage}>
        <figure>
            <img alt={label} src={image} className={WorkStyle.coverImage} />
            <figcaption>{label}</figcaption>
        </figure>
    </Link>
);

const Work = () => {
    return (
        <div className={WorkStyle.container}>
            <Helmet>
                <title>Work | Anthony Freay</title>
                <meta name="description" content="A collection of photography work by Anthony Freay, showcasing portraits, concerts, and events." />
                <link rel="canonical" href="https://anthonyfreay.com/work" />

                <meta property="og:title" content="Work | Anthony Freay" />
                <meta property="og:description" content="A collection of photography work by Anthony Freay, showcasing portraits, concerts, and events." />
                <meta property="og:image" content="https://anthonyfreay.com/covers/live_cover.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/work" />

                <meta name="twitter:title" content="Work | Anthony Freay" />
                <meta name="twitter:description" content="A collection of photography work by Anthony Freay, showcasing portraits, concerts, and events." />
                <meta name="twitter:image" content="https://anthonyfreay.com/covers/live_cover.jpg" />
            </Helmet>
            <PageHeader title="Work | Anthony Freay" />
            <Navbar className={WorkStyle.navBar} activePage="work" />
            <div className={WorkStyle.mainContent}>
                {categories.map((category) => (
                    <CategoryLink key={category.label} {...category} />
                ))}
            </div>
            <Footer className={WorkStyle.footer} />
        </div>
    );
};

export default Work;
