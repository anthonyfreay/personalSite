"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[378],{8803:(a,e,r)=>{r.r(e),r.d(e,{default:()=>i});r(2791);var n=r(3267),t=r(2110);const c={container:"Apparel_container__jbInM",mainContent:"Apparel_mainContent__yiULp"};var s=r(523),o=r(3284),l=r(184);const i=()=>{const a=[{alt:"Inspired by Brent Faiyaz",src:"apparel/lost-kids_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Frank Ocean",src:"apparel/TEARS_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by brent ii",src:"apparel/EMILY_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Good Days",src:"apparel/WAR-IN-My-MIND_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Sweet Life",src:"apparel/SWEET-LIFE_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Fun Girl",src:"apparel/FUN-GIRL_TSHIRT_MOCKUP.jpg"}].map((a=>({...a,hdSrc:a.src.replace(/(\.\w+)$/,"-hd$1")})));return(0,l.jsxs)("div",{className:c.container,children:[(0,l.jsx)(n.Z,{title:"Apparel | Anthony Freay"}),(0,l.jsx)(t.Z,{className:c.navBar}),(0,l.jsx)("div",{className:c.mainContent,children:(0,l.jsx)(s.Z,{images:a})}),(0,l.jsx)(o.Z,{className:c.footer,activePage:"apparel"})]})}},3284:(a,e,r)=>{r.d(e,{Z:()=>o});r(2791);const n={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var t=r(1087),c=r(8640),s=r(184);const o=function(a){let{activePage:e}=a;return(0,s.jsxs)("div",{className:"".concat(n.footer," ").concat(n.container),id:n.footer,children:[(0,s.jsxs)("div",{className:n.pageSection,children:[(0,s.jsx)(t.rU,{to:"/live",className:"".concat(n.pages," ").concat("live"===e?n.footerActive:""),children:"Live"}),(0,s.jsx)(t.rU,{to:"/bw",className:"".concat(n.pages," ").concat("bw"===e?n.footerActive:""),children:"B & W"}),(0,s.jsx)(t.rU,{to:"/people",className:"".concat(n.pages," ").concat("people"===e?n.footerActive:""),children:"People"}),(0,s.jsx)(t.rU,{to:"/places",className:"".concat(n.pages," ").concat("places"===e?n.footerActive:""),children:"Places"}),(0,s.jsx)(t.rU,{to:"/cars",className:"".concat(n.pages," ").concat("cars"===e?n.footerActive:""),children:"Cars"}),(0,s.jsx)(t.rU,{to:"/events",className:"".concat(n.pages," ").concat("events"===e?n.footerActive:""),children:"Events"}),(0,s.jsx)(t.rU,{to:"/contact",className:"".concat(n.pages," ").concat("contact"===e?n.footerActive:""),children:"Contact"})]}),(0,s.jsx)(c.Z,{className:n.icons,iconSize:30}),(0,s.jsxs)("p",{className:n.copyright,children:["Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved."]}),"        "]})}},8640:(a,e,r)=>{r.d(e,{Z:()=>s});r(2791);var n=r(9135);const t={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var c=r(184);const s=function(a){let{iconSize:e=35}=a;const r=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,c.jsx)("div",{className:"".concat(t.footer," ").concat(t.container),id:t.footer,children:(0,c.jsxs)("div",{className:t.icons,children:[(0,c.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(r),"aria-label":"Email",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.uWG,{size:e})}),(0,c.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.Zf_,{size:e})}),(0,c.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.oIN,{size:e})})]})})}},523:(a,e,r)=>{r.d(e,{Z:()=>_});var n=r(2791);const t={"no-scroll":"ImageGallery_no-scroll__ttstl",gallery:"ImageGallery_gallery__Q+YCS","gallery-item":"ImageGallery_gallery-item__WhYRe",lightbox:"ImageGallery_lightbox__Q-932",galleryItem:"ImageGallery_galleryItem__AuXTQ"};var c=r(7087),s=(r(9713),r(2686)),o=(r(8300),r(184));const l=(0,n.memo)((a=>{let{images:e}=a;const[r,s]=(0,n.useState)(!1),[l,_]=(0,n.useState)(0),p=(0,n.useCallback)((a=>{_(a),s(!0)}),[]),m=(0,n.useCallback)((()=>{s(!1)}),[]),d=e.map((a=>({...a,src:a.hdSrc})));return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:t.gallery,children:e.map(((a,e)=>(0,o.jsx)("div",{className:t.galleryItem,onClick:()=>p(e),children:e<4?(0,o.jsx)("img",{src:a.src,alt:a.alt}):(0,o.jsx)(c.LazyLoadImage,{src:a.src,alt:a.alt,effect:"blur",threshold:10})},a.src)))}),r&&(0,o.jsx)(i,{images:d,open:r,activeImage:l,onClose:m,animation:{fade:0}})]})})),i=a=>{let{images:e,open:r,activeImage:n,onClose:c}=a;return(0,o.jsx)("div",{className:t.lightboxContainer,children:(0,o.jsx)(s.ZP,{slides:e,open:r,index:n,controller:{closeOnBackdropClick:!0},close:c,className:t.lightbox,animation:{swipe:0}})})},_=l},2110:(a,e,r)=>{r.d(e,{Z:()=>l});r(2791);var n=r(4166),t=r(8390),c=r(1087),s=r(4023),o=r(184);const l=function(a){let{activePage:e}=a;return(0,o.jsxs)(n.Z,{expand:"lg",className:s.Z.navbar,children:[(0,o.jsx)(n.Z.Brand,{as:c.rU,to:"/",className:s.Z.navBrand,children:"Anthony Freay"}),(0,o.jsx)(n.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,o.jsx)(n.Z.Collapse,{id:"basic-navbar-nav",children:(0,o.jsxs)(t.Z,{className:"".concat(s.Z.navContainer," ml-auto"),children:[(0,o.jsx)(t.Z.Link,{as:c.rU,to:"/work",className:"".concat(s.Z.navItem," ").concat("work"===e?s.Z.activeNavLink:""),children:"Work"}),(0,o.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:s.Z.navItem,children:"Prints"}),(0,o.jsx)(t.Z.Link,{as:c.rU,to:"/contact",className:"".concat(s.Z.navItem," ").concat("contact"===e?s.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(a,e,r)=>{r.d(e,{Z:()=>c});r(2791);var n=r(4270),t=r(184);const c=a=>{let{title:e}=a;return(0,t.jsx)(n.q,{children:(0,t.jsx)("title",{children:e})})}},4023:(a,e,r)=>{r.d(e,{Z:()=>n});const n={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=378.5e1195cf.chunk.js.map