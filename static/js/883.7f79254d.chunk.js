"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[883],{3182:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});s(2791);var t=s(3267),r=s(2110);const o={container:"Posters_container__p77Br",mainContent:"Posters_mainContent__3k70S"};var n=s(523),c=s(3284),i=s(184);const l=()=>{const e=[{alt:"Poster inspired by Good Guy \u2013 Frank Ocean",src:"posters/like-you-look-mockup.jpg"},{alt:"Poster inspired by Off the Table \u2013 Ariana Grande, The Weeknd",src:"posters/off-the-table-mockup.jpg"},{alt:"Poster inspired by the HTBH Tour \u2013 Chelsea Cutler",src:"posters/htbh-poster.jpg"},{alt:"Poster inspired by Pears \u2013 Weston Estate",src:"posters/pears-mockup.jpg"},{alt:"Poster inspired by Down Bad slang",src:"posters/down-bad-mockup.jpg"},{alt:"Poster inspired by the Patagonia Outerwear",src:"posters/patagonia-mockup.jpg"},{alt:"Poster inspired by the My Future - Billie Eilish",src:"posters/my-future-mockup.jpg"},{alt:"Poster inspired by Good Days \u2013 SZA",src:"posters/GOOD-DAYS-mockup.jpg"},{alt:"Poster inspired by Adidas Samba",src:"posters/samba-mockup.jpg"},{alt:"Poster inspired by Waves of Blue - Majid Jordan",src:"posters/wob-mockup.jpg"},{alt:"Poster inspired by Motive \u2013 Arian Grande, Doja Cat",src:"posters/motive-mockup.jpg"},{alt:"Poster inspired by political decisions made by men on women's autonomy",src:"posters/menSTFU-mockup.jpg"}].map((e=>({...e,hdSrc:e.src.replace(/(\.\w+)$/,"-hd$1")})));return(0,i.jsxs)("div",{className:o.container,children:[(0,i.jsx)(t.Z,{title:"Posters | Anthony Freay"}),(0,i.jsx)(r.Z,{className:o.navBar}),(0,i.jsx)("div",{className:o.mainContent,children:(0,i.jsx)(n.Z,{images:e})}),(0,i.jsx)(c.Z,{className:o.footer,activePage:"posters"})]})}},3284:(e,a,s)=>{s.d(a,{Z:()=>c});s(2791);const t={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var r=s(1087),o=s(8640),n=s(184);const c=function(e){let{activePage:a}=e;return(0,n.jsxs)("div",{className:"".concat(t.footer," ").concat(t.container),id:t.footer,children:[(0,n.jsxs)("div",{className:t.pageSection,children:[(0,n.jsx)(r.rU,{to:"/live",className:"".concat(t.pages," ").concat("live"===a?t.footerActive:""),children:"Live"}),(0,n.jsx)(r.rU,{to:"/bw",className:"".concat(t.pages," ").concat("bw"===a?t.footerActive:""),children:"B & W"}),(0,n.jsx)(r.rU,{to:"/people",className:"".concat(t.pages," ").concat("people"===a?t.footerActive:""),children:"People"}),(0,n.jsx)(r.rU,{to:"/places",className:"".concat(t.pages," ").concat("places"===a?t.footerActive:""),children:"Places"}),(0,n.jsx)(r.rU,{to:"/cars",className:"".concat(t.pages," ").concat("cars"===a?t.footerActive:""),children:"Cars"}),(0,n.jsx)(r.rU,{to:"/events",className:"".concat(t.pages," ").concat("events"===a?t.footerActive:""),children:"Events"}),(0,n.jsx)(r.rU,{to:"/contact",className:"".concat(t.pages," ").concat("contact"===a?t.footerActive:""),children:"Contact"})]}),(0,n.jsx)(o.Z,{className:t.icons,iconSize:30}),(0,n.jsxs)("p",{className:t.copyright,children:["Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved."]}),"        "]})}},8640:(e,a,s)=>{s.d(a,{Z:()=>n});s(2791);var t=s(9135);const r={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var o=s(184);const n=function(e){let{iconSize:a=35}=e;const s=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,o.jsx)("div",{className:"".concat(r.footer," ").concat(r.container),id:r.footer,children:(0,o.jsxs)("div",{className:r.icons,children:[(0,o.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(s),"aria-label":"Email",className:r.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(t.uWG,{size:a})}),(0,o.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:r.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(t.Zf_,{size:a})}),(0,o.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:r.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(t.oIN,{size:a})})]})})}},523:(e,a,s)=>{s.d(a,{Z:()=>p});var t=s(2791);const r={"no-scroll":"ImageGallery_no-scroll__ttstl",gallery:"ImageGallery_gallery__Q+YCS","gallery-item":"ImageGallery_gallery-item__WhYRe",lightbox:"ImageGallery_lightbox__Q-932",galleryItem:"ImageGallery_galleryItem__AuXTQ"};var o=s(7087),n=(s(9713),s(2686)),c=(s(8300),s(184));const i=(0,t.memo)((e=>{let{images:a}=e;const[s,n]=(0,t.useState)(!1),[i,p]=(0,t.useState)(0),m=(0,t.useCallback)((e=>{p(e),n(!0)}),[]),d=(0,t.useCallback)((()=>{n(!1)}),[]),v=a.map((e=>({...e,src:e.hdSrc})));return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:r.gallery,children:a.map(((e,a)=>(0,c.jsx)("div",{className:r.galleryItem,onClick:()=>m(a),children:a<4?(0,c.jsx)("img",{src:e.src,alt:e.alt}):(0,c.jsx)(o.LazyLoadImage,{src:e.src,alt:e.alt,effect:"blur",threshold:10})},e.src)))}),s&&(0,c.jsx)(l,{images:v,open:s,activeImage:i,onClose:d,animation:{fade:0}})]})})),l=e=>{let{images:a,open:s,activeImage:t,onClose:o}=e;return(0,c.jsx)("div",{className:r.lightboxContainer,children:(0,c.jsx)(n.ZP,{slides:a,open:s,index:t,controller:{closeOnBackdropClick:!0},close:o,className:r.lightbox,animation:{swipe:0}})})},p=i},2110:(e,a,s)=>{s.d(a,{Z:()=>i});s(2791);var t=s(4166),r=s(8390),o=s(1087),n=s(4023),c=s(184);const i=function(e){let{activePage:a}=e;return(0,c.jsxs)(t.Z,{expand:"lg",className:n.Z.navbar,children:[(0,c.jsx)(t.Z.Brand,{as:o.rU,to:"/",className:n.Z.navBrand,children:"Anthony Freay"}),(0,c.jsx)(t.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,c.jsx)(t.Z.Collapse,{id:"basic-navbar-nav",children:(0,c.jsxs)(r.Z,{className:"".concat(n.Z.navContainer," ml-auto"),children:[(0,c.jsx)(r.Z.Link,{as:o.rU,to:"/work",className:"".concat(n.Z.navItem," ").concat("work"===a?n.Z.activeNavLink:""),children:"Work"}),(0,c.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:n.Z.navItem,children:"Prints"}),(0,c.jsx)(r.Z.Link,{as:o.rU,to:"/contact",className:"".concat(n.Z.navItem," ").concat("contact"===a?n.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(e,a,s)=>{s.d(a,{Z:()=>o});s(2791);var t=s(4270),r=s(184);const o=e=>{let{title:a}=e;return(0,r.jsx)(t.q,{children:(0,r.jsx)("title",{children:a})})}},4023:(e,a,s)=>{s.d(a,{Z:()=>t});const t={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=883.7f79254d.chunk.js.map