import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar';
import EventsStyle from "./EventsStyle.module.css";
import MasonryImageGallery from '../../Util/MasonryImageGallery/MasonryImageGallery';
import Footer from '../../Util/Footer/Footer';

const Events = () => {
    const [horizontalImages, setHorizontalImages] = useState([]);
    const [verticalImages, setVerticalImages] = useState([]);

    useEffect(() => {
        // Horizontal/Wide images
        const horizontal = [
            { "alt": "", "src": "events/A7401031-color.webp" },
            { "alt": "", "src": "events/A7207716-color.webp" },
            { "alt": "", "src": "events/A7400919-color.webp" },
            { "alt": "", "src": "events/A7206906-color.webp" },
            { "alt": "", "src": "events/A7400937-color.webp" },
            { "alt": "", "src": "events/A7402659-color.webp" },
            { "alt": "", "src": "events/A7207820-color.webp" },
            { "alt": "", "src": "events/A7208176-color.webp" },
            { "alt": "", "src": "events/A7407714-color.webp" },
            { "alt": "", "src": "events/A7402648-color.webp" },
            { "alt": "", "src": "events/A7207973-color.webp" },
            { "alt": "", "src": "events/A7208096-color.webp" },
            { "alt": "", "src": "events/A7208033-color.webp" },
            { "alt": "", "src": "events/A7207913-color.webp" },
            { "alt": "", "src": "events/A7207907-color.webp" },
            { "alt": "Maddie Miller Bday Cake", "src": "events/A7407589-color.webp" },
            { "alt": "", "src": "events/A7402701-color.webp" },
            { "alt": "", "src": "events/A7401049-color.webp" },
            { "alt": "", "src": "events/A7402526-color.webp" },
            { "alt": "Abuela and Candeladia", "src": "events/A7206966-color.webp" },
            { "alt": "", "src": "events/A7207859-color.webp" },
            { "alt": "", "src": "events/A7400963-color.webp" },
            { "alt": "", "src": "events/A7206546-color.webp" },
            { "alt": "", "src": "events/A7207942-color.webp" },
        ].map(image => ({
            ...image,
            hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1')
        }));

        // Vertical/Portrait images
        const vertical = [
            { "alt": "", "src": "events/A7404835-color.webp" },
            { "alt": "", "src": "events/A7404355-color.webp" },
            { "alt": "", "src": "events/A7401037-color.webp" },
            { "alt": "", "src": "events/A7404555-color.webp" },
            { "alt": "", "src": "events/A7404514-color.webp" },
            { "alt": "", "src": "events/A7404632-color.webp" },
            { "alt": "", "src": "events/A7407621-color.webp" },
            { "alt": "", "src": "events/A7207607-color.webp" },
            { "alt": "Mom, Cita, and Tio", "src": "events/A7206591-color.webp" },
            { "alt": "", "src": "events/A7206528-color.webp" },
            { "alt": "", "src": "events/A7404780-color.webp" },
            { "alt": "", "src": "events/A7402521-color.webp" },
            { "alt": "", "src": "events/A7404479-color.webp" },
            { "alt": "", "src": "events/A7206559-color.webp" },
            { "alt": "Jill and Kendall", "src": "events/A7401130-color.webp" },
            { "alt": "", "src": "events/A7401014-color.webp" },
            { "alt": "", "src": "events/A7407559-color.webp" },
            { "alt": "DJ Bolivar", "src": "events/A7206551-color.webp" },
            { "alt": "", "src": "events/A7206574-color.webp" },
            { "alt": "", "src": "events/A7404717-color.webp" },
            { "alt": "All The Way Down", "src": "events/A7207740-color.webp" },
            { "alt": "", "src": "events/A7405071-color.webp" },
            { "alt": "", "src": "events/A7206542-color.webp" },
            { "alt": "", "src": "events/A7207884-color.webp" },
            { "alt": "", "src": "events/A7402743-color.webp" },
            { "alt": "", "src": "events/A7206535-color.webp" },
            { "alt": "", "src": "events/A7405908-Enhanced-NR-color.webp" },
            { "alt": "", "src": "events/A7404868-color.webp" },
            { "alt": "Cake", "src": "events/A7206529-color.webp" },
            { "alt": "", "src": "events/A7206604-Enhanced-NR-color.webp" },
            { "alt": "", "src": "events/A7405960-color.webp" },
            { "alt": "", "src": "events/A7405730-Enhanced-NR-color.webp" },
        ].map(image => ({
            ...image,
            hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1')
        }));

        setHorizontalImages(horizontal);
        setVerticalImages(vertical);
    }, []);

    const allImages = [...horizontalImages, ...verticalImages];

    return (
        <div className={EventsStyle.container}>
            <Helmet>
                {allImages.map((image, index) => (
                    <link key={index} rel="preload" as="image" href={image.src} />
                ))}
            </Helmet>
            <PageHeader title="Events | Anthony Freay" />
            <Navbar className={EventsStyle.navBar} />
            <div className={EventsStyle.mainContent}>
                <MasonryImageGallery
                    horizontalImages={horizontalImages}
                    verticalImages={verticalImages}
                />
            </div>
            <Footer className={EventsStyle.footer} activePage={"events"} />
        </div>
    );
};

export default Events;