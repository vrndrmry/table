parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ciBQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return"<p>".concat(e,"</p>")},t=exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=e(require("./Row.js"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)})}}function i(){i=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new q(n||[]);return a(i,"_invoke",{value:O(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",y="suspendedYield",d="executing",m="completed",w={};function b(){}function g(){}function x(){}var L={};f(L,c,function(){return this});var k=Object.getPrototypeOf,E=k&&k(k(G([])));E&&E!==n&&o.call(E,c)&&(L=E);var S=x.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function _(t,e){function n(i,a,u,c){var l=p(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&o.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,u,c)},function(t){n("throw",t,u,c)}):e.resolve(f).then(function(t){s.value=t,u(s)},function(t){return n("throw",t,u,c)})}c(l.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e(function(e,o){n(t,r,e,o)})}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=v;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===w)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===w)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,w;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,w):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return g.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:g,configurable:!0}),g.displayName=f(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(_.prototype),f(_.prototype,l,function(){return this}),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(S),f(S,s,"Generator"),f(S,c,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,w):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),w}},e}function a(t){var e,r,n,o=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&null!=(e=t[r]))return e.call(t);if(n&&null!=(e=t[n]))return new u(e.call(t));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function u(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then(function(t){return{value:t,done:e}})}return(u=function(t){this.s=t,this.n=t.next}).prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var r=this.s.return;return void 0===r?Promise.resolve({value:t,done:!0}):e(r.apply(this.s,arguments))},throw:function(t){var r=this.s.return;return void 0===r?Promise.reject(t):e(r.apply(this.s,arguments))}},new u(t)}function c(t){return new f(t,0)}function l(t){return function(){return new s(t.apply(this,arguments))}}function s(t){var e,r;function n(e,r){try{var i=t[e](r),a=i.value,u=a instanceof f;Promise.resolve(u?a.v:a).then(function(r){if(u){var c="return"===e?"return":"next";if(!a.k||r.done)return n(c,r);r=t[c](r).value}o(i.done?"return":"normal",r)},function(t){n("throw",t)})}catch(t){o("throw",t)}}function o(t,o){switch(t){case"return":e.resolve({value:o,done:!0});break;case"throw":e.reject(o);break;default:e.resolve({value:o,done:!1})}(e=e.next)?n(e.key,e.arg):r=null}this._invoke=function(t,o){return new Promise(function(i,a){var u={key:t,arg:o,resolve:i,reject:a,next:null};r?r=r.next=u:(e=r=u,n(t,o))})},"function"!=typeof t.return&&(this.return=void 0)}function f(t,e){this.v=t,this.k=e}s.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},s.prototype.next=function(t){return this._invoke("next",t)},s.prototype.throw=function(t){return this._invoke("throw",t)},s.prototype.return=function(t){return this._invoke("return",t)};var h,p,v=document.querySelector('input[name="multiplicand"]'),y=document.querySelector('input[name="multiplier"]'),d=document.querySelector('input[name="playbackDelay"]'),m=document.querySelector(".iterable"),w=document.querySelector(".step"),b=document.querySelector(".entireTable"),g=document.querySelector(".btn"),x=document.querySelector(".output"),L=document.querySelector(".tableContent"),k=document.querySelector(".heading"),E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise(function(e){setTimeout(function(){return e()},t)})},S=function(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=l(i().mark(function r(){var n;return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n=1;case 1:if(!(n<=e)){r.next=9;break}return r.next=4,c(E(Number(d.value)));case 4:return r.next=6,"".concat(t," X ").concat(n," = ").concat(t*n);case 6:n++,r.next=1;break;case 9:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}()};m.addEventListener("click",function(t){t.preventDefault(),g.style.visibility="visible",x.style.visibility="visible",k.innerText="Table for ".concat(v.value),0!=d.value&&(w.style.display="none"),h=S(Number(v.value),Number(y.value),Number(d.value)),p=h()}),w.addEventListener("click",function(){var e=o(i().mark(function e(r){var n,o,a;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,p.next();case 3:n=e.sent,o=n.value,n.done||(a=(0,t.default)(o),L.innerHTML+=a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),b.addEventListener("click",function(){var e=o(i().mark(function e(r){var n,o,u,c,l,s;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),n=!1,o=!1,e.prev=3,c=a(p);case 5:return e.next=7,c.next();case 7:if(!(n=!(l=e.sent).done)){e.next=13;break}s=l.value,L.innerHTML+=(0,t.default)(s);case 10:n=!1,e.next=5;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),o=!0,u=e.t0;case 19:if(e.prev=19,e.prev=20,!n||null==c.return){e.next=24;break}return e.next=24,c.return();case 24:if(e.prev=24,!o){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(19);case 29:case"end":return e.stop()}},e,null,[[3,15,19,29],[20,,24,28]])}));return function(t){return e.apply(this,arguments)}}());
},{"./Row.js":"ciBQ"}]},{},["Focm"], null)
//# sourceMappingURL=/table.6a0836e6.js.map