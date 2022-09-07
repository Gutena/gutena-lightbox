(()=>{"use strict";var e,t={872:(e,t,r)=>{const i=window.wp.element,o=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/lightbox","title":"Video Lightbox","category":"gutena","icon":"email","description":"Gutena Video Lightbox","textdomain":"gutena-lightbox","supports":{"__experimentalLayout":true,"align":["wide","full"],"html":false,"color":{"text":false,"link":false,"gradients":true,"background":true,"enableContrastChecker":false},"spacing":{"padding":true,"margin":true}},"editorScript":"file:./index.js","script":"file:./view.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.wp.i18n,a=window.wp.data,c=window.wp.blockEditor,s=r.p+"images/image.90689475.jpg",p=[{name:"default",title:(0,l.__)("Default"),description:(0,l.__)("Default Style"),isDefault:!0,innerBlocks:[["gutena/play-button",{buttonColor:"#3f6de4",iconColor:"#ffffff"}],["core/paragraph",{content:"A Message from CEO",align:"center",style:{typography:{fontSize:"18px"},spacing:{padding:{top:"0px",right:"0px",bottom:"0px",left:"0px"},margin:{top:"0px",bottom:"0px"}}}}]],scope:["block"]},{name:"style-one",title:(0,l.__)("Style 1"),description:(0,l.__)("Style 1 - Circle"),icon:(0,i.createElement)("svg",{width:"534",height:"352",viewBox:"0 0 534 352",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"533.684",height:"351.411",fill:"#CCD5EC"}),(0,i.createElement)("circle",{cx:"267",cy:"176",r:"38",fill:"white"}),(0,i.createElement)("path",{d:"M258.837 163.915L282.283 176.439L259.714 190.481L258.837 163.915Z",fill:"#3F6DE4"})),innerBlocks:[["core/cover",{url:s,dimRatio:50,overlayColor:"primary"},[["gutena/play-button"],["core/paragraph",{content:"A Message from CEO",align:"center",style:{typography:{fontSize:"18px"},spacing:{padding:{top:"10px",right:"0px",bottom:"0px",left:"0px"},margin:{top:"0px",bottom:"0px"}}}}]]]],scope:["block"]},{name:"style-two",title:(0,l.__)("Style 2"),description:(0,l.__)("Style 2 - Square"),icon:(0,i.createElement)("svg",{width:"534",height:"352",viewBox:"0 0 534 352",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{width:"533.684",height:"351.411",fill:"#CCD5EC"}),(0,i.createElement)("rect",{x:"228",y:"137",width:"78",height:"78",fill:"white"}),(0,i.createElement)("path",{d:"M258.837 162.915L282.283 175.439L259.714 189.481L258.837 162.915Z",fill:"#3F6DE4"})),innerBlocks:[["core/cover",{url:s,dimRatio:50,overlayColor:"primary"},[["gutena/play-button",{buttonShape:"square"}],["core/paragraph",{content:"A Message from CEO",align:"center",style:{typography:{fontSize:"18px"},spacing:{padding:{top:"10px",right:"0px",bottom:"0px",left:"0px"},margin:{top:"0px",bottom:"0px"}}}}]]]],scope:["block"]}];function g(e){let{clientId:t,context:r,attributes:o,setAttributes:n}=e;const l=(0,c.useBlockProps)({className:"gutena-lightbox-block"}),a=(0,c.useInnerBlocksProps)(l,{orientation:"horizontal",renderAppender:!1});return(0,i.createElement)("div",a)}function h(e){let{clientId:t,attributes:r,setAttributes:n}=e;const s=p.filter((e=>e.isDefault))[0]||p[0],{replaceInnerBlocks:g}=(0,a.useDispatch)(c.store),h=(0,c.useBlockProps)({className:"gutena-lightbox-block"});return(0,i.createElement)("div",h,(0,i.createElement)(c.__experimentalBlockVariationPicker,{label:(0,l.__)("Lightbox Style","gutena-lightbox"),instructions:(0,l.__)("Select a Lightbox style to start with.","gutena-lightbox"),variations:p,onSelect:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;e.attributes&&n(e.attributes),e.innerBlocks&&g(t,(0,o.createBlocksFromInnerBlocksTemplate)(e.innerBlocks),!0)},allowSkip:!0}))}(0,o.registerBlockType)(n,{edit:function(e){const{clientId:t}=e,r=(0,a.useSelect)((e=>e(c.store).getBlocks(t).length>0),[t])?g:h;return(0,i.createElement)(r,e)},save:function(){const e=c.useBlockProps.save({className:"gutena-lightbox-block"});return(0,i.createElement)("div",e,(0,i.createElement)(c.InnerBlocks.Content,null))},icon:(0,i.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("rect",{x:"1",y:"3",width:"2",height:"19",fill:"#3F6DE4"}),(0,i.createElement)("rect",{x:"21",y:"10",width:"2",height:"11",fill:"#3F6DE4"}),(0,i.createElement)("rect",{x:"2",y:"5",width:"2",height:"11",transform:"rotate(-90 2 5)",fill:"#3F6DE4"}),(0,i.createElement)("rect",{x:"2",y:"22",width:"2",height:"21",transform:"rotate(-90 2 22)",fill:"#3F6DE4"}),(0,i.createElement)("path",{d:"M19 3.11125L22.1113 0L23 0.888749L19.8887 4L23 7.11125L22.1113 8L19 4.88875L15.8887 8L15 7.11125L18.1113 4L15 0.888749L15.8887 0L19 3.11125Z",fill:"#3F6DE4"}),(0,i.createElement)("path",{d:"M14.904 12.5166L10.335 15.6298C10.3025 15.6518 10.2648 15.6645 10.2258 15.6664C10.1869 15.6683 10.1482 15.6594 10.1138 15.6406C10.0794 15.6218 10.0507 15.5938 10.0307 15.5596C10.0106 15.5254 10 15.4863 10 15.4465V9.22018C10 9.18033 10.0106 9.14123 10.0307 9.10706C10.0507 9.07288 10.0794 9.04489 10.1138 9.02608C10.1482 9.00728 10.1869 8.99835 10.2258 9.00025C10.2648 9.00216 10.3025 9.01482 10.335 9.0369L14.904 12.1501C14.9336 12.1702 14.9578 12.1974 14.9745 12.2294C14.9912 12.2614 15 12.2971 15 12.3333C15 12.3696 14.9912 12.4053 14.9745 12.4373C14.9578 12.4692 14.9336 12.4965 14.904 12.5166Z",fill:"#3F6DE4"}))})}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.m=t,e=[],i.O=(t,r,o,n)=>{if(!r){var l=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],n=e[p][2];for(var a=!0,c=0;c<r.length;c++)(!1&n||l>=n)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(a=!1,n<l&&(l=n));if(a){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={826:0,431:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,l=r[0],a=r[1],c=r[2],s=0;if(l.some((t=>0!==e[t]))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(c)var p=c(i)}for(t&&t(r);s<l.length;s++)n=l[s],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},r=self.webpackChunkgutena_lightbox=self.webpackChunkgutena_lightbox||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[431],(()=>i(872)));o=i.O(o)})();