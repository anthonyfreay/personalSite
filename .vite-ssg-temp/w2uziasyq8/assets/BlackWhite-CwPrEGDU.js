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
const BlackWhiteStyle = {
  container,
  mainContent
};
const BlackWhite = () => {
  const imageData = [
    { alt: "Tyler, the Creator", src: "bw/DSC05585-bw.webp" },
    { alt: "City from on High", src: "bw/A7202360-bw.webp" },
    { alt: "Exhausted", src: "bw/DSC01524-bw.webp" },
    { alt: "Chrysler Building", src: "bw/A7202339-bw.webp" },
    { alt: "Goldlink", src: "bw/DSC02678-bw.webp" },
    { alt: "10th Ave", src: "bw/DSC01358-bw.webp" },
    { alt: "Empire State Building", src: "bw/A7202347-bw.webp" },
    { alt: "Defund the Police", src: "bw/DSC02466-bw.webp" },
    { alt: "Daniel Caesar", src: "bw/DSC01930-bw.webp" },
    { alt: "Biking", src: "bw/A7406794-bw.webp" },
    { alt: "Gently Trash in NYC", src: "bw/A7406787-bw.webp" },
    { alt: "Jack Harlow", src: "bw/DSC08655-bw.webp" },
    { alt: "Save the kids", src: "bw/DSC07973-bw.webp" },
    { alt: "J Balvin", src: "bw/RX709059-Edit-bw.webp" },
    { alt: "Over-looked", src: "bw/DSC01515-bw.webp" },
    { alt: "Saron Crenshaw", src: "bw/A7207520-bw.webp" },
    { alt: "Arize in Brooklyn", src: "bw/A7201582-Edit-portrait.webp" },
    { alt: "Chelsea Cutler", src: "bw/A7208259-Edit-bw.webp" },
    { alt: "Ice in my Veins", src: "bw/DSC02743-bw.webp" },
    { alt: "Taxi Driver", src: "bw/DSC08988-bw.webp" },
    { alt: "Harbour along Oregon Coast", src: "bw/A7204510-bw.webp" },
    { alt: "Scary reflection in a window of an Oregon house", src: "bw/A7204635-bw.webp" },
    { alt: "Skating sideways", src: "bw/A7405342-bw.webp" },
    { alt: "Crash landing", src: "bw/A7405350-bw.webp" },
    { alt: "Mexico City Square", src: "bw/A7406217-bw.webp" },
    { alt: "Family on a Motorcycle", src: "bw/RX702300-bw.webp" },
    { alt: "Alone in the parking lot", src: "bw/A7208874-bw.webp" }
  ].map((image) => ({
    ...image,
    hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
    // Append '-hd' before the file extension
  }));
  return /* @__PURE__ */ jsxs("div", { className: BlackWhiteStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Black & White | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "A collection of black and white photography by Anthony Freay. Rich, timeless, and classic shots." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/bw" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Black & White | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "A collection of black and white photography by Anthony Freay. Rich, timeless, and classic shots." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/bw_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/bw" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Black & White | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "A collection of black and white photography by Anthony Freay. Rich, timeless, and classic shots." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/bw_cover.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Black & White | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: BlackWhiteStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: BlackWhiteStyle.mainContent, children: /* @__PURE__ */ jsx(ImageGallery, { images: imageData }) }),
    /* @__PURE__ */ jsx(Footer, { className: BlackWhiteStyle.footer, activePage: "bw" })
  ] });
};
export {
  BlackWhite as default
};
