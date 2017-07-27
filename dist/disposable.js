!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.disposable=n():t.disposable=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=44)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(9),o=e(32),i=e(17),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(61),o=e(18);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(1),i=e(31),u=e(7),f=function(t,n,e){var c,s,a,l=t&f.F,p=t&f.G,d=t&f.S,y=t&f.P,v=t&f.B,h=t&f.W,b=p?o:o[n]||(o[n]={}),_=b.prototype,x=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(c in e)(s=!l&&x&&void 0!==x[c])&&c in b||(a=s?x[c]:e[c],b[c]=p&&"function"!=typeof x[c]?e[c]:v&&s?i(a,r):h&&x[c]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):y&&"function"==typeof a?i(Function.call,a):a,y&&((b.virtual||(b.virtual={}))[c]=a,t&f.R&&_&&!_[c]&&u(_,c,a)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){var r=e(2),o=e(12);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(20)("wks"),o=e(13),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(39),o=e(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return t&&"function"==typeof t.dispose}Object.defineProperty(n,"__esModule",{value:!0}),n.isDisposable=n.default=void 0;var i=e(16),u=r(i),f=e(30),c=r(f),s=function(){function t(n){(0,u.default)(this,t),this.disposed=!1,this.disposalAction=n.bind(this)}return(0,c.default)(t,null,[{key:"isDisposable",value:function(t){return o(t)}}]),(0,c.default)(t,[{key:"dispose",value:function(){this.disposed||(this.disposed=!0,this.disposalAction&&this.disposalAction(),this.disposalAction=null)}}]),t}();n.default=s,n.isDisposable=o},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(20)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=!0},function(t,n){t.exports={}},function(t,n,e){var r=e(9),o=e(60),i=e(25),u=e(19)("IE_PROTO"),f=function(){},c=function(){var t,n=e(33)("iframe"),r=i.length;for(n.style.display="none",e(65).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(2).f,o=e(4),i=e(8)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){n.f=e(8)},function(t,n,e){var r=e(0),o=e(1),i=e(22),u=e(27),f=e(2).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";n.__esModule=!0;var r=e(45),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){var r=e(48);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){t.exports=!e(3)&&!e(11)(function(){return 7!=Object.defineProperty(e(33)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(10),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(18);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4),o=e(34),i=e(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(55),i=r(o),u=e(70),f=r(u),c="function"==typeof f.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};n.default="function"==typeof f.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,n,e){"use strict";var r=e(22),o=e(6),i=e(38),u=e(7),f=e(4),c=e(23),s=e(59),a=e(26),l=e(35),p=e(8)("iterator"),d=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,e,v,h,b,_){s(e,n,v);var x,m,O,g=function(t){if(!d&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",j="values"==h,S=!1,P=t.prototype,E=P[p]||P["@@iterator"]||h&&P[h],M=E||g(h),k=h?j?g("entries"):M:void 0,A="Array"==n?P.entries||E:E;if(A&&(O=l(A.call(new t)))!==Object.prototype&&(a(O,w,!0),r||f(O,p)||u(O,p,y)),j&&E&&"values"!==E.name&&(S=!0,M=function(){return E.call(this)}),r&&!_||!d&&!S&&P[p]||u(P,p,M),c[n]=M,c[w]=y,h)if(x={values:j?M:g("values"),keys:b?M:g("keys"),entries:k},_)for(m in x)m in P||i(P,m,x[m]);else o(o.P+o.F*(d||S),n,x);return x}},function(t,n,e){t.exports=e(7)},function(t,n,e){var r=e(4),o=e(5),i=e(62)(!1),u=e(19)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,s=[];for(e in f)e!=u&&r(f,e)&&s.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(s,e)||s.push(e));return s}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(39),o=e(25).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(29),o=e(12),i=e(5),u=e(17),f=e(4),c=e(32),s=Object.getOwnPropertyDescriptor;n.f=e(3)?s:function(t,n){if(t=i(t),n=u(n,!0),c)try{return s(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){return new(Function.prototype.bind.apply(a.default,[null].concat(Array.prototype.slice.call(arguments))))}function i(){return new(Function.prototype.bind.apply(c.default,[null].concat(Array.prototype.slice.call(arguments))))}function u(){return new(Function.prototype.bind.apply(p.default,[null].concat(Array.prototype.slice.call(arguments))))}Object.defineProperty(n,"__esModule",{value:!0}),n.Event=o,n.Instance=i,n.Collection=u;var f=e(15),c=r(f),s=e(49),a=r(s),l=e(89),p=r(l);n.default=t.exports},function(t,n,e){t.exports={default:e(46),__esModule:!0}},function(t,n,e){e(47);var r=e(1).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(6);r(r.S+r.F*!e(3),"Object",{defineProperty:e(2).f})},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(50),i=r(o),u=e(16),f=r(u),c=e(54),s=r(c),a=e(81),l=r(a),p=e(15),d=r(p),y=function(t,n){return t+" the listened event must be provided for the DisposableEvent by passing a `"+n+"` property upon calling its constructor"},v=y("The type of","type"),h=y("The handler for","handler"),b=function(t){function n(t){var e=t.type,r=t.handler,o=t.target;(0,f.default)(this,n);var u=function(){return c.target.removeEventListener(c.type,c.handler)};if(!r)throw new Error(h);if(!e)throw new Error(v);o||(o=document);var c=(0,s.default)(this,(n.__proto__||(0,i.default)(n)).call(this,u));return c.type=e||"click",c.target=o,c.handler=function(t){return r.call(o,t)},function(){c.disposed||c.target.addEventListener(c.type,c.handler)}(),c}return(0,l.default)(n,t),n}(d.default);n.default=b},function(t,n,e){t.exports={default:e(51),__esModule:!0}},function(t,n,e){e(52),t.exports=e(1).Object.getPrototypeOf},function(t,n,e){var r=e(34),o=e(35);e(53)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(6),o=e(1),i=e(11);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){"use strict";n.__esModule=!0;var r=e(36),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":(0,o.default)(n))&&"function"!=typeof n?t:n}},function(t,n,e){t.exports={default:e(56),__esModule:!0}},function(t,n,e){e(57),e(66),t.exports=e(27).f("iterator")},function(t,n,e){"use strict";var r=e(58)(!0);e(37)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(21),o=e(18);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),s=f.length;return c<0||c>=s?t?"":void 0:(i=f.charCodeAt(c),i<55296||i>56319||c+1===s||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){"use strict";var r=e(24),o=e(12),i=e(26),u={};e(7)(u,e(8)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(2),o=e(9),i=e(14);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(40);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(5),o=e(63),i=e(64);t.exports=function(t){return function(n,e,u){var f,c=r(n),s=o(c.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((f=c[a++])!=f)return!0}else for(;s>a;a++)if((t||a in c)&&c[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(21),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(21),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){t.exports=e(0).document&&document.documentElement},function(t,n,e){e(67);for(var r=e(0),o=e(7),i=e(23),u=e(8)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var s=f[c],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n,e){"use strict";var r=e(68),o=e(69),i=e(23),u=e(5);t.exports=e(37)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){t.exports={default:e(71),__esModule:!0}},function(t,n,e){e(72),e(78),e(79),e(80),t.exports=e(1).Symbol},function(t,n,e){"use strict";var r=e(0),o=e(4),i=e(3),u=e(6),f=e(38),c=e(73).KEY,s=e(11),a=e(20),l=e(26),p=e(13),d=e(8),y=e(27),v=e(28),h=e(74),b=e(75),_=e(76),x=e(9),m=e(5),O=e(17),g=e(12),w=e(24),j=e(77),S=e(43),P=e(2),E=e(14),M=S.f,k=P.f,A=j.f,F=r.Symbol,T=r.JSON,I=T&&T.stringify,N=d("_hidden"),C=d("toPrimitive"),D={}.propertyIsEnumerable,L=a("symbol-registry"),R=a("symbols"),W=a("op-symbols"),J=Object.prototype,G="function"==typeof F,K=r.QObject,z=!K||!K.prototype||!K.prototype.findChild,B=i&&s(function(){return 7!=w(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=M(J,n);r&&delete J[n],k(t,n,e),r&&t!==J&&k(J,n,r)}:k,Y=function(t){var n=R[t]=w(F.prototype);return n._k=t,n},Q=G&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},U=function(t,n,e){return t===J&&U(W,n,e),x(t),n=O(n,!0),x(e),o(R,n)?(e.enumerable?(o(t,N)&&t[N][n]&&(t[N][n]=!1),e=w(e,{enumerable:g(0,!1)})):(o(t,N)||k(t,N,g(1,{})),t[N][n]=!0),B(t,n,e)):k(t,n,e)},q=function(t,n){x(t);for(var e,r=b(n=m(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},H=function(t,n){return void 0===n?w(t):q(w(t),n)},V=function(t){var n=D.call(this,t=O(t,!0));return!(this===J&&o(R,t)&&!o(W,t))&&(!(n||!o(this,t)||!o(R,t)||o(this,N)&&this[N][t])||n)},X=function(t,n){if(t=m(t),n=O(n,!0),t!==J||!o(R,n)||o(W,n)){var e=M(t,n);return!e||!o(R,n)||o(t,N)&&t[N][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=A(m(t)),r=[],i=0;e.length>i;)o(R,n=e[i++])||n==N||n==c||r.push(n);return r},$=function(t){for(var n,e=t===J,r=A(e?W:m(t)),i=[],u=0;r.length>u;)!o(R,n=r[u++])||e&&!o(J,n)||i.push(R[n]);return i};G||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(W,e),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),B(this,t,g(1,e))};return i&&z&&B(J,t,{configurable:!0,set:n}),Y(t)},f(F.prototype,"toString",function(){return this._k}),S.f=X,P.f=U,e(42).f=j.f=Z,e(29).f=V,e(41).f=$,i&&!e(22)&&f(J,"propertyIsEnumerable",V,!0),y.f=function(t){return Y(d(t))}),u(u.G+u.W+u.F*!G,{Symbol:F});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)d(tt[nt++]);for(var tt=E(d.store),nt=0;tt.length>nt;)v(tt[nt++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=F(t)},keyFor:function(t){if(Q(t))return h(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!G,"Object",{create:H,defineProperty:U,defineProperties:q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),T&&u(u.S+u.F*(!G||s(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Q(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&_(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!Q(n))return n}),r[1]=n,I.apply(T,r)}}}),F.prototype[C]||e(7)(F.prototype,C,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(13)("meta"),o=e(10),i=e(4),u=e(2).f,f=0,c=Object.isExtensible||function(){return!0},s=!e(11)(function(){return c(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;a(t)}return t[r].w},d=function(t){return s&&y.NEED&&c(t)&&!i(t,r)&&a(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,n,e){var r=e(14),o=e(5);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(14),o=e(41),i=e(29);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,s=0;f.length>s;)c.call(t,u=f[s++])&&n.push(u);return n}},function(t,n,e){var r=e(40);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(5),o=e(42).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n){},function(t,n,e){e(28)("asyncIterator")},function(t,n,e){e(28)("observable")},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(82),i=r(o),u=e(86),f=r(u),c=e(36),s=r(c);n.default=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":(0,s.default)(n)));t.prototype=(0,f.default)(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(i.default?(0,i.default)(t,n):t.__proto__=n)}},function(t,n,e){t.exports={default:e(83),__esModule:!0}},function(t,n,e){e(84),t.exports=e(1).Object.setPrototypeOf},function(t,n,e){var r=e(6);r(r.S,"Object",{setPrototypeOf:e(85).set})},function(t,n,e){var r=e(10),o=e(9),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e(31)(Function.call,e(43).f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){t.exports={default:e(87),__esModule:!0}},function(t,n,e){e(88);var r=e(1).Object;t.exports=function(t,n){return r.create(t,n)}},function(t,n,e){var r=e(6);r(r.S,"Object",{create:e(24)})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(16),i=r(o),u=e(30),f=r(u),c=e(15),s=function(){function t(){(0,i.default)(this,t),this.disposables=[],this.disposed=!1,this.add.apply(this,arguments)}return(0,f.default)(t,[{key:"add",value:function(){var t=this;if(!this.disposed){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(function(n){if(!(0,c.isDisposable)(n))throw new Error("Parameters to DisposableCollection.add should have a dispose method");t.disposables.push(n)})}}},{key:"remove",value:function(){var t=this;if(!this.disposed){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(function(n){var e=t.disposables.findIndex(function(t){return t==n});e>-1&&t.disposables.splice(e,1)})}}},{key:"clear",value:function(){this.disposed||(this.disposables=[])}},{key:"dispose",value:function(){this.disposed||(this.disposed=!0,this.disposables.forEach(function(t){return t.dispose()}),this.disposables=null)}}]),t}();n.default=s}])});