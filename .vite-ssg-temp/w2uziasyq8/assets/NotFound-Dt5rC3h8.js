import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Link } from "react-router-dom";
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { style: { padding: "4rem 1rem", textAlign: "center" }, children: [
    /* @__PURE__ */ jsx("h1", { style: { fontSize: "2rem", marginBottom: "0.5rem" }, children: "404 - Page Not Found" }),
    /* @__PURE__ */ jsx("p", { style: { marginBottom: "1.5rem" }, children: "The page you’re looking for doesn’t exist." }),
    /* @__PURE__ */ jsx(Link, { to: "/", style: { textDecoration: "underline" }, children: "Go back home" })
  ] });
}
export {
  NotFound as default
};
