import { jsxs, jsx } from "react/jsx-runtime";
import React3, { memo, useState, useCallback, useRef, useEffect } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
/* empty css                */
const gallery = "_gallery_1acfj_13";
const galleryItem = "_galleryItem_1acfj_20";
const lightbox = "_lightbox_1acfj_50";
const MasonryImageGalleryStyle = {
  gallery,
  galleryItem,
  lightbox
};
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
  const organizedImages = React3.useMemo(() => {
    if (images.length > 0) {
      return images;
    }
    const horizontal = horizontalImages.map((img) => ({ ...img, orientation: "horizontal" }));
    const vertical = verticalImages.map((img) => ({ ...img, orientation: "vertical" }));
    const result = [];
    const maxLength = Math.max(horizontal.length, vertical.length);
    horizontal.length / maxLength;
    vertical.length / maxLength;
    let hIndex = 0;
    let vIndex = 0;
    for (let i = 0; i < maxLength * 2; i++) {
      const shouldAddHorizontal = hIndex < horizontal.length && (vIndex >= vertical.length || hIndex / (horizontal.length || 1) <= vIndex / (vertical.length || 1));
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
  const lightboxImages = organizedImages.map((image) => ({
    ...image,
    src: image.hdSrc
  }));
  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    900: 2,
    490: 2
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Masonry,
      {
        breakpointCols: breakpointColumnsObj,
        className: MasonryImageGalleryStyle.gallery,
        columnClassName: MasonryImageGalleryStyle.galleryItem,
        children: organizedImages.map((image, index) => {
          return /* @__PURE__ */ jsx("div", { onClick: () => openLightbox(index), children: /* @__PURE__ */ jsx(
            LazyLoadImage,
            {
              src: image.src,
              alt: image.alt
            }
          ) }, image.src);
        })
      }
    ),
    lightboxOpen && /* @__PURE__ */ jsx(
      LightboxComponent,
      {
        images: lightboxImages,
        open: lightboxOpen,
        activeImage,
        onClose: closeLightbox,
        animation: { fade: 0 }
      }
    )
  ] });
});
const LazyLoadImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
  return /* @__PURE__ */ jsx(
    "img",
    {
      ref: imgRef,
      src: loaded ? src : "",
      alt,
      style: loaded ? {} : { background: "#f6f6f6" }
    }
  );
};
const LightboxComponent = ({ images, open, activeImage, onClose }) => {
  return /* @__PURE__ */ jsx("div", { className: MasonryImageGalleryStyle.lightboxContainer, children: /* @__PURE__ */ jsx(
    Lightbox,
    {
      slides: images,
      open,
      index: activeImage,
      controller: { closeOnBackdropClick: true },
      close: onClose,
      className: MasonryImageGalleryStyle.lightbox,
      animation: { swipe: 0 }
    }
  ) });
};
export {
  MasonryImageGallery as M
};
