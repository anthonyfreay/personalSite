import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import CarsStyle from "./Cars.module.css"
// import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import MasonryImageGallery from '../../Util/MasonryImageGallery/MasonryImageGallery';
import Footer from '../../Util/Footer/Footer'


const Cars = () => {
    const [horizontalImages, setHorizontalImages] = useState([]);
    const [verticalImages, setVerticalImages] = useState([]);

    useEffect(() => {
        const horizontal = [
            { alt: "", src: "cars/A7406517-Enhanced-NR-color.webp" },
            { alt: "", src: "cars/A7405676-color.webp" },
            { alt: "", src: "cars/A7204618-color.webp" },
            { alt: "", src: "cars/A7406721-bw.webp" },
        ].map(image => ({
            ...image,
            hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
        }));
        const vertical = [
            { alt: "", src: "cars/A7409382-color.webp" },
            { alt: "", src: "cars/A7409342-color.webp" },
            { alt: "", src: "cars/DSC04341-bw.webp" },
            { alt: "", src: "cars/A7200465-color.webp" },
            { alt: "", src: "cars/A7200477-color.webp" },

            { alt: "", src: "cars/A7200475-color.webp" },
            { alt: "", src: "cars/A7406716-bw.webp" },
            { alt: "", src: "cars/A7200462-color.webp" },
            { alt: "", src: "cars/A7200488-color.webp" },

            { alt: "", src: "cars/A7408915-color.webp" },
            { alt: "", src: "cars/A7406778-color.webp" },
            { alt: "", src: "cars/A7406726-bw.webp" },
            { alt: "", src: "cars/A7406734-color.webp" },

            { alt: "", src: "cars/A7406717-bw.webp" },
            { alt: "", src: "cars/A7209958-color.webp" },
            { alt: "", src: "cars/A7200461-color.webp" },
        ].map(image => ({
            ...image,
            hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
        }));

        setHorizontalImages(horizontal);
        setVerticalImages(vertical);
    }, []);

    const allImages = [...horizontalImages, ...verticalImages];

    return (
        <div className={CarsStyle.container}>
            <Helmet>
                <title>Cars | Anthony Freay</title>
                <meta name="description" content="Automotive photography by Anthony Freay. Classic cars, modern designs, and everything in between." />
                <link rel="canonical" href="https://anthonyfreay.com/cars" />

                <meta property="og:title" content="Cars | Anthony Freay" />
                <meta property="og:description" content="Automotive photography by Anthony Freay. Classic cars, modern designs, and everything in between." />
                <meta property="og:image" content="https://anthonyfreay.com/covers/cars_cover.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/cars" />

                <meta name="twitter:title" content="Cars | Anthony Freay" />
                <meta name="twitter:description" content="Automotive photography by Anthony Freay. Classic cars, modern designs, and everything in between." />
                <meta name="twitter:image" content="https://anthonyfreay.com/covers/cars_cover.jpg" />
            </Helmet>
            <PageHeader title="Cars | Anthony Freay" />
            <Navbar className={CarsStyle.navBar} />
            <div className={CarsStyle.mainContent}>
                <MasonryImageGallery horizontalImages={horizontalImages} verticalImages={verticalImages} />
            </div>
            <Footer className={CarsStyle.footer} activePage={"cars"} />
        </div>
    );
};

export default Cars;
