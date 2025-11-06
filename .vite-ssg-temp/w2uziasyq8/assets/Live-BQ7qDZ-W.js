import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { P as PageHeader } from "./PageHeader-DeAhw2zP.js";
import { H as Helmet } from "../main.mjs";
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
const LiveStyle = {
  container,
  mainContent
};
const Live = () => {
  const imageData = [
    // RED
    { alt: "Tyler, the Creator", src: "/live/DSC05584-music.webp" },
    { alt: "Anik Khan", src: "/live/A7206554-music.webp" },
    { alt: "Daniel Caesar", src: "/live/DSC02184-music.webp" },
    { alt: "Alexa Porat", src: "/live/A7400207-Edit-music.webp" },
    { alt: "Cautious Clay", src: "/live/RX704864-music.webp" },
    { alt: "J Balvin", src: "/live/RX709066-Edit-music.webp" },
    { alt: "Lizzie McAlpine", src: "/live/RX704131-music.webp" },
    // ORANGE
    { alt: "Gracie Abrams", src: "/live/RX701806-music.webp" },
    // YELLOW
    { alt: "Gracie Abrams", src: "/live/RX701741-Enhanced-NR-music.webp" },
    { alt: "Tiffany Day", src: "/live/A7400474-music.webp" },
    { alt: "Tai Verdes", src: "/live/RX708483-music.webp" },
    { alt: "Cautious Clay", src: "/live/RX704917-music.webp" },
    // GREEN
    { alt: "Alexa Porat", src: "/live/A7400244-music.webp" },
    { alt: "Lizie McAlpine", src: "/live/RX704049-Enhanced-NR-Edit-music.webp" },
    { alt: "WowGr8", src: "/live/RX703010-Enhanced-NR-Edit-music.webp" },
    // BLUE
    { alt: "Tyler, The Creator singing sad", src: "/live/DSC05554-Enhanced-NR-music.webp" },
    { alt: "Gracie Abrams", src: "/live/RX704104-Edit-2-music.webp" },
    { alt: "Jack Harlow", src: "/live/DSC08431-Edit-music.webp" },
    { alt: "JUNO", src: "/live/A7400058-music.webp" },
    { alt: "New Politics", src: "/live/DSC02629-music.webp" },
    { alt: "Olu", src: "/live/RX702447-music.webp" },
    { alt: "Tyler, The Creator sillouette", src: "/live/DSC05693-Enhanced-NR-music.webp" },
    // VIOLET / MAGENTA
    { alt: "Alexander23", src: "/live/A7207787-music.webp" },
    { alt: "Jaden Smith", src: "/live/DSC04170-music.webp" },
    { alt: "Tyler, The Creator on Stage", src: "/live/DSC05678-Enhanced-NR-music.webp" },
    { alt: "X Lovers", src: "/live/A7207540-music.webp" },
    { alt: "Chelsea Cutler", src: "/live/A7208496-music.webp" },
    { alt: "Sango", src: "/live/A7206805-music.webp" },
    { alt: "Lizzie McAlpine", src: "/live/RX704229-Enhanced-NR-Edit-music.webp" },
    { alt: "Lauv", src: "/live/DSC06611-music.webp" },
    { alt: "Olu", src: "/live/RX703590-music.webp" },
    { alt: "Nicki Minaj", src: "/live/RX709090-music.webp" }
  ].map((image) => ({
    ...image,
    hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
    // Append '-hd' before the file extension
  }));
  return /* @__PURE__ */ jsxs("div", { className: LiveStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Live Music | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Concert and live music photography by Anthony Freay. Featuring artists like Tyler, the Creator, Daniel Caesar, and more." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/live" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Live Music | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Concert and live music photography by Anthony Freay. Featuring artists like Tyler, the Creator, Daniel Caesar, and more." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/live_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/live" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Live Music | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Concert and live music photography by Anthony Freay. Featuring artists like Tyler, the Creator, Daniel Caesar, and more." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/live_cover.jpg" }),
      imageData.slice(0, 6).map((image, index) => /* @__PURE__ */ jsx("link", { rel: "preload", as: "image", href: image.src }, index))
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Live | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: LiveStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: LiveStyle.mainContent, children: /* @__PURE__ */ jsx(ImageGallery, { images: imageData }) }),
    /* @__PURE__ */ jsx(Footer, { className: LiveStyle.footer, activePage: "live" })
  ] });
};
export {
  Live as default
};
