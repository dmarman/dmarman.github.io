/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@simonwep/pickr/dist/pickr.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/pickr.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Pickr 1.7.2 MIT | https://github.com/Simonwep/pickr */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t){t.exports=JSON.parse('{"a":"1.7.2"}')},function(t,e,o){"use strict";o.r(e);var n={};function i(t,e,o,n,i={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);for(const r of e)for(const e of o)r[t](e,n,{capture:!1,...i});return Array.prototype.slice.call(arguments,1)}o.r(n),o.d(n,"on",(function(){return r})),o.d(n,"off",(function(){return s})),o.d(n,"createElementFromString",(function(){return a})),o.d(n,"createFromTemplate",(function(){return c})),o.d(n,"eventPath",(function(){return l})),o.d(n,"resolveElement",(function(){return p})),o.d(n,"adjustableInputNumbers",(function(){return u}));const r=i.bind(null,"addEventListener"),s=i.bind(null,"removeEventListener");function a(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function c(t){const e=(t,e)=>{const o=t.getAttribute(e);return t.removeAttribute(e),o},o=(t,n={})=>{const i=e(t,":obj"),r=e(t,":ref"),s=i?n[i]={}:n;r&&(n[r]=t);for(const n of Array.from(t.children)){const t=e(n,":arr"),i=o(n,t?{}:s);t&&(s[t]||(s[t]=[])).push(Object.keys(i).length?i:n)}return n};return o(a(t))}function l(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let o=t.target.parentElement;for(e=[t.target,o];o=o.parentElement;)e.push(o);return e.push(document,window),e}function p(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((t,e,o,n)=>(t=t.querySelector(e),o<n.length-1?t.shadowRoot:t),document):null}function u(t,e=(t=>t)){function o(o){const n=[.001,.01,.1][Number(o.shiftKey||2*o.ctrlKey)]*(o.deltaY<0?1:-1);let i=0,r=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(t,o)=>o<=r&&o+t.length>=r?(r=o,e(Number(t),n,i)):(i++,t)),t.focus(),t.setSelectionRange(r,r),o.preventDefault(),t.dispatchEvent(new Event("input"))}r(t,"focus",()=>r(window,"wheel",o,{passive:!1})),r(t,"blur",()=>s(window,"wheel",o))}var h=o(0);const{min:d,max:f,floor:m,round:v}=Math;function b(t,e,o){e/=100,o/=100;const n=m(t=t/360*6),i=t-n,r=o*(1-e),s=o*(1-i*e),a=o*(1-(1-i)*e),c=n%6;return[255*[o,s,r,r,a,o][c],255*[a,o,o,s,r,r][c],255*[r,r,a,o,o,s][c]]}function g(t,e,o){const n=(2-(e/=100))*(o/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*o/(2*n):e*o/(2-2*n)),[t,100*e,100*n]}function y(t,e,o){const n=d(t/=255,e/=255,o/=255),i=f(t,e,o),r=i-n;let s,a;if(0===r)s=a=0;else{a=r/i;const n=((i-t)/6+r/2)/r,c=((i-e)/6+r/2)/r,l=((i-o)/6+r/2)/r;t===i?s=l-c:e===i?s=1/3+n-l:o===i&&(s=2/3+c-n),s<0?s+=1:s>1&&(s-=1)}return[360*s,100*a,100*i]}function _(t,e,o,n){return e/=100,o/=100,[...y(255*(1-d(1,(t/=100)*(1-(n/=100))+n)),255*(1-d(1,e*(1-n)+n)),255*(1-d(1,o*(1-n)+n)))]}function w(t,e,o){e/=100;const n=2*(e*=(o/=100)<.5?o:1-o)/(o+e)*100,i=100*(o+e);return[t,isNaN(n)?0:n,i]}function A(t){return y(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function C(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},o=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let n;t:for(const i in e){if(!(n=e[i].exec(t)))continue;const r=t=>!!n[2]==("number"==typeof t);switch(i){case"cmyk":{const[,t,e,r,s]=o(n);if(t>100||e>100||r>100||s>100)break t;return{values:_(t,e,r,s),type:i}}case"rgba":{const[,,,t,e,s,a]=o(n);if(t>255||e>255||s>255||a<0||a>1||!r(a))break t;return{values:[...y(t,e,s),a],a:a,type:i}}case"hexa":{let[,t]=n;4!==t.length&&3!==t.length||(t=t.split("").map(t=>t+t).join(""));const e=t.substring(0,6);let o=t.substring(6);return o=o?parseInt(o,16)/255:void 0,{values:[...A(e),o],a:o,type:i}}case"hsla":{const[,,,t,e,s,a]=o(n);if(t>360||e>100||s>100||a<0||a>1||!r(a))break t;return{values:[...w(t,e,s),a],a:a,type:i}}case"hsva":{const[,,,t,e,s,a]=o(n);if(t>360||e>100||s>100||a<0||a>1||!r(a))break t;return{values:[t,e,s,a],a:a,type:i}}}}return{values:null,type:null}}function k(t=0,e=0,o=0,n=1){const i=(t,e)=>(o=-1)=>e(~o?t.map(t=>Number(t.toFixed(o))):t),r={h:t,s:e,v:o,a:n,toHSVA(){const t=[r.h,r.s,r.v,r.a];return t.toString=i(t,t=>"hsva(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toHSLA(){const t=[...g(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"hsla(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toRGBA(){const t=[...b(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(r.a,")")),t},toCMYK(){const t=function(t,e,o){const n=b(t,e,o),i=n[0]/255,r=n[1]/255,s=n[2]/255,a=d(1-i,1-r,1-s);return[100*(1===a?0:(1-i-a)/(1-a)),100*(1===a?0:(1-r-a)/(1-a)),100*(1===a?0:(1-s-a)/(1-a)),100*a]}(r.h,r.s,r.v);return t.toString=i(t,t=>"cmyk(".concat(t[0],"%, ").concat(t[1],"%, ").concat(t[2],"%, ").concat(t[3],"%)")),t},toHEXA(){const t=function(t,e,o){return b(t,e,o).map(t=>v(t).toString(16).padStart(2,"0"))}(r.h,r.s,r.v),e=r.a>=1?"":Number((255*r.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>"#".concat(t.join("").toUpperCase()),t},clone:()=>k(r.h,r.s,r.v,r.a)};return r}const S=t=>Math.max(Math.min(t,1),0);function O(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{options:o}=e,{type:n,key:i}=t;if(document.activeElement===o.wrapper){const{lock:o}=e.options,r="ArrowUp"===i,s="ArrowRight"===i,a="ArrowDown"===i,c="ArrowLeft"===i;if("keydown"===n&&(r||s||a||c)){let n=0,i=0;"v"===o?n=r||s?1:-1:"h"===o?n=r||s?-1:1:(i=r?-1:a?1:0,n=c?-1:s?1:0),e.update(S(e.cache.x+.01*n),S(e.cache.y+.01*i)),t.preventDefault()}else i.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){r(document,["mouseup","touchend","touchcancel"],e._tapstop),r(document,["mousemove","touchmove"],e._tapmove),t.cancelable&&t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:o,cache:n}=e,{lock:i,element:r,wrapper:s}=o,a=s.getBoundingClientRect();let c=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];c=t?(e||t).clientX:0,l=t?(e||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),l<a.top?l=a.top:l>a.top+a.height&&(l=a.top+a.height),c-=a.left,l-=a.top}else n&&(c=n.x*a.width,l=n.y*a.height);"h"!==i&&(r.style.left="calc(".concat(c/a.width*100,"% - ").concat(r.offsetWidth/2,"px)")),"v"!==i&&(r.style.top="calc(".concat(l/a.height*100,"% - ").concat(r.offsetHeight/2,"px)")),e.cache={x:c/a.width,y:l/a.height};const p=S(c/a.width),u=S(l/a.height);switch(i){case"v":return o.onchange(p);case"h":return o.onchange(u);default:return o.onchange(p,u)}},_tapstop(){e.options.onstop(),s(document,["mouseup","touchend","touchcancel"],e._tapstop),s(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,o=0){const{left:n,top:i,width:r,height:s}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(o=t),e._tapmove({clientX:n+r*t,clientY:i+s*o})},destroy(){const{options:t,_tapstart:o,_keyboard:n}=e;s(document,["keydown","keyup"],n),s([t.wrapper,t.element],"mousedown",o),s([t.wrapper,t.element],"touchstart",o,{passive:!1})}},{options:o,_tapstart:n,_keyboard:i}=e;return r([o.wrapper,o.element],"mousedown",n),r([o.wrapper,o.element],"touchstart",n,{passive:!1}),r(document,["keydown","keyup"],i),e}function E(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=r(t.elements,"click",e=>{t.elements.forEach(o=>o.classList[e.target===o?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>s(...e)}}
/*! NanoPop 1.3.0 MIT | https://github.com/Simonwep/nanopop */
let x=(()=>{class t{constructor(e,o,{positionFlipOrder:n=t.defaultPositionFlipOrder,variantFlipOrder:i=t.defaultVariantFlipOrder,container:r=document.documentElement.getBoundingClientRect(),forceApplyOnFailure:s=!1,margin:a=8,position:c="bottom-start"}={}){this.o={positionFlipOrder:n,variantFlipOrder:i,reference:e,popper:o,position:c,container:r,forceApplyOnFailure:s,margin:a}}update(t=this.o,e=!1){const{container:o,reference:n,popper:i,margin:r,position:s,forceApplyOnFailure:a,variantFlipOrder:c,positionFlipOrder:l}=this.o={...this.o,...t};i.style.left="0",i.style.top="0";const p=n.getBoundingClientRect(),u=i.getBoundingClientRect(),h={t:p.top-u.height-r,b:p.bottom+r,r:p.right+r,l:p.left-u.width-r},d={vm:-u.width/2+(p.left+p.width/2),vs:p.left,ve:p.left+p.width-u.width,hs:p.bottom-p.height,he:p.bottom-u.height,hm:p.bottom-p.height/2-u.height/2},[f,m="middle"]=s.split("-"),v=l[f],b=c[m],{top:g,left:y,bottom:_,right:w}=o;for(const t of v){const o="t"===t||"b"===t,n=h[t],[r,s]=o?["top","left"]:["left","top"],[a,c]=o?[u.height,u.width]:[u.width,u.height],[l,p]=o?[_,w]:[w,_],[f,m]=o?[g,y]:[y,g];if(e||!(n<f||n+a>l))for(const a of b){const l=d[(o?"v":"h")+a];if(e||!(l<m||l+c>p))return i.style[s]=l-u[s]+"px",i.style[r]=n-u[r]+"px",t+a}}return a?this.update(void 0,!0):null}}return t.version="1.3.0",t.defaultVariantFlipOrder={start:"sme",middle:"mse",end:"ems"},t.defaultPositionFlipOrder={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},t})();function L(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class B{constructor(t){L(this,"_initializingActive",!0),L(this,"_recalc",!0),L(this,"_nanopop",null),L(this,"_root",null),L(this,"_color",k()),L(this,"_lastColor",k()),L(this,"_swatchColors",[]),L(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({...B.DEFAULT_OPTIONS},t);const{swatches:e,components:o,theme:n,sliders:i,lockOpacity:r,padding:s}=t;["nano","monolith"].includes(n)&&!i&&(t.sliders="h"),o.interaction||(o.interaction={});const{preview:a,opacity:c,hue:l,palette:p}=o;o.opacity=!r&&c,o.palette=p||a||c||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(t=>this.addSwatch(t));const{button:u,app:h}=this._root;this._nanopop=new x(u,h,{margin:s}),u.setAttribute("role","button"),u.setAttribute("aria-label",this._t("btn:toggle"));const d=this;requestAnimationFrame((function e(){if(!h.offsetWidth)return requestAnimationFrame(e);d.setColor(t.default),d._rePositioningPicker(),t.defaultRepresentation&&(d._representation=t.defaultRepresentation,d.setColorRepresentation(d._representation)),t.showAlways&&d.show(),d._initializingActive=!1,d._emit("init")}))}_preBuild(){const{options:t}=this;for(const e of["el","container"])t[e]=p(t[e]);this._root=(t=>{const{components:e,useAsButton:o,inline:n,appClass:i,theme:r,lockOpacity:s}=t.options,a=t=>t?"":'style="display:none" hidden',l=e=>t._t(e),p=c('\n      <div :ref="root" class="pickr">\n\n        '.concat(o?"":'<button type="button" :ref="button" class="pcr-button"></button>','\n\n        <div :ref="app" class="pcr-app ').concat(i||"",'" data-theme="').concat(r,'" ').concat(n?'style="position: unset"':"",' aria-label="').concat(l("ui:dialog"),'" role="window">\n          <div class="pcr-selection" ').concat(a(e.palette),'>\n            <div :obj="preview" class="pcr-color-preview" ').concat(a(e.preview),'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="').concat(l("btn:last-color"),'"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="').concat(l("aria:palette"),'" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ').concat(a(e.hue),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="').concat(l("aria:hue"),'" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ').concat(a(e.opacity),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="').concat(l("aria:opacity"),'" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ').concat(e.palette?"":"pcr-last",'" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ').concat(a(Object.keys(e.interaction).length),'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ').concat(a(e.interaction.input),' aria-label="').concat(l("aria:input"),'">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="').concat(s?"HEX":"HEXA",'" type="button" ').concat(a(e.interaction.hex),'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="').concat(s?"RGB":"RGBA",'" type="button" ').concat(a(e.interaction.rgba),'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="').concat(s?"HSL":"HSLA",'" type="button" ').concat(a(e.interaction.hsla),'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="').concat(s?"HSV":"HSVA",'" type="button" ').concat(a(e.interaction.hsva),'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(a(e.interaction.cmyk),'>\n\n            <input :ref="save" class="pcr-save" value="').concat(l("btn:save"),'" type="button" ').concat(a(e.interaction.save),' aria-label="').concat(l("aria:btn:save"),'">\n            <input :ref="cancel" class="pcr-cancel" value="').concat(l("btn:cancel"),'" type="button" ').concat(a(e.interaction.cancel),' aria-label="').concat(l("aria:btn:cancel"),'">\n            <input :ref="clear" class="pcr-clear" value="').concat(l("btn:clear"),'" type="button" ').concat(a(e.interaction.clear),' aria-label="').concat(l("aria:btn:clear"),'">\n          </div>\n        </div>\n      </div>\n    ')),u=p.interaction;return u.options.find(t=>!t.hidden&&!t.classList.add("active")),u.type=()=>u.options.find(t=>t.classList.contains("active")),p})(this),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const o=t.el.parentElement;t.el.nextSibling?o.insertBefore(e.app,t.el.nextSibling):o.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,o=(t.options.sliders||"v").repeat(2),[n,i]=o.match(/^[vh]+$/g)?o:[],r=()=>this._color||(this._color=this._lastColor.clone()),s={palette:O({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop",t),onchange(o,n){if(!e.palette)return;const i=r(),{_root:s,options:a}=t,{lastColor:c,currentColor:l}=s.preview;t._recalc&&(i.s=100*o,i.v=100-100*n,i.v<0&&(i.v=0),t._updateOutput());const p=i.toRGBA().toString(0);this.element.style.background=p,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a,"), transparent),\n                        linear-gradient(to left, hsla(").concat(i.h,", 100%, 50%, ").concat(i.a,"), rgba(255, 255, 255, ").concat(i.a,"))\n                    "),a.comparison?a.useAsButton||t._lastColor||(c.style.color=p):(s.button.style.color=p,s.button.classList.remove("clear"));const u=i.toHEXA().toString();for(const{el:e,color:o}of t._swatchColors)e.classList[u===o.toHEXA().toString()?"add":"remove"]("pcr-active");l.style.color=p}}),hue:O({lock:"v"===i?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.hue||!e.palette)return;const n=r();t._recalc&&(n.h=360*o),this.element.style.backgroundColor="hsl(".concat(n.h,", 100%, 50%)"),s.palette.trigger()}}),opacity:O({lock:"v"===n?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.opacity||!e.palette)return;const n=r();t._recalc&&(n.a=Math.round(100*o)/100),this.element.style.background="rgba(0, 0, 0, ".concat(n.a,")"),s.palette.trigger()}}),selectable:E({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput()}})};this._components=s}_bindEvents(){const{_root:t,options:e}=this,o=[r(t.interaction.clear,"click",()=>this._clearColor()),r([t.interaction.cancel,t.preview.lastColor],"click",()=>{this._emit("cancel",this),this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0)}),r(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),r(t.interaction.result,["keyup","input"],t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),r(t.interaction.result,["focus","blur"],t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput()}),r([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0,{passive:!0})];if(!e.showAlways){const n=e.closeWithKey;o.push(r(t.button,"click",()=>this.isOpen()?this.hide():this.show()),r(document,"keyup",t=>this.isOpen()&&(t.key===n||t.code===n)&&this.hide()),r(document,["touchstart","mousedown"],e=>{this.isOpen()&&!l(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};u(t.interaction.result,(t,o,n)=>{const i=e[this.getColorRepresentation().toLowerCase()];if(i){const e=i[n],r=t+(e>=100?1e3*o:o);return r<=0?0:Number((r<e?r:e).toPrecision(3))}return t})}if(e.autoReposition&&!e.inline){let t=null;const n=this;o.push(r(window,["scroll","resize"],()=>{n.isOpen()&&(e.closeOnScroll&&n.hide(),null===t?(t=setTimeout(()=>t=null,100),requestAnimationFrame((function e(){n._rePositioningPicker(),null!==t&&requestAnimationFrame(e)}))):(clearTimeout(t),t=setTimeout(()=>t=null,100)))},{capture:!0}))}this._eventBindings=o}_rePositioningPicker(){const{options:t}=this;if(!t.inline){if(!this._nanopop.update({container:document.body.getBoundingClientRect(),position:t.position,forceApplyOnFailure:!this._recalc})){const t=this._root.app,e=t.getBoundingClientRect();t.style.top="".concat((window.innerHeight-e.height)/2,"px"),t.style.left="".concat((window.innerWidth-e.width)/2,"px")}}}_updateOutput(){const{_root:t,_color:e,options:o}=this;if(t.interaction.type()){const n="to".concat(t.interaction.type().getAttribute("data-type"));t.interaction.result.value="function"==typeof e[n]?e[n]().toString(o.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}_clearColor(t=!1){const{_root:e,options:o}=this;o.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),o.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}_parseLocalColor(t){const{values:e,type:o,a:n}=C(t),{lockOpacity:i}=this.options,r=void 0!==n&&1!==n;return e&&3===e.length&&(e[3]=void 0),{values:!e||i&&r?null:e,type:o}}_t(t){return this.options.i18n[t]||B.I18N_DEFAULTS[t]}_emit(t,...e){this._eventListener[t].forEach(t=>t(...e,this))}on(t,e){return this._eventListener[t].push(e),this}off(t,e){const o=this._eventListener[t]||[],n=o.indexOf(e);return~n&&o.splice(n,1),this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:o}=this,n=k(...e),i=a('<button type="button" style="color: '.concat(n.toRGBA().toString(0),'" aria-label="').concat(this._t("btn:swatch"),'"/>'));return o.swatches.appendChild(i),t.push({el:i,color:n}),this._eventBindings.push(r(i,"click",()=>{this.setHSVA(...n.toHSVA(),!0),this._emit("swatchselect",n),this._emit("change",n)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:o}=e;return this._root.swatches.removeChild(o),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:o}=this._root,n=this._color.toRGBA().toString(0);return e.lastColor.style.color=n,this.options.useAsButton||(o.style.color=n),o.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){this._eventBindings.forEach(t=>s(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(t=>this[t]=null)}hide(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}show(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,o=0,n=1,i=!1){const r=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||o<0||o>100||n<0||n>1)return!1;this._color=k(t,e,o,n);const{hue:s,opacity:a,palette:c}=this._components;return s.update(t/360),a.update(n),c.update(e/100,1-o/100),i||this.applyColor(),r&&this._updateOutput(),this._recalc=r,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:o,type:n}=this._parseLocalColor(t);if(o){const t=n.toUpperCase(),{options:i}=this._root.interaction,r=i.find(e=>e.getAttribute("data-type")===t);if(r&&!r.hidden)for(const t of i)t.classList[t===r?"add":"remove"]("active");return!!this.setHSVA(...o,e)&&this.setColorRepresentation(t)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}L(B,"utils",n),L(B,"version",h.a),L(B,"I18N_DEFAULTS",{"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"}),L(B,"DEFAULT_OPTIONS",{appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"}),L(B,"create",t=>new B(t));e.default=B}]).default}));
//# sourceMappingURL=pickr.min.js.map

/***/ }),

/***/ "./node_modules/@simonwep/pickr/dist/themes/nano.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/themes/nano.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./nano.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@simonwep/pickr/dist/themes/nano.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@simonwep/pickr/dist/themes/nano.min.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@simonwep/pickr/dist/themes/nano.min.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! Pickr 1.7.2 MIT | https://github.com/Simonwep/pickr */\n\n.pickr{\n  position:relative;\n  overflow:visible;\n  transform:translateY(0)\n}\n\n.pickr *{\n  box-sizing:border-box;\n  outline:none;\n  border:none;\n  -webkit-appearance:none\n}\n\n.pickr .pcr-button{\n  position:relative;\n  height:2em;\n  width:2em;\n  padding:.5em;\n  cursor:pointer;\n  font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;\n  border-radius:.15em;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" stroke=\"%2342445A\" stroke-width=\"5px\" stroke-linecap=\"round\"><path d=\"M45,45L5,5\"></path><path d=\"M45,5L5,45\"></path></svg>') no-repeat 50%;\n  background-size:0;\n  transition:all .3s\n}\n\n.pickr .pcr-button:before{\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:.5em;\n  z-index:-1;\n  z-index:auto\n}\n\n.pickr .pcr-button:after,.pickr .pcr-button:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  border-radius:.15em\n}\n\n.pickr .pcr-button:after{\n  transition:background .3s;\n  background:currentColor\n}\n\n.pickr .pcr-button.clear{\n  background-size:70%\n}\n\n.pickr .pcr-button.clear:before{\n  opacity:0\n}\n\n.pickr .pcr-button.clear:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor\n}\n\n.pickr .pcr-button.disabled{\n  cursor:not-allowed\n}\n\n.pcr-app *,.pickr *{\n  box-sizing:border-box;\n  outline:none;\n  border:none;\n  -webkit-appearance:none\n}\n\n.pcr-app button.pcr-active,.pcr-app button:focus,.pcr-app input.pcr-active,.pcr-app input:focus,.pickr button.pcr-active,.pickr button:focus,.pickr input.pcr-active,.pickr input:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor\n}\n\n.pcr-app .pcr-palette,.pcr-app .pcr-slider,.pickr .pcr-palette,.pickr .pcr-slider{\n  transition:box-shadow .3s\n}\n\n.pcr-app .pcr-palette:focus,.pcr-app .pcr-slider:focus,.pickr .pcr-palette:focus,.pickr .pcr-slider:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(0,0,0,.25)\n}\n\n.pcr-app{\n  position:fixed;\n  display:flex;\n  flex-direction:column;\n  z-index:10000;\n  border-radius:.1em;\n  background:#fff;\n  opacity:0;\n  visibility:hidden;\n  transition:opacity .3s,visibility 0s .3s;\n  font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;\n  box-shadow:0 .15em 1.5em 0 rgba(0,0,0,.1),0 0 1em 0 rgba(0,0,0,.03);\n  left:0;\n  top:0\n}\n\n.pcr-app.visible{\n  transition:opacity .3s;\n  visibility:visible;\n  opacity:1\n}\n\n.pcr-app .pcr-swatches{\n  display:flex;\n  flex-wrap:wrap;\n  margin-top:.75em\n}\n\n.pcr-app .pcr-swatches.pcr-last{\n  margin:0\n}\n\n@supports (display:grid){\n  .pcr-app .pcr-swatches{\n    display:grid;\n    align-items:center;\n    grid-template-columns:repeat(auto-fit,1.75em)\n  }\n}\n\n.pcr-app .pcr-swatches>button{\n  font-size:1em;\n  position:relative;\n  width:calc(1.75em - 5px);\n  height:calc(1.75em - 5px);\n  border-radius:.15em;\n  cursor:pointer;\n  margin:2.5px;\n  flex-shrink:0;\n  justify-self:center;\n  transition:all .15s;\n  overflow:hidden;\n  background:transparent;\n  z-index:1\n}\n\n.pcr-app .pcr-swatches>button:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:6px;\n  border-radius:.15em;\n  z-index:-1\n}\n\n.pcr-app .pcr-swatches>button:after{\n  content:\"\";\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:currentColor;\n  border:1px solid rgba(0,0,0,.05);\n  border-radius:.15em;\n  box-sizing:border-box\n}\n\n.pcr-app .pcr-swatches>button:hover{\n  -webkit-filter:brightness(1.05);\n  filter:brightness(1.05)\n}\n\n.pcr-app .pcr-swatches>button:not(.pcr-active){\n  box-shadow:none\n}\n\n.pcr-app .pcr-interaction{\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  margin:0 -.2em\n}\n\n.pcr-app .pcr-interaction>*{\n  margin:0 .2em\n}\n\n.pcr-app .pcr-interaction input{\n  letter-spacing:.07em;\n  font-size:.75em;\n  text-align:center;\n  cursor:pointer;\n  color:#75797e;\n  background:#f1f3f4;\n  border-radius:.15em;\n  transition:all .15s;\n  padding:.45em .5em;\n  margin-top:.75em\n}\n\n.pcr-app .pcr-interaction input:hover{\n  -webkit-filter:brightness(.975);\n  filter:brightness(.975)\n}\n\n.pcr-app .pcr-interaction input:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(66,133,244,.75)\n}\n\n.pcr-app .pcr-interaction .pcr-result{\n  color:#75797e;\n  text-align:left;\n  flex:1 1 8em;\n  min-width:8em;\n  transition:all .2s;\n  border-radius:.15em;\n  background:#f1f3f4;\n  cursor:text\n}\n\n.pcr-app .pcr-interaction .pcr-result::-moz-selection{\n  background:#4285f4;\n  color:#fff\n}\n\n.pcr-app .pcr-interaction .pcr-result::selection{\n  background:#4285f4;\n  color:#fff\n}\n\n.pcr-app .pcr-interaction .pcr-type.active{\n  color:#fff;\n  background:#4285f4\n}\n\n.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear,.pcr-app .pcr-interaction .pcr-save{\n  width:auto;\n  color:#fff\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:hover,.pcr-app .pcr-interaction .pcr-clear:hover,.pcr-app .pcr-interaction .pcr-save:hover{\n  -webkit-filter:brightness(.925);\n  filter:brightness(.925)\n}\n\n.pcr-app .pcr-interaction .pcr-save{\n  background:#4285f4\n}\n\n.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear{\n  background:#f44250\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:focus,.pcr-app .pcr-interaction .pcr-clear:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(244,66,80,.75)\n}\n\n.pcr-app .pcr-selection .pcr-picker{\n  position:absolute;\n  height:18px;\n  width:18px;\n  border:2px solid #fff;\n  border-radius:100%;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity,.pcr-app .pcr-selection .pcr-color-palette{\n  position:relative;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  display:flex;\n  flex-direction:column;\n  cursor:grab;\n  cursor:-webkit-grab\n}\n\n.pcr-app .pcr-selection .pcr-color-chooser:active,.pcr-app .pcr-selection .pcr-color-opacity:active,.pcr-app .pcr-selection .pcr-color-palette:active{\n  cursor:grabbing;\n  cursor:-webkit-grabbing\n}\n\n.pcr-app[data-theme=nano]{\n  width:14.25em;\n  max-width:95vw\n}\n\n.pcr-app[data-theme=nano] .pcr-swatches{\n  margin-top:.6em;\n  padding:0 .6em\n}\n\n.pcr-app[data-theme=nano] .pcr-interaction{\n  padding:0 .6em .6em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection{\n  display:grid;\n  grid-gap:.6em;\n  grid-template-columns:1fr 4fr;\n  grid-template-rows:5fr auto auto;\n  align-items:center;\n  height:10.5em;\n  width:100%;\n  align-self:flex-start\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview{\n  grid-area:2/1/4/1;\n  height:100%;\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  justify-content:center;\n  margin-left:.6em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-last-color{\n  display:none\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color{\n  position:relative;\n  background:currentColor;\n  width:2em;\n  height:2em;\n  border-radius:50em;\n  overflow:hidden\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:.5em;\n  border-radius:.15em;\n  z-index:-1\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette{\n  grid-area:1/1/2/3;\n  width:100%;\n  height:100%;\n  z-index:1\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette{\n  border-radius:.15em;\n  width:100%;\n  height:100%\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:.5em;\n  border-radius:.15em;\n  z-index:-1\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser{\n  grid-area:2/2/2/2\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{\n  grid-area:3/2/3/2\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{\n  height:.5em;\n  margin:0 .6em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-picker,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-picker{\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{\n  flex-grow:1;\n  border-radius:50em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider{\n  background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{\n  background:linear-gradient(90deg,transparent,#000),url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:100%,.25em\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file has been generated from mustache.mjs
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */
  function primitiveHasOwnProperty (primitive, propName) {
    return (
      primitive != null
      && typeof primitive !== 'object'
      && primitive.hasOwnProperty
      && primitive.hasOwnProperty(propName)
    );
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?
    var indentation = '';  // Tracks indentation for tags that use it
    var tagIndex = 0;      // Stores a count of number of tags encountered on a line

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += ' ';
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
            indentation = '';
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      if (type == '>') {
        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
      } else {
        token = [ type, value, start, scanner.pos ];
      }
      tagIndex++;
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    stripSpace();

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          intermediateValue = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = (
                hasProperty(intermediateValue, names[index])
                || primitiveHasOwnProperty(intermediateValue, names[index])
              );

            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];

          /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) {
          value = intermediateValue;
          break;
        }

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.templateCache = {
      _cache: {},
      set: function set (key, value) {
        this._cache[key] = value;
      },
      get: function get (key) {
        return this._cache[key];
      },
      clear: function clear () {
        this._cache = {};
      }
    };
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    if (typeof this.templateCache !== 'undefined') {
      this.templateCache.clear();
    }
  };

  /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
    var isCacheEnabled = typeof cache !== 'undefined';
    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

    if (tokens == undefined) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `tags` argument is given here it must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   */
  Writer.prototype.render = function render (template, view, partials, tags) {
    var tokens = this.parse(template, tags);
    var context = (view instanceof Context) ? view : new Context(view, undefined);
    return this.renderTokens(tokens, context, partials, template, tags);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, tags) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, tags);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, '');
    var partialByNl = partial.split('\n');
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join('\n');
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials, tags) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      return this.renderTokens(this.parse(indentedValue, tags), context, partials, indentedValue, tags);
    }
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  var mustache = {
    name: 'mustache.js',
    version: '4.0.1',
    tags: [ '{{', '}}' ],
    clearCache: undefined,
    escape: undefined,
    parse: undefined,
    render: undefined,
    Scanner: undefined,
    Context: undefined,
    Writer: undefined,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache (cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache () {
      return defaultWriter.templateCache;
    }
  };

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer. If the optional `tags` argument is given here it must be an
   * array with two string values: the opening and closing tags used in the
   * template (e.g. [ "<%", "%>" ]). The default is to mustache.tags.
   */
  mustache.render = function render (template, view, partials, tags) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials, tags);
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;

})));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/code.stub.html":
/*!****************************!*\
  !*** ./src/code.stub.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"text-gray-500\">// tailwind.config.js</span><br>\nmodule.exports = {<br>\n&nbsp;&nbsp;theme: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;extend: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name}}: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'100': '{{100}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'200': '{{200}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'300': '{{300}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'400': '{{400}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'500': '{{500}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'600': '{{600}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'700': '{{700}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'800': '{{800}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'900': '{{900}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;}<br>\n}";

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/nano.min.css */ "./node_modules/@simonwep/pickr/dist/themes/nano.min.css");
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code_stub_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code.stub.html */ "./src/code.stub.html");
/* harmony import */ var _code_stub_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_code_stub_html__WEBPACK_IMPORTED_MODULE_4__);






function rgbToHex(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

var pickrButton = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  el: '.pickr',
  theme: 'nano',
  // or 'monolith', or 'nano'
  "default": '#2961B1',
  comparison: false,
  showAlways: true,
  container: '.pickr-ctrl',
  appClass: 'picker',
  useAsButton: true,
  components: {
    // Main components
    preview: true,
    opacity: false,
    hue: true,
    // Input / output Options
    interaction: {
      input: true
    }
  }
});
var output = _model__WEBPACK_IMPORTED_MODULE_2___default()('#376AB4');
draw(output);
pickrButton.on('change', function (instance) {
  output = _model__WEBPACK_IMPORTED_MODULE_2___default()(instance.toHEXA().toString());
  draw(output);
});
document.querySelector('.name').addEventListener('input', function (e) {
  var name = 'valencia';
  if (e.target.value !== '') name = e.target.value;
  draw(output, name);
});

function draw(output) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'valencia';
  document.getElementById('output1').style.backgroundColor = 'rgb(' + output.r1 * 255 + ',' + output.g1 * 255 + ',' + output.b1 * 255 + ')';
  document.getElementById('output2').style.backgroundColor = 'rgb(' + output.r2 * 255 + ',' + output.g2 * 255 + ',' + output.b2 * 255 + ')';
  document.getElementById('output3').style.backgroundColor = 'rgb(' + output.r3 * 255 + ',' + output.g3 * 255 + ',' + output.b3 * 255 + ')';
  document.getElementById('output4').style.backgroundColor = 'rgb(' + output.r4 * 255 + ',' + output.g4 * 255 + ',' + output.b4 * 255 + ')';
  document.getElementById('output5').style.backgroundColor = 'rgb(' + output.r5 * 255 + ',' + output.g5 * 255 + ',' + output.b5 * 255 + ')';
  document.getElementById('output6').style.backgroundColor = 'rgb(' + output.r6 * 255 + ',' + output.g6 * 255 + ',' + output.b6 * 255 + ')';
  document.getElementById('output7').style.backgroundColor = 'rgb(' + output.r7 * 255 + ',' + output.g7 * 255 + ',' + output.b7 * 255 + ')';
  document.getElementById('output8').style.backgroundColor = 'rgb(' + output.r8 * 255 + ',' + output.g8 * 255 + ',' + output.b8 * 255 + ')';
  document.getElementById('output9').style.backgroundColor = 'rgb(' + output.r9 * 255 + ',' + output.g9 * 255 + ',' + output.b9 * 255 + ')';
  document.getElementById('text1').style.color = 'rgb(' + output.r1 * 255 + ',' + output.g1 * 255 + ',' + output.b1 * 255 + ')';
  document.getElementById('text2').style.color = 'rgb(' + output.r2 * 255 + ',' + output.g2 * 255 + ',' + output.b2 * 255 + ')';
  document.getElementById('text3').style.color = 'rgb(' + output.r3 * 255 + ',' + output.g3 * 255 + ',' + output.b3 * 255 + ')';
  document.getElementById('text4').style.color = 'rgb(' + output.r4 * 255 + ',' + output.g4 * 255 + ',' + output.b4 * 255 + ')';
  document.getElementById('text5').style.color = 'rgb(' + output.r5 * 255 + ',' + output.g5 * 255 + ',' + output.b5 * 255 + ')';
  document.getElementById('text6').style.color = 'rgb(' + output.r6 * 255 + ',' + output.g6 * 255 + ',' + output.b6 * 255 + ')';
  document.getElementById('text7').style.color = 'rgb(' + output.r7 * 255 + ',' + output.g7 * 255 + ',' + output.b7 * 255 + ')';
  document.getElementById('text8').style.color = 'rgb(' + output.r8 * 255 + ',' + output.g8 * 255 + ',' + output.b8 * 255 + ')';
  document.getElementById('text9').style.color = 'rgb(' + output.r9 * 255 + ',' + output.g9 * 255 + ',' + output.b9 * 255 + ')';
  document.getElementById('hex1').innerHTML = rgbToHex(output.r1 * 255, output.g1 * 255, output.b1 * 255);
  document.getElementById('hex2').innerHTML = rgbToHex(output.r2 * 255, output.g2 * 255, output.b2 * 255);
  document.getElementById('hex3').innerHTML = rgbToHex(output.r3 * 255, output.g3 * 255, output.b3 * 255);
  document.getElementById('hex4').innerHTML = rgbToHex(output.r4 * 255, output.g4 * 255, output.b4 * 255);
  document.getElementById('hex5').innerHTML = rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255);
  document.getElementById('hex6').innerHTML = rgbToHex(output.r6 * 255, output.g6 * 255, output.b6 * 255);
  document.getElementById('hex7').innerHTML = rgbToHex(output.r7 * 255, output.g7 * 255, output.b7 * 255);
  document.getElementById('hex8').innerHTML = rgbToHex(output.r8 * 255, output.g8 * 255, output.b8 * 255);
  document.getElementById('hex9').innerHTML = rgbToHex(output.r9 * 255, output.g9 * 255, output.b9 * 255);

  var view = function view(output, name) {
    return {
      'name': name,
      '100': rgbToHex(output.r1 * 255, output.g1 * 255, output.b1 * 255),
      '200': rgbToHex(output.r2 * 255, output.g2 * 255, output.b2 * 255),
      '300': rgbToHex(output.r3 * 255, output.g3 * 255, output.b3 * 255),
      '400': rgbToHex(output.r4 * 255, output.g4 * 255, output.b4 * 255),
      '500': rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255),
      '600': rgbToHex(output.r6 * 255, output.g6 * 255, output.b6 * 255),
      '700': rgbToHex(output.r7 * 255, output.g7 * 255, output.b7 * 255),
      '800': rgbToHex(output.r8 * 255, output.g8 * 255, output.b8 * 255),
      '900': rgbToHex(output.r9 * 255, output.g9 * 255, output.b9 * 255)
    };
  };

  document.querySelector('.code').innerHTML = mustache__WEBPACK_IMPORTED_MODULE_3___default.a.render(_code_stub_html__WEBPACK_IMPORTED_MODULE_4___default.a, view(output, name));
}

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function model(input) {
  input = hexToRgb(input);
  return {
    'r1': 1 / (1 + 1 / Math.exp(3.3931996822357178 + 2.9373438358306885 * (input['r'] || 0) - 1.5267738103866577 * (input['g'] || 0) - 1.329411506652832 * (input['b'] || 0))),
    'g1': 1 / (1 + 1 / Math.exp(4.262808799743652 - 1.134360909461975 * (input['r'] || 0) + 2.66113018989563 * (input['g'] || 0) - 2.068115711212158 * (input['b'] || 0))),
    'b1': 1 / (1 + 1 / Math.exp(3.578423023223877 - 0.7391670942306519 * (input['r'] || 0) - 1.3643906116485596 * (input['g'] || 0) + 2.260179281234741 * (input['b'] || 0))),
    'r2': 1 / (1 + 1 / Math.exp(2.0889370441436768 + 3.4699435234069824 * (input['r'] || 0) - 2.027162790298462 * (input['g'] || 0) - 1.3158624172210693 * (input['b'] || 0))),
    'g2': 1 / (1 + 1 / Math.exp(2.70823335647583 - 1.1384357213974 * (input['r'] || 0) + 2.571422815322876 * (input['g'] || 0) - 1.8921228647232056 * (input['b'] || 0))),
    'b2': 1 / (1 + 1 / Math.exp(2.1019656658172607 - 0.7525323033332825 * (input['r'] || 0) - 1.7548892498016357 * (input['g'] || 0) + 2.678703546524048 * (input['b'] || 0))),
    'r3': 1 / (1 + 1 / Math.exp(1.4434012174606323 + 4.219131946563721 * (input['r'] || 0) - 2.78094482421875 * (input['g'] || 0) - 1.3074277639389038 * (input['b'] || 0))),
    'g3': 1 / (1 + 1 / Math.exp(1.8724956512451172 - 1.2183971405029297 * (input['r'] || 0) + 2.4154160022735596 * (input['g'] || 0) - 1.5907050371170044 * (input['b'] || 0))),
    'b3': 1 / (1 + 1 / Math.exp(1.3894414901733398 - 1.1438252925872803 * (input['r'] || 0) - 2.0477025508880615 * (input['g'] || 0) + 3.356908082962036 * (input['b'] || 0))),
    'r4': 1 / (1 + 1 / Math.exp(0.9037853479385376 + 5.375821113586426 * (input['r'] || 0) - 3.743346691131592 * (input['g'] || 0) - 1.540840744972229 * (input['b'] || 0))),
    'g4': 1 / (1 + 1 / Math.exp(1.2082021236419678 - 1.4940873384475708 * (input['r'] || 0) + 2.711359739303589 * (input['g'] || 0) - 1.653975248336792 * (input['b'] || 0))),
    'b4': 1 / (1 + 1 / Math.exp(0.8242194652557373 - 1.6730866432189941 * (input['r'] || 0) - 2.42012619972229 * (input['g'] || 0) + 4.251338005065918 * (input['b'] || 0))),
    'r5': 1 / (1 + 1 / Math.exp(0.4614700675010681 + 6.209679126739502 * (input['r'] || 0) - 4.344320774078369 * (input['g'] || 0) - 1.732921838760376 * (input['b'] || 0))),
    'g5': 1 / (1 + 1 / Math.exp(0.6249168515205383 - 1.3420605659484863 * (input['r'] || 0) + 2.5369529724121094 * (input['g'] || 0) - 1.5832467079162598 * (input['b'] || 0))),
    'b5': 1 / (1 + 1 / Math.exp(0.35692787170410156 - 1.7342549562454224 * (input['r'] || 0) - 2.8520147800445557 * (input['g'] || 0) + 4.867735385894775 * (input['b'] || 0))),
    'r6': 1 / (1 + 1 / Math.exp(-0.1365586370229721 + 5.385352611541748 * (input['r'] || 0) - 3.6185216903686523 * (input['g'] || 0) - 1.4202663898468018 * (input['b'] || 0))),
    'g6': 1 / (1 + 1 / Math.exp(0.10586927086114883 - 1.5270283222198486 * (input['r'] || 0) + 2.669273853302002 * (input['g'] || 0) - 1.5401948690414429 * (input['b'] || 0))),
    'b6': 1 / (1 + 1 / Math.exp(-0.16909156739711761 - 2.0936553478240967 * (input['r'] || 0) - 2.6209301948547363 * (input['g'] || 0) + 5.135876655578613 * (input['b'] || 0))),
    'r7': 1 / (1 + 1 / Math.exp(-0.6450396776199341 + 4.142667293548584 * (input['r'] || 0) - 2.6349234580993652 * (input['g'] || 0) - 0.9859451055526733 * (input['b'] || 0))),
    'g7': 1 / (1 + 1 / Math.exp(-0.3415127694606781 - 1.3362336158752441 * (input['r'] || 0) + 2.370952606201172 * (input['g'] || 0) - 1.3531779050827026 * (input['b'] || 0))),
    'b7': 1 / (1 + 1 / Math.exp(-0.5134440064430237 - 1.5882891416549683 * (input['r'] || 0) - 2.211850881576538 * (input['g'] || 0) + 4.3141021728515625 * (input['b'] || 0))),
    'r8': 1 / (1 + 1 / Math.exp(-0.9648312330245972 + 3.0873806476593018 * (input['r'] || 0) - 1.7336136102676392 * (input['g'] || 0) - 0.8347358703613281 * (input['b'] || 0))),
    'g8': 1 / (1 + 1 / Math.exp(-0.7691812515258789 - 1.0916533470153809 * (input['r'] || 0) + 1.904859185218811 * (input['g'] || 0) - 1.0584231615066528 * (input['b'] || 0))),
    'b8': 1 / (1 + 1 / Math.exp(-0.8678452968597412 - 0.955710232257843 * (input['r'] || 0) - 1.7320175170898438 * (input['g'] || 0) + 3.140606641769409 * (input['b'] || 0))),
    'r9': 1 / (1 + 1 / Math.exp(-1.2401903867721558 + 2.3200371265411377 * (input['r'] || 0) - 1.14811110496521 * (input['g'] || 0) - 0.7518591284751892 * (input['b'] || 0))),
    'g9': 1 / (1 + 1 / Math.exp(-1.072513222694397 - 0.9722929000854492 * (input['r'] || 0) + 1.5720200538635254 * (input['g'] || 0) - 0.7999172210693359 * (input['b'] || 0))),
    'b9': 1 / (1 + 1 / Math.exp(-1.170242190361023 - 0.6915587782859802 * (input['r'] || 0) - 1.4467790126800537 * (input['g'] || 0) + 2.5076963901519775 * (input['b'] || 0)))
  };
}

var hexToRgb = function hexToRgb(hex) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return '#' + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
  var keys = ['r' + id, 'g' + id, 'b' + id];
  var output = {};
  keys.forEach(function (key, num) {
    output[key] = arr[num] / 255;
  });
  return output;
};

module.exports = model;

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/main.js ./src/main.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/domingomartinmancera/code/dmarman.github.io/src/main.js */"./src/main.js");
module.exports = __webpack_require__(/*! /Users/domingomartinmancera/code/dmarman.github.io/src/main.css */"./src/main.css");


/***/ })

/******/ });