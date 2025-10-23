import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import PeopleStyle from "./People.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const People = () => {
    const imageData = [
        { alt: "Em in Williamsburg", src: "people/DSC01179-Edit-portrait.webp" },
        { alt: "Kal looking over a fire escape", src: "people/DSC06349-portrait.webp" },
        { alt: "Natalie Freay celebrating her enagement", src: "people/A7404306-portrait.webp" },
        { alt: "Dajee at Untermyer Gardens", src: "people/A7205925-portrait.webp" },
        { alt: "Dajee in Grand Central", src: "people/A7207181-portrait.webp" },
        { alt: "Arize in Studio", src: "people/A7201581-Edit-portrait.webp" },
        { alt: "Dajee at the MET Cloisters", src: "people/A7205508-HDR-Edit-portrait.webp" },
        { alt: "Camille in Studio", src: "people/A7201742-Edit-portrait.webp" },
        { alt: "Richard in his favorite green shirt", src: "people/A7204813-Edit-portrait.webp" },
        { alt: "Em in Bryant Park", src: "people/DSC00436-Edit-portrait.webp" },
        { alt: "Jenn in an alley", src: "people/A7209214-Edit-portrait.webp" },
        { alt: "Michael", src: "people/A7404298-portrait.webp" },
        { alt: "Ben over Rio Grande", src: "people/DSC07716-Edit-portrait.webp" },
        { alt: "Natalie at Liberty State Park", src: "people/A7200334-portrait.webp" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={PeopleStyle.container}>
            <Helmet>
                <title>People | Anthony Freay</title>
                <meta name="description" content="Portraits by Anthony Freay. Capturing candid and lifestyle moments around NYC." />
                <link rel="canonical" href="https://anthonyfreay.com/people" />

                <meta property="og:title" content="People | Anthony Freay" />
                <meta property="og:description" content="Portraits by Anthony Freay. Capturing candid and lifestyle moments around NYC." />
                <meta property="og:image" content="https://anthonyfreay.com/covers/people_cover.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/people" />

                <meta name="twitter:title" content="People | Anthony Freay" />
                <meta name="twitter:description" content="Portraits by Anthony Freay. Capturing candid and lifestyle moments around NYC." />
                <meta name="twitter:image" content="https://anthonyfreay.com/covers/people_cover.jpg" />
            </Helmet>
            <PageHeader title="People | Anthony Freay" />
            <Navbar className={PeopleStyle.navBar} />
            <div className={PeopleStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={PeopleStyle.footer} activePage={"people"} />
        </div>
    );
};

export default People;
