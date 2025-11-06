import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { FaRegEnvelope, FaInstagram, FaLinkedin, FaRegFileAlt, FaGithub } from "react-icons/fa/index.esm.js";
const container = "_container_17yqk_1";
const icons = "_icons_17yqk_8";
const icon = "_icon_17yqk_8";
const IconsStyle = {
  container,
  icons,
  icon
};
function Icons({ iconSize = 35 }) {
  const emailSubject = encodeURIComponent("Website Inquiry - Anthony Freay");
  return /* @__PURE__ */ jsx("div", { className: `${IconsStyle.footer} ${IconsStyle.container}`, id: IconsStyle.footer, children: /* @__PURE__ */ jsxs("div", { className: IconsStyle.icons, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `mailto:anthonyfreay@gmail.com?subject=${emailSubject}`,
        "aria-label": "Email",
        title: "Email",
        className: IconsStyle.icon,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ jsx(FaRegEnvelope, { size: iconSize })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.instagram.com/anthonyfreay",
        "aria-label": "Visit Instagram Profile",
        title: "Instagram",
        className: IconsStyle.icon,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ jsx(FaInstagram, { size: iconSize })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.linkedin.com/in/anthonyfreay",
        "aria-label": "Visit LinkedIn Profile",
        title: "LinkedIn",
        className: IconsStyle.icon,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ jsx(FaLinkedin, { size: iconSize })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/resume",
        "aria-label": "View Résumé",
        title: "Résumé",
        className: IconsStyle.icon,
        children: /* @__PURE__ */ jsx(FaRegFileAlt, { size: iconSize })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://github.com/anthonyfreay",
        "aria-label": "Visit GitHub Profile",
        title: "GitHub",
        className: IconsStyle.icon,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ jsx(FaGithub, { size: iconSize })
      }
    )
  ] }) });
}
export {
  Icons as I
};
