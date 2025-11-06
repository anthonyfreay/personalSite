import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useState, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
/* empty css                */
const gallery = "_gallery_wxnwz_13";
const lightbox = "_lightbox_wxnwz_58";
const galleryItem = "_galleryItem_wxnwz_73";
const ImageGalleryStyle = {
  gallery,
  lightbox,
  galleryItem
};
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
  const lightboxImages = images.map((image) => ({
    ...image,
    src: image.hdSrc
  }));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: ImageGalleryStyle.gallery, children: images.map((image, index) => {
      return /* @__PURE__ */ jsx("div", { className: ImageGalleryStyle.galleryItem, onClick: () => openLightbox(index), children: index < 6 ? /* @__PURE__ */ jsx("img", { src: image.src, alt: image.alt }) : /* @__PURE__ */ jsx(
        LazyLoadImage,
        {
          src: image.src,
          alt: image.alt,
          effect: "blur",
          threshold: 10
        }
      ) }, image.src);
    }) }),
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
const LightboxComponent = ({ images, open, activeImage, onClose }) => {
  return /* @__PURE__ */ jsx("div", { className: ImageGalleryStyle.lightboxContainer, children: /* @__PURE__ */ jsx(
    Lightbox,
    {
      slides: images,
      open,
      index: activeImage,
      controller: { closeOnBackdropClick: true },
      close: onClose,
      className: ImageGalleryStyle.lightbox,
      animation: { swipe: 0 }
    }
  ) });
};
export {
  ImageGallery as I
};
