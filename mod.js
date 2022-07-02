// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&f&&f.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var g=function(r){return _.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=h;var N=g,I=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},T=j()?I:N,F=Boolean.prototype.toString;var G=T,V=function(r){try{return F.call(r),!0}catch(r){return!1}},x=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(x?V(r):"[object Boolean]"===G(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;s(ar,"REGEXP",fr());var cr=ar,lr=T;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=T,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var hr=wr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},gr=function(r){return hr(r).toLowerCase()},Ar=ir()?gr:_r;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Nr=Pr.prototype.toString;var Ir=T,Tr=Pr,Fr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Gr=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Tr||(Gr?Fr(r):"[object Number]"===Ir(r)))},xr=Sr,Hr=Vr;var Br=s,Lr=function(r){return xr(r)||Hr(r)},Mr=Vr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=T,Dr=qr;var Jr=function(r){var t=Dr(r);return t||null===t?t:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=T,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,ft=O;var at=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(ft(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e,o){var u,i,f,a,c,l,v,y,p;for(a=2,i=[0,0],u=[],f=[],p=0;p<a;p++)if(u.push(arguments[p]),lt(arguments[p]))f.push(1);else{if(!vt(arguments[p]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+p+"`. Value: `"+arguments[p]+"`.");f.push(0)}if(!ct(e))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+e+"`.");if(l={invalid:NaN},arguments.length>3&&(y=pt(l,o)))throw y;if(at(c={},"next",b),at(c,"return",s),yt){for(p=0;p<a;p++)if(f[p]&&!ct(u[p][yt])){v=!0;break}v||at(c,yt,d)}return v=!1,c;function b(){var r,t,n;if(v)return{done:!0};for(n=0;n<a;n++)if(f[n]){if((t=u[n].next()).done)return v=!0,t;"number"==typeof t.value?i[n]=t.value:r=!0}else i[n]=u[n];return r?{value:l.invalid,done:!1}:{value:e(i[0],i[1]),done:!1}}function s(r){return v=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var t,n;for(t=[],n=0;n<a;n++)f[n]?t.push(u[n][yt]()):t.push(u[n]);return t.push(e,l),r.apply(null,t)}},st=bt;var dt=function(r){return r!=r},mt=Math.floor;var wt=function(r){return mt(r)===r},jt=wt;var ht=function(r){return jt(r/2)};var _t=function(r){return ht(r>0?r-1:r+1)},gt=Number.POSITIVE_INFINITY,At=Pr.NEGATIVE_INFINITY,Ot=gt,Et=At;var Ut=function(r){return r===Ot||r===Et},St=Math.sqrt;var Pt=function(r){return Math.abs(r)},Nt=T,It="function"==typeof Uint32Array;var Tt="function"==typeof Uint32Array?Uint32Array:null,Ft=function(r){return It&&r instanceof Uint32Array||"[object Uint32Array]"===Nt(r)},Gt=Tt;var Vt=function(){var r,t;if("function"!=typeof Gt)return!1;try{t=new Gt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Ft(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var xt="function"==typeof Uint32Array?Uint32Array:void 0,Ht=function(){throw new Error("not implemented")},Bt=Vt()?xt:Ht,Lt=T,Mt="function"==typeof Float64Array;var kt="function"==typeof Float64Array?Float64Array:null,Wt=function(r){return Mt&&r instanceof Float64Array||"[object Float64Array]"===Lt(r)},Ct=kt;var Rt=function(){var r,t;if("function"!=typeof Ct)return!1;try{t=new Ct([1,3.14,-3.14,NaN]),r=Wt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Xt="function"==typeof Float64Array?Float64Array:void 0,Yt=function(){throw new Error("not implemented")},qt=Rt()?Xt:Yt,zt=T,Dt="function"==typeof Uint8Array;var Jt="function"==typeof Uint8Array?Uint8Array:null,Kt=function(r){return Dt&&r instanceof Uint8Array||"[object Uint8Array]"===zt(r)},Qt=Jt;var Zt=function(){var r,t;if("function"!=typeof Qt)return!1;try{t=new Qt(t=[1,3.14,-3.14,256,257]),r=Kt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var $t="function"==typeof Uint8Array?Uint8Array:void 0,rn=function(){throw new Error("not implemented")},tn=Zt()?$t:rn,nn=T,en="function"==typeof Uint16Array;var on="function"==typeof Uint16Array?Uint16Array:null,un=function(r){return en&&r instanceof Uint16Array||"[object Uint16Array]"===nn(r)},fn=on;var an=function(){var r,t;if("function"!=typeof fn)return!1;try{t=new fn(t=[1,3.14,-3.14,65536,65537]),r=un(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var cn,ln="function"==typeof Uint16Array?Uint16Array:void 0,vn=function(){throw new Error("not implemented")},yn={uint16:an()?ln:vn,uint8:tn};(cn=new yn.uint16(1))[0]=4660;var pn,bn,sn=52===new yn.uint8(cn.buffer)[0];!0===sn?(pn=1,bn=0):(pn=0,bn=1);var dn=Bt,mn={HIGH:pn,LOW:bn},wn=new qt(1),jn=new dn(wn.buffer),hn=mn.HIGH,_n=mn.LOW;var gn=function(r,t){return wn[0]=t,r[0]=jn[hn],r[1]=jn[_n],r};var An=function(r,t){return 1===arguments.length?gn([0,0],r):gn(r,t)},On=Bt,En=!0===sn?0:1,Un=new qt(1),Sn=new On(Un.buffer);var Pn=function(r,t){return Un[0]=r,Sn[En]=t>>>0,Un[0]},Nn=Pn;var In=function(r){return 0|r},Tn=Bt,Fn=!0===sn?1:0,Gn=new qt(1),Vn=new Tn(Gn.buffer);var xn,Hn,Bn=function(r){return Gn[0]=r,Vn[Fn]};!0===sn?(xn=1,Hn=0):(xn=0,Hn=1);var Ln=Bt,Mn={HIGH:xn,LOW:Hn},kn=new qt(1),Wn=new Ln(kn.buffer),Cn=Mn.HIGH,Rn=Mn.LOW;var Xn=function(r,t){return Wn[Cn]=r,Wn[Rn]=t,kn[0]},Yn=Xn,qn=An,zn=Bn,Dn=Yn,Jn=[0,0];var Kn=function(r,t){var n,e;return qn(Jn,r),n=Jn[0],n&=2147483647,e=zn(t),Dn(n|=e&=2147483648,Jn[1])},Qn=_t,Zn=Kn,$n=At,re=gt;var te=function(r,t){return t===$n?re:t===re?0:t>0?Qn(t)?r:0:Qn(t)?Zn(re,r):re},ne=Bn;var ee=function(r,t){return(2147483647&ne(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},oe=Pt,ue=gt;var ie=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:oe(r)<1==(t===ue)?0:ue},fe=Bt,ae=!0===sn?1:0,ce=new qt(1),le=new fe(ce.buffer);var ve=function(r,t){return ce[0]=r,le[ae]=t>>>0,ce[0]};var ye=Bn,pe=Nn,be=ve,se=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},de=[1,1.5],me=[0,.5849624872207642],we=[0,1.350039202129749e-8];var je=Nn,he=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var _e=Ut,ge=dt,Ae=Pt;var Oe=function(r,t){return ge(t)||_e(t)?(r[0]=t,r[1]=0,r):0!==t&&Ae(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Ee=Bn;var Ue=function(r){var t=Ee(r);return(t=(2146435072&t)>>>20)-1023|0},Se=gt,Pe=At,Ne=dt,Ie=Ut,Te=Kn,Fe=function(r,t){return 1===arguments.length?Oe([0,0],r):Oe(r,t)},Ge=Ue,Ve=An,xe=Yn,He=[0,0],Be=[0,0];var Le=function(r,t){var n,e;return 0===t||0===r||Ne(r)||Ie(r)?r:(Fe(He,r),t+=He[1],(t+=Ge(r=He[0]))<-1074?Te(0,r):t>1023?r<0?Pe:Se:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ve(Be,r),n=Be[0],n&=2148532223,e*xe(n|=t+1023<<20,Be[1])))};var Me=Bn,ke=ve,We=Nn,Ce=In,Re=Le,Xe=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Ye=dt,qe=_t,ze=Ut,De=wt,Je=St,Ke=Pt,Qe=An,Ze=Nn,$e=In,ro=At,to=gt,no=te,eo=ee,oo=ie,uo=function(r,t,n){var e,o,u,i,f,a,c,l,v,y,p,b,s,d,m,w,j,h,_,g;return h=0,n<1048576&&(h-=53,n=ye(t*=9007199254740992)),h+=(n>>20)-1023|0,n=1072693248|(_=1048575&n|0),_<=235662?g=0:_<767610?g=1:(g=0,h+=1,n-=1048576),e=524288+(n>>1|536870912),f=(j=1/((t=be(t,n))+(c=de[g])))*((w=t-c)-(i=pe(o=w*j,0))*(a=be(0,e+=g<<18))-i*(t-(a-c))),m=(u=o*o)*u*se(u),a=pe(a=3+(u=i*i)+(m+=f*(i+o)),0),s=(p=-7.028461650952758e-9*(v=pe(v=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(v-w))+we[g])-((b=pe(b=(y=.9617967009544373*v)+p+(l=me[g])+(d=h),0))-d-l-y),r[0]=b,r[1]=s,r},io=function(r,t){var n,e,o,u,i;return n=(i=1.9259629911266175e-8*(o=t-1)-1.4426950408889634*(o*o*he(o)))-((e=je(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r},fo=function(r,t,n){var e,o,u,i,f,a,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),t-=u=ke(0,e)),a=(f=.6931471805599453*(n-((u=We(u=n+t,0))-t))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),o=c-(u=c*c)*Xe(u),r=Me(c=1-(c*o/(o-2)-(a+c*a)-c)),r=Ce(r),c=(r+=l<<20>>>0)>>20<=0?Re(c,l):ke(c,r)},ao=1e300,co=1e-300,lo=[0,0],vo=[0,0];var yo=function r(t,n){var e,o,u,i,f,a,c,l,v,y,p,b,s,d;if(Ye(t)||Ye(n))return NaN;if(Qe(lo,n),f=lo[0],0===lo[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return Je(t);if(-.5===n)return 1/Je(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(ze(n))return oo(t,n)}if(Qe(lo,t),i=lo[0],0===lo[1]){if(0===i)return no(t,n);if(1===t)return 1;if(-1===t&&qe(n))return-1;if(ze(t))return t===ro?r(-0,-n):n<0?0:to}if(t<0&&!1===De(n))return(t-t)/(t-t);if(u=Ke(t),e=2147483647&i|0,o=2147483647&f|0,c=f>>>31|0,a=(a=i>>>31|0)&&qe(n)?-1:1,o>1105199104){if(o>1139802112)return eo(t,n);if(e<1072693247)return 1===c?a*ao*ao:a*co*co;if(e>1072693248)return 0===c?a*ao*ao:a*co*co;p=io(vo,u)}else p=uo(vo,u,e);if(y=(n-(l=Ze(n,0)))*p[0]+n*p[1],v=l*p[0],Qe(lo,b=y+v),s=$e(lo[0]),d=$e(lo[1]),s>=1083179008){if(0!=(s-1083179008|d))return a*ao*ao;if(y+8008566259537294e-32>b-v)return a*ao*ao}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|d))return a*co*co;if(y<=b-v)return a*co*co}return a*(b=fo(s,v,y))},po=yo;function bo(r,t){return st(r,t,po)}export{bo as default};
//# sourceMappingURL=mod.js.map
