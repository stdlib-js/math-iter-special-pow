// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterPow=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[w]=n:delete r[w],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var A=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return p(r)||g(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",g);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof E?E:null;var N=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=N.document&&N.document.childNodes,P=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&m(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n,e){var o,u,i,f,a,c,y,p,v;for(f=2,u=[0,0],o=[],i=[],v=0;v<f;v++)if(o.push(arguments[v]),M(arguments[v]))i.push(1);else{if(!k(arguments[v]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+v+"`. Value: `"+arguments[v]+"`.");i.push(0)}if(!L(n))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+n+"`.");if(c={invalid:NaN},arguments.length>3&&(p=Z(c,e)))throw p;if(l(a={},"next",b),l(a,"return",s),X){for(v=0;v<f;v++)if(i[v]&&!L(o[v][X])){y=!0;break}y||l(a,X,d)}return y=!1,a;function b(){var r,t,e;if(y)return{done:!0};for(e=0;e<f;e++)if(i[e]){if((t=o[e].next()).done)return y=!0,t;"number"==typeof t.value?u[e]=t.value:r=!0}else u[e]=o[e];return r?{value:c.invalid,done:!1}:{value:n(u[0],u[1]),done:!1}}function s(r){return y=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var r,t;for(r=[],t=0;t<f;t++)i[t]?r.push(o[t][X]()):r.push(o[t]);return r.push(n,c),$.apply(null,r)}}function rr(r){return r!=r}var tr=Math.floor;function nr(r){return tr(r)===r}function er(r){return nr(r/2)}function or(r){return er(r>0?r-1:r+1)}var ur=Number.POSITIVE_INFINITY,ir=W.NEGATIVE_INFINITY;function fr(r){return r===ur||r===ir}var ar=Math.sqrt;function cr(r){return Math.abs(r)}var lr="function"==typeof Uint32Array;var yr="function"==typeof Uint32Array?Uint32Array:null;var pr,vr="function"==typeof Uint32Array?Uint32Array:void 0;pr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(lr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br=pr,sr="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var mr,wr="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),n=t,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var jr=mr,hr="function"==typeof Uint8Array;var Ar="function"==typeof Uint8Array?Uint8Array:null;var gr,_r="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or=gr,Ur="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Er,Tr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,t,n;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ur&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var Nr,Ir={uint16:Er,uint8:Or};(Nr=new Ir.uint16(1))[0]=4660;var Pr,Fr,Vr=52===new Ir.uint8(Nr.buffer)[0];!0===Vr?(Pr=1,Fr=0):(Pr=0,Fr=1);var xr={HIGH:Pr,LOW:Fr},Gr=new jr(1),Hr=new br(Gr.buffer),Br=xr.HIGH,Lr=xr.LOW;function Mr(r,t){return Gr[0]=t,r[0]=Hr[Br],r[1]=Hr[Lr],r}function kr(r,t){return 1===arguments.length?Mr([0,0],r):Mr(r,t)}var Wr=!0===Vr?0:1,Cr=new jr(1),Yr=new br(Cr.buffer);function qr(r,t){return Cr[0]=r,Yr[Wr]=t>>>0,Cr[0]}function Rr(r){return 0|r}var Xr,zr,Dr=!0===Vr?1:0,Jr=new jr(1),Kr=new br(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}!0===Vr?(Xr=1,zr=0):(Xr=0,zr=1);var Zr={HIGH:Xr,LOW:zr},$r=new jr(1),rt=new br($r.buffer),tt=Zr.HIGH,nt=Zr.LOW;function et(r,t){return rt[tt]=r,rt[nt]=t,$r[0]}var ot=[0,0];function ut(r,t){var n,e;return kr(ot,r),n=ot[0],n&=2147483647,e=Qr(t),et(n|=e&=2147483648,ot[1])}var it=!0===Vr?1:0,ft=new jr(1),at=new br(ft.buffer);function ct(r,t){return ft[0]=r,at[it]=t>>>0,ft[0]}var lt=1023;var yt=1048576,pt=[1,1.5],vt=[0,.5849624872207642],bt=[0,1.350039202129749e-8];function st(r,t){return rr(t)||fr(t)?(r[0]=t,r[1]=0,r):0!==t&&cr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var dt=[0,0],mt=[0,0];function wt(r,t){var n,e;return 0===t||0===r||rr(r)||fr(r)?r:(function(r,t){1===arguments.length?st([0,0],r):st(r,t)}(dt,r),t+=dt[1],t+=function(r){var t=Qr(r);return(t=(2146435072&t)>>>20)-lt|0}(r=dt[0]),t<-1074?ut(0,r):t>1023?r<0?ir:ur:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,kr(mt,r),n=mt[0],n&=2148532223,e*et(n|=t+lt<<20,mt[1])))}var jt=2147483647,ht=1048575,At=1048576;var gt=2147483647,_t=1083179008,Ot=1e300,Ut=1e-300,St=[0,0],Et=[0,0];function Tt(r,t){var n,e,o,u,i,f,a,c,l,y,p,v,b,s;if(rr(r)||rr(t))return NaN;if(kr(St,t),i=St[0],0===St[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return ar(r);if(-.5===t)return 1/ar(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(fr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(t===ur)?0:ur}(r,t)}if(kr(St,r),u=St[0],0===St[1]){if(0===u)return function(r,t){return t===ir?ur:t===ur?0:t>0?or(t)?r:0:or(t)?ut(ur,r):ur}(r,t);if(1===r)return 1;if(-1===r&&or(t))return-1;if(fr(r))return r===ir?Tt(-0,-t):t<0?0:ur}if(r<0&&!1===nr(t))return(r-r)/(r-r);if(o=cr(r),n=u&gt|0,e=i&gt|0,a=i>>>31|0,f=(f=u>>>31|0)&&or(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Qr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*Ot*Ot:f*Ut*Ut;if(n>1072693248)return 0===a?f*Ot*Ot:f*Ut*Ut;p=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=qr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Et,o)}else p=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,s,d,m,w,j,h,A,g,_;return h=0,n<yt&&(h-=53,n=Qr(t*=9007199254740992)),h+=(n>>20)-lt|0,n=1072693248|(A=1048575&n|0),A<=235662?g=0:A<767610?g=1:(g=0,h+=1,n-=yt),i=qr(o=(w=(t=ct(t,n))-(c=pt[g]))*(j=1/(t+c)),0),e=524288+(n>>1|536870912),a=ct(0,e+=g<<18),m=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=qr(a=3+(u=i*i)+(m+=(f=j*(w-i*a-i*(t-(a-c))))*(i+o)),0),s=(v=-7.028461650952758e-9*(y=qr(y=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(y-w))+bt[g])-((b=qr(b=(p=.9617967009544373*y)+v+(l=vt[g])+(d=h),0))-d-l-p),r[0]=b,r[1]=s,r}(Et,o,n);if(y=(t-(c=qr(t,0)))*p[0]+t*p[1],l=c*p[0],kr(St,v=y+l),b=Rr(St[0]),s=Rr(St[1]),b>=_t){if(0!=(b-_t|s))return f*Ot*Ot;if(y+8008566259537294e-32>v-l)return f*Ot*Ot}else if((b&gt)>=1083231232){if(0!=(b-3230714880|s))return f*Ut*Ut;if(y<=v-l)return f*Ut*Ut}return v=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&jt|0)>>20)-lt|0,c=0,l>1071644672&&(o=ct(0,((c=r+(At>>y+1)>>>0)&~(ht>>(y=((c&jt)>>20)-lt|0)))>>>0),c=(c&ht|At)>>20-y>>>0,r<0&&(c=-c),t-=o),r=Rr(r=Qr(a=1-((a=(u=.6931471824645996*(o=qr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?wt(a,c):ct(a,r)}(b,l,y),f*v}return function(r,t){return $(r,t,Tt)}}));
//# sourceMappingURL=browser.js.map
