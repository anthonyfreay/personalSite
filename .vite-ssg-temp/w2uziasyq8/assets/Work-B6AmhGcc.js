import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { H as Helmet } from "../main.mjs";
import { P as PageHeader } from "./PageHeader-DeAhw2zP.js";
import { N as NavBar, F as Footer } from "./Footer-BOXKfvpz.js";
import { Link } from "react-router-dom";
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
const container = "_container_k2vwz_12";
const mainContent = "_mainContent_k2vwz_18";
const coverImage = "_coverImage_k2vwz_31";
const WorkStyle = {
  container,
  mainContent,
  coverImage
};
const categories = [
  { path: "/live", image: "live/A7400474-music.webp", label: "Live" },
  { path: "/bw", image: "covers/bw_cover.jpg", label: "B & W" },
  { path: "/people", image: "covers/people_cover.jpg", label: "People" },
  { path: "/places", image: "places/A7406615-scapes.webp", label: "Places" },
  { path: "/cars", image: "covers/cars_cover.jpg", label: "Cars" },
  { path: "/events", image: "events/A7404835-color-hd.webp", label: "Events" }
];
const CategoryLink = ({ path, image, label }) => /* @__PURE__ */ jsx(Link, { to: path, className: WorkStyle.coverImage, children: /* @__PURE__ */ jsxs("figure", { children: [
  /* @__PURE__ */ jsx("img", { alt: label, src: image, className: WorkStyle.coverImage }),
  /* @__PURE__ */ jsx("figcaption", { children: label })
] }) });
const Work = () => {
  return /* @__PURE__ */ jsxs("div", { className: WorkStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Work | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "A collection of photography work by Anthony Freay, showcasing portraits, concerts, and events." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/work" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Work | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "A collection of photography work by Anthony Freay, showcasing portraits, concerts, and events." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/live_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/work" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Work | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "A collection of photography work by Anthony Freay, showcasing portraits, concerts, and events." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/live_cover.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Work | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: WorkStyle.navBar, activePage: "work" }),
    /* @__PURE__ */ jsx("div", { className: WorkStyle.mainContent, children: categories.map((category) => /* @__PURE__ */ jsx(CategoryLink, { ...category }, category.label)) }),
    /* @__PURE__ */ jsx(Footer, { className: WorkStyle.footer })
  ] });
};
export {
  Work as default
};
