import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { H as Helmet } from "../main.mjs";
import { P as PageHeader } from "./PageHeader-DeAhw2zP.js";
import { N as NavBar, F as Footer } from "./Footer-BOXKfvpz.js";
import { useForm, ValidationError } from "@formspree/react";
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
const contactForm = "_contactForm_zo0u7_8";
const submit = "_submit_zo0u7_34";
const terms = "_terms_zo0u7_53";
const thankYouMessage = "_thankYouMessage_zo0u7_60";
const ContactFormStyle = {
  contactForm,
  submit,
  terms,
  thankYouMessage,
  "thankYouMessage-active": "_thankYouMessage-active_zo0u7_65"
};
const ContactForm = () => {
  const [formKey, setFormKey] = useState(Date.now());
  const [showThankYou, setShowThankYou] = useState(false);
  const [state, handleSubmit] = useForm("xdowepna");
  const formRef = useRef();
  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);
      formRef.current.reset();
      setFormKey(Date.now());
    }
  }, [state.succeeded]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };
  return /* @__PURE__ */ jsxs("form", { ref: formRef, className: ContactFormStyle.contactForm, onSubmit: handleOnSubmit, children: [
    /* @__PURE__ */ jsx("input", { className: ContactFormStyle.name, id: "fname", type: "text", name: "fname", placeholder: "First Name*", required: true }),
    /* @__PURE__ */ jsx(ValidationError, { field: "fname", prefix: "First Name", errors: state.errors }),
    /* @__PURE__ */ jsx("input", { className: ContactFormStyle.name, id: "lname", type: "text", name: "lname", placeholder: "Last Name*", required: true }),
    /* @__PURE__ */ jsx(ValidationError, { field: "lname", prefix: "Last Name", errors: state.errors }),
    /* @__PURE__ */ jsx("input", { className: ContactFormStyle.email, type: "email", name: "_replyto", placeholder: "Email*", required: true }),
    /* @__PURE__ */ jsx(ValidationError, { field: "_replyto", prefix: "Email", errors: state.errors }),
    /* @__PURE__ */ jsx("input", { className: ContactFormStyle.subject, type: "text", name: "_subject", placeholder: "Subject*", required: true }),
    /* @__PURE__ */ jsx(ValidationError, { field: "_subject", prefix: "Subject", errors: state.errors }),
    /* @__PURE__ */ jsx("textarea", { className: ContactFormStyle.body, name: "message", placeholder: "Scope of Work*", required: true }),
    /* @__PURE__ */ jsx(ValidationError, { field: "message", prefix: "Message", errors: state.errors }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "check", className: ContactFormStyle.terms, children: [
      "Terms of Service*",
      /* @__PURE__ */ jsx("span", { className: ContactFormStyle.terms, children: "I understand this form is for professional inquiries only." })
    ] }),
    /* @__PURE__ */ jsxs("select", { className: ContactFormStyle.terms, name: "check", required: true, children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
      /* @__PURE__ */ jsx("option", { value: "Yes", children: "Yes, I understand" })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: ContactFormStyle.submit, disabled: state.submitting, children: "Submit" }),
    showThankYou && /* @__PURE__ */ jsxs("p", { className: `${ContactFormStyle.thankYouMessage} ${showThankYou ? ContactFormStyle["thankYouMessage-active"] : ""}`, children: [
      "Thanks for reaching out! ",
      /* @__PURE__ */ jsx("br", {}),
      "Please refresh to send a new message."
    ] })
  ] }, formKey);
};
const container = "_container_1obii_8";
const mainContent = "_mainContent_1obii_14";
const bioContainer = "_bioContainer_1obii_25";
const bioImage = "_bioImage_1obii_35";
const bioDescription = "_bioDescription_1obii_41";
const ContactStyle = {
  container,
  mainContent,
  bioContainer,
  bioImage,
  bioDescription
};
const Contact = () => {
  return /* @__PURE__ */ jsxs("div", { className: ContactStyle.container, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Contact Anthony Freay for photography, software engineering, or design inquiries. Based in NYC and available for freelance projects." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://anthonyfreay.com/contact" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Contact | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Contact Anthony Freay for photography, software engineering, or design inquiries. Based in NYC and available for freelance projects." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://anthonyfreay.com/contact" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Contact | Anthony Freay" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Contact Anthony Freay for photography, software engineering, or design inquiries. Based in NYC and available for freelance projects." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" })
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Contact | Anthony Freay" }),
    /* @__PURE__ */ jsx(NavBar, { activePage: "contact" }),
    /* @__PURE__ */ jsx("div", { className: ContactStyle.mainContent, children: /* @__PURE__ */ jsxs("div", { className: ContactStyle.bioContainer, children: [
      /* @__PURE__ */ jsx("div", { className: ContactStyle.bioImage, children: /* @__PURE__ */ jsx("img", { src: "/me/RX706334-Enhanced-NR-color.jpg", alt: "Anthony Freay", className: ContactStyle.profileImage }) }),
      /* @__PURE__ */ jsxs("div", { className: ContactStyle.bioDescription, children: [
        /* @__PURE__ */ jsxs("p", { className: ContactStyle.intro, children: [
          /* @__PURE__ */ jsx("b", { children: "Anthony Freay" }),
          " (he/they) is a ",
          /* @__PURE__ */ jsx("b", { children: "New York-based" }),
          " multifaceted Creative, specializing in: ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("b", { children: "software engineering, photo, and design." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: ContactStyle.ethos, children: "Anthony's work ethos focuses on collaboration and attention to detail to create authentic and clean imagery." }),
        /* @__PURE__ */ jsx("p", { className: ContactStyle.location, children: "Anthony is currently booking. For professional inquiries, please use the form below or reach out directly via email." }),
        /* @__PURE__ */ jsx(ContactForm, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { activePage: "contact" })
  ] });
};
export {
  Contact as default
};
