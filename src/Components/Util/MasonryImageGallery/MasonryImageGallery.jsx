import React, { useState, useCallback, useEffect, useRef, memo } from 'react';
import Masonry from 'react-masonry-css'; // Import the library
import MasonryImageGalleryStyle from './MasonryImageGallery.module.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const MasonryImageGallery = memo(({ horizontalImages = [], verticalImages = [], images = [] }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const openLightbox = useCallback((index) => {
        setActiveImage(index);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    // Smart distribution algorithm to evenly organize horizontal and vertical images
    const organizedImages = React.useMemo(() => {
        // If using legacy 'images' prop, return as-is for backward compatibility
        if (images.length > 0) {
            return images;
        }

        // Tag images with their orientation
        const horizontal = horizontalImages.map(img => ({ ...img, orientation: 'horizontal' }));
        const vertical = verticalImages.map(img => ({ ...img, orientation: 'vertical' }));

        // Interleave images to distribute them evenly
        const result = [];
        const maxLength = Math.max(horizontal.length, vertical.length);
        
        // Calculate ratio for distribution
        const hRatio = horizontal.length / maxLength;
        const vRatio = vertical.length / maxLength;
        
        let hIndex = 0;
        let vIndex = 0;
        
        // Distribute images based on their ratio to maintain even spread
        for (let i = 0; i < maxLength * 2; i++) {
            const shouldAddHorizontal = hIndex < horizontal.length && 
                (vIndex >= vertical.length || (hIndex / (horizontal.length || 1)) <= (vIndex / (vertical.length || 1)));
            
            if (shouldAddHorizontal) {
                result.push(horizontal[hIndex]);
                hIndex++;
            } else if (vIndex < vertical.length) {
                result.push(vertical[vIndex]);
                vIndex++;
            }
        }
        
        return result;
    }, [horizontalImages, verticalImages, images]);

    // Map images to include HD source
    const lightboxImages = organizedImages.map(image => ({
        ...image,
        src: image.hdSrc
    }));

    // Define the breakpoints and corresponding number of columns (only even numbers)
    const breakpointColumnsObj = {
        default: 4,
        1100: 4,
        900: 2,
        490: 2
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={MasonryImageGalleryStyle.gallery}
                columnClassName={MasonryImageGalleryStyle.galleryItem}>
                {organizedImages.map((image, index) => {
                    return (
                        <div key={image.src} onClick={() => openLightbox(index)}>
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    );
                })}
            </Masonry>

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

const LazyLoadImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            });
        });

        observer.observe(imgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={loaded ? src : ''}
            alt={alt}
            style={loaded ? {} : { background: '#f6f6f6' }}
        />
    );
};

const LightboxComponent = ({ images, open, activeImage, onClose }) => {
    return (
        <div className={MasonryImageGalleryStyle.lightboxContainer}>
            <Lightbox
                slides={images}
                open={open}
                index={activeImage}
                controller={{ closeOnBackdropClick: true }}
                close={onClose}
                className={MasonryImageGalleryStyle.lightbox}
                animation={{ swipe: 0 }}
            />
        </div>
    );
};

export default MasonryImageGallery;