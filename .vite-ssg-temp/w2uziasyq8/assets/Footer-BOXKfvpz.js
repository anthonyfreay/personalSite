import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { I as Icons } from "./Icons-I_iM_jsO.js";
const navbar = "_navbar_7u4c3_3";
const navContainer = "_navContainer_7u4c3_9";
const navBrand = "_navBrand_7u4c3_14";
const activeNavLink = "_activeNavLink_7u4c3_24";
const navItem = "_navItem_7u4c3_33";
const NavStyle = {
  navbar,
  navContainer,
  navBrand,
  activeNavLink,
  navItem
};
function NavBar({ activePage }) {
  return /* @__PURE__ */ jsxs(Navbar, { expand: "lg", className: NavStyle.navbar, children: [
    /* @__PURE__ */ jsx(Navbar.Brand, { as: Link, to: "/", className: NavStyle.navBrand, children: "Anthony Freay" }),
    /* @__PURE__ */ jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
    /* @__PURE__ */ jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: /* @__PURE__ */ jsxs(Nav, { className: `${NavStyle.navContainer} ml-auto`, children: [
      /* @__PURE__ */ jsx(
        Nav.Link,
        {
          as: Link,
          to: "/work",
          className: `${NavStyle.navItem} ${activePage === "work" ? NavStyle.activeNavLink : ""}`,
          children: "Work"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://anthonyfreay.darkroom.com/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: NavStyle.navItem,
          children: "Prints"
        }
      ),
      /* @__PURE__ */ jsx(
        Nav.Link,
        {
          as: Link,
          to: "/contact",
          className: `${NavStyle.navItem} ${activePage === "contact" ? NavStyle.activeNavLink : ""}`,
          children: "Contact"
        }
      )
    ] }) })
  ] });
}
const footer = "_footer_1oorc_3";
const pageSection = "_pageSection_1oorc_9";
const pages = "_pages_1oorc_15";
const copyright = "_copyright_1oorc_22";
const footerActive = "_footerActive_1oorc_29";
const FooterStyles = {
  footer,
  pageSection,
  pages,
  copyright,
  footerActive
};
function Footer({ activePage }) {
  return /* @__PURE__ */ jsxs("div", { className: `${FooterStyles.footer} ${FooterStyles.container}`, id: FooterStyles.footer, children: [
    /* @__PURE__ */ jsxs("div", { className: FooterStyles.pageSection, children: [
      /* @__PURE__ */ jsx(Link, { to: "/live", className: `${FooterStyles.pages} ${activePage === "live" ? FooterStyles.footerActive : ""}`, children: "Live" }),
      /* @__PURE__ */ jsx(Link, { to: "/bw", className: `${FooterStyles.pages} ${activePage === "bw" ? FooterStyles.footerActive : ""}`, children: "B & W" }),
      /* @__PURE__ */ jsx(Link, { to: "/people", className: `${FooterStyles.pages} ${activePage === "people" ? FooterStyles.footerActive : ""}`, children: "People" }),
      /* @__PURE__ */ jsx(Link, { to: "/places", className: `${FooterStyles.pages} ${activePage === "places" ? FooterStyles.footerActive : ""}`, children: "Places" }),
      /* @__PURE__ */ jsx(Link, { to: "/cars", className: `${FooterStyles.pages} ${activePage === "cars" ? FooterStyles.footerActive : ""}`, children: "Cars" }),
      /* @__PURE__ */ jsx(Link, { to: "/events", className: `${FooterStyles.pages} ${activePage === "events" ? FooterStyles.footerActive : ""}`, children: "Events" }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: `${FooterStyles.pages} ${activePage === "contact" ? FooterStyles.footerActive : ""}`, children: "Contact" })
    ] }),
    /* @__PURE__ */ jsx(Icons, { className: FooterStyles.icons, iconSize: 30 }),
    /* @__PURE__ */ jsxs("p", { className: FooterStyles.copyright, children: [
      "Copyright © ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " All Rights Reserved."
    ] }),
    "        "
  ] });
}
export {
  Footer as F,
  NavBar as N
};
