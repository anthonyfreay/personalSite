"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[717],{6717:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});n(2791);var a=n(1087),r=n(4166),o=n(8390),i=n(757),c=n(4023),s=n(184);const l=function(){return(0,s.jsxs)(r.Z,{expand:!0,className:c.Z.homeNavbar,children:[(0,s.jsx)(r.Z.Toggle,{"aria-controls":"basic-navbar-nav",className:c.Z.homeNavbarToggle}),(0,s.jsx)(r.Z.Collapse,{id:"basic-navbar-nav",children:(0,s.jsxs)(o.Z,{className:"ml-auto",children:[(0,s.jsx)("a",{href:"/resume-anthony_freay-f2024.pdf",target:"_blank",rel:"noopener noreferrer",className:c.Z.homeNavItem,onClick:()=>{i.ZP.event({category:"Resume",action:"click",label:"Resume Download"}),console.log("Resume click tracked")},children:"Resume"}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/anthonyfreay",target:"_blank",rel:"noopener noreferrer",className:c.Z.homeNavItem,children:"LinkedIn"}),(0,s.jsx)("a",{href:"https://github.com/anthonyfreay",target:"_blank",rel:"noopener noreferrer",className:c.Z.homeNavItem,children:"GitHub"})]})})]})},u={main:"Home_main__3Ri1+",enterButton:"Home_enterButton__sW1iz",overlay:"Home_overlay__BTVqD",fadeInDown:"Home_fadeInDown__+Gvv3",content:"Home_content__U2G2k",fadeInUp:"Home_fadeInUp__QTweC",brandLogo:"Home_brandLogo__l8C3I",enterButtonText:"Home_enterButtonText__34nSz",icon:"Home_icon__IZx9E"};var f=n(8640);const d=()=>(0,s.jsx)("div",{className:u.main,children:(0,s.jsxs)("div",{className:u.overlay,children:[(0,s.jsx)(l,{className:u.homeNavBar}),(0,s.jsxs)("div",{className:u.content,children:[(0,s.jsx)("h1",{className:u.brandLogo,children:(0,s.jsx)(a.rU,{to:"/",children:"Anthony Freay"})}),(0,s.jsx)(a.rU,{to:"/work",className:u.enterButtonText,children:(0,s.jsx)("button",{className:u.enterButton,children:"Enter"})}),(0,s.jsx)(f.Z,{className:u.icons})]})]})})},8640:(e,t,n)=>{n.d(t,{Z:()=>i});n(2791);var a=n(9135);const r={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var o=n(184);const i=function(e){let{iconSize:t=35}=e;const n=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,o.jsx)("div",{className:"".concat(r.footer," ").concat(r.container),id:r.footer,children:(0,o.jsxs)("div",{className:r.icons,children:[(0,o.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(n),"aria-label":"Email",className:r.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(a.uWG,{size:t})}),(0,o.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:r.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(a.Zf_,{size:t})}),(0,o.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:r.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(a.oIN,{size:t})})]})})}},7567:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e||"";t&&(o=e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,a){return t>0&&t+e.length!==a.length&&e.search(n)>-1&&":"!==a.charAt(t-2)&&("-"!==a.charAt(t+e.length)||"-"===a.charAt(t-1))&&a.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})));r&&(o=function(e){if(function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e))return console.warn("This arg looks like an email address, redacting."),a;return e}(o));return o};var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var a="REDACTED (Potential Email Address)"},7848:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var a=s(n(7666)),r=s(n(7567)),o=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],c=["page","hitType"];function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,i,c=[],s=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=o.call(n)).done)&&(c.push(a.value),c.length!==t);s=!0);}catch(u){l=!0,r=u}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return c}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,b(a.key),a)}}function y(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==u(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var h=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"reset",(function(){t.isInitialized=!1,t._testMode=!1,t._currentMeasurementId,t._hasLoadedGA=!1,t._isQueuing=!1,t._queueGtag=[]})),y(this,"_gtag",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t._testMode||t._isQueuing?t._queueGtag.push(n):a.default.apply(void 0,n)})),y(this,"_loadGA",(function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!==typeof window&&"undefined"!==typeof document&&!t._hasLoadedGA){var r=document.createElement("script");r.async=!0,r.src="".concat(a,"?id=").concat(e),n&&r.setAttribute("nonce",n),document.body.appendChild(r),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},t._hasLoadedGA=!0}})),y(this,"_toGtagOptions",(function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce((function(e,n){var a=p(n,2),r=a[0],o=a[1];return t[r]?e[t[r]]=o:e[r]=o,e}),{})}})),y(this,"initialize",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Require GA_MEASUREMENT_ID");var a="string"===typeof e?[{trackingId:e}]:e;t._currentMeasurementId=a[0].trackingId;var r=n.gaOptions,o=n.gtagOptions,i=n.nonce,c=n.testMode,s=void 0!==c&&c,l=n.gtagUrl;if(t._testMode=s,s||t._loadGA(t._currentMeasurementId,i,l),t.isInitialized||(t._gtag("js",new Date),a.forEach((function(e){var n=g(g(g({},t._toGtagOptions(g(g({},r),e.gaOptions))),o),e.gtagOptions);Object.keys(n).length?t._gtag("config",e.trackingId,n):t._gtag("config",e.trackingId)}))),t.isInitialized=!0,!s){var u=f(t._queueGtag);for(t._queueGtag=[],t._isQueuing=!1;u.length;){var d=u.shift();t._gtag.apply(t,f(d)),"get"===d[0]&&(t._isQueuing=!0)}}})),y(this,"set",(function(e){e?"object"===u(e)?(0===Object.keys(e).length&&console.warn("empty `fieldsObject` given to .set()"),t._gaCommand("set",e)):console.warn("Expected `fieldsObject` arg to be an Object"):console.warn("`fieldsObject` is required in .set()")})),y(this,"_gaCommandSendEvent",(function(e,n,a,r,o){t._gtag("event",n,g(g({event_category:e,event_label:a,value:r},o&&{non_interaction:o.nonInteraction}),t._toGtagOptions(o)))})),y(this,"_gaCommandSendEventParameters",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];if("string"===typeof n[0])t._gaCommandSendEvent.apply(t,f(n.slice(1)));else{var r=n[0],i=r.eventCategory,c=r.eventAction,s=r.eventLabel,u=r.eventValue,d=(r.hitType,l(r,o));t._gaCommandSendEvent(i,c,s,u,d)}})),y(this,"_gaCommandSendTiming",(function(e,n,a,r){t._gtag("event","timing_complete",{name:n,value:a,event_category:e,event_label:r})})),y(this,"_gaCommandSendPageview",(function(e,n){if(n&&Object.keys(n).length){var a=t._toGtagOptions(n),r=a.title,o=a.location,c=l(a,i);t._gtag("event","page_view",g(g(g(g({},e&&{page_path:e}),r&&{page_title:r}),o&&{page_location:o}),c))}else e?t._gtag("event","page_view",{page_path:e}):t._gtag("event","page_view")})),y(this,"_gaCommandSendPageviewParameters",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];if("string"===typeof n[0])t._gaCommandSendPageview.apply(t,f(n.slice(1)));else{var r=n[0],o=r.page,i=(r.hitType,l(r,c));t._gaCommandSendPageview(o,i)}})),y(this,"_gaCommandSend",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r="string"===typeof n[0]?n[0]:n[0].hitType;switch(r){case"event":t._gaCommandSendEventParameters.apply(t,n);break;case"pageview":t._gaCommandSendPageviewParameters.apply(t,n);break;case"timing":t._gaCommandSendTiming.apply(t,f(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(r));break;default:console.warn("Send command doesn't exist: ".concat(r))}})),y(this,"_gaCommandSet",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]=y({},n[0],n[1])),t._gtag("set",t._toGtagOptions(n[0]))})),y(this,"_gaCommand",(function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];switch(e){case"send":t._gaCommandSend.apply(t,a);break;case"set":t._gaCommandSet.apply(t,a);break;default:console.warn("Command doesn't exist: ".concat(e))}})),y(this,"ga",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];if("string"===typeof n[0])t._gaCommand.apply(t,n);else{var r=n[0];t._gtag("get",t._currentMeasurementId,"client_id",(function(e){t._isQueuing=!1;var n=t._queueGtag;for(r({get:function(n){return"clientId"===n?e:"trackingId"===n?t._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var a=n.shift();t._gtag.apply(t,f(a))}})),t._isQueuing=!0}return t.ga})),y(this,"event",(function(e,n){if("string"===typeof e)t._gtag("event",e,t._toGtagOptions(n));else{var a=e.action,o=e.category,i=e.label,c=e.value,s=e.nonInteraction,l=e.transport;if(!o||!a)return void console.warn("args.category AND args.action are required in event()");var u={hitType:"event",eventCategory:(0,r.default)(o),eventAction:(0,r.default)(a)};i&&(u.eventLabel=(0,r.default)(i)),"undefined"!==typeof c&&("number"!==typeof c?console.warn("Expected `args.value` arg to be a Number."):u.eventValue=c),"undefined"!==typeof s&&("boolean"!==typeof s?console.warn("`args.nonInteraction` must be a boolean."):u.nonInteraction=s),"undefined"!==typeof l&&("string"!==typeof l?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(l)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=l)),t._gaCommand("send",u)}})),y(this,"send",(function(e){t._gaCommand("send",e)})),this.reset()}var t,n,s;return t=e,n=[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}],n&&_(t.prototype,n),s&&_(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.GA4=h;var w=new h;t.default=w},7666:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a;"undefined"!==typeof window&&("undefined"===typeof window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(a=window).gtag.apply(a,t))};t.default=n},757:(e,t,n)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.ZP=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=i?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(r,c,s):r[c]=e[c]}r.default=e,n&&n.set(e,r);return r}(n(7848));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}r.GA4;var i=r.default;t.ZP=i},4023:(e,t,n)=>{n.d(t,{Z:()=>a});const a={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=717.13768ebd.chunk.js.map