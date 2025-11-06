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
const PlacesStyle = {
  container,
  mainContent
};
const Places = () => {
  const [horizontalImages, setHorizontalImages] = useState([]);
  const [verticalImages, setVerticalImages] = useState([]);
  useEffect(() => {
    const horizontal = [
      { alt: "", src: "places/A7407286-scapes.webp" },
      { alt: "", src: "places/A7405233-scapes.webp" },
      { alt: "", src: "places/RX703948-scapes.webp" },
      { alt: "", src: "places/A7204930-scapes.webp" },
      { alt: "", src: "places/RX703316-scapes.webp" },
      { alt: "", src: "places/RX702154-scapes.webp" },
      { alt: "", src: "places/A7205360-color.webp" },
      { alt: "", src: "places/RX706732-color.webp" },
      { alt: "", src: "places/RX706732-color.webp" },
      { alt: "", src: "places/RX706732-color.webp" },
      { alt: "", src: "places/A7405906-color.webp" },
      { alt: "", src: "places/A7407432-scapes.webp" },
      { alt: "", src: "places/A7206508-Edit-scapes.webp" },
      { alt: "", src: "places/RX702886-scapes.webp" },
      { alt: "", src: "places/A7407357-scapes.webp" },
      { alt: "", src: "places/RX702276-scapes.webp" },
      { alt: "", src: "places/A7406572-scapes.webp" },
      { alt: "", src: "places/A7204586-HDR-scapes.webp" },
      { alt: "", src: "places/A7407228-scapes.webp" },
      { alt: "", src: "places/A7401638-scapes.webp" },
      { alt: "", src: "places/A7405944-color.webp" },
      { alt: "", src: "places/A7407519-scapes.webp" },
      { alt: "", src: "places/RX702351-scapes.webp" },
      { alt: "", src: "places/A7405591-color.webp" },
      { alt: "", src: "places/A7406556-Edit-scapes.webp" }
    ].map((image) => ({
      ...image,
      hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
      // Append '-hd' before the file extension
    }));
    const vertical = [
      { alt: "Beams", src: "places/A7202190-scapes.webp" },
      { alt: "Tree", src: "places/A7406558-scapes.webp" },
      { alt: "Coney Island Rollercoaster", src: "places/RX706719-color.webp" },
      { alt: "Charlseton", src: "places/A7406615-scapes.webp" },
      { alt: "Queens", src: "places/A7202338-scapes.webp" },
      { alt: "Galapagos Summer", src: "places/A7401731-Enhanced-NR-color.webp" },
      { alt: "Multnomah Falls", src: "places/A7204120-scapes.webp" },
      { alt: "San Francisco Summer", src: "places/A7205351-color.webp" },
      { alt: "Catskills Lake", src: "places/A7206286-scapes.webp" },
      { alt: "Ice Rink", src: "places/A7202369-scapes.webp" },
      { alt: "Paradise", src: "places/A7407416-scapes.webp" },
      { alt: "Columbus Circle on a Rainy Weekday", src: "places/DSC09254-scapes.webp" },
      { alt: "Pigeon Guillemot on Oregon Coast", src: "places/A7204896-scapes.webp" },
      { alt: "City Stacks", src: "places/A7202361-scapes.webp" },
      { alt: "Mom's Apartment", src: "places/RX702292-scapes.webp" },
      { alt: "JETski", src: "places/A7407477-scapes.webp" },
      { alt: "San Francisco street sign", src: "places/A7205014-color.webp" },
      { alt: "Teleferico Quito", src: "places/RX703340-scapes.webp" },
      { alt: "Sitting in the Sun", src: "places/A7407441-scapes.webp" },
      { alt: "Muir Woods", src: "places/A7205161-color.webp" },
      { alt: "San Francisco Sunset", src: "places/A7205308-color.webp" },
      { alt: "Kids in Galapagos", src: "places/A7401603-scapes.webp" },
      { alt: "Pretty Oregon Coast line", src: "places/A7204601-HDR-scapes.webp" },
      { alt: "Kids playing in the Sand", src: "places/A7407388-scapes.webp" },
      { alt: "Sea Lions on the Oregon Coast", src: "places/A7204910-scapes.webp" },
      { alt: "Garret Mountain Basketball Court", src: "places/A7209983-Edit-scapes.webp" },
      { alt: "Volcano in Ecuador", src: "places/A7402155-HDR-scapes.webp" },
      { alt: "Simon Bolivar Park", src: "places/RX702078-scapes.webp" },
      { alt: "Venice Beach", src: "places/A7405346-color.webp" },
      { alt: "International Tennis Hall of Fame", src: "places/A7409292-color.webp" },
      { alt: "Me n You", src: "places/A7406508-scapes.webp" },
      { alt: "Guayaquil Malecon", src: "places/RX702144-scapes.webp" },
      { alt: "Guayaquil Highway", src: "places/RX702346-scapes.webp" },
      { alt: "", src: "places/A7401732-Enhanced-NR-color.webp" }
    ].map((image) => ({
      ...image,
      hdSrc: image.src.replace(/(\.\w+)$/, "-hd$1")
      // Append '-hd' before the file extension
    }));
    setHorizontalImages(horizontal);
    setVerticalImages(vertical);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: PlacesStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Places | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Travel and street photography by Anthony Freay. Exploring cities, landscapes, and the moments in between." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/places" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Places | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Travel and street photography by Anthony Freay. Exploring cities, landscapes, and the moments in between." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/places/A7406615-scapes.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/places" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Places | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Travel and street photography by Anthony Freay. Exploring cities, landscapes, and the moments in between." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/places/A7406615-scapes.webp" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Places | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { className: PlacesStyle.navBar }),
    /* @__PURE__ */ jsx("div", { className: PlacesStyle.mainContent, children: /* @__PURE__ */ jsx(MasonryImageGallery, { horizontalImages, verticalImages }) }),
    /* @__PURE__ */ jsx(Footer, { className: PlacesStyle.footer, activePage: "places" })
  ] });
};
export {
  Places as default
};
