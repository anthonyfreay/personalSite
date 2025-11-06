import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { H as Helmet } from "../main.mjs";
import { P as PageHeader } from "./PageHeader-DeAhw2zP.js";
import { N as NavBar, F as Footer } from "./Footer-BOXKfvpz.js";
import { M as MasonryImageGallery } from "./MasonryImageGallery-BC9fjmw8.js";
import "react-router-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "framer-motion";
import "react-ga4";
import "@unhead/vue/server";
import "vue";
import "react-bootstrap";
import "./Icons-I_iM_jsO.js";
import "react-icons/fa/index.esm.js";
import "react-masonry-css";
import "yet-another-react-lightbox";
/* empty css                */
const container = "_container_e1izb_8";
const mainContent = "_mainContent_e1izb_13";
const CarsStyle = {
  container,
  mainContent
};
const Cars = () => {
  const [horizontalImages, setHorizontalImages] = useState([]);
  const [verticalImages, setVerticalImages] = useState([]);
  useEffect(() => {
    const horizontal = [
      { alt: "", src: "cars/A7406517-Enhanced-NR-color.webp" },
      { alt: "", src: "cars/A7405676-color.webp" },
      { alt: "", src: "cars/A7204618-color.webp" },
      { alt: "", src: "cars/A7406721-bw.webp" }
    ].map((image) => ({
      ...image,
      hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
      // Append '-hd' before the file extension
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
      { alt: "", src: "cars/A7200461-color.webp" }
    ].map((image) => ({
      ...image,
      hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
      // Append '-hd' before the file extension
    }));
    setHorizontalImages(horizontal);
    setVerticalImages(vertical);
  }, []);
  [...horizontalImages, ...verticalImages];
  return /* @__PURE__ */ jsxs("div", { className: CarsStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Cars | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Automotive photography by Anthony Freay. Classic cars, modern designs, and everything in between." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/cars" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Cars | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Automotive photography by Anthony Freay. Classic cars, modern designs, and everything in between." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/cars_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/cars" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Cars | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Automotive photography by Anthony Freay. Classic cars, modern designs, and everything in between." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/cars_cover.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Cars | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: CarsStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: CarsStyle.mainContent, children: /* @__PURE__ */ jsx(MasonryImageGallery, { horizontalImages, verticalImages }) }),
    /* @__PURE__ */ jsx(Footer, { className: CarsStyle.footer, activePage: "cars" })
  ] });
};
export {
  Cars as default
};
