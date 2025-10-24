import React, { useState, useCallback, memo } from 'react';
import ImageGalleryStyle from './ImageGallery.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImageGallery = memo(({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const openLightbox = useCallback((index) => {
        setActiveImage(index);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    // Map images to include HD source
    const lightboxImages = images.map(image => ({
        ...image,
        src: image.hdSrc
    }));

    return (
        <div>
            <div className={ImageGalleryStyle.gallery}>
                {images.map((image, index) => {
                    return (
                        <div key={image.src} className={ImageGalleryStyle.galleryItem} onClick={() => openLightbox(index)}>
                            {index < 6 ? (
                                <img src={image.src} alt={image.alt} />
                            ) : (
                                <LazyLoadImage
                                    src={image.src}
                                    alt={image.alt}
                                    effect="blur"
                                    threshold={10}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {lightboxOpen && (
                <LightboxComponent
                    images={lightboxImages}
                    open={lightboxOpen}
                    activeImage={activeImage}
                    onClose={closeLightbox}
                    animation={{ fade: 0 }}
                />
            )}
        </div>
    );
});

const LightboxComponent = ({ images, open, activeImage, onClose }) => {
    return (
        <div className={ImageGalleryStyle.lightboxContainer}>
            <Lightbox
                slides={images}
                open={open}
                index={activeImage}
                controller={{ closeOnBackdropClick: true }}
                close={onClose}
                className={ImageGalleryStyle.lightbox}
                animation={{ swipe: 0 }}
            />
        </div>
    );
};

export default ImageGallery;