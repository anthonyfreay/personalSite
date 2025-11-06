import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { H as Helmet } from "../main.mjs";
import { P as PageHeader } from "./PageHeader-DeAhw2zP.js";
import { N as NavBar, F as Footer } from "./Footer-BOXKfvpz.js";
import { I as ImageGallery } from "./ImageGallery-VlgC3aE0.js";
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
import "react-lazy-load-image-component";
import "yet-another-react-lightbox";
/* empty css                */
const container = "_container_e1izb_8";
const mainContent = "_mainContent_e1izb_13";
const PeopleStyle = {
  container,
  mainContent
};
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
  ].map((image) => ({
    ...image,
    hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
    // Append '-hd' before the file extension
  }));
  return /* @__PURE__ */ jsxs("div", { className: PeopleStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "People | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Portraits by Anthony Freay. Capturing candid and lifestyle moments." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/people" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "People | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Portraits by Anthony Freay. Capturing candid and lifestyle moments." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/people_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/people" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "People | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Portraits by Anthony Freay. Capturing candid and lifestyle moments." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/people_cover.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "People | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: PeopleStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: PeopleStyle.mainContent, children: /* @__PURE__ */ jsx(ImageGallery, { images: imageData }) }),
    /* @__PURE__ */ jsx(Footer, { className: PeopleStyle.footer, activePage: "people" })
  ] });
};
export {
  People as default
};
