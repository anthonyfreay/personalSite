import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import CarsStyle from "./Cars.module.css"
// import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import MasonryImageGallery from '../../Util/MasonryImageGallery/MasonryImageGallery';
import Footer from '../../Util/Footer/Footer'


const Cars = () => {
    // TODO: Separate into horizontalImages and verticalImages arrays for better organization
    // Use the new MasonryImageGallery API: <MasonryImageGallery horizontalImages={horizontal} verticalImages={vertical} />
    const imageData = [
        { alt: "", src: "cars/A7406517-Enhanced-NR-color.webp" },

        { alt: "", src: "cars/A7409342-color.webp" },
        { alt: "", src: "cars/DSC04341-bw.webp" },
        { alt: "", src: "cars/A7200465-color.webp" },
        { alt: "", src: "cars/A7200477-color.webp" },

        { alt: "", src: "cars/A7405676-color.webp" },

        { alt: "", src: "cars/A7200475-color.webp" },
        { alt: "", src: "cars/A7406716-bw.webp" },
        { alt: "", src: "cars/A7200462-color.webp" },
        { alt: "", src: "cars/A7200488-color.webp" },

        { alt: "", src: "cars/A7204618-color.webp" },

        { alt: "", src: "cars/A7408915-color.webp" },
        { alt: "", src: "cars/A7406778-color.webp" },
        { alt: "", src: "cars/A7406726-bw.webp" },
        { alt: "", src: "cars/A7406734-color.webp" },

        { alt: "", src: "cars/A7406721-bw.webp" },

        { alt: "", src: "cars/A7406717-bw.webp" },
        { alt: "", src: "cars/A7209958-color.webp" },
        { alt: "", src: "cars/A7409382-color.webp" },
        { alt: "", src: "cars/A7200461-color.webp" },


    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={CarsStyle.container}>
            <PageHeader title="Cars | Anthony Freay" />
            <Navbar className={CarsStyle.navBar} />
            <div className={CarsStyle.mainContent}>
                <MasonryImageGallery images={imageData} />
            </div>
            <Footer className={CarsStyle.footer} activePage={"cars"} />
        </div>
    );
};

export default Cars;
