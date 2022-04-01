// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,m=/./;var d=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,h=_;var A=function(r){return h.call(r)},g=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&g.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var N=A,I=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},T=j()?I:N,F=Boolean.prototype.toString;var G=T,V=function(r){try{return F.call(r),!0}catch(r){return!1}},H=j();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(H?V(r):"[object Boolean]"===G(r)))},x=d,B=M;var L=s,k=function(r){return x(r)||B(r)},W=M;L(k,"isPrimitive",d),L(k,"isObject",W);var C="object"==typeof self?self:null,R="object"==typeof window?window:null,X=k.isPrimitive,Y=function(){return new Function("return this;")()},q=C,z=R,D=r(Object.freeze({__proto__:null}));var J=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(q)return q;if(z)return z;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},K=J(),Q=K.document&&K.document.childNodes,Z=Int8Array,$=m,rr=Q,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;s(or,"REGEXP",er());var ur=or,ir=T;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},fr=ar;var cr=function(r){return null!==r&&"object"==typeof r};s(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(cr));var lr=cr;var vr=T,yr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,n,e;if(("Object"===(n=vr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},sr=br;var mr=br;var dr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},wr=function(r){return mr(r).toLowerCase()},jr=nr()?wr:dr;var _r=function(r){return"function"===jr(r)},hr=_r;var Ar=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&hr(r.next)};var gr=function(r){return"number"==typeof r},Or=Number,Er=Or.prototype.toString;var Ur=T,Sr=Or,Pr=function(r){try{return Er.call(r),!0}catch(r){return!1}},Nr=j();var Ir=function(r){return"object"==typeof r&&(r instanceof Sr||(Nr?Pr(r):"[object Number]"===Ur(r)))},Tr=gr,Fr=Ir;var Gr=s,Vr=function(r){return Tr(r)||Fr(r)},Hr=Ir;Gr(Vr,"isPrimitive",gr),Gr(Vr,"isObject",Hr);var Mr=Vr,xr=O;var Br=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&xr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Lr=ar;var kr=function(r){return"object"==typeof r&&null!==r&&!Lr(r)},Wr=Object.getPrototypeOf;var Cr=function(r){return r.__proto__},Rr=T,Xr=Cr;var Yr=function(r){var t=Xr(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},qr=Wr,zr=Yr,Dr=_r(Object.getPrototypeOf)?qr:zr;var Jr=kr,Kr=_r,Qr=function(r){return null==r?null:(r=Object(r),Dr(r))},Zr=O,$r=T,rt=Object.prototype;var tt=function(r){var t;return!!Jr(r)&&(!(t=Qr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Kr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Kr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=O;var ot=s,ut=_r,it=Ar,at=Mr.isPrimitive,ft=Br,ct=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e,o){var u,i,a,f,c,l,v,y,p;for(f=2,i=[0,0],u=[],a=[],p=0;p<f;p++)if(u.push(arguments[p]),it(arguments[p]))a.push(1);else{if(!at(arguments[p]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+p+"`. Value: `"+arguments[p]+"`.");a.push(0)}if(!ut(e))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+e+"`.");if(l={invalid:NaN},arguments.length>3&&(y=ct(l,o)))throw y;if(ot(c={},"next",b),ot(c,"return",s),ft){for(p=0;p<f;p++)if(a[p]&&!ut(u[p][ft])){v=!0;break}v||ot(c,ft,m)}return v=!1,c;function b(){var r,t,n;if(v)return{done:!0};for(n=0;n<f;n++)if(a[n]){if((t=u[n].next()).done)return v=!0,t;"number"==typeof t.value?i[n]=t.value:r=!0}else i[n]=u[n];return r?{value:l.invalid,done:!1}:{value:e(i[0],i[1]),done:!1}}function s(r){return v=!0,arguments.length?{value:r,done:!0}:{done:!0}}function m(){var t,n;for(t=[],n=0;n<f;n++)a[n]?t.push(u[n][ft]()):t.push(u[n]);return t.push(e,l),r.apply(null,t)}},vt=lt;var yt=function(r){return r!=r},pt=Math.floor;var bt=function(r){return pt(r)===r},st=bt;var mt=function(r){return st(r/2)};var dt=function(r){return mt(r>0?r-1:r+1)},wt=Number.POSITIVE_INFINITY,jt=Or.NEGATIVE_INFINITY,_t=wt,ht=jt;var At=function(r){return r===_t||r===ht},gt=Math.sqrt;var Ot=function(r){return Math.abs(r)},Et=T,Ut="function"==typeof Uint32Array;var St="function"==typeof Uint32Array?Uint32Array:null,Pt=function(r){return Ut&&r instanceof Uint32Array||"[object Uint32Array]"===Et(r)},Nt=St;var It=function(){var r,t;if("function"!=typeof Nt)return!1;try{t=new Nt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Pt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Tt="function"==typeof Uint32Array?Uint32Array:void 0,Ft=function(){throw new Error("not implemented")},Gt=It()?Tt:Ft,Vt=T,Ht="function"==typeof Float64Array;var Mt="function"==typeof Float64Array?Float64Array:null,xt=function(r){return Ht&&r instanceof Float64Array||"[object Float64Array]"===Vt(r)},Bt=Mt;var Lt=function(){var r,t;if("function"!=typeof Bt)return!1;try{t=new Bt([1,3.14,-3.14,NaN]),r=xt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var kt="function"==typeof Float64Array?Float64Array:void 0,Wt=function(){throw new Error("not implemented")},Ct=Lt()?kt:Wt,Rt=T,Xt="function"==typeof Uint8Array;var Yt="function"==typeof Uint8Array?Uint8Array:null,qt=function(r){return Xt&&r instanceof Uint8Array||"[object Uint8Array]"===Rt(r)},zt=Yt;var Dt=function(){var r,t;if("function"!=typeof zt)return!1;try{t=new zt(t=[1,3.14,-3.14,256,257]),r=qt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Jt="function"==typeof Uint8Array?Uint8Array:void 0,Kt=function(){throw new Error("not implemented")},Qt=Dt()?Jt:Kt,Zt=T,$t="function"==typeof Uint16Array;var rn="function"==typeof Uint16Array?Uint16Array:null,tn=function(r){return $t&&r instanceof Uint16Array||"[object Uint16Array]"===Zt(r)},nn=rn;var en=function(){var r,t;if("function"!=typeof nn)return!1;try{t=new nn(t=[1,3.14,-3.14,65536,65537]),r=tn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var on,un="function"==typeof Uint16Array?Uint16Array:void 0,an=function(){throw new Error("not implemented")},fn={uint16:en()?un:an,uint8:Qt};(on=new fn.uint16(1))[0]=4660;var cn,ln,vn=52===new fn.uint8(on.buffer)[0];!0===vn?(cn=1,ln=0):(cn=0,ln=1);var yn=Gt,pn={HIGH:cn,LOW:ln},bn=new Ct(1),sn=new yn(bn.buffer),mn=pn.HIGH,dn=pn.LOW;var wn=function(r,t){return bn[0]=t,r[0]=sn[mn],r[1]=sn[dn],r};var jn=function(r,t){return 1===arguments.length?wn([0,0],r):wn(r,t)},_n=Gt,hn=!0===vn?0:1,An=new Ct(1),gn=new _n(An.buffer);var On=function(r,t){return An[0]=r,gn[hn]=t>>>0,An[0]},En=On;var Un=function(r){return 0|r},Sn=Gt,Pn=!0===vn?1:0,Nn=new Ct(1),In=new Sn(Nn.buffer);var Tn,Fn,Gn=function(r){return Nn[0]=r,In[Pn]};!0===vn?(Tn=1,Fn=0):(Tn=0,Fn=1);var Vn=Gt,Hn={HIGH:Tn,LOW:Fn},Mn=new Ct(1),xn=new Vn(Mn.buffer),Bn=Hn.HIGH,Ln=Hn.LOW;var kn=function(r,t){return xn[Bn]=r,xn[Ln]=t,Mn[0]},Wn=kn,Cn=jn,Rn=Gn,Xn=Wn,Yn=[0,0];var qn=function(r,t){var n,e;return Cn(Yn,r),n=Yn[0],n&=2147483647,e=Rn(t),Xn(n|=e&=2147483648,Yn[1])},zn=dt,Dn=qn,Jn=jt,Kn=wt;var Qn=function(r,t){return t===Jn?Kn:t===Kn?0:t>0?zn(t)?r:0:zn(t)?Dn(Kn,r):Kn},Zn=Gn;var $n=function(r,t){return(2147483647&Zn(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},re=Ot,te=wt;var ne=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:re(r)<1==(t===te)?0:te},ee=Gt,oe=!0===vn?1:0,ue=new Ct(1),ie=new ee(ue.buffer);var ae=function(r,t){return ue[0]=r,ie[oe]=t>>>0,ue[0]};var fe=Gn,ce=En,le=ae,ve=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ye=[1,1.5],pe=[0,.5849624872207642],be=[0,1.350039202129749e-8];var se=En,me=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var de=At,we=yt,je=Ot;var _e=function(r,t){return we(t)||de(t)?(r[0]=t,r[1]=0,r):0!==t&&je(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var he=Gn;var Ae=function(r){var t=he(r);return(t=(2146435072&t)>>>20)-1023|0},ge=wt,Oe=jt,Ee=yt,Ue=At,Se=qn,Pe=function(r,t){return 1===arguments.length?_e([0,0],r):_e(r,t)},Ne=Ae,Ie=jn,Te=Wn,Fe=[0,0],Ge=[0,0];var Ve=function(r,t){var n,e;return 0===t||0===r||Ee(r)||Ue(r)?r:(Pe(Fe,r),t+=Fe[1],(t+=Ne(r=Fe[0]))<-1074?Se(0,r):t>1023?r<0?Oe:ge:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ie(Ge,r),n=Ge[0],n&=2148532223,e*Te(n|=t+1023<<20,Ge[1])))};var He=Gn,Me=ae,xe=En,Be=Un,Le=Ve,ke=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var We=yt,Ce=dt,Re=At,Xe=bt,Ye=gt,qe=Ot,ze=jn,De=En,Je=Un,Ke=jt,Qe=wt,Ze=Qn,$e=$n,ro=ne,to=function(r,t,n){var e,o,u,i,a,f,c,l,v,y,p,b,s,m,d,w,j,_,h,A;return _=0,n<1048576&&(_-=53,n=fe(t*=9007199254740992)),_+=(n>>20)-1023|0,n=1072693248|(h=1048575&n|0),h<=235662?A=0:h<767610?A=1:(A=0,_+=1,n-=1048576),e=524288+(n>>1|536870912),a=(j=1/((t=le(t,n))+(c=ye[A])))*((w=t-c)-(i=ce(o=w*j,0))*(f=le(0,e+=A<<18))-i*(t-(f-c))),d=(u=o*o)*u*ve(u),f=ce(f=3+(u=i*i)+(d+=a*(i+o)),0),s=(p=-7.028461650952758e-9*(v=ce(v=(w=i*f)+(j=a*f+(d-(f-3-u))*o),0))+.9617966939259756*(j-(v-w))+be[A])-((b=ce(b=(y=.9617967009544373*v)+p+(l=pe[A])+(m=_),0))-m-l-y),r[0]=b,r[1]=s,r},no=function(r,t){var n,e,o,u,i;return n=(i=1.9259629911266175e-8*(o=t-1)-1.4426950408889634*(o*o*me(o)))-((e=se(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r},eo=function(r,t,n){var e,o,u,i,a,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),t-=u=Me(0,e)),f=(a=.6931471805599453*(n-((u=xe(u=n+t,0))-t))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+a)-i),o=c-(u=c*c)*ke(u),r=He(c=1-(c*o/(o-2)-(f+c*f)-c)),r=Be(r),c=(r+=l<<20>>>0)>>20<=0?Le(c,l):Me(c,r)},oo=1e300,uo=1e-300,io=[0,0],ao=[0,0];var fo=function r(t,n){var e,o,u,i,a,f,c,l,v,y,p,b,s,m;if(We(t)||We(n))return NaN;if(ze(io,n),a=io[0],0===io[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return Ye(t);if(-.5===n)return 1/Ye(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(Re(n))return ro(t,n)}if(ze(io,t),i=io[0],0===io[1]){if(0===i)return Ze(t,n);if(1===t)return 1;if(-1===t&&Ce(n))return-1;if(Re(t))return t===Ke?r(-0,-n):n<0?0:Qe}if(t<0&&!1===Xe(n))return(t-t)/(t-t);if(u=qe(t),e=2147483647&i|0,o=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&Ce(n)?-1:1,o>1105199104){if(o>1139802112)return $e(t,n);if(e<1072693247)return 1===c?f*oo*oo:f*uo*uo;if(e>1072693248)return 0===c?f*oo*oo:f*uo*uo;p=no(ao,u)}else p=to(ao,u,e);if(y=(n-(l=De(n,0)))*p[0]+n*p[1],v=l*p[0],ze(io,b=y+v),s=Je(io[0]),m=Je(io[1]),s>=1083179008){if(0!=(s-1083179008|m))return f*oo*oo;if(y+8008566259537294e-32>b-v)return f*oo*oo}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|m))return f*uo*uo;if(y<=b-v)return f*uo*uo}return f*(b=eo(s,v,y))},co=vt,lo=fo;var vo=function(r,t){return co(r,t,lo)},yo=vo;export{yo as default};
//# sourceMappingURL=mod.js.map
