import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import ApparelStyle from "./Apparel.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Apparel = () => {
    const imageData = [
        { alt: "Inspired by Brent Faiyaz", src: "apparel/lost-kids_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Frank Ocean", src: "apparel/TEARS_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by brent ii", src: "apparel/EMILY_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Good Days", src: "apparel/WAR-IN-My-MIND_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Sweet Life", src: "apparel/SWEET-LIFE_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Fun Girl", src: "apparel/FUN-GIRL_TSHIRT_MOCKUP.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={ApparelStyle.container}>
            <Helmet>
                <title>Apparel | Anthony Freay</title>
                <meta name="description" content="A collection of apparel designs by Anthony Freay, inspired by music and culture." />
                <link rel="canonical" href="https://anthonyfreay.com/apparel" />

                <meta property="og:title" content="Apparel | Anthony Freay" />
                <meta property="og:description" content="A collection of apparel designs by Anthony Freay, inspired by music and culture." />
                <meta property="og:image" content="https://anthonyfreay.com/covers/apparel_cover.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/apparel" />

                <meta name="twitter:title" content="Apparel | Anthony Freay" />
                <meta name="twitter:description" content="A collection of apparel designs by Anthony Freay, inspired by music and culture." />
                <meta name="twitter:image" content="https://anthonyfreay.com/covers/apparel_cover.jpg" />
            </Helmet>
            <PageHeader title="Apparel | Anthony Freay" />
            <Navbar className={ApparelStyle.navBar} />
            <div className={ApparelStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={ApparelStyle.footer} activePage={"apparel"} />
        </div>
    );
};

export default Apparel;
