import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { H as Helmet } from "../main.mjs";
import { Document, Page, pdfjs } from "react-pdf";
import { N as NavBar, F as Footer } from "./Footer-BOXKfvpz.js";
import { FaDownload, FaArrowUpRightFromSquare } from "react-icons/fa6/index.esm.js";
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
const spinner = "_spinner_3amwy_145";
const ResumeStyle = {
  "resume-container": "_resume-container_3amwy_3",
  "resume-content": "_resume-content_3amwy_9",
  "resume-viewer": "_resume-viewer_3amwy_16",
  "resume-header": "_resume-header_3amwy_26",
  "header-actions": "_header-actions_3amwy_46",
  "download-button": "_download-button_3amwy_53",
  "open-button": "_open-button_3amwy_80",
  "page-wrapper": "_page-wrapper_3amwy_108",
  "pdf-page": "_pdf-page_3amwy_115",
  "page-indicator": "_page-indicator_3amwy_127",
  "pdf-loading": "_pdf-loading_3amwy_134",
  spinner,
  "pdf-error": "_pdf-error_3amwy_161"
};
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const resumePath = "/resume_anthony_freay.pdf";
  function onDocumentLoadSuccess({ numPages: numPages2 }) {
    setNumPages(numPages2);
  }
  return /* @__PURE__ */ jsxs("div", { className: ResumeStyle["resume-container"], children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Résumé | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "The résumé of Anthony Freay, a software engineer and photographer based in NYC." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/resume" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Résumé | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "The résumé of Anthony Freay, a software engineer and photographer based in NYC." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/resume" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Résumé | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "The résumé of Anthony Freay, a software engineer and photographer based in NYC." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" })
    ] }),
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsx("div", { className: ResumeStyle["resume-content"], children: /* @__PURE__ */ jsxs("div", { className: ResumeStyle["resume-viewer"], children: [
      /* @__PURE__ */ jsxs("div", { className: ResumeStyle["resume-header"], children: [
        /* @__PURE__ */ jsx("h1", { children: "Résumé" }),
        /* @__PURE__ */ jsxs("div", { className: ResumeStyle["header-actions"], children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: resumePath,
              download: "Anthony_Freay_Resume.pdf",
              className: ResumeStyle["download-button"],
              children: [
                /* @__PURE__ */ jsx(FaDownload, { "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: "Download PDF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: resumePath,
              target: "_blank",
              rel: "noopener noreferrer",
              className: ResumeStyle["open-button"],
              children: [
                /* @__PURE__ */ jsx(FaArrowUpRightFromSquare, { "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: "Open in New Tab" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Document,
        {
          file: resumePath,
          onLoadSuccess: onDocumentLoadSuccess,
          loading: /* @__PURE__ */ jsxs("div", { className: ResumeStyle["pdf-loading"], role: "status", "aria-live": "polite", children: [
            /* @__PURE__ */ jsx("div", { className: ResumeStyle["spinner"] }),
            /* @__PURE__ */ jsx("p", { children: "Loading résumé..." })
          ] }),
          error: /* @__PURE__ */ jsxs("div", { className: ResumeStyle["pdf-error"], role: "alert", children: [
            /* @__PURE__ */ jsx("p", { children: "Unable to load the PDF." }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "Check your internet connection" }),
              /* @__PURE__ */ jsx("li", { children: "Try disabling ad/script blockers" }),
              /* @__PURE__ */ jsxs("li", { children: [
                "Or ",
                /* @__PURE__ */ jsx("a", { href: resumePath, download: true, children: "download the PDF directly" })
              ] })
            ] })
          ] }),
          children: Array.from(new Array(numPages), (el, index) => /* @__PURE__ */ jsxs("div", { className: ResumeStyle["page-wrapper"], children: [
            /* @__PURE__ */ jsx(
              Page,
              {
                pageNumber: index + 1,
                width: Math.min(800, window.innerWidth - 80),
                scale: window.devicePixelRatio || 1,
                renderMode: "svg",
                renderTextLayer: true,
                className: ResumeStyle["pdf-page"]
              }
            ),
            numPages > 1 && /* @__PURE__ */ jsxs("div", { className: ResumeStyle["page-indicator"], children: [
              "Page ",
              index + 1,
              " of ",
              numPages
            ] })
          ] }, `page_${index + 1}`))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { activePage: "resume" })
  ] });
};
export {
  Resume as default
};
