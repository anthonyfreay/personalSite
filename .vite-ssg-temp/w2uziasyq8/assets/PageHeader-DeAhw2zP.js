import { jsx } from "react/jsx-runtime";
import "react";
import { H as Helmet } from "../main.mjs";
const PageHeader = ({ title }) => {
  return /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("title", { children: title }) });
};
export {
  PageHeader as P
};
