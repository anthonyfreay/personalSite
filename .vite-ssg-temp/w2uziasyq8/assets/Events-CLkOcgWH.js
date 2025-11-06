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
const EventsStyle = {
  container,
  mainContent
};
const Events = () => {
  const [horizontalImages, setHorizontalImages] = useState([]);
  const [verticalImages, setVerticalImages] = useState([]);
  useEffect(() => {
    const horizontal = [
      { "alt": "", "src": "events/A7401031-color.webp" },
      { "alt": "", "src": "events/A7207716-color.webp" },
      { "alt": "", "src": "events/A7400919-color.webp" },
      { "alt": "", "src": "events/A7206906-color.webp" },
      { "alt": "", "src": "events/A7400937-color.webp" },
      { "alt": "", "src": "events/A7402659-color.webp" },
      { "alt": "", "src": "events/A7207820-color.webp" },
      { "alt": "", "src": "events/A7208176-color.webp" },
      { "alt": "", "src": "events/A7407714-color.webp" },
      { "alt": "", "src": "events/A7402648-color.webp" },
      { "alt": "", "src": "events/A7207973-color.webp" },
      { "alt": "", "src": "events/A7208096-color.webp" },
      { "alt": "", "src": "events/A7208033-color.webp" },
      { "alt": "", "src": "events/A7207913-color.webp" },
      { "alt": "", "src": "events/A7207907-color.webp" },
      { "alt": "Maddie Miller Bday Cake", "src": "events/A7407589-color.webp" },
      { "alt": "", "src": "events/A7402701-color.webp" },
      { "alt": "", "src": "events/A7401049-color.webp" },
      { "alt": "", "src": "events/A7402526-color.webp" },
      { "alt": "Abuela and Candeladia", "src": "events/A7206966-color.webp" },
      { "alt": "", "src": "events/A7207859-color.webp" },
      { "alt": "", "src": "events/A7400963-color.webp" },
      { "alt": "", "src": "events/A7206546-color.webp" },
      { "alt": "", "src": "events/A7207942-color.webp" }
    ].map((image) => ({
      ...image,
      hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
    }));
    const vertical = [
      { "alt": "", "src": "events/A7404835-color.webp" },
      { "alt": "", "src": "events/A7404355-color.webp" },
      { "alt": "", "src": "events/A7401037-color.webp" },
      { "alt": "", "src": "events/A7404555-color.webp" },
      { "alt": "", "src": "events/A7404514-color.webp" },
      { "alt": "", "src": "events/A7404632-color.webp" },
      { "alt": "", "src": "events/A7407621-color.webp" },
      { "alt": "", "src": "events/A7207607-color.webp" },
      { "alt": "Mom, Cita, and Tio", "src": "events/A7206591-color.webp" },
      { "alt": "", "src": "events/A7206528-color.webp" },
      { "alt": "", "src": "events/A7404780-color.webp" },
      { "alt": "", "src": "events/A7402521-color.webp" },
      { "alt": "", "src": "events/A7404479-color.webp" },
      { "alt": "", "src": "events/A7206559-color.webp" },
      { "alt": "Jill and Kendall", "src": "events/A7401130-color.webp" },
      { "alt": "", "src": "events/A7401014-color.webp" },
      { "alt": "", "src": "events/A7407559-color.webp" },
      { "alt": "DJ Bolivar", "src": "events/A7206551-color.webp" },
      { "alt": "", "src": "events/A7206574-color.webp" },
      { "alt": "", "src": "events/A7404717-color.webp" },
      { "alt": "All The Way Down", "src": "events/A7207740-color.webp" },
      { "alt": "", "src": "events/A7405071-color.webp" },
      { "alt": "", "src": "events/A7206542-color.webp" },
      { "alt": "", "src": "events/A7207884-color.webp" },
      { "alt": "", "src": "events/A7402743-color.webp" },
      { "alt": "", "src": "events/A7206535-color.webp" },
      { "alt": "", "src": "events/A7405908-Enhanced-NR-color.webp" },
      { "alt": "", "src": "events/A7404868-color.webp" },
      { "alt": "Cake", "src": "events/A7206529-color.webp" },
      { "alt": "", "src": "events/A7206604-Enhanced-NR-color.webp" },
      { "alt": "", "src": "events/A7405960-color.webp" },
      { "alt": "", "src": "events/A7405730-Enhanced-NR-color.webp" }
    ].map((image) => ({
      ...image,
      hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
    }));
    setHorizontalImages(horizontal);
    setVerticalImages(vertical);
  }, []);
  const allImages = [...horizontalImages, ...verticalImages];
  return /* @__PURE__ */ jsxs("div", { className: EventsStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      allImages.slice(0, 6).map((image, index) => /* @__PURE__ */ jsx("link", { rel: "preload", as: "image", href: image.src }, index)),
      /* @__PURE__ */ jsx("title", { children: "Events | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Photography from events by Anthony Freay — candid moments, celebrations, and live gatherings." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/events" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/events" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Events | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Photography from events by Anthony Freay — candid moments, celebrations, and live gatherings." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/covers/events_cover.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:type", content: "image/jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: "Event photography by Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Events | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Photography from events by Anthony Freay — candid moments, celebrations, and live gatherings." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/covers/events_cover.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Events | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: EventsStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: EventsStyle.mainContent, children: /* @__PURE__ */ jsx(
      MasonryImageGallery,
      {
        horizontalImages,
        verticalImages
      }
    ) }),
    /* @__PURE__ */ jsx(Footer, { className: EventsStyle.footer, activePage: "events" })
  ] });
};
export {
  Events as default
};
