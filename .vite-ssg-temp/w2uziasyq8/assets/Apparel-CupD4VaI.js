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
const container = "_container_75pij_10";
const mainContent = "_mainContent_75pij_17";
const ApparelStyle = {
  container,
  mainContent
};
const Apparel = () => {
  const imageData = [
    { alt: "Inspired by Brent Faiyaz", src: "apparel/lost-kids_TSHIRT_MOCKUP.jpg" },
    { alt: "Inspired by Frank Ocean", src: "apparel/TEARS_TSHIRT_MOCKUP.jpg" },
    { alt: "Inspired by brent ii", src: "apparel/EMILY_TSHIRT_MOCKUP.jpg" },
    { alt: "Inspired by Good Days", src: "apparel/WAR-IN-My-MIND_TSHIRT_MOCKUP.jpg" },
    { alt: "Inspired by Sweet Life", src: "apparel/SWEET-LIFE_TSHIRT_MOCKUP.jpg" },
    { alt: "Inspired by Fun Girl", src: "apparel/FUN-GIRL_TSHIRT_MOCKUP.jpg" }
  ].map((image) => ({
    ...image,
    hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
    // Append '-hd' before the file extension
  }));
  return /* @__PURE__ */ jsxs("div", { className: ApparelStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Apparel | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "A collection of apparel designs by Anthony Freay, inspired by music and culture." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/apparel" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Apparel | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "A collection of apparel designs by Anthony Freay, inspired by music and culture." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/apparel_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/apparel" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Apparel | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "A collection of apparel designs by Anthony Freay, inspired by music and culture." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/apparel_cover.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Apparel | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: ApparelStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: ApparelStyle.mainContent, children: /* @__PURE__ */ jsx(ImageGallery, { images: imageData }) }),
    /* @__PURE__ */ jsx(Footer, { className: ApparelStyle.footer, activePage: "apparel" })
  ] });
};
export {
  Apparel as default
};
