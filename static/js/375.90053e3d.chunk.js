"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[375],{4779:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});t(2791);var r=t(3267),n=t(2110);const o={container:"People_container__E4s9v",mainContent:"People_mainContent__rEaXg"};var c=t(523),s=t(3284),l=t(184);const i=()=>{const e=[{alt:"Em in Williamsburg",src:"people/DSC01179-Edit-portrait.jpg"},{alt:"Kal looking over a fire escape",src:"people/DSC06349-portrait.jpg"},{alt:"Natalie Freay celebrating her enagement",src:"people/A7404306-portrait.jpg"},{alt:"Dajee at Untermyer Gardens",src:"people/A7205925-portrait.jpg"},{alt:"Dajee in Grand Central",src:"people/A7207181-portrait.jpg"},{alt:"Arize in Studio",src:"people/A7201581-Edit-portrait.jpg"},{alt:"Dajee at the MET Cloisters",src:"people/A7205508-HDR-Edit-portrait.jpg"},{alt:"Camille in Studio",src:"people/A7201742-Edit-portrait.jpg"},{alt:"Richard in his favorite green shirt",src:"people/A7204813-Edit-portrait.jpg"},{alt:"Em in Bryant Park",src:"people/DSC00436-Edit-portrait.jpg"},{alt:"Jenn in an alley",src:"people/A7209214-Edit-portrait.jpg"},{alt:"Michael",src:"people/A7404298-portrait.jpg"},{alt:"Ben over Rio Grande",src:"people/DSC07716-Edit-portrait.jpg"},{alt:"Natalie at Liberty State Park",src:"people/A7200334-portrait.jpg"}].map((e=>({...e,hdSrc:e.src.replace(/(\.\w+)$/,"-hd$1")})));return(0,l.jsxs)("div",{className:o.container,children:[(0,l.jsx)(r.Z,{title:"People | Anthony Freay"}),(0,l.jsx)(n.Z,{className:o.navBar}),(0,l.jsx)("div",{className:o.mainContent,children:(0,l.jsx)(c.Z,{images:e})}),(0,l.jsx)(s.Z,{className:o.footer,activePage:"people"})]})}},3284:(e,a,t)=>{t.d(a,{Z:()=>s});t(2791);const r={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var n=t(1087),o=t(8640),c=t(184);const s=function(e){let{activePage:a}=e;return(0,c.jsxs)("div",{className:"".concat(r.footer," ").concat(r.container),id:r.footer,children:[(0,c.jsxs)("div",{className:r.pageSection,children:[(0,c.jsx)(n.rU,{to:"/live",className:"".concat(r.pages," ").concat("live"===a?r.footerActive:""),children:"Live"}),(0,c.jsx)(n.rU,{to:"/bw",className:"".concat(r.pages," ").concat("bw"===a?r.footerActive:""),children:"B & W"}),(0,c.jsx)(n.rU,{to:"/people",className:"".concat(r.pages," ").concat("people"===a?r.footerActive:""),children:"People"}),(0,c.jsx)(n.rU,{to:"/places",className:"".concat(r.pages," ").concat("places"===a?r.footerActive:""),children:"Places"}),(0,c.jsx)(n.rU,{to:"/cars",className:"".concat(r.pages," ").concat("cars"===a?r.footerActive:""),children:"Cars"}),(0,c.jsx)(n.rU,{to:"/contact",className:"".concat(r.pages," ").concat("contact"===a?r.footerActive:""),children:"Contact"})]}),(0,c.jsx)(o.Z,{className:r.icons,iconSize:30}),(0,c.jsxs)("p",{className:r.copyright,children:["Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved."]}),"        "]})}},8640:(e,a,t)=>{t.d(a,{Z:()=>c});t(2791);var r=t(9135);const n={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var o=t(184);const c=function(e){let{iconSize:a=35}=e;const t=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,o.jsx)("div",{className:"".concat(n.footer," ").concat(n.container),id:n.footer,children:(0,o.jsxs)("div",{className:n.icons,children:[(0,o.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(t),"aria-label":"Email",className:n.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(r.uWG,{size:a})}),(0,o.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:n.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(r.Zf_,{size:a})}),(0,o.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:n.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(r.oIN,{size:a})})]})})}},523:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(2791);const n={"no-scroll":"ImageGallery_no-scroll__ttstl",gallery:"ImageGallery_gallery__Q+YCS","gallery-item":"ImageGallery_gallery-item__WhYRe",lightbox:"ImageGallery_lightbox__Q-932",galleryItem:"ImageGallery_galleryItem__AuXTQ"};var o=t(7087),c=(t(9713),t(2686)),s=(t(8300),t(184));const l=(0,r.memo)((e=>{let{images:a}=e;const[t,c]=(0,r.useState)(!1),[l,p]=(0,r.useState)(0),m=(0,r.useCallback)((e=>{p(e),c(!0)}),[]),d=(0,r.useCallback)((()=>{c(!1)}),[]),v=a.map((e=>({...e,src:e.hdSrc})));return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:n.gallery,children:a.map(((e,a)=>(0,s.jsx)("div",{className:n.galleryItem,onClick:()=>m(a),children:a<4?(0,s.jsx)("img",{src:e.src,alt:e.alt}):(0,s.jsx)(o.LazyLoadImage,{src:e.src,alt:e.alt,effect:"blur",threshold:10})},e.src)))}),t&&(0,s.jsx)(i,{images:v,open:t,activeImage:l,onClose:d,animation:{fade:0}})]})})),i=e=>{let{images:a,open:t,activeImage:r,onClose:o}=e;return(0,s.jsx)("div",{className:n.lightboxContainer,children:(0,s.jsx)(c.ZP,{slides:a,open:t,index:r,controller:{closeOnBackdropClick:!0},close:o,className:n.lightbox,animation:{swipe:0}})})},p=l},2110:(e,a,t)=>{t.d(a,{Z:()=>l});t(2791);var r=t(4166),n=t(8390),o=t(1087),c=t(4023),s=t(184);const l=function(e){let{activePage:a}=e;return(0,s.jsxs)(r.Z,{expand:"lg",className:c.Z.navbar,children:[(0,s.jsx)(r.Z.Brand,{as:o.rU,to:"/",className:c.Z.navBrand,children:"Anthony Freay"}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsx)(r.Z.Collapse,{id:"basic-navbar-nav",children:(0,s.jsxs)(n.Z,{className:"".concat(c.Z.navContainer," ml-auto"),children:[(0,s.jsx)(n.Z.Link,{as:o.rU,to:"/work",className:"".concat(c.Z.navItem," ").concat("work"===a?c.Z.activeNavLink:""),children:"Work"}),(0,s.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:c.Z.navItem,children:"Prints"}),(0,s.jsx)(n.Z.Link,{as:o.rU,to:"/contact",className:"".concat(c.Z.navItem," ").concat("contact"===a?c.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(e,a,t)=>{t.d(a,{Z:()=>o});t(2791);var r=t(4270),n=t(184);const o=e=>{let{title:a}=e;return(0,n.jsx)(r.q,{children:(0,n.jsx)("title",{children:a})})}},4023:(e,a,t)=>{t.d(a,{Z:()=>r});const r={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=375.90053e3d.chunk.js.map