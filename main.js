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

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var limit = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var clip_rgb = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
        var name = list[i];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var unpack = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var last = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb,
    	limit: limit,
    	type: type,
    	unpack: unpack,
    	last: last,
    	PI: PI,
    	TWOPI: PI*2,
    	PITHIRD: PI/3,
    	DEG2RAD: PI / 180,
    	RAD2DEG: 180 / PI
    };

    var input = {
    	format: {},
    	autodetect: []
    };

    var last$1 = utils.last;
    var clip_rgb$1 = utils.clip_rgb;
    var type$1 = utils.type;


    var Color = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$1(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$1(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!input.sorted) {
                input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (input.format[mode]) {
            var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$1(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color.prototype.toString = function toString () {
        if (type$1(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color;

    var chroma = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
    };

    chroma.Color = Color_1;
    chroma.version = '2.1.0';

    var chroma_1 = chroma;

    var unpack$1 = utils.unpack;
    var max = Math.max;

    var rgb2cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$1(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max(r,max(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk;

    var unpack$2 = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$2(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var unpack$3 = utils.unpack;
    var type$2 = utils.type;



    Color_1.prototype.cmyk = function() {
        return rgb2cmyk_1(this._rgb);
    };

    chroma_1.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
    };

    input.format.cmyk = cmyk2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'cmyk');
            if (type$2(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$4 = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$4(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css;

    var unpack$5 = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$5(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl;

    var unpack$6 = utils.unpack;
    var last$3 = utils.last;


    var round = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$6(args, 'rgba');
        var mode = last$3(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css_1(rgb2hsl_1(rgba), mode);
        }
        rgba[0] = round(rgba[0]);
        rgba[1] = round(rgba[1]);
        rgba[2] = round(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css;

    var unpack$7 = utils.unpack;
    var round$1 = Math.round;

    var hsl2rgb = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$7(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$2 = Math.round;

    var css2rgb = function (css) {
        css = css.toLowerCase().trim();
        var m;

        if (input.format.named) {
            try {
                return input.format.named(css);
            } catch (e) {
                // eslint-disable-next-line
            }
        }

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb_1(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb_1(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb;

    var type$3 = utils.type;




    Color_1.prototype.css = function(mode) {
        return rgb2css_1(this._rgb, mode);
    };

    chroma_1.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
    };

    input.format.css = css2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                return 'css';
            }
        }
    });

    var unpack$8 = utils.unpack;

    input.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$8(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma_1.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
    };

    Color_1.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$9 = utils.unpack;

    var rgb2hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$9(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg;

    var unpack$a = utils.unpack;
    var floor = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$a(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$b = utils.unpack;
    var type$4 = utils.type;






    Color_1.prototype.hcg = function() {
        return rgb2hcg_1(this._rgb);
    };

    chroma_1.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
    };

    input.format.hcg = hcg2rgb_1;

    input.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$b(args, 'hcg');
            if (type$4(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$c = utils.unpack;
    var last$4 = utils.last;
    var round$3 = Math.round;

    var rgb2hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$c(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last$4(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

    var hex2rgb = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb;

    var type$5 = utils.type;




    Color_1.prototype.hex = function(mode) {
        return rgb2hex_1(this._rgb, mode);
    };

    chroma_1.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
    };

    input.format.hex = hex2rgb_1;
    input.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$5(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                return 'hex';
            }
        }
    });

    var unpack$d = utils.unpack;
    var TWOPI = utils.TWOPI;
    var min = Math.min;
    var sqrt = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI - h;
            }
            h /= TWOPI;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi;

    var unpack$e = utils.unpack;
    var limit$1 = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$e(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit$1(i*r*3);
        g = limit$1(i*g*3);
        b = limit$1(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$f = utils.unpack;
    var type$6 = utils.type;






    Color_1.prototype.hsi = function() {
        return rgb2hsi_1(this._rgb);
    };

    chroma_1.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
    };

    input.format.hsi = hsi2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'hsi');
            if (type$6(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$g = utils.unpack;
    var type$7 = utils.type;






    Color_1.prototype.hsl = function() {
        return rgb2hsl_1(this._rgb);
    };

    chroma_1.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
    };

    input.format.hsl = hsl2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$g(args, 'hsl');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$h = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$h(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv = rgb2hsl$1;

    var unpack$i = utils.unpack;
    var floor$1 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$i(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$1(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$j = utils.unpack;
    var type$8 = utils.type;






    Color_1.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma_1.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
    };

    input.format.hsv = hsv2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$j(args, 'hsv');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var unpack$k = utils.unpack;
    var pow = Math.pow;

    var rgb2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$k(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > labConstants.t3) { return pow(t, 1 / 3); }
        return t / labConstants.t2 + labConstants.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab;

    var unpack$l = utils.unpack;
    var pow$1 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$l(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = labConstants.Yn * lab_xyz(y);
        x = labConstants.Xn * lab_xyz(x);
        z = labConstants.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
    };

    var lab2rgb_1 = lab2rgb;

    var unpack$m = utils.unpack;
    var type$9 = utils.type;






    Color_1.prototype.lab = function() {
        return rgb2lab_1(this._rgb);
    };

    chroma_1.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
    };

    input.format.lab = lab2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'lab');
            if (type$9(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$n = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$1 = Math.sqrt;
    var atan2 = Math.atan2;
    var round$4 = Math.round;

    var lab2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$n(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$1(a * a + b * b);
        var h = (atan2(b, a) * RAD2DEG + 360) % 360;
        if (round$4(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch;

    var unpack$o = utils.unpack;



    var rgb2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab_1(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch_1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch;

    var unpack$p = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin = Math.sin;
    var cos$1 = Math.cos;

    var lch2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$p(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$1(h) * c, sin(h) * c]
    };

    var lch2lab_1 = lch2lab;

    var unpack$q = utils.unpack;



    var lch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$q(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab_1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb_1 (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb;

    var unpack$r = utils.unpack;


    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$r(args, 'hcl').reverse();
        return lch2rgb_1.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$s = utils.unpack;
    var type$a = utils.type;






    Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
    Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

    chroma_1.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
    };
    chroma_1.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
    };

    input.format.lch = lch2rgb_1;
    input.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$s(args, m);
            if (type$a(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11;

    var type$b = utils.type;





    Color_1.prototype.name = function() {
        var hex = rgb2hex_1(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
        throw new Error('unknown color name: '+name);
    };

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$t = utils.unpack;

    var rgb2num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$t(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num;

    var type$c = utils.type;

    var num2rgb = function (num) {
        if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var type$d = utils.type;



    Color_1.prototype.num = function() {
        return rgb2num_1(this._rgb);
    };

    chroma_1.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
    };

    input.format.num = num2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var unpack$u = utils.unpack;
    var type$e = utils.type;
    var round$5 = Math.round;

    Color_1.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$5);
    };

    Color_1.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$5(v)) : v;
        });
    };

    chroma_1.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
    };

    input.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$u(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$u(args, 'rgba');
            if (type$e(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log = Math.log;

    var temperature2rgb = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/


    var unpack$v = utils.unpack;
    var round$6 = Math.round;

    var rgb2temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$v(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb_1(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round$6(temp);
    };

    var rgb2temperature_1 = rgb2temperature;

    Color_1.prototype.temp =
    Color_1.prototype.kelvin =
    Color_1.prototype.temperature = function() {
        return rgb2temperature_1(this._rgb);
    };

    chroma_1.temp =
    chroma_1.kelvin =
    chroma_1.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
    };

    input.format.temp =
    input.format.kelvin =
    input.format.temperature = temperature2rgb_1;

    var type$f = utils.type;

    Color_1.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$f(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    Color_1.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    Color_1.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= labConstants.Kn * amount;
    	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
    };

    Color_1.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color_1.prototype.darker = Color_1.prototype.darken;
    Color_1.prototype.brighter = Color_1.prototype.brighten;

    Color_1.prototype.get = function(mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var type$g = utils.type;
    var pow$2 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color_1.prototype.luminance = function(lum) {
        if (lum !== undefined && type$g(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color_1([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color_1([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
            return new Color_1(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
    };

    var interpolator = {};

    var type$h = utils.type;


    var mix = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
        if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    Color_1.prototype.mix =
    Color_1.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    Color_1.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    Color_1.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += labConstants.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
    };

    Color_1.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var type$i = utils.type;

    Color_1.prototype.set = function(mc, value, mutate) {
        if ( mutate === void 0 ) mutate=false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) {
                if (type$i(value) == 'string') {
                    switch(value.charAt(0)) {
                        case '+': src[i] += +value; break;
                        case '-': src[i] += +value; break;
                        case '*': src[i] *= +(value.substr(1)); break;
                        case '/': src[i] /= +(value.substr(1)); break;
                        default: src[i] = +value;
                    }
                } else if (type$i(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color_1(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var rgb$1 = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator.rgb = rgb$1;

    var sqrt$2 = Math.sqrt;
    var pow$3 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color_1(
            sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
            sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
            sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator.lrgb = lrgb;

    var lab$1 = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator.lab = lab$1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1-(hue0+360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1+360-hue0;
            } else{
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1-lbv0);
        return new Color_1([hue, sat, lbv], m);
    };

    var lch$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator.lch = lch$1;
    interpolator.hcl = lch$1;

    var num$1 = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color_1(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator.num = num$1;

    var hcg$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator.hcg = hcg$1;

    var hsi$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator.hsi = hsi$1;

    var hsl$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator.hsl = hsl$1;

    var hsv$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator.hsv = hsv$1;

    var clip_rgb$2 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$3 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$1 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode, weights) {
        if ( mode === void 0 ) mode='lrgb';
        if ( weights === void 0 ) weights=null;

        var l = colors.length;
        if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
        // normalize weights
        var k = l / weights.reduce(function(a, b) { return a + b; });
        weights.forEach(function (w,i) { weights[i] *= k; });
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color_1(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors, weights)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$1(A) * weights[0];
            }
        }

        var alpha = first.alpha() * weights[0];
        colors.forEach(function (c,ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci+1];
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i] += weights[ci+1];
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A) * weights[ci+1];
                        dy += sin$1(A) * weights[ci+1];
                    } else {
                        xyz[i] += xyz2[i] * weights[ci+1];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors, weights) {
        var l = colors.length;
        var xyz = [0,0,0,0];
        for (var i=0; i < colors.length; i++) {
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$3(xyz[0]);
        xyz[1] = sqrt$3(xyz[1]);
        xyz[2] = sqrt$3(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color_1(clip_rgb$2(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze


    var type$j = utils.type;

    var pow$5 = Math.pow;

    var scale = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma_1('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                chroma_1.brewer[colors.toLowerCase()]) {
                colors = chroma_1.brewer[colors.toLowerCase()];
            }
            if (type$j(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma_1(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tMapLightness = function (t) { return t; };
        var tMapDomain = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            // domain map
            t = tMapDomain(t);

            if (!bypassMap) {
                t = tMapLightness(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$5(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$j(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$j(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma_1(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$j(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma_1.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma_1.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                    var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                    if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                        tMapDomain = function (t) {
                            if (t <= 0 || t >= 1) { return t; }
                            var i = 0;
                            while (t >= tBreaks[i+1]) { i++; }
                            var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                            var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                            return out;
                        };
                    }

                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors, _pos);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tMapLightness = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tMapLightness = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$j(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma_1[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma_1(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab




    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color_1(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 5) {
            var I0 = bezier(colors.slice(0, 3));
            var I1 = bezier(colors.slice(2, 5));
            I = function(t) {
                if (t < 0.5) {
                    return I0(t*2);
                } else {
                    return I1((t-0.5)*2);
                }
            };
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */




    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma_1(top).rgb();
            var c1 = chroma_1(bottom).rgb();
            return chroma_1.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken$1 = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken$1));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$k = utils.type;
    var clip_rgb$3 = utils.clip_rgb;
    var TWOPI$2 = utils.TWOPI;
    var pow$6 = Math.pow;
    var sin$2 = Math.sin;
    var cos$3 = Math.cos;


    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$k(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
            var l = pow$6(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$3(a);
            var sin_a = sin$2(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$k(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$k(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma_1.scale(f); };

        f.hue(hue);

        return f;
    };

    var digits = '0123456789abcdef';

    var floor$2 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$2(random() * 16));
        }
        return new Color_1(code, 'hex');
    };

    var log$1 = Math.log;
    var pow$7 = Math.pow;
    var floor$3 = Math.floor;
    var abs = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log$1(min);
            var max_log = Math.LOG10E * log$1(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor$3(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var sqrt$4 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var abs$1 = Math.abs;
    var cos$4 = Math.cos;
    var PI$2 = Math.PI;

    var deltaE = function(a, b, L, C) {
        if ( L === void 0 ) L=1;
        if ( C === void 0 ) C=1;

        // Delta E (CMC)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
        a = new Color_1(a);
        b = new Color_1(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var c1 = sqrt$4((a1 * a1) + (b1 * b1));
        var c2 = sqrt$4((a2 * a2) + (b2 * b2));
        var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
        var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
        var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
        while (h1 < 0) { h1 += 360; }
        while (h1 >= 360) { h1 -= 360; }
        var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
        var c4 = c1 * c1 * c1 * c1;
        var f = sqrt$4(c4 / (c4 + 1900.0));
        var sh = sc * (((f * t) + 1.0) - f);
        var delL = L1 - L2;
        var delC = c1 - c2;
        var delA = a1 - a2;
        var delB = b1 - b2;
        var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
        var v1 = delL / (L * sl);
        var v2 = delC / (C * sc);
        var v3 = sh;
        return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
    };

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:




    var scales = {
    	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff'], [0,.25,.75,1]).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
        var key = list$1[i$1];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors















    // operators --> modify existing Colors










    // interpolators










    // generators -- > create new colors
    chroma_1.average = average;
    chroma_1.bezier = bezier_1;
    chroma_1.blend = blend_1;
    chroma_1.cubehelix = cubehelix;
    chroma_1.mix = chroma_1.interpolate = mix;
    chroma_1.random = random_1;
    chroma_1.scale = scale;

    // other utility methods
    chroma_1.analyze = analyze_1.analyze;
    chroma_1.contrast = contrast;
    chroma_1.deltaE = deltaE;
    chroma_1.distance = distance;
    chroma_1.limits = analyze_1.limits;
    chroma_1.valid = valid;

    // scale
    chroma_1.scales = scales;

    // colors
    chroma_1.colors = w3cx11_1;
    chroma_1.brewer = colorbrewer_1;

    var chroma_js = chroma_1;

    return chroma_js;

})));


/***/ }),

/***/ "./node_modules/color-namer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-namer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chroma = __webpack_require__(/*! chroma-js */ "./node_modules/color-namer/node_modules/chroma-js/chroma.js")
var WeakMap = __webpack_require__(/*! es6-weak-map */ "./node_modules/es6-weak-map/index.js")

// These `require` statements are all explicit
// to keep the browserify build from breaking
var lists = {
  basic: __webpack_require__(/*! ./lib/colors/basic */ "./node_modules/color-namer/lib/colors/basic.js"),
  html: __webpack_require__(/*! ./lib/colors/html */ "./node_modules/color-namer/lib/colors/html.js"),
  ntc: __webpack_require__(/*! ./lib/colors/ntc */ "./node_modules/color-namer/lib/colors/ntc.js"),
  pantone: __webpack_require__(/*! ./lib/colors/pantone */ "./node_modules/color-namer/lib/colors/pantone.js"),
  roygbiv: __webpack_require__(/*! ./lib/colors/roygbiv */ "./node_modules/color-namer/lib/colors/roygbiv.js"),
  x11: __webpack_require__(/*! ./lib/colors/x11 */ "./node_modules/color-namer/lib/colors/x11.js")
}

var cache = new WeakMap()
var namer = module.exports = function(color, options) {
  options = options || {}

  var cacheKey = {color, options}
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)
  }

  var deltaE = String(options.distance).toLowerCase() === 'deltae';
  color = chroma(color)
  var results = {}
  for (var key in lists) {
    if (options.pick && options.pick.indexOf(key) === -1) {
      continue
    }
    if (options.omit && options.omit.indexOf(key) !== -1) {
      continue
    }
    results[key] = lists[key]
      .map (function(name) {
        name.distance = deltaE ? chroma.deltaE(color, chroma(name.hex)) : chroma.distance(color, chroma(name.hex))
        return name
      })
      .sort (function(a, b) {
        return a.distance - b.distance
      })
  }
  cache.set(cacheKey, results)
  return results
}

namer.chroma = chroma
namer.lists = lists


/***/ }),

/***/ "./node_modules/color-namer/lib/colors/basic.js":
/*!******************************************************!*\
  !*** ./node_modules/color-namer/lib/colors/basic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  { name: 'black', hex: '#000000' },
  { name: 'blue', hex: '#0000FF' },
  { name: 'cyan', hex: '#00FFFF' },
  { name: 'green', hex: '#008000' },
  { name: 'teal', hex: '#008080' },
  { name: 'turquoise', hex: '#40E0D0' },
  { name: 'indigo', hex: '#4B0082' },
  { name: 'gray', hex: '#808080' },
  { name: 'purple', hex: '#800080' },
  { name: 'brown', hex: '#A52A2A' },
  { name: 'tan', hex: '#D2B48C' },
  { name: 'violet', hex: '#EE82EE' },
  { name: 'beige', hex: '#F5F5DC' },
  { name: 'fuchsia', hex: '#FF00FF' },
  { name: 'gold', hex: '#FFD700' },
  { name: 'magenta', hex: '#FF00FF' },
  { name: 'orange', hex: '#FFA500' },
  { name: 'pink', hex: '#FFC0CB' },
  { name: 'red', hex: '#FF0000' },
  { name: 'white', hex: '#FFFFFF' },
  { name: 'yellow', hex: '#FFFF00' }
]


/***/ }),

/***/ "./node_modules/color-namer/lib/colors/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/color-namer/lib/colors/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  { name: 'aqua', hex: '#00FFFF' },
  { name: 'aliceblue', hex: '#F0F8FF' },
  { name: 'antiquewhite', hex: '#FAEBD7' },
  { name: 'black', hex: '#000000' },
  { name: 'blue', hex: '#0000FF' },
  { name: 'cyan', hex: '#00FFFF' },
  { name: 'darkblue', hex: '#00008B' },
  { name: 'darkcyan', hex: '#008B8B' },
  { name: 'darkgreen', hex: '#006400' },
  { name: 'darkturquoise', hex: '#00CED1' },
  { name: 'deepskyblue', hex: '#00BFFF' },
  { name: 'green', hex: '#008000' },
  { name: 'lime', hex: '#00FF00' },
  { name: 'mediumblue', hex: '#0000CD' },
  { name: 'mediumspringgreen', hex: '#00FA9A' },
  { name: 'navy', hex: '#000080' },
  { name: 'springgreen', hex: '#00FF7F' },
  { name: 'teal', hex: '#008080' },
  { name: 'midnightblue', hex: '#191970' },
  { name: 'dodgerblue', hex: '#1E90FF' },
  { name: 'lightseagreen', hex: '#20B2AA' },
  { name: 'forestgreen', hex: '#228B22' },
  { name: 'seagreen', hex: '#2E8B57' },
  { name: 'darkslategray', hex: '#2F4F4F' },
  { name: 'darkslategrey', hex: '#2F4F4F' },
  { name: 'limegreen', hex: '#32CD32' },
  { name: 'mediumseagreen', hex: '#3CB371' },
  { name: 'turquoise', hex: '#40E0D0' },
  { name: 'royalblue', hex: '#4169E1' },
  { name: 'steelblue', hex: '#4682B4' },
  { name: 'darkslateblue', hex: '#483D8B' },
  { name: 'mediumturquoise', hex: '#48D1CC' },
  { name: 'indigo', hex: '#4B0082' },
  { name: 'darkolivegreen', hex: '#556B2F' },
  { name: 'cadetblue', hex: '#5F9EA0' },
  { name: 'cornflowerblue', hex: '#6495ED' },
  { name: 'mediumaquamarine', hex: '#66CDAA' },
  { name: 'dimgray', hex: '#696969' },
  { name: 'dimgrey', hex: '#696969' },
  { name: 'slateblue', hex: '#6A5ACD' },
  { name: 'olivedrab', hex: '#6B8E23' },
  { name: 'slategray', hex: '#708090' },
  { name: 'slategrey', hex: '#708090' },
  { name: 'lightslategray', hex: '#778899' },
  { name: 'lightslategrey', hex: '#778899' },
  { name: 'mediumslateblue', hex: '#7B68EE' },
  { name: 'lawngreen', hex: '#7CFC00' },
  { name: 'aquamarine', hex: '#7FFFD4' },
  { name: 'chartreuse', hex: '#7FFF00' },
  { name: 'gray', hex: '#808080' },
  { name: 'grey', hex: '#808080' },
  { name: 'maroon', hex: '#800000' },
  { name: 'olive', hex: '#808000' },
  { name: 'purple', hex: '#800080' },
  { name: 'lightskyblue', hex: '#87CEFA' },
  { name: 'skyblue', hex: '#87CEEB' },
  { name: 'blueviolet', hex: '#8A2BE2' },
  { name: 'darkmagenta', hex: '#8B008B' },
  { name: 'darkred', hex: '#8B0000' },
  { name: 'saddlebrown', hex: '#8B4513' },
  { name: 'darkseagreen', hex: '#8FBC8F' },
  { name: 'lightgreen', hex: '#90EE90' },
  { name: 'mediumpurple', hex: '#9370DB' },
  { name: 'darkviolet', hex: '#9400D3' },
  { name: 'palegreen', hex: '#98FB98' },
  { name: 'darkorchid', hex: '#9932CC' },
  { name: 'yellowgreen', hex: '#9ACD32' },
  { name: 'sienna', hex: '#A0522D' },
  { name: 'brown', hex: '#A52A2A' },
  { name: 'darkgray', hex: '#A9A9A9' },
  { name: 'darkgrey', hex: '#A9A9A9' },
  { name: 'greenyellow', hex: '#ADFF2F' },
  { name: 'lightblue', hex: '#ADD8E6' },
  { name: 'paleturquoise', hex: '#AFEEEE' },
  { name: 'lightsteelblue', hex: '#B0C4DE' },
  { name: 'powderblue', hex: '#B0E0E6' },
  { name: 'firebrick', hex: '#B22222' },
  { name: 'darkgoldenrod', hex: '#B8860B' },
  { name: 'mediumorchid', hex: '#BA55D3' },
  { name: 'rosybrown', hex: '#BC8F8F' },
  { name: 'darkkhaki', hex: '#BDB76B' },
  { name: 'silver', hex: '#C0C0C0' },
  { name: 'mediumvioletred', hex: '#C71585' },
  { name: 'indianred', hex: '#CD5C5C' },
  { name: 'peru', hex: '#CD853F' },
  { name: 'chocolate', hex: '#D2691E' },
  { name: 'tan', hex: '#D2B48C' },
  { name: 'lightgray', hex: '#D3D3D3' },
  { name: 'lightgrey', hex: '#D3D3D3' },
  { name: 'thistle', hex: '#D8BFD8' },
  { name: 'goldenrod', hex: '#DAA520' },
  { name: 'orchid', hex: '#DA70D6' },
  { name: 'palevioletred', hex: '#DB7093' },
  { name: 'crimson', hex: '#DC143C' },
  { name: 'gainsboro', hex: '#DCDCDC' },
  { name: 'plum', hex: '#DDA0DD' },
  { name: 'burlywood', hex: '#DEB887' },
  { name: 'lightcyan', hex: '#E0FFFF' },
  { name: 'lavender', hex: '#E6E6FA' },
  { name: 'darksalmon', hex: '#E9967A' },
  { name: 'palegoldenrod', hex: '#EEE8AA' },
  { name: 'violet', hex: '#EE82EE' },
  { name: 'azure', hex: '#F0FFFF' },
  { name: 'honeydew', hex: '#F0FFF0' },
  { name: 'khaki', hex: '#F0E68C' },
  { name: 'lightcoral', hex: '#F08080' },
  { name: 'sandybrown', hex: '#F4A460' },
  { name: 'beige', hex: '#F5F5DC' },
  { name: 'mintcream', hex: '#F5FFFA' },
  { name: 'wheat', hex: '#F5DEB3' },
  { name: 'whitesmoke', hex: '#F5F5F5' },
  { name: 'ghostwhite', hex: '#F8F8FF' },
  { name: 'lightgoldenrodyellow',
    hex: '#FAFAD2' },
  { name: 'linen', hex: '#FAF0E6' },
  { name: 'salmon', hex: '#FA8072' },
  { name: 'oldlace', hex: '#FDF5E6' },
  { name: 'bisque', hex: '#FFE4C4' },
  { name: 'blanchedalmond', hex: '#FFEBCD' },
  { name: 'coral', hex: '#FF7F50' },
  { name: 'cornsilk', hex: '#FFF8DC' },
  { name: 'darkorange', hex: '#FF8C00' },
  { name: 'deeppink', hex: '#FF1493' },
  { name: 'floralwhite', hex: '#FFFAF0' },
  { name: 'fuchsia', hex: '#FF00FF' },
  { name: 'gold', hex: '#FFD700' },
  { name: 'hotpink', hex: '#FF69B4' },
  { name: 'ivory', hex: '#FFFFF0' },
  { name: 'lavenderblush', hex: '#FFF0F5' },
  { name: 'lemonchiffon', hex: '#FFFACD' },
  { name: 'lightpink', hex: '#FFB6C1' },
  { name: 'lightsalmon', hex: '#FFA07A' },
  { name: 'lightyellow', hex: '#FFFFE0' },
  { name: 'magenta', hex: '#FF00FF' },
  { name: 'mistyrose', hex: '#FFE4E1' },
  { name: 'moccasin', hex: '#FFE4B5' },
  { name: 'navajowhite', hex: '#FFDEAD' },
  { name: 'orange', hex: '#FFA500' },
  { name: 'orangered', hex: '#FF4500' },
  { name: 'papayawhip', hex: '#FFEFD5' },
  { name: 'peachpuff', hex: '#FFDAB9' },
  { name: 'pink', hex: '#FFC0CB' },
  { name: 'red', hex: '#FF0000' },
  { name: 'seashell', hex: '#FFF5EE' },
  { name: 'snow', hex: '#FFFAFA' },
  { name: 'tomato', hex: '#FF6347' },
  { name: 'white', hex: '#FFFFFF' },
  { name: 'yellow', hex: '#FFFF00' }
]


/***/ }),

/***/ "./node_modules/color-namer/lib/colors/ntc.js":
/*!****************************************************!*\
  !*** ./node_modules/color-namer/lib/colors/ntc.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  {
    "name": "Black",
    "hex": "000000"
  },
  {
    "name": "Navy Blue",
    "hex": "000080"
  },
  {
    "name": "Dark Blue",
    "hex": "0000C8"
  },
  {
    "name": "Blue",
    "hex": "0000FF"
  },
  {
    "name": "Stratos",
    "hex": "000741"
  },
  {
    "name": "Swamp",
    "hex": "001B1C"
  },
  {
    "name": "Resolution Blue",
    "hex": "002387"
  },
  {
    "name": "Deep Fir",
    "hex": "002900"
  },
  {
    "name": "Burnham",
    "hex": "002E20"
  },
  {
    "name": "International Klein Blue",
    "hex": "002FA7"
  },
  {
    "name": "Prussian Blue",
    "hex": "003153"
  },
  {
    "name": "Midnight Blue",
    "hex": "003366"
  },
  {
    "name": "Smalt",
    "hex": "003399"
  },
  {
    "name": "Deep Teal",
    "hex": "003532"
  },
  {
    "name": "Cyprus",
    "hex": "003E40"
  },
  {
    "name": "Kaitoke Green",
    "hex": "004620"
  },
  {
    "name": "Cobalt",
    "hex": "0047AB"
  },
  {
    "name": "Crusoe",
    "hex": "004816"
  },
  {
    "name": "Sherpa Blue",
    "hex": "004950"
  },
  {
    "name": "Endeavour",
    "hex": "0056A7"
  },
  {
    "name": "Camarone",
    "hex": "00581A"
  },
  {
    "name": "Science Blue",
    "hex": "0066CC"
  },
  {
    "name": "Blue Ribbon",
    "hex": "0066FF"
  },
  {
    "name": "Tropical Rain Forest",
    "hex": "00755E"
  },
  {
    "name": "Allports",
    "hex": "0076A3"
  },
  {
    "name": "Deep Cerulean",
    "hex": "007BA7"
  },
  {
    "name": "Lochmara",
    "hex": "007EC7"
  },
  {
    "name": "Azure Radiance",
    "hex": "007FFF"
  },
  {
    "name": "Teal",
    "hex": "008080"
  },
  {
    "name": "Bondi Blue",
    "hex": "0095B6"
  },
  {
    "name": "Pacific Blue",
    "hex": "009DC4"
  },
  {
    "name": "Persian Green",
    "hex": "00A693"
  },
  {
    "name": "Jade",
    "hex": "00A86B"
  },
  {
    "name": "Caribbean Green",
    "hex": "00CC99"
  },
  {
    "name": "Robin's Egg Blue",
    "hex": "00CCCC"
  },
  {
    "name": "Green",
    "hex": "00FF00"
  },
  {
    "name": "Spring Green",
    "hex": "00FF7F"
  },
  {
    "name": "Cyan / Aqua",
    "hex": "00FFFF"
  },
  {
    "name": "Blue Charcoal",
    "hex": "010D1A"
  },
  {
    "name": "Midnight",
    "hex": "011635"
  },
  {
    "name": "Holly",
    "hex": "011D13"
  },
  {
    "name": "Daintree",
    "hex": "012731"
  },
  {
    "name": "Cardin Green",
    "hex": "01361C"
  },
  {
    "name": "County Green",
    "hex": "01371A"
  },
  {
    "name": "Astronaut Blue",
    "hex": "013E62"
  },
  {
    "name": "Regal Blue",
    "hex": "013F6A"
  },
  {
    "name": "Aqua Deep",
    "hex": "014B43"
  },
  {
    "name": "Orient",
    "hex": "015E85"
  },
  {
    "name": "Blue Stone",
    "hex": "016162"
  },
  {
    "name": "Fun Green",
    "hex": "016D39"
  },
  {
    "name": "Pine Green",
    "hex": "01796F"
  },
  {
    "name": "Blue Lagoon",
    "hex": "017987"
  },
  {
    "name": "Deep Sea",
    "hex": "01826B"
  },
  {
    "name": "Green Haze",
    "hex": "01A368"
  },
  {
    "name": "English Holly",
    "hex": "022D15"
  },
  {
    "name": "Sherwood Green",
    "hex": "02402C"
  },
  {
    "name": "Congress Blue",
    "hex": "02478E"
  },
  {
    "name": "Evening Sea",
    "hex": "024E46"
  },
  {
    "name": "Bahama Blue",
    "hex": "026395"
  },
  {
    "name": "Observatory",
    "hex": "02866F"
  },
  {
    "name": "Cerulean",
    "hex": "02A4D3"
  },
  {
    "name": "Tangaroa",
    "hex": "03163C"
  },
  {
    "name": "Green Vogue",
    "hex": "032B52"
  },
  {
    "name": "Mosque",
    "hex": "036A6E"
  },
  {
    "name": "Midnight Moss",
    "hex": "041004"
  },
  {
    "name": "Black Pearl",
    "hex": "041322"
  },
  {
    "name": "Blue Whale",
    "hex": "042E4C"
  },
  {
    "name": "Zuccini",
    "hex": "044022"
  },
  {
    "name": "Teal Blue",
    "hex": "044259"
  },
  {
    "name": "Deep Cove",
    "hex": "051040"
  },
  {
    "name": "Gulf Blue",
    "hex": "051657"
  },
  {
    "name": "Venice Blue",
    "hex": "055989"
  },
  {
    "name": "Watercourse",
    "hex": "056F57"
  },
  {
    "name": "Catalina Blue",
    "hex": "062A78"
  },
  {
    "name": "Tiber",
    "hex": "063537"
  },
  {
    "name": "Gossamer",
    "hex": "069B81"
  },
  {
    "name": "Niagara",
    "hex": "06A189"
  },
  {
    "name": "Tarawera",
    "hex": "073A50"
  },
  {
    "name": "Jaguar",
    "hex": "080110"
  },
  {
    "name": "Black Bean",
    "hex": "081910"
  },
  {
    "name": "Deep Sapphire",
    "hex": "082567"
  },
  {
    "name": "Elf Green",
    "hex": "088370"
  },
  {
    "name": "Bright Turquoise",
    "hex": "08E8DE"
  },
  {
    "name": "Downriver",
    "hex": "092256"
  },
  {
    "name": "Palm Green",
    "hex": "09230F"
  },
  {
    "name": "Madison",
    "hex": "09255D"
  },
  {
    "name": "Bottle Green",
    "hex": "093624"
  },
  {
    "name": "Deep Sea Green",
    "hex": "095859"
  },
  {
    "name": "Salem",
    "hex": "097F4B"
  },
  {
    "name": "Black Russian",
    "hex": "0A001C"
  },
  {
    "name": "Dark Fern",
    "hex": "0A480D"
  },
  {
    "name": "Japanese Laurel",
    "hex": "0A6906"
  },
  {
    "name": "Atoll",
    "hex": "0A6F75"
  },
  {
    "name": "Cod Gray",
    "hex": "0B0B0B"
  },
  {
    "name": "Marshland",
    "hex": "0B0F08"
  },
  {
    "name": "Gordons Green",
    "hex": "0B1107"
  },
  {
    "name": "Black Forest",
    "hex": "0B1304"
  },
  {
    "name": "San Felix",
    "hex": "0B6207"
  },
  {
    "name": "Malachite",
    "hex": "0BDA51"
  },
  {
    "name": "Ebony",
    "hex": "0C0B1D"
  },
  {
    "name": "Woodsmoke",
    "hex": "0C0D0F"
  },
  {
    "name": "Racing Green",
    "hex": "0C1911"
  },
  {
    "name": "Surfie Green",
    "hex": "0C7A79"
  },
  {
    "name": "Blue Chill",
    "hex": "0C8990"
  },
  {
    "name": "Black Rock",
    "hex": "0D0332"
  },
  {
    "name": "Bunker",
    "hex": "0D1117"
  },
  {
    "name": "Aztec",
    "hex": "0D1C19"
  },
  {
    "name": "Bush",
    "hex": "0D2E1C"
  },
  {
    "name": "Cinder",
    "hex": "0E0E18"
  },
  {
    "name": "Firefly",
    "hex": "0E2A30"
  },
  {
    "name": "Torea Bay",
    "hex": "0F2D9E"
  },
  {
    "name": "Vulcan",
    "hex": "10121D"
  },
  {
    "name": "Green Waterloo",
    "hex": "101405"
  },
  {
    "name": "Eden",
    "hex": "105852"
  },
  {
    "name": "Arapawa",
    "hex": "110C6C"
  },
  {
    "name": "Ultramarine",
    "hex": "120A8F"
  },
  {
    "name": "Elephant",
    "hex": "123447"
  },
  {
    "name": "Jewel",
    "hex": "126B40"
  },
  {
    "name": "Diesel",
    "hex": "130000"
  },
  {
    "name": "Asphalt",
    "hex": "130A06"
  },
  {
    "name": "Blue Zodiac",
    "hex": "13264D"
  },
  {
    "name": "Parsley",
    "hex": "134F19"
  },
  {
    "name": "Nero",
    "hex": "140600"
  },
  {
    "name": "Tory Blue",
    "hex": "1450AA"
  },
  {
    "name": "Bunting",
    "hex": "151F4C"
  },
  {
    "name": "Denim",
    "hex": "1560BD"
  },
  {
    "name": "Genoa",
    "hex": "15736B"
  },
  {
    "name": "Mirage",
    "hex": "161928"
  },
  {
    "name": "Hunter Green",
    "hex": "161D10"
  },
  {
    "name": "Big Stone",
    "hex": "162A40"
  },
  {
    "name": "Celtic",
    "hex": "163222"
  },
  {
    "name": "Timber Green",
    "hex": "16322C"
  },
  {
    "name": "Gable Green",
    "hex": "163531"
  },
  {
    "name": "Pine Tree",
    "hex": "171F04"
  },
  {
    "name": "Chathams Blue",
    "hex": "175579"
  },
  {
    "name": "Deep Forest Green",
    "hex": "182D09"
  },
  {
    "name": "Blumine",
    "hex": "18587A"
  },
  {
    "name": "Palm Leaf",
    "hex": "19330E"
  },
  {
    "name": "Nile Blue",
    "hex": "193751"
  },
  {
    "name": "Fun Blue",
    "hex": "1959A8"
  },
  {
    "name": "Lucky Point",
    "hex": "1A1A68"
  },
  {
    "name": "Mountain Meadow",
    "hex": "1AB385"
  },
  {
    "name": "Tolopea",
    "hex": "1B0245"
  },
  {
    "name": "Haiti",
    "hex": "1B1035"
  },
  {
    "name": "Deep Koamaru",
    "hex": "1B127B"
  },
  {
    "name": "Acadia",
    "hex": "1B1404"
  },
  {
    "name": "Seaweed",
    "hex": "1B2F11"
  },
  {
    "name": "Biscay",
    "hex": "1B3162"
  },
  {
    "name": "Matisse",
    "hex": "1B659D"
  },
  {
    "name": "Crowshead",
    "hex": "1C1208"
  },
  {
    "name": "Rangoon Green",
    "hex": "1C1E13"
  },
  {
    "name": "Persian Blue",
    "hex": "1C39BB"
  },
  {
    "name": "Everglade",
    "hex": "1C402E"
  },
  {
    "name": "Elm",
    "hex": "1C7C7D"
  },
  {
    "name": "Green Pea",
    "hex": "1D6142"
  },
  {
    "name": "Creole",
    "hex": "1E0F04"
  },
  {
    "name": "Karaka",
    "hex": "1E1609"
  },
  {
    "name": "El Paso",
    "hex": "1E1708"
  },
  {
    "name": "Cello",
    "hex": "1E385B"
  },
  {
    "name": "Te Papa Green",
    "hex": "1E433C"
  },
  {
    "name": "Dodger Blue",
    "hex": "1E90FF"
  },
  {
    "name": "Eastern Blue",
    "hex": "1E9AB0"
  },
  {
    "name": "Night Rider",
    "hex": "1F120F"
  },
  {
    "name": "Java",
    "hex": "1FC2C2"
  },
  {
    "name": "Jacksons Purple",
    "hex": "20208D"
  },
  {
    "name": "Cloud Burst",
    "hex": "202E54"
  },
  {
    "name": "Blue Dianne",
    "hex": "204852"
  },
  {
    "name": "Eternity",
    "hex": "211A0E"
  },
  {
    "name": "Deep Blue",
    "hex": "220878"
  },
  {
    "name": "Forest Green",
    "hex": "228B22"
  },
  {
    "name": "Mallard",
    "hex": "233418"
  },
  {
    "name": "Violet",
    "hex": "240A40"
  },
  {
    "name": "Kilamanjaro",
    "hex": "240C02"
  },
  {
    "name": "Log Cabin",
    "hex": "242A1D"
  },
  {
    "name": "Black Olive",
    "hex": "242E16"
  },
  {
    "name": "Green House",
    "hex": "24500F"
  },
  {
    "name": "Graphite",
    "hex": "251607"
  },
  {
    "name": "Cannon Black",
    "hex": "251706"
  },
  {
    "name": "Port Gore",
    "hex": "251F4F"
  },
  {
    "name": "Shark",
    "hex": "25272C"
  },
  {
    "name": "Green Kelp",
    "hex": "25311C"
  },
  {
    "name": "Curious Blue",
    "hex": "2596D1"
  },
  {
    "name": "Paua",
    "hex": "260368"
  },
  {
    "name": "Paris M",
    "hex": "26056A"
  },
  {
    "name": "Wood Bark",
    "hex": "261105"
  },
  {
    "name": "Gondola",
    "hex": "261414"
  },
  {
    "name": "Steel Gray",
    "hex": "262335"
  },
  {
    "name": "Ebony Clay",
    "hex": "26283B"
  },
  {
    "name": "Bay of Many",
    "hex": "273A81"
  },
  {
    "name": "Plantation",
    "hex": "27504B"
  },
  {
    "name": "Eucalyptus",
    "hex": "278A5B"
  },
  {
    "name": "Oil",
    "hex": "281E15"
  },
  {
    "name": "Astronaut",
    "hex": "283A77"
  },
  {
    "name": "Mariner",
    "hex": "286ACD"
  },
  {
    "name": "Violent Violet",
    "hex": "290C5E"
  },
  {
    "name": "Bastille",
    "hex": "292130"
  },
  {
    "name": "Zeus",
    "hex": "292319"
  },
  {
    "name": "Charade",
    "hex": "292937"
  },
  {
    "name": "Jelly Bean",
    "hex": "297B9A"
  },
  {
    "name": "Jungle Green",
    "hex": "29AB87"
  },
  {
    "name": "Cherry Pie",
    "hex": "2A0359"
  },
  {
    "name": "Coffee Bean",
    "hex": "2A140E"
  },
  {
    "name": "Baltic Sea",
    "hex": "2A2630"
  },
  {
    "name": "Turtle Green",
    "hex": "2A380B"
  },
  {
    "name": "Cerulean Blue",
    "hex": "2A52BE"
  },
  {
    "name": "Sepia Black",
    "hex": "2B0202"
  },
  {
    "name": "Valhalla",
    "hex": "2B194F"
  },
  {
    "name": "Heavy Metal",
    "hex": "2B3228"
  },
  {
    "name": "Blue Gem",
    "hex": "2C0E8C"
  },
  {
    "name": "Revolver",
    "hex": "2C1632"
  },
  {
    "name": "Bleached Cedar",
    "hex": "2C2133"
  },
  {
    "name": "Lochinvar",
    "hex": "2C8C84"
  },
  {
    "name": "Mikado",
    "hex": "2D2510"
  },
  {
    "name": "Outer Space",
    "hex": "2D383A"
  },
  {
    "name": "St Tropaz",
    "hex": "2D569B"
  },
  {
    "name": "Jacaranda",
    "hex": "2E0329"
  },
  {
    "name": "Jacko Bean",
    "hex": "2E1905"
  },
  {
    "name": "Rangitoto",
    "hex": "2E3222"
  },
  {
    "name": "Rhino",
    "hex": "2E3F62"
  },
  {
    "name": "Sea Green",
    "hex": "2E8B57"
  },
  {
    "name": "Scooter",
    "hex": "2EBFD4"
  },
  {
    "name": "Onion",
    "hex": "2F270E"
  },
  {
    "name": "Governor Bay",
    "hex": "2F3CB3"
  },
  {
    "name": "Sapphire",
    "hex": "2F519E"
  },
  {
    "name": "Spectra",
    "hex": "2F5A57"
  },
  {
    "name": "Casal",
    "hex": "2F6168"
  },
  {
    "name": "Melanzane",
    "hex": "300529"
  },
  {
    "name": "Cocoa Brown",
    "hex": "301F1E"
  },
  {
    "name": "Woodrush",
    "hex": "302A0F"
  },
  {
    "name": "San Juan",
    "hex": "304B6A"
  },
  {
    "name": "Turquoise",
    "hex": "30D5C8"
  },
  {
    "name": "Eclipse",
    "hex": "311C17"
  },
  {
    "name": "Pickled Bluewood",
    "hex": "314459"
  },
  {
    "name": "Azure",
    "hex": "315BA1"
  },
  {
    "name": "Calypso",
    "hex": "31728D"
  },
  {
    "name": "Paradiso",
    "hex": "317D82"
  },
  {
    "name": "Persian Indigo",
    "hex": "32127A"
  },
  {
    "name": "Blackcurrant",
    "hex": "32293A"
  },
  {
    "name": "Mine Shaft",
    "hex": "323232"
  },
  {
    "name": "Stromboli",
    "hex": "325D52"
  },
  {
    "name": "Bilbao",
    "hex": "327C14"
  },
  {
    "name": "Astral",
    "hex": "327DA0"
  },
  {
    "name": "Christalle",
    "hex": "33036B"
  },
  {
    "name": "Thunder",
    "hex": "33292F"
  },
  {
    "name": "Shamrock",
    "hex": "33CC99"
  },
  {
    "name": "Tamarind",
    "hex": "341515"
  },
  {
    "name": "Mardi Gras",
    "hex": "350036"
  },
  {
    "name": "Valentino",
    "hex": "350E42"
  },
  {
    "name": "Jagger",
    "hex": "350E57"
  },
  {
    "name": "Tuna",
    "hex": "353542"
  },
  {
    "name": "Chambray",
    "hex": "354E8C"
  },
  {
    "name": "Martinique",
    "hex": "363050"
  },
  {
    "name": "Tuatara",
    "hex": "363534"
  },
  {
    "name": "Waiouru",
    "hex": "363C0D"
  },
  {
    "name": "Ming",
    "hex": "36747D"
  },
  {
    "name": "La Palma",
    "hex": "368716"
  },
  {
    "name": "Chocolate",
    "hex": "370202"
  },
  {
    "name": "Clinker",
    "hex": "371D09"
  },
  {
    "name": "Brown Tumbleweed",
    "hex": "37290E"
  },
  {
    "name": "Birch",
    "hex": "373021"
  },
  {
    "name": "Oracle",
    "hex": "377475"
  },
  {
    "name": "Blue Diamond",
    "hex": "380474"
  },
  {
    "name": "Grape",
    "hex": "381A51"
  },
  {
    "name": "Dune",
    "hex": "383533"
  },
  {
    "name": "Oxford Blue",
    "hex": "384555"
  },
  {
    "name": "Clover",
    "hex": "384910"
  },
  {
    "name": "Limed Spruce",
    "hex": "394851"
  },
  {
    "name": "Dell",
    "hex": "396413"
  },
  {
    "name": "Toledo",
    "hex": "3A0020"
  },
  {
    "name": "Sambuca",
    "hex": "3A2010"
  },
  {
    "name": "Jacarta",
    "hex": "3A2A6A"
  },
  {
    "name": "William",
    "hex": "3A686C"
  },
  {
    "name": "Killarney",
    "hex": "3A6A47"
  },
  {
    "name": "Keppel",
    "hex": "3AB09E"
  },
  {
    "name": "Temptress",
    "hex": "3B000B"
  },
  {
    "name": "Aubergine",
    "hex": "3B0910"
  },
  {
    "name": "Jon",
    "hex": "3B1F1F"
  },
  {
    "name": "Treehouse",
    "hex": "3B2820"
  },
  {
    "name": "Amazon",
    "hex": "3B7A57"
  },
  {
    "name": "Boston Blue",
    "hex": "3B91B4"
  },
  {
    "name": "Windsor",
    "hex": "3C0878"
  },
  {
    "name": "Rebel",
    "hex": "3C1206"
  },
  {
    "name": "Meteorite",
    "hex": "3C1F76"
  },
  {
    "name": "Dark Ebony",
    "hex": "3C2005"
  },
  {
    "name": "Camouflage",
    "hex": "3C3910"
  },
  {
    "name": "Bright Gray",
    "hex": "3C4151"
  },
  {
    "name": "Cape Cod",
    "hex": "3C4443"
  },
  {
    "name": "Lunar Green",
    "hex": "3C493A"
  },
  {
    "name": "Bean  ",
    "hex": "3D0C02"
  },
  {
    "name": "Bistre",
    "hex": "3D2B1F"
  },
  {
    "name": "Goblin",
    "hex": "3D7D52"
  },
  {
    "name": "Kingfisher Daisy",
    "hex": "3E0480"
  },
  {
    "name": "Cedar",
    "hex": "3E1C14"
  },
  {
    "name": "English Walnut",
    "hex": "3E2B23"
  },
  {
    "name": "Black Marlin",
    "hex": "3E2C1C"
  },
  {
    "name": "Ship Gray",
    "hex": "3E3A44"
  },
  {
    "name": "Pelorous",
    "hex": "3EABBF"
  },
  {
    "name": "Bronze",
    "hex": "3F2109"
  },
  {
    "name": "Cola",
    "hex": "3F2500"
  },
  {
    "name": "Madras",
    "hex": "3F3002"
  },
  {
    "name": "Minsk",
    "hex": "3F307F"
  },
  {
    "name": "Cabbage Pont",
    "hex": "3F4C3A"
  },
  {
    "name": "Tom Thumb",
    "hex": "3F583B"
  },
  {
    "name": "Mineral Green",
    "hex": "3F5D53"
  },
  {
    "name": "Puerto Rico",
    "hex": "3FC1AA"
  },
  {
    "name": "Harlequin",
    "hex": "3FFF00"
  },
  {
    "name": "Brown Pod",
    "hex": "401801"
  },
  {
    "name": "Cork",
    "hex": "40291D"
  },
  {
    "name": "Masala",
    "hex": "403B38"
  },
  {
    "name": "Thatch Green",
    "hex": "403D19"
  },
  {
    "name": "Fiord",
    "hex": "405169"
  },
  {
    "name": "Viridian",
    "hex": "40826D"
  },
  {
    "name": "Chateau Green",
    "hex": "40A860"
  },
  {
    "name": "Ripe Plum",
    "hex": "410056"
  },
  {
    "name": "Paco",
    "hex": "411F10"
  },
  {
    "name": "Deep Oak",
    "hex": "412010"
  },
  {
    "name": "Merlin",
    "hex": "413C37"
  },
  {
    "name": "Gun Powder",
    "hex": "414257"
  },
  {
    "name": "East Bay",
    "hex": "414C7D"
  },
  {
    "name": "Royal Blue",
    "hex": "4169E1"
  },
  {
    "name": "Ocean Green",
    "hex": "41AA78"
  },
  {
    "name": "Burnt Maroon",
    "hex": "420303"
  },
  {
    "name": "Lisbon Brown",
    "hex": "423921"
  },
  {
    "name": "Faded Jade",
    "hex": "427977"
  },
  {
    "name": "Scarlet Gum",
    "hex": "431560"
  },
  {
    "name": "Iroko",
    "hex": "433120"
  },
  {
    "name": "Armadillo",
    "hex": "433E37"
  },
  {
    "name": "River Bed",
    "hex": "434C59"
  },
  {
    "name": "Green Leaf",
    "hex": "436A0D"
  },
  {
    "name": "Barossa",
    "hex": "44012D"
  },
  {
    "name": "Morocco Brown",
    "hex": "441D00"
  },
  {
    "name": "Mako",
    "hex": "444954"
  },
  {
    "name": "Kelp",
    "hex": "454936"
  },
  {
    "name": "San Marino",
    "hex": "456CAC"
  },
  {
    "name": "Picton Blue",
    "hex": "45B1E8"
  },
  {
    "name": "Loulou",
    "hex": "460B41"
  },
  {
    "name": "Crater Brown",
    "hex": "462425"
  },
  {
    "name": "Gray Asparagus",
    "hex": "465945"
  },
  {
    "name": "Steel Blue",
    "hex": "4682B4"
  },
  {
    "name": "Rustic Red",
    "hex": "480404"
  },
  {
    "name": "Bulgarian Rose",
    "hex": "480607"
  },
  {
    "name": "Clairvoyant",
    "hex": "480656"
  },
  {
    "name": "Cocoa Bean",
    "hex": "481C1C"
  },
  {
    "name": "Woody Brown",
    "hex": "483131"
  },
  {
    "name": "Taupe",
    "hex": "483C32"
  },
  {
    "name": "Van Cleef",
    "hex": "49170C"
  },
  {
    "name": "Brown Derby",
    "hex": "492615"
  },
  {
    "name": "Metallic Bronze",
    "hex": "49371B"
  },
  {
    "name": "Verdun Green",
    "hex": "495400"
  },
  {
    "name": "Blue Bayoux",
    "hex": "496679"
  },
  {
    "name": "Bismark",
    "hex": "497183"
  },
  {
    "name": "Bracken",
    "hex": "4A2A04"
  },
  {
    "name": "Deep Bronze",
    "hex": "4A3004"
  },
  {
    "name": "Mondo",
    "hex": "4A3C30"
  },
  {
    "name": "Tundora",
    "hex": "4A4244"
  },
  {
    "name": "Gravel",
    "hex": "4A444B"
  },
  {
    "name": "Trout",
    "hex": "4A4E5A"
  },
  {
    "name": "Pigment Indigo",
    "hex": "4B0082"
  },
  {
    "name": "Nandor",
    "hex": "4B5D52"
  },
  {
    "name": "Saddle",
    "hex": "4C3024"
  },
  {
    "name": "Abbey",
    "hex": "4C4F56"
  },
  {
    "name": "Blackberry",
    "hex": "4D0135"
  },
  {
    "name": "Cab Sav",
    "hex": "4D0A18"
  },
  {
    "name": "Indian Tan",
    "hex": "4D1E01"
  },
  {
    "name": "Cowboy",
    "hex": "4D282D"
  },
  {
    "name": "Livid Brown",
    "hex": "4D282E"
  },
  {
    "name": "Rock",
    "hex": "4D3833"
  },
  {
    "name": "Punga",
    "hex": "4D3D14"
  },
  {
    "name": "Bronzetone",
    "hex": "4D400F"
  },
  {
    "name": "Woodland",
    "hex": "4D5328"
  },
  {
    "name": "Mahogany",
    "hex": "4E0606"
  },
  {
    "name": "Bossanova",
    "hex": "4E2A5A"
  },
  {
    "name": "Matterhorn",
    "hex": "4E3B41"
  },
  {
    "name": "Bronze Olive",
    "hex": "4E420C"
  },
  {
    "name": "Mulled Wine",
    "hex": "4E4562"
  },
  {
    "name": "Axolotl",
    "hex": "4E6649"
  },
  {
    "name": "Wedgewood",
    "hex": "4E7F9E"
  },
  {
    "name": "Shakespeare",
    "hex": "4EABD1"
  },
  {
    "name": "Honey Flower",
    "hex": "4F1C70"
  },
  {
    "name": "Daisy Bush",
    "hex": "4F2398"
  },
  {
    "name": "Indigo",
    "hex": "4F69C6"
  },
  {
    "name": "Fern Green",
    "hex": "4F7942"
  },
  {
    "name": "Fruit Salad",
    "hex": "4F9D5D"
  },
  {
    "name": "Apple",
    "hex": "4FA83D"
  },
  {
    "name": "Mortar",
    "hex": "504351"
  },
  {
    "name": "Kashmir Blue",
    "hex": "507096"
  },
  {
    "name": "Cutty Sark",
    "hex": "507672"
  },
  {
    "name": "Emerald",
    "hex": "50C878"
  },
  {
    "name": "Emperor",
    "hex": "514649"
  },
  {
    "name": "Chalet Green",
    "hex": "516E3D"
  },
  {
    "name": "Como",
    "hex": "517C66"
  },
  {
    "name": "Smalt Blue",
    "hex": "51808F"
  },
  {
    "name": "Castro",
    "hex": "52001F"
  },
  {
    "name": "Maroon Oak",
    "hex": "520C17"
  },
  {
    "name": "Gigas",
    "hex": "523C94"
  },
  {
    "name": "Voodoo",
    "hex": "533455"
  },
  {
    "name": "Victoria",
    "hex": "534491"
  },
  {
    "name": "Hippie Green",
    "hex": "53824B"
  },
  {
    "name": "Heath",
    "hex": "541012"
  },
  {
    "name": "Judge Gray",
    "hex": "544333"
  },
  {
    "name": "Fuscous Gray",
    "hex": "54534D"
  },
  {
    "name": "Vida Loca",
    "hex": "549019"
  },
  {
    "name": "Cioccolato",
    "hex": "55280C"
  },
  {
    "name": "Saratoga",
    "hex": "555B10"
  },
  {
    "name": "Finlandia",
    "hex": "556D56"
  },
  {
    "name": "Havelock Blue",
    "hex": "5590D9"
  },
  {
    "name": "Fountain Blue",
    "hex": "56B4BE"
  },
  {
    "name": "Spring Leaves",
    "hex": "578363"
  },
  {
    "name": "Saddle Brown",
    "hex": "583401"
  },
  {
    "name": "Scarpa Flow",
    "hex": "585562"
  },
  {
    "name": "Cactus",
    "hex": "587156"
  },
  {
    "name": "Hippie Blue",
    "hex": "589AAF"
  },
  {
    "name": "Wine Berry",
    "hex": "591D35"
  },
  {
    "name": "Brown Bramble",
    "hex": "592804"
  },
  {
    "name": "Congo Brown",
    "hex": "593737"
  },
  {
    "name": "Millbrook",
    "hex": "594433"
  },
  {
    "name": "Waikawa Gray",
    "hex": "5A6E9C"
  },
  {
    "name": "Horizon",
    "hex": "5A87A0"
  },
  {
    "name": "Jambalaya",
    "hex": "5B3013"
  },
  {
    "name": "Bordeaux",
    "hex": "5C0120"
  },
  {
    "name": "Mulberry Wood",
    "hex": "5C0536"
  },
  {
    "name": "Carnaby Tan",
    "hex": "5C2E01"
  },
  {
    "name": "Comet",
    "hex": "5C5D75"
  },
  {
    "name": "Redwood",
    "hex": "5D1E0F"
  },
  {
    "name": "Don Juan",
    "hex": "5D4C51"
  },
  {
    "name": "Chicago",
    "hex": "5D5C58"
  },
  {
    "name": "Verdigris",
    "hex": "5D5E37"
  },
  {
    "name": "Dingley",
    "hex": "5D7747"
  },
  {
    "name": "Breaker Bay",
    "hex": "5DA19F"
  },
  {
    "name": "Kabul",
    "hex": "5E483E"
  },
  {
    "name": "Hemlock",
    "hex": "5E5D3B"
  },
  {
    "name": "Irish Coffee",
    "hex": "5F3D26"
  },
  {
    "name": "Mid Gray",
    "hex": "5F5F6E"
  },
  {
    "name": "Shuttle Gray",
    "hex": "5F6672"
  },
  {
    "name": "Aqua Forest",
    "hex": "5FA777"
  },
  {
    "name": "Tradewind",
    "hex": "5FB3AC"
  },
  {
    "name": "Horses Neck",
    "hex": "604913"
  },
  {
    "name": "Smoky",
    "hex": "605B73"
  },
  {
    "name": "Corduroy",
    "hex": "606E68"
  },
  {
    "name": "Danube",
    "hex": "6093D1"
  },
  {
    "name": "Espresso",
    "hex": "612718"
  },
  {
    "name": "Eggplant",
    "hex": "614051"
  },
  {
    "name": "Costa Del Sol",
    "hex": "615D30"
  },
  {
    "name": "Glade Green",
    "hex": "61845F"
  },
  {
    "name": "Buccaneer",
    "hex": "622F30"
  },
  {
    "name": "Quincy",
    "hex": "623F2D"
  },
  {
    "name": "Butterfly Bush",
    "hex": "624E9A"
  },
  {
    "name": "West Coast",
    "hex": "625119"
  },
  {
    "name": "Finch",
    "hex": "626649"
  },
  {
    "name": "Patina",
    "hex": "639A8F"
  },
  {
    "name": "Fern",
    "hex": "63B76C"
  },
  {
    "name": "Blue Violet",
    "hex": "6456B7"
  },
  {
    "name": "Dolphin",
    "hex": "646077"
  },
  {
    "name": "Storm Dust",
    "hex": "646463"
  },
  {
    "name": "Siam",
    "hex": "646A54"
  },
  {
    "name": "Nevada",
    "hex": "646E75"
  },
  {
    "name": "Cornflower Blue",
    "hex": "6495ED"
  },
  {
    "name": "Viking",
    "hex": "64CCDB"
  },
  {
    "name": "Rosewood",
    "hex": "65000B"
  },
  {
    "name": "Cherrywood",
    "hex": "651A14"
  },
  {
    "name": "Purple Heart",
    "hex": "652DC1"
  },
  {
    "name": "Fern Frond",
    "hex": "657220"
  },
  {
    "name": "Willow Grove",
    "hex": "65745D"
  },
  {
    "name": "Hoki",
    "hex": "65869F"
  },
  {
    "name": "Pompadour",
    "hex": "660045"
  },
  {
    "name": "Purple",
    "hex": "660099"
  },
  {
    "name": "Tyrian Purple",
    "hex": "66023C"
  },
  {
    "name": "Dark Tan",
    "hex": "661010"
  },
  {
    "name": "Silver Tree",
    "hex": "66B58F"
  },
  {
    "name": "Bright Green",
    "hex": "66FF00"
  },
  {
    "name": "Screamin' Green",
    "hex": "66FF66"
  },
  {
    "name": "Black Rose",
    "hex": "67032D"
  },
  {
    "name": "Scampi",
    "hex": "675FA6"
  },
  {
    "name": "Ironside Gray",
    "hex": "676662"
  },
  {
    "name": "Viridian Green",
    "hex": "678975"
  },
  {
    "name": "Christi",
    "hex": "67A712"
  },
  {
    "name": "Nutmeg Wood Finish",
    "hex": "683600"
  },
  {
    "name": "Zambezi",
    "hex": "685558"
  },
  {
    "name": "Salt Box",
    "hex": "685E6E"
  },
  {
    "name": "Tawny Port",
    "hex": "692545"
  },
  {
    "name": "Finn",
    "hex": "692D54"
  },
  {
    "name": "Scorpion",
    "hex": "695F62"
  },
  {
    "name": "Lynch",
    "hex": "697E9A"
  },
  {
    "name": "Spice",
    "hex": "6A442E"
  },
  {
    "name": "Himalaya",
    "hex": "6A5D1B"
  },
  {
    "name": "Soya Bean",
    "hex": "6A6051"
  },
  {
    "name": "Hairy Heath",
    "hex": "6B2A14"
  },
  {
    "name": "Royal Purple",
    "hex": "6B3FA0"
  },
  {
    "name": "Shingle Fawn",
    "hex": "6B4E31"
  },
  {
    "name": "Dorado",
    "hex": "6B5755"
  },
  {
    "name": "Bermuda Gray",
    "hex": "6B8BA2"
  },
  {
    "name": "Olive Drab",
    "hex": "6B8E23"
  },
  {
    "name": "Eminence",
    "hex": "6C3082"
  },
  {
    "name": "Turquoise Blue",
    "hex": "6CDAE7"
  },
  {
    "name": "Lonestar",
    "hex": "6D0101"
  },
  {
    "name": "Pine Cone",
    "hex": "6D5E54"
  },
  {
    "name": "Dove Gray",
    "hex": "6D6C6C"
  },
  {
    "name": "Juniper",
    "hex": "6D9292"
  },
  {
    "name": "Gothic",
    "hex": "6D92A1"
  },
  {
    "name": "Red Oxide",
    "hex": "6E0902"
  },
  {
    "name": "Moccaccino",
    "hex": "6E1D14"
  },
  {
    "name": "Pickled Bean",
    "hex": "6E4826"
  },
  {
    "name": "Dallas",
    "hex": "6E4B26"
  },
  {
    "name": "Kokoda",
    "hex": "6E6D57"
  },
  {
    "name": "Pale Sky",
    "hex": "6E7783"
  },
  {
    "name": "Cafe Royale",
    "hex": "6F440C"
  },
  {
    "name": "Flint",
    "hex": "6F6A61"
  },
  {
    "name": "Highland",
    "hex": "6F8E63"
  },
  {
    "name": "Limeade",
    "hex": "6F9D02"
  },
  {
    "name": "Downy",
    "hex": "6FD0C5"
  },
  {
    "name": "Persian Plum",
    "hex": "701C1C"
  },
  {
    "name": "Sepia",
    "hex": "704214"
  },
  {
    "name": "Antique Bronze",
    "hex": "704A07"
  },
  {
    "name": "Ferra",
    "hex": "704F50"
  },
  {
    "name": "Coffee",
    "hex": "706555"
  },
  {
    "name": "Slate Gray",
    "hex": "708090"
  },
  {
    "name": "Cedar Wood Finish",
    "hex": "711A00"
  },
  {
    "name": "Metallic Copper",
    "hex": "71291D"
  },
  {
    "name": "Affair",
    "hex": "714693"
  },
  {
    "name": "Studio",
    "hex": "714AB2"
  },
  {
    "name": "Tobacco Brown",
    "hex": "715D47"
  },
  {
    "name": "Yellow Metal",
    "hex": "716338"
  },
  {
    "name": "Peat",
    "hex": "716B56"
  },
  {
    "name": "Olivetone",
    "hex": "716E10"
  },
  {
    "name": "Storm Gray",
    "hex": "717486"
  },
  {
    "name": "Sirocco",
    "hex": "718080"
  },
  {
    "name": "Aquamarine Blue",
    "hex": "71D9E2"
  },
  {
    "name": "Venetian Red",
    "hex": "72010F"
  },
  {
    "name": "Old Copper",
    "hex": "724A2F"
  },
  {
    "name": "Go Ben",
    "hex": "726D4E"
  },
  {
    "name": "Raven",
    "hex": "727B89"
  },
  {
    "name": "Seance",
    "hex": "731E8F"
  },
  {
    "name": "Raw Umber",
    "hex": "734A12"
  },
  {
    "name": "Kimberly",
    "hex": "736C9F"
  },
  {
    "name": "Crocodile",
    "hex": "736D58"
  },
  {
    "name": "Crete",
    "hex": "737829"
  },
  {
    "name": "Xanadu",
    "hex": "738678"
  },
  {
    "name": "Spicy Mustard",
    "hex": "74640D"
  },
  {
    "name": "Limed Ash",
    "hex": "747D63"
  },
  {
    "name": "Rolling Stone",
    "hex": "747D83"
  },
  {
    "name": "Blue Smoke",
    "hex": "748881"
  },
  {
    "name": "Laurel",
    "hex": "749378"
  },
  {
    "name": "Mantis",
    "hex": "74C365"
  },
  {
    "name": "Russett",
    "hex": "755A57"
  },
  {
    "name": "Deluge",
    "hex": "7563A8"
  },
  {
    "name": "Cosmic",
    "hex": "76395D"
  },
  {
    "name": "Blue Marguerite",
    "hex": "7666C6"
  },
  {
    "name": "Lima",
    "hex": "76BD17"
  },
  {
    "name": "Sky Blue",
    "hex": "76D7EA"
  },
  {
    "name": "Dark Burgundy",
    "hex": "770F05"
  },
  {
    "name": "Crown of Thorns",
    "hex": "771F1F"
  },
  {
    "name": "Walnut",
    "hex": "773F1A"
  },
  {
    "name": "Pablo",
    "hex": "776F61"
  },
  {
    "name": "Pacifika",
    "hex": "778120"
  },
  {
    "name": "Oxley",
    "hex": "779E86"
  },
  {
    "name": "Pastel Green",
    "hex": "77DD77"
  },
  {
    "name": "Japanese Maple",
    "hex": "780109"
  },
  {
    "name": "Mocha",
    "hex": "782D19"
  },
  {
    "name": "Peanut",
    "hex": "782F16"
  },
  {
    "name": "Camouflage Green",
    "hex": "78866B"
  },
  {
    "name": "Wasabi",
    "hex": "788A25"
  },
  {
    "name": "Ship Cove",
    "hex": "788BBA"
  },
  {
    "name": "Sea Nymph",
    "hex": "78A39C"
  },
  {
    "name": "Roman Coffee",
    "hex": "795D4C"
  },
  {
    "name": "Old Lavender",
    "hex": "796878"
  },
  {
    "name": "Rum",
    "hex": "796989"
  },
  {
    "name": "Fedora",
    "hex": "796A78"
  },
  {
    "name": "Sandstone",
    "hex": "796D62"
  },
  {
    "name": "Spray",
    "hex": "79DEEC"
  },
  {
    "name": "Siren",
    "hex": "7A013A"
  },
  {
    "name": "Fuchsia Blue",
    "hex": "7A58C1"
  },
  {
    "name": "Boulder",
    "hex": "7A7A7A"
  },
  {
    "name": "Wild Blue Yonder",
    "hex": "7A89B8"
  },
  {
    "name": "De York",
    "hex": "7AC488"
  },
  {
    "name": "Red Beech",
    "hex": "7B3801"
  },
  {
    "name": "Cinnamon",
    "hex": "7B3F00"
  },
  {
    "name": "Yukon Gold",
    "hex": "7B6608"
  },
  {
    "name": "Tapa",
    "hex": "7B7874"
  },
  {
    "name": "Waterloo ",
    "hex": "7B7C94"
  },
  {
    "name": "Flax Smoke",
    "hex": "7B8265"
  },
  {
    "name": "Amulet",
    "hex": "7B9F80"
  },
  {
    "name": "Asparagus",
    "hex": "7BA05B"
  },
  {
    "name": "Kenyan Copper",
    "hex": "7C1C05"
  },
  {
    "name": "Pesto",
    "hex": "7C7631"
  },
  {
    "name": "Topaz",
    "hex": "7C778A"
  },
  {
    "name": "Concord",
    "hex": "7C7B7A"
  },
  {
    "name": "Jumbo",
    "hex": "7C7B82"
  },
  {
    "name": "Trendy Green",
    "hex": "7C881A"
  },
  {
    "name": "Gumbo",
    "hex": "7CA1A6"
  },
  {
    "name": "Acapulco",
    "hex": "7CB0A1"
  },
  {
    "name": "Neptune",
    "hex": "7CB7BB"
  },
  {
    "name": "Pueblo",
    "hex": "7D2C14"
  },
  {
    "name": "Bay Leaf",
    "hex": "7DA98D"
  },
  {
    "name": "Malibu",
    "hex": "7DC8F7"
  },
  {
    "name": "Bermuda",
    "hex": "7DD8C6"
  },
  {
    "name": "Copper Canyon",
    "hex": "7E3A15"
  },
  {
    "name": "Claret",
    "hex": "7F1734"
  },
  {
    "name": "Peru Tan",
    "hex": "7F3A02"
  },
  {
    "name": "Falcon",
    "hex": "7F626D"
  },
  {
    "name": "Mobster",
    "hex": "7F7589"
  },
  {
    "name": "Moody Blue",
    "hex": "7F76D3"
  },
  {
    "name": "Chartreuse",
    "hex": "7FFF00"
  },
  {
    "name": "Aquamarine",
    "hex": "7FFFD4"
  },
  {
    "name": "Maroon",
    "hex": "800000"
  },
  {
    "name": "Rose Bud Cherry",
    "hex": "800B47"
  },
  {
    "name": "Falu Red",
    "hex": "801818"
  },
  {
    "name": "Red Robin",
    "hex": "80341F"
  },
  {
    "name": "Vivid Violet",
    "hex": "803790"
  },
  {
    "name": "Russet",
    "hex": "80461B"
  },
  {
    "name": "Friar Gray",
    "hex": "807E79"
  },
  {
    "name": "Olive",
    "hex": "808000"
  },
  {
    "name": "Gray",
    "hex": "808080"
  },
  {
    "name": "Gulf Stream",
    "hex": "80B3AE"
  },
  {
    "name": "Glacier",
    "hex": "80B3C4"
  },
  {
    "name": "Seagull",
    "hex": "80CCEA"
  },
  {
    "name": "Nutmeg",
    "hex": "81422C"
  },
  {
    "name": "Spicy Pink",
    "hex": "816E71"
  },
  {
    "name": "Empress",
    "hex": "817377"
  },
  {
    "name": "Spanish Green",
    "hex": "819885"
  },
  {
    "name": "Sand Dune",
    "hex": "826F65"
  },
  {
    "name": "Gunsmoke",
    "hex": "828685"
  },
  {
    "name": "Battleship Gray",
    "hex": "828F72"
  },
  {
    "name": "Merlot",
    "hex": "831923"
  },
  {
    "name": "Shadow",
    "hex": "837050"
  },
  {
    "name": "Chelsea Cucumber",
    "hex": "83AA5D"
  },
  {
    "name": "Monte Carlo",
    "hex": "83D0C6"
  },
  {
    "name": "Plum",
    "hex": "843179"
  },
  {
    "name": "Granny Smith",
    "hex": "84A0A0"
  },
  {
    "name": "Chetwode Blue",
    "hex": "8581D9"
  },
  {
    "name": "Bandicoot",
    "hex": "858470"
  },
  {
    "name": "Bali Hai",
    "hex": "859FAF"
  },
  {
    "name": "Half Baked",
    "hex": "85C4CC"
  },
  {
    "name": "Red Devil",
    "hex": "860111"
  },
  {
    "name": "Lotus",
    "hex": "863C3C"
  },
  {
    "name": "Ironstone",
    "hex": "86483C"
  },
  {
    "name": "Bull Shot",
    "hex": "864D1E"
  },
  {
    "name": "Rusty Nail",
    "hex": "86560A"
  },
  {
    "name": "Bitter",
    "hex": "868974"
  },
  {
    "name": "Regent Gray",
    "hex": "86949F"
  },
  {
    "name": "Disco",
    "hex": "871550"
  },
  {
    "name": "Americano",
    "hex": "87756E"
  },
  {
    "name": "Hurricane",
    "hex": "877C7B"
  },
  {
    "name": "Oslo Gray",
    "hex": "878D91"
  },
  {
    "name": "Sushi",
    "hex": "87AB39"
  },
  {
    "name": "Spicy Mix",
    "hex": "885342"
  },
  {
    "name": "Kumera",
    "hex": "886221"
  },
  {
    "name": "Suva Gray",
    "hex": "888387"
  },
  {
    "name": "Avocado",
    "hex": "888D65"
  },
  {
    "name": "Camelot",
    "hex": "893456"
  },
  {
    "name": "Solid Pink",
    "hex": "893843"
  },
  {
    "name": "Cannon Pink",
    "hex": "894367"
  },
  {
    "name": "Makara",
    "hex": "897D6D"
  },
  {
    "name": "Burnt Umber",
    "hex": "8A3324"
  },
  {
    "name": "True V",
    "hex": "8A73D6"
  },
  {
    "name": "Clay Creek",
    "hex": "8A8360"
  },
  {
    "name": "Monsoon",
    "hex": "8A8389"
  },
  {
    "name": "Stack",
    "hex": "8A8F8A"
  },
  {
    "name": "Jordy Blue",
    "hex": "8AB9F1"
  },
  {
    "name": "Electric Violet",
    "hex": "8B00FF"
  },
  {
    "name": "Monarch",
    "hex": "8B0723"
  },
  {
    "name": "Corn Harvest",
    "hex": "8B6B0B"
  },
  {
    "name": "Olive Haze",
    "hex": "8B8470"
  },
  {
    "name": "Schooner",
    "hex": "8B847E"
  },
  {
    "name": "Natural Gray",
    "hex": "8B8680"
  },
  {
    "name": "Mantle",
    "hex": "8B9C90"
  },
  {
    "name": "Portage",
    "hex": "8B9FEE"
  },
  {
    "name": "Envy",
    "hex": "8BA690"
  },
  {
    "name": "Cascade",
    "hex": "8BA9A5"
  },
  {
    "name": "Riptide",
    "hex": "8BE6D8"
  },
  {
    "name": "Cardinal Pink",
    "hex": "8C055E"
  },
  {
    "name": "Mule Fawn",
    "hex": "8C472F"
  },
  {
    "name": "Potters Clay",
    "hex": "8C5738"
  },
  {
    "name": "Trendy Pink",
    "hex": "8C6495"
  },
  {
    "name": "Paprika",
    "hex": "8D0226"
  },
  {
    "name": "Sanguine Brown",
    "hex": "8D3D38"
  },
  {
    "name": "Tosca",
    "hex": "8D3F3F"
  },
  {
    "name": "Cement",
    "hex": "8D7662"
  },
  {
    "name": "Granite Green",
    "hex": "8D8974"
  },
  {
    "name": "Manatee",
    "hex": "8D90A1"
  },
  {
    "name": "Polo Blue",
    "hex": "8DA8CC"
  },
  {
    "name": "Red Berry",
    "hex": "8E0000"
  },
  {
    "name": "Rope",
    "hex": "8E4D1E"
  },
  {
    "name": "Opium",
    "hex": "8E6F70"
  },
  {
    "name": "Domino",
    "hex": "8E775E"
  },
  {
    "name": "Mamba",
    "hex": "8E8190"
  },
  {
    "name": "Nepal",
    "hex": "8EABC1"
  },
  {
    "name": "Pohutukawa",
    "hex": "8F021C"
  },
  {
    "name": "El Salva",
    "hex": "8F3E33"
  },
  {
    "name": "Korma",
    "hex": "8F4B0E"
  },
  {
    "name": "Squirrel",
    "hex": "8F8176"
  },
  {
    "name": "Vista Blue",
    "hex": "8FD6B4"
  },
  {
    "name": "Burgundy",
    "hex": "900020"
  },
  {
    "name": "Old Brick",
    "hex": "901E1E"
  },
  {
    "name": "Hemp",
    "hex": "907874"
  },
  {
    "name": "Almond Frost",
    "hex": "907B71"
  },
  {
    "name": "Sycamore",
    "hex": "908D39"
  },
  {
    "name": "Sangria",
    "hex": "92000A"
  },
  {
    "name": "Cumin",
    "hex": "924321"
  },
  {
    "name": "Beaver",
    "hex": "926F5B"
  },
  {
    "name": "Stonewall",
    "hex": "928573"
  },
  {
    "name": "Venus",
    "hex": "928590"
  },
  {
    "name": "Medium Purple",
    "hex": "9370DB"
  },
  {
    "name": "Cornflower",
    "hex": "93CCEA"
  },
  {
    "name": "Algae Green",
    "hex": "93DFB8"
  },
  {
    "name": "Copper Rust",
    "hex": "944747"
  },
  {
    "name": "Arrowtown",
    "hex": "948771"
  },
  {
    "name": "Scarlett",
    "hex": "950015"
  },
  {
    "name": "Strikemaster",
    "hex": "956387"
  },
  {
    "name": "Mountain Mist",
    "hex": "959396"
  },
  {
    "name": "Carmine",
    "hex": "960018"
  },
  {
    "name": "Brown",
    "hex": "964B00"
  },
  {
    "name": "Leather",
    "hex": "967059"
  },
  {
    "name": "Purple Mountain's Majesty",
    "hex": "9678B6"
  },
  {
    "name": "Lavender Purple",
    "hex": "967BB6"
  },
  {
    "name": "Pewter",
    "hex": "96A8A1"
  },
  {
    "name": "Summer Green",
    "hex": "96BBAB"
  },
  {
    "name": "Au Chico",
    "hex": "97605D"
  },
  {
    "name": "Wisteria",
    "hex": "9771B5"
  },
  {
    "name": "Atlantis",
    "hex": "97CD2D"
  },
  {
    "name": "Vin Rouge",
    "hex": "983D61"
  },
  {
    "name": "Lilac Bush",
    "hex": "9874D3"
  },
  {
    "name": "Bazaar",
    "hex": "98777B"
  },
  {
    "name": "Hacienda",
    "hex": "98811B"
  },
  {
    "name": "Pale Oyster",
    "hex": "988D77"
  },
  {
    "name": "Mint Green",
    "hex": "98FF98"
  },
  {
    "name": "Fresh Eggplant",
    "hex": "990066"
  },
  {
    "name": "Violet Eggplant",
    "hex": "991199"
  },
  {
    "name": "Tamarillo",
    "hex": "991613"
  },
  {
    "name": "Totem Pole",
    "hex": "991B07"
  },
  {
    "name": "Copper Rose",
    "hex": "996666"
  },
  {
    "name": "Amethyst",
    "hex": "9966CC"
  },
  {
    "name": "Mountbatten Pink",
    "hex": "997A8D"
  },
  {
    "name": "Blue Bell",
    "hex": "9999CC"
  },
  {
    "name": "Prairie Sand",
    "hex": "9A3820"
  },
  {
    "name": "Toast",
    "hex": "9A6E61"
  },
  {
    "name": "Gurkha",
    "hex": "9A9577"
  },
  {
    "name": "Olivine",
    "hex": "9AB973"
  },
  {
    "name": "Shadow Green",
    "hex": "9AC2B8"
  },
  {
    "name": "Oregon",
    "hex": "9B4703"
  },
  {
    "name": "Lemon Grass",
    "hex": "9B9E8F"
  },
  {
    "name": "Stiletto",
    "hex": "9C3336"
  },
  {
    "name": "Hawaiian Tan",
    "hex": "9D5616"
  },
  {
    "name": "Gull Gray",
    "hex": "9DACB7"
  },
  {
    "name": "Pistachio",
    "hex": "9DC209"
  },
  {
    "name": "Granny Smith Apple",
    "hex": "9DE093"
  },
  {
    "name": "Anakiwa",
    "hex": "9DE5FF"
  },
  {
    "name": "Chelsea Gem",
    "hex": "9E5302"
  },
  {
    "name": "Sepia Skin",
    "hex": "9E5B40"
  },
  {
    "name": "Sage",
    "hex": "9EA587"
  },
  {
    "name": "Citron",
    "hex": "9EA91F"
  },
  {
    "name": "Rock Blue",
    "hex": "9EB1CD"
  },
  {
    "name": "Morning Glory",
    "hex": "9EDEE0"
  },
  {
    "name": "Cognac",
    "hex": "9F381D"
  },
  {
    "name": "Reef Gold",
    "hex": "9F821C"
  },
  {
    "name": "Star Dust",
    "hex": "9F9F9C"
  },
  {
    "name": "Santas Gray",
    "hex": "9FA0B1"
  },
  {
    "name": "Sinbad",
    "hex": "9FD7D3"
  },
  {
    "name": "Feijoa",
    "hex": "9FDD8C"
  },
  {
    "name": "Tabasco",
    "hex": "A02712"
  },
  {
    "name": "Buttered Rum",
    "hex": "A1750D"
  },
  {
    "name": "Hit Gray",
    "hex": "A1ADB5"
  },
  {
    "name": "Citrus",
    "hex": "A1C50A"
  },
  {
    "name": "Aqua Island",
    "hex": "A1DAD7"
  },
  {
    "name": "Water Leaf",
    "hex": "A1E9DE"
  },
  {
    "name": "Flirt",
    "hex": "A2006D"
  },
  {
    "name": "Rouge",
    "hex": "A23B6C"
  },
  {
    "name": "Cape Palliser",
    "hex": "A26645"
  },
  {
    "name": "Gray Chateau",
    "hex": "A2AAB3"
  },
  {
    "name": "Edward",
    "hex": "A2AEAB"
  },
  {
    "name": "Pharlap",
    "hex": "A3807B"
  },
  {
    "name": "Amethyst Smoke",
    "hex": "A397B4"
  },
  {
    "name": "Blizzard Blue",
    "hex": "A3E3ED"
  },
  {
    "name": "Delta",
    "hex": "A4A49D"
  },
  {
    "name": "Wistful",
    "hex": "A4A6D3"
  },
  {
    "name": "Green Smoke",
    "hex": "A4AF6E"
  },
  {
    "name": "Jazzberry Jam",
    "hex": "A50B5E"
  },
  {
    "name": "Zorba",
    "hex": "A59B91"
  },
  {
    "name": "Bahia",
    "hex": "A5CB0C"
  },
  {
    "name": "Roof Terracotta",
    "hex": "A62F20"
  },
  {
    "name": "Paarl",
    "hex": "A65529"
  },
  {
    "name": "Barley Corn",
    "hex": "A68B5B"
  },
  {
    "name": "Donkey Brown",
    "hex": "A69279"
  },
  {
    "name": "Dawn",
    "hex": "A6A29A"
  },
  {
    "name": "Mexican Red",
    "hex": "A72525"
  },
  {
    "name": "Luxor Gold",
    "hex": "A7882C"
  },
  {
    "name": "Rich Gold",
    "hex": "A85307"
  },
  {
    "name": "Reno Sand",
    "hex": "A86515"
  },
  {
    "name": "Coral Tree",
    "hex": "A86B6B"
  },
  {
    "name": "Dusty Gray",
    "hex": "A8989B"
  },
  {
    "name": "Dull Lavender",
    "hex": "A899E6"
  },
  {
    "name": "Tallow",
    "hex": "A8A589"
  },
  {
    "name": "Bud",
    "hex": "A8AE9C"
  },
  {
    "name": "Locust",
    "hex": "A8AF8E"
  },
  {
    "name": "Norway",
    "hex": "A8BD9F"
  },
  {
    "name": "Chinook",
    "hex": "A8E3BD"
  },
  {
    "name": "Gray Olive",
    "hex": "A9A491"
  },
  {
    "name": "Aluminium",
    "hex": "A9ACB6"
  },
  {
    "name": "Cadet Blue",
    "hex": "A9B2C3"
  },
  {
    "name": "Schist",
    "hex": "A9B497"
  },
  {
    "name": "Tower Gray",
    "hex": "A9BDBF"
  },
  {
    "name": "Perano",
    "hex": "A9BEF2"
  },
  {
    "name": "Opal",
    "hex": "A9C6C2"
  },
  {
    "name": "Night Shadz",
    "hex": "AA375A"
  },
  {
    "name": "Fire",
    "hex": "AA4203"
  },
  {
    "name": "Muesli",
    "hex": "AA8B5B"
  },
  {
    "name": "Sandal",
    "hex": "AA8D6F"
  },
  {
    "name": "Shady Lady",
    "hex": "AAA5A9"
  },
  {
    "name": "Logan",
    "hex": "AAA9CD"
  },
  {
    "name": "Spun Pearl",
    "hex": "AAABB7"
  },
  {
    "name": "Regent St Blue",
    "hex": "AAD6E6"
  },
  {
    "name": "Magic Mint",
    "hex": "AAF0D1"
  },
  {
    "name": "Lipstick",
    "hex": "AB0563"
  },
  {
    "name": "Royal Heath",
    "hex": "AB3472"
  },
  {
    "name": "Sandrift",
    "hex": "AB917A"
  },
  {
    "name": "Cold Purple",
    "hex": "ABA0D9"
  },
  {
    "name": "Bronco",
    "hex": "ABA196"
  },
  {
    "name": "Limed Oak",
    "hex": "AC8A56"
  },
  {
    "name": "East Side",
    "hex": "AC91CE"
  },
  {
    "name": "Lemon Ginger",
    "hex": "AC9E22"
  },
  {
    "name": "Napa",
    "hex": "ACA494"
  },
  {
    "name": "Hillary",
    "hex": "ACA586"
  },
  {
    "name": "Cloudy",
    "hex": "ACA59F"
  },
  {
    "name": "Silver Chalice",
    "hex": "ACACAC"
  },
  {
    "name": "Swamp Green",
    "hex": "ACB78E"
  },
  {
    "name": "Spring Rain",
    "hex": "ACCBB1"
  },
  {
    "name": "Conifer",
    "hex": "ACDD4D"
  },
  {
    "name": "Celadon",
    "hex": "ACE1AF"
  },
  {
    "name": "Mandalay",
    "hex": "AD781B"
  },
  {
    "name": "Casper",
    "hex": "ADBED1"
  },
  {
    "name": "Moss Green",
    "hex": "ADDFAD"
  },
  {
    "name": "Padua",
    "hex": "ADE6C4"
  },
  {
    "name": "Green Yellow",
    "hex": "ADFF2F"
  },
  {
    "name": "Hippie Pink",
    "hex": "AE4560"
  },
  {
    "name": "Desert",
    "hex": "AE6020"
  },
  {
    "name": "Bouquet",
    "hex": "AE809E"
  },
  {
    "name": "Medium Carmine",
    "hex": "AF4035"
  },
  {
    "name": "Apple Blossom",
    "hex": "AF4D43"
  },
  {
    "name": "Brown Rust",
    "hex": "AF593E"
  },
  {
    "name": "Driftwood",
    "hex": "AF8751"
  },
  {
    "name": "Alpine",
    "hex": "AF8F2C"
  },
  {
    "name": "Lucky",
    "hex": "AF9F1C"
  },
  {
    "name": "Martini",
    "hex": "AFA09E"
  },
  {
    "name": "Bombay",
    "hex": "AFB1B8"
  },
  {
    "name": "Pigeon Post",
    "hex": "AFBDD9"
  },
  {
    "name": "Cadillac",
    "hex": "B04C6A"
  },
  {
    "name": "Matrix",
    "hex": "B05D54"
  },
  {
    "name": "Tapestry",
    "hex": "B05E81"
  },
  {
    "name": "Mai Tai",
    "hex": "B06608"
  },
  {
    "name": "Del Rio",
    "hex": "B09A95"
  },
  {
    "name": "Powder Blue",
    "hex": "B0E0E6"
  },
  {
    "name": "Inch Worm",
    "hex": "B0E313"
  },
  {
    "name": "Bright Red",
    "hex": "B10000"
  },
  {
    "name": "Vesuvius",
    "hex": "B14A0B"
  },
  {
    "name": "Pumpkin Skin",
    "hex": "B1610B"
  },
  {
    "name": "Santa Fe",
    "hex": "B16D52"
  },
  {
    "name": "Teak",
    "hex": "B19461"
  },
  {
    "name": "Fringy Flower",
    "hex": "B1E2C1"
  },
  {
    "name": "Ice Cold",
    "hex": "B1F4E7"
  },
  {
    "name": "Shiraz",
    "hex": "B20931"
  },
  {
    "name": "Biloba Flower",
    "hex": "B2A1EA"
  },
  {
    "name": "Tall Poppy",
    "hex": "B32D29"
  },
  {
    "name": "Fiery Orange",
    "hex": "B35213"
  },
  {
    "name": "Hot Toddy",
    "hex": "B38007"
  },
  {
    "name": "Taupe Gray",
    "hex": "B3AF95"
  },
  {
    "name": "La Rioja",
    "hex": "B3C110"
  },
  {
    "name": "Well Read",
    "hex": "B43332"
  },
  {
    "name": "Blush",
    "hex": "B44668"
  },
  {
    "name": "Jungle Mist",
    "hex": "B4CFD3"
  },
  {
    "name": "Turkish Rose",
    "hex": "B57281"
  },
  {
    "name": "Lavender",
    "hex": "B57EDC"
  },
  {
    "name": "Mongoose",
    "hex": "B5A27F"
  },
  {
    "name": "Olive Green",
    "hex": "B5B35C"
  },
  {
    "name": "Jet Stream",
    "hex": "B5D2CE"
  },
  {
    "name": "Cruise",
    "hex": "B5ECDF"
  },
  {
    "name": "Hibiscus",
    "hex": "B6316C"
  },
  {
    "name": "Thatch",
    "hex": "B69D98"
  },
  {
    "name": "Heathered Gray",
    "hex": "B6B095"
  },
  {
    "name": "Eagle",
    "hex": "B6BAA4"
  },
  {
    "name": "Spindle",
    "hex": "B6D1EA"
  },
  {
    "name": "Gum Leaf",
    "hex": "B6D3BF"
  },
  {
    "name": "Rust",
    "hex": "B7410E"
  },
  {
    "name": "Muddy Waters",
    "hex": "B78E5C"
  },
  {
    "name": "Sahara",
    "hex": "B7A214"
  },
  {
    "name": "Husk",
    "hex": "B7A458"
  },
  {
    "name": "Nobel",
    "hex": "B7B1B1"
  },
  {
    "name": "Heather",
    "hex": "B7C3D0"
  },
  {
    "name": "Madang",
    "hex": "B7F0BE"
  },
  {
    "name": "Milano Red",
    "hex": "B81104"
  },
  {
    "name": "Copper",
    "hex": "B87333"
  },
  {
    "name": "Gimblet",
    "hex": "B8B56A"
  },
  {
    "name": "Green Spring",
    "hex": "B8C1B1"
  },
  {
    "name": "Celery",
    "hex": "B8C25D"
  },
  {
    "name": "Sail",
    "hex": "B8E0F9"
  },
  {
    "name": "Chestnut",
    "hex": "B94E48"
  },
  {
    "name": "Crail",
    "hex": "B95140"
  },
  {
    "name": "Marigold",
    "hex": "B98D28"
  },
  {
    "name": "Wild Willow",
    "hex": "B9C46A"
  },
  {
    "name": "Rainee",
    "hex": "B9C8AC"
  },
  {
    "name": "Guardsman Red",
    "hex": "BA0101"
  },
  {
    "name": "Rock Spray",
    "hex": "BA450C"
  },
  {
    "name": "Bourbon",
    "hex": "BA6F1E"
  },
  {
    "name": "Pirate Gold",
    "hex": "BA7F03"
  },
  {
    "name": "Nomad",
    "hex": "BAB1A2"
  },
  {
    "name": "Submarine",
    "hex": "BAC7C9"
  },
  {
    "name": "Charlotte",
    "hex": "BAEEF9"
  },
  {
    "name": "Medium Red Violet",
    "hex": "BB3385"
  },
  {
    "name": "Brandy Rose",
    "hex": "BB8983"
  },
  {
    "name": "Rio Grande",
    "hex": "BBD009"
  },
  {
    "name": "Surf",
    "hex": "BBD7C1"
  },
  {
    "name": "Powder Ash",
    "hex": "BCC9C2"
  },
  {
    "name": "Tuscany",
    "hex": "BD5E2E"
  },
  {
    "name": "Quicksand",
    "hex": "BD978E"
  },
  {
    "name": "Silk",
    "hex": "BDB1A8"
  },
  {
    "name": "Malta",
    "hex": "BDB2A1"
  },
  {
    "name": "Chatelle",
    "hex": "BDB3C7"
  },
  {
    "name": "Lavender Gray",
    "hex": "BDBBD7"
  },
  {
    "name": "French Gray",
    "hex": "BDBDC6"
  },
  {
    "name": "Clay Ash",
    "hex": "BDC8B3"
  },
  {
    "name": "Loblolly",
    "hex": "BDC9CE"
  },
  {
    "name": "French Pass",
    "hex": "BDEDFD"
  },
  {
    "name": "London Hue",
    "hex": "BEA6C3"
  },
  {
    "name": "Pink Swan",
    "hex": "BEB5B7"
  },
  {
    "name": "Fuego",
    "hex": "BEDE0D"
  },
  {
    "name": "Rose of Sharon",
    "hex": "BF5500"
  },
  {
    "name": "Tide",
    "hex": "BFB8B0"
  },
  {
    "name": "Blue Haze",
    "hex": "BFBED8"
  },
  {
    "name": "Silver Sand",
    "hex": "BFC1C2"
  },
  {
    "name": "Key Lime Pie",
    "hex": "BFC921"
  },
  {
    "name": "Ziggurat",
    "hex": "BFDBE2"
  },
  {
    "name": "Lime",
    "hex": "BFFF00"
  },
  {
    "name": "Thunderbird",
    "hex": "C02B18"
  },
  {
    "name": "Mojo",
    "hex": "C04737"
  },
  {
    "name": "Old Rose",
    "hex": "C08081"
  },
  {
    "name": "Silver",
    "hex": "C0C0C0"
  },
  {
    "name": "Pale Leaf",
    "hex": "C0D3B9"
  },
  {
    "name": "Pixie Green",
    "hex": "C0D8B6"
  },
  {
    "name": "Tia Maria",
    "hex": "C1440E"
  },
  {
    "name": "Fuchsia Pink",
    "hex": "C154C1"
  },
  {
    "name": "Buddha Gold",
    "hex": "C1A004"
  },
  {
    "name": "Bison Hide",
    "hex": "C1B7A4"
  },
  {
    "name": "Tea",
    "hex": "C1BAB0"
  },
  {
    "name": "Gray Suit",
    "hex": "C1BECD"
  },
  {
    "name": "Sprout",
    "hex": "C1D7B0"
  },
  {
    "name": "Sulu",
    "hex": "C1F07C"
  },
  {
    "name": "Indochine",
    "hex": "C26B03"
  },
  {
    "name": "Twine",
    "hex": "C2955D"
  },
  {
    "name": "Cotton Seed",
    "hex": "C2BDB6"
  },
  {
    "name": "Pumice",
    "hex": "C2CAC4"
  },
  {
    "name": "Jagged Ice",
    "hex": "C2E8E5"
  },
  {
    "name": "Maroon Flush",
    "hex": "C32148"
  },
  {
    "name": "Indian Khaki",
    "hex": "C3B091"
  },
  {
    "name": "Pale Slate",
    "hex": "C3BFC1"
  },
  {
    "name": "Gray Nickel",
    "hex": "C3C3BD"
  },
  {
    "name": "Periwinkle Gray",
    "hex": "C3CDE6"
  },
  {
    "name": "Tiara",
    "hex": "C3D1D1"
  },
  {
    "name": "Tropical Blue",
    "hex": "C3DDF9"
  },
  {
    "name": "Cardinal",
    "hex": "C41E3A"
  },
  {
    "name": "Fuzzy Wuzzy Brown",
    "hex": "C45655"
  },
  {
    "name": "Orange Roughy",
    "hex": "C45719"
  },
  {
    "name": "Mist Gray",
    "hex": "C4C4BC"
  },
  {
    "name": "Coriander",
    "hex": "C4D0B0"
  },
  {
    "name": "Mint Tulip",
    "hex": "C4F4EB"
  },
  {
    "name": "Mulberry",
    "hex": "C54B8C"
  },
  {
    "name": "Nugget",
    "hex": "C59922"
  },
  {
    "name": "Tussock",
    "hex": "C5994B"
  },
  {
    "name": "Sea Mist",
    "hex": "C5DBCA"
  },
  {
    "name": "Yellow Green",
    "hex": "C5E17A"
  },
  {
    "name": "Brick Red",
    "hex": "C62D42"
  },
  {
    "name": "Contessa",
    "hex": "C6726B"
  },
  {
    "name": "Oriental Pink",
    "hex": "C69191"
  },
  {
    "name": "Roti",
    "hex": "C6A84B"
  },
  {
    "name": "Ash",
    "hex": "C6C3B5"
  },
  {
    "name": "Kangaroo",
    "hex": "C6C8BD"
  },
  {
    "name": "Las Palmas",
    "hex": "C6E610"
  },
  {
    "name": "Monza",
    "hex": "C7031E"
  },
  {
    "name": "Red Violet",
    "hex": "C71585"
  },
  {
    "name": "Coral Reef",
    "hex": "C7BCA2"
  },
  {
    "name": "Melrose",
    "hex": "C7C1FF"
  },
  {
    "name": "Cloud",
    "hex": "C7C4BF"
  },
  {
    "name": "Ghost",
    "hex": "C7C9D5"
  },
  {
    "name": "Pine Glade",
    "hex": "C7CD90"
  },
  {
    "name": "Botticelli",
    "hex": "C7DDE5"
  },
  {
    "name": "Antique Brass",
    "hex": "C88A65"
  },
  {
    "name": "Lilac",
    "hex": "C8A2C8"
  },
  {
    "name": "Hokey Pokey",
    "hex": "C8A528"
  },
  {
    "name": "Lily",
    "hex": "C8AABF"
  },
  {
    "name": "Laser",
    "hex": "C8B568"
  },
  {
    "name": "Edgewater",
    "hex": "C8E3D7"
  },
  {
    "name": "Piper",
    "hex": "C96323"
  },
  {
    "name": "Pizza",
    "hex": "C99415"
  },
  {
    "name": "Light Wisteria",
    "hex": "C9A0DC"
  },
  {
    "name": "Rodeo Dust",
    "hex": "C9B29B"
  },
  {
    "name": "Sundance",
    "hex": "C9B35B"
  },
  {
    "name": "Earls Green",
    "hex": "C9B93B"
  },
  {
    "name": "Silver Rust",
    "hex": "C9C0BB"
  },
  {
    "name": "Conch",
    "hex": "C9D9D2"
  },
  {
    "name": "Reef",
    "hex": "C9FFA2"
  },
  {
    "name": "Aero Blue",
    "hex": "C9FFE5"
  },
  {
    "name": "Flush Mahogany",
    "hex": "CA3435"
  },
  {
    "name": "Turmeric",
    "hex": "CABB48"
  },
  {
    "name": "Paris White",
    "hex": "CADCD4"
  },
  {
    "name": "Bitter Lemon",
    "hex": "CAE00D"
  },
  {
    "name": "Skeptic",
    "hex": "CAE6DA"
  },
  {
    "name": "Viola",
    "hex": "CB8FA9"
  },
  {
    "name": "Foggy Gray",
    "hex": "CBCAB6"
  },
  {
    "name": "Green Mist",
    "hex": "CBD3B0"
  },
  {
    "name": "Nebula",
    "hex": "CBDBD6"
  },
  {
    "name": "Persian Red",
    "hex": "CC3333"
  },
  {
    "name": "Burnt Orange",
    "hex": "CC5500"
  },
  {
    "name": "Ochre",
    "hex": "CC7722"
  },
  {
    "name": "Puce",
    "hex": "CC8899"
  },
  {
    "name": "Thistle Green",
    "hex": "CCCAA8"
  },
  {
    "name": "Periwinkle",
    "hex": "CCCCFF"
  },
  {
    "name": "Electric Lime",
    "hex": "CCFF00"
  },
  {
    "name": "Tenn",
    "hex": "CD5700"
  },
  {
    "name": "Chestnut Rose",
    "hex": "CD5C5C"
  },
  {
    "name": "Brandy Punch",
    "hex": "CD8429"
  },
  {
    "name": "Onahau",
    "hex": "CDF4FF"
  },
  {
    "name": "Sorrell Brown",
    "hex": "CEB98F"
  },
  {
    "name": "Cold Turkey",
    "hex": "CEBABA"
  },
  {
    "name": "Yuma",
    "hex": "CEC291"
  },
  {
    "name": "Chino",
    "hex": "CEC7A7"
  },
  {
    "name": "Eunry",
    "hex": "CFA39D"
  },
  {
    "name": "Old Gold",
    "hex": "CFB53B"
  },
  {
    "name": "Tasman",
    "hex": "CFDCCF"
  },
  {
    "name": "Surf Crest",
    "hex": "CFE5D2"
  },
  {
    "name": "Humming Bird",
    "hex": "CFF9F3"
  },
  {
    "name": "Scandal",
    "hex": "CFFAF4"
  },
  {
    "name": "Red Stage",
    "hex": "D05F04"
  },
  {
    "name": "Hopbush",
    "hex": "D06DA1"
  },
  {
    "name": "Meteor",
    "hex": "D07D12"
  },
  {
    "name": "Perfume",
    "hex": "D0BEF8"
  },
  {
    "name": "Prelude",
    "hex": "D0C0E5"
  },
  {
    "name": "Tea Green",
    "hex": "D0F0C0"
  },
  {
    "name": "Geebung",
    "hex": "D18F1B"
  },
  {
    "name": "Vanilla",
    "hex": "D1BEA8"
  },
  {
    "name": "Soft Amber",
    "hex": "D1C6B4"
  },
  {
    "name": "Celeste",
    "hex": "D1D2CA"
  },
  {
    "name": "Mischka",
    "hex": "D1D2DD"
  },
  {
    "name": "Pear",
    "hex": "D1E231"
  },
  {
    "name": "Hot Cinnamon",
    "hex": "D2691E"
  },
  {
    "name": "Raw Sienna",
    "hex": "D27D46"
  },
  {
    "name": "Careys Pink",
    "hex": "D29EAA"
  },
  {
    "name": "Tan",
    "hex": "D2B48C"
  },
  {
    "name": "Deco",
    "hex": "D2DA97"
  },
  {
    "name": "Blue Romance",
    "hex": "D2F6DE"
  },
  {
    "name": "Gossip",
    "hex": "D2F8B0"
  },
  {
    "name": "Sisal",
    "hex": "D3CBBA"
  },
  {
    "name": "Swirl",
    "hex": "D3CDC5"
  },
  {
    "name": "Charm",
    "hex": "D47494"
  },
  {
    "name": "Clam Shell",
    "hex": "D4B6AF"
  },
  {
    "name": "Straw",
    "hex": "D4BF8D"
  },
  {
    "name": "Akaroa",
    "hex": "D4C4A8"
  },
  {
    "name": "Bird Flower",
    "hex": "D4CD16"
  },
  {
    "name": "Iron",
    "hex": "D4D7D9"
  },
  {
    "name": "Geyser",
    "hex": "D4DFE2"
  },
  {
    "name": "Hawkes Blue",
    "hex": "D4E2FC"
  },
  {
    "name": "Grenadier",
    "hex": "D54600"
  },
  {
    "name": "Can Can",
    "hex": "D591A4"
  },
  {
    "name": "Whiskey",
    "hex": "D59A6F"
  },
  {
    "name": "Winter Hazel",
    "hex": "D5D195"
  },
  {
    "name": "Granny Apple",
    "hex": "D5F6E3"
  },
  {
    "name": "My Pink",
    "hex": "D69188"
  },
  {
    "name": "Tacha",
    "hex": "D6C562"
  },
  {
    "name": "Moon Raker",
    "hex": "D6CEF6"
  },
  {
    "name": "Quill Gray",
    "hex": "D6D6D1"
  },
  {
    "name": "Snowy Mint",
    "hex": "D6FFDB"
  },
  {
    "name": "New York Pink",
    "hex": "D7837F"
  },
  {
    "name": "Pavlova",
    "hex": "D7C498"
  },
  {
    "name": "Fog",
    "hex": "D7D0FF"
  },
  {
    "name": "Valencia",
    "hex": "D84437"
  },
  {
    "name": "Japonica",
    "hex": "D87C63"
  },
  {
    "name": "Thistle",
    "hex": "D8BFD8"
  },
  {
    "name": "Maverick",
    "hex": "D8C2D5"
  },
  {
    "name": "Foam",
    "hex": "D8FCFA"
  },
  {
    "name": "Cabaret",
    "hex": "D94972"
  },
  {
    "name": "Burning Sand",
    "hex": "D99376"
  },
  {
    "name": "Cameo",
    "hex": "D9B99B"
  },
  {
    "name": "Timberwolf",
    "hex": "D9D6CF"
  },
  {
    "name": "Tana",
    "hex": "D9DCC1"
  },
  {
    "name": "Link Water",
    "hex": "D9E4F5"
  },
  {
    "name": "Mabel",
    "hex": "D9F7FF"
  },
  {
    "name": "Cerise",
    "hex": "DA3287"
  },
  {
    "name": "Flame Pea",
    "hex": "DA5B38"
  },
  {
    "name": "Bamboo",
    "hex": "DA6304"
  },
  {
    "name": "Red Damask",
    "hex": "DA6A41"
  },
  {
    "name": "Orchid",
    "hex": "DA70D6"
  },
  {
    "name": "Copperfield",
    "hex": "DA8A67"
  },
  {
    "name": "Golden Grass",
    "hex": "DAA520"
  },
  {
    "name": "Zanah",
    "hex": "DAECD6"
  },
  {
    "name": "Iceberg",
    "hex": "DAF4F0"
  },
  {
    "name": "Oyster Bay",
    "hex": "DAFAFF"
  },
  {
    "name": "Cranberry",
    "hex": "DB5079"
  },
  {
    "name": "Petite Orchid",
    "hex": "DB9690"
  },
  {
    "name": "Di Serria",
    "hex": "DB995E"
  },
  {
    "name": "Alto",
    "hex": "DBDBDB"
  },
  {
    "name": "Frosted Mint",
    "hex": "DBFFF8"
  },
  {
    "name": "Crimson",
    "hex": "DC143C"
  },
  {
    "name": "Punch",
    "hex": "DC4333"
  },
  {
    "name": "Galliano",
    "hex": "DCB20C"
  },
  {
    "name": "Blossom",
    "hex": "DCB4BC"
  },
  {
    "name": "Wattle",
    "hex": "DCD747"
  },
  {
    "name": "Westar",
    "hex": "DCD9D2"
  },
  {
    "name": "Moon Mist",
    "hex": "DCDDCC"
  },
  {
    "name": "Caper",
    "hex": "DCEDB4"
  },
  {
    "name": "Swans Down",
    "hex": "DCF0EA"
  },
  {
    "name": "Swiss Coffee",
    "hex": "DDD6D5"
  },
  {
    "name": "White Ice",
    "hex": "DDF9F1"
  },
  {
    "name": "Cerise Red",
    "hex": "DE3163"
  },
  {
    "name": "Roman",
    "hex": "DE6360"
  },
  {
    "name": "Tumbleweed",
    "hex": "DEA681"
  },
  {
    "name": "Gold Tips",
    "hex": "DEBA13"
  },
  {
    "name": "Brandy",
    "hex": "DEC196"
  },
  {
    "name": "Wafer",
    "hex": "DECBC6"
  },
  {
    "name": "Sapling",
    "hex": "DED4A4"
  },
  {
    "name": "Barberry",
    "hex": "DED717"
  },
  {
    "name": "Beryl Green",
    "hex": "DEE5C0"
  },
  {
    "name": "Pattens Blue",
    "hex": "DEF5FF"
  },
  {
    "name": "Heliotrope",
    "hex": "DF73FF"
  },
  {
    "name": "Apache",
    "hex": "DFBE6F"
  },
  {
    "name": "Chenin",
    "hex": "DFCD6F"
  },
  {
    "name": "Lola",
    "hex": "DFCFDB"
  },
  {
    "name": "Willow Brook",
    "hex": "DFECDA"
  },
  {
    "name": "Chartreuse Yellow",
    "hex": "DFFF00"
  },
  {
    "name": "Mauve",
    "hex": "E0B0FF"
  },
  {
    "name": "Anzac",
    "hex": "E0B646"
  },
  {
    "name": "Harvest Gold",
    "hex": "E0B974"
  },
  {
    "name": "Calico",
    "hex": "E0C095"
  },
  {
    "name": "Baby Blue",
    "hex": "E0FFFF"
  },
  {
    "name": "Sunglo",
    "hex": "E16865"
  },
  {
    "name": "Equator",
    "hex": "E1BC64"
  },
  {
    "name": "Pink Flare",
    "hex": "E1C0C8"
  },
  {
    "name": "Periglacial Blue",
    "hex": "E1E6D6"
  },
  {
    "name": "Kidnapper",
    "hex": "E1EAD4"
  },
  {
    "name": "Tara",
    "hex": "E1F6E8"
  },
  {
    "name": "Mandy",
    "hex": "E25465"
  },
  {
    "name": "Terracotta",
    "hex": "E2725B"
  },
  {
    "name": "Golden Bell",
    "hex": "E28913"
  },
  {
    "name": "Shocking",
    "hex": "E292C0"
  },
  {
    "name": "Dixie",
    "hex": "E29418"
  },
  {
    "name": "Light Orchid",
    "hex": "E29CD2"
  },
  {
    "name": "Snuff",
    "hex": "E2D8ED"
  },
  {
    "name": "Mystic",
    "hex": "E2EBED"
  },
  {
    "name": "Apple Green",
    "hex": "E2F3EC"
  },
  {
    "name": "Razzmatazz",
    "hex": "E30B5C"
  },
  {
    "name": "Alizarin Crimson",
    "hex": "E32636"
  },
  {
    "name": "Cinnabar",
    "hex": "E34234"
  },
  {
    "name": "Cavern Pink",
    "hex": "E3BEBE"
  },
  {
    "name": "Peppermint",
    "hex": "E3F5E1"
  },
  {
    "name": "Mindaro",
    "hex": "E3F988"
  },
  {
    "name": "Deep Blush",
    "hex": "E47698"
  },
  {
    "name": "Gamboge",
    "hex": "E49B0F"
  },
  {
    "name": "Melanie",
    "hex": "E4C2D5"
  },
  {
    "name": "Twilight",
    "hex": "E4CFDE"
  },
  {
    "name": "Bone",
    "hex": "E4D1C0"
  },
  {
    "name": "Sunflower",
    "hex": "E4D422"
  },
  {
    "name": "Grain Brown",
    "hex": "E4D5B7"
  },
  {
    "name": "Zombie",
    "hex": "E4D69B"
  },
  {
    "name": "Frostee",
    "hex": "E4F6E7"
  },
  {
    "name": "Snow Flurry",
    "hex": "E4FFD1"
  },
  {
    "name": "Amaranth",
    "hex": "E52B50"
  },
  {
    "name": "Zest",
    "hex": "E5841B"
  },
  {
    "name": "Dust Storm",
    "hex": "E5CCC9"
  },
  {
    "name": "Stark White",
    "hex": "E5D7BD"
  },
  {
    "name": "Hampton",
    "hex": "E5D8AF"
  },
  {
    "name": "Bon Jour",
    "hex": "E5E0E1"
  },
  {
    "name": "Mercury",
    "hex": "E5E5E5"
  },
  {
    "name": "Polar",
    "hex": "E5F9F6"
  },
  {
    "name": "Trinidad",
    "hex": "E64E03"
  },
  {
    "name": "Gold Sand",
    "hex": "E6BE8A"
  },
  {
    "name": "Cashmere",
    "hex": "E6BEA5"
  },
  {
    "name": "Double Spanish White",
    "hex": "E6D7B9"
  },
  {
    "name": "Satin Linen",
    "hex": "E6E4D4"
  },
  {
    "name": "Harp",
    "hex": "E6F2EA"
  },
  {
    "name": "Off Green",
    "hex": "E6F8F3"
  },
  {
    "name": "Hint of Green",
    "hex": "E6FFE9"
  },
  {
    "name": "Tranquil",
    "hex": "E6FFFF"
  },
  {
    "name": "Mango Tango",
    "hex": "E77200"
  },
  {
    "name": "Christine",
    "hex": "E7730A"
  },
  {
    "name": "Tonys Pink",
    "hex": "E79F8C"
  },
  {
    "name": "Kobi",
    "hex": "E79FC4"
  },
  {
    "name": "Rose Fog",
    "hex": "E7BCB4"
  },
  {
    "name": "Corn",
    "hex": "E7BF05"
  },
  {
    "name": "Putty",
    "hex": "E7CD8C"
  },
  {
    "name": "Gray Nurse",
    "hex": "E7ECE6"
  },
  {
    "name": "Lily White",
    "hex": "E7F8FF"
  },
  {
    "name": "Bubbles",
    "hex": "E7FEFF"
  },
  {
    "name": "Fire Bush",
    "hex": "E89928"
  },
  {
    "name": "Shilo",
    "hex": "E8B9B3"
  },
  {
    "name": "Pearl Bush",
    "hex": "E8E0D5"
  },
  {
    "name": "Green White",
    "hex": "E8EBE0"
  },
  {
    "name": "Chrome White",
    "hex": "E8F1D4"
  },
  {
    "name": "Gin",
    "hex": "E8F2EB"
  },
  {
    "name": "Aqua Squeeze",
    "hex": "E8F5F2"
  },
  {
    "name": "Clementine",
    "hex": "E96E00"
  },
  {
    "name": "Burnt Sienna",
    "hex": "E97451"
  },
  {
    "name": "Tahiti Gold",
    "hex": "E97C07"
  },
  {
    "name": "Oyster Pink",
    "hex": "E9CECD"
  },
  {
    "name": "Confetti",
    "hex": "E9D75A"
  },
  {
    "name": "Ebb",
    "hex": "E9E3E3"
  },
  {
    "name": "Ottoman",
    "hex": "E9F8ED"
  },
  {
    "name": "Clear Day",
    "hex": "E9FFFD"
  },
  {
    "name": "Carissma",
    "hex": "EA88A8"
  },
  {
    "name": "Porsche",
    "hex": "EAAE69"
  },
  {
    "name": "Tulip Tree",
    "hex": "EAB33B"
  },
  {
    "name": "Rob Roy",
    "hex": "EAC674"
  },
  {
    "name": "Raffia",
    "hex": "EADAB8"
  },
  {
    "name": "White Rock",
    "hex": "EAE8D4"
  },
  {
    "name": "Panache",
    "hex": "EAF6EE"
  },
  {
    "name": "Solitude",
    "hex": "EAF6FF"
  },
  {
    "name": "Aqua Spring",
    "hex": "EAF9F5"
  },
  {
    "name": "Dew",
    "hex": "EAFFFE"
  },
  {
    "name": "Apricot",
    "hex": "EB9373"
  },
  {
    "name": "Zinnwaldite",
    "hex": "EBC2AF"
  },
  {
    "name": "Fuel Yellow",
    "hex": "ECA927"
  },
  {
    "name": "Ronchi",
    "hex": "ECC54E"
  },
  {
    "name": "French Lilac",
    "hex": "ECC7EE"
  },
  {
    "name": "Just Right",
    "hex": "ECCDB9"
  },
  {
    "name": "Wild Rice",
    "hex": "ECE090"
  },
  {
    "name": "Fall Green",
    "hex": "ECEBBD"
  },
  {
    "name": "Aths Special",
    "hex": "ECEBCE"
  },
  {
    "name": "Starship",
    "hex": "ECF245"
  },
  {
    "name": "Red Ribbon",
    "hex": "ED0A3F"
  },
  {
    "name": "Tango",
    "hex": "ED7A1C"
  },
  {
    "name": "Carrot Orange",
    "hex": "ED9121"
  },
  {
    "name": "Sea Pink",
    "hex": "ED989E"
  },
  {
    "name": "Tacao",
    "hex": "EDB381"
  },
  {
    "name": "Desert Sand",
    "hex": "EDC9AF"
  },
  {
    "name": "Pancho",
    "hex": "EDCDAB"
  },
  {
    "name": "Chamois",
    "hex": "EDDCB1"
  },
  {
    "name": "Primrose",
    "hex": "EDEA99"
  },
  {
    "name": "Frost",
    "hex": "EDF5DD"
  },
  {
    "name": "Aqua Haze",
    "hex": "EDF5F5"
  },
  {
    "name": "Zumthor",
    "hex": "EDF6FF"
  },
  {
    "name": "Narvik",
    "hex": "EDF9F1"
  },
  {
    "name": "Honeysuckle",
    "hex": "EDFC84"
  },
  {
    "name": "Lavender Magenta",
    "hex": "EE82EE"
  },
  {
    "name": "Beauty Bush",
    "hex": "EEC1BE"
  },
  {
    "name": "Chalky",
    "hex": "EED794"
  },
  {
    "name": "Almond",
    "hex": "EED9C4"
  },
  {
    "name": "Flax",
    "hex": "EEDC82"
  },
  {
    "name": "Bizarre",
    "hex": "EEDEDA"
  },
  {
    "name": "Double Colonial White",
    "hex": "EEE3AD"
  },
  {
    "name": "Cararra",
    "hex": "EEEEE8"
  },
  {
    "name": "Manz",
    "hex": "EEEF78"
  },
  {
    "name": "Tahuna Sands",
    "hex": "EEF0C8"
  },
  {
    "name": "Athens Gray",
    "hex": "EEF0F3"
  },
  {
    "name": "Tusk",
    "hex": "EEF3C3"
  },
  {
    "name": "Loafer",
    "hex": "EEF4DE"
  },
  {
    "name": "Catskill White",
    "hex": "EEF6F7"
  },
  {
    "name": "Twilight Blue",
    "hex": "EEFDFF"
  },
  {
    "name": "Jonquil",
    "hex": "EEFF9A"
  },
  {
    "name": "Rice Flower",
    "hex": "EEFFE2"
  },
  {
    "name": "Jaffa",
    "hex": "EF863F"
  },
  {
    "name": "Gallery",
    "hex": "EFEFEF"
  },
  {
    "name": "Porcelain",
    "hex": "EFF2F3"
  },
  {
    "name": "Mauvelous",
    "hex": "F091A9"
  },
  {
    "name": "Golden Dream",
    "hex": "F0D52D"
  },
  {
    "name": "Golden Sand",
    "hex": "F0DB7D"
  },
  {
    "name": "Buff",
    "hex": "F0DC82"
  },
  {
    "name": "Prim",
    "hex": "F0E2EC"
  },
  {
    "name": "Khaki",
    "hex": "F0E68C"
  },
  {
    "name": "Selago",
    "hex": "F0EEFD"
  },
  {
    "name": "Titan White",
    "hex": "F0EEFF"
  },
  {
    "name": "Alice Blue",
    "hex": "F0F8FF"
  },
  {
    "name": "Feta",
    "hex": "F0FCEA"
  },
  {
    "name": "Gold Drop",
    "hex": "F18200"
  },
  {
    "name": "Wewak",
    "hex": "F19BAB"
  },
  {
    "name": "Sahara Sand",
    "hex": "F1E788"
  },
  {
    "name": "Parchment",
    "hex": "F1E9D2"
  },
  {
    "name": "Blue Chalk",
    "hex": "F1E9FF"
  },
  {
    "name": "Mint Julep",
    "hex": "F1EEC1"
  },
  {
    "name": "Seashell",
    "hex": "F1F1F1"
  },
  {
    "name": "Saltpan",
    "hex": "F1F7F2"
  },
  {
    "name": "Tidal",
    "hex": "F1FFAD"
  },
  {
    "name": "Chiffon",
    "hex": "F1FFC8"
  },
  {
    "name": "Flamingo",
    "hex": "F2552A"
  },
  {
    "name": "Tangerine",
    "hex": "F28500"
  },
  {
    "name": "Mandys Pink",
    "hex": "F2C3B2"
  },
  {
    "name": "Concrete",
    "hex": "F2F2F2"
  },
  {
    "name": "Black Squeeze",
    "hex": "F2FAFA"
  },
  {
    "name": "Pomegranate",
    "hex": "F34723"
  },
  {
    "name": "Buttercup",
    "hex": "F3AD16"
  },
  {
    "name": "New Orleans",
    "hex": "F3D69D"
  },
  {
    "name": "Vanilla Ice",
    "hex": "F3D9DF"
  },
  {
    "name": "Sidecar",
    "hex": "F3E7BB"
  },
  {
    "name": "Dawn Pink",
    "hex": "F3E9E5"
  },
  {
    "name": "Wheatfield",
    "hex": "F3EDCF"
  },
  {
    "name": "Canary",
    "hex": "F3FB62"
  },
  {
    "name": "Orinoco",
    "hex": "F3FBD4"
  },
  {
    "name": "Carla",
    "hex": "F3FFD8"
  },
  {
    "name": "Hollywood Cerise",
    "hex": "F400A1"
  },
  {
    "name": "Sandy brown",
    "hex": "F4A460"
  },
  {
    "name": "Saffron",
    "hex": "F4C430"
  },
  {
    "name": "Ripe Lemon",
    "hex": "F4D81C"
  },
  {
    "name": "Janna",
    "hex": "F4EBD3"
  },
  {
    "name": "Pampas",
    "hex": "F4F2EE"
  },
  {
    "name": "Wild Sand",
    "hex": "F4F4F4"
  },
  {
    "name": "Zircon",
    "hex": "F4F8FF"
  },
  {
    "name": "Froly",
    "hex": "F57584"
  },
  {
    "name": "Cream Can",
    "hex": "F5C85C"
  },
  {
    "name": "Manhattan",
    "hex": "F5C999"
  },
  {
    "name": "Maize",
    "hex": "F5D5A0"
  },
  {
    "name": "Wheat",
    "hex": "F5DEB3"
  },
  {
    "name": "Sandwisp",
    "hex": "F5E7A2"
  },
  {
    "name": "Pot Pourri",
    "hex": "F5E7E2"
  },
  {
    "name": "Albescent White",
    "hex": "F5E9D3"
  },
  {
    "name": "Soft Peach",
    "hex": "F5EDEF"
  },
  {
    "name": "Ecru White",
    "hex": "F5F3E5"
  },
  {
    "name": "Beige",
    "hex": "F5F5DC"
  },
  {
    "name": "Golden Fizz",
    "hex": "F5FB3D"
  },
  {
    "name": "Australian Mint",
    "hex": "F5FFBE"
  },
  {
    "name": "French Rose",
    "hex": "F64A8A"
  },
  {
    "name": "Brilliant Rose",
    "hex": "F653A6"
  },
  {
    "name": "Illusion",
    "hex": "F6A4C9"
  },
  {
    "name": "Merino",
    "hex": "F6F0E6"
  },
  {
    "name": "Black Haze",
    "hex": "F6F7F7"
  },
  {
    "name": "Spring Sun",
    "hex": "F6FFDC"
  },
  {
    "name": "Violet Red",
    "hex": "F7468A"
  },
  {
    "name": "Chilean Fire",
    "hex": "F77703"
  },
  {
    "name": "Persian Pink",
    "hex": "F77FBE"
  },
  {
    "name": "Rajah",
    "hex": "F7B668"
  },
  {
    "name": "Azalea",
    "hex": "F7C8DA"
  },
  {
    "name": "We Peep",
    "hex": "F7DBE6"
  },
  {
    "name": "Quarter Spanish White",
    "hex": "F7F2E1"
  },
  {
    "name": "Whisper",
    "hex": "F7F5FA"
  },
  {
    "name": "Snow Drift",
    "hex": "F7FAF7"
  },
  {
    "name": "Casablanca",
    "hex": "F8B853"
  },
  {
    "name": "Chantilly",
    "hex": "F8C3DF"
  },
  {
    "name": "Cherub",
    "hex": "F8D9E9"
  },
  {
    "name": "Marzipan",
    "hex": "F8DB9D"
  },
  {
    "name": "Energy Yellow",
    "hex": "F8DD5C"
  },
  {
    "name": "Givry",
    "hex": "F8E4BF"
  },
  {
    "name": "White Linen",
    "hex": "F8F0E8"
  },
  {
    "name": "Magnolia",
    "hex": "F8F4FF"
  },
  {
    "name": "Spring Wood",
    "hex": "F8F6F1"
  },
  {
    "name": "Coconut Cream",
    "hex": "F8F7DC"
  },
  {
    "name": "White Lilac",
    "hex": "F8F7FC"
  },
  {
    "name": "Desert Storm",
    "hex": "F8F8F7"
  },
  {
    "name": "Texas",
    "hex": "F8F99C"
  },
  {
    "name": "Corn Field",
    "hex": "F8FACD"
  },
  {
    "name": "Mimosa",
    "hex": "F8FDD3"
  },
  {
    "name": "Carnation",
    "hex": "F95A61"
  },
  {
    "name": "Saffron Mango",
    "hex": "F9BF58"
  },
  {
    "name": "Carousel Pink",
    "hex": "F9E0ED"
  },
  {
    "name": "Dairy Cream",
    "hex": "F9E4BC"
  },
  {
    "name": "Portica",
    "hex": "F9E663"
  },
  {
    "name": "Amour",
    "hex": "F9EAF3"
  },
  {
    "name": "Rum Swizzle",
    "hex": "F9F8E4"
  },
  {
    "name": "Dolly",
    "hex": "F9FF8B"
  },
  {
    "name": "Sugar Cane",
    "hex": "F9FFF6"
  },
  {
    "name": "Ecstasy",
    "hex": "FA7814"
  },
  {
    "name": "Tan Hide",
    "hex": "FA9D5A"
  },
  {
    "name": "Corvette",
    "hex": "FAD3A2"
  },
  {
    "name": "Peach Yellow",
    "hex": "FADFAD"
  },
  {
    "name": "Turbo",
    "hex": "FAE600"
  },
  {
    "name": "Astra",
    "hex": "FAEAB9"
  },
  {
    "name": "Champagne",
    "hex": "FAECCC"
  },
  {
    "name": "Linen",
    "hex": "FAF0E6"
  },
  {
    "name": "Fantasy",
    "hex": "FAF3F0"
  },
  {
    "name": "Citrine White",
    "hex": "FAF7D6"
  },
  {
    "name": "Alabaster",
    "hex": "FAFAFA"
  },
  {
    "name": "Hint of Yellow",
    "hex": "FAFDE4"
  },
  {
    "name": "Milan",
    "hex": "FAFFA4"
  },
  {
    "name": "Brink Pink",
    "hex": "FB607F"
  },
  {
    "name": "Geraldine",
    "hex": "FB8989"
  },
  {
    "name": "Lavender Rose",
    "hex": "FBA0E3"
  },
  {
    "name": "Sea Buckthorn",
    "hex": "FBA129"
  },
  {
    "name": "Sun",
    "hex": "FBAC13"
  },
  {
    "name": "Lavender Pink",
    "hex": "FBAED2"
  },
  {
    "name": "Rose Bud",
    "hex": "FBB2A3"
  },
  {
    "name": "Cupid",
    "hex": "FBBEDA"
  },
  {
    "name": "Classic Rose",
    "hex": "FBCCE7"
  },
  {
    "name": "Apricot Peach",
    "hex": "FBCEB1"
  },
  {
    "name": "Banana Mania",
    "hex": "FBE7B2"
  },
  {
    "name": "Marigold Yellow",
    "hex": "FBE870"
  },
  {
    "name": "Festival",
    "hex": "FBE96C"
  },
  {
    "name": "Sweet Corn",
    "hex": "FBEA8C"
  },
  {
    "name": "Candy Corn",
    "hex": "FBEC5D"
  },
  {
    "name": "Hint of Red",
    "hex": "FBF9F9"
  },
  {
    "name": "Shalimar",
    "hex": "FBFFBA"
  },
  {
    "name": "Shocking Pink",
    "hex": "FC0FC0"
  },
  {
    "name": "Tickle Me Pink",
    "hex": "FC80A5"
  },
  {
    "name": "Tree Poppy",
    "hex": "FC9C1D"
  },
  {
    "name": "Lightning Yellow",
    "hex": "FCC01E"
  },
  {
    "name": "Goldenrod",
    "hex": "FCD667"
  },
  {
    "name": "Candlelight",
    "hex": "FCD917"
  },
  {
    "name": "Cherokee",
    "hex": "FCDA98"
  },
  {
    "name": "Double Pearl Lusta",
    "hex": "FCF4D0"
  },
  {
    "name": "Pearl Lusta",
    "hex": "FCF4DC"
  },
  {
    "name": "Vista White",
    "hex": "FCF8F7"
  },
  {
    "name": "Bianca",
    "hex": "FCFBF3"
  },
  {
    "name": "Moon Glow",
    "hex": "FCFEDA"
  },
  {
    "name": "China Ivory",
    "hex": "FCFFE7"
  },
  {
    "name": "Ceramic",
    "hex": "FCFFF9"
  },
  {
    "name": "Torch Red",
    "hex": "FD0E35"
  },
  {
    "name": "Wild Watermelon",
    "hex": "FD5B78"
  },
  {
    "name": "Crusta",
    "hex": "FD7B33"
  },
  {
    "name": "Sorbus",
    "hex": "FD7C07"
  },
  {
    "name": "Sweet Pink",
    "hex": "FD9FA2"
  },
  {
    "name": "Light Apricot",
    "hex": "FDD5B1"
  },
  {
    "name": "Pig Pink",
    "hex": "FDD7E4"
  },
  {
    "name": "Cinderella",
    "hex": "FDE1DC"
  },
  {
    "name": "Golden Glow",
    "hex": "FDE295"
  },
  {
    "name": "Lemon",
    "hex": "FDE910"
  },
  {
    "name": "Old Lace",
    "hex": "FDF5E6"
  },
  {
    "name": "Half Colonial White",
    "hex": "FDF6D3"
  },
  {
    "name": "Drover",
    "hex": "FDF7AD"
  },
  {
    "name": "Pale Prim",
    "hex": "FDFEB8"
  },
  {
    "name": "Cumulus",
    "hex": "FDFFD5"
  },
  {
    "name": "Persian Rose",
    "hex": "FE28A2"
  },
  {
    "name": "Sunset Orange",
    "hex": "FE4C40"
  },
  {
    "name": "Bittersweet",
    "hex": "FE6F5E"
  },
  {
    "name": "California",
    "hex": "FE9D04"
  },
  {
    "name": "Yellow Sea",
    "hex": "FEA904"
  },
  {
    "name": "Melon",
    "hex": "FEBAAD"
  },
  {
    "name": "Bright Sun",
    "hex": "FED33C"
  },
  {
    "name": "Dandelion",
    "hex": "FED85D"
  },
  {
    "name": "Salomie",
    "hex": "FEDB8D"
  },
  {
    "name": "Cape Honey",
    "hex": "FEE5AC"
  },
  {
    "name": "Remy",
    "hex": "FEEBF3"
  },
  {
    "name": "Oasis",
    "hex": "FEEFCE"
  },
  {
    "name": "Bridesmaid",
    "hex": "FEF0EC"
  },
  {
    "name": "Beeswax",
    "hex": "FEF2C7"
  },
  {
    "name": "Bleach White",
    "hex": "FEF3D8"
  },
  {
    "name": "Pipi",
    "hex": "FEF4CC"
  },
  {
    "name": "Half Spanish White",
    "hex": "FEF4DB"
  },
  {
    "name": "Wisp Pink",
    "hex": "FEF4F8"
  },
  {
    "name": "Provincial Pink",
    "hex": "FEF5F1"
  },
  {
    "name": "Half Dutch White",
    "hex": "FEF7DE"
  },
  {
    "name": "Solitaire",
    "hex": "FEF8E2"
  },
  {
    "name": "White Pointer",
    "hex": "FEF8FF"
  },
  {
    "name": "Off Yellow",
    "hex": "FEF9E3"
  },
  {
    "name": "Orange White",
    "hex": "FEFCED"
  },
  {
    "name": "Red",
    "hex": "FF0000"
  },
  {
    "name": "Rose",
    "hex": "FF007F"
  },
  {
    "name": "Purple Pizzazz",
    "hex": "FF00CC"
  },
  {
    "name": "Magenta / Fuchsia",
    "hex": "FF00FF"
  },
  {
    "name": "Scarlet",
    "hex": "FF2400"
  },
  {
    "name": "Wild Strawberry",
    "hex": "FF3399"
  },
  {
    "name": "Razzle Dazzle Rose",
    "hex": "FF33CC"
  },
  {
    "name": "Radical Red",
    "hex": "FF355E"
  },
  {
    "name": "Red Orange",
    "hex": "FF3F34"
  },
  {
    "name": "Coral Red",
    "hex": "FF4040"
  },
  {
    "name": "Vermilion",
    "hex": "FF4D00"
  },
  {
    "name": "International Orange",
    "hex": "FF4F00"
  },
  {
    "name": "Outrageous Orange",
    "hex": "FF6037"
  },
  {
    "name": "Blaze Orange",
    "hex": "FF6600"
  },
  {
    "name": "Pink Flamingo",
    "hex": "FF66FF"
  },
  {
    "name": "Orange",
    "hex": "FF681F"
  },
  {
    "name": "Hot Pink",
    "hex": "FF69B4"
  },
  {
    "name": "Persimmon",
    "hex": "FF6B53"
  },
  {
    "name": "Blush Pink",
    "hex": "FF6FFF"
  },
  {
    "name": "Burning Orange",
    "hex": "FF7034"
  },
  {
    "name": "Pumpkin",
    "hex": "FF7518"
  },
  {
    "name": "Flamenco",
    "hex": "FF7D07"
  },
  {
    "name": "Flush Orange",
    "hex": "FF7F00"
  },
  {
    "name": "Coral",
    "hex": "FF7F50"
  },
  {
    "name": "Salmon",
    "hex": "FF8C69"
  },
  {
    "name": "Pizazz",
    "hex": "FF9000"
  },
  {
    "name": "West Side",
    "hex": "FF910F"
  },
  {
    "name": "Pink Salmon",
    "hex": "FF91A4"
  },
  {
    "name": "Neon Carrot",
    "hex": "FF9933"
  },
  {
    "name": "Atomic Tangerine",
    "hex": "FF9966"
  },
  {
    "name": "Vivid Tangerine",
    "hex": "FF9980"
  },
  {
    "name": "Sunshade",
    "hex": "FF9E2C"
  },
  {
    "name": "Orange Peel",
    "hex": "FFA000"
  },
  {
    "name": "Mona Lisa",
    "hex": "FFA194"
  },
  {
    "name": "Web Orange",
    "hex": "FFA500"
  },
  {
    "name": "Carnation Pink",
    "hex": "FFA6C9"
  },
  {
    "name": "Hit Pink",
    "hex": "FFAB81"
  },
  {
    "name": "Yellow Orange",
    "hex": "FFAE42"
  },
  {
    "name": "Cornflower Lilac",
    "hex": "FFB0AC"
  },
  {
    "name": "Sundown",
    "hex": "FFB1B3"
  },
  {
    "name": "My Sin",
    "hex": "FFB31F"
  },
  {
    "name": "Texas Rose",
    "hex": "FFB555"
  },
  {
    "name": "Cotton Candy",
    "hex": "FFB7D5"
  },
  {
    "name": "Macaroni and Cheese",
    "hex": "FFB97B"
  },
  {
    "name": "Selective Yellow",
    "hex": "FFBA00"
  },
  {
    "name": "Koromiko",
    "hex": "FFBD5F"
  },
  {
    "name": "Amber",
    "hex": "FFBF00"
  },
  {
    "name": "Wax Flower",
    "hex": "FFC0A8"
  },
  {
    "name": "Pink",
    "hex": "FFC0CB"
  },
  {
    "name": "Your Pink",
    "hex": "FFC3C0"
  },
  {
    "name": "Supernova",
    "hex": "FFC901"
  },
  {
    "name": "Flesh",
    "hex": "FFCBA4"
  },
  {
    "name": "Sunglow",
    "hex": "FFCC33"
  },
  {
    "name": "Golden Tainoi",
    "hex": "FFCC5C"
  },
  {
    "name": "Peach Orange",
    "hex": "FFCC99"
  },
  {
    "name": "Chardonnay",
    "hex": "FFCD8C"
  },
  {
    "name": "Pastel Pink",
    "hex": "FFD1DC"
  },
  {
    "name": "Romantic",
    "hex": "FFD2B7"
  },
  {
    "name": "Grandis",
    "hex": "FFD38C"
  },
  {
    "name": "Gold",
    "hex": "FFD700"
  },
  {
    "name": "School bus Yellow",
    "hex": "FFD800"
  },
  {
    "name": "Cosmos",
    "hex": "FFD8D9"
  },
  {
    "name": "Mustard",
    "hex": "FFDB58"
  },
  {
    "name": "Peach Schnapps",
    "hex": "FFDCD6"
  },
  {
    "name": "Caramel",
    "hex": "FFDDAF"
  },
  {
    "name": "Tuft Bush",
    "hex": "FFDDCD"
  },
  {
    "name": "Watusi",
    "hex": "FFDDCF"
  },
  {
    "name": "Pink Lace",
    "hex": "FFDDF4"
  },
  {
    "name": "Navajo White",
    "hex": "FFDEAD"
  },
  {
    "name": "Frangipani",
    "hex": "FFDEB3"
  },
  {
    "name": "Pippin",
    "hex": "FFE1DF"
  },
  {
    "name": "Pale Rose",
    "hex": "FFE1F2"
  },
  {
    "name": "Negroni",
    "hex": "FFE2C5"
  },
  {
    "name": "Cream Brulee",
    "hex": "FFE5A0"
  },
  {
    "name": "Peach",
    "hex": "FFE5B4"
  },
  {
    "name": "Tequila",
    "hex": "FFE6C7"
  },
  {
    "name": "Kournikova",
    "hex": "FFE772"
  },
  {
    "name": "Sandy Beach",
    "hex": "FFEAC8"
  },
  {
    "name": "Karry",
    "hex": "FFEAD4"
  },
  {
    "name": "Broom",
    "hex": "FFEC13"
  },
  {
    "name": "Colonial White",
    "hex": "FFEDBC"
  },
  {
    "name": "Derby",
    "hex": "FFEED8"
  },
  {
    "name": "Vis Vis",
    "hex": "FFEFA1"
  },
  {
    "name": "Egg White",
    "hex": "FFEFC1"
  },
  {
    "name": "Papaya Whip",
    "hex": "FFEFD5"
  },
  {
    "name": "Fair Pink",
    "hex": "FFEFEC"
  },
  {
    "name": "Peach Cream",
    "hex": "FFF0DB"
  },
  {
    "name": "Lavender blush",
    "hex": "FFF0F5"
  },
  {
    "name": "Gorse",
    "hex": "FFF14F"
  },
  {
    "name": "Buttermilk",
    "hex": "FFF1B5"
  },
  {
    "name": "Pink Lady",
    "hex": "FFF1D8"
  },
  {
    "name": "Forget Me Not",
    "hex": "FFF1EE"
  },
  {
    "name": "Tutu",
    "hex": "FFF1F9"
  },
  {
    "name": "Picasso",
    "hex": "FFF39D"
  },
  {
    "name": "Chardon",
    "hex": "FFF3F1"
  },
  {
    "name": "Paris Daisy",
    "hex": "FFF46E"
  },
  {
    "name": "Barley White",
    "hex": "FFF4CE"
  },
  {
    "name": "Egg Sour",
    "hex": "FFF4DD"
  },
  {
    "name": "Sazerac",
    "hex": "FFF4E0"
  },
  {
    "name": "Serenade",
    "hex": "FFF4E8"
  },
  {
    "name": "Chablis",
    "hex": "FFF4F3"
  },
  {
    "name": "Seashell Peach",
    "hex": "FFF5EE"
  },
  {
    "name": "Sauvignon",
    "hex": "FFF5F3"
  },
  {
    "name": "Milk Punch",
    "hex": "FFF6D4"
  },
  {
    "name": "Varden",
    "hex": "FFF6DF"
  },
  {
    "name": "Rose White",
    "hex": "FFF6F5"
  },
  {
    "name": "Baja White",
    "hex": "FFF8D1"
  },
  {
    "name": "Gin Fizz",
    "hex": "FFF9E2"
  },
  {
    "name": "Early Dawn",
    "hex": "FFF9E6"
  },
  {
    "name": "Lemon Chiffon",
    "hex": "FFFACD"
  },
  {
    "name": "Bridal Heath",
    "hex": "FFFAF4"
  },
  {
    "name": "Scotch Mist",
    "hex": "FFFBDC"
  },
  {
    "name": "Soapstone",
    "hex": "FFFBF9"
  },
  {
    "name": "Witch Haze",
    "hex": "FFFC99"
  },
  {
    "name": "Buttery White",
    "hex": "FFFCEA"
  },
  {
    "name": "Island Spice",
    "hex": "FFFCEE"
  },
  {
    "name": "Cream",
    "hex": "FFFDD0"
  },
  {
    "name": "Chilean Heath",
    "hex": "FFFDE6"
  },
  {
    "name": "Travertine",
    "hex": "FFFDE8"
  },
  {
    "name": "Orchid White",
    "hex": "FFFDF3"
  },
  {
    "name": "Quarter Pearl Lusta",
    "hex": "FFFDF4"
  },
  {
    "name": "Half and Half",
    "hex": "FFFEE1"
  },
  {
    "name": "Apricot White",
    "hex": "FFFEEC"
  },
  {
    "name": "Rice Cake",
    "hex": "FFFEF0"
  },
  {
    "name": "Black White",
    "hex": "FFFEF6"
  },
  {
    "name": "Romance",
    "hex": "FFFEFD"
  },
  {
    "name": "Yellow",
    "hex": "FFFF00"
  },
  {
    "name": "Laser Lemon",
    "hex": "FFFF66"
  },
  {
    "name": "Pale Canary",
    "hex": "FFFF99"
  },
  {
    "name": "Portafino",
    "hex": "FFFFB4"
  },
  {
    "name": "Ivory",
    "hex": "FFFFF0"
  },
  {
    "name": "White",
    "hex": "FFFFFF"
  }
]


/***/ }),

/***/ "./node_modules/color-namer/lib/colors/pantone.js":
/*!********************************************************!*\
  !*** ./node_modules/color-namer/lib/colors/pantone.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{
  "name": "Mahogany",
  "hex": "#CD4A4A"
},{
  "name": "Fuzzy Wuzzy Brown",
  "hex": "#CC6666"
},{
  "name": "Chestnut",
  "hex": "#BC5D58"
},{
  "name": "Red Orange",
  "hex": "#FF5349"
},{
  "name": "Sunset Orange",
  "hex": "#FD5E53"
},{
  "name": "Bittersweet",
  "hex": "#FD7C6E"
},{
  "name": "Melon",
  "hex": "#FDBCB4"
},{
  "name": "Outrageous Orange",
  "hex": "#FF6E4A"
},{
  "name": "Vivid Tangerine",
  "hex": "#FFA089"
},{
  "name": "Burnt Sienna",
  "hex": "#EA7E5D"
},{
  "name": "Brown",
  "hex": "#B4674D"
},{
  "name": "Sepia",
  "hex": "#A5694F"
},{
  "name": "Orange",
  "hex": "#FF7538"
},{
  "name": "Burnt Orange",
  "hex": "#FF7F49"
},{
  "name": "Copper",
  "hex": "#DD9475"
},{
  "name": "Mango Tango",
  "hex": "#FF8243"
},{
  "name": "Atomic Tangerine",
  "hex": "#FFA474"
},{
  "name": "Beaver",
  "hex": "#9F8170"
},{
  "name": "Antique Brass",
  "hex": "#CD9575"
},{
  "name": "Desert Sand",
  "hex": "#EFCDB8"
},{
  "name": "Raw Sienna",
  "hex": "#D68A59"
},{
  "name": "Tumbleweed",
  "hex": "#DEAA88"
},{
  "name": "Tan",
  "hex": "#FAA76C"
},{
  "name": "Peach",
  "hex": "#FFCFAB"
},{
  "name": "Macaroni and Cheese",
  "hex": "#FFBD88"
},{
  "name": "Apricot",
  "hex": "#FDD9B5"
},{
  "name": "Neon Carrot",
  "hex": "#FFA343"
},{
  "name": "Almond",
  "hex": "#EFDBC5"
},{
  "name": "Yellow Orange",
  "hex": "#FFB653"
},{
  "name": "Gold",
  "hex": "#E7C697"
},{
  "name": "Shadow",
  "hex": "#8A795D"
},{
  "name": "Banana Mania",
  "hex": "#FAE7B5"
},{
  "name": "Sunglow",
  "hex": "#FFCF48"
},{
  "name": "Goldenrod",
  "hex": "#FCD975"
},{
  "name": "Dandelion",
  "hex": "#FDDB6D"
},{
  "name": "Yellow",
  "hex": "#FCE883"
},{
  "name": "Green Yellow",
  "hex": "#F0E891"
},{
  "name": "Spring Green",
  "hex": "#ECEABE"
},{
  "name": "Olive Green",
  "hex": "#BAB86C"
},{
  "name": "Laser Lemon",
  "hex": "#FDFC74"
},{
  "name": "Unmellow Yellow",
  "hex": "#FDFC74"
},{
  "name": "Canary",
  "hex": "#FFFF99"
},{
  "name": "Yellow Green",
  "hex": "#C5E384"
},{
  "name": "Inch Worm",
  "hex": "#B2EC5D"
},{
  "name": "Asparagus",
  "hex": "#87A96B"
},{
  "name": "Granny Smith Apple",
  "hex": "#A8E4A0"
},{
  "name": "Electric Lime",
  "hex": "#1DF914"
},{
  "name": "Screamin Green",
  "hex": "#76FF7A"
},{
  "name": "Fern",
  "hex": "#71BC78"
},{
  "name": "Forest Green",
  "hex": "#6DAE81"
},{
  "name": "Sea Green",
  "hex": "#9FE2BF"
},{
  "name": "Green",
  "hex": "#1CAC78"
},{
  "name": "Mountain Meadow",
  "hex": "#30BA8F"
},{
  "name": "Shamrock",
  "hex": "#45CEA2"
},{
  "name": "Jungle Green",
  "hex": "#3BB08F"
},{
  "name": "Caribbean Green",
  "hex": "#1CD3A2"
},{
  "name": "Tropical Rain Forest",
  "hex": "#17806D"
},{
  "name": "Pine Green",
  "hex": "#158078"
},{
  "name": "Robin Egg Blue",
  "hex": "#1FCECB"
},{
  "name": "Aquamarine",
  "hex": "#78DBE2"
},{
  "name": "Turquoise Blue",
  "hex": "#77DDE7"
},{
  "name": "Sky Blue",
  "hex": "#80DAEB"
},{
  "name": "Outer Space",
  "hex": "#414A4C"
},{
  "name": "Blue Green",
  "hex": "#199EBD"
},{
  "name": "Pacific Blue",
  "hex": "#1CA9C9"
},{
  "name": "Cerulean",
  "hex": "#1DACD6"
},{
  "name": "Cornflower",
  "hex": "#9ACEEB"
},{
  "name": "Midnight Blue",
  "hex": "#1A4876"
},{
  "name": "Navy Blue",
  "hex": "#1974D2"
},{
  "name": "Denim",
  "hex": "#2B6CC4"
},{
  "name": "Blue",
  "hex": "#1F75FE"
},{
  "name": "Periwinkle",
  "hex": "#C5D0E6"
},{
  "name": "Cadet Blue",
  "hex": "#B0B7C6"
},{
  "name": "Indigo",
  "hex": "#5D76CB"
},{
  "name": "Wild Blue Yonder",
  "hex": "#A2ADD0"
},{
  "name": "Manatee",
  "hex": "#979AAA"
},{
  "name": "Blue Bell",
  "hex": "#ADADD6"
},{
  "name": "Blue Violet",
  "hex": "#7366BD"
},{
  "name": "Purple Heart",
  "hex": "#7442C8"
},{
  "name": "Royal Purple",
  "hex": "#7851A9"
},{
  "name": "Purple Mountains’ Majesty",
  "hex": "#9D81BA"
},{
  "name": "Violet (Purple)",
  "hex": "#926EAE"
},{
  "name": "Wisteria",
  "hex": "#CDA4DE"
},{
  "name": "Vivid Violet",
  "hex": "#8F509D"
},{
  "name": "Fuchsia",
  "hex": "#C364C5"
},{
  "name": "Shocking Pink",
  "hex": "#FB7EFD"
},{
  "name": "Pink Flamingo",
  "hex": "#FC74FD"
},{
  "name": "Plum",
  "hex": "#8E4585"
},{
  "name": "Hot Magenta",
  "hex": "#FF1DCE"
},{
  "name": "Purple Pizzazz",
  "hex": "#FF1DCE"
},{
  "name": "Razzle Dazzle Rose",
  "hex": "#FF48D0"
},{
  "name": "Orchid",
  "hex": "#E6A8D7"
},{
  "name": "Red Violet",
  "hex": "#C0448F"
},{
  "name": "Eggplant",
  "hex": "#6E5160"
},{
  "name": "Cerise",
  "hex": "#DD4492"
},{
  "name": "Wild Strawberry",
  "hex": "#FF43A4"
},{
  "name": "Magenta",
  "hex": "#F664AF"
},{
  "name": "Lavender",
  "hex": "#FCB4D5"
},{
  "name": "Cotton Candy",
  "hex": "#FFBCD9"
},{
  "name": "Violet Red",
  "hex": "#F75394"
},{
  "name": "Carnation Pink",
  "hex": "#FFAACC"
},{
  "name": "Razzmatazz",
  "hex": "#E3256B"
},{
  "name": "Piggy Pink",
  "hex": "#FDD7E4"
},{
  "name": "Jazzberry Jam",
  "hex": "#CA3767"
},{
  "name": "Blush",
  "hex": "#DE5D83"
},{
  "name": "Tickle Me Pink",
  "hex": "#FC89AC"
},{
  "name": "Pink Sherbet",
  "hex": "#F780A1"
},{
  "name": "Maroon",
  "hex": "#C8385A"
},{
  "name": "Red",
  "hex": "#EE204D"
},{
  "name": "Radical Red",
  "hex": "#FF496C"
},{
  "name": "Mauvelous",
  "hex": "#EF98AA"
},{
  "name": "Wild Watermelon",
  "hex": "#FC6C85"
},{
  "name": "Scarlet",
  "hex": "#FC2847"
},{
  "name": "Salmon",
  "hex": "#FF9BAA"
},{
  "name": "Brick Red",
  "hex": "#CB4154"
},{
  "name": "White",
  "hex": "#EDEDED"
},{
  "name": "Timberwolf",
  "hex": "#DBD7D2"
},{
  "name": "Silver",
  "hex": "#CDC5C2"
},{
  "name": "Gray",
  "hex": "#95918C"
},{
  "name": "Black",
  "hex": "#232323"
}]


/***/ }),

/***/ "./node_modules/color-namer/lib/colors/roygbiv.js":
/*!********************************************************!*\
  !*** ./node_modules/color-namer/lib/colors/roygbiv.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  { name: 'red', hex: '#FF0000' },
  { name: 'orange', hex: '#FFA500' },
  { name: 'yellow', hex: '#FFFF00' },
  { name: 'green', hex: '#008000' },
  { name: 'blue', hex: '#0000FF' },
  { name: 'indigo', hex: '#4B0082' },
  { name: 'violet', hex: '#EE82EE' }
]


/***/ }),

/***/ "./node_modules/color-namer/lib/colors/x11.js":
/*!****************************************************!*\
  !*** ./node_modules/color-namer/lib/colors/x11.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{
  name: 'indigo',
  hex: '#4b0082'
}, {
  name: 'gold',
  hex: '#ffd700'
}, {
  name: 'hotpink',
  hex: '#ff69b4'
}, {
  name: 'firebrick',
  hex: '#b22222'
}, {
  name: 'indianred',
  hex: '#cd5c5c'
}, {
  name: 'yellow',
  hex: '#ffff00'
}, {
  name: 'mistyrose',
  hex: '#ffe4e1'
}, {
  name: 'darkolivegreen',
  hex: '#556b2f'
}, {
  name: 'olive',
  hex: '#808000'
}, {
  name: 'darkseagreen',
  hex: '#8fbc8f'
}, {
  name: 'pink',
  hex: '#ffc0cb'
}, {
  name: 'tomato',
  hex: '#ff6347'
}, {
  name: 'lightcoral',
  hex: '#f08080'
}, {
  name: 'orangered',
  hex: '#ff4500'
}, {
  name: 'navajowhite',
  hex: '#ffdead'
}, {
  name: 'lime',
  hex: '#00ff00'
}, {
  name: 'palegreen',
  hex: '#98fb98'
}, {
  name: 'darkslategrey',
  hex: '#2f4f4f'
}, {
  name: 'greenyellow',
  hex: '#adff2f'
}, {
  name: 'burlywood',
  hex: '#deb887'
}, {
  name: 'seashell',
  hex: '#fff5ee'
}, {
  name: 'mediumspringgreen',
  hex: '#00fa9a'
}, {
  name: 'fuchsia',
  hex: '#ff00ff'
}, {
  name: 'papayawhip',
  hex: '#ffefd5'
}, {
  name: 'blanchedalmond',
  hex: '#ffebcd'
}, {
  name: 'chartreuse',
  hex: '#7fff00'
}, {
  name: 'dimgray',
  hex: '#696969'
}, {
  name: 'black',
  hex: '#000000'
}, {
  name: 'peachpuff',
  hex: '#ffdab9'
}, {
  name: 'springgreen',
  hex: '#00ff7f'
}, {
  name: 'aquamarine',
  hex: '#7fffd4'
}, {
  name: 'white',
  hex: '#ffffff'
}, {
  name: 'orange',
  hex: '#ffa500'
}, {
  name: 'lightsalmon',
  hex: '#ffa07a'
}, {
  name: 'darkslategray',
  hex: '#2f4f4f'
}, {
  name: 'brown',
  hex: '#a52a2a'
}, {
  name: 'ivory',
  hex: '#fffff0'
}, {
  name: 'dodgerblue',
  hex: '#1e90ff'
}, {
  name: 'peru',
  hex: '#cd853f'
}, {
  name: 'lawngreen',
  hex: '#7cfc00'
}, {
  name: 'chocolate',
  hex: '#d2691e'
}, {
  name: 'crimson',
  hex: '#dc143c'
}, {
  name: 'forestgreen',
  hex: '#228b22'
}, {
  name: 'darkgrey',
  hex: '#a9a9a9'
}, {
  name: 'lightseagreen',
  hex: '#20b2aa'
}, {
  name: 'cyan',
  hex: '#00ffff'
}, {
  name: 'mintcream',
  hex: '#f5fffa'
}, {
  name: 'silver',
  hex: '#c0c0c0'
}, {
  name: 'antiquewhite',
  hex: '#faebd7'
}, {
  name: 'mediumorchid',
  hex: '#ba55d3'
}, {
  name: 'skyblue',
  hex: '#87ceeb'
}, {
  name: 'gray',
  hex: '#808080'
}, {
  name: 'darkturquoise',
  hex: '#00ced1'
}, {
  name: 'goldenrod',
  hex: '#daa520'
}, {
  name: 'darkgreen',
  hex: '#006400'
}, {
  name: 'floralwhite',
  hex: '#fffaf0'
}, {
  name: 'darkviolet',
  hex: '#9400d3'
}, {
  name: 'darkgray',
  hex: '#a9a9a9'
}, {
  name: 'moccasin',
  hex: '#ffe4b5'
}, {
  name: 'saddlebrown',
  hex: '#8b4513'
}, {
  name: 'grey',
  hex: '#808080'
}, {
  name: 'darkslateblue',
  hex: '#483d8b'
}, {
  name: 'lightskyblue',
  hex: '#87cefa'
}, {
  name: 'lightpink',
  hex: '#ffb6c1'
}, {
  name: 'mediumvioletred',
  hex: '#c71585'
}, {
  name: 'slategrey',
  hex: '#708090'
}, {
  name: 'red',
  hex: '#ff0000'
}, {
  name: 'deeppink',
  hex: '#ff1493'
}, {
  name: 'limegreen',
  hex: '#32cd32'
}, {
  name: 'darkmagenta',
  hex: '#8b008b'
}, {
  name: 'palegoldenrod',
  hex: '#eee8aa'
}, {
  name: 'plum',
  hex: '#dda0dd'
}, {
  name: 'turquoise',
  hex: '#40e0d0'
}, {
  name: 'lightgrey',
  hex: '#d3d3d3'
}, {
  name: 'lightgoldenrodyellow',
  hex: '#fafad2'
}, {
  name: 'darkgoldenrod',
  hex: '#b8860b'
}, {
  name: 'lavender',
  hex: '#e6e6fa'
}, {
  name: 'maroon',
  hex: '#800000'
}, {
  name: 'yellowgreen',
  hex: '#9acd32'
}, {
  name: 'sandybrown',
  hex: '#f4a460'
}, {
  name: 'thistle',
  hex: '#d8bfd8'
}, {
  name: 'violet',
  hex: '#ee82ee'
}, {
  name: 'navy',
  hex: '#000080'
}, {
  name: 'magenta',
  hex: '#ff00ff'
}, {
  name: 'dimgrey',
  hex: '#696969'
}, {
  name: 'tan',
  hex: '#d2b48c'
}, {
  name: 'rosybrown',
  hex: '#bc8f8f'
}, {
  name: 'olivedrab',
  hex: '#6b8e23'
}, {
  name: 'blue',
  hex: '#0000ff'
}, {
  name: 'lightblue',
  hex: '#add8e6'
}, {
  name: 'ghostwhite',
  hex: '#f8f8ff'
}, {
  name: 'honeydew',
  hex: '#f0fff0'
}, {
  name: 'cornflowerblue',
  hex: '#6495ed'
}, {
  name: 'slateblue',
  hex: '#6a5acd'
}, {
  name: 'linen',
  hex: '#faf0e6'
}, {
  name: 'darkblue',
  hex: '#00008b'
}, {
  name: 'powderblue',
  hex: '#b0e0e6'
}, {
  name: 'seagreen',
  hex: '#2e8b57'
}, {
  name: 'darkkhaki',
  hex: '#bdb76b'
}, {
  name: 'snow',
  hex: '#fffafa'
}, {
  name: 'sienna',
  hex: '#a0522d'
}, {
  name: 'mediumblue',
  hex: '#0000cd'
}, {
  name: 'royalblue',
  hex: '#4169e1'
}, {
  name: 'lightcyan',
  hex: '#e0ffff'
}, {
  name: 'green',
  hex: '#008000'
}, {
  name: 'mediumpurple',
  hex: '#9370db'
}, {
  name: 'midnightblue',
  hex: '#191970'
}, {
  name: 'cornsilk',
  hex: '#fff8dc'
}, {
  name: 'paleturquoise',
  hex: '#afeeee'
}, {
  name: 'bisque',
  hex: '#ffe4c4'
}, {
  name: 'slategray',
  hex: '#708090'
}, {
  name: 'darkcyan',
  hex: '#008b8b'
}, {
  name: 'khaki',
  hex: '#f0e68c'
}, {
  name: 'wheat',
  hex: '#f5deb3'
}, {
  name: 'teal',
  hex: '#008080'
}, {
  name: 'darkorchid',
  hex: '#9932cc'
}, {
  name: 'deepskyblue',
  hex: '#00bfff'
}, {
  name: 'salmon',
  hex: '#fa8072'
}, {
  name: 'darkred',
  hex: '#8b0000'
}, {
  name: 'steelblue',
  hex: '#4682b4'
}, {
  name: 'palevioletred',
  hex: '#db7093'
}, {
  name: 'lightslategray',
  hex: '#778899'
}, {
  name: 'aliceblue',
  hex: '#f0f8ff'
}, {
  name: 'lightslategrey',
  hex: '#778899'
}, {
  name: 'lightgreen',
  hex: '#90ee90'
}, {
  name: 'orchid',
  hex: '#da70d6'
}, {
  name: 'gainsboro',
  hex: '#dcdcdc'
}, {
  name: 'mediumseagreen',
  hex: '#3cb371'
}, {
  name: 'lightgray',
  hex: '#d3d3d3'
}, {
  name: 'mediumturquoise',
  hex: '#48d1cc'
}, {
  name: 'lemonchiffon',
  hex: '#fffacd'
}, {
  name: 'cadetblue',
  hex: '#5f9ea0'
}, {
  name: 'lightyellow',
  hex: '#ffffe0'
}, {
  name: 'lavenderblush',
  hex: '#fff0f5'
}, {
  name: 'coral',
  hex: '#ff7f50'
}, {
  name: 'purple',
  hex: '#800080'
}, {
  name: 'aqua',
  hex: '#00ffff'
}, {
  name: 'whitesmoke',
  hex: '#f5f5f5'
}, {
  name: 'mediumslateblue',
  hex: '#7b68ee'
}, {
  name: 'darkorange',
  hex: '#ff8c00'
}, {
  name: 'mediumaquamarine',
  hex: '#66cdaa'
}, {
  name: 'darksalmon',
  hex: '#e9967a'
}, {
  name: 'beige',
  hex: '#f5f5dc'
}, {
  name: 'blueviolet',
  hex: '#8a2be2'
}, {
  name: 'azure',
  hex: '#f0ffff'
}, {
  name: 'lightsteelblue',
  hex: '#b0c4de'
}, {
  name: 'oldlace',
  hex: '#fdf5e6'
}]


/***/ }),

/***/ "./node_modules/color-namer/node_modules/chroma-js/chroma.js":
/*!*******************************************************************!*\
  !*** ./node_modules/color-namer/node_modules/chroma-js/chroma.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * @license
 *
 * chroma.js - JavaScript library for color conversions
 * 
 * Copyright (c) 2011-2017, Gregor Aisch
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

(function() {
  var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _average_lrgb, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hcg2rgb, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_lrgb, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hcg, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
    slice = [].slice;

  type = (function() {

    /*
    for browser-safe type checking+
    ported from jQuery's $.type
     */
    var classToType, len, name, o, ref;
    classToType = {};
    ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
    for (o = 0, len = ref.length; o < len; o++) {
      name = ref[o];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    return function(obj) {
      var strType;
      strType = Object.prototype.toString.call(obj);
      return classToType[strType] || "object";
    };
  })();

  limit = function(x, min, max) {
    if (min == null) {
      min = 0;
    }
    if (max == null) {
      max = 1;
    }
    if (x < min) {
      x = min;
    }
    if (x > max) {
      x = max;
    }
    return x;
  };

  unpack = function(args) {
    if (args.length >= 3) {
      return Array.prototype.slice.call(args);
    } else {
      return args[0];
    }
  };

  clip_rgb = function(rgb) {
    var i, o;
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for (i = o = 0; o < 3; i = ++o) {
      if (i < 3) {
        if (rgb[i] < 0 || rgb[i] > 255) {
          rgb._clipped = true;
        }
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 255) {
          rgb[i] = 255;
        }
      } else if (i === 3) {
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 1) {
          rgb[i] = 1;
        }
      }
    }
    if (!rgb._clipped) {
      delete rgb._unclipped;
    }
    return rgb;
  };

  PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;

  TWOPI = PI * 2;

  PITHIRD = PI / 3;

  DEG2RAD = PI / 180;

  RAD2DEG = 180 / PI;

  chroma = function() {
    if (arguments[0] instanceof Color) {
      return arguments[0];
    }
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, arguments, function(){});
  };

  chroma["default"] = chroma;

  _interpolators = [];

  if (( true && module !== null) && (module.exports != null)) {
    module.exports = chroma;
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return chroma;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

  chroma.version = '1.4.1';

  _input = {};

  _guess_formats = [];

  _guess_formats_sorted = false;

  Color = (function() {
    function Color() {
      var arg, args, chk, len, len1, me, mode, o, w;
      me = this;
      args = [];
      for (o = 0, len = arguments.length; o < len; o++) {
        arg = arguments[o];
        if (arg != null) {
          args.push(arg);
        }
      }
      if (args.length > 1) {
        mode = args[args.length - 1];
      }
      if (_input[mode] != null) {
        me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
      } else {
        if (!_guess_formats_sorted) {
          _guess_formats = _guess_formats.sort(function(a, b) {
            return b.p - a.p;
          });
          _guess_formats_sorted = true;
        }
        for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
          chk = _guess_formats[w];
          mode = chk.test.apply(chk, args);
          if (mode) {
            break;
          }
        }
        if (mode) {
          me._rgb = clip_rgb(_input[mode].apply(_input, args));
        }
      }
      if (me._rgb == null) {
        console.warn('unknown format: ' + args);
      }
      if (me._rgb == null) {
        me._rgb = [0, 0, 0];
      }
      if (me._rgb.length === 3) {
        me._rgb.push(1);
      }
    }

    Color.prototype.toString = function() {
      return this.hex();
    };

    return Color;

  })();

  chroma._input = _input;


  /**
  	ColorBrewer colors for chroma.js
  
  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
  	Pennsylvania State University.
  
  	Licensed under the Apache License, Version 2.0 (the "License"); 
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at	
  	http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software distributed
  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
  	specific language governing permissions and limitations under the License.
  
      @preserve
   */

  chroma.brewer = brewer = {
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  };

  (function() {
    var key, results;
    results = [];
    for (key in brewer) {
      results.push(brewer[key.toLowerCase()] = brewer[key]);
    }
    return results;
  })();


  /**
  	X11 color names
  
  	http://www.w3.org/TR/css3-color/#svg-color
   */

  w3cx11 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflower: '#6495ed',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    laserlemon: '#ffff54',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrod: '#fafad2',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    maroon2: '#7f0000',
    maroon3: '#b03060',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    purple2: '#7f007f',
    purple3: '#a020f0',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };

  chroma.colors = colors = w3cx11;

  lab2rgb = function() {
    var a, args, b, g, l, r, x, y, z;
    args = unpack(arguments);
    l = args[0], a = args[1], b = args[2];
    y = (l + 16) / 116;
    x = isNaN(a) ? y : y + a / 500;
    z = isNaN(b) ? y : y - b / 200;
    y = LAB_CONSTANTS.Yn * lab_xyz(y);
    x = LAB_CONSTANTS.Xn * lab_xyz(x);
    z = LAB_CONSTANTS.Zn * lab_xyz(z);
    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  xyz_rgb = function(r) {
    return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
  };

  lab_xyz = function(t) {
    if (t > LAB_CONSTANTS.t1) {
      return t * t * t;
    } else {
      return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
    }
  };

  LAB_CONSTANTS = {
    Kn: 18,
    Xn: 0.950470,
    Yn: 1,
    Zn: 1.088830,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452
  };

  rgb2lab = function() {
    var b, g, r, ref, ref1, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  };

  rgb_xyz = function(r) {
    if ((r /= 255) <= 0.04045) {
      return r / 12.92;
    } else {
      return pow((r + 0.055) / 1.055, 2.4);
    }
  };

  xyz_lab = function(t) {
    if (t > LAB_CONSTANTS.t3) {
      return pow(t, 1 / 3);
    } else {
      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
    }
  };

  rgb2xyz = function() {
    var b, g, r, ref, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
    return [x, y, z];
  };

  chroma.lab = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['lab']), function(){});
  };

  _input.lab = lab2rgb;

  Color.prototype.lab = function() {
    return rgb2lab(this._rgb);
  };

  bezier = function(colors) {
    var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
    colors = (function() {
      var len, o, results;
      results = [];
      for (o = 0, len = colors.length; o < len; o++) {
        c = colors[o];
        results.push(chroma(c));
      }
      return results;
    })();
    if (colors.length === 2) {
      ref = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref[0], lab1 = ref[1];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push(lab0[i] + t * (lab1[i] - lab0[i]));
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 3) {
      ref1 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 4) {
      ref2 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 5) {
      I0 = bezier(colors.slice(0, 3));
      I1 = bezier(colors.slice(2, 5));
      I = function(t) {
        if (t < 0.5) {
          return I0(t * 2);
        } else {
          return I1((t - 0.5) * 2);
        }
      };
    }
    return I;
  };

  chroma.bezier = function(colors) {
    var f;
    f = bezier(colors);
    f.scale = function() {
      return chroma.scale(f);
    };
    return f;
  };

  chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
    var dh, dl, f;
    if (start == null) {
      start = 300;
    }
    if (rotations == null) {
      rotations = -1.5;
    }
    if (hue == null) {
      hue = 1;
    }
    if (gamma == null) {
      gamma = 1;
    }
    if (lightness == null) {
      lightness = [0, 1];
    }
    dh = 0;
    if (type(lightness) === 'array') {
      dl = lightness[1] - lightness[0];
    } else {
      dl = 0;
      lightness = [lightness, lightness];
    }
    f = function(fract) {
      var a, amp, b, cos_a, g, h, l, r, sin_a;
      a = TWOPI * ((start + 120) / 360 + rotations * fract);
      l = pow(lightness[0] + dl * fract, gamma);
      h = dh !== 0 ? hue[0] + fract * dh : hue;
      amp = h * l * (1 - l) / 2;
      cos_a = cos(a);
      sin_a = sin(a);
      r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      b = l + amp * (+1.97294 * cos_a);
      return chroma(clip_rgb([r * 255, g * 255, b * 255, 1]));
    };
    f.start = function(s) {
      if (s == null) {
        return start;
      }
      start = s;
      return f;
    };
    f.rotations = function(r) {
      if (r == null) {
        return rotations;
      }
      rotations = r;
      return f;
    };
    f.gamma = function(g) {
      if (g == null) {
        return gamma;
      }
      gamma = g;
      return f;
    };
    f.hue = function(h) {
      if (h == null) {
        return hue;
      }
      hue = h;
      if (type(hue) === 'array') {
        dh = hue[1] - hue[0];
        if (dh === 0) {
          hue = hue[1];
        }
      } else {
        dh = 0;
      }
      return f;
    };
    f.lightness = function(h) {
      if (h == null) {
        return lightness;
      }
      if (type(h) === 'array') {
        lightness = h;
        dl = h[1] - h[0];
      } else {
        lightness = [h, h];
        dl = 0;
      }
      return f;
    };
    f.scale = function() {
      return chroma.scale(f);
    };
    f.hue(hue);
    return f;
  };

  chroma.random = function() {
    var code, digits, i, o;
    digits = '0123456789abcdef';
    code = '#';
    for (i = o = 0; o < 6; i = ++o) {
      code += digits.charAt(floor(Math.random() * 16));
    }
    return new Color(code);
  };

  _interpolators = [];

  interpolate = function(col1, col2, f, m) {
    var interpol, len, o, res;
    if (f == null) {
      f = 0.5;
    }
    if (m == null) {
      m = 'rgb';
    }

    /*
    interpolates between colors
    f = 0 --> me
    f = 1 --> col
     */
    if (type(col1) !== 'object') {
      col1 = chroma(col1);
    }
    if (type(col2) !== 'object') {
      col2 = chroma(col2);
    }
    for (o = 0, len = _interpolators.length; o < len; o++) {
      interpol = _interpolators[o];
      if (m === interpol[0]) {
        res = interpol[1](col1, col2, f, m);
        break;
      }
    }
    if (res == null) {
      throw "color mode " + m + " is not supported";
    }
    return res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
  };

  chroma.interpolate = interpolate;

  Color.prototype.interpolate = function(col2, f, m) {
    return interpolate(this, col2, f, m);
  };

  chroma.mix = interpolate;

  Color.prototype.mix = Color.prototype.interpolate;

  _input.rgb = function() {
    var k, ref, results, v;
    ref = unpack(arguments);
    results = [];
    for (k in ref) {
      v = ref[k];
      results.push(v);
    }
    return results;
  };

  chroma.rgb = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['rgb']), function(){});
  };

  Color.prototype.rgb = function(round) {
    if (round == null) {
      round = true;
    }
    if (round) {
      return this._rgb.map(Math.round).slice(0, 3);
    } else {
      return this._rgb.slice(0, 3);
    }
  };

  Color.prototype.rgba = function(round) {
    if (round == null) {
      round = true;
    }
    if (!round) {
      return this._rgb.slice(0);
    }
    return [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]];
  };

  _guess_formats.push({
    p: 3,
    test: function(n) {
      var a;
      a = unpack(arguments);
      if (type(a) === 'array' && a.length === 3) {
        return 'rgb';
      }
      if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
        return 'rgb';
      }
    }
  });

  _input.lrgb = _input.rgb;

  interpolate_lrgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(sqrt(pow(xyz0[0], 2) * (1 - f) + pow(xyz1[0], 2) * f), sqrt(pow(xyz0[1], 2) * (1 - f) + pow(xyz1[1], 2) * f), sqrt(pow(xyz0[2], 2) * (1 - f) + pow(xyz1[2], 2) * f), m);
  };

  _average_lrgb = function(colors) {
    var col, f, len, o, rgb, xyz;
    f = 1 / colors.length;
    xyz = [0, 0, 0, 0];
    for (o = 0, len = colors.length; o < len; o++) {
      col = colors[o];
      rgb = col._rgb;
      xyz[0] += pow(rgb[0], 2) * f;
      xyz[1] += pow(rgb[1], 2) * f;
      xyz[2] += pow(rgb[2], 2) * f;
      xyz[3] += rgb[3] * f;
    }
    xyz[0] = sqrt(xyz[0]);
    xyz[1] = sqrt(xyz[1]);
    xyz[2] = sqrt(xyz[2]);
    if (xyz[3] > 1) {
      xyz[3] = 1;
    }
    return new Color(clip_rgb(xyz));
  };

  _interpolators.push(['lrgb', interpolate_lrgb]);

  chroma.average = function(colors, mode) {
    var A, alpha, c, cnt, dx, dy, first, i, l, len, o, xyz, xyz2;
    if (mode == null) {
      mode = 'rgb';
    }
    l = colors.length;
    colors = colors.map(function(c) {
      return chroma(c);
    });
    first = colors.splice(0, 1)[0];
    if (mode === 'lrgb') {
      return _average_lrgb(colors);
    }
    xyz = first.get(mode);
    cnt = [];
    dx = 0;
    dy = 0;
    for (i in xyz) {
      xyz[i] = xyz[i] || 0;
      cnt.push(isNaN(xyz[i]) ? 0 : 1);
      if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
        A = xyz[i] / 180 * PI;
        dx += cos(A);
        dy += sin(A);
      }
    }
    alpha = first.alpha();
    for (o = 0, len = colors.length; o < len; o++) {
      c = colors[o];
      xyz2 = c.get(mode);
      alpha += c.alpha();
      for (i in xyz) {
        if (!isNaN(xyz2[i])) {
          cnt[i] += 1;
          if (mode.charAt(i) === 'h') {
            A = xyz2[i] / 180 * PI;
            dx += cos(A);
            dy += sin(A);
          } else {
            xyz[i] += xyz2[i];
          }
        }
      }
    }
    for (i in xyz) {
      if (mode.charAt(i) === 'h') {
        A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
        while (A < 0) {
          A += 360;
        }
        while (A >= 360) {
          A -= 360;
        }
        xyz[i] = A;
      } else {
        xyz[i] = xyz[i] / cnt[i];
      }
    }
    return chroma(xyz, mode).alpha(alpha / l);
  };

  hex2rgb = function(hex) {
    var a, b, g, r, rgb, u;
    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      }
      if (hex.length === 3) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      u = parseInt(hex, 16);
      r = u >> 16;
      g = u >> 8 & 0xFF;
      b = u & 0xFF;
      return [r, g, b, 1];
    }
    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
      if (hex.length === 9) {
        hex = hex.substr(1);
      }
      u = parseInt(hex, 16);
      r = u >> 24 & 0xFF;
      g = u >> 16 & 0xFF;
      b = u >> 8 & 0xFF;
      a = round((u & 0xFF) / 0xFF * 100) / 100;
      return [r, g, b, a];
    }
    if ((_input.css != null) && (rgb = _input.css(hex))) {
      return rgb;
    }
    throw "unknown color: " + hex;
  };

  rgb2hex = function(channels, mode) {
    var a, b, g, hxa, r, str, u;
    if (mode == null) {
      mode = 'auto';
    }
    r = channels[0], g = channels[1], b = channels[2], a = channels[3];
    if (mode === 'auto') {
      mode = a < 1 ? 'rgba' : 'rgb';
    }
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    u = r << 16 | g << 8 | b;
    str = "000000" + u.toString(16);
    str = str.substr(str.length - 6);
    hxa = '0' + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    return "#" + (function() {
      switch (mode.toLowerCase()) {
        case 'rgba':
          return str + hxa;
        case 'argb':
          return hxa + str;
        default:
          return str;
      }
    })();
  };

  _input.hex = function(h) {
    return hex2rgb(h);
  };

  chroma.hex = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hex']), function(){});
  };

  Color.prototype.hex = function(mode) {
    if (mode == null) {
      mode = 'auto';
    }
    return rgb2hex(this._rgb, mode);
  };

  _guess_formats.push({
    p: 4,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "string") {
        return 'hex';
      }
    }
  });

  hsl2rgb = function() {
    var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
    args = unpack(arguments);
    h = args[0], s = args[1], l = args[2];
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      t3 = [0, 0, 0];
      c = [0, 0, 0];
      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      t1 = 2 * l - t2;
      h /= 360;
      t3[0] = h + 1 / 3;
      t3[1] = h;
      t3[2] = h - 1 / 3;
      for (i = o = 0; o <= 2; i = ++o) {
        if (t3[i] < 0) {
          t3[i] += 1;
        }
        if (t3[i] > 1) {
          t3[i] -= 1;
        }
        if (6 * t3[i] < 1) {
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        } else if (2 * t3[i] < 1) {
          c[i] = t2;
        } else if (3 * t3[i] < 2) {
          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
        } else {
          c[i] = t1;
        }
      }
      ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
    }
    if (args.length > 3) {
      return [r, g, b, args[3]];
    } else {
      return [r, g, b];
    }
  };

  rgb2hsl = function(r, g, b) {
    var h, l, min, ref, s;
    if (r !== void 0 && r.length >= 3) {
      ref = r, r = ref[0], g = ref[1], b = ref[2];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }
    if (r === max) {
      h = (g - b) / (max - min);
    } else if (g === max) {
      h = 2 + (b - r) / (max - min);
    } else if (b === max) {
      h = 4 + (r - g) / (max - min);
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return [h, s, l];
  };

  chroma.hsl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsl']), function(){});
  };

  _input.hsl = hsl2rgb;

  Color.prototype.hsl = function() {
    return rgb2hsl(this._rgb);
  };

  hsv2rgb = function() {
    var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
    args = unpack(arguments);
    h = args[0], s = args[1], v = args[2];
    v *= 255;
    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = v * (1 - s);
      q = v * (1 - s * f);
      t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  rgb2hsv = function() {
    var b, delta, g, h, min, r, ref, s, v;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    v = max / 255.0;
    if (max === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max;
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, s, v];
  };

  chroma.hsv = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsv']), function(){});
  };

  _input.hsv = hsv2rgb;

  Color.prototype.hsv = function() {
    return rgb2hsv(this._rgb);
  };

  num2rgb = function(num) {
    var b, g, r;
    if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
      r = num >> 16;
      g = (num >> 8) & 0xFF;
      b = num & 0xFF;
      return [r, g, b, 1];
    }
    console.warn("unknown num color: " + num);
    return [0, 0, 0, 1];
  };

  rgb2num = function() {
    var b, g, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    return (r << 16) + (g << 8) + b;
  };

  chroma.num = function(num) {
    return new Color(num, 'num');
  };

  Color.prototype.num = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2num(this._rgb, mode);
  };

  _input.num = num2rgb;

  _guess_formats.push({
    p: 1,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
        return 'num';
      }
    }
  });

  hcg2rgb = function() {
    var _c, _g, args, b, c, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, t, v;
    args = unpack(arguments);
    h = args[0], c = args[1], _g = args[2];
    c = c / 100;
    g = g / 100 * 255;
    _c = c * 255;
    if (c === 0) {
      r = g = b = _g;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = _g * (1 - c);
      q = p + _c * (1 - f);
      t = p + _c * f;
      v = p + _c;
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  rgb2hcg = function() {
    var _g, b, c, delta, g, h, min, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    c = delta * 100 / 255;
    _g = min / (255 - delta) * 100;
    if (delta === 0) {
      h = Number.NaN;
    } else {
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, c, _g];
  };

  chroma.hcg = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hcg']), function(){});
  };

  _input.hcg = hcg2rgb;

  Color.prototype.hcg = function() {
    return rgb2hcg(this._rgb);
  };

  css2rgb = function(css) {
    var aa, ab, hsl, i, m, o, rgb, w;
    css = css.toLowerCase();
    if ((chroma.colors != null) && chroma.colors[css]) {
      return hex2rgb(chroma.colors[css]);
    }
    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = o = 0; o <= 2; i = ++o) {
        rgb[i] = +rgb[i];
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = w = 0; w <= 3; i = ++w) {
        rgb[i] = +rgb[i];
      }
    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = aa = 0; aa <= 2; i = ++aa) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = ab = 0; ab <= 2; i = ++ab) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = +rgb[3];
    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = 1;
    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = +m[4];
    }
    return rgb;
  };

  rgb2css = function(rgba) {
    var mode;
    mode = rgba[3] < 1 ? 'rgba' : 'rgb';
    if (mode === 'rgb') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
    } else if (mode === 'rgba') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
    } else {

    }
  };

  rnd = function(a) {
    return round(a * 100) / 100;
  };

  hsl2css = function(hsl, alpha) {
    var mode;
    mode = alpha < 1 ? 'hsla' : 'hsl';
    hsl[0] = rnd(hsl[0] || 0);
    hsl[1] = rnd(hsl[1] * 100) + '%';
    hsl[2] = rnd(hsl[2] * 100) + '%';
    if (mode === 'hsla') {
      hsl[3] = alpha;
    }
    return mode + '(' + hsl.join(',') + ')';
  };

  _input.css = function(h) {
    return css2rgb(h);
  };

  chroma.css = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['css']), function(){});
  };

  Color.prototype.css = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    if (mode.slice(0, 3) === 'rgb') {
      return rgb2css(this._rgb);
    } else if (mode.slice(0, 3) === 'hsl') {
      return hsl2css(this.hsl(), this.alpha());
    }
  };

  _input.named = function(name) {
    return hex2rgb(w3cx11[name]);
  };

  _guess_formats.push({
    p: 5,
    test: function(n) {
      if (arguments.length === 1 && (w3cx11[n] != null)) {
        return 'named';
      }
    }
  });

  Color.prototype.name = function(n) {
    var h, k;
    if (arguments.length) {
      if (w3cx11[n]) {
        this._rgb = hex2rgb(w3cx11[n]);
      }
      this._rgb[3] = 1;
      this;
    }
    h = this.hex('rgb');
    for (k in w3cx11) {
      if (h === w3cx11[k]) {
        return k;
      }
    }
    return h;
  };

  lch2lab = function() {

    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.
    
    A saturation multiplier was added by Gregor Aisch
     */
    var c, h, l, ref;
    ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
    h = h * DEG2RAD;
    return [l, cos(h) * c, sin(h) * c];
  };

  lch2rgb = function() {
    var L, a, args, b, c, g, h, l, r, ref, ref1;
    args = unpack(arguments);
    l = args[0], c = args[1], h = args[2];
    ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
    ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  lab2lch = function() {
    var a, b, c, h, l, ref;
    ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
    c = sqrt(a * a + b * b);
    h = (atan2(b, a) * RAD2DEG + 360) % 360;
    if (round(c * 10000) === 0) {
      h = Number.NaN;
    }
    return [l, c, h];
  };

  rgb2lch = function() {
    var a, b, g, l, r, ref, ref1;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
    return lab2lch(l, a, b);
  };

  chroma.lch = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'lch');
  };

  chroma.hcl = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'hcl');
  };

  _input.lch = lch2rgb;

  _input.hcl = function() {
    var c, h, l, ref;
    ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
    return lch2rgb([l, c, h]);
  };

  Color.prototype.lch = function() {
    return rgb2lch(this._rgb);
  };

  Color.prototype.hcl = function() {
    return rgb2lch(this._rgb).reverse();
  };

  rgb2cmyk = function(mode) {
    var b, c, f, g, k, m, r, ref, y;
    if (mode == null) {
      mode = 'rgb';
    }
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = r / 255;
    g = g / 255;
    b = b / 255;
    k = 1 - Math.max(r, Math.max(g, b));
    f = k < 1 ? 1 / (1 - k) : 0;
    c = (1 - r - k) * f;
    m = (1 - g - k) * f;
    y = (1 - b - k) * f;
    return [c, m, y, k];
  };

  cmyk2rgb = function() {
    var alpha, args, b, c, g, k, m, r, y;
    args = unpack(arguments);
    c = args[0], m = args[1], y = args[2], k = args[3];
    alpha = args.length > 4 ? args[4] : 1;
    if (k === 1) {
      return [0, 0, 0, alpha];
    }
    r = c >= 1 ? 0 : 255 * (1 - c) * (1 - k);
    g = m >= 1 ? 0 : 255 * (1 - m) * (1 - k);
    b = y >= 1 ? 0 : 255 * (1 - y) * (1 - k);
    return [r, g, b, alpha];
  };

  _input.cmyk = function() {
    return cmyk2rgb(unpack(arguments));
  };

  chroma.cmyk = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['cmyk']), function(){});
  };

  Color.prototype.cmyk = function() {
    return rgb2cmyk(this._rgb);
  };

  _input.gl = function() {
    var i, k, o, rgb, v;
    rgb = (function() {
      var ref, results;
      ref = unpack(arguments);
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(v);
      }
      return results;
    }).apply(this, arguments);
    for (i = o = 0; o <= 2; i = ++o) {
      rgb[i] *= 255;
    }
    return rgb;
  };

  chroma.gl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['gl']), function(){});
  };

  Color.prototype.gl = function() {
    var rgb;
    rgb = this._rgb;
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
  };

  rgb2luminance = function(r, g, b) {
    var ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  luminance_x = function(x) {
    x /= 255;
    if (x <= 0.03928) {
      return x / 12.92;
    } else {
      return pow((x + 0.055) / 1.055, 2.4);
    }
  };

  interpolate_rgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };

  _interpolators.push(['rgb', interpolate_rgb]);

  Color.prototype.luminance = function(lum, mode) {
    var cur_lum, eps, max_iter, rgba, test;
    if (mode == null) {
      mode = 'rgb';
    }
    if (!arguments.length) {
      return rgb2luminance(this._rgb);
    }
    rgba = this._rgb;
    if (lum === 0) {
      rgba = [0, 0, 0, this._rgb[3]];
    } else if (lum === 1) {
      rgba = [255, 255, 255, this[3]];
    } else {
      cur_lum = rgb2luminance(this._rgb);
      eps = 1e-7;
      max_iter = 20;
      test = function(l, h) {
        var lm, m;
        m = l.interpolate(h, 0.5, mode);
        lm = m.luminance();
        if (Math.abs(lum - lm) < eps || !max_iter--) {
          return m;
        }
        if (lm > lum) {
          return test(l, m);
        }
        return test(m, h);
      };
      if (cur_lum > lum) {
        rgba = test(chroma('black'), this).rgba();
      } else {
        rgba = test(this, chroma('white')).rgba();
      }
    }
    return chroma(rgba).alpha(this.alpha());
  };

  temperature2rgb = function(kelvin) {
    var b, g, r, temp;
    temp = kelvin / 100;
    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }
    return [r, g, b];
  };

  rgb2temperature = function() {
    var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    minTemp = 1000;
    maxTemp = 40000;
    eps = 0.4;
    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      rgb = temperature2rgb(temp);
      if ((rgb[2] / rgb[0]) >= (b / r)) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }
    return round(temp);
  };

  chroma.temperature = chroma.kelvin = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['temperature']), function(){});
  };

  _input.temperature = _input.kelvin = _input.K = temperature2rgb;

  Color.prototype.temperature = function() {
    return rgb2temperature(this._rgb);
  };

  Color.prototype.kelvin = Color.prototype.temperature;

  chroma.contrast = function(a, b) {
    var l1, l2, ref, ref1;
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.luminance();
    l2 = b.luminance();
    if (l1 > l2) {
      return (l1 + 0.05) / (l2 + 0.05);
    } else {
      return (l2 + 0.05) / (l1 + 0.05);
    }
  };

  chroma.distance = function(a, b, mode) {
    var d, i, l1, l2, ref, ref1, sum_sq;
    if (mode == null) {
      mode = 'lab';
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.get(mode);
    l2 = b.get(mode);
    sum_sq = 0;
    for (i in l1) {
      d = (l1[i] || 0) - (l2[i] || 0);
      sum_sq += d * d;
    }
    return Math.sqrt(sum_sq);
  };

  chroma.deltaE = function(a, b, L, C) {
    var L1, L2, a1, a2, b1, b2, c1, c2, c4, dH2, delA, delB, delC, delL, f, h1, ref, ref1, ref2, ref3, sc, sh, sl, t, v1, v2, v3;
    if (L == null) {
      L = 1;
    }
    if (C == null) {
      C = 1;
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    ref2 = a.lab(), L1 = ref2[0], a1 = ref2[1], b1 = ref2[2];
    ref3 = b.lab(), L2 = ref3[0], a2 = ref3[1], b2 = ref3[2];
    c1 = sqrt(a1 * a1 + b1 * b1);
    c2 = sqrt(a2 * a2 + b2 * b2);
    sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + 0.01765 * L1);
    sc = (0.0638 * c1) / (1.0 + 0.0131 * c1) + 0.638;
    h1 = c1 < 0.000001 ? 0.0 : (atan2(b1, a1) * 180.0) / PI;
    while (h1 < 0) {
      h1 += 360;
    }
    while (h1 >= 360) {
      h1 -= 360;
    }
    t = (h1 >= 164.0) && (h1 <= 345.0) ? 0.56 + abs(0.2 * cos((PI * (h1 + 168.0)) / 180.0)) : 0.36 + abs(0.4 * cos((PI * (h1 + 35.0)) / 180.0));
    c4 = c1 * c1 * c1 * c1;
    f = sqrt(c4 / (c4 + 1900.0));
    sh = sc * (f * t + 1.0 - f);
    delL = L1 - L2;
    delC = c1 - c2;
    delA = a1 - a2;
    delB = b1 - b2;
    dH2 = delA * delA + delB * delB - delC * delC;
    v1 = delL / (L * sl);
    v2 = delC / (C * sc);
    v3 = sh;
    return sqrt(v1 * v1 + v2 * v2 + (dH2 / (v3 * v3)));
  };

  Color.prototype.get = function(modechan) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    src = me[mode]();
    if (channel) {
      i = mode.indexOf(channel);
      if (i > -1) {
        return src[i];
      } else {
        return console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      return src;
    }
  };

  Color.prototype.set = function(modechan, value) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    if (channel) {
      src = me[mode]();
      i = mode.indexOf(channel);
      if (i > -1) {
        if (type(value) === 'string') {
          switch (value.charAt(0)) {
            case '+':
              src[i] += +value;
              break;
            case '-':
              src[i] += +value;
              break;
            case '*':
              src[i] *= +(value.substr(1));
              break;
            case '/':
              src[i] /= +(value.substr(1));
              break;
            default:
              src[i] = +value;
          }
        } else {
          src[i] = value;
        }
      } else {
        console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      src = value;
    }
    return chroma(src, mode).alpha(me.alpha());
  };

  Color.prototype.clipped = function() {
    return this._rgb._clipped || false;
  };

  Color.prototype.alpha = function(a) {
    if (arguments.length) {
      return chroma.rgb([this._rgb[0], this._rgb[1], this._rgb[2], a]);
    }
    return this._rgb[3];
  };

  Color.prototype.darken = function(amount) {
    var lab, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lab = me.lab();
    lab[0] -= LAB_CONSTANTS.Kn * amount;
    return chroma.lab(lab).alpha(me.alpha());
  };

  Color.prototype.brighten = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.darken(-amount);
  };

  Color.prototype.darker = Color.prototype.darken;

  Color.prototype.brighter = Color.prototype.brighten;

  Color.prototype.saturate = function(amount) {
    var lch, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lch = me.lch();
    lch[1] += amount * LAB_CONSTANTS.Kn;
    if (lch[1] < 0) {
      lch[1] = 0;
    }
    return chroma.lch(lch).alpha(me.alpha());
  };

  Color.prototype.desaturate = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.saturate(-amount);
  };

  Color.prototype.premultiply = function() {
    var a, rgb;
    rgb = this.rgb();
    a = this.alpha();
    return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
  };

  blend = function(bottom, top, mode) {
    if (!blend[mode]) {
      throw 'unknown blend mode ' + mode;
    }
    return blend[mode](bottom, top);
  };

  blend_f = function(f) {
    return function(bottom, top) {
      var c0, c1;
      c0 = chroma(top).rgb();
      c1 = chroma(bottom).rgb();
      return chroma(f(c0, c1), 'rgb');
    };
  };

  each = function(f) {
    return function(c0, c1) {
      var i, o, out;
      out = [];
      for (i = o = 0; o <= 3; i = ++o) {
        out[i] = f(c0[i], c1[i]);
      }
      return out;
    };
  };

  normal = function(a, b) {
    return a;
  };

  multiply = function(a, b) {
    return a * b / 255;
  };

  darken = function(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  };

  lighten = function(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };

  screen = function(a, b) {
    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
  };

  overlay = function(a, b) {
    if (b < 128) {
      return 2 * a * b / 255;
    } else {
      return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    }
  };

  burn = function(a, b) {
    return 255 * (1 - (1 - b / 255) / (a / 255));
  };

  dodge = function(a, b) {
    if (a === 255) {
      return 255;
    }
    a = 255 * (b / 255) / (1 - a / 255);
    if (a > 255) {
      return 255;
    } else {
      return a;
    }
  };

  blend.normal = blend_f(each(normal));

  blend.multiply = blend_f(each(multiply));

  blend.screen = blend_f(each(screen));

  blend.overlay = blend_f(each(overlay));

  blend.darken = blend_f(each(darken));

  blend.lighten = blend_f(each(lighten));

  blend.dodge = blend_f(each(dodge));

  blend.burn = blend_f(each(burn));

  chroma.blend = blend;

  chroma.analyze = function(data) {
    var len, o, r, val;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    for (o = 0, len = data.length; o < len; o++) {
      val = data[o];
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.scale = function(colors, positions) {
    var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _gamma, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, _useCache, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
    _mode = 'rgb';
    _nacol = chroma('#ccc');
    _spread = 0;
    _fixed = false;
    _domain = [0, 1];
    _pos = [];
    _padding = [0, 0];
    _classes = false;
    _colors = [];
    _out = false;
    _min = 0;
    _max = 1;
    _correctLightness = false;
    _colorCache = {};
    _useCache = true;
    _gamma = 1;
    setColors = function(colors) {
      var c, col, o, ref, ref1, w;
      if (colors == null) {
        colors = ['#fff', '#000'];
      }
      if ((colors != null) && type(colors) === 'string' && (chroma.brewer != null)) {
        colors = chroma.brewer[colors] || chroma.brewer[colors.toLowerCase()] || colors;
      }
      if (type(colors) === 'array') {
        if (colors.length === 1) {
          colors = [colors[0], colors[0]];
        }
        colors = colors.slice(0);
        for (c = o = 0, ref = colors.length - 1; 0 <= ref ? o <= ref : o >= ref; c = 0 <= ref ? ++o : --o) {
          col = colors[c];
          if (type(col) === "string") {
            colors[c] = chroma(col);
          }
        }
        _pos.length = 0;
        for (c = w = 0, ref1 = colors.length - 1; 0 <= ref1 ? w <= ref1 : w >= ref1; c = 0 <= ref1 ? ++w : --w) {
          _pos.push(c / (colors.length - 1));
        }
      }
      resetCache();
      return _colors = colors;
    };
    getClass = function(value) {
      var i, n;
      if (_classes != null) {
        n = _classes.length - 1;
        i = 0;
        while (i < n && value >= _classes[i]) {
          i++;
        }
        return i - 1;
      }
      return 0;
    };
    tmap = function(t) {
      return t;
    };
    classifyValue = function(value) {
      var i, maxc, minc, n, val;
      val = value;
      if (_classes.length > 2) {
        n = _classes.length - 1;
        i = getClass(value);
        minc = _classes[0] + (_classes[1] - _classes[0]) * (0 + _spread * 0.5);
        maxc = _classes[n - 1] + (_classes[n] - _classes[n - 1]) * (1 - _spread * 0.5);
        val = _min + ((_classes[i] + (_classes[i + 1] - _classes[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
      }
      return val;
    };
    getColor = function(val, bypassMap) {
      var c, col, i, k, o, p, ref, t;
      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val) || val === null) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          c = getClass(val);
          t = c / (_classes.length - 2);
        } else if (_max !== _min) {
          t = (val - _min) / (_max - _min);
        } else {
          t = 1;
        }
      } else {
        t = val;
      }
      if (!bypassMap) {
        t = tmap(t);
      }
      if (_gamma !== 1) {
        t = pow(t, _gamma);
      }
      t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
      t = Math.min(1, Math.max(0, t));
      k = Math.floor(t * 10000);
      if (_useCache && _colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type(_colors) === 'array') {
          for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
            p = _pos[i];
            if (t <= p) {
              col = _colors[i];
              break;
            }
            if (t >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }
            if (t > p && t < _pos[i + 1]) {
              t = (t - p) / (_pos[i + 1] - p);
              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
              break;
            }
          }
        } else if (type(_colors) === 'function') {
          col = _colors(t);
        }
        if (_useCache) {
          _colorCache[k] = col;
        }
      }
      return col;
    };
    resetCache = function() {
      return _colorCache = {};
    };
    setColors(colors);
    f = function(v) {
      var c;
      c = chroma(getColor(v));
      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };
    f.classes = function(classes) {
      var d;
      if (classes != null) {
        if (type(classes) === 'array') {
          _classes = classes;
          _domain = [classes[0], classes[classes.length - 1]];
        } else {
          d = chroma.analyze(_domain);
          if (classes === 0) {
            _classes = [d.min, d.max];
          } else {
            _classes = chroma.limits(d, 'e', classes);
          }
        }
        return f;
      }
      return _classes;
    };
    f.domain = function(domain) {
      var c, d, k, len, o, ref, w;
      if (!arguments.length) {
        return _domain;
      }
      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      k = _colors.length;
      if (domain.length === k && _min !== _max) {
        for (o = 0, len = domain.length; o < len; o++) {
          d = domain[o];
          _pos.push((d - _min) / (_max - _min));
        }
      } else {
        for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
          _pos.push(c / (k - 1));
        }
      }
      _domain = [_min, _max];
      return f;
    };
    f.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f;
    };
    f.range = function(colors, _pos) {
      setColors(colors, _pos);
      return f;
    };
    f.out = function(_o) {
      _out = _o;
      return f;
    };
    f.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f;
    };
    f.correctLightness = function(v) {
      if (v == null) {
        v = true;
      }
      _correctLightness = v;
      resetCache();
      if (_correctLightness) {
        tmap = function(t) {
          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
          L0 = getColor(0, true).lab()[0];
          L1 = getColor(1, true).lab()[0];
          pol = L0 > L1;
          L_actual = getColor(t, true).lab()[0];
          L_ideal = L0 + (L1 - L0) * t;
          L_diff = L_actual - L_ideal;
          t0 = 0;
          t1 = 1;
          max_iter = 20;
          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t;
                t += (t1 - t) * 0.5;
              } else {
                t1 = t;
                t += (t0 - t) * 0.5;
              }
              L_actual = getColor(t, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t;
        };
      } else {
        tmap = function(t) {
          return t;
        };
      }
      return f;
    };
    f.padding = function(p) {
      if (p != null) {
        if (type(p) === 'number') {
          p = [p, p];
        }
        _padding = p;
        return f;
      } else {
        return _padding;
      }
    };
    f.colors = function(numColors, out) {
      var dd, dm, i, o, ref, result, results, samples, w;
      if (arguments.length < 2) {
        out = 'hex';
      }
      result = [];
      if (arguments.length === 0) {
        result = _colors.slice(0);
      } else if (numColors === 1) {
        result = [f(0.5)];
      } else if (numColors > 1) {
        dm = _domain[0];
        dd = _domain[1] - dm;
        result = (function() {
          results = [];
          for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
          return results;
        }).apply(this).map(function(i) {
          return f(dm + i / (numColors - 1) * dd);
        });
      } else {
        colors = [];
        samples = [];
        if (_classes && _classes.length > 2) {
          for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _domain;
        }
        result = samples.map(function(v) {
          return f(v);
        });
      }
      if (chroma[out]) {
        result = result.map(function(c) {
          return c[out]();
        });
      }
      return result;
    };
    f.cache = function(c) {
      if (c != null) {
        _useCache = c;
        return f;
      } else {
        return _useCache;
      }
    };
    f.gamma = function(g) {
      if (g != null) {
        _gamma = g;
        return f;
      } else {
        return _gamma;
      }
    };
    f.nodata = function(d) {
      if (d != null) {
        _nacol = chroma(d);
        return f;
      } else {
        return _nacol;
      }
    };
    return f;
  };

  if (chroma.scales == null) {
    chroma.scales = {};
  }

  chroma.scales.cool = function() {
    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
  };

  chroma.scales.hot = function() {
    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
  };

  chroma.analyze = function(data, key, filter) {
    var add, k, len, o, r, val, visit;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (filter == null) {
      filter = function() {
        return true;
      };
    }
    add = function(val) {
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    };
    visit = function(val, k) {
      if (filter(val, k)) {
        if ((key != null) && type(key) === 'function') {
          return add(key(val));
        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
          return add(val[key]);
        } else {
          return add(val);
        }
      }
    };
    if (type(data) === 'array') {
      for (o = 0, len = data.length; o < len; o++) {
        val = data[o];
        visit(val);
      }
    } else {
      for (k in data) {
        val = data[k];
        visit(val, k);
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.limits = function(data, mode, num) {
    var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, v, value, values, w;
    if (mode == null) {
      mode = 'equal';
    }
    if (num == null) {
      num = 7;
    }
    if (type(data) === 'array') {
      data = chroma.analyze(data);
    }
    min = data.min;
    max = data.max;
    sum = data.sum;
    values = data.values.sort(function(a, b) {
      return a - b;
    });
    if (num === 1) {
      return [min, max];
    }
    limits = [];
    if (mode.substr(0, 1) === 'c') {
      limits.push(min);
      limits.push(max);
    }
    if (mode.substr(0, 1) === 'e') {
      limits.push(min);
      for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
        limits.push(min + (i / num) * (max - min));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
      if (min <= 0) {
        throw 'Logarithmic scales are only possible for values > 0';
      }
      min_log = Math.LOG10E * log(min);
      max_log = Math.LOG10E * log(max);
      limits.push(min);
      for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
        limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
      limits.push(min);
      for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
        p = (values.length - 1) * i / num;
        pb = floor(p);
        if (pb === p) {
          limits.push(values[pb]);
        } else {
          pr = p - pb;
          limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
        }
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {

      /*
      implementation based on
      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
      simplified for 1-d input values
       */
      n = values.length;
      assignments = new Array(n);
      clusterSizes = new Array(num);
      repeat = true;
      nb_iters = 0;
      centroids = null;
      centroids = [];
      centroids.push(min);
      for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
        centroids.push(min + (i / num) * (max - min));
      }
      centroids.push(max);
      while (repeat) {
        for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
          clusterSizes[j] = 0;
        }
        for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
          value = values[i];
          mindist = Number.MAX_VALUE;
          for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
            dist = abs(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
        newCentroids = new Array(num);
        for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
          newCentroids[j] = null;
        }
        for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
          cluster = assignments[i];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i];
          } else {
            newCentroids[cluster] += values[i];
          }
        }
        for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
          if (newCentroids[j] !== centroids[i]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      kClusters = {};
      for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
        kClusters[j] = [];
      }
      for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
        cluster = assignments[i];
        kClusters[cluster].push(values[i]);
      }
      tmpKMeansBreaks = [];
      for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
        return a - b;
      });
      limits.push(tmpKMeansBreaks[0]);
      for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
        v = tmpKMeansBreaks[i];
        if (!isNaN(v) && limits.indexOf(v) === -1) {
          limits.push(v);
        }
      }
    }
    return limits;
  };

  hsi2rgb = function(h, s, i) {

    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
     */
    var args, b, g, r;
    args = unpack(arguments);
    h = args[0], s = args[1], i = args[2];
    if (isNaN(h)) {
      h = 0;
    }
    h /= 360;
    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      r = 1 - (g + b);
    }
    r = limit(i * r * 3);
    g = limit(i * g * 3);
    b = limit(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
  };

  rgb2hsi = function() {

    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
     */
    var b, g, h, i, min, r, ref, s;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    TWOPI = Math.PI * 2;
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    i = (r + g + b) / 3;
    s = 1 - min / i;
    if (s === 0) {
      h = 0;
    } else {
      h = ((r - g) + (r - b)) / 2;
      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
      h = Math.acos(h);
      if (b > g) {
        h = TWOPI - h;
      }
      h /= TWOPI;
    }
    return [h * 360, s, i];
  };

  chroma.hsi = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsi']), function(){});
  };

  _input.hsi = hsi2rgb;

  Color.prototype.hsi = function() {
    return rgb2hsi(this._rgb);
  };

  interpolate_hsx = function(col1, col2, f, m) {
    var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
    if (m === 'hsl') {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m === 'hsv') {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m === 'hcg') {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m === 'hsi') {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m === 'lch' || m === 'hcl') {
      m = 'hcl';
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    }
    if (m.substr(0, 1) === 'h') {
      hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
      hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
    }
    if (!isNaN(hue0) && !isNaN(hue1)) {
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh = hue1 + 360 - hue0;
      } else {
        dh = hue1 - hue0;
      }
      hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
      hue = hue0;
      if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
        sat = sat0;
      }
    } else if (!isNaN(hue1)) {
      hue = hue1;
      if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
        sat = sat1;
      }
    } else {
      hue = Number.NaN;
    }
    if (sat == null) {
      sat = sat0 + f * (sat1 - sat0);
    }
    lbv = lbv0 + f * (lbv1 - lbv0);
    return res = chroma[m](hue, sat, lbv);
  };

  _interpolators = _interpolators.concat((function() {
    var len, o, ref, results;
    ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch', 'hcg'];
    results = [];
    for (o = 0, len = ref.length; o < len; o++) {
      m = ref[o];
      results.push([m, interpolate_hsx]);
    }
    return results;
  })());

  interpolate_num = function(col1, col2, f, m) {
    var n1, n2;
    n1 = col1.num();
    n2 = col2.num();
    return chroma.num(n1 + (n2 - n1) * f, 'num');
  };

  _interpolators.push(['num', interpolate_num]);

  interpolate_lab = function(col1, col2, f, m) {
    var res, xyz0, xyz1;
    xyz0 = col1.lab();
    xyz1 = col2.lab();
    return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };

  _interpolators.push(['lab', interpolate_lab]);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

/***/ "./node_modules/d/auto-bind.js":
/*!*************************************!*\
  !*** ./node_modules/d/auto-bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue             = __webpack_require__(/*! type/value/is */ "./node_modules/type/value/is.js")
  , ensureValue         = __webpack_require__(/*! type/value/ensure */ "./node_modules/type/value/ensure.js")
  , ensurePlainFunction = __webpack_require__(/*! type/plain-function/ensure */ "./node_modules/type/plain-function/ensure.js")
  , copy                = __webpack_require__(/*! es5-ext/object/copy */ "./node_modules/es5-ext/object/copy.js")
  , normalizeOptions    = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , map                 = __webpack_require__(/*! es5-ext/object/map */ "./node_modules/es5-ext/object/map.js");

var bind = Function.prototype.bind
  , defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , define;

define = function (name, desc, options) {
	var value = ensureValue(desc) && ensurePlainFunction(desc.value), dgs;
	dgs = copy(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
		desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
		defineProperty(this, name, desc);
		return this[name];
	};
	return dgs;
};

module.exports = function (props/*, options*/) {
	var options = normalizeOptions(arguments[1]);
	if (isValue(options.resolveContext)) ensurePlainFunction(options.resolveContext);
	return map(props, function (desc, name) { return define(name, desc, options); });
};


/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue         = __webpack_require__(/*! type/value/is */ "./node_modules/type/value/is.js")
  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "./node_modules/type/plain-function/is.js")
  , assign          = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "./node_modules/es5-ext/array/#/clear.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/array/#/clear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/
// closure_goog_array_array.js.html#goog.array.clear



var value = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js");

module.exports = function () {
	value(this).length = 0;
	return this;
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/array/from/is-implemented.js")() ? Array.from : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/array/from/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && result !== arr && result[1] === "dwa");
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator
  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isFunction     = __webpack_require__(/*! ../../function/is-function */ "./node_modules/es5-ext/function/is-function.js")
  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , callable       = __webpack_require__(/*! ../../object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , validValue     = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , isValue        = __webpack_require__(/*! ../../object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , isString       = __webpack_require__(/*! ../../string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , isArray        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

// eslint-disable-next-line complexity, max-lines-per-function
module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) callable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array((length = arrayLike.length));
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInt(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString
  , id = objToString.call((function () { return arguments; })());

module.exports = function (value) { return objToString.call(value) === id; };


/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString
  , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);

module.exports = function (value) {
	return typeof value === "function" && isFunctionStringTag(objToString.call(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/math/sign/is-implemented.js")() ? Math.sign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/math/sign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return sign(10) === 1 && sign(-20) === -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || value === 0) return value;
	return value > 0 ? 1 : -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sign  = __webpack_require__(/*! ../math/sign */ "./node_modules/es5-ext/math/sign/index.js")
  , abs   = Math.abs
  , floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if (value === 0 || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./to-integer */ "./node_modules/es5-ext/number/to-integer.js")
  , max       = Math.max;

module.exports = function (value) { return max(0, toInteger(value)); };


/***/ }),

/***/ "./node_modules/es5-ext/object/_iterate.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/_iterate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order



var callable                = __webpack_require__(/*! ./valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , value                   = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , bind                    = Function.prototype.bind
  , call                    = Function.prototype.call
  , keys                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb/*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") method = list[method];
		return call.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js")
  , value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , max   = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/copy.js":
/*!*********************************************!*\
  !*** ./node_modules/es5-ext/object/copy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFrom  = __webpack_require__(/*! ../array/from */ "./node_modules/es5-ext/array/from/index.js")
  , assign = __webpack_require__(/*! ./assign */ "./node_modules/es5-ext/object/assign/index.js")
  , value  = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js");

module.exports = function (obj/*, propertyNames, options*/) {
	var copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		aFrom(propertyNames, function (propertyName) {
			if (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/create.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/object/create.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Workaround for http://code.google.com/p/v8/issues/detail?id=2804



var create = Object.create, shim;

if (!__webpack_require__(/*! ./set-prototype-of/is-implemented */ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()) {
	shim = __webpack_require__(/*! ./set-prototype-of/shim */ "./node_modules/es5-ext/object/set-prototype-of/shim.js");
}

module.exports = (function () {
	var nullObject, polyProps, desc;
	if (!shim) return create;
	if (shim.level !== 1) return create;

	nullObject = {};
	polyProps = {};
	desc = { configurable: false, enumerable: false, writable: true, value: undefined };
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === "__proto__") {
			polyProps[name] = {
				configurable: true,
				enumerable: false,
				writable: true,
				value: undefined
			};
			return;
		}
		polyProps[name] = desc;
	});
	Object.defineProperties(nullObject, polyProps);

	Object.defineProperty(shim, "nullPolyfill", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: nullObject
	});

	return function (prototype, props) {
		return create(prototype === null ? nullObject : prototype, props);
	};
})();


/***/ }),

/***/ "./node_modules/es5-ext/object/for-each.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/for-each.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./_iterate */ "./node_modules/es5-ext/object/_iterate.js")("forEach");


/***/ }),

/***/ "./node_modules/es5-ext/object/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var map = { function: true, object: true };

module.exports = function (value) { return (isValue(value) && map[typeof value]) || false; };


/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "./node_modules/es5-ext/object/map.js":
/*!********************************************!*\
  !*** ./node_modules/es5-ext/object/map.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callable = __webpack_require__(/*! ./valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , forEach  = __webpack_require__(/*! ./for-each */ "./node_modules/es5-ext/object/for-each.js")
  , call     = Function.prototype.call;

module.exports = function (obj, cb/*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	callable(cb);
	forEach(obj, function (value, key, targetObj, index) {
		result[key] = call.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")() ? Object.setPrototypeOf : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/set-prototype-of/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js":
/*!************************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/is-implemented.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};

module.exports = function (/* CustomCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
	if (typeof setPrototypeOf !== "function") return false;
	return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/shim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint no-proto: "off" */

// Big thanks to @WebReflection for sorting this out
// https://gist.github.com/WebReflection/5593554



var isObject         = __webpack_require__(/*! ../is-object */ "./node_modules/es5-ext/object/is-object.js")
  , value            = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , objIsPrototypeOf = Object.prototype.isPrototypeOf
  , defineProperty   = Object.defineProperty
  , nullDesc         = { configurable: true, enumerable: false, writable: true, value: undefined }
  , validate;

validate = function (obj, prototype) {
	value(obj);
	if (prototype === null || isObject(prototype)) return obj;
	throw new TypeError("Prototype must be null or an object");
};

module.exports = (function (status) {
	var fn, set;
	if (!status) return null;
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) delete self.nullPolyfill.__proto__;
			if (prototype === null) prototype = self.nullPolyfill;
			obj.__proto__ = prototype;
			if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
			return obj;
		};
	}
	return Object.defineProperty(fn, "level", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: status.level
	});
})(
	(function () {
		var tmpObj1 = Object.create(null)
		  , tmpObj2 = {}
		  , set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(tmpObj1, tmpObj2);
			} catch (ignore) {}
			if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };
		}

		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };

		tmpObj1 = {};
		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };

		return false;
	})()
);

__webpack_require__(/*! ../create */ "./node_modules/es5-ext/object/create.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/es5-ext/object/is-object.js");

module.exports = function (value) {
	if (!isObject(value)) throw new TypeError(value + " is not an Object");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/#/contains/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call("");

module.exports = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString.call(value) === id)) ||
		false
	);
};


/***/ }),

/***/ "./node_modules/es5-ext/string/random-uniq.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/string/random-uniq.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generated = Object.create(null), random = Math.random;

module.exports = function () {
	var str;
	do {
		str = random().toString(36).slice(2);
	} while (generated[str]);
	return str;
};


/***/ }),

/***/ "./node_modules/es6-iterator/array.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , contains       = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js")
  , d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , Symbol         = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js")
  , Iterator       = __webpack_require__(/*! ./ */ "./node_modules/es6-iterator/index.js");

var defineProperty = Object.defineProperty, ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
	Iterator.call(this, arr);
	if (!kind) kind = "value";
	else if (contains.call(kind, "key+value")) kind = "key+value";
	else if (contains.call(kind, "key")) kind = "key";
	else kind = "value";
	defineProperty(this, "__kind__", d("", kind));
};
if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete ArrayIterator.prototype.constructor;

ArrayIterator.prototype = Object.create(Iterator.prototype, {
	_resolve: d(function (i) {
		if (this.__kind__ === "value") return this.__list__[i];
		if (this.__kind__ === "key+value") return [i, this.__list__[i]];
		return i;
	})
});
defineProperty(ArrayIterator.prototype, Symbol.toStringTag, d("c", "Array Iterator"));


/***/ }),

/***/ "./node_modules/es6-iterator/for-of.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/for-of.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , callable    = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , get         = __webpack_require__(/*! ./get */ "./node_modules/es6-iterator/get.js");

var isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;

module.exports = function (iterable, cb /*, thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
	if (isArray(iterable) || isArguments(iterable)) mode = "array";
	else if (isString(iterable)) mode = "string";
	else iterable = get(iterable);

	callable(cb);
	doBreak = function () {
		broken = true;
	};
	if (mode === "array") {
		some.call(iterable, function (value) {
			call.call(cb, thisArg, value, doBreak);
			return broken;
		});
		return;
	}
	if (mode === "string") {
		length = iterable.length;
		for (i = 0; i < length; ++i) {
			char = iterable[i];
			if (i + 1 < length) {
				code = char.charCodeAt(0);
				if (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];
			}
			call.call(cb, thisArg, char, doBreak);
			if (broken) break;
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call.call(cb, thisArg, result.value, doBreak);
		if (broken) return;
		result = iterable.next();
	}
};


/***/ }),

/***/ "./node_modules/es6-iterator/get.js":
/*!******************************************!*\
  !*** ./node_modules/es6-iterator/get.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments    = __webpack_require__(/*! es5-ext/function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isString       = __webpack_require__(/*! es5-ext/string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , ArrayIterator  = __webpack_require__(/*! ./array */ "./node_modules/es6-iterator/array.js")
  , StringIterator = __webpack_require__(/*! ./string */ "./node_modules/es6-iterator/string.js")
  , iterable       = __webpack_require__(/*! ./valid-iterable */ "./node_modules/es6-iterator/valid-iterable.js")
  , iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
	if (isArguments(obj)) return new ArrayIterator(obj);
	if (isString(obj)) return new StringIterator(obj);
	return new ArrayIterator(obj);
};


/***/ }),

/***/ "./node_modules/es6-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clear    = __webpack_require__(/*! es5-ext/array/#/clear */ "./node_modules/es5-ext/array/#/clear.js")
  , assign   = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , value    = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , d        = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , autoBind = __webpack_require__(/*! d/auto-bind */ "./node_modules/d/auto-bind.js")
  , Symbol   = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js");

var defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;

module.exports = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) throw new TypeError("Constructor requires 'new'");
	defineProperties(this, {
		__list__: d("w", value(list)),
		__context__: d("w", context),
		__nextIndex__: d("w", 0)
	});
	if (!context) return;
	callable(context.on);
	context.on("_add", this._onAdd);
	context.on("_delete", this._onDelete);
	context.on("_clear", this._onClear);
};

// Internal %IteratorPrototype% doesn't expose its constructor
delete Iterator.prototype.constructor;

defineProperties(
	Iterator.prototype,
	assign(
		{
			_next: d(function () {
				var i;
				if (!this.__list__) return undefined;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
				return undefined;
			}),
			next: d(function () {
				return this._createResult(this._next());
			}),
			_createResult: d(function (i) {
				if (i === undefined) return { done: true, value: undefined };
				return { done: false, value: this._resolve(i) };
			}),
			_resolve: d(function (i) {
				return this.__list__[i];
			}),
			_unBind: d(function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off("_add", this._onAdd);
				this.__context__.off("_delete", this._onDelete);
				this.__context__.off("_clear", this._onClear);
				this.__context__ = null;
			}),
			toString: d(function () {
				return "[object " + (this[Symbol.toStringTag] || "Object") + "]";
			})
		},
		autoBind({
			_onAdd: d(function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					defineProperty(this, "__redo__", d("c", [index]));
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			}),
			_onDelete: d(function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, j) {
					if (redo > index) this.__redo__[j] = --redo;
				}, this);
			}),
			_onClear: d(function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			})
		})
	)
);

defineProperty(
	Iterator.prototype,
	Symbol.iterator,
	d(function () {
		return this;
	})
);


/***/ }),

/***/ "./node_modules/es6-iterator/is-iterable.js":
/*!**************************************************!*\
  !*** ./node_modules/es6-iterator/is-iterable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isValue     = __webpack_require__(/*! es5-ext/object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ "./node_modules/es5-ext/string/is-string.js");

var iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator
  , isArray        = Array.isArray;

module.exports = function (value) {
	if (!isValue(value)) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	if (isArguments(value)) return true;
	return typeof value[iteratorSymbol] === "function";
};


/***/ }),

/***/ "./node_modules/es6-iterator/string.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/string.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Thanks @mathiasbynens
// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols



var setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , Symbol         = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js")
  , Iterator       = __webpack_require__(/*! ./ */ "./node_modules/es6-iterator/index.js");

var defineProperty = Object.defineProperty, StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) throw new TypeError("Constructor requires 'new'");
	str = String(str);
	Iterator.call(this, str);
	defineProperty(this, "__length__", d("", str.length));
};
if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete StringIterator.prototype.constructor;

StringIterator.prototype = Object.create(Iterator.prototype, {
	_next: d(function () {
		if (!this.__list__) return undefined;
		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
		this._unBind();
		return undefined;
	}),
	_resolve: d(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) return char;
		code = char.charCodeAt(0);
		if (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];
		return char;
	})
});
defineProperty(StringIterator.prototype, Symbol.toStringTag, d("c", "String Iterator"));


/***/ }),

/***/ "./node_modules/es6-iterator/valid-iterable.js":
/*!*****************************************************!*\
  !*** ./node_modules/es6-iterator/valid-iterable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isIterable = __webpack_require__(/*! ./is-iterable */ "./node_modules/es6-iterator/is-iterable.js");

module.exports = function (value) {
	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
	return value;
};


/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es6-symbol/is-implemented.js")()
	? __webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js").Symbol
	: __webpack_require__(/*! ./polyfill */ "./node_modules/es6-symbol/polyfill.js");


/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global     = __webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js")
  , validTypes = { object: true, symbol: true };

module.exports = function () {
	var Symbol = global.Symbol;
	var symbol;
	if (typeof Symbol !== "function") return false;
	symbol = Symbol("test symbol");
	try { String(symbol); }
	catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	if (!value) return false;
	if (typeof value === "symbol") return true;
	if (!value.constructor) return false;
	if (value.constructor.name !== "Symbol") return false;
	return value[value.constructor.toStringTag] === "Symbol";
};


/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/generate-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/generate-name.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d = __webpack_require__(/*! d */ "./node_modules/d/index.js");

var create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;

var created = create(null);
module.exports = function (desc) {
	var postfix = 0, name, ie11BugWorkaround;
	while (created[desc + (postfix || "")]) ++postfix;
	desc += postfix || "";
	created[desc] = true;
	name = "@@" + desc;
	defineProperty(
		objPrototype,
		name,
		d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		})
	);
	return name;
};


/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js":
/*!***********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/standard-symbols.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d            = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , NativeSymbol = __webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js").Symbol;

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		// To ensure proper interoperability with other native functions (e.g. Array.from)
		// fallback to eventual native implementation of given symbol
		hasInstance: d(
			"", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill("hasInstance")
		),
		isConcatSpreadable: d(
			"",
			(NativeSymbol && NativeSymbol.isConcatSpreadable) ||
				SymbolPolyfill("isConcatSpreadable")
		),
		iterator: d("", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill("iterator")),
		match: d("", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill("match")),
		replace: d("", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill("replace")),
		search: d("", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill("search")),
		species: d("", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill("species")),
		split: d("", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill("split")),
		toPrimitive: d(
			"", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill("toPrimitive")
		),
		toStringTag: d(
			"", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill("toStringTag")
		),
		unscopables: d(
			"", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill("unscopables")
		)
	});
};


/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/symbol-registry.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol = __webpack_require__(/*! ../../../validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js");

var registry = Object.create(null);

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (registry[key]) return registry[key];
			return (registry[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (symbol) {
			var key;
			validateSymbol(symbol);
			for (key in registry) {
				if (registry[key] === symbol) return key;
			}
			return undefined;
		})
	});
};


/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d                    = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol       = __webpack_require__(/*! ./validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js")
  , NativeSymbol         = __webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js").Symbol
  , generateName         = __webpack_require__(/*! ./lib/private/generate-name */ "./node_modules/es6-symbol/lib/private/generate-name.js")
  , setupStandardSymbols = __webpack_require__(/*! ./lib/private/setup/standard-symbols */ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js")
  , setupSymbolRegistry  = __webpack_require__(/*! ./lib/private/setup/symbol-registry */ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js");

var create = Object.create
  , defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty;

var SymbolPolyfill, HiddenSymbol, isNativeSafe;

if (typeof NativeSymbol === "function") {
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
} else {
	NativeSymbol = null;
}

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = description === undefined ? "" : String(description);
	return defineProperties(symbol, {
		__description__: d("", description),
		__name__: d("", generateName(description))
	});
};

setupStandardSymbols(SymbolPolyfill);
setupSymbolRegistry(SymbolPolyfill);

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d("", function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return "Symbol (" + validateSymbol(this).__description__ + ")"; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(
	SymbolPolyfill.prototype,
	SymbolPolyfill.toPrimitive,
	d("", function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === "symbol") return symbol;
		return symbol.toString();
	})
);
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
);

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
);


/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "./node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),

/***/ "./node_modules/es6-weak-map/index.js":
/*!********************************************!*\
  !*** ./node_modules/es6-weak-map/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es6-weak-map/is-implemented.js")() ? WeakMap : __webpack_require__(/*! ./polyfill */ "./node_modules/es6-weak-map/polyfill.js");


/***/ }),

/***/ "./node_modules/es6-weak-map/is-implemented.js":
/*!*****************************************************!*\
  !*** ./node_modules/es6-weak-map/is-implemented.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var weakMap, obj;

	if (typeof WeakMap !== "function") return false;
	try {
		// WebKit doesn't support arguments and crashes
		weakMap = new WeakMap([[obj = {}, "one"], [{}, "two"], [{}, "three"]]);
	} catch (e) {
		return false;
	}
	if (String(weakMap) !== "[object WeakMap]") return false;
	if (typeof weakMap.set !== "function") return false;
	if (weakMap.set({}, 1) !== weakMap) return false;
	if (typeof weakMap.delete !== "function") return false;
	if (typeof weakMap.has !== "function") return false;
	if (weakMap.get(obj) !== "one") return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-weak-map/is-native-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es6-weak-map/is-native-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Exports true if environment provides native `WeakMap` implementation, whatever that is.



module.exports = (function () {
	if (typeof WeakMap !== "function") return false;
	return Object.prototype.toString.call(new WeakMap()) === "[object WeakMap]";
}());


/***/ }),

/***/ "./node_modules/es6-weak-map/polyfill.js":
/*!***********************************************!*\
  !*** ./node_modules/es6-weak-map/polyfill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue           = __webpack_require__(/*! es5-ext/object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , setPrototypeOf    = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , object            = __webpack_require__(/*! es5-ext/object/valid-object */ "./node_modules/es5-ext/object/valid-object.js")
  , ensureValue       = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , randomUniq        = __webpack_require__(/*! es5-ext/string/random-uniq */ "./node_modules/es5-ext/string/random-uniq.js")
  , d                 = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , getIterator       = __webpack_require__(/*! es6-iterator/get */ "./node_modules/es6-iterator/get.js")
  , forOf             = __webpack_require__(/*! es6-iterator/for-of */ "./node_modules/es6-iterator/for-of.js")
  , toStringTagSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").toStringTag
  , isNative          = __webpack_require__(/*! ./is-native-implemented */ "./node_modules/es6-weak-map/is-native-implemented.js")

  , isArray = Array.isArray, defineProperty = Object.defineProperty
  , objHasOwnProperty = Object.prototype.hasOwnProperty, getPrototypeOf = Object.getPrototypeOf
  , WeakMapPoly;

module.exports = WeakMapPoly = function (/* Iterable*/) {
	var iterable = arguments[0], self;

	if (!(this instanceof WeakMapPoly)) throw new TypeError("Constructor requires 'new'");
	self = isNative && setPrototypeOf && (WeakMap !== WeakMapPoly)
		? setPrototypeOf(new WeakMap(), getPrototypeOf(this)) : this;

	if (isValue(iterable)) {
		if (!isArray(iterable)) iterable = getIterator(iterable);
	}
	defineProperty(self, "__weakMapData__", d("c", "$weakMap$" + randomUniq()));
	if (!iterable) return self;
	forOf(iterable, function (val) {
		ensureValue(val);
		self.set(val[0], val[1]);
	});
	return self;
};

if (isNative) {
	if (setPrototypeOf) setPrototypeOf(WeakMapPoly, WeakMap);
	WeakMapPoly.prototype = Object.create(WeakMap.prototype, { constructor: d(WeakMapPoly) });
}

Object.defineProperties(WeakMapPoly.prototype, {
	delete: d(function (key) {
		if (objHasOwnProperty.call(object(key), this.__weakMapData__)) {
			delete key[this.__weakMapData__];
			return true;
		}
		return false;
	}),
	get: d(function (key) {
		if (!objHasOwnProperty.call(object(key), this.__weakMapData__)) return undefined;
		return key[this.__weakMapData__];
	}),
	has: d(function (key) {
		return objHasOwnProperty.call(object(key), this.__weakMapData__);
	}),
	set: d(function (key, value) {
		defineProperty(object(key), this.__weakMapData__, d("c", value));
		return this;
	}),
	toString: d(function () {
		return "[object WeakMap]";
	})
});
defineProperty(WeakMapPoly.prototype, toStringTagSymbol, d("c", "WeakMap"));


/***/ }),

/***/ "./node_modules/ext/global-this/implementation.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/implementation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ is resolved with global context, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "./node_modules/ext/global-this/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ext/global-this/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/ext/global-this/is-implemented.js")() ? globalThis : __webpack_require__(/*! ./implementation */ "./node_modules/ext/global-this/implementation.js");


/***/ }),

/***/ "./node_modules/ext/global-this/is-implemented.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/is-implemented.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	if (typeof globalThis !== "object") return false;
	if (!globalThis) return false;
	return globalThis.Array === Array;
};


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

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "./node_modules/type/prototype/is.js");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};


/***/ }),

/***/ "./node_modules/type/lib/resolve-exception.js":
/*!****************************************************!*\
  !*** ./node_modules/type/lib/resolve-exception.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue       = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js")
  , isObject      = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js")
  , stringCoerce  = __webpack_require__(/*! ../string/coerce */ "./node_modules/type/string/coerce.js")
  , toShortString = __webpack_require__(/*! ./to-short-string */ "./node_modules/type/lib/to-short-string.js");

var resolveMessage = function (message, value) {
	return message.replace("%v", toShortString(value));
};

module.exports = function (value, defaultMessage, inputOptions) {
	if (!isObject(inputOptions)) throw new TypeError(resolveMessage(defaultMessage, value));
	if (!isValue(value)) {
		if ("default" in inputOptions) return inputOptions["default"];
		if (inputOptions.isOptional) return null;
	}
	var errorMessage = stringCoerce(inputOptions.errorMessage);
	if (!isValue(errorMessage)) errorMessage = defaultMessage;
	throw new TypeError(resolveMessage(errorMessage, value));
};


/***/ }),

/***/ "./node_modules/type/lib/safe-to-string.js":
/*!*************************************************!*\
  !*** ./node_modules/type/lib/safe-to-string.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	try {
		return value.toString();
	} catch (error) {
		try { return String(value); }
		catch (error2) { return null; }
	}
};


/***/ }),

/***/ "./node_modules/type/lib/to-short-string.js":
/*!**************************************************!*\
  !*** ./node_modules/type/lib/to-short-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var safeToString = __webpack_require__(/*! ./safe-to-string */ "./node_modules/type/lib/safe-to-string.js");

var reNewLine = /[\n\r\u2028\u2029]/g;

module.exports = function (value) {
	var string = safeToString(value);
	if (string === null) return "<Non-coercible to string value>";
	// Trim if too long
	if (string.length > 100) string = string.slice(0, 99) + "…";
	// Replace eventual new lines
	string = string.replace(reNewLine, function (char) {
		switch (char) {
			case "\n":
				return "\\n";
			case "\r":
				return "\\r";
			case "\u2028":
				return "\\u2028";
			case "\u2029":
				return "\\u2029";
			/* istanbul ignore next */
			default:
				throw new Error("Unexpected character");
		}
	});
	return string;
};


/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};


/***/ }),

/***/ "./node_modules/type/plain-function/ensure.js":
/*!****************************************************!*\
  !*** ./node_modules/type/plain-function/ensure.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolveException = __webpack_require__(/*! ../lib/resolve-exception */ "./node_modules/type/lib/resolve-exception.js")
  , is               = __webpack_require__(/*! ./is */ "./node_modules/type/plain-function/is.js");

module.exports = function (value/*, options*/) {
	if (is(value)) return value;
	return resolveException(value, "%v is not a plain function", arguments[1]);
};


/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "./node_modules/type/function/is.js");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};


/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/type/string/coerce.js":
/*!********************************************!*\
  !*** ./node_modules/type/string/coerce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue  = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js")
  , isObject = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js");

var objectToString = Object.prototype.toString;

module.exports = function (value) {
	if (!isValue(value)) return null;
	if (isObject(value)) {
		// Reject Object.prototype.toString coercion
		var valueToString = value.toString;
		if (typeof valueToString !== "function") return null;
		if (valueToString === objectToString) return null;
		// Note: It can be object coming from other realm, still as there's no ES3 and CSP compliant
		// way to resolve its realm's Object.prototype.toString it's left as not addressed edge case
	}
	try {
		return "" + value; // Ensure implicit coercion
	} catch (error) {
		return null;
	}
};


/***/ }),

/***/ "./node_modules/type/value/ensure.js":
/*!*******************************************!*\
  !*** ./node_modules/type/value/ensure.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolveException = __webpack_require__(/*! ../lib/resolve-exception */ "./node_modules/type/lib/resolve-exception.js")
  , is               = __webpack_require__(/*! ./is */ "./node_modules/type/value/is.js");

module.exports = function (value/*, options*/) {
	if (is(value)) return value;
	return resolveException(value, "Cannot use %v", arguments[1]);
};


/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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
/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/model */ "./src/models/model.js");
/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_nextModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/nextModel */ "./src/models/nextModel.js");
/* harmony import */ var _models_nextModel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_nextModel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stubs_code_stub_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stubs/code.stub.html */ "./src/stubs/code.stub.html");
/* harmony import */ var _stubs_code_stub_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stubs_code_stub_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stubs_shade_stub_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stubs/shade.stub.html */ "./src/stubs/shade.stub.html");
/* harmony import */ var _stubs_shade_stub_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stubs_shade_stub_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var color_namer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! color-namer */ "./node_modules/color-namer/index.js");
/* harmony import */ var color_namer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color_namer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);










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
  "default": '#D8CF49',
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
document.querySelectorAll('.color-col').forEach(function (el, key) {
  el.innerHTML = mustache__WEBPACK_IMPORTED_MODULE_4___default.a.render(_stubs_shade_stub_html__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: key
  });
});
var output = _models_model__WEBPACK_IMPORTED_MODULE_2___default()('#D8CF49');
paint(output, 0);
var next = _models_nextModel__WEBPACK_IMPORTED_MODULE_3___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255));
var output1 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r1 * 255, next.g1 * 255, next.b1 * 255));
var output2 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r2 * 255, next.g2 * 255, next.b2 * 255));
var output3 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r3 * 255, next.g3 * 255, next.b3 * 255));
var output4 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r4 * 255, next.g4 * 255, next.b4 * 255));
var output5 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r5 * 255, next.g5 * 255, next.b5 * 255));
var output6 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r6 * 255, next.g6 * 255, next.b6 * 255));
var output7 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r7 * 255, next.g7 * 255, next.b7 * 255));
var output8 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r8 * 255, next.g8 * 255, next.b8 * 255));
var output9 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r9 * 255, next.g9 * 255, next.b9 * 255));
paint(output1, 1);
paint(output2, 2);
paint(output3, 3);
paint(output4, 4);
paint(output5, 5);
paint(output6, 6);
paint(output7, 7);
paint(output8, 8);
paint(output9, 9);
name([output, output1, output2, output3, output4, output5, output6, output7, output8, output9]);
code(output, document.querySelector('.name').value);
var brandColor = {
  fit: false
};
pickrButton.on('change', function (instance) {
  output = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(instance.toHEXA().toString());
  next = _models_nextModel__WEBPACK_IMPORTED_MODULE_3___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255));
  output1 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r1 * 255, next.g1 * 255, next.b1 * 255));
  output2 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r2 * 255, next.g2 * 255, next.b2 * 255));
  output3 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r3 * 255, next.g3 * 255, next.b3 * 255));
  output4 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r4 * 255, next.g4 * 255, next.b4 * 255));
  output5 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r5 * 255, next.g5 * 255, next.b5 * 255));
  output6 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r6 * 255, next.g6 * 255, next.b6 * 255));
  output7 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r7 * 255, next.g7 * 255, next.b7 * 255));
  output8 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r8 * 255, next.g8 * 255, next.b8 * 255));
  output9 = _models_model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r9 * 255, next.g9 * 255, next.b9 * 255));
  var distances = {};

  for (var i = 0; i < 10; i++) {
    var j = 0;
    i === 0 ? j = 0.5 : j = i;
    distances['1' + j] = chroma_js__WEBPACK_IMPORTED_MODULE_8___default.a.deltaE(rgbToHex(output['r' + j] * 255, output['g' + j] * 255, output['b' + j] * 255), instance.toHEXA().toString());
    distances['2' + j] = chroma_js__WEBPACK_IMPORTED_MODULE_8___default.a.deltaE(rgbToHex(output1['r' + j] * 255, output1['g' + j] * 255, output1['b' + j] * 255), instance.toHEXA().toString());
  }

  var sortable = [];

  for (var distance in distances) {
    sortable.push([distance, distances[distance]]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  var index = sortable[0][0].slice(1);
  var color = sortable[0][0].slice(0, 1);
  brandColor = {
    index: index,
    color: color
  };
  var replace = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(instance.toHEXA().toString()).rgb();

  if (sortable[0][1] < 9) {
    brandColor.fit = true;

    if (color === '1') {
      output['r' + index] = replace[0] / 255;
      output['g' + index] = replace[1] / 255;
      output['b' + index] = replace[2] / 255;
    }

    if (color === '2') {
      output1['r' + index] = replace[0] / 255;
      output1['g' + index] = replace[1] / 255;
      output1['b' + index] = replace[2] / 255;
    }
  }

  paint(output, 0);
  paint(output1, 1);
  paint(output2, 2);
  paint(output3, 3);
  paint(output4, 4);
  paint(output5, 5);
  paint(output6, 6);
  paint(output7, 7);
  paint(output8, 8);
  paint(output9, 9);
});
pickrButton.on('changestop', function () {
  var names = name([output, output1, output2, output3, output4, output5, output6, output7, output8, output9]);
  writeHex(output, 0);
  writeHex(output1, 1);
  writeHex(output2, 2);
  writeHex(output3, 3);
  writeHex(output4, 4);
  writeHex(output5, 5);
  writeHex(output6, 6);
  writeHex(output7, 7);
  writeHex(output8, 8);
  writeHex(output9, 9);
  code(output, document.querySelector('.name').value);

  if (brandColor.fit) {
    document.getElementById('brand').innerHTML = '.bg-' + names[brandColor.color - 1] + '-' + brandColor.index * 100;
    document.getElementById('fit').classList.add('hidden');
  } else {
    document.getElementById('brand').innerHTML = '.bg-brand';
    document.getElementById('fit').classList.remove('hidden');
  }
});
document.querySelector('.name').addEventListener('input', function (e) {
  var name = document.querySelector('.name').value;
  if (e.target.value !== '') name = e.target.value;
  code(output, name);
});

function code(output, name) {
  var view = function view(output, name) {
    return {
      'name': name,
      '50': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output['r0.5'] * 255, output['g0.5'] * 255, output['b0.5'] * 255),
      '100': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r1 * 255, output.g1 * 255, output.b1 * 255),
      '200': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r2 * 255, output.g2 * 255, output.b2 * 255),
      '300': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r3 * 255, output.g3 * 255, output.b3 * 255),
      '400': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r4 * 255, output.g4 * 255, output.b4 * 255),
      '500': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r5 * 255, output.g5 * 255, output.b5 * 255),
      '600': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r6 * 255, output.g6 * 255, output.b6 * 255),
      '700': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r7 * 255, output.g7 * 255, output.b7 * 255),
      '800': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r8 * 255, output.g8 * 255, output.b8 * 255),
      '900': chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r9 * 255, output.g9 * 255, output.b9 * 255)
    };
  };

  if (document.querySelector('.name').value === '') name = document.getElementById('name0').innerHTML;
  name = name.replace(/\s/g, '');
  document.querySelector('.code').innerHTML = mustache__WEBPACK_IMPORTED_MODULE_4___default.a.render(_stubs_code_stub_html__WEBPACK_IMPORTED_MODULE_5___default.a, view(output, name));
}

function paint(output) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  document.getElementById('output' + i + '0.5').style.backgroundColor = 'rgb(' + output['r0.5'] * 255 + ',' + output['g0.5'] * 255 + ',' + output['b0.5'] * 255 + ')';
  document.getElementById('output' + i + '1').style.backgroundColor = 'rgb(' + output.r1 * 255 + ',' + output.g1 * 255 + ',' + output.b1 * 255 + ')';
  document.getElementById('output' + i + '2').style.backgroundColor = 'rgb(' + output.r2 * 255 + ',' + output.g2 * 255 + ',' + output.b2 * 255 + ')';
  document.getElementById('output' + i + '3').style.backgroundColor = 'rgb(' + output.r3 * 255 + ',' + output.g3 * 255 + ',' + output.b3 * 255 + ')';
  document.getElementById('output' + i + '4').style.backgroundColor = 'rgb(' + output.r4 * 255 + ',' + output.g4 * 255 + ',' + output.b4 * 255 + ')';
  document.getElementById('output' + i + '5').style.backgroundColor = 'rgb(' + output.r5 * 255 + ',' + output.g5 * 255 + ',' + output.b5 * 255 + ')';
  document.getElementById('output' + i + '6').style.backgroundColor = 'rgb(' + output.r6 * 255 + ',' + output.g6 * 255 + ',' + output.b6 * 255 + ')';
  document.getElementById('output' + i + '7').style.backgroundColor = 'rgb(' + output.r7 * 255 + ',' + output.g7 * 255 + ',' + output.b7 * 255 + ')';
  document.getElementById('output' + i + '8').style.backgroundColor = 'rgb(' + output.r8 * 255 + ',' + output.g8 * 255 + ',' + output.b8 * 255 + ')';
  document.getElementById('output' + i + '9').style.backgroundColor = 'rgb(' + output.r9 * 255 + ',' + output.g9 * 255 + ',' + output.b9 * 255 + ')'; // document.getElementById('text' + i + '0.5').style.color = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
  // document.getElementById('text' + i + '1').style.color = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
  // document.getElementById('text' + i + '2').style.color = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
  // document.getElementById('text' + i + '3').style.color = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
  // document.getElementById('text' + i + '4').style.color = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
  // document.getElementById('text' + i + '5').style.color = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
  // document.getElementById('text' + i + '6').style.color = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
  // document.getElementById('text' + i + '7').style.color = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
  // document.getElementById('text' + i + '8').style.color = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
  // document.getElementById('text' + i + '9').style.color = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
}

function writeHex(output) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  document.getElementById('hex' + i + '0.5').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output['r0.5'] * 255, output['g0.5'] * 255, output['b0.5'] * 255);
  document.getElementById('hex' + i + '1').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r1 * 255, output.g1 * 255, output.b1 * 255);
  document.getElementById('hex' + i + '2').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r2 * 255, output.g2 * 255, output.b2 * 255);
  document.getElementById('hex' + i + '3').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r3 * 255, output.g3 * 255, output.b3 * 255);
  document.getElementById('hex' + i + '4').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r4 * 255, output.g4 * 255, output.b4 * 255);
  document.getElementById('hex' + i + '5').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r5 * 255, output.g5 * 255, output.b5 * 255);
  document.getElementById('hex' + i + '6').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r6 * 255, output.g6 * 255, output.b6 * 255);
  document.getElementById('hex' + i + '7').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r7 * 255, output.g7 * 255, output.b7 * 255);
  document.getElementById('hex' + i + '8').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r8 * 255, output.g8 * 255, output.b8 * 255);
  document.getElementById('hex' + i + '9').innerHTML = chroma_js__WEBPACK_IMPORTED_MODULE_8___default()(output.r9 * 255, output.g9 * 255, output.b9 * 255);
}

function name(outputs) {
  var names = [];
  outputs.forEach(function (output, i) {
    var name = color_namer__WEBPACK_IMPORTED_MODULE_7___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255), {
      pick: ['x11']
    }).x11[0].name;
    if (names.includes(name)) name = color_namer__WEBPACK_IMPORTED_MODULE_7___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255), {
      pick: ['x11']
    }).x11[1].name;
    names.push(name);
    document.getElementById('name' + i).innerHTML = names[i];
  });
  return names;
}

/***/ }),

/***/ "./src/models/model.js":
/*!*****************************!*\
  !*** ./src/models/model.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function model(input) {
  input = hexToRgb(input);
  return {
    'r0.5': 1 / (1 + 1 / Math.exp(1.1140536069869995 + 0.7449509501457214 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.9815424680709839 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.031132698059082 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.49755042791366577 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.828439474105835 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.3831459581851959 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g0.5': 1 / (1 + 1 / Math.exp(1.183545708656311 + 0.956328809261322 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.7309649586677551 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7622394561767578 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.7794589996337891 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.6631051898002625 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.7126436829566956 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b0.5': 1 / (1 + 1 / Math.exp(1.2447574138641357 + 0.7598280310630798 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.6792125701904297 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7007723450660706 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.9159786701202393 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.4532022774219513 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9985523223876953 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r1': 1 / (1 + 1 / Math.exp(1.089853286743164 + 0.5143858790397644 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.841343879699707 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.0682543516159058 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.41325873136520386 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.0387349128723145 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.12426169961690903 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g1': 1 / (1 + 1 / Math.exp(1.0439181327819824 + 0.7357439994812012 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.8336270451545715 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7926211953163147 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.6183294057846069 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.3501281142234802 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9159969091415405 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b1': 1 / (1 + 1 / Math.exp(1.0688536167144775 + 0.752219021320343 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.396038293838501 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.05139622837305069 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 1.3977594375610352 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.054872382432222366 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9872631430625916 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r2': 1 / (1 + 1 / Math.exp(0.7937076091766357 + 0.29099127650260925 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.0067623853683472 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.9423177242279053 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.06993284821510315 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.544643759727478 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.83702552318573 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g2': 1 / (1 + 1 / Math.exp(1.0970275402069092 + 0.6923697590827942 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.0796828344464302 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.4814494550228119 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.15850374102592468 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.058728110045194626 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.8487239480018616 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b2': 1 / (1 + 1 / Math.exp(0.6564344167709351 + 0.11160755902528763 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.4450506865978241 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.19433872401714325 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 2.112790822982788 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.5147234201431274 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9723668098449707 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r3': 1 / (1 + 1 / Math.exp(0.32063180208206177 + 0.005433264188468456 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.0324783325195312 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.0878543853759766 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.09277225285768509 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.7785472869873047 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 1.2530149221420288 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g3': 1 / (1 + 1 / Math.exp(0.7538976073265076 + 0.6352337002754211 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.07885561883449554 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.024698415771126747 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.6532332897186279 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.1319802850484848 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 1.1427053213119507 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b3': 1 / (1 + 1 / Math.exp(-0.017636630684137344 - 0.09258569031953812 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.6876927614212036 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.646864116191864 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.0891273021698 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.6090339422225952 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.5678266286849976 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r4': 1 / (1 + 1 / Math.exp(-0.0006336562219075859 - 0.5309959650039673 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.1226203441619873 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.3316447734832764 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.3525812029838562 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.9797881841659546 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.174813985824585 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g4': 1 / (1 + 1 / Math.exp(0.5350996851921082 + 0.4798542857170105 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.09602077305316925 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.052545446902513504 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.9980875253677368 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.23203811049461365 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 1.1104652881622314 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b4': 1 / (1 + 1 / Math.exp(-0.28306764364242554 - 0.4593780040740967 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.48548609018325806 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.8296477198600769 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.490048408508301 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.8638916015625 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.4032459855079651 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r5': 1 / (1 + 1 / Math.exp(-0.47626543045043945 - 0.6956549882888794 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.251510739326477 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.3579331636428833 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.2939260005950928 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 2.281784772872925 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.52661395072937 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g5': 1 / (1 + 1 / Math.exp(0.4980373680591583 + 0.41351598501205444 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.3521035611629486 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.178624227643013 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 1.1563712358474731 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.38387489318847656 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.7415151000022888 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b5': 1 / (1 + 1 / Math.exp(-0.6834791302680969 - 0.5601078271865845 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.3092515170574188 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 1.068272590637207 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.819490432739258 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.889352560043335 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.357143759727478 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r6': 1 / (1 + 1 / Math.exp(-0.36076775193214417 - 1.0048390626907349 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.0154188871383667 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.0740903615951538 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.22135888040065765 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.7783122062683105 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.395381212234497 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g6': 1 / (1 + 1 / Math.exp(0.08052278310060501 + 0.28902074694633484 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.4757483899593353 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.017364878207445145 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 1.2476580142974854 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.6106814742088318 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.850745677947998 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b6': 1 / (1 + 1 / Math.exp(-0.5722387433052063 - 0.9118046164512634 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.162095308303833 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 1.2545826435089111 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.863856554031372 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 1.3810769319534302 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.228440523147583 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r7': 1 / (1 + 1 / Math.exp(-0.35521697998046875 - 0.9642183184623718 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.5757023692131042 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7030032873153687 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.3230937123298645 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.4392999410629272 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.190124750137329 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g7': 1 / (1 + 1 / Math.exp(-0.038189806044101715 + 0.11425190418958664 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.3569299876689911 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.2939336597919464 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 1.2788423299789429 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.5386338829994202 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.699556827545166 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b7': 1 / (1 + 1 / Math.exp(-0.743007481098175 - 0.8432696461677551 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.12283580005168915 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 1.1242924928665161 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.4472105503082275 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 1.2022254467010498 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.05426440387964249 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r8': 1 / (1 + 1 / Math.exp(-0.4452064335346222 - 1.0320993661880493 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.45199719071388245 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.4916563332080841 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.3551488220691681 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.0244085788726807 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 1.9767245054244995 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g8': 1 / (1 + 1 / Math.exp(-0.2677565813064575 + 0.1859578639268875 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.4758763611316681 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.2537042498588562 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.9567639827728271 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.6467904448509216 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.25439390540122986 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b8': 1 / (1 + 1 / Math.exp(-0.6812801361083984 - 0.8814932703971863 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.01014744397252798 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.8553073406219482 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 2.531280040740967 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.8392447829246521 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.2603747844696045 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r9': 1 / (1 + 1 / Math.exp(-0.5591014623641968 - 0.8889714479446411 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.34187203645706177 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.28075671195983887 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.06667296588420868 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.7169772386550903 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 1.5406073331832886 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g9': 1 / (1 + 1 / Math.exp(-0.42714542150497437 - 0.06837131083011627 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.4159296452999115 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.28348061442375183 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.8182275891304016 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.64617520570755 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.15667767822742462 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b9': 1 / (1 + 1 / Math.exp(-0.750186026096344 - 0.7589073181152344 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.1323225498199463 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.7676293253898621 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 1.8757373094558716 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.7336497902870178 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.28146880865097046 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0)))))
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

/***/ "./src/models/nextModel.js":
/*!*********************************!*\
  !*** ./src/models/nextModel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function model(input) {
  input = hexToRgb(input);
  return {
    'r1': 1 / (1 + 1 / Math.exp(0.15233664214611053 - 0.1169203445315361 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.4491831958293915 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.17871199548244476 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.5017263889312744 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.3137688934803009 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.22910214960575104 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.45813462138175964 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.0025344176683574915 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.31694892048835754 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.19789576530456543 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.9329801797866821 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.5836333632469177 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) - 0.08370832353830338 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.3336738049983978 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.5847275257110596 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.8810482025146484 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.38177311420440674 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0681829452514648 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.15447074174880981 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.10129092633724213 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.334290087223053 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.5120207667350769 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.6094074249267578 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.2041594386100769 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.9081140160560608 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.15307599306106567 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.1402945518493652 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.11399005353450775 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.8605090975761414 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.45096704363822937 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g1': 1 / (1 + 1 / Math.exp(0.11453516781330109 + 0.7903721332550049 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6043357253074646 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.023053834214806557 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.18781648576259613 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.41664138436317444 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.10526958853006363 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.5089349746704102 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.3372497260570526 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.057680122554302216 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.7627107501029968 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.055534642189741135 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.1793821007013321 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.8132348656654358 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5935928821563721 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.021770941093564034 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.40496569871902466 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5290367007255554 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.6364086270332336 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.425934761762619 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6420176029205322 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.0007359981536865 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.9184040427207947 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.08539523184299469 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.5441260933876038 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.09581747651100159 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.7395710945129395 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.28637948632240295 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.13259267807006836 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.11285978555679321 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.20601758360862732 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b1': 1 / (1 + 1 / Math.exp(0.18872229754924774 + 0.5265727639198303 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 1.0824730396270752 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.20250818133354187 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.5010849237442017 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4922613501548767 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.042416758835315704 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.08665039390325546 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.049030691385269165 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.425604909658432 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.49604466557502747 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.38194140791893005 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.6316872239112854 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6666077971458435 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5665450692176819 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.9686123728752136 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.13053272664546967 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.8740785121917725 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.604282557964325 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.14672361314296722 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.9944897294044495 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.1594172716140747 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 1.01069176197052 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 1.0367640256881714 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.4743850529193878 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.5631533265113831 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.9071052670478821 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.035389333963394165 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.0451110303401947 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.2384028285741806 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.9237000942230225 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r2': 1 / (1 + 1 / Math.exp(0.15060962736606598 - 0.023643774911761284 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.1961997151374817 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.22891618311405182 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.38198122382164 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.25274205207824707 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.023620544001460075 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.2700212001800537 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.36813852190971375 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.3794248402118683 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.39608269929885864 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.9536370635032654 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.34956690669059753 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.1052965298295021 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.08347729593515396 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.2013102024793625 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.6048334240913391 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.42679256200790405 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.2210663557052612 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) + 0.10960868000984192 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.07798691838979721 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.4228358864784241 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7397986054420471 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.31628960371017456 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.0765116885304451 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.496286392211914 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.32087644934654236 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.1400648355484009 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.10336974263191223 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.6917933225631714 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.14194311201572418 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g2': 1 / (1 + 1 / Math.exp(-0.05703232064843178 + 0.46644559502601624 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.3108970820903778 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.0944671779870987 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.38905927538871765 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.7221540808677673 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.19592654705047607 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.46714070439338684 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.3553503155708313 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.17111192643642426 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.57581627368927 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.02792917564511299 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.3854665756225586 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6662809252738953 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.9041680097579956 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.2709085941314697 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.49894142150878906 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.556430459022522 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.8776109218597412 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.37895911931991577 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.4272528290748596 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.8196532130241394 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7326957583427429 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.09028341621160507 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.7431282997131348 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.18032659590244293 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.47942638397216797 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.1187385693192482 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.17351043224334717 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.0024406490847468376 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.09230409562587738 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b2': 1 / (1 + 1 / Math.exp(0.20484665036201477 + 0.7937576770782471 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.9375998973846436 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.2355770617723465 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.4109202027320862 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5782608389854431 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.2998976707458496 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.25491198897361755 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.10514111071825027 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.1590646654367447 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.7091008424758911 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.23151181638240814 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.465590238571167 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.8594288229942322 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.7163259983062744 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.755229651927948 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.19771531224250793 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 1.0719414949417114 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.4785304367542267 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.3704572319984436 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.8829540014266968 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.48997822403907776 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7813007831573486 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 1.0875639915466309 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.10478637367486954 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.2872263491153717 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.2015241384506226 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.28506314754486084 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.010735721327364445 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.670788586139679 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.9018207788467407 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r3': 1 / (1 + 1 / Math.exp(0.19329263269901276 - 0.09480707347393036 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.48430007696151733 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.17500725388526917 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.1702723503112793 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4496638774871826 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.15939630568027496 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.19014288485050201 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.3105659782886505 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.44042912125587463 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3789248466491699 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.8900160193443298 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.07485596835613251 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.39992332458496094 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.11155080795288086 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.82552570104599 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.4267711341381073 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6899314522743225 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.080127477645874 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.18410025537014008 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6783258318901062 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.4928041100502014 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7908933758735657 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.01686561480164528 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.5394076108932495 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.139298439025879 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.008777166716754436 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.6111150979995728 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.08797768503427505 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.27387940883636475 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.3428662419319153 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g3': 1 / (1 + 1 / Math.exp(-0.16063283383846283 + 0.5322238206863403 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.1750292032957077 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.02172885835170746 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.34415197372436523 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5736355185508728 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.009935087524354458 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.4354822337627411 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.038626231253147125 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.1307188868522644 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.47031065821647644 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.282489150762558 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.20085497200489044 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.4527810513973236 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.6533145308494568 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.4771200716495514 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.4666554629802704 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5370686054229736 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.9336608052253723 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.30590105056762695 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.5660461187362671 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.9913381934165955 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.633561372756958 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.23758496344089508 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.6070131659507751 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.4161688983440399 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.598457932472229 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.22903600335121155 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.23204079270362854 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.4745582044124603 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.003897214774042368 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b3': 1 / (1 + 1 / Math.exp(0.01928507350385189 + 1.122692346572876 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.7365698218345642 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.0494970977306366 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.1555495262145996 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.661438524723053 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.001632444909773767 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.7137389183044434 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.4290667176246643 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.012499612756073475 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3653062582015991 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.6131802201271057 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.1023862436413765 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.8503838777542114 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.7923785448074341 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.01159936748445034 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.2371225506067276 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.7415123581886292 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.18953222036361694 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.36129119992256165 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6979826092720032 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.1221593618392944 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7647457718849182 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.543437123298645 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.6722582578659058 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.37952831387519836 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.197525143623352 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.5220025181770325 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.05488765239715576 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.4456583857536316 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.6524990200996399 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r4': 1 / (1 + 1 / Math.exp(0.12720100581645966 + 0.12935835123062134 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.7918020486831665 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.48446136713027954 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.029282717034220695 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.31257688999176025 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.06695467978715897 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.015034318901598454 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.08277234435081482 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.38428860902786255 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.4006001055240631 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.7672223448753357 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.3749905228614807 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6090664863586426 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) + 0.03545508161187172 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.8574482202529907 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.22104839980602264 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.8538182377815247 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0200424194335938 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.24648596346378326 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7869859337806702 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.2641597390174866 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8358282446861267 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.4661124646663666 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.7228312492370605 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.888810396194458 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.30862703919410706 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.5618684887886047 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.10977890342473984 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.14926603436470032 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.6881946325302124 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g4': 1 / (1 + 1 / Math.exp(-0.00528890872374177 + 0.5230435132980347 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.13016316294670105 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.2221681922674179 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.5077834725379944 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4169706702232361 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.019137011840939522 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.3950919210910797 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.03976059332489967 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.2533341348171234 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3901951313018799 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.37679198384284973 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.015298241749405861 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.4366024434566498 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5175963640213013 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.20635175704956055 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5845086574554443 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5196937918663025 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.8668348789215088 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.4617602527141571 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.3429054021835327 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.9248515963554382 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7119202613830566 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.3190305233001709 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.37616097927093506 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.5034502744674683 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.5512700080871582 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.5516822338104248 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.0023715656716376543 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.4461960792541504 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.16668826341629028 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b4': 1 / (1 + 1 / Math.exp(0.06696872413158417 + 0.7902237176895142 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.17919325828552246 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.0779193565249443 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.3728085458278656 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4214114248752594 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.046966392546892166 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.6910547614097595 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.4512921869754791 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.269338458776474 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3865360915660858 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.3640911877155304 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.08126149326562881 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.9097440838813782 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 1.1135039329528809 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.6120198965072632 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.13652187585830688 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6810116171836853 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.3396504819393158 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5548034906387329 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7363677024841309 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.5334645509719849 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.5745432376861572 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.025707433000206947 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.1261006593704224 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.5391490459442139 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.7383402585983276 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.6120001673698425 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.12103799730539322 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.2795040011405945 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.3043309152126312 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r5': 1 / (1 + 1 / Math.exp(0.2773326337337494 + 0.393337219953537 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6837741732597351 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.2601343095302582 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.13613833487033844 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.30748581886291504 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.06810545176267624 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.12095867097377777 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.20669861137866974 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.4843357801437378 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5606082081794739 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.5809441208839417 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.3604958951473236 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.4975733160972595 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.47919902205467224 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.5245380401611328 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5070245265960693 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6803706884384155 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.861768364906311 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.2384301722049713 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.8051836490631104 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.11368952691555023 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8511439561843872 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.7182642221450806 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.5255714654922485 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.9131110906600952 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.5671663880348206 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.5327064990997314 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.050560250878334045 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.04667200148105621 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.40255847573280334 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g5': 1 / (1 + 1 / Math.exp(0.0021127245854586363 + 0.3551577925682068 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.2280210256576538 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.022517221048474312 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.1911928504705429 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5809508562088013 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.002886831760406494 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.15797477960586548 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.2071053683757782 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.43505731225013733 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3271404802799225 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.509705662727356 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.24091914296150208 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5402241945266724 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5159213542938232 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.0240201186388731 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.4966159760951996 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.3880337178707123 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0607621669769287 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.2788654863834381 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.47606196999549866 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.35522642731666565 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7838059663772583 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.47339731454849243 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.34229788184165955 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.6689269542694092 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.3210650384426117 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.6744464635848999 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.2193322330713272 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.45094260573387146 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.08507237583398819 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b5': 1 / (1 + 1 / Math.exp(-0.18675421178340912 + 1.086178183555603 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.23666560649871826 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.4670758843421936 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.7165845632553101 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4375090003013611 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.1266578882932663 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.8446032404899597 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.48016220331192017 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.20027118921279907 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.4172985553741455 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.46157267689704895 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.29680135846138 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5437321662902832 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 1.130418300628662 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 1.0548102855682373 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.3903662860393524 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.4354507327079773 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.34346485137939453 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.4546108543872833 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.31439581513404846 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.4493772983551025 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.4566980004310608 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.41432440280914307 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.3127808570861816 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.4688068926334381 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.8963919878005981 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.15517939627170563 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.07995801419019699 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.1908034235239029 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.43878304958343506 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r6': 1 / (1 + 1 / Math.exp(0.05809471756219864 + 0.5779777765274048 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.9894905686378479 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.10012704133987427 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.05747558921575546 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.43663138151168823 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.1228916123509407 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.2172090858221054 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.055623702704906464 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.08873080462217331 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.6078234910964966 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.04086236283183098 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.22495348751544952 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.7538767457008362 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.8433060050010681 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.44193869829177856 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.03450746089220047 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.858290433883667 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.5008716583251953 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5664055943489075 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 1.1253905296325684 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.6968110799789429 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8551167845726013 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.855776846408844 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.007322461809962988 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.09159169346094131 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.7844648957252502 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.45866310596466064 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.1700657457113266 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.4222065210342407 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.8697222471237183 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g6': 1 / (1 + 1 / Math.exp(-0.12111221998929977 + 0.2556942105293274 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.14860355854034424 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.13710631430149078 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.34540095925331116 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5550370812416077 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.091536745429039 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.37693747878074646 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.009209554642438889 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.14265024662017822 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5319991707801819 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.8513418436050415 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.33751559257507324 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.2394927442073822 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5729225873947144 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.22570830583572388 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.6950340270996094 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6979580521583557 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.8800270557403564 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.10246521979570389 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.2897655665874481 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.0437118262052536 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7687880992889404 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.2511617839336395 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.003861033357679844 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.9815462827682495 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.3417494297027588 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.7633334994316101 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.001997476676478982 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.5103482007980347 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.11432349681854248 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b6': 1 / (1 + 1 / Math.exp(-0.08130060136318207 + 0.5560657382011414 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.2948014736175537 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.06926881521940231 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.682382345199585 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.6137957572937012 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.06777354329824448 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.683485746383667 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.4037429988384247 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.12883734703063965 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.43140166997909546 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.10002943128347397 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.3714165687561035 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5448644757270813 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.7524182796478271 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.9705033898353577 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5428095459938049 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.23986586928367615 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.6671522259712219 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.2524658739566803 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) - 0.030328594148159027 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.1759357452392578 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.41061931848526 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.6893517971038818 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.0004136562347412 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.22817236185073853 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.3614491820335388 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.24857816100120544 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.11643120646476746 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.5255478620529175 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.5406607985496521 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r7': 1 / (1 + 1 / Math.exp(-0.14749807119369507 + 1.0458879470825195 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6627119779586792 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.11192890256643295 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.07595520466566086 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.37470749020576477 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.279512882232666 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.6615098118782043 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.5952123403549194 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.23096482455730438 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.6174098253250122 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.6586401462554932 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.4835435450077057 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.9950854778289795 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.8019512891769409 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.21334607899188995 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.17252755165100098 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.9072956442832947 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.3384397029876709 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.32992324233055115 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.8432088494300842 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.421821117401123 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7889195680618286 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.7262765765190125 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.8610286116600037 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.5073229670524597 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.1441843509674072 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.7523661255836487 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.025473209097981453 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.6902778148651123 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.4336242377758026 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g7': 1 / (1 + 1 / Math.exp(0.11322584748268127 + 0.23332388699054718 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.49275559186935425 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.1330404430627823 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.3034173250198364 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.525123655796051 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.08971996605396271 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.1861971765756607 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.04066174104809761 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.41606372594833374 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.7229124307632446 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.63956218957901 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.25126969814300537 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.2676466107368469 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.33976563811302185 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.3500713109970093 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.6662037968635559 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5556401014328003 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.033082365989685 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.14087234437465668 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.43273094296455383 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.12151526659727097 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.756697416305542 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.004235186614096165 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.1640956848859787 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.0483195781707764 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.17603270709514618 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.7860159277915955 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.026653172448277473 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.2695964276790619 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.2227020412683487 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b7': 1 / (1 + 1 / Math.exp(0.04425306245684624 + 0.21069137752056122 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.43755728006362915 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.10032586753368378 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.5590146780014038 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5760784149169922 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.3145678639411926 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.42551496624946594 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.1480010598897934 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.10118678957223892 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5209401249885559 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.699478030204773 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.6521158814430237 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.2858314514160156 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.4437330365180969 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.563503623008728 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.7008527517318726 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.18460586667060852 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.1496264934539795 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.10188989341259003 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) - 0.19105221331119537 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.398529052734375 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.31444835662841797 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.9215012788772583 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.3816695511341095 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.7185298800468445 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.28550514578819275 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.7087617516517639 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.1672280728816986 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.8277100920677185 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.6296523213386536 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r8': 1 / (1 + 1 / Math.exp(0.032365791499614716 + 1.3279294967651367 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.46507981419563293 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.377311646938324 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.07260952144861221 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.6474697589874268 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.045030731707811356 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.7372051477432251 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.46967482566833496 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.4196130335330963 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5419908761978149 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.9403382539749146 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.08837993443012238 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 1.0754591226577759 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 1.313456654548645 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.4129495918750763 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.10595759749412537 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.7084724307060242 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.12169092893600464 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5724701881408691 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6884795427322388 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.8840643167495728 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.3597685992717743 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.15084342658519745 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.2807642221450806 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.8108550906181335 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.2239583730697632 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.8566447496414185 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.06086871027946472 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.6462438702583313 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.3864426910877228 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g8': 1 / (1 + 1 / Math.exp(-0.15331526100635529 + 0.22017315030097961 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6238275766372681 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.4375566840171814 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.10964236408472061 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5830799341201782 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.09508692473173141 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.058934662491083145 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.07024215161800385 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.25205281376838684 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.37385088205337524 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.6668152213096619 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.0956633985042572 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.3418589234352112 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.6447631120681763 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.3071378469467163 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.37913915514945984 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.8644523620605469 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.9406282305717468 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.3501057028770447 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7362423539161682 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.13103918731212616 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.761765718460083 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.3998728096485138 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.03315631300210953 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.8950504064559937 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.37541669607162476 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.3540765643119812 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.2565653622150421 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.011917997151613235 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.18135443329811096 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b8': 1 / (1 + 1 / Math.exp(-0.04332856461405754 - 0.15903422236442566 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.23995012044906616 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.34210166335105896 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.3251979649066925 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.532985508441925 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.06848470866680145 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.03684423863887787 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.15467779338359833 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.40747782588005066 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.2348499596118927 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 1.2276197671890259 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.5595690608024597 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.05698493495583534 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.11670094728469849 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.25355198979377747 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.8103752136230469 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.22530055046081543 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.2114793062210083 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.23479588329792023 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.10883840918540955 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.40909117460250854 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.4085085690021515 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.4664509892463684 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.14056578278541565 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.5792124271392822 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.30230170488357544 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.0782445669174194 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.10818450152873993 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.8352781534194946 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.37054547667503357 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r9': 1 / (1 + 1 / Math.exp(-0.26485633850097656 + 0.8163912296295166 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.3641555607318878 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.47180724143981934 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.6027824282646179 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.7135986685752869 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.177309051156044 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.9454987049102783 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.21240586042404175 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.0416766032576561 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.36699074506759644 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.3046293258666992 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.18928676843643188 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5449449419975281 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.9728046655654907 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 1.0093538761138916 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5047990679740906 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.2902992069721222 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.43752411007881165 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.44387418031692505 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.2103387862443924 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.6484708786010742 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.26836246252059937 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.5249594449996948 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.3054697513580322 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.16583481431007385 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.6385573744773865 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.16437609493732452 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.11097279191017151 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.09150629490613937 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.41443464159965515 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g9': 1 / (1 + 1 / Math.exp(-0.2016616314649582 + 0.6648762822151184 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.7406719326972961 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.25139862298965454 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.04982524365186691 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.6405314803123474 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.13772691786289215 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.15557196736335754 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.257893830537796 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.39510175585746765 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3850240707397461 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.22760212421417236 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.2013881355524063 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6072750687599182 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5916410088539124 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.4982772767543793 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.48151320219039917 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6266374588012695 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.7921183705329895 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5303989052772522 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7600483894348145 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.5046752095222473 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8750722408294678 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.48906993865966797 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.12443544715642929 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.510582447052002 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.6097193956375122 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.006947431713342667 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.012443456798791885 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.016071315854787827 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.36500176787376404 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b9': 1 / (1 + 1 / Math.exp(0.10151568800210953 - 0.20038314163684845 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.3049294948577881 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.35661256313323975 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.35554203391075134 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.46270182728767395 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.05508747324347496 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.17480649054050446 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.22751012444496155 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.4112047851085663 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.19270849227905273 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 1.2176032066345215 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.41951149702072144 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.055190395563840866 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) + 0.023167628794908524 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.47903409600257874 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.7139248251914978 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.598707914352417 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0073984861373901 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) + 0.05983440950512886 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.4355675280094147 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.4928092658519745 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.6116960048675537 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.1205579861998558 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.6369423866271973 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.593873143196106 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.27142980694770813 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.0051642656326294 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.22518141567707062 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.6825007796287537 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.08360646665096283 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0)))))
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

/***/ "./src/stubs/code.stub.html":
/*!**********************************!*\
  !*** ./src/stubs/code.stub.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"text-gray-500\">// tailwind.config.js</span><br>\nmodule.exports = {<br>\n&nbsp;&nbsp;theme: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;extend: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name}}: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'50': &nbsp;'{{50}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'100': '{{100}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'200': '{{200}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'300': '{{300}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'400': '{{400}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'500': '{{500}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'600': '{{600}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'700': '{{700}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'800': '{{800}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'900': '{{900}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;}<br>\n}";

/***/ }),

/***/ "./src/stubs/shade.stub.html":
/*!***********************************!*\
  !*** ./src/stubs/shade.stub.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"capitalize font-semibold\" id=\"name{{color}}\"></h2>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}0.5\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}0.5\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none w-20\">\n        <div class=\"font-semibold\">50</div>\n        <div id=\"hex{{color}}0.5\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}1\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}1\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">100</div>\n        <div id=\"hex{{color}}1\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}2\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}2\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">200</div>\n        <div id=\"hex{{color}}2\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}3\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}3\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">300</div>\n        <div id=\"hex{{color}}3\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}4\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}4\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">400</div>\n        <div id=\"hex{{color}}4\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}5\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}5\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">500</div>\n        <div id=\"hex{{color}}5\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}6\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}6\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">600</div>\n        <div id=\"hex{{color}}6\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}7\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}7\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">700</div>\n        <div id=\"hex{{color}}7\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}8\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}8\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">800</div>\n        <div id=\"hex{{color}}8\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>\n<div class=\"flex my-4 items-center\">\n    <div id=\"text{{color}}9\" class=\"text-lg mx-4 mr-2 hidden\">Aa</div>\n    <div id=\"output{{color}}9\" class=\"w-12 h-12 rounded-lg shadow-inner\"></div>\n    <div class=\"ml-2 text-gray-800 leading-none\">\n        <div class=\"font-semibold\">900</div>\n        <div id=\"hex{{color}}9\" class=\"mt-1 opacity-75 uppercase\"></div>\n    </div>\n</div>";

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