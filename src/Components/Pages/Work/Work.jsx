import React from 'react';
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
