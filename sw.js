if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),u={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/assertThisInitialized-C3JHh9f5.js",revision:null},{url:"assets/hoge-bQgMXYeO.js",revision:null},{url:"assets/hoge-JzLGgrtO.css",revision:null},{url:"assets/main--yg5gQqV.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"index.html",revision:"e3a9aae81c1ba8534f28f84d987a3249"},{url:"src/hoge/hoge.html",revision:"a2bc3fead374883a0ba22dfe98641571"},{url:"manifest.webmanifest",revision:"b4e52432e54ae231e75a32afffbd46ab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
