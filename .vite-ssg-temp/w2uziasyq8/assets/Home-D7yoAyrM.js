import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { I as Icons } from "./Icons-I_iM_jsO.js";
import "react-icons/fa/index.esm.js";
const main = "_main_1279v_14";
const enterButton = "_enterButton_1279v_27";
const overlay = "_overlay_1279v_57";
const content = "_content_1279v_66";
const brandLogo = "_brandLogo_1279v_75";
const enterButtonText = "_enterButtonText_1279v_103";
const HomeStyle = {
  main,
  enterButton,
  overlay,
  content,
  brandLogo,
  enterButtonText
};
const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: HomeStyle.main, children: /* @__PURE__ */ jsx("div", { className: HomeStyle.overlay, children: /* @__PURE__ */ jsxs("div", { className: HomeStyle.content, children: [
    /* @__PURE__ */ jsx("h1", { className: HomeStyle.brandLogo, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Anthony Freay" }) }),
    /* @__PURE__ */ jsx(Link, { to: "/work", className: HomeStyle.enterButtonText, children: /* @__PURE__ */ jsx("button", { className: HomeStyle.enterButton, children: "Enter" }) }),
    /* @__PURE__ */ jsx(Icons, { className: HomeStyle.icons })
  ] }) }) });
};
export {
  Home as default
};
