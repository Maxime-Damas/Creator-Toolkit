(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ox(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pd={exports:{}},oa={},md={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function zv(){if(Dm)return Tt;Dm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function b(I,K,me){this.props=I,this.context=K,this.refs=T,this.updater=me||x}b.prototype.isReactComponent={},b.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},b.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=b.prototype;function A(I,K,me){this.props=I,this.context=K,this.refs=T,this.updater=me||x}var U=A.prototype=new _;U.constructor=A,w(U,b.prototype),U.isPureReactComponent=!0;var N=Array.isArray,L=Object.prototype.hasOwnProperty,F={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function P(I,K,me){var Q,he={},Se=null,Te=null;if(K!=null)for(Q in K.ref!==void 0&&(Te=K.ref),K.key!==void 0&&(Se=""+K.key),K)L.call(K,Q)&&!M.hasOwnProperty(Q)&&(he[Q]=K[Q]);var be=arguments.length-2;if(be===1)he.children=me;else if(1<be){for(var Ge=Array(be),ft=0;ft<be;ft++)Ge[ft]=arguments[ft+2];he.children=Ge}if(I&&I.defaultProps)for(Q in be=I.defaultProps,be)he[Q]===void 0&&(he[Q]=be[Q]);return{$$typeof:s,type:I,key:Se,ref:Te,props:he,_owner:F.current}}function j(I,K){return{$$typeof:s,type:I.type,key:K,ref:I.ref,props:I.props,_owner:I._owner}}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function W(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(me){return K[me]})}var V=/\/+/g;function Z(I,K){return typeof I=="object"&&I!==null&&I.key!=null?W(""+I.key):K.toString(36)}function O(I,K,me,Q,he){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var Te=!1;if(I===null)Te=!0;else switch(Se){case"string":case"number":Te=!0;break;case"object":switch(I.$$typeof){case s:case e:Te=!0}}if(Te)return Te=I,he=he(Te),I=Q===""?"."+Z(Te,0):Q,N(he)?(me="",I!=null&&(me=I.replace(V,"$&/")+"/"),O(he,K,me,"",function(ft){return ft})):he!=null&&(k(he)&&(he=j(he,me+(!he.key||Te&&Te.key===he.key?"":(""+he.key).replace(V,"$&/")+"/")+I)),K.push(he)),1;if(Te=0,Q=Q===""?".":Q+":",N(I))for(var be=0;be<I.length;be++){Se=I[be];var Ge=Q+Z(Se,be);Te+=O(Se,K,me,Ge,he)}else if(Ge=y(I),typeof Ge=="function")for(I=Ge.call(I),be=0;!(Se=I.next()).done;)Se=Se.value,Ge=Q+Z(Se,be++),Te+=O(Se,K,me,Ge,he);else if(Se==="object")throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Te}function J(I,K,me){if(I==null)return I;var Q=[],he=0;return O(I,Q,"","",function(Se){return K.call(me,Se,he++)}),Q}function ce(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(me){(I._status===0||I._status===-1)&&(I._status=1,I._result=me)},function(me){(I._status===0||I._status===-1)&&(I._status=2,I._result=me)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var $={current:null},z={transition:null},G={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function X(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:J,forEach:function(I,K,me){J(I,function(){K.apply(this,arguments)},me)},count:function(I){var K=0;return J(I,function(){K++}),K},toArray:function(I){return J(I,function(K){return K})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Tt.Component=b,Tt.Fragment=t,Tt.Profiler=o,Tt.PureComponent=A,Tt.StrictMode=r,Tt.Suspense=f,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Tt.act=X,Tt.cloneElement=function(I,K,me){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=w({},I.props),he=I.key,Se=I.ref,Te=I._owner;if(K!=null){if(K.ref!==void 0&&(Se=K.ref,Te=F.current),K.key!==void 0&&(he=""+K.key),I.type&&I.type.defaultProps)var be=I.type.defaultProps;for(Ge in K)L.call(K,Ge)&&!M.hasOwnProperty(Ge)&&(Q[Ge]=K[Ge]===void 0&&be!==void 0?be[Ge]:K[Ge])}var Ge=arguments.length-2;if(Ge===1)Q.children=me;else if(1<Ge){be=Array(Ge);for(var ft=0;ft<Ge;ft++)be[ft]=arguments[ft+2];Q.children=be}return{$$typeof:s,type:I.type,key:he,ref:Se,props:Q,_owner:Te}},Tt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Tt.createElement=P,Tt.createFactory=function(I){var K=P.bind(null,I);return K.type=I,K},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(I){return{$$typeof:h,render:I}},Tt.isValidElement=k,Tt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ce}},Tt.memo=function(I,K){return{$$typeof:p,type:I,compare:K===void 0?null:K}},Tt.startTransition=function(I){var K=z.transition;z.transition={};try{I()}finally{z.transition=K}},Tt.unstable_act=X,Tt.useCallback=function(I,K){return $.current.useCallback(I,K)},Tt.useContext=function(I){return $.current.useContext(I)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(I){return $.current.useDeferredValue(I)},Tt.useEffect=function(I,K){return $.current.useEffect(I,K)},Tt.useId=function(){return $.current.useId()},Tt.useImperativeHandle=function(I,K,me){return $.current.useImperativeHandle(I,K,me)},Tt.useInsertionEffect=function(I,K){return $.current.useInsertionEffect(I,K)},Tt.useLayoutEffect=function(I,K){return $.current.useLayoutEffect(I,K)},Tt.useMemo=function(I,K){return $.current.useMemo(I,K)},Tt.useReducer=function(I,K,me){return $.current.useReducer(I,K,me)},Tt.useRef=function(I){return $.current.useRef(I)},Tt.useState=function(I){return $.current.useState(I)},Tt.useSyncExternalStore=function(I,K,me){return $.current.useSyncExternalStore(I,K,me)},Tt.useTransition=function(){return $.current.useTransition()},Tt.version="18.3.1",Tt}var Fm;function qh(){return Fm||(Fm=1,md.exports=zv()),md.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function Bv(){if(Um)return oa;Um=1;var s=qh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,p){var v,S={},y=null,x=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(x=f.ref);for(v in f)r.call(f,v)&&!l.hasOwnProperty(v)&&(S[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)S[v]===void 0&&(S[v]=f[v]);return{$$typeof:e,type:h,key:y,ref:x,props:S,_owner:o.current}}return oa.Fragment=t,oa.jsx=c,oa.jsxs=c,oa}var Om;function Gv(){return Om||(Om=1,pd.exports=Bv()),pd.exports}var d=Gv(),Xe=qh();const fo=ox(Xe);var kl={},gd={exports:{}},ti={},xd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function Hv(){return km||(km=1,(function(s){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var I=X-1>>>1,K=z[I];if(0<o(K,G))z[I]=G,z[X]=K,X=I;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var I=0,K=z.length,me=K>>>1;I<me;){var Q=2*(I+1)-1,he=z[Q],Se=Q+1,Te=z[Se];if(0>o(he,X))Se<K&&0>o(Te,he)?(z[I]=Te,z[Se]=X,I=Se):(z[I]=he,z[Q]=X,I=Q);else if(Se<K&&0>o(Te,X))z[I]=Te,z[Se]=X,I=Se;else break e}}return G}function o(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],p=[],v=1,S=null,y=3,x=!1,w=!1,T=!1,b=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(z){for(var G=t(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=z)r(p),G.sortIndex=G.expirationTime,e(f,G);else break;G=t(p)}}function N(z){if(T=!1,U(z),!w)if(t(f)!==null)w=!0,ce(L);else{var G=t(p);G!==null&&$(N,G.startTime-z)}}function L(z,G){w=!1,T&&(T=!1,_(P),P=-1),x=!0;var X=y;try{for(U(G),S=t(f);S!==null&&(!(S.expirationTime>G)||z&&!W());){var I=S.callback;if(typeof I=="function"){S.callback=null,y=S.priorityLevel;var K=I(S.expirationTime<=G);G=s.unstable_now(),typeof K=="function"?S.callback=K:S===t(f)&&r(f),U(G)}else r(f);S=t(f)}if(S!==null)var me=!0;else{var Q=t(p);Q!==null&&$(N,Q.startTime-G),me=!1}return me}finally{S=null,y=X,x=!1}}var F=!1,M=null,P=-1,j=5,k=-1;function W(){return!(s.unstable_now()-k<j)}function V(){if(M!==null){var z=s.unstable_now();k=z;var G=!0;try{G=M(!0,z)}finally{G?Z():(F=!1,M=null)}}else F=!1}var Z;if(typeof A=="function")Z=function(){A(V)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,J=O.port2;O.port1.onmessage=V,Z=function(){J.postMessage(null)}}else Z=function(){b(V,0)};function ce(z){M=z,F||(F=!0,Z())}function $(z,G){P=b(function(){z(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){w||x||(w=!0,ce(L))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var X=y;y=G;try{return z()}finally{y=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=y;y=z;try{return G()}finally{y=X}},s.unstable_scheduleCallback=function(z,G,X){var I=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?I+X:I):X=I,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=X+K,z={id:v++,callback:G,priorityLevel:z,startTime:X,expirationTime:K,sortIndex:-1},X>I?(z.sortIndex=X,e(p,z),t(f)===null&&z===t(p)&&(T?(_(P),P=-1):T=!0,$(N,X-I))):(z.sortIndex=K,e(f,z),w||x||(w=!0,ce(L))),z},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(z){var G=y;return function(){var X=y;y=G;try{return z.apply(this,arguments)}finally{y=X}}}})(vd)),vd}var zm;function jv(){return zm||(zm=1,xd.exports=Hv()),xd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Vv(){if(Bm)return ti;Bm=1;var s=qh(),e=jv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function y(n){return f.call(S,n)?!0:f.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function x(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,u){if(i===null||typeof i>"u"||x(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,m,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){b[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];b[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){b[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){b[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){b[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){b[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){b[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){b[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){b[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,A);b[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,A);b[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,A);b[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){b[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),b.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){b[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,u){var m=b.hasOwnProperty(i)?b[i]:null;(m!==null?m.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,m,u)&&(a=null),u||m===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):m.mustUseProperty?n[m.propertyName]=a===null?m.type===3?!1:"":a:(i=m.attributeName,u=m.attributeNamespace,a===null?n.removeAttribute(i):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),F=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),W=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),z=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,I;function K(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var me=!1;function Q(n,i){if(!n||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){u=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var m=fe.stack.split(`
`),g=u.stack.split(`
`),C=m.length-1,B=g.length-1;1<=C&&0<=B&&m[C]!==g[B];)B--;for(;1<=C&&0<=B;C--,B--)if(m[C]!==g[B]){if(C!==1||B!==1)do if(C--,B--,0>B||m[C]!==g[B]){var Y=`
`+m[C].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=C&&0<=B);break}}}finally{me=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function he(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case F:return"Portal";case j:return"Profiler";case P:return"StrictMode";case Z:return"Suspense";case O:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Te(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ft(n){var i=Ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return m.call(this)},set:function(C){u=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function re(n){n._valueTracker||(n._valueTracker=ft(n))}function je(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ge(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function it(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lt(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ct(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function St(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function at(n,i){St(n,i);var a=be(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?an(n,i.type,a):i.hasOwnProperty("defaultValue")&&an(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Lt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function an(n,i,a){(i!=="number"||it(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var wt=Array.isArray;function Nt(n,i,a,u){if(n=n.options,i){i={};for(var m=0;m<a.length;m++)i["$"+a[m]]=!0;for(a=0;a<n.length;a++)m=i.hasOwnProperty("$"+n[a].value),n[a].selected!==m&&(n[a].selected=m),m&&u&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,m=0;m<n.length;m++){if(n[m].value===a){n[m].selected=!0,u&&(n[m].defaultSelected=!0);return}i!==null||n[m].disabled||(i=n[m])}i!==null&&(i.selected=!0)}}function Wt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function un(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(wt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function ee(n,i){var a=be(i.value),u=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Jt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function At(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?At(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ut=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,m){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,m)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ve(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D=["Webkit","ms","Moz","O"];Object.keys(ct).forEach(function(n){D.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ct[i]=ct[n]})});function E(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ct.hasOwnProperty(n)&&ct[n]?(""+i).trim():i+"px"}function se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,m=E(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,m):n[a]=m}}var Me=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(n,i){if(i){if(Me[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function ge(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,Ie=null,H=null;function ye(n){if(n=Wo(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ja(i),xe(n.stateNode,n.type,i))}}function pe(n){Ie?H?H.push(n):H=[n]:Ie=n}function ke(){if(Ie){var n=Ie,i=H;if(H=Ie=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function Re(n,i){return n(i)}function De(){}var te=!1;function Fe(n,i,a){if(te)return n(i,a);te=!0;try{return Re(n,i,a)}finally{te=!1,(Ie!==null||H!==null)&&(De(),ke())}}function ve(n,i){var a=n.stateNode;if(a===null)return null;var u=Ja(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qe=!1;if(h)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){qe=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{qe=!1}function Pe(n,i,a,u,m,g,C,B,Y){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(Ae){this.onError(Ae)}}var Ye=!1,Ht=null,In=!1,wi=null,Jr={onError:function(n){Ye=!0,Ht=n}};function si(n,i,a,u,m,g,C,B,Y){Ye=!1,Ht=null,Pe.apply(Jr,arguments)}function Da(n,i,a,u,m,g,C,B,Y){if(si.apply(this,arguments),Ye){if(Ye){var fe=Ht;Ye=!1,Ht=null}else throw Error(t(198));In||(In=!0,wi=fe)}}function zi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Bi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function As(n){if(zi(n)!==n)throw Error(t(188))}function Fa(n){var i=n.alternate;if(!i){if(i=zi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var m=a.return;if(m===null)break;var g=m.alternate;if(g===null){if(u=m.return,u!==null){a=u;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===a)return As(m),n;if(g===u)return As(m),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=m,u=g;else{for(var C=!1,B=m.child;B;){if(B===a){C=!0,a=m,u=g;break}if(B===u){C=!0,u=m,a=g;break}B=B.sibling}if(!C){for(B=g.child;B;){if(B===a){C=!0,a=g,u=m;break}if(B===u){C=!0,u=g,a=m;break}B=B.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function To(n){return n=Fa(n),n!==null?es(n):null}function es(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=es(n);if(i!==null)return i;n=n.sibling}return null}var Ao=e.unstable_scheduleCallback,Co=e.unstable_cancelCallback,ts=e.unstable_shouldYield,zc=e.unstable_requestPaint,en=e.unstable_now,Ua=e.unstable_getCurrentPriorityLevel,No=e.unstable_ImmediatePriority,Oa=e.unstable_UserBlockingPriority,Cs=e.unstable_NormalPriority,ka=e.unstable_LowPriority,R=e.unstable_IdlePriority,q=null,ue=null;function ae(n){if(ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var oe=Math.clz32?Math.clz32:ze,Be=Math.log,Ze=Math.LN2;function ze(n){return n>>>=0,n===0?32:31-(Be(n)/Ze|0)|0}var He=64,Je=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,m=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var B=C&~m;B!==0?u=mt(B):(g&=C,g!==0&&(u=mt(g)))}else C=a&~m,C!==0?u=mt(C):g!==0&&(u=mt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&m)===0&&(m=u&-u,g=i&-i,m>=g||m===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-oe(i),m=1<<a,u|=n[a],i&=~m;return u}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,m=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-oe(g),B=1<<C,Y=m[C];Y===-1?((B&a)===0||(B&u)!==0)&&(m[C]=et(B,i)):Y<=i&&(n.expiredLanes|=B),g&=~B}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jt(){var n=He;return He<<=1,(He&4194240)===0&&(He=64),n}function Bt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function dn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-oe(i),n[i]=a}function tt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var m=31-oe(a),g=1<<m;i[m]=0,u[m]=-1,n[m]=-1,a&=~g}}function Sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-oe(a),m=1<<u;m&i|n[u]&i&&(n[u]|=i),a&=~m}}var st=0;function Gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bn,Sr,Ei,Hi,Rt,mn=!1,kn=[],Ot=null,Xt=null,An=null,br=new Map,Ro=new Map,Mr=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(n,i){switch(n){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(i.pointerId)}}function Po(n,i,a,u,m,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[m]},i!==null&&(i=Wo(i),i!==null&&Sr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),n)}function l0(n,i,a,u,m){switch(i){case"focusin":return Ot=Po(Ot,n,i,a,u,m),!0;case"dragenter":return Xt=Po(Xt,n,i,a,u,m),!0;case"mouseover":return An=Po(An,n,i,a,u,m),!0;case"pointerover":var g=m.pointerId;return br.set(g,Po(br.get(g)||null,n,i,a,u,m)),!0;case"gotpointercapture":return g=m.pointerId,Ro.set(g,Po(Ro.get(g)||null,n,i,a,u,m)),!0}return!1}function vf(n){var i=ns(n.target);if(i!==null){var a=zi(i);if(a!==null){if(i=a.tag,i===13){if(i=Bi(a),i!==null){n.blockedOn=i,Rt(n.priority,function(){Ei(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function za(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Le=u,a.target.dispatchEvent(u),Le=null}else return i=Wo(a),i!==null&&Sr(i),n.blockedOn=a,!1;i.shift()}return!0}function _f(n,i,a){za(n)&&a.delete(i)}function c0(){mn=!1,Ot!==null&&za(Ot)&&(Ot=null),Xt!==null&&za(Xt)&&(Xt=null),An!==null&&za(An)&&(An=null),br.forEach(_f),Ro.forEach(_f)}function Lo(n,i){n.blockedOn===i&&(n.blockedOn=null,mn||(mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,c0)))}function Io(n){function i(m){return Lo(m,n)}if(0<kn.length){Lo(kn[0],n);for(var a=1;a<kn.length;a++){var u=kn[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Ot!==null&&Lo(Ot,n),Xt!==null&&Lo(Xt,n),An!==null&&Lo(An,n),br.forEach(i),Ro.forEach(i),a=0;a<Mr.length;a++)u=Mr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Mr.length&&(a=Mr[0],a.blockedOn===null);)vf(a),a.blockedOn===null&&Mr.shift()}var Ns=N.ReactCurrentBatchConfig,Ba=!0;function u0(n,i,a,u){var m=st,g=Ns.transition;Ns.transition=null;try{st=1,Bc(n,i,a,u)}finally{st=m,Ns.transition=g}}function d0(n,i,a,u){var m=st,g=Ns.transition;Ns.transition=null;try{st=4,Bc(n,i,a,u)}finally{st=m,Ns.transition=g}}function Bc(n,i,a,u){if(Ba){var m=Gc(n,i,a,u);if(m===null)ru(n,i,u,Ga,a),xf(n,u);else if(l0(m,n,i,a,u))u.stopPropagation();else if(xf(n,u),i&4&&-1<a0.indexOf(n)){for(;m!==null;){var g=Wo(m);if(g!==null&&bn(g),g=Gc(n,i,a,u),g===null&&ru(n,i,u,Ga,a),g===m)break;m=g}m!==null&&u.stopPropagation()}else ru(n,i,u,null,a)}}var Ga=null;function Gc(n,i,a,u){if(Ga=null,n=ge(u),n=ns(n),n!==null)if(i=zi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Bi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ga=n,null}function yf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ua()){case No:return 1;case Oa:return 4;case Cs:case ka:return 16;case R:return 536870912;default:return 16}default:return 16}}var wr=null,Hc=null,Ha=null;function Sf(){if(Ha)return Ha;var n,i=Hc,a=i.length,u,m="value"in wr?wr.value:wr.textContent,g=m.length;for(n=0;n<a&&i[n]===m[n];n++);var C=a-n;for(u=1;u<=C&&i[a-u]===m[g-u];u++);return Ha=m.slice(n,1<u?1-u:void 0)}function ja(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Va(){return!0}function bf(){return!1}function oi(n){function i(a,u,m,g,C){this._reactName=a,this._targetInst=m,this.type=u,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Va:bf,this.isPropagationStopped=bf,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=oi(Rs),Do=X({},Rs,{view:0,detail:0}),h0=oi(Do),Vc,Wc,Fo,Wa=X({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fo&&(Fo&&n.type==="mousemove"?(Vc=n.screenX-Fo.screenX,Wc=n.screenY-Fo.screenY):Wc=Vc=0,Fo=n),Vc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),Mf=oi(Wa),f0=X({},Wa,{dataTransfer:0}),p0=oi(f0),m0=X({},Do,{relatedTarget:0}),Xc=oi(m0),g0=X({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=oi(g0),v0=X({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_0=oi(v0),y0=X({},Rs,{data:0}),wf=oi(y0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=M0[n])?!!i[n]:!1}function qc(){return w0}var E0=X({},Do,{key:function(n){if(n.key){var i=S0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?b0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(n){return n.type==="keypress"?ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),T0=oi(E0),A0=X({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=oi(A0),C0=X({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),N0=oi(C0),R0=X({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=oi(R0),L0=X({},Wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=oi(L0),D0=[9,13,27,32],$c=h&&"CompositionEvent"in window,Uo=null;h&&"documentMode"in document&&(Uo=document.documentMode);var F0=h&&"TextEvent"in window&&!Uo,Tf=h&&(!$c||Uo&&8<Uo&&11>=Uo),Af=" ",Cf=!1;function Nf(n,i){switch(n){case"keyup":return D0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function U0(n,i){switch(n){case"compositionend":return Rf(i);case"keypress":return i.which!==32?null:(Cf=!0,Af);case"textInput":return n=i.data,n===Af&&Cf?null:n;default:return null}}function O0(n,i){if(Ps)return n==="compositionend"||!$c&&Nf(n,i)?(n=Sf(),Ha=Hc=wr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tf&&i.locale!=="ko"?null:i.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!k0[n.type]:i==="textarea"}function Lf(n,i,a,u){pe(u),i=Za(i,"onChange"),0<i.length&&(a=new jc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Oo=null,ko=null;function z0(n){Zf(n,0)}function Xa(n){var i=Us(n);if(je(i))return n}function B0(n,i){if(n==="change")return i}var If=!1;if(h){var Yc;if(h){var Zc="oninput"in document;if(!Zc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Zc=typeof Df.oninput=="function"}Yc=Zc}else Yc=!1;If=Yc&&(!document.documentMode||9<document.documentMode)}function Ff(){Oo&&(Oo.detachEvent("onpropertychange",Uf),ko=Oo=null)}function Uf(n){if(n.propertyName==="value"&&Xa(ko)){var i=[];Lf(i,ko,n,ge(n)),Fe(z0,i)}}function G0(n,i,a){n==="focusin"?(Ff(),Oo=i,ko=a,Oo.attachEvent("onpropertychange",Uf)):n==="focusout"&&Ff()}function H0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xa(ko)}function j0(n,i){if(n==="click")return Xa(i)}function V0(n,i){if(n==="input"||n==="change")return Xa(i)}function W0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:W0;function zo(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var m=a[u];if(!f.call(i,m)||!Ti(n[m],i[m]))return!1}return!0}function Of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kf(n,i){var a=Of(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Of(a)}}function zf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?zf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Bf(){for(var n=window,i=it();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=it(n.document)}return i}function Kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function X0(n){var i=Bf(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&zf(a.ownerDocument.documentElement,a)){if(u!==null&&Kc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var m=a.textContent.length,g=Math.min(u.start,m);u=u.end===void 0?g:Math.min(u.end,m),!n.extend&&g>u&&(m=u,u=g,g=m),m=kf(a,g);var C=kf(a,u);m&&C&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var q0=h&&"documentMode"in document&&11>=document.documentMode,Ls=null,Qc=null,Bo=null,Jc=!1;function Gf(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Ls==null||Ls!==it(u)||(u=Ls,"selectionStart"in u&&Kc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bo&&zo(Bo,u)||(Bo=u,u=Za(Qc,"onSelect"),0<u.length&&(i=new jc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ls)))}function qa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Is={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},eu={},Hf={};h&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function $a(n){if(eu[n])return eu[n];if(!Is[n])return n;var i=Is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Hf)return eu[n]=i[a];return n}var jf=$a("animationend"),Vf=$a("animationiteration"),Wf=$a("animationstart"),Xf=$a("transitionend"),qf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){qf.set(n,i),l(i,[n])}for(var tu=0;tu<$f.length;tu++){var nu=$f[tu],$0=nu.toLowerCase(),Y0=nu[0].toUpperCase()+nu.slice(1);Er($0,"on"+Y0)}Er(jf,"onAnimationEnd"),Er(Vf,"onAnimationIteration"),Er(Wf,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(Xf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Yf(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Da(u,i,void 0,n),n.currentTarget=null}function Zf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],m=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var C=u.length-1;0<=C;C--){var B=u[C],Y=B.instance,fe=B.currentTarget;if(B=B.listener,Y!==g&&m.isPropagationStopped())break e;Yf(m,B,fe),g=Y}else for(C=0;C<u.length;C++){if(B=u[C],Y=B.instance,fe=B.currentTarget,B=B.listener,Y!==g&&m.isPropagationStopped())break e;Yf(m,B,fe),g=Y}}}if(In)throw n=wi,In=!1,wi=null,n}function Yt(n,i){var a=i[uu];a===void 0&&(a=i[uu]=new Set);var u=n+"__bubble";a.has(u)||(Kf(i,n,2,!1),a.add(u))}function iu(n,i,a){var u=0;i&&(u|=4),Kf(a,n,u,i)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[Ya]){n[Ya]=!0,r.forEach(function(a){a!=="selectionchange"&&(Z0.has(a)||iu(a,!1,n),iu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ya]||(i[Ya]=!0,iu("selectionchange",!1,i))}}function Kf(n,i,a,u){switch(yf(i)){case 1:var m=u0;break;case 4:m=d0;break;default:m=Bc}a=m.bind(null,i,a,n),m=void 0,!qe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),u?m!==void 0?n.addEventListener(i,a,{capture:!0,passive:m}):n.addEventListener(i,a,!0):m!==void 0?n.addEventListener(i,a,{passive:m}):n.addEventListener(i,a,!1)}function ru(n,i,a,u,m){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var B=u.stateNode.containerInfo;if(B===m||B.nodeType===8&&B.parentNode===m)break;if(C===4)for(C=u.return;C!==null;){var Y=C.tag;if((Y===3||Y===4)&&(Y=C.stateNode.containerInfo,Y===m||Y.nodeType===8&&Y.parentNode===m))return;C=C.return}for(;B!==null;){if(C=ns(B),C===null)return;if(Y=C.tag,Y===5||Y===6){u=g=C;continue e}B=B.parentNode}}u=u.return}Fe(function(){var fe=g,Ae=ge(a),Ce=[];e:{var Ee=qf.get(n);if(Ee!==void 0){var $e=jc,nt=n;switch(n){case"keypress":if(ja(a)===0)break e;case"keydown":case"keyup":$e=T0;break;case"focusin":nt="focus",$e=Xc;break;case"focusout":nt="blur",$e=Xc;break;case"beforeblur":case"afterblur":$e=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=N0;break;case jf:case Vf:case Wf:$e=x0;break;case Xf:$e=P0;break;case"scroll":$e=h0;break;case"wheel":$e=I0;break;case"copy":case"cut":case"paste":$e=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Ef}var rt=(i&4)!==0,gn=!rt&&n==="scroll",le=rt?Ee!==null?Ee+"Capture":null:Ee;rt=[];for(var ie=fe,de;ie!==null;){de=ie;var Oe=de.stateNode;if(de.tag===5&&Oe!==null&&(de=Oe,le!==null&&(Oe=ve(ie,le),Oe!=null&&rt.push(jo(ie,Oe,de)))),gn)break;ie=ie.return}0<rt.length&&(Ee=new $e(Ee,nt,null,a,Ae),Ce.push({event:Ee,listeners:rt}))}}if((i&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Ee&&a!==Le&&(nt=a.relatedTarget||a.fromElement)&&(ns(nt)||nt[ir]))break e;if(($e||Ee)&&(Ee=Ae.window===Ae?Ae:(Ee=Ae.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,$e?(nt=a.relatedTarget||a.toElement,$e=fe,nt=nt?ns(nt):null,nt!==null&&(gn=zi(nt),nt!==gn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):($e=null,nt=fe),$e!==nt)){if(rt=Mf,Oe="onMouseLeave",le="onMouseEnter",ie="mouse",(n==="pointerout"||n==="pointerover")&&(rt=Ef,Oe="onPointerLeave",le="onPointerEnter",ie="pointer"),gn=$e==null?Ee:Us($e),de=nt==null?Ee:Us(nt),Ee=new rt(Oe,ie+"leave",$e,a,Ae),Ee.target=gn,Ee.relatedTarget=de,Oe=null,ns(Ae)===fe&&(rt=new rt(le,ie+"enter",nt,a,Ae),rt.target=de,rt.relatedTarget=gn,Oe=rt),gn=Oe,$e&&nt)t:{for(rt=$e,le=nt,ie=0,de=rt;de;de=Ds(de))ie++;for(de=0,Oe=le;Oe;Oe=Ds(Oe))de++;for(;0<ie-de;)rt=Ds(rt),ie--;for(;0<de-ie;)le=Ds(le),de--;for(;ie--;){if(rt===le||le!==null&&rt===le.alternate)break t;rt=Ds(rt),le=Ds(le)}rt=null}else rt=null;$e!==null&&Qf(Ce,Ee,$e,rt,!1),nt!==null&&gn!==null&&Qf(Ce,gn,nt,rt,!0)}}e:{if(Ee=fe?Us(fe):window,$e=Ee.nodeName&&Ee.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Ee.type==="file")var ot=B0;else if(Pf(Ee))if(If)ot=V0;else{ot=H0;var dt=G0}else($e=Ee.nodeName)&&$e.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(ot=j0);if(ot&&(ot=ot(n,fe))){Lf(Ce,ot,a,Ae);break e}dt&&dt(n,Ee,fe),n==="focusout"&&(dt=Ee._wrapperState)&&dt.controlled&&Ee.type==="number"&&an(Ee,"number",Ee.value)}switch(dt=fe?Us(fe):window,n){case"focusin":(Pf(dt)||dt.contentEditable==="true")&&(Ls=dt,Qc=fe,Bo=null);break;case"focusout":Bo=Qc=Ls=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Gf(Ce,a,Ae);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":Gf(Ce,a,Ae)}var ht;if($c)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ps?Nf(n,a)&&(xt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Tf&&a.locale!=="ko"&&(Ps||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ps&&(ht=Sf()):(wr=Ae,Hc="value"in wr?wr.value:wr.textContent,Ps=!0)),dt=Za(fe,xt),0<dt.length&&(xt=new wf(xt,n,null,a,Ae),Ce.push({event:xt,listeners:dt}),ht?xt.data=ht:(ht=Rf(a),ht!==null&&(xt.data=ht)))),(ht=F0?U0(n,a):O0(n,a))&&(fe=Za(fe,"onBeforeInput"),0<fe.length&&(Ae=new wf("onBeforeInput","beforeinput",null,a,Ae),Ce.push({event:Ae,listeners:fe}),Ae.data=ht))}Zf(Ce,i)})}function jo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Za(n,i){for(var a=i+"Capture",u=[];n!==null;){var m=n,g=m.stateNode;m.tag===5&&g!==null&&(m=g,g=ve(n,a),g!=null&&u.unshift(jo(n,g,m)),g=ve(n,i),g!=null&&u.push(jo(n,g,m))),n=n.return}return u}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qf(n,i,a,u,m){for(var g=i._reactName,C=[];a!==null&&a!==u;){var B=a,Y=B.alternate,fe=B.stateNode;if(Y!==null&&Y===u)break;B.tag===5&&fe!==null&&(B=fe,m?(Y=ve(a,g),Y!=null&&C.unshift(jo(a,Y,B))):m||(Y=ve(a,g),Y!=null&&C.push(jo(a,Y,B)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var K0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(K0,`
`).replace(Q0,"")}function Ka(n,i,a){if(i=Jf(i),Jf(n)!==i&&a)throw Error(t(425))}function Qa(){}var su=null,ou=null;function au(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(tv)}:lu;function tv(n){setTimeout(function(){throw n})}function cu(n,i){var a=i,u=0;do{var m=a.nextSibling;if(n.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(u===0){n.removeChild(m),Io(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=m}while(a);Io(i)}function Tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),ji="__reactFiber$"+Fs,Vo="__reactProps$"+Fs,ir="__reactContainer$"+Fs,uu="__reactEvents$"+Fs,nv="__reactListeners$"+Fs,iv="__reactHandles$"+Fs;function ns(n){var i=n[ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ir]||a[ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[ji])return a;n=tp(n)}return i}n=a,a=n.parentNode}return null}function Wo(n){return n=n[ji]||n[ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ja(n){return n[Vo]||null}var du=[],Os=-1;function Ar(n){return{current:n}}function Zt(n){0>Os||(n.current=du[Os],du[Os]=null,Os--)}function $t(n,i){Os++,du[Os]=n.current,n.current=i}var Cr={},zn=Ar(Cr),Zn=Ar(!1),is=Cr;function ks(n,i){var a=n.type.contextTypes;if(!a)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var m={},g;for(g in a)m[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=m),m}function Kn(n){return n=n.childContextTypes,n!=null}function el(){Zt(Zn),Zt(zn)}function np(n,i,a){if(zn.current!==Cr)throw Error(t(168));$t(zn,i),$t(Zn,a)}function ip(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var m in u)if(!(m in i))throw Error(t(108,Te(n)||"Unknown",m));return X({},a,u)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,is=zn.current,$t(zn,n),$t(Zn,Zn.current),!0}function rp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ip(n,i,is),u.__reactInternalMemoizedMergedChildContext=n,Zt(Zn),Zt(zn),$t(zn,n)):Zt(Zn),$t(Zn,a)}var rr=null,nl=!1,hu=!1;function sp(n){rr===null?rr=[n]:rr.push(n)}function rv(n){nl=!0,sp(n)}function Nr(){if(!hu&&rr!==null){hu=!0;var n=0,i=st;try{var a=rr;for(st=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}rr=null,nl=!1}catch(m){throw rr!==null&&(rr=rr.slice(n+1)),Ao(No,Nr),m}finally{st=i,hu=!1}}return null}var zs=[],Bs=0,il=null,rl=0,hi=[],fi=0,rs=null,sr=1,or="";function ss(n,i){zs[Bs++]=rl,zs[Bs++]=il,il=n,rl=i}function op(n,i,a){hi[fi++]=sr,hi[fi++]=or,hi[fi++]=rs,rs=n;var u=sr;n=or;var m=32-oe(u)-1;u&=~(1<<m),a+=1;var g=32-oe(i)+m;if(30<g){var C=m-m%5;g=(u&(1<<C)-1).toString(32),u>>=C,m-=C,sr=1<<32-oe(i)+m|a<<m|u,or=g+n}else sr=1<<g|a<<m|u,or=n}function fu(n){n.return!==null&&(ss(n,1),op(n,1,0))}function pu(n){for(;n===il;)il=zs[--Bs],zs[Bs]=null,rl=zs[--Bs],zs[Bs]=null;for(;n===rs;)rs=hi[--fi],hi[fi]=null,or=hi[--fi],hi[fi]=null,sr=hi[--fi],hi[fi]=null}var ai=null,li=null,nn=!1,Ai=null;function ap(n,i){var a=xi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function lp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ai=n,li=Tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ai=n,li=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:sr,overflow:or}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=xi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ai=n,li=null,!0):!1;default:return!1}}function mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gu(n){if(nn){var i=li;if(i){var a=i;if(!lp(n,i)){if(mu(n))throw Error(t(418));i=Tr(a.nextSibling);var u=ai;i&&lp(n,i)?ap(u,a):(n.flags=n.flags&-4097|2,nn=!1,ai=n)}}else{if(mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,nn=!1,ai=n}}}function cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ai=n}function sl(n){if(n!==ai)return!1;if(!nn)return cp(n),nn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!au(n.type,n.memoizedProps)),i&&(i=li)){if(mu(n))throw up(),Error(t(418));for(;i;)ap(n,i),i=Tr(i.nextSibling)}if(cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){li=Tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}li=null}}else li=ai?Tr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=li;n;)n=Tr(n.nextSibling)}function Gs(){li=ai=null,nn=!1}function xu(n){Ai===null?Ai=[n]:Ai.push(n)}var sv=N.ReactCurrentBatchConfig;function Xo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var m=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var B=m.refs;C===null?delete B[g]:B[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ol(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function dp(n){var i=n._init;return i(n._payload)}function hp(n){function i(le,ie){if(n){var de=le.deletions;de===null?(le.deletions=[ie],le.flags|=16):de.push(ie)}}function a(le,ie){if(!n)return null;for(;ie!==null;)i(le,ie),ie=ie.sibling;return null}function u(le,ie){for(le=new Map;ie!==null;)ie.key!==null?le.set(ie.key,ie):le.set(ie.index,ie),ie=ie.sibling;return le}function m(le,ie){return le=Or(le,ie),le.index=0,le.sibling=null,le}function g(le,ie,de){return le.index=de,n?(de=le.alternate,de!==null?(de=de.index,de<ie?(le.flags|=2,ie):de):(le.flags|=2,ie)):(le.flags|=1048576,ie)}function C(le){return n&&le.alternate===null&&(le.flags|=2),le}function B(le,ie,de,Oe){return ie===null||ie.tag!==6?(ie=ld(de,le.mode,Oe),ie.return=le,ie):(ie=m(ie,de),ie.return=le,ie)}function Y(le,ie,de,Oe){var ot=de.type;return ot===M?Ae(le,ie,de.props.children,Oe,de.key):ie!==null&&(ie.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ce&&dp(ot)===ie.type)?(Oe=m(ie,de.props),Oe.ref=Xo(le,ie,de),Oe.return=le,Oe):(Oe=Rl(de.type,de.key,de.props,null,le.mode,Oe),Oe.ref=Xo(le,ie,de),Oe.return=le,Oe)}function fe(le,ie,de,Oe){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==de.containerInfo||ie.stateNode.implementation!==de.implementation?(ie=cd(de,le.mode,Oe),ie.return=le,ie):(ie=m(ie,de.children||[]),ie.return=le,ie)}function Ae(le,ie,de,Oe,ot){return ie===null||ie.tag!==7?(ie=fs(de,le.mode,Oe,ot),ie.return=le,ie):(ie=m(ie,de),ie.return=le,ie)}function Ce(le,ie,de){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return ie=ld(""+ie,le.mode,de),ie.return=le,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case L:return de=Rl(ie.type,ie.key,ie.props,null,le.mode,de),de.ref=Xo(le,null,ie),de.return=le,de;case F:return ie=cd(ie,le.mode,de),ie.return=le,ie;case ce:var Oe=ie._init;return Ce(le,Oe(ie._payload),de)}if(wt(ie)||G(ie))return ie=fs(ie,le.mode,de,null),ie.return=le,ie;ol(le,ie)}return null}function Ee(le,ie,de,Oe){var ot=ie!==null?ie.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ot!==null?null:B(le,ie,""+de,Oe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case L:return de.key===ot?Y(le,ie,de,Oe):null;case F:return de.key===ot?fe(le,ie,de,Oe):null;case ce:return ot=de._init,Ee(le,ie,ot(de._payload),Oe)}if(wt(de)||G(de))return ot!==null?null:Ae(le,ie,de,Oe,null);ol(le,de)}return null}function $e(le,ie,de,Oe,ot){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return le=le.get(de)||null,B(ie,le,""+Oe,ot);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case L:return le=le.get(Oe.key===null?de:Oe.key)||null,Y(ie,le,Oe,ot);case F:return le=le.get(Oe.key===null?de:Oe.key)||null,fe(ie,le,Oe,ot);case ce:var dt=Oe._init;return $e(le,ie,de,dt(Oe._payload),ot)}if(wt(Oe)||G(Oe))return le=le.get(de)||null,Ae(ie,le,Oe,ot,null);ol(ie,Oe)}return null}function nt(le,ie,de,Oe){for(var ot=null,dt=null,ht=ie,xt=ie=0,Rn=null;ht!==null&&xt<de.length;xt++){ht.index>xt?(Rn=ht,ht=null):Rn=ht.sibling;var kt=Ee(le,ht,de[xt],Oe);if(kt===null){ht===null&&(ht=Rn);break}n&&ht&&kt.alternate===null&&i(le,ht),ie=g(kt,ie,xt),dt===null?ot=kt:dt.sibling=kt,dt=kt,ht=Rn}if(xt===de.length)return a(le,ht),nn&&ss(le,xt),ot;if(ht===null){for(;xt<de.length;xt++)ht=Ce(le,de[xt],Oe),ht!==null&&(ie=g(ht,ie,xt),dt===null?ot=ht:dt.sibling=ht,dt=ht);return nn&&ss(le,xt),ot}for(ht=u(le,ht);xt<de.length;xt++)Rn=$e(ht,le,xt,de[xt],Oe),Rn!==null&&(n&&Rn.alternate!==null&&ht.delete(Rn.key===null?xt:Rn.key),ie=g(Rn,ie,xt),dt===null?ot=Rn:dt.sibling=Rn,dt=Rn);return n&&ht.forEach(function(kr){return i(le,kr)}),nn&&ss(le,xt),ot}function rt(le,ie,de,Oe){var ot=G(de);if(typeof ot!="function")throw Error(t(150));if(de=ot.call(de),de==null)throw Error(t(151));for(var dt=ot=null,ht=ie,xt=ie=0,Rn=null,kt=de.next();ht!==null&&!kt.done;xt++,kt=de.next()){ht.index>xt?(Rn=ht,ht=null):Rn=ht.sibling;var kr=Ee(le,ht,kt.value,Oe);if(kr===null){ht===null&&(ht=Rn);break}n&&ht&&kr.alternate===null&&i(le,ht),ie=g(kr,ie,xt),dt===null?ot=kr:dt.sibling=kr,dt=kr,ht=Rn}if(kt.done)return a(le,ht),nn&&ss(le,xt),ot;if(ht===null){for(;!kt.done;xt++,kt=de.next())kt=Ce(le,kt.value,Oe),kt!==null&&(ie=g(kt,ie,xt),dt===null?ot=kt:dt.sibling=kt,dt=kt);return nn&&ss(le,xt),ot}for(ht=u(le,ht);!kt.done;xt++,kt=de.next())kt=$e(ht,le,xt,kt.value,Oe),kt!==null&&(n&&kt.alternate!==null&&ht.delete(kt.key===null?xt:kt.key),ie=g(kt,ie,xt),dt===null?ot=kt:dt.sibling=kt,dt=kt);return n&&ht.forEach(function(kv){return i(le,kv)}),nn&&ss(le,xt),ot}function gn(le,ie,de,Oe){if(typeof de=="object"&&de!==null&&de.type===M&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case L:e:{for(var ot=de.key,dt=ie;dt!==null;){if(dt.key===ot){if(ot=de.type,ot===M){if(dt.tag===7){a(le,dt.sibling),ie=m(dt,de.props.children),ie.return=le,le=ie;break e}}else if(dt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ce&&dp(ot)===dt.type){a(le,dt.sibling),ie=m(dt,de.props),ie.ref=Xo(le,dt,de),ie.return=le,le=ie;break e}a(le,dt);break}else i(le,dt);dt=dt.sibling}de.type===M?(ie=fs(de.props.children,le.mode,Oe,de.key),ie.return=le,le=ie):(Oe=Rl(de.type,de.key,de.props,null,le.mode,Oe),Oe.ref=Xo(le,ie,de),Oe.return=le,le=Oe)}return C(le);case F:e:{for(dt=de.key;ie!==null;){if(ie.key===dt)if(ie.tag===4&&ie.stateNode.containerInfo===de.containerInfo&&ie.stateNode.implementation===de.implementation){a(le,ie.sibling),ie=m(ie,de.children||[]),ie.return=le,le=ie;break e}else{a(le,ie);break}else i(le,ie);ie=ie.sibling}ie=cd(de,le.mode,Oe),ie.return=le,le=ie}return C(le);case ce:return dt=de._init,gn(le,ie,dt(de._payload),Oe)}if(wt(de))return nt(le,ie,de,Oe);if(G(de))return rt(le,ie,de,Oe);ol(le,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,ie!==null&&ie.tag===6?(a(le,ie.sibling),ie=m(ie,de),ie.return=le,le=ie):(a(le,ie),ie=ld(de,le.mode,Oe),ie.return=le,le=ie),C(le)):a(le,ie)}return gn}var Hs=hp(!0),fp=hp(!1),al=Ar(null),ll=null,js=null,vu=null;function _u(){vu=js=ll=null}function yu(n){var i=al.current;Zt(al),n._currentValue=i}function Su(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Vs(n,i){ll=n,vu=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qn=!0),n.firstContext=null)}function pi(n){var i=n._currentValue;if(vu!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(ll===null)throw Error(t(308));js=n,ll.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var os=null;function bu(n){os===null?os=[n]:os.push(n)}function pp(n,i,a,u){var m=i.interleaved;return m===null?(a.next=a,bu(i)):(a.next=m.next,m.next=a),i.interleaved=a,ar(n,u)}function ar(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Mu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function lr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var m=u.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),u.pending=i,ar(n,a)}return m=u.interleaved,m===null?(i.next=i,bu(u)):(i.next=m.next,m.next=i),u.interleaved=i,ar(n,a)}function cl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Sn(n,a)}}function gp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var m=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?m=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?m=g=i:g=g.next=i}else m=g=i;a={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ul(n,i,a,u){var m=n.updateQueue;Rr=!1;var g=m.firstBaseUpdate,C=m.lastBaseUpdate,B=m.shared.pending;if(B!==null){m.shared.pending=null;var Y=B,fe=Y.next;Y.next=null,C===null?g=fe:C.next=fe,C=Y;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,B=Ae.lastBaseUpdate,B!==C&&(B===null?Ae.firstBaseUpdate=fe:B.next=fe,Ae.lastBaseUpdate=Y))}if(g!==null){var Ce=m.baseState;C=0,Ae=fe=Y=null,B=g;do{var Ee=B.lane,$e=B.eventTime;if((u&Ee)===Ee){Ae!==null&&(Ae=Ae.next={eventTime:$e,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var nt=n,rt=B;switch(Ee=i,$e=a,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Ce=nt.call($e,Ce,Ee);break e}Ce=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Ee=typeof nt=="function"?nt.call($e,Ce,Ee):nt,Ee==null)break e;Ce=X({},Ce,Ee);break e;case 2:Rr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ee=m.effects,Ee===null?m.effects=[B]:Ee.push(B))}else $e={eventTime:$e,lane:Ee,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ae===null?(fe=Ae=$e,Y=Ce):Ae=Ae.next=$e,C|=Ee;if(B=B.next,B===null){if(B=m.shared.pending,B===null)break;Ee=B,B=Ee.next,Ee.next=null,m.lastBaseUpdate=Ee,m.shared.pending=null}}while(!0);if(Ae===null&&(Y=Ce),m.baseState=Y,m.firstBaseUpdate=fe,m.lastBaseUpdate=Ae,i=m.shared.interleaved,i!==null){m=i;do C|=m.lane,m=m.next;while(m!==i)}else g===null&&(m.shared.lanes=0);cs|=C,n.lanes=C,n.memoizedState=Ce}}function xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],m=u.callback;if(m!==null){if(u.callback=null,u=a,typeof m!="function")throw Error(t(191,m));m.call(u)}}}var qo={},Vi=Ar(qo),$o=Ar(qo),Yo=Ar(qo);function as(n){if(n===qo)throw Error(t(174));return n}function wu(n,i){switch($t(Yo,i),$t($o,n),$t(Vi,qo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pt(i,n)}Zt(Vi),$t(Vi,i)}function Ws(){Zt(Vi),Zt($o),Zt(Yo)}function vp(n){as(Yo.current);var i=as(Vi.current),a=pt(i,n.type);i!==a&&($t($o,n),$t(Vi,a))}function Eu(n){$o.current===n&&(Zt(Vi),Zt($o))}var ln=Ar(0);function dl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function Au(){for(var n=0;n<Tu.length;n++)Tu[n]._workInProgressVersionPrimary=null;Tu.length=0}var hl=N.ReactCurrentDispatcher,Cu=N.ReactCurrentBatchConfig,ls=0,cn=null,Mn=null,Cn=null,fl=!1,Zo=!1,Ko=0,ov=0;function Bn(){throw Error(t(321))}function Nu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ti(n[a],i[a]))return!1;return!0}function Ru(n,i,a,u,m,g){if(ls=g,cn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hl.current=n===null||n.memoizedState===null?uv:dv,n=a(u,m),Zo){g=0;do{if(Zo=!1,Ko=0,25<=g)throw Error(t(301));g+=1,Cn=Mn=null,i.updateQueue=null,hl.current=hv,n=a(u,m)}while(Zo)}if(hl.current=gl,i=Mn!==null&&Mn.next!==null,ls=0,Cn=Mn=cn=null,fl=!1,i)throw Error(t(300));return n}function Pu(){var n=Ko!==0;return Ko=0,n}function Wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?cn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function mi(){if(Mn===null){var n=cn.alternate;n=n!==null?n.memoizedState:null}else n=Mn.next;var i=Cn===null?cn.memoizedState:Cn.next;if(i!==null)Cn=i,Mn=n;else{if(n===null)throw Error(t(310));Mn=n,n={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Cn===null?cn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Qo(n,i){return typeof i=="function"?i(n):i}function Lu(n){var i=mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Mn,m=u.baseQueue,g=a.pending;if(g!==null){if(m!==null){var C=m.next;m.next=g.next,g.next=C}u.baseQueue=m=g,a.pending=null}if(m!==null){g=m.next,u=u.baseState;var B=C=null,Y=null,fe=g;do{var Ae=fe.lane;if((ls&Ae)===Ae)Y!==null&&(Y=Y.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ce={lane:Ae,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};Y===null?(B=Y=Ce,C=u):Y=Y.next=Ce,cn.lanes|=Ae,cs|=Ae}fe=fe.next}while(fe!==null&&fe!==g);Y===null?C=u:Y.next=B,Ti(u,i.memoizedState)||(Qn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=Y,a.lastRenderedState=u}if(n=a.interleaved,n!==null){m=n;do g=m.lane,cn.lanes|=g,cs|=g,m=m.next;while(m!==n)}else m===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Iu(n){var i=mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,m=a.pending,g=i.memoizedState;if(m!==null){a.pending=null;var C=m=m.next;do g=n(g,C.action),C=C.next;while(C!==m);Ti(g,i.memoizedState)||(Qn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function _p(){}function yp(n,i){var a=cn,u=mi(),m=i(),g=!Ti(u.memoizedState,m);if(g&&(u.memoizedState=m,Qn=!0),u=u.queue,Du(Mp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,Jo(9,bp.bind(null,a,u,m,i),void 0,null),Nn===null)throw Error(t(349));(ls&30)!==0||Sp(a,i,m)}return m}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function bp(n,i,a,u){i.value=a,i.getSnapshot=u,wp(i)&&Ep(n)}function Mp(n,i,a){return a(function(){wp(i)&&Ep(n)})}function wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ti(n,a)}catch{return!0}}function Ep(n){var i=ar(n,1);i!==null&&Pi(i,n,1,-1)}function Tp(n){var i=Wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:n},i.queue=n,n=n.dispatch=cv.bind(null,cn,n),[i.memoizedState,n]}function Jo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Ap(){return mi().memoizedState}function pl(n,i,a,u){var m=Wi();cn.flags|=n,m.memoizedState=Jo(1|i,a,void 0,u===void 0?null:u)}function ml(n,i,a,u){var m=mi();u=u===void 0?null:u;var g=void 0;if(Mn!==null){var C=Mn.memoizedState;if(g=C.destroy,u!==null&&Nu(u,C.deps)){m.memoizedState=Jo(i,a,g,u);return}}cn.flags|=n,m.memoizedState=Jo(1|i,a,g,u)}function Cp(n,i){return pl(8390656,8,n,i)}function Du(n,i){return ml(2048,8,n,i)}function Np(n,i){return ml(4,2,n,i)}function Rp(n,i){return ml(4,4,n,i)}function Pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lp(n,i,a){return a=a!=null?a.concat([n]):null,ml(4,4,Pp.bind(null,i,n),a)}function Fu(){}function Ip(n,i){var a=mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Dp(n,i){var a=mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Fp(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=a):(Ti(a,i)||(a=jt(),cn.lanes|=a,cs|=a,n.baseState=!0),i)}function av(n,i){var a=st;st=a!==0&&4>a?a:4,n(!0);var u=Cu.transition;Cu.transition={};try{n(!1),i()}finally{st=a,Cu.transition=u}}function Up(){return mi().memoizedState}function lv(n,i,a){var u=Fr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Op(n))kp(i,a);else if(a=pp(n,i,a,u),a!==null){var m=qn();Pi(a,n,u,m),zp(a,i,u)}}function cv(n,i,a){var u=Fr(n),m={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Op(n))kp(i,m);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,B=g(C,a);if(m.hasEagerState=!0,m.eagerState=B,Ti(B,C)){var Y=i.interleaved;Y===null?(m.next=m,bu(i)):(m.next=Y.next,Y.next=m),i.interleaved=m;return}}catch{}finally{}a=pp(n,i,m,u),a!==null&&(m=qn(),Pi(a,n,u,m),zp(a,i,u))}}function Op(n){var i=n.alternate;return n===cn||i!==null&&i===cn}function kp(n,i){Zo=fl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function zp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Sn(n,a)}}var gl={readContext:pi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},uv={readContext:pi,useCallback:function(n,i){return Wi().memoizedState=[n,i===void 0?null:i],n},useContext:pi,useEffect:Cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,pl(4194308,4,Pp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return pl(4194308,4,n,i)},useInsertionEffect:function(n,i){return pl(4,2,n,i)},useMemo:function(n,i){var a=Wi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Wi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=lv.bind(null,cn,n),[u.memoizedState,n]},useRef:function(n){var i=Wi();return n={current:n},i.memoizedState=n},useState:Tp,useDebugValue:Fu,useDeferredValue:function(n){return Wi().memoizedState=n},useTransition:function(){var n=Tp(!1),i=n[0];return n=av.bind(null,n[1]),Wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=cn,m=Wi();if(nn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Nn===null)throw Error(t(349));(ls&30)!==0||Sp(u,i,a)}m.memoizedState=a;var g={value:a,getSnapshot:i};return m.queue=g,Cp(Mp.bind(null,u,g,n),[n]),u.flags|=2048,Jo(9,bp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Wi(),i=Nn.identifierPrefix;if(nn){var a=or,u=sr;a=(u&~(1<<32-oe(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ko++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ov++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},dv={readContext:pi,useCallback:Ip,useContext:pi,useEffect:Du,useImperativeHandle:Lp,useInsertionEffect:Np,useLayoutEffect:Rp,useMemo:Dp,useReducer:Lu,useRef:Ap,useState:function(){return Lu(Qo)},useDebugValue:Fu,useDeferredValue:function(n){var i=mi();return Fp(i,Mn.memoizedState,n)},useTransition:function(){var n=Lu(Qo)[0],i=mi().memoizedState;return[n,i]},useMutableSource:_p,useSyncExternalStore:yp,useId:Up,unstable_isNewReconciler:!1},hv={readContext:pi,useCallback:Ip,useContext:pi,useEffect:Du,useImperativeHandle:Lp,useInsertionEffect:Np,useLayoutEffect:Rp,useMemo:Dp,useReducer:Iu,useRef:Ap,useState:function(){return Iu(Qo)},useDebugValue:Fu,useDeferredValue:function(n){var i=mi();return Mn===null?i.memoizedState=n:Fp(i,Mn.memoizedState,n)},useTransition:function(){var n=Iu(Qo)[0],i=mi().memoizedState;return[n,i]},useMutableSource:_p,useSyncExternalStore:yp,useId:Up,unstable_isNewReconciler:!1};function Ci(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Uu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var xl={isMounted:function(n){return(n=n._reactInternals)?zi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=qn(),m=Fr(n),g=lr(u,m);g.payload=i,a!=null&&(g.callback=a),i=Pr(n,g,m),i!==null&&(Pi(i,n,m,u),cl(i,n,m))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=qn(),m=Fr(n),g=lr(u,m);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Pr(n,g,m),i!==null&&(Pi(i,n,m,u),cl(i,n,m))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qn(),u=Fr(n),m=lr(a,u);m.tag=2,i!=null&&(m.callback=i),i=Pr(n,m,u),i!==null&&(Pi(i,n,u,a),cl(i,n,u))}};function Bp(n,i,a,u,m,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,C):i.prototype&&i.prototype.isPureReactComponent?!zo(a,u)||!zo(m,g):!0}function Gp(n,i,a){var u=!1,m=Cr,g=i.contextType;return typeof g=="object"&&g!==null?g=pi(g):(m=Kn(i)?is:zn.current,u=i.contextTypes,g=(u=u!=null)?ks(n,m):Cr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=g),i}function Hp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&xl.enqueueReplaceState(i,i.state,null)}function Ou(n,i,a,u){var m=n.stateNode;m.props=a,m.state=n.memoizedState,m.refs={},Mu(n);var g=i.contextType;typeof g=="object"&&g!==null?m.context=pi(g):(g=Kn(i)?is:zn.current,m.context=ks(n,g)),m.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Uu(n,i,g,a),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(i=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),i!==m.state&&xl.enqueueReplaceState(m,m.state,null),ul(n,a,m,u),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",u=i;do a+=he(u),u=u.return;while(u);var m=a}catch(g){m=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:m,digest:null}}function ku(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function zu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function jp(n,i,a){a=lr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){wl||(wl=!0,ed=u),zu(n,i)},a}function Vp(n,i,a){a=lr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var m=i.value;a.payload=function(){return u(m)},a.callback=function(){zu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){zu(n,i),typeof u!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function Wp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new fv;var m=new Set;u.set(i,m)}else m=u.get(i),m===void 0&&(m=new Set,u.set(i,m));m.has(a)||(m.add(a),n=Av.bind(null,n,i,a),i.then(n,n))}function Xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,a,u,m){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=lr(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var pv=N.ReactCurrentOwner,Qn=!1;function Xn(n,i,a,u){i.child=n===null?fp(i,null,a,u):Hs(i,n.child,a,u)}function $p(n,i,a,u,m){a=a.render;var g=i.ref;return Vs(i,m),u=Ru(n,i,a,u,g,m),a=Pu(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,cr(n,i,m)):(nn&&a&&fu(i),i.flags|=1,Xn(n,i,u,m),i.child)}function Yp(n,i,a,u,m){if(n===null){var g=a.type;return typeof g=="function"&&!ad(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Zp(n,i,g,u,m)):(n=Rl(a.type,null,u,i,i.mode,m),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&m)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(C,u)&&n.ref===i.ref)return cr(n,i,m)}return i.flags|=1,n=Or(g,u),n.ref=i.ref,n.return=i,i.child=n}function Zp(n,i,a,u,m){if(n!==null){var g=n.memoizedProps;if(zo(g,u)&&n.ref===i.ref)if(Qn=!1,i.pendingProps=u=g,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Qn=!0);else return i.lanes=n.lanes,cr(n,i,m)}return Bu(n,i,a,u,m)}function Kp(n,i,a){var u=i.pendingProps,m=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t($s,ci),ci|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$t($s,ci),ci|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,$t($s,ci),ci|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,$t($s,ci),ci|=u;return Xn(n,i,m,a),i.child}function Qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Bu(n,i,a,u,m){var g=Kn(a)?is:zn.current;return g=ks(i,g),Vs(i,m),a=Ru(n,i,a,u,g,m),u=Pu(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,cr(n,i,m)):(nn&&u&&fu(i),i.flags|=1,Xn(n,i,a,m),i.child)}function Jp(n,i,a,u,m){if(Kn(a)){var g=!0;tl(i)}else g=!1;if(Vs(i,m),i.stateNode===null)_l(n,i),Gp(i,a,u),Ou(i,a,u,m),u=!0;else if(n===null){var C=i.stateNode,B=i.memoizedProps;C.props=B;var Y=C.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=pi(fe):(fe=Kn(a)?is:zn.current,fe=ks(i,fe));var Ae=a.getDerivedStateFromProps,Ce=typeof Ae=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ce||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==u||Y!==fe)&&Hp(i,C,u,fe),Rr=!1;var Ee=i.memoizedState;C.state=Ee,ul(i,u,C,m),Y=i.memoizedState,B!==u||Ee!==Y||Zn.current||Rr?(typeof Ae=="function"&&(Uu(i,a,Ae,u),Y=i.memoizedState),(B=Rr||Bp(i,a,B,u,Ee,Y,fe))?(Ce||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Y),C.props=u,C.state=Y,C.context=fe,u=B):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,mp(n,i),B=i.memoizedProps,fe=i.type===i.elementType?B:Ci(i.type,B),C.props=fe,Ce=i.pendingProps,Ee=C.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=pi(Y):(Y=Kn(a)?is:zn.current,Y=ks(i,Y));var $e=a.getDerivedStateFromProps;(Ae=typeof $e=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==Ce||Ee!==Y)&&Hp(i,C,u,Y),Rr=!1,Ee=i.memoizedState,C.state=Ee,ul(i,u,C,m);var nt=i.memoizedState;B!==Ce||Ee!==nt||Zn.current||Rr?(typeof $e=="function"&&(Uu(i,a,$e,u),nt=i.memoizedState),(fe=Rr||Bp(i,a,fe,u,Ee,nt,Y)||!1)?(Ae||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,nt,Y),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,nt,Y)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=nt),C.props=u,C.state=nt,C.context=Y,u=fe):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),u=!1)}return Gu(n,i,a,u,g,m)}function Gu(n,i,a,u,m,g){Qp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return m&&rp(i,a,!1),cr(n,i,g);u=i.stateNode,pv.current=i;var B=C&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Hs(i,n.child,null,g),i.child=Hs(i,null,B,g)):Xn(n,i,B,g),i.memoizedState=u.state,m&&rp(i,a,!0),i.child}function em(n){var i=n.stateNode;i.pendingContext?np(n,i.pendingContext,i.pendingContext!==i.context):i.context&&np(n,i.context,!1),wu(n,i.containerInfo)}function tm(n,i,a,u,m){return Gs(),xu(m),i.flags|=256,Xn(n,i,a,u),i.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function ju(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,i,a){var u=i.pendingProps,m=ln.current,g=!1,C=(i.flags&128)!==0,B;if((B=C)||(B=n!==null&&n.memoizedState===null?!1:(m&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),$t(ln,m&1),n===null)return gu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,g?(u=i.mode,g=i.child,C={mode:"hidden",children:C},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=Pl(C,u,0,null),n=fs(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=ju(a),i.memoizedState=Hu,n):Vu(i,C));if(m=n.memoizedState,m!==null&&(B=m.dehydrated,B!==null))return mv(n,i,C,u,B,m,a);if(g){g=u.fallback,C=i.mode,m=n.child,B=m.sibling;var Y={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==m?(u=i.child,u.childLanes=0,u.pendingProps=Y,i.deletions=null):(u=Or(m,Y),u.subtreeFlags=m.subtreeFlags&14680064),B!==null?g=Or(B,g):(g=fs(g,C,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,C=n.child.memoizedState,C=C===null?ju(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=Hu,u}return g=n.child,n=g.sibling,u=Or(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Vu(n,i){return i=Pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function vl(n,i,a,u){return u!==null&&xu(u),Hs(i,n.child,null,a),n=Vu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function mv(n,i,a,u,m,g,C){if(a)return i.flags&256?(i.flags&=-257,u=ku(Error(t(422))),vl(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,m=i.mode,u=Pl({mode:"visible",children:u.children},m,0,null),g=fs(g,m,C,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Hs(i,n.child,null,C),i.child.memoizedState=ju(C),i.memoizedState=Hu,g);if((i.mode&1)===0)return vl(n,i,C,null);if(m.data==="$!"){if(u=m.nextSibling&&m.nextSibling.dataset,u)var B=u.dgst;return u=B,g=Error(t(419)),u=ku(g,u,void 0),vl(n,i,C,u)}if(B=(C&n.childLanes)!==0,Qn||B){if(u=Nn,u!==null){switch(C&-C){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(u.suspendedLanes|C))!==0?0:m,m!==0&&m!==g.retryLane&&(g.retryLane=m,ar(n,m),Pi(u,n,m,-1))}return od(),u=ku(Error(t(421))),vl(n,i,C,u)}return m.data==="$?"?(i.flags|=128,i.child=n.child,i=Cv.bind(null,n),m._reactRetry=i,null):(n=g.treeContext,li=Tr(m.nextSibling),ai=i,nn=!0,Ai=null,n!==null&&(hi[fi++]=sr,hi[fi++]=or,hi[fi++]=rs,sr=n.id,or=n.overflow,rs=i),i=Vu(i,u.children),i.flags|=4096,i)}function im(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Su(n.return,i,a)}function Wu(n,i,a,u,m){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:m}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=m)}function rm(n,i,a){var u=i.pendingProps,m=u.revealOrder,g=u.tail;if(Xn(n,i,u.children,a),u=ln.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,i);else if(n.tag===19)im(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($t(ln,u),(i.mode&1)===0)i.memoizedState=null;else switch(m){case"forwards":for(a=i.child,m=null;a!==null;)n=a.alternate,n!==null&&dl(n)===null&&(m=a),a=a.sibling;a=m,a===null?(m=i.child,i.child=null):(m=a.sibling,a.sibling=null),Wu(i,!1,m,a,g);break;case"backwards":for(a=null,m=i.child,i.child=null;m!==null;){if(n=m.alternate,n!==null&&dl(n)===null){i.child=m;break}n=m.sibling,m.sibling=a,a=m,m=n}Wu(i,!0,a,null,g);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function _l(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Or(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Or(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function gv(n,i,a){switch(i.tag){case 3:em(i),Gs();break;case 5:vp(i);break;case 1:Kn(i.type)&&tl(i);break;case 4:wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,m=i.memoizedProps.value;$t(al,u._currentValue),u._currentValue=m;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?($t(ln,ln.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?nm(n,i,a):($t(ln,ln.current&1),n=cr(n,i,a),n!==null?n.sibling:null);$t(ln,ln.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return rm(n,i,a);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),$t(ln,ln.current),u)break;return null;case 22:case 23:return i.lanes=0,Kp(n,i,a)}return cr(n,i,a)}var sm,Xu,om,am;sm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xu=function(){},om=function(n,i,a,u){var m=n.memoizedProps;if(m!==u){n=i.stateNode,as(Vi.current);var g=null;switch(a){case"input":m=lt(n,m),u=lt(n,u),g=[];break;case"select":m=X({},m,{value:void 0}),u=X({},u,{value:void 0}),g=[];break;case"textarea":m=Wt(n,m),u=Wt(n,u),g=[];break;default:typeof m.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Qa)}_e(a,u);var C;a=null;for(fe in m)if(!u.hasOwnProperty(fe)&&m.hasOwnProperty(fe)&&m[fe]!=null)if(fe==="style"){var B=m[fe];for(C in B)B.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in u){var Y=u[fe];if(B=m!=null?m[fe]:void 0,u.hasOwnProperty(fe)&&Y!==B&&(Y!=null||B!=null))if(fe==="style")if(B){for(C in B)!B.hasOwnProperty(C)||Y&&Y.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in Y)Y.hasOwnProperty(C)&&B[C]!==Y[C]&&(a||(a={}),a[C]=Y[C])}else a||(g||(g=[]),g.push(fe,a)),a=Y;else fe==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(g=g||[]).push(fe,Y)):fe==="children"?typeof Y!="string"&&typeof Y!="number"||(g=g||[]).push(fe,""+Y):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(Y!=null&&fe==="onScroll"&&Yt("scroll",n),g||B===Y||(g=[])):(g=g||[]).push(fe,Y))}a&&(g=g||[]).push("style",a);var fe=g;(i.updateQueue=fe)&&(i.flags|=4)}},am=function(n,i,a,u){a!==u&&(i.flags|=4)};function ea(n,i){if(!nn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var m=n.child;m!==null;)a|=m.lanes|m.childLanes,u|=m.subtreeFlags&14680064,u|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)a|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function xv(n,i,a){var u=i.pendingProps;switch(pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(i),null;case 1:return Kn(i.type)&&el(),Gn(i),null;case 3:return u=i.stateNode,Ws(),Zt(Zn),Zt(zn),Au(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(sl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ai!==null&&(id(Ai),Ai=null))),Xu(n,i),Gn(i),null;case 5:Eu(i);var m=as(Yo.current);if(a=i.type,n!==null&&i.stateNode!=null)om(n,i,a,u,m),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Gn(i),null}if(n=as(Vi.current),sl(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[ji]=i,u[Vo]=g,n=(i.mode&1)!==0,a){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(m=0;m<Go.length;m++)Yt(Go[m],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":Ct(u,g),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",u);break;case"textarea":un(u,g),Yt("invalid",u)}_e(a,g),m=null;for(var C in g)if(g.hasOwnProperty(C)){var B=g[C];C==="children"?typeof B=="string"?u.textContent!==B&&(g.suppressHydrationWarning!==!0&&Ka(u.textContent,B,n),m=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Ka(u.textContent,B,n),m=["children",""+B]):o.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&Yt("scroll",u)}switch(a){case"input":re(u),Lt(u,g,!0);break;case"textarea":re(u),Jt(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Qa)}u=m,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=At(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(a,{is:u.is}):(n=C.createElement(a),a==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,a),n[ji]=i,n[Vo]=u,sm(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ne(a,u),a){case"dialog":Yt("cancel",n),Yt("close",n),m=u;break;case"iframe":case"object":case"embed":Yt("load",n),m=u;break;case"video":case"audio":for(m=0;m<Go.length;m++)Yt(Go[m],n);m=u;break;case"source":Yt("error",n),m=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),m=u;break;case"details":Yt("toggle",n),m=u;break;case"input":Ct(n,u),m=lt(n,u),Yt("invalid",n);break;case"option":m=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},m=X({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":un(n,u),m=Wt(n,u),Yt("invalid",n);break;default:m=u}_e(a,m),B=m;for(g in B)if(B.hasOwnProperty(g)){var Y=B[g];g==="style"?se(n,Y):g==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&Ut(n,Y)):g==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&Ve(n,Y):typeof Y=="number"&&Ve(n,""+Y):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?Y!=null&&g==="onScroll"&&Yt("scroll",n):Y!=null&&U(n,g,Y,C))}switch(a){case"input":re(n),Lt(n,u,!1);break;case"textarea":re(n),Jt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+be(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Nt(n,!!u.multiple,g,!1):u.defaultValue!=null&&Nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Qa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Gn(i),null;case 6:if(n&&i.stateNode!=null)am(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(Yo.current),as(Vi.current),sl(i)){if(u=i.stateNode,a=i.memoizedProps,u[ji]=i,(g=u.nodeValue!==a)&&(n=ai,n!==null))switch(n.tag){case 3:Ka(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ka(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[ji]=i,i.stateNode=u}return Gn(i),null;case 13:if(Zt(ln),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nn&&li!==null&&(i.mode&1)!==0&&(i.flags&128)===0)up(),Gs(),i.flags|=98560,g=!1;else if(g=sl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ji]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Gn(i),g=!1}else Ai!==null&&(id(Ai),Ai=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(ln.current&1)!==0?wn===0&&(wn=3):od())),i.updateQueue!==null&&(i.flags|=4),Gn(i),null);case 4:return Ws(),Xu(n,i),n===null&&Ho(i.stateNode.containerInfo),Gn(i),null;case 10:return yu(i.type._context),Gn(i),null;case 17:return Kn(i.type)&&el(),Gn(i),null;case 19:if(Zt(ln),g=i.memoizedState,g===null)return Gn(i),null;if(u=(i.flags&128)!==0,C=g.rendering,C===null)if(u)ea(g,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=dl(n),C!==null){for(i.flags|=128,ea(g,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $t(ln,ln.current&1|2),i.child}n=n.sibling}g.tail!==null&&en()>Ys&&(i.flags|=128,u=!0,ea(g,!1),i.lanes=4194304)}else{if(!u)if(n=dl(C),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ea(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!nn)return Gn(i),null}else 2*en()-g.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,u=!0,ea(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=en(),i.sibling=null,a=ln.current,$t(ln,u?a&1|2:a&1),i):(Gn(i),null);case 22:case 23:return sd(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ci&1073741824)!==0&&(Gn(i),i.subtreeFlags&6&&(i.flags|=8192)):Gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function vv(n,i){switch(pu(i),i.tag){case 1:return Kn(i.type)&&el(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ws(),Zt(Zn),Zt(zn),Au(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Zt(ln),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Zt(ln),null;case 4:return Ws(),null;case 10:return yu(i.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var yl=!1,Hn=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){hn(n,i,u)}else a.current=null}function qu(n,i,a){try{a()}catch(u){hn(n,i,u)}}var lm=!1;function yv(n,i){if(su=Ba,n=Bf(),Kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var m=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,B=-1,Y=-1,fe=0,Ae=0,Ce=n,Ee=null;t:for(;;){for(var $e;Ce!==a||m!==0&&Ce.nodeType!==3||(B=C+m),Ce!==g||u!==0&&Ce.nodeType!==3||(Y=C+u),Ce.nodeType===3&&(C+=Ce.nodeValue.length),($e=Ce.firstChild)!==null;)Ee=Ce,Ce=$e;for(;;){if(Ce===n)break t;if(Ee===a&&++fe===m&&(B=C),Ee===g&&++Ae===u&&(Y=C),($e=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=$e}a=B===-1||Y===-1?null:{start:B,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(ou={focusedElem:n,selectionRange:a},Ba=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,gn=nt.memoizedState,le=i.stateNode,ie=le.getSnapshotBeforeUpdate(i.elementType===i.type?rt:Ci(i.type,rt),gn);le.__reactInternalSnapshotBeforeUpdate=ie}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){hn(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return nt=lm,lm=!1,nt}function ta(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var m=u=u.next;do{if((m.tag&n)===n){var g=m.destroy;m.destroy=void 0,g!==void 0&&qu(i,a,g)}m=m.next}while(m!==u)}}function Sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function $u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function cm(n){var i=n.alternate;i!==null&&(n.alternate=null,cm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ji],delete i[Vo],delete i[uu],delete i[nv],delete i[iv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qa));else if(u!==4&&(n=n.child,n!==null))for(Yu(n,i,a),n=n.sibling;n!==null;)Yu(n,i,a),n=n.sibling}function Zu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Zu(n,i,a),n=n.sibling;n!==null;)Zu(n,i,a),n=n.sibling}var Dn=null,Ni=!1;function Lr(n,i,a){for(a=a.child;a!==null;)hm(n,i,a),a=a.sibling}function hm(n,i,a){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(q,a)}catch{}switch(a.tag){case 5:Hn||qs(a,i);case 6:var u=Dn,m=Ni;Dn=null,Lr(n,i,a),Dn=u,Ni=m,Dn!==null&&(Ni?(n=Dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Dn.removeChild(a.stateNode));break;case 18:Dn!==null&&(Ni?(n=Dn,a=a.stateNode,n.nodeType===8?cu(n.parentNode,a):n.nodeType===1&&cu(n,a),Io(n)):cu(Dn,a.stateNode));break;case 4:u=Dn,m=Ni,Dn=a.stateNode.containerInfo,Ni=!0,Lr(n,i,a),Dn=u,Ni=m;break;case 0:case 11:case 14:case 15:if(!Hn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){m=u=u.next;do{var g=m,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&qu(a,i,C),m=m.next}while(m!==u)}Lr(n,i,a);break;case 1:if(!Hn&&(qs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(B){hn(a,i,B)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(Hn=(u=Hn)||a.memoizedState!==null,Lr(n,i,a),Hn=u):Lr(n,i,a);break;default:Lr(n,i,a)}}function fm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new _v),i.forEach(function(u){var m=Nv.bind(null,n,u);a.has(u)||(a.add(u),u.then(m,m))})}}function Ri(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var m=a[u];try{var g=n,C=i,B=C;e:for(;B!==null;){switch(B.tag){case 5:Dn=B.stateNode,Ni=!1;break e;case 3:Dn=B.stateNode.containerInfo,Ni=!0;break e;case 4:Dn=B.stateNode.containerInfo,Ni=!0;break e}B=B.return}if(Dn===null)throw Error(t(160));hm(g,C,m),Dn=null,Ni=!1;var Y=m.alternate;Y!==null&&(Y.return=null),m.return=null}catch(fe){hn(m,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pm(i,n),i=i.sibling}function pm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(i,n),Xi(n),u&4){try{ta(3,n,n.return),Sl(3,n)}catch(rt){hn(n,n.return,rt)}try{ta(5,n,n.return)}catch(rt){hn(n,n.return,rt)}}break;case 1:Ri(i,n),Xi(n),u&512&&a!==null&&qs(a,a.return);break;case 5:if(Ri(i,n),Xi(n),u&512&&a!==null&&qs(a,a.return),n.flags&32){var m=n.stateNode;try{Ve(m,"")}catch(rt){hn(n,n.return,rt)}}if(u&4&&(m=n.stateNode,m!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,B=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&St(m,g),Ne(B,C);var fe=Ne(B,g);for(C=0;C<Y.length;C+=2){var Ae=Y[C],Ce=Y[C+1];Ae==="style"?se(m,Ce):Ae==="dangerouslySetInnerHTML"?Ut(m,Ce):Ae==="children"?Ve(m,Ce):U(m,Ae,Ce,fe)}switch(B){case"input":at(m,g);break;case"textarea":ee(m,g);break;case"select":var Ee=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!g.multiple;var $e=g.value;$e!=null?Nt(m,!!g.multiple,$e,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?Nt(m,!!g.multiple,g.defaultValue,!0):Nt(m,!!g.multiple,g.multiple?[]:"",!1))}m[Vo]=g}catch(rt){hn(n,n.return,rt)}}break;case 6:if(Ri(i,n),Xi(n),u&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,g=n.memoizedProps;try{m.nodeValue=g}catch(rt){hn(n,n.return,rt)}}break;case 3:if(Ri(i,n),Xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Io(i.containerInfo)}catch(rt){hn(n,n.return,rt)}break;case 4:Ri(i,n),Xi(n);break;case 13:Ri(i,n),Xi(n),m=n.child,m.flags&8192&&(g=m.memoizedState!==null,m.stateNode.isHidden=g,!g||m.alternate!==null&&m.alternate.memoizedState!==null||(Ju=en())),u&4&&fm(n);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,n.mode&1?(Hn=(fe=Hn)||Ae,Ri(i,n),Hn=fe):Ri(i,n),Xi(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ae&&(n.mode&1)!==0)for(Ke=n,Ae=n.child;Ae!==null;){for(Ce=Ke=Ae;Ke!==null;){switch(Ee=Ke,$e=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:ta(4,Ee,Ee.return);break;case 1:qs(Ee,Ee.return);var nt=Ee.stateNode;if(typeof nt.componentWillUnmount=="function"){u=Ee,a=Ee.return;try{i=u,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(rt){hn(u,a,rt)}}break;case 5:qs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){xm(Ce);continue}}$e!==null?($e.return=Ee,Ke=$e):xm(Ce)}Ae=Ae.sibling}e:for(Ae=null,Ce=n;;){if(Ce.tag===5){if(Ae===null){Ae=Ce;try{m=Ce.stateNode,fe?(g=m.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=Ce.stateNode,Y=Ce.memoizedProps.style,C=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=E("display",C))}catch(rt){hn(n,n.return,rt)}}}else if(Ce.tag===6){if(Ae===null)try{Ce.stateNode.nodeValue=fe?"":Ce.memoizedProps}catch(rt){hn(n,n.return,rt)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ae===Ce&&(Ae=null),Ce=Ce.return}Ae===Ce&&(Ae=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Ri(i,n),Xi(n),u&4&&fm(n);break;case 21:break;default:Ri(i,n),Xi(n)}}function Xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var m=u.stateNode;u.flags&32&&(Ve(m,""),u.flags&=-33);var g=dm(n);Zu(n,g,m);break;case 3:case 4:var C=u.stateNode.containerInfo,B=dm(n);Yu(n,B,C);break;default:throw Error(t(161))}}catch(Y){hn(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Sv(n,i,a){Ke=n,mm(n)}function mm(n,i,a){for(var u=(n.mode&1)!==0;Ke!==null;){var m=Ke,g=m.child;if(m.tag===22&&u){var C=m.memoizedState!==null||yl;if(!C){var B=m.alternate,Y=B!==null&&B.memoizedState!==null||Hn;B=yl;var fe=Hn;if(yl=C,(Hn=Y)&&!fe)for(Ke=m;Ke!==null;)C=Ke,Y=C.child,C.tag===22&&C.memoizedState!==null?vm(m):Y!==null?(Y.return=C,Ke=Y):vm(m);for(;g!==null;)Ke=g,mm(g),g=g.sibling;Ke=m,yl=B,Hn=fe}gm(n)}else(m.subtreeFlags&8772)!==0&&g!==null?(g.return=m,Ke=g):gm(n)}}function gm(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Hn||Sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Hn)if(a===null)u.componentDidMount();else{var m=i.elementType===i.type?a.memoizedProps:Ci(i.type,a.memoizedProps);u.componentDidUpdate(m,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&xp(i,g,u);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xp(i,C,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ae=fe.memoizedState;if(Ae!==null){var Ce=Ae.dehydrated;Ce!==null&&Io(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||i.flags&512&&$u(i)}catch(Ee){hn(i,i.return,Ee)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function xm(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function vm(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Sl(4,i)}catch(Y){hn(i,a,Y)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var m=i.return;try{u.componentDidMount()}catch(Y){hn(i,m,Y)}}var g=i.return;try{$u(i)}catch(Y){hn(i,g,Y)}break;case 5:var C=i.return;try{$u(i)}catch(Y){hn(i,C,Y)}}}catch(Y){hn(i,i.return,Y)}if(i===n){Ke=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Ke=B;break}Ke=i.return}}var bv=Math.ceil,bl=N.ReactCurrentDispatcher,Ku=N.ReactCurrentOwner,gi=N.ReactCurrentBatchConfig,Ft=0,Nn=null,xn=null,Fn=0,ci=0,$s=Ar(0),wn=0,na=null,cs=0,Ml=0,Qu=0,ia=null,Jn=null,Ju=0,Ys=1/0,ur=null,wl=!1,ed=null,Ir=null,El=!1,Dr=null,Tl=0,ra=0,td=null,Al=-1,Cl=0;function qn(){return(Ft&6)!==0?en():Al!==-1?Al:Al=en()}function Fr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&Fn!==0?Fn&-Fn:sv.transition!==null?(Cl===0&&(Cl=jt()),Cl):(n=st,n!==0||(n=window.event,n=n===void 0?16:yf(n.type)),n)}function Pi(n,i,a,u){if(50<ra)throw ra=0,td=null,Error(t(185));dn(n,a,u),((Ft&2)===0||n!==Nn)&&(n===Nn&&((Ft&2)===0&&(Ml|=a),wn===4&&Ur(n,Fn)),ei(n,u),a===1&&Ft===0&&(i.mode&1)===0&&(Ys=en()+500,nl&&Nr()))}function ei(n,i){var a=n.callbackNode;Et(n,i);var u=yt(n,n===Nn?Fn:0);if(u===0)a!==null&&Co(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Co(a),i===1)n.tag===0?rv(ym.bind(null,n)):sp(ym.bind(null,n)),ev(function(){(Ft&6)===0&&Nr()}),a=null;else{switch(Gi(u)){case 1:a=No;break;case 4:a=Oa;break;case 16:a=Cs;break;case 536870912:a=R;break;default:a=Cs}a=Cm(a,_m.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function _m(n,i){if(Al=-1,Cl=0,(Ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var u=yt(n,n===Nn?Fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Nl(n,u);else{i=u;var m=Ft;Ft|=2;var g=bm();(Nn!==n||Fn!==i)&&(ur=null,Ys=en()+500,ds(n,i));do try{Ev();break}catch(B){Sm(n,B)}while(!0);_u(),bl.current=g,Ft=m,xn!==null?i=0:(Nn=null,Fn=0,i=wn)}if(i!==0){if(i===2&&(m=tn(n),m!==0&&(u=m,i=nd(n,m))),i===1)throw a=na,ds(n,0),Ur(n,u),ei(n,en()),a;if(i===6)Ur(n,u);else{if(m=n.current.alternate,(u&30)===0&&!Mv(m)&&(i=Nl(n,u),i===2&&(g=tn(n),g!==0&&(u=g,i=nd(n,g))),i===1))throw a=na,ds(n,0),Ur(n,u),ei(n,en()),a;switch(n.finishedWork=m,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:hs(n,Jn,ur);break;case 3:if(Ur(n,u),(u&130023424)===u&&(i=Ju+500-en(),10<i)){if(yt(n,0)!==0)break;if(m=n.suspendedLanes,(m&u)!==u){qn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=lu(hs.bind(null,n,Jn,ur),i);break}hs(n,Jn,ur);break;case 4:if(Ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,m=-1;0<u;){var C=31-oe(u);g=1<<C,C=i[C],C>m&&(m=C),u&=~g}if(u=m,u=en()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*bv(u/1960))-u,10<u){n.timeoutHandle=lu(hs.bind(null,n,Jn,ur),u);break}hs(n,Jn,ur);break;case 5:hs(n,Jn,ur);break;default:throw Error(t(329))}}}return ei(n,en()),n.callbackNode===a?_m.bind(null,n):null}function nd(n,i){var a=ia;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=Nl(n,i),n!==2&&(i=Jn,Jn=a,i!==null&&id(i)),n}function id(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function Mv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var m=a[u],g=m.getSnapshot;m=m.value;try{if(!Ti(g(),m))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(n,i){for(i&=~Qu,i&=~Ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-oe(i),u=1<<a;n[a]=-1,i&=~u}}function ym(n){if((Ft&6)!==0)throw Error(t(327));Zs();var i=yt(n,0);if((i&1)===0)return ei(n,en()),null;var a=Nl(n,i);if(n.tag!==0&&a===2){var u=tn(n);u!==0&&(i=u,a=nd(n,u))}if(a===1)throw a=na,ds(n,0),Ur(n,i),ei(n,en()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,Jn,ur),ei(n,en()),null}function rd(n,i){var a=Ft;Ft|=1;try{return n(i)}finally{Ft=a,Ft===0&&(Ys=en()+500,nl&&Nr())}}function us(n){Dr!==null&&Dr.tag===0&&(Ft&6)===0&&Zs();var i=Ft;Ft|=1;var a=gi.transition,u=st;try{if(gi.transition=null,st=1,n)return n()}finally{st=u,gi.transition=a,Ft=i,(Ft&6)===0&&Nr()}}function sd(){ci=$s.current,Zt($s)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,J0(a)),xn!==null)for(a=xn.return;a!==null;){var u=a;switch(pu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&el();break;case 3:Ws(),Zt(Zn),Zt(zn),Au();break;case 5:Eu(u);break;case 4:Ws();break;case 13:Zt(ln);break;case 19:Zt(ln);break;case 10:yu(u.type._context);break;case 22:case 23:sd()}a=a.return}if(Nn=n,xn=n=Or(n.current,null),Fn=ci=i,wn=0,na=null,Qu=Ml=cs=0,Jn=ia=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],u=a.interleaved,u!==null){a.interleaved=null;var m=u.next,g=a.pending;if(g!==null){var C=g.next;g.next=m,u.next=C}a.pending=u}os=null}return n}function Sm(n,i){do{var a=xn;try{if(_u(),hl.current=gl,fl){for(var u=cn.memoizedState;u!==null;){var m=u.queue;m!==null&&(m.pending=null),u=u.next}fl=!1}if(ls=0,Cn=Mn=cn=null,Zo=!1,Ko=0,Ku.current=null,a===null||a.return===null){wn=1,na=i,xn=null;break}e:{var g=n,C=a.return,B=a,Y=i;if(i=Fn,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var fe=Y,Ae=B,Ce=Ae.tag;if((Ae.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=Ae.alternate;Ee?(Ae.updateQueue=Ee.updateQueue,Ae.memoizedState=Ee.memoizedState,Ae.lanes=Ee.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var $e=Xp(C);if($e!==null){$e.flags&=-257,qp($e,C,B,g,i),$e.mode&1&&Wp(g,fe,i),i=$e,Y=fe;var nt=i.updateQueue;if(nt===null){var rt=new Set;rt.add(Y),i.updateQueue=rt}else nt.add(Y);break e}else{if((i&1)===0){Wp(g,fe,i),od();break e}Y=Error(t(426))}}else if(nn&&B.mode&1){var gn=Xp(C);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),qp(gn,C,B,g,i),xu(Xs(Y,B));break e}}g=Y=Xs(Y,B),wn!==4&&(wn=2),ia===null?ia=[g]:ia.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var le=jp(g,Y,i);gp(g,le);break e;case 1:B=Y;var ie=g.type,de=g.stateNode;if((g.flags&128)===0&&(typeof ie.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Ir===null||!Ir.has(de)))){g.flags|=65536,i&=-i,g.lanes|=i;var Oe=Vp(g,B,i);gp(g,Oe);break e}}g=g.return}while(g!==null)}wm(a)}catch(ot){i=ot,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function bm(){var n=bl.current;return bl.current=gl,n===null?gl:n}function od(){(wn===0||wn===3||wn===2)&&(wn=4),Nn===null||(cs&268435455)===0&&(Ml&268435455)===0||Ur(Nn,Fn)}function Nl(n,i){var a=Ft;Ft|=2;var u=bm();(Nn!==n||Fn!==i)&&(ur=null,ds(n,i));do try{wv();break}catch(m){Sm(n,m)}while(!0);if(_u(),Ft=a,bl.current=u,xn!==null)throw Error(t(261));return Nn=null,Fn=0,wn}function wv(){for(;xn!==null;)Mm(xn)}function Ev(){for(;xn!==null&&!ts();)Mm(xn)}function Mm(n){var i=Am(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?wm(n):xn=i,Ku.current=null}function wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=xv(a,i,ci),a!==null){xn=a;return}}else{if(a=vv(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);wn===0&&(wn=5)}function hs(n,i,a){var u=st,m=gi.transition;try{gi.transition=null,st=1,Tv(n,i,a,u)}finally{gi.transition=m,st=u}return null}function Tv(n,i,a,u){do Zs();while(Dr!==null);if((Ft&6)!==0)throw Error(t(327));a=n.finishedWork;var m=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(tt(n,g),n===Nn&&(xn=Nn=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||El||(El=!0,Cm(Cs,function(){return Zs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=gi.transition,gi.transition=null;var C=st;st=1;var B=Ft;Ft|=4,Ku.current=null,yv(n,a),pm(a,n),X0(ou),Ba=!!su,ou=su=null,n.current=a,Sv(a),zc(),Ft=B,st=C,gi.transition=g}else n.current=a;if(El&&(El=!1,Dr=n,Tl=m),g=n.pendingLanes,g===0&&(Ir=null),ae(a.stateNode),ei(n,en()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)m=i[a],u(m.value,{componentStack:m.stack,digest:m.digest});if(wl)throw wl=!1,n=ed,ed=null,n;return(Tl&1)!==0&&n.tag!==0&&Zs(),g=n.pendingLanes,(g&1)!==0?n===td?ra++:(ra=0,td=n):ra=0,Nr(),null}function Zs(){if(Dr!==null){var n=Gi(Tl),i=gi.transition,a=st;try{if(gi.transition=null,st=16>n?16:n,Dr===null)var u=!1;else{if(n=Dr,Dr=null,Tl=0,(Ft&6)!==0)throw Error(t(331));var m=Ft;for(Ft|=4,Ke=n.current;Ke!==null;){var g=Ke,C=g.child;if((Ke.flags&16)!==0){var B=g.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var fe=B[Y];for(Ke=fe;Ke!==null;){var Ae=Ke;switch(Ae.tag){case 0:case 11:case 15:ta(8,Ae,g)}var Ce=Ae.child;if(Ce!==null)Ce.return=Ae,Ke=Ce;else for(;Ke!==null;){Ae=Ke;var Ee=Ae.sibling,$e=Ae.return;if(cm(Ae),Ae===fe){Ke=null;break}if(Ee!==null){Ee.return=$e,Ke=Ee;break}Ke=$e}}}var nt=g.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var gn=rt.sibling;rt.sibling=null,rt=gn}while(rt!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,Ke=C;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ta(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,Ke=le;break e}Ke=g.return}}var ie=n.current;for(Ke=ie;Ke!==null;){C=Ke;var de=C.child;if((C.subtreeFlags&2064)!==0&&de!==null)de.return=C,Ke=de;else e:for(C=ie;Ke!==null;){if(B=Ke,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Sl(9,B)}}catch(ot){hn(B,B.return,ot)}if(B===C){Ke=null;break e}var Oe=B.sibling;if(Oe!==null){Oe.return=B.return,Ke=Oe;break e}Ke=B.return}}if(Ft=m,Nr(),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(q,n)}catch{}u=!0}return u}finally{st=a,gi.transition=i}}return!1}function Em(n,i,a){i=Xs(a,i),i=jp(n,i,1),n=Pr(n,i,1),i=qn(),n!==null&&(dn(n,1,i),ei(n,i))}function hn(n,i,a){if(n.tag===3)Em(n,n,a);else for(;i!==null;){if(i.tag===3){Em(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ir===null||!Ir.has(u))){n=Xs(a,n),n=Vp(i,n,1),i=Pr(i,n,1),n=qn(),i!==null&&(dn(i,1,n),ei(i,n));break}}i=i.return}}function Av(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=qn(),n.pingedLanes|=n.suspendedLanes&a,Nn===n&&(Fn&a)===a&&(wn===4||wn===3&&(Fn&130023424)===Fn&&500>en()-Ju?ds(n,0):Qu|=a),ei(n,i)}function Tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=qn();n=ar(n,i),n!==null&&(dn(n,i,a),ei(n,a))}function Cv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Tm(n,a)}function Nv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,m=n.memoizedState;m!==null&&(a=m.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Tm(n,a)}var Am;Am=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zn.current)Qn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Qn=!1,gv(n,i,a);Qn=(n.flags&131072)!==0}else Qn=!1,nn&&(i.flags&1048576)!==0&&op(i,rl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;_l(n,i),n=i.pendingProps;var m=ks(i,zn.current);Vs(i,a),m=Ru(null,i,u,n,m,a);var g=Pu();return i.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kn(u)?(g=!0,tl(i)):g=!1,i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Mu(i),m.updater=xl,i.stateNode=m,m._reactInternals=i,Ou(i,u,n,a),i=Gu(null,i,u,!0,g,a)):(i.tag=0,nn&&g&&fu(i),Xn(null,i,m,a),i=i.child),i;case 16:u=i.elementType;e:{switch(_l(n,i),n=i.pendingProps,m=u._init,u=m(u._payload),i.type=u,m=i.tag=Pv(u),n=Ci(u,n),m){case 0:i=Bu(null,i,u,n,a);break e;case 1:i=Jp(null,i,u,n,a);break e;case 11:i=$p(null,i,u,n,a);break e;case 14:i=Yp(null,i,u,Ci(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:Ci(u,m),Bu(n,i,u,m,a);case 1:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:Ci(u,m),Jp(n,i,u,m,a);case 3:e:{if(em(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,m=g.element,mp(n,i),ul(i,u,null,a);var C=i.memoizedState;if(u=C.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){m=Xs(Error(t(423)),i),i=tm(n,i,u,a,m);break e}else if(u!==m){m=Xs(Error(t(424)),i),i=tm(n,i,u,a,m);break e}else for(li=Tr(i.stateNode.containerInfo.firstChild),ai=i,nn=!0,Ai=null,a=fp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),u===m){i=cr(n,i,a);break e}Xn(n,i,u,a)}i=i.child}return i;case 5:return vp(i),n===null&&gu(i),u=i.type,m=i.pendingProps,g=n!==null?n.memoizedProps:null,C=m.children,au(u,m)?C=null:g!==null&&au(u,g)&&(i.flags|=32),Qp(n,i),Xn(n,i,C,a),i.child;case 6:return n===null&&gu(i),null;case 13:return nm(n,i,a);case 4:return wu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Hs(i,null,u,a):Xn(n,i,u,a),i.child;case 11:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:Ci(u,m),$p(n,i,u,m,a);case 7:return Xn(n,i,i.pendingProps,a),i.child;case 8:return Xn(n,i,i.pendingProps.children,a),i.child;case 12:return Xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,m=i.pendingProps,g=i.memoizedProps,C=m.value,$t(al,u._currentValue),u._currentValue=C,g!==null)if(Ti(g.value,C)){if(g.children===m.children&&!Zn.current){i=cr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){C=g.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===u){if(g.tag===1){Y=lr(-1,a&-a),Y.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var Ae=fe.pending;Ae===null?Y.next=Y:(Y.next=Ae.next,Ae.next=Y),fe.pending=Y}}g.lanes|=a,Y=g.alternate,Y!==null&&(Y.lanes|=a),Su(g.return,a,i),B.lanes|=a;break}Y=Y.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,B=C.alternate,B!==null&&(B.lanes|=a),Su(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}Xn(n,i,m.children,a),i=i.child}return i;case 9:return m=i.type,u=i.pendingProps.children,Vs(i,a),m=pi(m),u=u(m),i.flags|=1,Xn(n,i,u,a),i.child;case 14:return u=i.type,m=Ci(u,i.pendingProps),m=Ci(u.type,m),Yp(n,i,u,m,a);case 15:return Zp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:Ci(u,m),_l(n,i),i.tag=1,Kn(u)?(n=!0,tl(i)):n=!1,Vs(i,a),Gp(i,u,m),Ou(i,u,m,a),Gu(null,i,u,!0,n,a);case 19:return rm(n,i,a);case 22:return Kp(n,i,a)}throw Error(t(156,i.tag))};function Cm(n,i){return Ao(n,i)}function Rv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,i,a,u){return new Rv(n,i,a,u)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pv(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===J)return 14}return 2}function Or(n,i){var a=n.alternate;return a===null?(a=xi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Rl(n,i,a,u,m,g){var C=2;if(u=n,typeof n=="function")ad(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case M:return fs(a.children,m,g,i);case P:C=8,m|=8;break;case j:return n=xi(12,a,i,m|2),n.elementType=j,n.lanes=g,n;case Z:return n=xi(13,a,i,m),n.elementType=Z,n.lanes=g,n;case O:return n=xi(19,a,i,m),n.elementType=O,n.lanes=g,n;case $:return Pl(a,m,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:C=10;break e;case W:C=9;break e;case V:C=11;break e;case J:C=14;break e;case ce:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=xi(C,a,i,m),i.elementType=n,i.type=u,i.lanes=g,i}function fs(n,i,a,u){return n=xi(7,n,u,i),n.lanes=a,n}function Pl(n,i,a,u){return n=xi(22,n,u,i),n.elementType=$,n.lanes=a,n.stateNode={isHidden:!1},n}function ld(n,i,a){return n=xi(6,n,null,i),n.lanes=a,n}function cd(n,i,a){return i=xi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Lv(n,i,a,u,m){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=u,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ud(n,i,a,u,m,g,C,B,Y){return n=new Lv(n,i,a,B,Y),i===1?(i=1,g===!0&&(i|=8)):i=0,g=xi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(g),n}function Iv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Nm(n){if(!n)return Cr;n=n._reactInternals;e:{if(zi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kn(a))return ip(n,a,i)}return i}function Rm(n,i,a,u,m,g,C,B,Y){return n=ud(a,u,!0,n,m,g,C,B,Y),n.context=Nm(null),a=n.current,u=qn(),m=Fr(a),g=lr(u,m),g.callback=i??null,Pr(a,g,m),n.current.lanes=m,dn(n,m,u),ei(n,u),n}function Ll(n,i,a,u){var m=i.current,g=qn(),C=Fr(m);return a=Nm(a),i.context===null?i.context=a:i.pendingContext=a,i=lr(g,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Pr(m,i,C),n!==null&&(Pi(n,m,C,g),cl(n,m,C)),C}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function dd(n,i){Pm(n,i),(n=n.alternate)&&Pm(n,i)}function Dv(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function hd(n){this._internalRoot=n}Dl.prototype.render=hd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ll(n,i,null,null)},Dl.prototype.unmount=hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){Ll(null,n,null,null)}),i[ir]=null}};function Dl(n){this._internalRoot=n}Dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Hi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Mr.length&&i!==0&&i<Mr[a].priority;a++);Mr.splice(a,0,n),a===0&&vf(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function Fv(n,i,a,u,m){if(m){if(typeof u=="function"){var g=u;u=function(){var fe=Il(C);g.call(fe)}}var C=Rm(i,u,n,0,null,!1,!1,"",Im);return n._reactRootContainer=C,n[ir]=C.current,Ho(n.nodeType===8?n.parentNode:n),us(),C}for(;m=n.lastChild;)n.removeChild(m);if(typeof u=="function"){var B=u;u=function(){var fe=Il(Y);B.call(fe)}}var Y=ud(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=Y,n[ir]=Y.current,Ho(n.nodeType===8?n.parentNode:n),us(function(){Ll(i,Y,a,u)}),Y}function Ul(n,i,a,u,m){var g=a._reactRootContainer;if(g){var C=g;if(typeof m=="function"){var B=m;m=function(){var Y=Il(C);B.call(Y)}}Ll(i,C,n,m)}else C=Fv(a,i,n,m,u);return Il(C)}bn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=mt(i.pendingLanes);a!==0&&(Sn(i,a|1),ei(i,en()),(Ft&6)===0&&(Ys=en()+500,Nr()))}break;case 13:us(function(){var u=ar(n,1);if(u!==null){var m=qn();Pi(u,n,1,m)}}),dd(n,1)}},Sr=function(n){if(n.tag===13){var i=ar(n,134217728);if(i!==null){var a=qn();Pi(i,n,134217728,a)}dd(n,134217728)}},Ei=function(n){if(n.tag===13){var i=Fr(n),a=ar(n,i);if(a!==null){var u=qn();Pi(a,n,i,u)}dd(n,i)}},Hi=function(){return st},Rt=function(n,i){var a=st;try{return st=n,i()}finally{st=a}},xe=function(n,i,a){switch(i){case"input":if(at(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var m=Ja(u);if(!m)throw Error(t(90));je(u),at(u,m)}}}break;case"textarea":ee(n,a);break;case"select":i=a.value,i!=null&&Nt(n,!!a.multiple,i,!1)}},Re=rd,De=us;var Uv={usingClientEntryPoint:!1,Events:[Wo,Us,Ja,pe,ke,rd]},sa={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ov={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=To(n),n===null?null:n.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{q=Ol.inject(Ov),ue=Ol}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,ti.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(i))throw Error(t(200));return Iv(n,i,null,a)},ti.createRoot=function(n,i){if(!fd(n))throw Error(t(299));var a=!1,u="",m=Lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),i=ud(n,1,!1,null,null,a,!1,u,m),n[ir]=i.current,Ho(n.nodeType===8?n.parentNode:n),new hd(i)},ti.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=To(i),n=n===null?null:n.stateNode,n},ti.flushSync=function(n){return us(n)},ti.hydrate=function(n,i,a){if(!Fl(i))throw Error(t(200));return Ul(null,n,i,!0,a)},ti.hydrateRoot=function(n,i,a){if(!fd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,m=!1,g="",C=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Rm(i,null,n,1,a??null,m,!1,g,C),n[ir]=i.current,Ho(n),u)for(n=0;n<u.length;n++)a=u[n],m=a._getVersion,m=m(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,m]:i.mutableSourceEagerHydrationData.push(a,m);return new Dl(i)},ti.render=function(n,i,a){if(!Fl(i))throw Error(t(200));return Ul(null,n,i,!1,a)},ti.unmountComponentAtNode=function(n){if(!Fl(n))throw Error(t(40));return n._reactRootContainer?(us(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[ir]=null})}),!0):!1},ti.unstable_batchedUpdates=rd,ti.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,i,a,!1,u)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var Gm;function Wv(){if(Gm)return gd.exports;Gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),gd.exports=Vv(),gd.exports}var Hm;function Xv(){if(Hm)return kl;Hm=1;var s=Wv();return kl.createRoot=s.createRoot,kl.hydrateRoot=s.hydrateRoot,kl}var qv=Xv();const $v=ox(qv),jm=s=>{let e;const t=new Set,r=(p,v)=>{const S=typeof p=="function"?p(e):p;if(!Object.is(S,e)){const y=e;e=v??(typeof S!="object"||S===null)?S:Object.assign({},e,S),t.forEach(x=>x(e,y))}},o=()=>e,h={setState:r,getState:o,getInitialState:()=>f,subscribe:p=>(t.add(p),()=>t.delete(p))},f=e=s(r,o,h);return h},Yv=(s=>s?jm(s):jm),Zv=s=>s;function Kv(s,e=Zv){const t=fo.useSyncExternalStore(s.subscribe,fo.useCallback(()=>e(s.getState()),[s,e]),()=>e(s.getInitialState()));return fo.useDebugValue(t),t}const Vm=s=>{const e=Yv(s),t=r=>Kv(e,r);return Object.assign(t,e),t},ax=(s=>s?Vm(s):Vm);async function Ue(s,e,t){if(!window.invokeNative)return;const o=window.GetParentResourceName?window.GetParentResourceName():"light-studio";try{const c=await(await fetch(`https://${o}/${s}`,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e??{})})).text();try{return JSON.parse(c)}catch{return c}}catch(l){throw console.error(`[fetchNui] Error calling ${s}:`,l),l}}function po(s,e,t){const r=o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0");return`#${r(s)}${r(e)}${r(t)}`}function _d(s){const e=s.replace("#","").trim();if(e.length!==6&&e.length!==3)return null;const t=e.length===3?e.split("").map(o=>o+o).join(""):e,r=parseInt(t,16);return isNaN(r)?null:{r:r>>16&255,g:r>>8&255,b:r&255}}const Wm=[{id:"light",name:"Light Studio",icon:"light",enabled:!0},{id:"prop",name:"Prop Studio",icon:"prop",enabled:!0},{id:"fx",name:"FX Studio",icon:"fx",enabled:!0}],Qv=["#000000","#FFFFFF","#EF4352","#F28B24","#EBD534","#35B879","#2B79D9","#8E3CD9"],Jv=()=>{try{const s=localStorage.getItem("lightstudio_recent_colors");if(s){const e=JSON.parse(s);if(Array.isArray(e)&&e.length>0)return e.slice(0,8)}}catch{}return Qv},ga=[{model:"none",label:"Lumière Pure (Sans Prop)",category:"Ambiance",description:"Source de lumière libre sans objet 3D physique",offsetZ:0},{model:"prop_worklight_02a",label:"Spot Halogène Double",category:"Chantier",description:"Double projecteur halogène sur trépied",offsetZ:1.65},{model:"prop_worklight_03b",label:"Projecteur Chantier Simple",category:"Chantier",description:"Projecteur jaune simple sur pied métallique",offsetZ:1.45},{model:"prop_studio_light_01",label:"Spot Studio Pro",category:"Studio",description:"Lampe de studio photo/cinéma avec réflecteur",offsetZ:1.8},{model:"prop_flood_light",label:"Projecteur Flood Large",category:"Projecteur",description:"Projecteur flood haute puissance pour grands espaces",offsetZ:2.1},{model:"prop_spot_clamp",label:"Spot à Pince Compact",category:"Compact",description:"Spot directionnel compact à fixer sur support",offsetZ:.3},{model:"prop_construc_light_01",label:"Mât Luminaire Chantier",category:"Chantier",description:"Mât robuste d'éclairage de travaux nocturnes",offsetZ:2.4}];let yd=null,Sd=null;const vn=s=>{yd&&clearTimeout(yd),yd=setTimeout(()=>{const e=s(),t=e.availableProps[e.propIndex]||ga[0];Ue("updatePreview",{model:t.model,offsetZ:t.offsetZ??1.5,rgb:e.rgb,intensity:e.intensity,radius:e.radius,renderDistance:e.renderDistance,textureVariation:e.textureVariation,collision:e.collision,castShadow:e.castShadow,shape:e.shape,shapeParam:e.shapeParam,invertDirection:e.invertDirection,nativeLight:e.nativeLight,coords:e.coords,heading:e.heading,rotation:e.rotation,groupId:e.getCurrentLightGroup(),familyId:e.getCurrentLightFamily(),group:e.getCurrentLightFamily()||e.getCurrentLightGroup(),gizmoMode:e.gizmoMode,snapEnabled:e.snapEnabled}).catch(()=>{})},12)},e_=(s,e,t)=>{Sd&&clearTimeout(Sd),Sd=setTimeout(()=>{Ue("updateFamilyPreview",{ids:s,familyId:e,group:e,updates:t}).catch(()=>{})},12)},dr=s=>{if(s.selectedFamilyId)return s.selectedFamilyId;if(s.applyToFamily&&s.hasSelectedProp&&s.selectedLightId){const e=s.nearbyLights.find(t=>t.id===s.selectedLightId);return(e==null?void 0:e.familyId)||(e==null?void 0:e.group)||null}return null},sn=ax((s,e)=>({visible:!1,statusText:"Prêt",openedAt:0,toolkitName:"Creator Toolkit",activeStudio:"light",studios:Wm,setActiveStudio:t=>{s({activeStudio:t}),Ue("setActiveStudio",{studio:t}).catch(()=>{})},setStudios:t=>s({studios:t}),hasSelectedProp:!1,selectedLightId:null,nearbyLights:[],availableProps:ga,propIndex:0,selectedCategory:"Tous",searchQuery:"",catalogOpen:!1,rgb:{r:255,g:180,b:60},intensity:8.5,radius:14,shape:"cone",shapeParam:55,invertDirection:!0,nativeLight:!1,renderDistance:80,textureVariation:0,collision:!1,castShadow:!0,recentColors:Jv(),coords:{x:0,y:0,z:0},heading:0,rotation:{x:0,y:0,z:0},gizmoMode:"translate",snapEnabled:!1,activeGizmoAxis:null,hoveredGizmoAxis:null,screenGizmo:null,cameraMode:"orbit",isOrbiting:!1,commandBarOpen:!0,transformPanelOpen:!1,toast:null,attachedInfo:null,groups:[],families:[],collapsedFolders:{},selectedFamilyId:null,applyToFamily:!0,selectedGroupId:null,multiSelectedIds:[],applyToGroup:!0,setHierarchy:t=>{s({groups:t.groups||[],families:t.families||[]})},createGroup:async t=>{const r=e(),o=t.trim()||`Groupe ${r.groups.length+1}`,l={id:`grp_${Date.now()}_${Math.floor(Math.random()*1e3)}`,name:o},c=[...r.groups,l];s({groups:c});try{await Ue("saveHierarchy",{hierarchy:{groups:c,families:r.families}}),r.showToast(`Groupe « ${o} » créé`,"success")}catch{r.showToast("Erreur lors de la création du groupe","error")}return l.id},renameGroup:async(t,r)=>{const o=e(),l=r.trim();if(!l)return;const c=o.groups.map(h=>h.id===t?{...h,name:l}:h);s({groups:c});try{await Ue("saveHierarchy",{hierarchy:{groups:c,families:o.families}}),o.showToast(`Groupe renommé en « ${l} »`,"info")}catch{o.showToast("Erreur lors du renommage","error")}},deleteGroup:async t=>{const r=e(),o=r.groups.find(v=>v.id===t),l=r.groups.filter(v=>v.id!==t),c=r.families.map(v=>v.groupId===t?{...v,groupId:null}:v),f=r.nearbyLights.filter(v=>v.groupId===t).map(v=>v.id),p=r.nearbyLights.map(v=>v.groupId===t?{...v,groupId:null}:v);s({groups:l,families:c,nearbyLights:p,selectedGroupId:r.selectedGroupId===t?null:r.selectedGroupId});try{await Ue("saveHierarchy",{hierarchy:{groups:l,families:c}}),f.length>0&&await Ue("assignLightsHierarchy",{ids:f,groupId:null}),r.showToast(`Groupe « ${(o==null?void 0:o.name)||t} » supprimé (contenu déplacé à la racine)`,"info")}catch{r.showToast("Erreur lors de la suppression du groupe","error")}},createFamily:async(t,r=null,o=[])=>{const l=e(),c=t.trim()||`Famille ${l.families.length+1}`,h={id:`fam_${Date.now()}_${Math.floor(Math.random()*1e3)}`,name:c,groupId:r||null},f=[...l.families,h];s({families:f});const p=o.length>0?o:l.multiSelectedIds.length>0?l.multiSelectedIds:l.selectedLightId?[l.selectedLightId]:[];if(p.length>0){const v=l.nearbyLights.map(S=>p.includes(S.id)?{...S,familyId:h.id,group:h.id,...r?{groupId:r}:{}}:S);s({nearbyLights:v,multiSelectedIds:[],selectedFamilyId:h.id,applyToFamily:!0});try{await Ue("assignLightsHierarchy",{ids:p,familyId:h.id,groupId:r||void 0})}catch{}}try{await Ue("saveHierarchy",{hierarchy:{groups:l.groups,families:f}}),l.showToast(`Famille « ${c} » créée`,"success")}catch{l.showToast("Erreur lors de la création de la famille","error")}return h.id},renameFamily:async(t,r)=>{const o=e(),l=r.trim();if(!l)return;const c=o.families.map(h=>h.id===t?{...h,name:l}:h);s({families:c});try{await Ue("saveHierarchy",{hierarchy:{groups:o.groups,families:c}}),o.showToast(`Famille renommée en « ${l} »`,"info")}catch{o.showToast("Erreur lors du renommage","error")}},deleteFamily:async t=>{const r=e(),o=r.families.find(p=>p.id===t),l=r.families.filter(p=>p.id!==t),h=r.nearbyLights.filter(p=>p.familyId===t||p.group===t).map(p=>p.id),f=r.nearbyLights.map(p=>p.familyId===t||p.group===t?{...p,familyId:null,group:null}:p);s({families:l,nearbyLights:f,selectedFamilyId:r.selectedFamilyId===t?null:r.selectedFamilyId});try{await Ue("saveHierarchy",{hierarchy:{groups:r.groups,families:l}}),h.length>0&&await Ue("assignLightsHierarchy",{ids:h,familyId:null}),r.showToast(`Famille « ${(o==null?void 0:o.name)||t} » dissoute`,"info")}catch{r.showToast("Erreur lors de la dissolution de la famille","error")}},moveFamilyToGroup:async(t,r)=>{const o=e(),l=o.families.map(p=>p.id===t?{...p,groupId:r||null}:p),c=o.nearbyLights.map(p=>p.familyId===t||p.group===t?{...p,groupId:r||null}:p),f=o.nearbyLights.filter(p=>p.familyId===t||p.group===t).map(p=>p.id);s({families:l,nearbyLights:c});try{await Ue("saveHierarchy",{hierarchy:{groups:o.groups,families:l}}),f.length>0&&await Ue("assignLightsHierarchy",{ids:f,groupId:r||null}),o.showToast(r?"Famille déplacée dans le groupe":"Famille déplacée à la racine","info")}catch{o.showToast("Erreur lors du déplacement de la famille","error")}},assignLightToGroup:async(t,r)=>{const o=e(),l=o.nearbyLights.map(c=>c.id===t?{...c,groupId:r||null}:c);s({nearbyLights:l});try{await Ue("assignLightsHierarchy",{ids:[t],groupId:r||null}),o.showToast(r?"Lumière classée dans le groupe":"Lumière déplacée à la racine","info")}catch{o.showToast("Erreur lors du classement","error")}},assignLightToFamily:async(t,r)=>{const o=e();let l;if(r){const h=o.families.find(f=>f.id===r);h&&h.groupId&&(l=h.groupId)}const c=o.nearbyLights.map(h=>h.id===t?{...h,familyId:r||null,group:r||null,...l!==void 0?{groupId:l}:{}}:h);s({nearbyLights:c});try{await Ue("assignLightsHierarchy",{ids:[t],familyId:r||null,...l!==void 0?{groupId:l}:{}}),o.showToast(r?"Lumière liée à la famille":"Lumière retirée de la famille","info")}catch{o.showToast("Erreur lors de la liaison","error")}},assignMultipleLights:async(t,r,o)=>{const l=e();if(t.length===0)return;let c=r;if(o&&c===void 0){const f=l.families.find(p=>p.id===o);f&&f.groupId&&(c=f.groupId)}const h=l.nearbyLights.map(f=>t.includes(f.id)?{...f,...r!==void 0?{groupId:r}:{},...o!==void 0?{familyId:o,group:o}:{}}:f);s({nearbyLights:h,multiSelectedIds:[]});try{await Ue("assignLightsHierarchy",{ids:t,groupId:r!==void 0?r:void 0,familyId:o!==void 0?o:void 0}),l.showToast(`${t.length} spots organisés avec succès`,"success")}catch{l.showToast("Erreur lors de l'organisation","error")}},toggleFolderCollapse:t=>{s(r=>({collapsedFolders:{...r.collapsedFolders,[t]:!r.collapsedFolders[t]}}))},setSelectedFamilyId:t=>{if(s({selectedFamilyId:t,selectedGroupId:t}),t){const r=e().nearbyLights.filter(o=>o.familyId===t||o.group===t&&!o.familyId);if(r.length>0){let o=0,l=0,c=0;for(const p of r)o+=p.coords.x,l+=p.coords.y,c+=p.coords.z;const h={x:o/r.length,y:l/r.length,z:c/r.length},f=r[0];s({coords:h,heading:f.heading,rotation:{x:0,y:0,z:f.heading},rgb:f.rgb,intensity:f.intensity,radius:f.radius,shape:f.shape||"cone",shapeParam:f.shapeParam??(f.shape==="cone"?55:1),invertDirection:f.invertDirection??!0,nativeLight:f.nativeLight??!1,hasSelectedProp:!1,selectedLightId:null,applyToFamily:!0,applyToGroup:!0}),Ue("setFamilyCenter",{familyId:t,coords:h,heading:f.heading}).catch(()=>{})}}},setApplyToFamily:t=>{s({applyToFamily:t,applyToGroup:t})},getCurrentLightFamily:()=>{const{selectedLightId:t,nearbyLights:r}=e();if(!t)return null;const o=r.find(l=>l.id===t);return(o==null?void 0:o.familyId)||(o==null?void 0:o.group)||null},getCurrentLightGroup:()=>{const{selectedLightId:t,nearbyLights:r}=e();if(!t)return null;const o=r.find(l=>l.id===t);return(o==null?void 0:o.groupId)||null},saveCurrentFamily:async()=>{const t=e(),r=t.selectedFamilyId||(t.applyToFamily?t.getCurrentLightFamily():null);if(!r)return;const o=t.nearbyLights.filter(p=>p.familyId===r||p.group===r&&!p.familyId),l=o.map(p=>p.id);if(l.length===0)return;const c={};for(const p of o)c[p.id]={coords:p.coords,heading:p.heading,rotation:p.rotation};const h=t.families.find(p=>p.id===r),f=(h==null?void 0:h.name)||r;try{await Ue("saveFamily",{ids:l,familyId:r,groupId:(h==null?void 0:h.groupId)||null,group:r,positions:c,updates:{rgb:t.rgb,intensity:t.intensity,radius:t.radius,shape:t.shape,shapeParam:t.shapeParam,invertDirection:t.invertDirection,nativeLight:t.nativeLight}}),t.showToast(`Famille « ${f} » (${l.length} spots) sauvegardée !`,"success")}catch{t.showToast("Erreur lors de la sauvegarde de la famille","error")}},propagateFamilyPreview:(t,r)=>{const o=e(),c=o.nearbyLights.filter(f=>f.familyId===r||f.group===r&&!f.familyId).map(f=>f.id);o.hasSelectedProp&&vn(e);const h=o.nearbyLights.map(f=>f.familyId===r||f.group===r&&!f.familyId?{...f,...t,rgb:t.rgb?{...f.rgb,...t.rgb}:f.rgb}:f);s({nearbyLights:h}),c.length>0&&e_(c,r,t)},setVisible:t=>s({visible:t}),setCameraMode:t=>{s({cameraMode:t}),Ue("setCameraMode",{mode:t}).catch(()=>{}),e().showToast(t==="freecam"?"Mode Caméra : Vol Libre (Z/Q/S/D pour voler)":"Mode Caméra : Orbite autour du Prop","info")},toggleCameraMode:()=>{const t=e().cameraMode==="orbit"?"freecam":"orbit";e().setCameraMode(t)},setNearbyLights:t=>s({nearbyLights:t}),setAttachedInfo:t=>s({attachedInfo:t}),requestAttachNearestVehicle:async()=>{try{const t=await Ue("attachNearestVehicle");t&&t.success?(s({attachedInfo:{isAttached:!0,type:t.type,name:t.name}}),e().showToast(`Fixé sur : ${t.name}`,"success")):e().showToast((t==null?void 0:t.message)||"Aucun véhicule à proximité","error")}catch{}},requestAttachPed:async()=>{try{const t=await Ue("attachPlayerPed");t&&t.success?(s({attachedInfo:{isAttached:!0,type:t.type,name:t.name}}),e().showToast("Fixé sur votre personnage","success")):e().showToast((t==null?void 0:t.message)||"Impossible d'attacher au ped","error")}catch{}},requestAttachRaycast:async()=>{try{const t=await Ue("attachRaycast");t&&t.success?(s({attachedInfo:{isAttached:!0,type:t.type,name:t.name}}),e().showToast(`Fixé sur : ${t.name}`,"success")):e().showToast((t==null?void 0:t.message)||"Aucune entité sous le viseur","error")}catch{}},requestDetach:async()=>{try{await Ue("detachEntity"),s({attachedInfo:null}),e().showToast("Détaché de l'entité (monde libre)","info")}catch{s({attachedInfo:null})}},selectExistingLight:t=>{const{nearbyLights:r,availableProps:o}=e(),l=r.find(v=>v.id===t);if(!l)return;let c=o.findIndex(v=>v.model===l.model);c===-1&&(c=0);const h=po(l.rgb.r,l.rgb.g,l.rgb.b);e().addRecentColor(h);const f=!!(l.familyId||l.group),p=l.rotation||{x:0,y:0,z:l.heading||0};s({hasSelectedProp:!0,selectedLightId:t,selectedFamilyId:null,selectedGroupId:null,applyToFamily:f,applyToGroup:f,propIndex:c,coords:l.coords,heading:l.heading,rotation:{x:p.x||0,y:p.y||0,z:p.z||l.heading||0},rgb:l.rgb,intensity:l.intensity,radius:l.radius,renderDistance:l.renderDistance??80,textureVariation:l.textureVariation??0,collision:l.collision??!1,castShadow:l.castShadow??!0,shape:l.shape||"cone",shapeParam:l.shapeParam??(l.shape==="cone"?55:1),invertDirection:l.invertDirection??l.model!=="none",nativeLight:l.nativeLight??!1,attachedInfo:l.attached?{isAttached:!0,type:l.attached.type,name:l.attached.name||l.attached.plate}:null}),Ue("selectExistingLight",{id:t}).catch(()=>{}),e().showToast(`Lumière sélectionnée (${l.distance.toFixed(1)}m)`,"info")},deleteSelectedLight:async()=>{const{selectedLightId:t}=e();if(t)try{await Ue("deleteLight",{id:t}),s({hasSelectedProp:!1,selectedLightId:null,attachedInfo:null}),e().showToast("Lumière supprimée avec succès","success")}catch{e().showToast("Erreur lors de la suppression","error")}},deselectProp:()=>{s({hasSelectedProp:!1,selectedLightId:null,selectedFamilyId:null,selectedGroupId:null}),Ue("deselectProp").catch(()=>{}),e().showToast("Désélectionné (Mode Exploration)","info")},spawnNewProp:t=>{const{availableProps:r}=e(),o=(t+r.length)%r.length,l=r[o];s({hasSelectedProp:!0,selectedLightId:null,selectedFamilyId:null,selectedGroupId:null,attachedInfo:null,propIndex:o,invertDirection:l.model!=="none",nativeLight:!1,renderDistance:80,textureVariation:0,collision:!1,castShadow:!0}),Ue("spawnNewProp",{model:l.model,offsetZ:l.offsetZ??1.5}).catch(()=>{}),e().showToast(`Nouveau prop placé : ${l.label}`,"success")},setProps:t=>s({availableProps:t}),selectPropIndex:t=>{const{availableProps:r}=e();if(r.length===0)return;const o=(t+r.length)%r.length;s({propIndex:o}),vn(e)},selectPropModel:t=>{const{availableProps:r}=e(),o=r.findIndex(l=>l.model===t);o!==-1&&(s({propIndex:o}),vn(e))},nextProp:()=>{const{propIndex:t,availableProps:r}=e();if(r.length===0)return;const o=(t+1)%r.length;e().selectPropIndex(o)},prevProp:()=>{const{propIndex:t,availableProps:r}=e();if(r.length===0)return;const o=(t-1+r.length)%r.length;e().selectPropIndex(o)},setCatalogOpen:t=>s({catalogOpen:t}),toggleCatalog:()=>s(t=>({catalogOpen:!t.catalogOpen})),setSelectedCategory:t=>s({selectedCategory:t}),setSearchQuery:t=>s({searchQuery:t}),setSelectedGroupId:t=>e().setSelectedFamilyId(t),setApplyToGroup:t=>e().setApplyToFamily(t),groupSelectedLights:async t=>{await e().createFamily(t)},ungroupSelectedLights:async()=>{const t=e().multiSelectedIds;await e().assignMultipleLights(t,null,null)},ungroupGroup:async t=>{await e().deleteFamily(t)},saveCurrentGroup:async()=>{await e().saveCurrentFamily()},propagateGroupPreview:(t,r)=>{e().propagateFamilyPreview(t,r)},setRgb:t=>{s(l=>({rgb:{...l.rgb,...t}}));const r=e(),o=dr(r);o?r.propagateFamilyPreview({rgb:r.rgb},o):vn(e)},addRecentColor:t=>{if(!t||typeof t!="string")return;const r=t.trim().toUpperCase();r.startsWith("#")&&s(o=>{const l=o.recentColors.filter(h=>h.toUpperCase()!==r),c=[r,...l].slice(0,8);try{localStorage.setItem("lightstudio_recent_colors",JSON.stringify(c))}catch{}return{recentColors:c}})},setIntensity:t=>{s({intensity:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({intensity:t},o):vn(e)},setRadius:t=>{s({radius:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({radius:t},o):vn(e)},setShape:t=>{const r=e().shapeParam;let o=r;t==="cone"&&(r<10||r>130)?o=55:(t==="sphere"||t==="box")&&r>5&&(o=1),s({shape:t,shapeParam:o});const l=e(),c=dr(l);c?l.propagateFamilyPreview({shape:t,shapeParam:o},c):vn(e)},setShapeParam:t=>{s({shapeParam:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({shapeParam:t},o):vn(e)},setInvertDirection:t=>{s({invertDirection:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({invertDirection:t},o):vn(e)},toggleInvertDirection:()=>{const t=!e().invertDirection;s({invertDirection:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({invertDirection:t},o):vn(e),e().showToast(t?"Faisceau orienté vers l'avant (180°)":"Faisceau orienté vers l'arrière","info")},setNativeLight:t=>{s({nativeLight:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({nativeLight:t},o):vn(e)},toggleNativeLight:()=>{const t=!e().nativeLight;s({nativeLight:t});const r=e(),o=dr(r);o?r.propagateFamilyPreview({nativeLight:t},o):vn(e),e().showToast(t?"Lumière native du prop activée":"Lumière native du prop désactivée","info")},setRenderDistance:t=>{s({renderDistance:t}),vn(e)},setTextureVariation:t=>{s({textureVariation:t}),vn(e)},setCollision:t=>{s({collision:t}),vn(e)},toggleCollision:()=>{const t=!e().collision;s({collision:t}),vn(e),e().showToast(t?"Collision activée sur le prop":"Collision désactivée sur le prop","info")},setCastShadow:t=>{s({castShadow:t}),vn(e)},toggleCastShadow:()=>{const t=!e().castShadow;s({castShadow:t}),vn(e),e().showToast(t?"Ombres dynamiques activées (bloqué par les obstacles)":"Ombres dynamiques désactivées","info")},duplicateSelectedLight:async()=>{const t=e();if(!t.hasSelectedProp&&!t.selectedLightId){t.showToast("Aucun prop sélectionné à dupliquer","info");return}const r=t.availableProps[t.propIndex]||ga[0],o=t.selectedLightId?t.nearbyLights.find(c=>c.id===t.selectedLightId):null,l=(o==null?void 0:o.model)||(r==null?void 0:r.model)||"none";try{await Ue("duplicateLight",{id:t.selectedLightId,model:l,coords:t.coords,heading:t.heading,rotation:t.rotation,renderDistance:t.renderDistance??(o==null?void 0:o.renderDistance)??80,textureVariation:t.textureVariation??(o==null?void 0:o.textureVariation)??0,collision:t.collision??(o==null?void 0:o.collision)??!1,castShadow:t.castShadow??(o==null?void 0:o.castShadow)??!0,rgb:t.rgb,intensity:t.intensity,radius:t.radius,offsetZ:(o==null?void 0:o.offsetZ)??(r==null?void 0:r.offsetZ)??0,shape:t.shape,shapeParam:t.shapeParam,invertDirection:t.invertDirection,nativeLight:t.nativeLight,groupId:(o==null?void 0:o.groupId)??t.getCurrentLightGroup(),familyId:(o==null?void 0:o.familyId)??t.getCurrentLightFamily(),group:(o==null?void 0:o.familyId)??(o==null?void 0:o.groupId)??(t.getCurrentLightFamily()||t.getCurrentLightGroup()),attached:o==null?void 0:o.attached}),t.showToast("Duplication instantanée (LShift)...","info")}catch{t.showToast("Erreur lors de la duplication","error")}},handleLightDuplicated:t=>{const{availableProps:r,nearbyLights:o}=e();let l=r.findIndex(v=>v.model===t.model);l===-1&&(l=0);const c=t.rotation||{x:0,y:0,z:t.heading||0},h=!!(t.familyId||t.group),p=o.some(v=>v.id===t.id)?o.map(v=>v.id===t.id?t:v):[t,...o];s({nearbyLights:p,hasSelectedProp:!0,selectedLightId:t.id,selectedFamilyId:null,selectedGroupId:null,applyToFamily:h,applyToGroup:h,propIndex:l,coords:t.coords,heading:t.heading,rotation:{x:c.x||0,y:c.y||0,z:c.z||t.heading||0},rgb:t.rgb,intensity:t.intensity,radius:t.radius,renderDistance:t.renderDistance??80,textureVariation:t.textureVariation??0,collision:t.collision??!1,castShadow:t.castShadow??!0,shape:t.shape||"cone",shapeParam:t.shapeParam??(t.shape==="cone"?55:1),invertDirection:t.invertDirection??t.model!=="none",nativeLight:t.nativeLight??!1,attachedInfo:t.attached?{isAttached:!0,type:t.attached.type,name:t.attached.name||t.attached.plate}:null}),e().showToast(`Prop dupliqué ! (${t.id})`,"success")},toggleMultiSelectId:t=>{s(r=>({multiSelectedIds:r.multiSelectedIds.includes(t)?r.multiSelectedIds.filter(c=>c!==t):[...r.multiSelectedIds,t]}))},selectAllNearby:()=>{const t=e().nearbyLights.map(r=>r.id);s({multiSelectedIds:t})},clearMultiSelect:()=>s({multiSelectedIds:[]}),setGizmoMode:t=>{s({gizmoMode:t}),Ue("setGizmoMode",{mode:t}).catch(()=>{}),e().showToast(t==="translate"?"Mode Déplacer actif (E)":"Mode Rotation actif (R)","info")},toggleSnap:()=>{s(r=>{const o=!r.snapEnabled;return Ue("setSnap",{enabled:o}).catch(()=>{}),{snapEnabled:o}});const t=e().snapEnabled;e().showToast(t?"Aimantation (Snap) activée":"Aimantation (Snap) désactivée","info")},setActiveGizmoAxis:t=>{s({activeGizmoAxis:t}),Ue("setHoveredAxis",{axis:t}).catch(()=>{})},setHoveredGizmoAxis:t=>{s({hoveredGizmoAxis:t}),Ue("setHoveredAxis",{axis:t}).catch(()=>{})},updateTransform:(t,r,o)=>{const l=e(),c=l.coords,h=l.heading,f=t.x!==void 0?t.x-c.x:0,p=t.y!==void 0?t.y-c.y:0,v=t.z!==void 0?t.z-c.z:0,S=r!==void 0?r-h:0,y={...l.coords,...t},x=r!==void 0?r:l.heading,w=o?{...o}:r!==void 0?{...l.rotation,z:r}:l.rotation,T=l.selectedFamilyId||(l.applyToFamily?l.getCurrentLightFamily():null);if(T&&(f!==0||p!==0||v!==0||S!==0)){const b=S*Math.PI/180,_=Math.cos(b),A=Math.sin(b),U=c.x,N=c.y,L=l.nearbyLights.map(F=>{if((F.familyId===T||F.group===T&&!F.familyId)&&(!l.hasSelectedProp||F.id!==l.selectedLightId)){let P=F.coords.x+f,j=F.coords.y+p,k=F.coords.z+v;if(S!==0){const Z=P-U,O=j-N,J=Z*_-O*A,ce=Z*A+O*_;P=U+J,j=N+ce}const W=S!==0?((F.heading||0)+S)%360:F.heading,V=F.rotation?{...F.rotation,z:W}:{x:0,y:0,z:W};return{...F,coords:{x:P,y:j,z:k},heading:W,rotation:V}}return F});s({coords:y,heading:x,rotation:w,nearbyLights:L})}else s({coords:y,heading:x,rotation:w});vn(e)},setScreenGizmo:t=>s({screenGizmo:t}),setIsOrbiting:t=>s({isOrbiting:t}),setCommandBarOpen:t=>s({commandBarOpen:t}),setTransformPanelOpen:t=>s({transformPanelOpen:t}),showToast:(t,r="info")=>{const o=Date.now();s({toast:{id:o,message:t,type:r}}),setTimeout(()=>{var l;((l=e().toast)==null?void 0:l.id)===o&&s({toast:null})},2800)},requestSave:async()=>{const t=e();if(!t.hasSelectedProp){e().showToast("Aucun prop à sauvegarder","info");return}const r=t.availableProps[t.propIndex]||ga[0],o=po(t.rgb.r,t.rgb.g,t.rgb.b);e().addRecentColor(o);const l=t.getCurrentLightFamily(),c=t.getCurrentLightGroup();try{await Ue("save",{id:t.selectedLightId,model:r.model,offsetZ:r.offsetZ??0,coords:t.coords,heading:t.heading,rotation:t.rotation,rgb:t.rgb,intensity:t.intensity,radius:t.radius,renderDistance:t.renderDistance,textureVariation:t.textureVariation,collision:t.collision,castShadow:t.castShadow,shape:t.shape,shapeParam:t.shapeParam,invertDirection:t.invertDirection,nativeLight:t.nativeLight,groupId:c,familyId:l,group:l||c}),t.applyToFamily&&l&&await t.saveCurrentFamily(),e().showToast(t.selectedLightId?"Lumière mise à jour !":"Nouvelle lumière enregistrée !","success"),s({hasSelectedProp:!1,selectedLightId:null,selectedFamilyId:null,selectedGroupId:null,attachedInfo:null})}catch{e().showToast("Erreur lors de la sauvegarde.","error")}},requestCancel:async()=>{try{await Ue("cancel"),s({visible:!1})}catch{s({visible:!1})}},requestGroundSnap:async()=>{const t=e(),r=t.selectedFamilyId||(t.applyToFamily?t.getCurrentLightFamily():null);try{const o=await Ue("snapGround",{familyId:r,group:r});if(o&&o.coords){const l=o.deltaZ??o.coords.z-t.coords.z;if(r&&l!==0){const c=t.nearbyLights.map(h=>(h.familyId===r||h.group===r&&!h.familyId)&&(!t.hasSelectedProp||h.id!==t.selectedLightId)?{...h,coords:{...h.coords,z:h.coords.z+l}}:h);s({coords:{...t.coords,z:o.coords.z},nearbyLights:c})}else s(c=>({coords:{...c.coords,z:o.coords.z}}));e().showToast("Plaqué au sol avec succès","success")}}catch{}},sendGizmoDrag:(t,r)=>{const o=e();Ue("gizmoDrag",{axis:t,mode:o.gizmoMode,delta:r,snap:o.snapEnabled}).catch(()=>{})},initialize:t=>{var _,A,U,N,L,F,M,P;const r=t.props&&t.props.length>0?t.props:ga,o=((_=t.defaults)==null?void 0:_.rgb)??{r:255,g:180,b:60},l=((A=t.defaults)==null?void 0:A.intensity)??8.5,c=((U=t.defaults)==null?void 0:U.radius)??14,h=((N=t.defaults)==null?void 0:N.shape)??"cone",f=((L=t.defaults)==null?void 0:L.shapeParam)??(h==="cone"?55:1),p=t.coords??{x:0,y:0,z:0},v=t.heading??0,S=t.rotation??{x:0,y:0,z:v},y=t.toolkitName||"Creator Toolkit",x=t.studios&&t.studios.length>0?t.studios:Wm,w=t.defaultStudio||"light",T=((F=t.hierarchy)==null?void 0:F.groups)||[],b=((M=t.hierarchy)==null?void 0:M.families)||[];s({visible:!0,statusText:"Freecam Active",openedAt:Date.now(),toolkitName:y,studios:x,activeStudio:w,availableProps:r,groups:T,families:b,propIndex:0,hasSelectedProp:!1,selectedLightId:null,selectedFamilyId:null,selectedGroupId:null,multiSelectedIds:[],applyToFamily:!0,applyToGroup:!0,attachedInfo:null,rgb:o,intensity:l,radius:c,shape:h,shapeParam:f,invertDirection:!0,nativeLight:!1,renderDistance:80,textureVariation:0,collision:!1,castShadow:((P=t.defaults)==null?void 0:P.castShadow)??!0,coords:p,heading:v,rotation:S,catalogOpen:!1,cameraMode:"freecam",isOrbiting:!1}),vn(e)}}));let zr=null;const Mt=ax((s,e)=>({catalogOpen:!0,categories:["Everything","Assemblages"],catalog:[],selectedCategory:"Everything",searchQuery:"",filterLoadedOnly:!1,customModelInput:"",loadedPropsCount:0,existingThumbnails:{},thumbVersions:{},isGeneratingThumbs:!1,thumbProgress:null,props:{},nearbyProps:[],locks:{},assemblages:[],assemblageModalOpen:!1,assemblageModalFamilyId:null,editingAssemblage:null,groups:[],families:[],collapsedFolders:{},selectedFamilyId:null,selectedGroupId:null,multiSelectedIds:[],applyToFamily:!1,selectedPropId:null,selectedProp:null,isLockedByOther:!1,lockOwnerName:null,toastMessage:null,toastType:"info",setHierarchy:t=>{t&&s({groups:t.groups||[],families:t.families||[]})},toggleFolderCollapse:t=>{s(r=>({collapsedFolders:{...r.collapsedFolders,[t]:!r.collapsedFolders[t]}}))},createGroup:async t=>{const r=e(),o=t.trim()||`Groupe ${r.groups.length+1}`,l={id:`prop_grp_${Date.now()}_${Math.floor(Math.random()*1e3)}`,name:o},c=[...r.groups,l];s({groups:c}),r.multiSelectedIds.length>0&&(await r.assignMultipleProps(r.multiSelectedIds,l.id,null),s({multiSelectedIds:[]}));try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:c,families:r.families}}),r.showToast(`Groupe « ${o} » créé`,"success")}catch{r.showToast("Erreur lors de la création du groupe","error")}return l.id},renameGroup:async(t,r)=>{const o=e(),l=r.trim();if(!l)return;const c=o.groups.map(h=>h.id===t?{...h,name:l}:h);s({groups:c});try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:c,families:o.families}}),o.showToast(`Groupe renommé en « ${l} »`,"info")}catch{o.showToast("Erreur lors du renommage","error")}},deleteGroup:async t=>{const r=e(),o=r.groups.find(p=>p.id===t),l=r.groups.filter(p=>p.id!==t),c=r.families.map(p=>p.groupId===t?{...p,groupId:null}:p),h=Object.values(r.props).filter(p=>p.groupId===t).map(p=>p.id),f={...r.props};h.forEach(p=>{f[p]&&(f[p]={...f[p],groupId:null,group:f[p].familyId||null})}),s({groups:l,families:c,props:f,nearbyProps:r.nearbyProps.map(p=>p.groupId===t?{...p,groupId:null,group:p.familyId||null}:p),selectedGroupId:r.selectedGroupId===t?null:r.selectedGroupId});try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:l,families:c}}),h.length>0&&await Ue("propStudio:assignPropsHierarchy",{ids:h,groupId:!1}),r.showToast(`Groupe « ${(o==null?void 0:o.name)||t} » supprimé`,"info")}catch{r.showToast("Erreur lors de la suppression du groupe","error")}},createFamily:async(t,r=null,o=[])=>{const l=e(),c=t.trim()||`Famille ${l.families.length+1}`,h={id:`prop_fam_${Date.now()}_${Math.floor(Math.random()*1e3)}`,name:c,groupId:r||null},f=[...l.families,h];s({families:f});const p=o.length>0?o:l.multiSelectedIds.length>0?l.multiSelectedIds:l.selectedPropId?[l.selectedPropId]:[];if(p.length>0){const v={...l.props};p.forEach(S=>{v[S]&&(v[S]={...v[S],familyId:h.id,group:h.id,...r?{groupId:r}:{}})}),s({props:v,nearbyProps:l.nearbyProps.map(S=>p.includes(S.id)?{...S,familyId:h.id,group:h.id,...r?{groupId:r}:{}}:S),multiSelectedIds:[],selectedFamilyId:h.id,applyToFamily:!0});try{await Ue("propStudio:assignPropsHierarchy",{ids:p,familyId:h.id,groupId:r||void 0})}catch{}}try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:l.groups,families:f}}),l.showToast(`Famille « ${c} » créée`,"success")}catch{l.showToast("Erreur lors de la création de la famille","error")}return h.id},renameFamily:async(t,r)=>{const o=e(),l=r.trim();if(!l)return;const c=o.families.map(h=>h.id===t?{...h,name:l}:h);s({families:c});try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:o.groups,families:c}}),o.showToast(`Famille renommée en « ${l} »`,"info")}catch{o.showToast("Erreur lors du renommage","error")}},deleteFamily:async t=>{const r=e(),o=r.families.find(f=>f.id===t),l=r.families.filter(f=>f.id!==t),c=Object.values(r.props).filter(f=>f.familyId===t||f.group===t&&!f.familyId).map(f=>f.id),h={...r.props};c.forEach(f=>{h[f]&&(h[f]={...h[f],familyId:null,group:h[f].groupId||null})}),s({families:l,props:h,nearbyProps:r.nearbyProps.map(f=>f.familyId===t||f.group===t&&!f.familyId?{...f,familyId:null,group:f.groupId||null}:f),selectedFamilyId:r.selectedFamilyId===t?null:r.selectedFamilyId});try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:r.groups,families:l}}),c.length>0&&await Ue("propStudio:assignPropsHierarchy",{ids:c,familyId:!1}),r.showToast(`Famille « ${(o==null?void 0:o.name)||t} » dissoute`,"info")}catch{r.showToast("Erreur lors de la dissolution de la famille","error")}},moveFamilyToGroup:async(t,r)=>{var h;const o=e(),l=o.families.map(f=>f.id===t?{...f,groupId:r||null}:f);s({families:l});const c=Object.values(o.props).filter(f=>f.familyId===t||f.group===t&&!f.familyId).map(f=>f.id);if(c.length>0){const f={...o.props};c.forEach(p=>{f[p]&&(f[p]={...f[p],groupId:r||null})}),s({props:f,nearbyProps:o.nearbyProps.map(p=>c.includes(p.id)?{...p,groupId:r||null}:p)});try{await Ue("propStudio:assignPropsHierarchy",{ids:c,groupId:r||!1})}catch{}}try{await Ue("propStudio:saveHierarchy",{hierarchy:{groups:o.groups,families:l}});const f=r?(h=o.groups.find(p=>p.id===r))==null?void 0:h.name:"Racine";o.showToast(`Famille déplacée vers « ${f} »`,"info")}catch{o.showToast("Erreur lors du déplacement de la famille","error")}},assignPropToGroup:async(t,r)=>{var f;const o=e(),l=o.props[t];if(!l)return;const c=r||null,h={...l,groupId:c,group:l.familyId||c};s({props:{...o.props,[t]:h},nearbyProps:o.nearbyProps.map(p=>p.id===t?{...p,groupId:c,group:h.group}:p),selectedProp:o.selectedPropId===t?h:o.selectedProp});try{await Ue("propStudio:assignPropsHierarchy",{ids:[t],groupId:c||!1});const p=r?(f=o.groups.find(v=>v.id===r))==null?void 0:f.name:"Racine";o.showToast(`Prop assigné à « ${p} »`,"info")}catch{o.showToast("Erreur lors de l'assignation du prop au groupe","error")}},assignPropToFamily:async(t,r)=>{var p;const o=e(),l=o.props[t];if(!l)return;const c=r||null;let h=l.groupId;if(c){const v=o.families.find(S=>S.id===c);v&&v.groupId&&(h=v.groupId)}const f={...l,familyId:c,groupId:h,group:c||h};s({props:{...o.props,[t]:f},nearbyProps:o.nearbyProps.map(v=>v.id===t?{...v,...f}:v),selectedProp:o.selectedPropId===t?f:o.selectedProp});try{await Ue("propStudio:assignPropsHierarchy",{ids:[t],familyId:c||!1,groupId:h||void 0});const v=r?(p=o.families.find(S=>S.id===r))==null?void 0:p.name:"Aucune";o.showToast(`Prop lié à la famille « ${v} »`,"info")}catch{o.showToast("Erreur lors de l'assignation du prop à la famille","error")}},assignMultipleProps:async(t,r,o)=>{const l=e();if(t.length===0)return;let c=r;if(o){const f=l.families.find(p=>p.id===o);f&&f.groupId&&(c=f.groupId)}const h={...l.props};t.forEach(f=>{h[f]&&(h[f]={...h[f],...r!==void 0?{groupId:c||null}:{},...o!==void 0?{familyId:o||null}:{},group:o||c||h[f].groupId||null})}),s({props:h,nearbyProps:l.nearbyProps.map(f=>h[f.id]?{...f,...h[f.id]}:f),multiSelectedIds:[]});try{await Ue("propStudio:assignPropsHierarchy",{ids:t,groupId:r!==void 0?c||!1:void 0,familyId:o!==void 0?o||!1:void 0}),l.showToast(`${t.length} props mis à jour`,"success")}catch{l.showToast("Erreur lors de la mise à jour des props","error")}},setSelectedFamilyId:t=>{if(s({selectedFamilyId:t,selectedGroupId:t}),t){const o=Object.values(e().props).filter(l=>l.familyId===t||l.group===t&&!l.familyId);if(o.length>0){let l=0,c=0,h=0;for(const v of o)l+=v.coords.x,c+=v.coords.y,h+=v.coords.z;const f={x:l/o.length,y:c/o.length,z:h/o.length},p=o[0];s({selectedPropId:null,selectedProp:null,applyToFamily:!0}),Ue("propStudio:setFamilyCenter",{familyId:t,coords:f,heading:p.heading||0}).catch(()=>{})}}},setSelectedGroupId:t=>{s({selectedGroupId:t,selectedFamilyId:t})},toggleMultiSelectId:t=>{s(r=>({multiSelectedIds:r.multiSelectedIds.includes(t)?r.multiSelectedIds.filter(o=>o!==t):[...r.multiSelectedIds,t]}))},selectAllNearby:()=>{const t=e().nearbyProps.map(r=>r.id);s({multiSelectedIds:t})},clearMultiSelect:()=>s({multiSelectedIds:[]}),getCurrentPropFamily:()=>{const{selectedPropId:t,props:r}=e();if(!t)return null;const o=r[t];return(o==null?void 0:o.familyId)||(o==null?void 0:o.group)||null},getCurrentPropGroup:()=>{const{selectedPropId:t,props:r}=e();if(!t)return null;const o=r[t];return(o==null?void 0:o.groupId)||null},updateFamilyTransform:(t,r=0)=>{var N;const o=e(),l=o.selectedFamilyId;if(!l)return;const h=Object.values(o.props).filter(L=>L.familyId===l||L.group===l&&!L.familyId);if(h.length===0)return;let f=0,p=0,v=0;for(const L of h)f+=L.coords.x,p+=L.coords.y,v+=L.coords.z;const S=f/h.length,y=p/h.length,x=r*Math.PI/180,w=Math.cos(x),T=Math.sin(x),b=t.x||0,_=t.y||0,A=t.z||0,U={...o.props};for(const L of h){let F=L.coords.x+b,M=L.coords.y+_,P=L.coords.z+A;if(r!==0){const V=F-S,Z=M-y,O=V*w-Z*T,J=V*T+Z*w;F=S+O,M=y+J}const j=r!==0?((L.heading||((N=L.rotation)==null?void 0:N.z)||0)+r)%360:L.heading||0,k=L.rotation?{...L.rotation,z:j}:{x:0,y:0,z:j},W={...L,coords:{x:F,y:M,z:P},heading:j,rotation:k};U[L.id]=W,Ue("propStudio:moveEntity",{id:L.id,position:W.coords,rotation:k}).catch(()=>{})}s({props:U,nearbyProps:o.nearbyProps.map(L=>U[L.id]?{...L,...U[L.id]}:L)})},saveCurrentFamily:async()=>{const t=e(),r=t.selectedFamilyId;if(!r)return;const o=Object.values(t.props).filter(h=>h.familyId===r||h.group===r&&!h.familyId),l=o.map(h=>h.id);if(l.length===0)return;const c={};for(const h of o)c[h.id]={coords:h.coords,heading:h.heading||0,rotation:h.rotation};try{await Ue("propStudio:saveFamily",{ids:l,familyId:r,positions:c}),t.showToast(`Famille sauvegardée (${l.length} props)`,"success")}catch{t.showToast("Erreur lors de la sauvegarde de la famille","error")}},setCatalogOpen:t=>s({catalogOpen:t}),toggleCatalog:()=>s(t=>({catalogOpen:!t.catalogOpen})),initializeCatalog:(t,r)=>{const l=["Everything","Assemblages",...(t||[]).filter(c=>c!=="Everything"&&c!=="Assemblages")];s({categories:l,catalog:r||[]})},setProps:(t,r,o,l)=>{const c={};(t||[]).forEach(p=>{p&&p.id&&(c[p.id]=p)});const h=e().selectedPropId;let f=h&&c[h]||null;s({props:c,locks:r||e().locks,selectedProp:f,...o?{groups:o.groups||[],families:o.families||[]}:{},...l?{assemblages:l}:{}})},setAssemblages:t=>{s({assemblages:t||[]})},openSaveAssemblageModal:(t,r=null)=>{s({assemblageModalOpen:!0,assemblageModalFamilyId:t,editingAssemblage:r||null})},closeSaveAssemblageModal:()=>{s({assemblageModalOpen:!1,assemblageModalFamilyId:null,editingAssemblage:null})},saveFamilyAsAssemblage:async({familyId:t,name:r,category:o,description:l,id:c})=>{const h=e(),f=Object.values(h.props).filter(_=>_.familyId===t||_.group===t&&!_.familyId);if(f.length===0){h.showToast("Aucun prop trouvé dans cette famille","error");return}let p=0,v=0,S=1/0;for(const _ of f)p+=_.coords.x,v+=_.coords.y,_.coords.z<S&&(S=_.coords.z);const y=p/f.length,x=v/f.length,w=S,T=f.map(_=>{const A=Number((_.coords.x-y).toFixed(3)),U=Number((_.coords.y-x).toFixed(3)),N=Number((_.coords.z-w).toFixed(3)),L=_.rotation||{x:0,y:0,z:_.heading||0},F=_.heading??L.z??0;return{model:_.model,label:_.label,relCoords:{x:A,y:U,z:N},rotation:{x:L.x,y:L.y,z:L.z},heading:F,renderDistance:_.renderDistance,textureVariation:_.textureVariation,collision:_.collision,opacity:_.opacity,scale:_.scale,physics:_.physics}}),b={id:c||void 0,name:r,category:o||"Général",description:l||"",thumbnail:`thumbnails/${f[0].model}.webp`,propsData:T};try{await Ue("propStudio:saveAssemblage",b),c&&Ue("propStudio:captureAssemblageThumb",{assemblageId:c,propsData:T}).catch(()=>{}),h.closeSaveAssemblageModal(),h.showToast(`Assemblage '${r}' sauvegardé (${T.length} props)`,"success")}catch{h.showToast("Erreur lors de l'enregistrement de l'assemblage","error")}},deleteAssemblage:async t=>{const r=e();try{await Ue("propStudio:deleteAssemblage",{id:t}),s(o=>({assemblages:o.assemblages.filter(l=>l.id!==t)})),r.showToast("Assemblage supprimé du catalogue","info")}catch{r.showToast("Erreur lors de la suppression de l'assemblage","error")}},duplicateAssemblage:async t=>{const r=e();try{await Ue("propStudio:duplicateAssemblage",{id:t}),r.showToast("Duplication de l'assemblage...","info")}catch{r.showToast("Erreur lors de la duplication de l'assemblage","error")}},spawnAssemblage:async(t,r)=>{const o=e();try{await Ue("propStudio:spawnAssemblage",{assemblageId:t,familyName:r}),o.showToast("Assemblage en cours de placement...","info")}catch{o.showToast("Erreur lors du placement de l'assemblage","error")}},updateAssemblageMetadata:async(t,r)=>{const o=e(),l=o.assemblages.find(h=>h.id===t);if(!l)return;const c={...l,...r};try{await Ue("propStudio:saveAssemblage",c),s(h=>({assemblages:h.assemblages.map(f=>f.id===t?c:f)})),o.showToast("Assemblage mis à jour","success")}catch{o.showToast("Erreur mise à jour assemblage","error")}},setNearbyProps:t=>{const r=t||[],o=e().nearbyProps;if(o.length===r.length){let l=!0;for(let c=0;c<o.length;c++){const h=o[c],f=r[c];if(h.id!==f.id||Math.abs((h.distance||0)-(f.distance||0))>.4){l=!1;break}}if(l)return}s({nearbyProps:r})},syncSingleProp:t=>{!t||!t.id||s(r=>{const o={...r.props,[t.id]:t},l=r.selectedPropId===t.id;return{props:o,selectedProp:l?t:r.selectedProp}})},syncLock:(t,r)=>{s(o=>{const l={...o.locks};return r?l[t]=r:delete l[t],{locks:l,isLockedByOther:!1,lockOwnerName:null}})},onPropDeleted:t=>{s(r=>{const o={...r.props};delete o[t];const l={...r.locks};delete l[t];const c=r.selectedPropId===t;return{props:o,nearbyProps:r.nearbyProps.filter(h=>h.id!==t),locks:l,selectedPropId:c?null:r.selectedPropId,selectedProp:c?null:r.selectedProp,isLockedByOther:c?!1:r.isLockedByOther,lockOwnerName:c?null:r.lockOwnerName,multiSelectedIds:r.multiSelectedIds.filter(h=>h!==t)}}),e().showToast("Prop supprimé avec succès","info")},setLoadedPropsCount:t=>{s({loadedPropsCount:t})},setSelectedCategory:t=>s({selectedCategory:t}),setSearchQuery:t=>s({searchQuery:t}),setFilterLoadedOnly:t=>s({filterLoadedOnly:t}),setCustomModelInput:t=>s({customModelInput:t}),selectProp:async t=>{const r=e().props[t];if(r){s({selectedPropId:t,selectedProp:r,selectedFamilyId:null,selectedGroupId:null,isLockedByOther:!1,lockOwnerName:null});try{await Ue("propStudio:selectProp",{id:t})}catch{}}},deselectProp:async()=>{s({selectedPropId:null,selectedProp:null,selectedFamilyId:null,selectedGroupId:null,isLockedByOther:!1,lockOwnerName:null});try{await Ue("propStudio:deselectProp")}catch{}},setSelectedPropDirect:t=>{s(t?{selectedPropId:t.id,selectedProp:t,props:{...e().props,[t.id]:t}}:{selectedPropId:null,selectedProp:null})},spawnProp:async t=>{if(t)try{await Ue("propStudio:spawnProp",{model:t}),e().showToast(`Prop placé : ${t}`,"success")}catch{e().showToast(`Erreur lors du placement de ${t}`,"error")}},placeCustomModel:async()=>{const t=e().customModelInput.trim();if(!t){e().showToast("Veuillez saisir un nom de modèle GTA V","warning");return}try{const r=await Ue("propStudio:validateCustomModel",{model:t});r&&r.valid?(await Ue("propStudio:spawnProp",{model:t}),s({customModelInput:""}),e().showToast(`Modèle personnalisé placé : ${t}`,"success")):e().showToast((r==null?void 0:r.error)||"Modèle invalide ou introuvable dans GTA V","error")}catch{e().showToast("Erreur lors du test du modèle personnalisé","error")}},updatePropPosition:(t,r=!1)=>{const o=e().selectedProp;if(!o)return;const l={x:t.x!==void 0?t.x:o.coords.x,y:t.y!==void 0?t.y:o.coords.y,z:t.z!==void 0?t.z:o.coords.z},c={...o,coords:l};s({selectedProp:c,props:{...e().props,[o.id]:c}}),Ue("propStudio:moveEntity",{position:l,rotation:o.rotation}).catch(()=>{}),r?(clearTimeout(zr),Ue("propStudio:saveEntity",{position:l,rotation:o.rotation}).catch(()=>{})):(clearTimeout(zr),zr=setTimeout(()=>{Ue("propStudio:saveEntity",{position:l,rotation:o.rotation}).catch(()=>{})},350))},updatePropRotation:(t,r=!1)=>{const o=e().selectedProp;if(!o)return;const l={x:t.x!==void 0?t.x:o.rotation.x,y:t.y!==void 0?t.y:o.rotation.y,z:t.z!==void 0?t.z:o.rotation.z},c={...o,rotation:l,heading:l.z};s({selectedProp:c,props:{...e().props,[o.id]:c}}),Ue("propStudio:moveEntity",{position:o.coords,rotation:l}).catch(()=>{}),r?(clearTimeout(zr),Ue("propStudio:saveEntity",{position:o.coords,rotation:l}).catch(()=>{})):(clearTimeout(zr),zr=setTimeout(()=>{Ue("propStudio:saveEntity",{position:o.coords,rotation:l}).catch(()=>{})},350))},updatePropProperties:(t,r=!1)=>{const o=e().selectedProp;if(!o)return;const l={...o,...t};s({selectedProp:l,props:{...e().props,[o.id]:l}});const c={renderDistance:l.renderDistance,textureVariation:l.textureVariation,collision:l.collision};r?Ue("propStudio:updateProperties",c).catch(()=>{}):(clearTimeout(zr),zr=setTimeout(()=>{Ue("propStudio:updateProperties",c).catch(()=>{})},300))},duplicateSelectedProp:async()=>{if(e().selectedPropId)try{await Ue("propStudio:duplicateProp"),e().showToast("Prop dupliqué avec succès (LShift)","success")}catch{e().showToast("Erreur lors de la duplication","error")}},deleteSelectedProp:async()=>{const t=e().selectedPropId;if(t)try{await Ue("propStudio:deleteProp",{id:t}),e().showToast("Prop supprimé avec succès","info")}catch{e().showToast("Erreur lors de la suppression","error")}},snapGround:async()=>{try{const t=await Ue("propStudio:snapGround");t&&t.success?e().showToast("Prop plaqué au sol avec succès (G)","success"):e().showToast("Aucun sol détecté en dessous","warning")}catch{e().showToast("Erreur lors du snap au sol","error")}},applyPhysics:async()=>{try{e().showToast("Simulation physique en cours... (I)","info"),await Ue("propStudio:applyPhysics")}catch{e().showToast("Erreur lors de la simulation physique","error")}},exitEditor:async()=>{try{await Ue("propStudio:exit"),await Ue("cancel")}catch{}},setExistingThumbnails:t=>{const r={};(t||[]).forEach(o=>{o&&(r[o]=!0)}),s({existingThumbnails:r})},addExistingThumbnail:t=>{t&&s(r=>({existingThumbnails:{...r.existingThumbnails,[t]:!0},thumbVersions:{...r.thumbVersions,[t]:Date.now()}}))},setThumbProgress:t=>s({thumbProgress:t}),setIsGeneratingThumbs:t=>s({isGeneratingThumbs:t}),generateThumbs:async(t="missing")=>{try{await Ue("propStudio:generateThumbs",{mode:t})}catch{}},generateSingleThumb:async t=>{try{await Ue("propStudio:generateSingleThumb",{model:t})}catch{}},cancelThumbs:async()=>{try{await Ue("propStudio:cancelThumbs")}catch{}},showToast:(t,r="info")=>{s({toastMessage:t,toastType:r}),setTimeout(()=>{e().toastMessage===t&&s({toastMessage:null})},3e3)},hideToast:()=>s({toastMessage:null})}));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lx=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Xe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...h},f)=>Xe.createElement("svg",{ref:f,...n_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:lx("lucide",o),...h},[...c.map(([p,v])=>Xe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(s,e)=>{const t=Xe.forwardRef(({className:r,...o},l)=>Xe.createElement(i_,{ref:l,iconNode:e,className:lx(`lucide-${t_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Xm=_t("ArrowDownToLine",r_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Ui=_t("Box",s_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],cx=_t("Camera",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],qm=_t("Car",a_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Si=_t("Check",l_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yi=_t("ChevronDown",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],d_=_t("ChevronLeft",u_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mo=_t("ChevronRight",h_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],$m=_t("ChevronUp",f_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],$h=_t("CircleAlert",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],g_=_t("CircleCheck",m_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ym=_t("Circle",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]],Zm=_t("Cone",v_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Dc=_t("Copy",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],S_=_t("Crosshair",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Sa=_t("EllipsisVertical",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Km=_t("Flame",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ea=_t("FolderOpen",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ux=_t("FolderPlus",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]],uo=_t("FolderX",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Ss=_t("Folder",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],N_=_t("Info",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],P_=_t("Keyboard",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Kt=_t("Layers",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Qm=_t("Lightbulb",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],F_=_t("Link2",D_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],O_=_t("LoaderCircle",U_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],dx=_t("MoveRight",k_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],go=_t("Pen",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Fc=_t("Plus",B_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],H_=_t("RefreshCw",G_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],nh=_t("RotateCcw",j_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],W_=_t("Save",V_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],hx=_t("Search",X_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],fx=_t("ShieldAlert",q_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Y_=_t("Shield",$_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Mo=_t("Sparkles",Z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ih=_t("SquareCheckBig",K_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],rh=_t("Square",Q_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],px=_t("Sun",J_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],bs=_t("Trash2",ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],ny=_t("Unlink",ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jm=_t("User",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],sy=_t("WandSparkles",ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xr=_t("X",oy),ay=()=>{const{toolkitName:s,statusText:e,activeStudio:t,studios:r,setActiveStudio:o,requestCancel:l}=sn(),c=(h,f)=>{const p=`w-3 h-3 ${f?"text-hud-accent":"text-hud-muted"}`;switch(h){case"light":return d.jsx(px,{className:p});case"prop":return d.jsx(Ui,{className:p});case"fx":return d.jsx(Mo,{className:p});default:return d.jsx(Kt,{className:p})}};return d.jsxs("header",{className:"fixed top-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 px-3 py-1.5 bg-hud-panel border border-hud-border rounded shadow-md select-none pointer-events-auto",children:[d.jsxs("div",{className:"flex items-center gap-2 pr-2.5 border-r border-hud-border",children:[d.jsx("span",{className:"text-[11px] font-bold tracking-wider uppercase text-hud-text",children:s||"CREATOR TOOLKIT"}),d.jsx("span",{className:"text-hud-borderLight text-xs",children:"/"}),d.jsx("span",{className:"text-[10px] font-mono text-hud-muted",children:e})]}),d.jsx("nav",{"aria-label":"Studios",className:"flex items-center gap-1 bg-hud-bg/80 p-0.5 rounded border border-hud-border",children:r.map(h=>{const f=t===h.id;return d.jsxs("button",{onClick:()=>o(h.id),title:h.description||h.label||h.name,className:`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${f?"bg-hud-surface text-hud-text border border-hud-borderLight shadow-sm font-semibold":"text-hud-muted hover:text-hud-text hover:bg-hud-surface/50 border border-transparent"}`,children:[c(h.id,f),d.jsx("span",{children:h.label||h.name})]},h.id)})}),d.jsx("div",{className:"pl-1 border-l border-hud-border",children:d.jsx("button",{onClick:l,title:"Fermer l'éditeur (Échap ou F5)",className:"w-6 h-6 flex items-center justify-center rounded text-hud-muted hover:text-hud-text hover:bg-hud-surface transition-colors",children:d.jsx(xr,{className:"w-3.5 h-3.5"})})})]})},ly=()=>{const{commandBarOpen:s,cameraMode:e,activeStudio:t,setCommandBarOpen:r}=sn();return d.jsx("aside",{"aria-label":"Raccourcis et commandes",className:"fixed left-4 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-auto",children:s?d.jsxs("div",{className:"w-60 bg-hud-panel border border-hud-border rounded shadow-md p-2.5 flex flex-col gap-2",children:[d.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b border-hud-border",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Raccourcis"}),d.jsx("button",{onClick:()=>r(!1),title:"Réduire l'aide",className:"w-5 h-5 flex items-center justify-center text-hud-muted hover:text-hud-text hover:bg-hud-surface rounded transition-colors",children:d.jsx(d_,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"space-y-1 text-[11px]",children:[d.jsxs("div",{className:"pt-0.5 pb-1",children:[d.jsx("span",{className:"text-[9px] font-mono uppercase tracking-wider text-hud-muted/70 block mb-1",children:"Vue & Déplacement"}),d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Ouvrir / Fermer"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-accent font-semibold",children:"F5"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Bascule Caméra"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"F"})]}),e==="freecam"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Voler"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"Z / Q / S / D"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Monter / Descendre"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"Espace / Ctrl"})]})]}):d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Zoom caméra"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"Molette"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Orienter la vue"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"Glisser Souris"})]})]})]}),d.jsx("div",{className:"w-full h-[1px] bg-hud-border"}),d.jsxs("div",{className:"pt-0.5",children:[d.jsx("span",{className:"text-[9px] font-mono uppercase tracking-wider text-hud-muted/70 block mb-1",children:"Édition & Manipulation"}),d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Déplacer (Translation)"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"E"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Pivoter (Rotation)"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"R"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Aimantation (Snap)"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"X"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Plaquer au sol"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"G"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Catalogue de props"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"C"})]}),t==="prop"&&d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Appliquer physique"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-accent font-semibold",children:"I"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:"Dupliquer le prop"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-accent font-semibold",children:"LShift"})]}),d.jsxs("div",{className:"flex items-center justify-between py-0.5",children:[d.jsx("span",{className:"text-hud-text",children:t==="prop"?"Supprimer le prop":"Supprimer le spot"}),d.jsx("kbd",{className:"px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted",children:"Suppr"})]})]})]})]})]}):d.jsxs("button",{onClick:()=>r(!0),title:"Afficher les commandes",className:"flex items-center gap-1.5 px-2 py-1.5 rounded bg-hud-panel border border-hud-border shadow-md text-hud-muted hover:text-hud-text transition-colors",children:[d.jsx(P_,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wider",children:"Aide"}),d.jsx(mo,{className:"w-3 h-3 text-hud-muted"})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="187",cy=0,eg=1,uy=2,pc=1,dy=2,xa=3,ws=0,ii=1,Ki=2,xo=0,ba=1,tg=2,ng=3,ig=4,hy=5,co=100,fy=101,py=102,my=103,gy=104,xy=200,vy=201,_y=202,yy=203,mx=204,gx=205,Sy=206,by=207,My=208,wy=209,Ey=210,Ty=211,Ay=212,Cy=213,Ny=214,sh=0,oh=1,ah=2,Ta=3,lh=4,ch=5,uh=6,dh=7,xx=0,Ry=1,Py=2,_r=0,vx=1,_x=2,yx=3,Sx=4,bx=5,Mx=6,wx=7,Ex=300,_o=301,Aa=302,bd=303,Md=304,hh=1e3,vr=1001,fh=1002,On=1003,Ly=1004,zl=1005,ni=1006,wd=1007,Yr=1008,bi=1009,Tx=1010,Ax=1011,Ca=1012,Zh=1013,tr=1014,Qi=1015,nr=1016,Kh=1017,Qh=1018,yo=1020,Cx=35902,Nx=35899,Rx=1021,Px=1022,Ji=1023,Kr=1026,Zr=1027,Lx=1028,Jh=1029,Es=1030,ef=1031,tf=1033,mc=33776,gc=33777,xc=33778,vc=33779,ph=35840,mh=35841,gh=35842,xh=35843,vh=36196,_h=37492,yh=37496,Sh=37488,bh=37489,bc=37490,Mh=37491,wh=37808,Eh=37809,Th=37810,Ah=37811,Ch=37812,Nh=37813,Rh=37814,Ph=37815,Lh=37816,Ih=37817,Dh=37818,Fh=37819,Uh=37820,Oh=37821,kh=36492,zh=36494,Bh=36495,Gh=36283,Hh=36284,Mc=36285,jh=36286,Iy=3200,rg=0,Dy=1,$r="",_i="srgb",wc="srgb-linear",Ec="linear",Vt="srgb",Ed=7680,Fy=519,Uy=512,Oy=513,ky=514,Ix=515,zy=516,By=517,Dx=518,Fx=519,Gy=35044,sg="300 es",ki=2e3,Tc=2001;function Hy(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jy(){const s=Ac("canvas");return s.style.display="block",s}const og={};function ag(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ux(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=Ux(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function zt(...s){s=Ux(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function _c(...s){const e=s.join(" ");e in og||(og[e]=!0,gt(...s))}function Vy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Wy={[sh]:sh,[ah]:uh,[lh]:lh,[Ta]:ch,[oh]:oh,[uh]:ah,[dh]:dh,[ch]:Ta};class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lg=1234567;const Ma=Math.PI/180,Na=180/Math.PI;function wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function nf(s,e){return(s%e+e)%e}function Xy(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function qy(s,e,t){return s!==e?(t-s)/(e-s):0}function wa(s,e,t){return(1-t)*s+t*e}function $y(s,e,t,r){return wa(s,e,1-Math.exp(-t*r))}function Yy(s,e=1){return e-Math.abs(nf(s,e*2)-e)}function Zy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ky(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Qy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Jy(s,e){return s+Math.random()*(e-s)}function eS(s){return s*(.5-Math.random())}function tS(s){s!==void 0&&(lg=s);let e=lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nS(s){return s*Ma}function iS(s){return s*Na}function rS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function sS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ox(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function oS(s,e,t,r,o){const l=Math.cos,c=Math.sin,h=l(t/2),f=c(t/2),p=l((e+r)/2),v=c((e+r)/2),S=l((e-r)/2),y=c((e-r)/2),x=l((r-e)/2),w=c((r-e)/2);switch(o){case"XYX":s.set(h*v,f*S,f*y,h*p);break;case"YZY":s.set(f*y,h*v,f*S,h*p);break;case"ZXZ":s.set(f*S,f*y,h*v,h*p);break;case"XZX":s.set(h*v,f*w,f*x,h*p);break;case"YXY":s.set(f*x,h*v,f*w,h*p);break;case"ZYZ":s.set(f*w,f*x,h*v,h*p);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function rf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kx(s,e){if(e.constructor===Float32Array)return s;const t=rf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function zx(s,e){if(e.constructor===Float32Array)return s;const t=rf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const aS={DEG2RAD:Ma,RAD2DEG:Na,generateUUID:wo,clamp:Pt,euclideanModulo:nf,mapLinear:Xy,inverseLerp:qy,lerp:wa,damp:$y,pingpong:Yy,smoothstep:Zy,smootherstep:Ky,randInt:Qy,randFloat:Jy,randFloatSpread:eS,seededRandom:tS,degToRad:nS,radToDeg:iS,isPowerOfTwo:rS,ceilPowerOfTwo:sS,floorPowerOfTwo:Ox,setQuaternionFromProperEuler:oS,normalize:zx,denormalize:kx},ff=class ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;let Dt=ff;class Un{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,h){let f=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],y=l[c+0],x=l[c+1],w=l[c+2],T=l[c+3];if(S!==T||f!==y||p!==x||v!==w){let b=f*y+p*x+v*w+S*T;b<0&&(y=-y,x=-x,w=-w,T=-T,b=-b);let _=1-h;if(b<.9995){const A=Math.acos(b),U=Math.sin(A);_=Math.sin(_*A)/U,h=Math.sin(h*A)/U,f=f*_+y*h,p=p*_+x*h,v=v*_+w*h,S=S*_+T*h}else{f=f*_+y*h,p=p*_+x*h,v=v*_+w*h,S=S*_+T*h;const A=1/Math.sqrt(f*f+p*p+v*v+S*S);f*=A,p*=A,v*=A,S*=A}}e[t]=f,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,c){const h=r[o],f=r[o+1],p=r[o+2],v=r[o+3],S=l[c],y=l[c+1],x=l[c+2],w=l[c+3];return e[t]=h*w+v*S+f*x-p*y,e[t+1]=f*w+v*y+p*S-h*x,e[t+2]=p*w+v*x+h*y-f*S,e[t+3]=v*w-h*S-f*y-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,p=h(r/2),v=h(o/2),S=h(l/2),y=f(r/2),x=f(o/2),w=f(l/2);switch(c){case"XYZ":this._x=y*v*S+p*x*w,this._y=p*x*S-y*v*w,this._z=p*v*w+y*x*S,this._w=p*v*S-y*x*w;break;case"YXZ":this._x=y*v*S+p*x*w,this._y=p*x*S-y*v*w,this._z=p*v*w-y*x*S,this._w=p*v*S+y*x*w;break;case"ZXY":this._x=y*v*S-p*x*w,this._y=p*x*S+y*v*w,this._z=p*v*w+y*x*S,this._w=p*v*S-y*x*w;break;case"ZYX":this._x=y*v*S-p*x*w,this._y=p*x*S+y*v*w,this._z=p*v*w-y*x*S,this._w=p*v*S+y*x*w;break;case"YZX":this._x=y*v*S+p*x*w,this._y=p*x*S+y*v*w,this._z=p*v*w-y*x*S,this._w=p*v*S-y*x*w;break;case"XZY":this._x=y*v*S-p*x*w,this._y=p*x*S-y*v*w,this._z=p*v*w+y*x*S,this._w=p*v*S+y*x*w;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],h=t[5],f=t[9],p=t[2],v=t[6],S=t[10],y=r+h+S;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-f)*x,this._y=(l-p)*x,this._z=(c-o)*x}else if(r>h&&r>S){const x=2*Math.sqrt(1+r-h-S);this._w=(v-f)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+p)/x}else if(h>S){const x=2*Math.sqrt(1+h-r-S);this._w=(l-p)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(f+v)/x}else{const x=2*Math.sqrt(1+S-r-h);this._w=(c-o)/x,this._x=(l+p)/x,this._y=(f+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,h=t._x,f=t._y,p=t._z,v=t._w;return this._x=r*v+c*h+o*p-l*f,this._y=o*v+c*f+l*h-r*p,this._z=l*v+c*p+r*f-o*h,this._w=c*v-r*h-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,c=-c,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);f=Math.sin(f*p)/v,t=Math.sin(t*p)/v,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pf=class pf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,h=e.z,f=e.w,p=2*(c*o-h*r),v=2*(h*t-l*o),S=2*(l*r-c*t);return this.x=t+f*p+c*S-h*v,this.y=r+f*v+h*p-l*S,this.z=o+f*S+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=o*f-l*h,this.y=l*c-r*f,this.z=r*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pf.prototype.isVector3=!0;let ne=pf;const Td=new ne,cg=new Un,mf=class mf{constructor(e,t,r,o,l,c,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,h,f,p)}set(e,t,r,o,l,c,h,f,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=l,v[5]=f,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],h=r[3],f=r[6],p=r[1],v=r[4],S=r[7],y=r[2],x=r[5],w=r[8],T=o[0],b=o[3],_=o[6],A=o[1],U=o[4],N=o[7],L=o[2],F=o[5],M=o[8];return l[0]=c*T+h*A+f*L,l[3]=c*b+h*U+f*F,l[6]=c*_+h*N+f*M,l[1]=p*T+v*A+S*L,l[4]=p*b+v*U+S*F,l[7]=p*_+v*N+S*M,l[2]=y*T+x*A+w*L,l[5]=y*b+x*U+w*F,l[8]=y*_+x*N+w*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],v=e[8];return t*c*v-t*h*p-r*l*v+r*h*f+o*l*p-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],v=e[8],S=v*c-h*p,y=h*f-v*l,x=p*l-c*f,w=t*S+r*y+o*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=S*T,e[1]=(o*p-v*r)*T,e[2]=(h*r-o*c)*T,e[3]=y*T,e[4]=(v*t-o*f)*T,e[5]=(o*l-h*t)*T,e[6]=x*T,e[7]=(r*f-p*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*h)+c+e,-o*p,o*f,-o*(-p*c+f*h)+h+t,0,0,1),this}scale(e,t){return _c("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ad.makeScale(e,t)),this}rotate(e){return _c("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ad.makeRotation(-e)),this}translate(e,t){return _c("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mf.prototype.isMatrix3=!0;let vt=mf;const Ad=new vt,ug=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dg=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lS(){const s={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(o.r=yr(o.r),o.g=yr(o.g),o.b=yr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$r?Ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[wc]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:ug,fromXYZ:dg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:ug,fromXYZ:dg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const It=lS();function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ks;class cS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=Ac("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ac("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=yr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(yr(t[r]/255)*255):t[r]=yr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uS=0;class sf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?l.push(Cd(o[c].image)):l.push(Cd(o[c]))}else l=Cd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let dS=0;const Nd=new ne;class Yn extends Qr{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,r=vr,o=vr,l=ni,c=Yr,h=Ji,f=bi,p=Yn.DEFAULT_ANISOTROPY,v=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=wo(),this.name="",this.source=new sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Ex;Yn.DEFAULT_ANISOTROPY=1;const gf=class gf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],v=f[4],S=f[8],y=f[1],x=f[5],w=f[9],T=f[2],b=f[6],_=f[10];if(Math.abs(v-y)<.01&&Math.abs(S-T)<.01&&Math.abs(w-b)<.01){if(Math.abs(v+y)<.1&&Math.abs(S+T)<.1&&Math.abs(w+b)<.1&&Math.abs(p+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,N=(x+1)/2,L=(_+1)/2,F=(v+y)/4,M=(S+T)/4,P=(w+b)/4;return U>N&&U>L?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=F/r,l=M/r):N>L?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=F/o,l=P/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=M/l,o=P/l),this.set(r,o,l,t),this}let A=Math.sqrt((b-w)*(b-w)+(S-T)*(S-T)+(y-v)*(y-v));return Math.abs(A)<.001&&(A=1),this.x=(b-w)/A,this.y=(S-T)/A,this.z=(y-v)/A,this.w=Math.acos((p+x+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gf.prototype.isVector4=!0;let pn=gf;class hS extends Qr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Yn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new sf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends hS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Bx extends Yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fS extends Yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ic=class Ic{constructor(e,t,r,o,l,c,h,f,p,v,S,y,x,w,T,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,h,f,p,v,S,y,x,w,T,b)}set(e,t,r,o,l,c,h,f,p,v,S,y,x,w,T,b){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=h,_[13]=f,_[2]=p,_[6]=v,_[10]=S,_[14]=y,_[3]=x,_[7]=w,_[11]=T,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ic().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),l=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),h=Math.sin(r),f=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const y=c*v,x=c*S,w=h*v,T=h*S;t[0]=f*v,t[4]=-f*S,t[8]=p,t[1]=x+w*p,t[5]=y-T*p,t[9]=-h*f,t[2]=T-y*p,t[6]=w+x*p,t[10]=c*f}else if(e.order==="YXZ"){const y=f*v,x=f*S,w=p*v,T=p*S;t[0]=y+T*h,t[4]=w*h-x,t[8]=c*p,t[1]=c*S,t[5]=c*v,t[9]=-h,t[2]=x*h-w,t[6]=T+y*h,t[10]=c*f}else if(e.order==="ZXY"){const y=f*v,x=f*S,w=p*v,T=p*S;t[0]=y-T*h,t[4]=-c*S,t[8]=w+x*h,t[1]=x+w*h,t[5]=c*v,t[9]=T-y*h,t[2]=-c*p,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const y=c*v,x=c*S,w=h*v,T=h*S;t[0]=f*v,t[4]=w*p-x,t[8]=y*p+T,t[1]=f*S,t[5]=T*p+y,t[9]=x*p-w,t[2]=-p,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const y=c*f,x=c*p,w=h*f,T=h*p;t[0]=f*v,t[4]=T-y*S,t[8]=w*S+x,t[1]=S,t[5]=c*v,t[9]=-h*v,t[2]=-p*v,t[6]=x*S+w,t[10]=y-T*S}else if(e.order==="XZY"){const y=c*f,x=c*p,w=h*f,T=h*p;t[0]=f*v,t[4]=-S,t[8]=p*v,t[1]=y*S+T,t[5]=c*v,t[9]=x*S-w,t[2]=w*S-x,t[6]=h*v,t[10]=T*S+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,t,r){const o=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Br.crossVectors(r,ui),Br.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Br.crossVectors(r,ui)),Br.normalize(),Bl.crossVectors(ui,Br),o[0]=Br.x,o[4]=Bl.x,o[8]=ui.x,o[1]=Br.y,o[5]=Bl.y,o[9]=ui.y,o[2]=Br.z,o[6]=Bl.z,o[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],h=r[4],f=r[8],p=r[12],v=r[1],S=r[5],y=r[9],x=r[13],w=r[2],T=r[6],b=r[10],_=r[14],A=r[3],U=r[7],N=r[11],L=r[15],F=o[0],M=o[4],P=o[8],j=o[12],k=o[1],W=o[5],V=o[9],Z=o[13],O=o[2],J=o[6],ce=o[10],$=o[14],z=o[3],G=o[7],X=o[11],I=o[15];return l[0]=c*F+h*k+f*O+p*z,l[4]=c*M+h*W+f*J+p*G,l[8]=c*P+h*V+f*ce+p*X,l[12]=c*j+h*Z+f*$+p*I,l[1]=v*F+S*k+y*O+x*z,l[5]=v*M+S*W+y*J+x*G,l[9]=v*P+S*V+y*ce+x*X,l[13]=v*j+S*Z+y*$+x*I,l[2]=w*F+T*k+b*O+_*z,l[6]=w*M+T*W+b*J+_*G,l[10]=w*P+T*V+b*ce+_*X,l[14]=w*j+T*Z+b*$+_*I,l[3]=A*F+U*k+N*O+L*z,l[7]=A*M+U*W+N*J+L*G,l[11]=A*P+U*V+N*ce+L*X,l[15]=A*j+U*Z+N*$+L*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],h=e[5],f=e[9],p=e[13],v=e[2],S=e[6],y=e[10],x=e[14],w=e[3],T=e[7],b=e[11],_=e[15],A=f*x-p*y,U=h*x-p*S,N=h*y-f*S,L=c*x-p*v,F=c*y-f*v,M=c*S-h*v;return t*(T*A-b*U+_*N)-r*(w*A-b*L+_*F)+o*(w*U-T*L+_*M)-l*(w*N-T*F+b*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],c=e[5],h=e[9],f=e[2],p=e[6],v=e[10];return t*(c*v-h*p)-r*(l*v-h*f)+o*(l*p-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],v=e[8],S=e[9],y=e[10],x=e[11],w=e[12],T=e[13],b=e[14],_=e[15],A=t*h-r*c,U=t*f-o*c,N=t*p-l*c,L=r*f-o*h,F=r*p-l*h,M=o*p-l*f,P=v*T-S*w,j=v*b-y*w,k=v*_-x*w,W=S*b-y*T,V=S*_-x*T,Z=y*_-x*b,O=A*Z-U*V+N*W+L*k-F*j+M*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/O;return e[0]=(h*Z-f*V+p*W)*J,e[1]=(o*V-r*Z-l*W)*J,e[2]=(T*M-b*F+_*L)*J,e[3]=(y*F-S*M-x*L)*J,e[4]=(f*k-c*Z-p*j)*J,e[5]=(t*Z-o*k+l*j)*J,e[6]=(b*N-w*M-_*U)*J,e[7]=(v*M-y*N+x*U)*J,e[8]=(c*V-h*k+p*P)*J,e[9]=(r*k-t*V-l*P)*J,e[10]=(w*F-T*N+_*A)*J,e[11]=(S*N-v*F-x*A)*J,e[12]=(h*j-c*W-f*P)*J,e[13]=(t*W-r*j+o*P)*J,e[14]=(T*U-w*L-b*A)*J,e[15]=(v*L-S*U+y*A)*J,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,h=e.y,f=e.z,p=l*c,v=l*h;return this.set(p*c+r,p*h-o*f,p*f+o*h,0,p*h+o*f,v*h+r,v*f-o*c,0,p*f-o*h,v*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,p=l+l,v=c+c,S=h+h,y=l*p,x=l*v,w=l*S,T=c*v,b=c*S,_=h*S,A=f*p,U=f*v,N=f*S,L=r.x,F=r.y,M=r.z;return o[0]=(1-(T+_))*L,o[1]=(x+N)*L,o[2]=(w-U)*L,o[3]=0,o[4]=(x-N)*F,o[5]=(1-(y+_))*F,o[6]=(b+A)*F,o[7]=0,o[8]=(w+U)*M,o[9]=(b-A)*M,o[10]=(1-(y+T))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Qs.set(o[0],o[1],o[2]).length();const h=Qs.set(o[4],o[5],o[6]).length(),f=Qs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Li.copy(this);const p=1/c,v=1/h,S=1/f;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=v,Li.elements[5]*=v,Li.elements[6]*=v,Li.elements[8]*=S,Li.elements[9]*=S,Li.elements[10]*=S,t.setFromRotationMatrix(Li),r.x=c,r.y=h,r.z=f,this}makePerspective(e,t,r,o,l,c,h=ki,f=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),y=(t+e)/(t-e),x=(r+o)/(r-o);let w,T;if(f)w=l/(c-l),T=c*l/(c-l);else if(h===ki)w=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(h===Tc)w=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=S,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,h=ki,f=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),y=-(t+e)/(t-e),x=-(r+o)/(r-o);let w,T;if(f)w=1/(c-l),T=c/(c-l);else if(h===ki)w=-2/(c-l),T=-(c+l)/(c-l);else if(h===Tc)w=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=S,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=w,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Ic.prototype.isMatrix4=!0;let Qt=Ic;const Qs=new ne,Li=new Qt,pS=new ne(0,0,0),mS=new ne(1,1,1),Br=new ne,Bl=new ne,ui=new ne,hg=new Qt,fg=new Un;class Mi{constructor(e=0,t=0,r=0,o=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],h=o[8],f=o[1],p=o[5],v=o[9],S=o[2],y=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,x),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Pt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-v,x),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gS=0;const pg=new ne,Js=new Un,hr=new Qt,Gl=new ne,aa=new ne,xS=new ne,vS=new Un,mg=new ne(1,0,0),gg=new ne(0,1,0),xg=new ne(0,0,1),vg={type:"added"},_S={type:"removed"},eo={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Ln extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new ne,t=new Mi,r=new Un,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new vt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gl.copy(e):Gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(aa,Gl,this.up):hr.lookAt(Gl,aa,this.up),this.quaternion.setFromRotationMatrix(hr),o&&(hr.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(hr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vg),eo.child=e,this.dispatchEvent(eo),eo.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_S),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vg),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,v=f.length;p<v;p++){const S=f[p];l(e.shapes,S)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),p=c(e.textures),v=c(e.images),S=c(e.shapes),y=c(e.skeletons),x=c(e.animations),w=c(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),w.length>0&&(r.nodes=w)}return r.object=o,r;function c(h){const f=[];for(const p in h){const v=h[p];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new ne(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yS={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const b=t.getJointPose(T,r),_=this._getHandJoint(p,T);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],y=v.position.distanceTo(S.position),x=.02,w=.005;p.inputState.pinching&&y>x+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=x-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yS)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=It.workingColorSpace){if(e=nf(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Ld(c,l,e+1/3),this.g=Ld(c,l,e),this.b=Ld(c,l,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=Gx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return It.workingToColorSpace(Vn.copy(this),e),Math.round(Pt(Vn.r*255,0,255))*65536+Math.round(Pt(Vn.g*255,0,255))*256+Math.round(Pt(Vn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Vn.copy(this),t);const r=Vn.r,o=Vn.g,l=Vn.b,c=Math.max(r,o,l),h=Math.min(r,o,l);let f,p;const v=(h+c)/2;if(h===c)f=0,p=0;else{const S=c-h;switch(p=v<=.5?S/(c+h):S/(2-c-h),c){case r:f=(o-l)/S+(o<l?6:0);break;case o:f=(l-r)/S+2;break;case l:f=(r-o)/S+4;break}f/=6}return e.h=f,e.s=p,e.l=v,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=_i){It.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,r=Vn.g,o=Vn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(jl);const r=wa(Gr.h,jl.h,t),o=wa(Gr.s,jl.s,t),l=wa(Gr.l,jl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Gt;Gt.NAMES=Gx;class SS extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ii=new ne,fr=new ne,Id=new ne,pr=new ne,to=new ne,no=new ne,_g=new ne,Dd=new ne,Fd=new ne,Ud=new ne,Od=new pn,kd=new pn,zd=new pn;class Oi{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ii.subVectors(e,t),o.cross(Ii);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ii.subVectors(o,t),fr.subVectors(r,t),Id.subVectors(e,t);const c=Ii.dot(Ii),h=Ii.dot(fr),f=Ii.dot(Id),p=fr.dot(fr),v=fr.dot(Id),S=c*p-h*h;if(S===0)return l.set(0,0,0),null;const y=1/S,x=(p*f-h*v)*y,w=(c*v-h*f)*y;return l.set(1-x-w,w,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,r,o,l,c,h,f){return this.getBarycoord(e,t,r,o,pr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,pr.x),f.addScaledVector(c,pr.y),f.addScaledVector(h,pr.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return Od.setScalar(0),kd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(e,t),kd.fromBufferAttribute(e,r),zd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Od,l.x),c.addScaledVector(kd,l.y),c.addScaledVector(zd,l.z),c}static isFrontFacing(e,t,r,o){return Ii.subVectors(r,t),fr.subVectors(e,t),Ii.cross(fr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ii.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,h;to.subVectors(o,r),no.subVectors(l,r),Dd.subVectors(e,r);const f=to.dot(Dd),p=no.dot(Dd);if(f<=0&&p<=0)return t.copy(r);Fd.subVectors(e,o);const v=to.dot(Fd),S=no.dot(Fd);if(v>=0&&S<=v)return t.copy(o);const y=f*S-v*p;if(y<=0&&f>=0&&v<=0&&f-v>0)return c=f/(f-v),t.copy(r).addScaledVector(to,c);Ud.subVectors(e,l);const x=to.dot(Ud),w=no.dot(Ud);if(w>=0&&x<=w)return t.copy(l);const T=x*p-f*w;if(T<=0&&p>=0&&w<=0)return h=p/(p-w),t.copy(r).addScaledVector(no,h);const b=v*w-x*S;if(b<=0&&S-v>=0&&x-w>=0)return _g.subVectors(l,o),h=(S-v)/(S-v+(x-w)),t.copy(o).addScaledVector(_g,h);const _=1/(b+T+y);return c=T*_,h=y*_,t.copy(r).addScaledVector(to,c).addScaledVector(no,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ra{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(l,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vl.copy(r.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Wl.subVectors(this.max,la),io.subVectors(e.a,la),ro.subVectors(e.b,la),so.subVectors(e.c,la),Hr.subVectors(ro,io),jr.subVectors(so,ro),ps.subVectors(io,so);let t=[0,-Hr.z,Hr.y,0,-jr.z,jr.y,0,-ps.z,ps.y,Hr.z,0,-Hr.x,jr.z,0,-jr.x,ps.z,0,-ps.x,-Hr.y,Hr.x,0,-jr.y,jr.x,0,-ps.y,ps.x,0];return!Bd(t,io,ro,so,Wl)||(t=[1,0,0,0,1,0,0,0,1],!Bd(t,io,ro,so,Wl))?!1:(Xl.crossVectors(Hr,jr),t=[Xl.x,Xl.y,Xl.z],Bd(t,io,ro,so,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Di=new ne,Vl=new Ra,io=new ne,ro=new ne,so=new ne,Hr=new ne,jr=new ne,ps=new ne,la=new ne,Wl=new ne,Xl=new ne,ms=new ne;function Bd(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){ms.fromArray(s,l);const h=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),f=e.dot(ms),p=t.dot(ms),v=r.dot(ms);if(Math.max(-Math.max(f,p,v),Math.min(f,p,v))>h)return!1}return!0}const _n=new ne,ql=new Dt;let bS=0;class Ms extends Qr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Gy,this.updateRanges=[],this.gpuType=Qi,this.version=0,this._normalizationScale=e!==void 0?rf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kx(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):zx(e,this.array)}}class Hx extends Ms{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class jx extends Ms{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class on extends Ms{constructor(e,t,r){super(new Float32Array(e),t,r)}}const MS=new Ra,ca=new ne,Gd=new ne;class Uc{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):MS.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ca,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Gd)),this.expandByPoint(ca.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wS=0;const vi=new Qt,Hd=new Ln,oo=new ne,di=new Ra,ua=new Ra,Pn=new ne;class ri extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hy(e)?jx:Hx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new on(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];di.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];ua.setFromBufferAttribute(h),this.morphTargetsRelative?(Pn.addVectors(di.min,ua.min),di.expandByPoint(Pn),Pn.addVectors(di.max,ua.max),di.expandByPoint(Pn)):(di.expandByPoint(ua.min),di.expandByPoint(ua.max))}di.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Pn));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Pn.fromBufferAttribute(h,p),f&&(oo.fromBufferAttribute(e,p),Pn.add(oo)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Ms(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const h=[],f=[],p=new Uint8Array(r.count);for(let j=0;j<r.count;j++)h[j]=new ne,f[j]=new ne;const v=new ne,S=new ne,y=new ne,x=new Dt,w=new Dt,T=new Dt,b=new ne,_=new ne;function A(j,k,W){p[j]=p[k]=p[W]=1,v.fromBufferAttribute(r,j),S.fromBufferAttribute(r,k),y.fromBufferAttribute(r,W),x.fromBufferAttribute(l,j),w.fromBufferAttribute(l,k),T.fromBufferAttribute(l,W),S.sub(v),y.sub(v),w.sub(x),T.sub(x);const V=1/(w.x*T.y-T.x*w.y);isFinite(V)&&(b.copy(S).multiplyScalar(T.y).addScaledVector(y,-w.y).multiplyScalar(V),_.copy(y).multiplyScalar(w.x).addScaledVector(S,-T.x).multiplyScalar(V),h[j].add(b),h[k].add(b),h[W].add(b),f[j].add(_),f[k].add(_),f[W].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,k=U.length;j<k;++j){const W=U[j],V=W.start,Z=W.count;for(let O=V,J=V+Z;O<J;O+=3)A(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const N=new ne,L=new ne,F=new ne,M=new ne;function P(j){F.fromBufferAttribute(o,j),M.copy(F);const k=h[j];N.copy(k),N.sub(F.multiplyScalar(F.dot(k))).normalize(),L.crossVectors(M,k);const V=L.dot(f[j])<0?-1:1;c.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,k=r.count;j<k;++j)p[j]&&P(j);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ms(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const o=new ne,l=new ne,c=new ne,h=new ne,f=new ne,p=new ne,v=new ne,S=new ne;if(e)for(let y=0,x=e.count;y<x;y+=3){const w=e.getX(y+0),T=e.getX(y+1),b=e.getX(y+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,b),v.subVectors(c,l),S.subVectors(o,l),v.cross(S),h.fromBufferAttribute(r,w),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),h.add(v),f.add(v),p.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,x=t.count;y<x;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),v.subVectors(c,l),S.subVectors(o,l),v.cross(S),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(h,f){const p=h.array,v=h.itemSize,S=h.normalized,y=new p.constructor(f.length*v);let x=0,w=0;for(let T=0,b=f.length;T<b;T++){h.isInterleavedBufferAttribute?x=f[T]*h.data.stride+h.offset:x=f[T]*v;for(let _=0;_<v;_++)y[w++]=p[x++]}return new Ms(y,v,S)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,r=this.index.array,o=this.attributes;for(const h in o){const f=o[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let v=0,S=p.length;v<S;v++){const y=p[v],x=e(y,r);f.push(x)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const p=c[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],v=[];for(let S=0,y=p.length;S<y;S++){const x=p[S];v.push(x.toJSON(e.data))}v.length>0&&(o[f]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let y=0,x=S.length;y<x;y++)v.push(S[y].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const S=c[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jd=new ne,ES=new ne,TS=new vt;class qr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=jd.subVectors(r,t).cross(ES.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(jd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||TS.getNormalMatrix(e),o=this.coplanarPoint(jd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let AS=0;class Pa extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ba,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mx,this.blendDst=gx,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ed,this.stencilZFail=Ed,this.stencilZPass=Ed,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new ne,Vd=new ne,$l=new ne,Yl=new ne;class af{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Vd.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Yl.copy(this.origin).sub(Vd);const l=e.distanceTo(t)*.5,c=-this.direction.dot($l),h=Yl.dot(this.direction),f=-Yl.dot($l),p=Yl.lengthSq(),v=Math.abs(1-c*c);let S,y,x,w;if(v>0)if(S=c*f-h,y=c*h-f,w=l*v,S>=0)if(y>=-w)if(y<=w){const T=1/v;S*=T,y*=T,x=S*(S+c*y+2*h)+y*(c*S+y+2*f)+p}else y=l,S=Math.max(0,-(c*y+h)),x=-S*S+y*(y+2*f)+p;else y=-l,S=Math.max(0,-(c*y+h)),x=-S*S+y*(y+2*f)+p;else y<=-w?(S=Math.max(0,-(-c*l+h)),y=S>0?-l:Math.min(Math.max(-l,-f),l),x=-S*S+y*(y+2*f)+p):y<=w?(S=0,y=Math.min(Math.max(-l,-f),l),x=y*(y+2*f)+p):(S=Math.max(0,-(c*l+h)),y=S>0?l:Math.min(Math.max(-l,-f),l),x=-S*S+y*(y+2*f)+p);else y=c>0?-l:l,S=Math.max(0,-(c*y+h)),x=-S*S+y*(y+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Vd).addScaledVector($l,y),x}intersectSphere(e,t){if(e.radius<0)return null;gr.subVectors(e.center,this.origin);const r=gr.dot(this.direction),o=gr.dot(gr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),h=r-c,f=r+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,h,f;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),v>=0?(l=(e.min.y-y.y)*v,c=(e.max.y-y.y)*v):(l=(e.max.y-y.y)*v,c=(e.min.y-y.y)*v),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),S>=0?(h=(e.min.z-y.z)*S,f=(e.max.z-y.z)*S):(h=(e.max.z-y.z)*S,f=(e.min.z-y.z)*S),r>f||h>o)||((h>r||r!==r)&&(r=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,r,o,l){const c=this.origin,h=this.direction,f=h.x,p=h.y,v=h.z,S=e.x-c.x,y=e.y-c.y,x=e.z-c.z,w=t.x-c.x,T=t.y-c.y,b=t.z-c.z,_=r.x-c.x,A=r.y-c.y,U=r.z-c.z,N=Math.abs(f),L=Math.abs(p),F=Math.abs(v);let M,P,j,k,W,V,Z,O,J,ce,$,z;if(N>=L&&N>=F?(j=f,V=S,J=w,z=_,f>=0?(M=p,P=v,k=y,W=x,Z=T,O=b,ce=A,$=U):(M=v,P=p,k=x,W=y,Z=b,O=T,ce=U,$=A)):L>=F?(j=p,V=y,J=T,z=A,p>=0?(M=v,P=f,k=x,W=S,Z=b,O=w,ce=U,$=_):(M=f,P=v,k=S,W=x,Z=w,O=b,ce=_,$=U)):(j=v,V=x,J=b,z=U,v>=0?(M=f,P=p,k=S,W=y,Z=w,O=T,ce=_,$=A):(M=p,P=f,k=y,W=S,Z=T,O=w,ce=A,$=_)),j===0)return null;const G=M/j,X=P/j,I=1/j,K=k-G*V,me=W-X*V,Q=Z-G*J,he=O-X*J,Se=ce-G*z,Te=$-X*z,be=Se*he-Te*Q,Ge=K*Te-me*Se,ft=Q*me-he*K;if(o){if(be<0||Ge<0||ft<0)return null}else if((be<0||Ge<0||ft<0)&&(be>0||Ge>0||ft>0))return null;const re=be+Ge+ft;if(re===0)return null;const je=I*(be*V+Ge*J+ft*z);return(re>0?je<0:je>0)?null:this.at(je/re,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lf extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yg=new Qt,gs=new af,Zl=new Uc,Sg=new ne,Kl=new ne,Ql=new ne,Jl=new ne,Wd=new ne,ec=new ne,bg=new ne,tc=new ne;class Qe extends Ln{constructor(e=new ri,t=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){ec.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const v=h[f],S=l[f];v!==0&&(Wd.fromBufferAttribute(S,e),c?ec.addScaledVector(Wd,v):ec.addScaledVector(Wd.sub(t),v))}t.add(ec)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Zl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Zl,Sg)===null||gs.origin.distanceToSquared(Sg)>(e.far-e.near)**2))&&(yg.copy(l).invert(),gs.copy(e.ray).applyMatrix4(yg),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,y=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(c))for(let w=0,T=y.length;w<T;w++){const b=y[w],_=c[b.materialIndex],A=Math.max(b.start,x.start),U=Math.min(h.count,Math.min(b.start+b.count,x.start+x.count));for(let N=A,L=U;N<L;N+=3){const F=h.getX(N),M=h.getX(N+1),P=h.getX(N+2);o=nc(this,_,e,r,p,v,S,F,M,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=b.materialIndex,t.push(o))}}else{const w=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let b=w,_=T;b<_;b+=3){const A=h.getX(b),U=h.getX(b+1),N=h.getX(b+2);o=nc(this,c,e,r,p,v,S,A,U,N),o&&(o.faceIndex=Math.floor(b/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let w=0,T=y.length;w<T;w++){const b=y[w],_=c[b.materialIndex],A=Math.max(b.start,x.start),U=Math.min(f.count,Math.min(b.start+b.count,x.start+x.count));for(let N=A,L=U;N<L;N+=3){const F=N,M=N+1,P=N+2;o=nc(this,_,e,r,p,v,S,F,M,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=b.materialIndex,t.push(o))}}else{const w=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let b=w,_=T;b<_;b+=3){const A=b,U=b+1,N=b+2;o=nc(this,c,e,r,p,v,S,A,U,N),o&&(o.faceIndex=Math.floor(b/3),t.push(o))}}}}function CS(s,e,t,r,o,l,c,h){let f;if(e.side===ii?f=r.intersectTriangle(c,l,o,!0,h):f=r.intersectTriangle(o,l,c,e.side===ws,h),f===null)return null;tc.copy(h),tc.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(tc);return p<t.near||p>t.far?null:{distance:p,point:tc.clone(),object:s}}function nc(s,e,t,r,o,l,c,h,f,p){s.getVertexPosition(h,Kl),s.getVertexPosition(f,Ql),s.getVertexPosition(p,Jl);const v=CS(s,e,t,r,Kl,Ql,Jl,bg);if(v){const S=new ne;Oi.getBarycoord(bg,Kl,Ql,Jl,S),o&&(v.uv=Oi.getInterpolatedAttribute(o,h,f,p,S,new Dt)),l&&(v.uv1=Oi.getInterpolatedAttribute(l,h,f,p,S,new Dt)),c&&(v.normal=Oi.getInterpolatedAttribute(c,h,f,p,S,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:f,c:p,normal:new ne,materialIndex:0};Oi.getNormal(Kl,Ql,Jl,y.normal),v.face=y,v.barycoord=S}return v}class NS extends Yn{constructor(e=null,t=1,r=1,o,l,c,h,f,p=On,v=On,S,y){super(null,c,h,f,p,v,o,l,S,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xs=new Uc,RS=new Dt(.5,.5),ic=new ne;class Cc{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,c=new qr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ki,r=!1){const o=this.planes,l=e.elements,c=l[0],h=l[1],f=l[2],p=l[3],v=l[4],S=l[5],y=l[6],x=l[7],w=l[8],T=l[9],b=l[10],_=l[11],A=l[12],U=l[13],N=l[14],L=l[15];if(o[0].setComponents(p-c,x-v,_-w,L-A).normalize(),o[1].setComponents(p+c,x+v,_+w,L+A).normalize(),o[2].setComponents(p+h,x+S,_+T,L+U).normalize(),o[3].setComponents(p-h,x-S,_-T,L-U).normalize(),r)o[4].setComponents(f,y,b,N).normalize(),o[5].setComponents(p-f,x-y,_-b,L-N).normalize();else if(o[4].setComponents(p-f,x-y,_-b,L-N).normalize(),t===ki)o[5].setComponents(p+f,x+y,_+b,L+N).normalize();else if(t===Tc)o[5].setComponents(f,y,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=RS.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ic.x=o.normal.x>0?e.max.x:e.min.x,ic.y=o.normal.y>0?e.max.y:e.min.y,ic.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Mg=new Qt;class cf{constructor(){this.coordinateSystem=ki,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];Mg.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Cc),r[o].setFromProjectionMatrix(Mg,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Cc),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new cf().copy(this)}}class Vx extends Pa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nc=new ne,Rc=new ne,wg=new Qt,da=new af,rc=new Uc,Xd=new ne,Eg=new ne;class Vr extends Ln{constructor(e=new ri,t=new Vx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Nc.fromBufferAttribute(t,o-1),Rc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Nc.distanceTo(Rc);e.setAttribute("lineDistance",new on(r,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(o),rc.radius+=l,e.ray.intersectsSphere(rc)===!1)return;wg.copy(o).invert(),da.copy(e.ray).applyMatrix4(wg);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const x=Math.max(0,c.start),w=Math.min(v.count,c.start+c.count);for(let T=x,b=w-1;T<b;T+=p){const _=v.getX(T),A=v.getX(T+1),U=sc(this,e,da,f,_,A,T);U&&t.push(U)}if(this.isLineLoop){const T=v.getX(w-1),b=v.getX(x),_=sc(this,e,da,f,T,b,w-1);_&&t.push(_)}}else{const x=Math.max(0,c.start),w=Math.min(y.count,c.start+c.count);for(let T=x,b=w-1;T<b;T+=p){const _=sc(this,e,da,f,T,T+1,T);_&&t.push(_)}if(this.isLineLoop){const T=sc(this,e,da,f,w-1,x,w-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function sc(s,e,t,r,o,l,c){const h=s.geometry.attributes.position;if(Nc.fromBufferAttribute(h,o),Rc.fromBufferAttribute(h,l),t.distanceSqToSegment(Nc,Rc,Xd,Eg)>r)return;Xd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Xd);if(!(p<e.near||p>e.far))return{distance:p,point:Eg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}class Wx extends Yn{constructor(e=[],t=_o,r,o,l,c,h,f,p,v){super(e,t,r,o,l,c,h,f,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class So extends Yn{constructor(e,t,r=tr,o,l,c,h=On,f=On,p,v=Kr,S=1){if(v!==Kr&&v!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:S};super(y,o,l,c,h,f,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xx extends So{constructor(e,t=tr,r=_o,o,l,c=On,h=On,f,p=Kr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,c,h,f,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qx extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yn extends ri{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const h=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],v=[],S=[];let y=0,x=0;w("z","y","x",-1,-1,r,t,e,c,l,0),w("z","y","x",1,-1,r,t,-e,c,l,1),w("x","z","y",1,1,e,r,t,o,c,2),w("x","z","y",1,-1,e,r,-t,o,c,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(S,2));function w(T,b,_,A,U,N,L,F,M,P,j){const k=N/M,W=L/P,V=N/2,Z=L/2,O=F/2,J=M+1,ce=P+1;let $=0,z=0;const G=new ne;for(let X=0;X<ce;X++){const I=X*W-Z;for(let K=0;K<J;K++){const me=K*k-V;G[T]=me*A,G[b]=I*U,G[_]=O,p.push(G.x,G.y,G.z),G[T]=0,G[b]=0,G[_]=F>0?1:-1,v.push(G.x,G.y,G.z),S.push(K/M),S.push(1-X/P),$+=1}}for(let X=0;X<P;X++)for(let I=0;I<M;I++){const K=y+I+J*X,me=y+I+J*(X+1),Q=y+(I+1)+J*(X+1),he=y+(I+1)+J*X;f.push(K,me,he),f.push(me,Q,he),z+=6}h.addGroup(x,z,j),x+=z,y+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wn extends ri{constructor(e=1,t=1,r=1,o=32,l=1,c=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],y=[],x=[];let w=0;const T=[],b=r/2;let _=0;A(),c===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new on(S,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(x,2));function A(){const N=new ne,L=new ne;let F=0;const M=(t-e)/r;for(let P=0;P<=l;P++){const j=[],k=P/l,W=k*(t-e)+e;for(let V=0;V<=o;V++){const Z=V/o,O=Z*f+h,J=Math.sin(O),ce=Math.cos(O);L.x=W*J,L.y=-k*r+b,L.z=W*ce,S.push(L.x,L.y,L.z),N.set(J,M,ce).normalize(),y.push(N.x,N.y,N.z),x.push(Z,1-k),j.push(w++)}T.push(j)}for(let P=0;P<o;P++)for(let j=0;j<l;j++){const k=T[j][P],W=T[j+1][P],V=T[j+1][P+1],Z=T[j][P+1];(e>0||j!==0)&&(v.push(k,W,Z),F+=3),(t>0||j!==l-1)&&(v.push(W,V,Z),F+=3)}p.addGroup(_,F,0),_+=F}function U(N){const L=w,F=new Dt,M=new ne;let P=0;const j=N===!0?e:t,k=N===!0?1:-1;for(let V=1;V<=o;V++)S.push(0,b*k,0),y.push(0,k,0),x.push(.5,.5),w++;const W=w;for(let V=0;V<=o;V++){const O=V/o*f+h,J=Math.cos(O),ce=Math.sin(O);M.x=j*ce,M.y=b*k,M.z=j*J,S.push(M.x,M.y,M.z),y.push(0,k,0),F.x=J*.5+.5,F.y=ce*.5*k+.5,x.push(F.x,F.y),w++}for(let V=0;V<o;V++){const Z=L+V,O=W+V;N===!0?v.push(O,O+1,Z):v.push(O+1,O,Z),P+=3}p.addGroup(_,P,N===!0?1:2),_+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uf extends ri{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];h(o),p(r),v(),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(l.slice(),3)),this.setAttribute("uv",new on(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(A){const U=new ne,N=new ne,L=new ne;for(let F=0;F<t.length;F+=3)x(t[F+0],U),x(t[F+1],N),x(t[F+2],L),f(U,N,L,A)}function f(A,U,N,L){const F=L+1,M=[];for(let P=0;P<=F;P++){M[P]=[];const j=A.clone().lerp(N,P/F),k=U.clone().lerp(N,P/F),W=F-P;for(let V=0;V<=W;V++)V===0&&P===F?M[P][V]=j:M[P][V]=j.clone().lerp(k,V/W)}for(let P=0;P<F;P++)for(let j=0;j<2*(F-P)-1;j++){const k=Math.floor(j/2);j%2===0?(y(M[P][k+1]),y(M[P+1][k]),y(M[P][k])):(y(M[P][k+1]),y(M[P+1][k+1]),y(M[P+1][k]))}}function p(A){const U=new ne;for(let N=0;N<l.length;N+=3)U.x=l[N+0],U.y=l[N+1],U.z=l[N+2],U.normalize().multiplyScalar(A),l[N+0]=U.x,l[N+1]=U.y,l[N+2]=U.z}function v(){const A=new ne;for(let U=0;U<l.length;U+=3){A.x=l[U+0],A.y=l[U+1],A.z=l[U+2];const N=b(A)/2/Math.PI+.5,L=_(A)/Math.PI+.5;c.push(N,1-L)}w(),S()}function S(){for(let A=0;A<c.length;A+=6){const U=c[A+0],N=c[A+2],L=c[A+4],F=Math.max(U,N,L),M=Math.min(U,N,L);F>.9&&M<.1&&(U<.2&&(c[A+0]+=1),N<.2&&(c[A+2]+=1),L<.2&&(c[A+4]+=1))}}function y(A){l.push(A.x,A.y,A.z)}function x(A,U){const N=A*3;U.x=e[N+0],U.y=e[N+1],U.z=e[N+2]}function w(){const A=new ne,U=new ne,N=new ne,L=new ne,F=new Dt,M=new Dt,P=new Dt;for(let j=0,k=0;j<l.length;j+=9,k+=6){A.set(l[j+0],l[j+1],l[j+2]),U.set(l[j+3],l[j+4],l[j+5]),N.set(l[j+6],l[j+7],l[j+8]),F.set(c[k+0],c[k+1]),M.set(c[k+2],c[k+3]),P.set(c[k+4],c[k+5]),L.copy(A).add(U).add(N).divideScalar(3);const W=b(L);T(F,k+0,A,W),T(M,k+2,U,W),T(P,k+4,N,W)}}function T(A,U,N,L){L<0&&A.x===1&&(c[U]=A.x-1),N.x===0&&N.z===0&&(c[U]=L/2/Math.PI+.5)}function b(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.vertices,e.indices,e.radius,e.detail)}}class ho extends uf{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ho(e.radius,e.detail)}}class La extends ri{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,h=Math.floor(r),f=Math.floor(o),p=h+1,v=f+1,S=e/h,y=t/f,x=[],w=[],T=[],b=[];for(let _=0;_<v;_++){const A=_*y-c;for(let U=0;U<p;U++){const N=U*S-l;w.push(N,-A,0),T.push(0,0,1),b.push(U/h),b.push(1-_/f)}}for(let _=0;_<f;_++)for(let A=0;A<h;A++){const U=A+p*_,N=A+p*(_+1),L=A+1+p*(_+1),F=A+1+p*_;x.push(U,N,F),x.push(N,L,F)}this.setIndex(x),this.setAttribute("position",new on(w,3)),this.setAttribute("normal",new on(T,3)),this.setAttribute("uv",new on(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}class df extends ri{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+h,Math.PI);let p=0;const v=[],S=new ne,y=new ne,x=[],w=[],T=[],b=[];for(let _=0;_<=r;_++){const A=[],U=_/r,N=c+U*h,L=e*Math.cos(N),F=Math.sqrt(e*e-L*L);let M=0;_===0&&c===0?M=.5/t:_===r&&f===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const j=P/t,k=o+j*l;S.x=-F*Math.cos(k),S.y=L,S.z=F*Math.sin(k),w.push(S.x,S.y,S.z),y.copy(S).normalize(),T.push(y.x,y.y,y.z),b.push(j+M,1-U),A.push(p++)}v.push(A)}for(let _=0;_<r;_++)for(let A=0;A<t;A++){const U=v[_][A+1],N=v[_][A],L=v[_+1][A],F=v[_+1][A+1];(_!==0||c>0)&&x.push(U,N,F),(_!==r-1||f<Math.PI)&&x.push(N,L,F)}this.setIndex(x),this.setAttribute("position",new on(w,3)),this.setAttribute("normal",new on(T,3)),this.setAttribute("uv",new on(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ys extends ri{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,c=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:c,thetaLength:h},r=Math.floor(r),o=Math.floor(o);const f=[],p=[],v=[],S=[],y=new ne,x=new ne,w=new ne;for(let T=0;T<=r;T++){const b=c+T/r*h;for(let _=0;_<=o;_++){const A=_/o*l;x.x=(e+t*Math.cos(b))*Math.cos(A),x.y=(e+t*Math.cos(b))*Math.sin(A),x.z=t*Math.sin(b),p.push(x.x,x.y,x.z),y.x=e*Math.cos(A),y.y=e*Math.sin(A),w.subVectors(x,y).normalize(),v.push(w.x,w.y,w.z),S.push(_/o),S.push(T/r)}}for(let T=1;T<=r;T++)for(let b=1;b<=o;b++){const _=(o+1)*T+b-1,A=(o+1)*(T-1)+b-1,U=(o+1)*(T-1)+b,N=(o+1)*T+b;f.push(_,A,N),f.push(A,U,N)}this.setIndex(f),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function bo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Tg(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Tg(o[0])){const l=[];for(let c=0,h=o.length;c<h;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function $n(s){const e={};for(let t=0;t<s.length;t++){const r=bo(s[t]);for(const o in r)e[o]=r[o]}return e}function Tg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function PS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $x(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const LS={clone:bo,merge:$n};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ts extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=PS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Dt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[r].value=new pn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Qt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class FS extends Ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class US extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oc=new ne,ac=new Un,qi=new ne;class Yx extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oc,ac,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(oc,ac,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new ne,Ag=new Dt,Cg=new Dt;class Fi extends Yx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Ag,Cg),t.subVectors(Cg,Ag)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ma*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/p,o*=c.width/f,r*=c.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kS extends Yx{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,h-=v*this.view.offsetY,f=h-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ao=-90,lo=1;class Vh extends Ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Fi(ao,lo,e,t);o.layers=this.layers,this.add(o);const l=new Fi(ao,lo,e,t);l.layers=this.layers,this.add(l);const c=new Fi(ao,lo,e,t);c.layers=this.layers,this.add(c);const h=new Fi(ao,lo,e,t);h.layers=this.layers,this.add(h);const f=new Fi(ao,lo,e,t);f.layers=this.layers,this.add(f);const p=new Fi(ao,lo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,h,f]=t;for(const p of t)this.remove(p);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,p,v]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,y,x),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class zS extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Ng=new Qt;class BS{constructor(e,t,r=0,o=1/0){this.ray=new af(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ng),this}intersectObject(e,t=!0,r=[]){return Wh(e,this,r,t),r.sort(Rg),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Wh(e[o],this,r,t);return r.sort(Rg),r}}function Rg(s,e){return s.distance-e.distance}function Wh(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let c=0,h=l.length;c<h;c++)Wh(l[c],e,t,!0)}}class GS extends Qr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pg(s,e,t,r){const o=HS(r);switch(t){case Rx:return s*e;case Lx:return s*e/o.components*o.byteLength;case Jh:return s*e/o.components*o.byteLength;case Es:return s*e*2/o.components*o.byteLength;case ef:return s*e*2/o.components*o.byteLength;case Px:return s*e*3/o.components*o.byteLength;case Ji:return s*e*4/o.components*o.byteLength;case tf:return s*e*4/o.components*o.byteLength;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xc:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:case xh:return Math.max(s,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(s,8)*Math.max(e,8)/2;case vh:case _h:case Sh:case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yh:case bc:case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kh:case zh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Mc:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HS(s){switch(s){case bi:case Tx:return{byteLength:1,components:1};case Ca:case Ax:case nr:return{byteLength:2,components:1};case Kh:case Qh:return{byteLength:2,components:4};case tr:case Zh:case Qi:return{byteLength:4,components:1};case Cx:case Nx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zx(){let s=null,e=!1,t=null,r=null;function o(l,c){r=s.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function jS(s){const e=new WeakMap;function t(h,f){const p=h.array,v=h.usage,S=p.byteLength,y=s.createBuffer();s.bindBuffer(f,y),s.bufferData(f,p,v),h.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,f,p){const v=f.array,S=f.updateRanges;if(s.bindBuffer(p,h),S.length===0)s.bufferSubData(p,0,v);else{S.sort((x,w)=>x.start-w.start);let y=0;for(let x=1;x<S.length;x++){const w=S[y],T=S[x];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++y,S[y]=T)}S.length=y+1;for(let x=0,w=S.length;x<w;x++){const T=S[x];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:o,remove:l,update:c}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",y1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,F1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,U1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ob=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bt={alphahash_fragment:VS,alphahash_pars_fragment:WS,alphamap_fragment:XS,alphamap_pars_fragment:qS,alphatest_fragment:$S,alphatest_pars_fragment:YS,aomap_fragment:ZS,aomap_pars_fragment:KS,batching_pars_vertex:QS,batching_vertex:JS,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:d1,color_vertex:h1,common:f1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:x1,emissivemap_pars_fragment:v1,colorspace_fragment:_1,colorspace_pars_fragment:y1,envmap_fragment:S1,envmap_common_pars_fragment:b1,envmap_pars_fragment:M1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:F1,envmap_vertex:E1,fog_vertex:T1,fog_pars_vertex:A1,fog_fragment:C1,fog_pars_fragment:N1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:P1,lights_lambert_fragment:L1,lights_lambert_pars_fragment:I1,lights_pars_begin:D1,lights_toon_fragment:U1,lights_toon_pars_fragment:O1,lights_phong_fragment:k1,lights_phong_pars_fragment:z1,lights_physical_fragment:B1,lights_physical_pars_fragment:G1,lights_fragment_begin:H1,lights_fragment_maps:j1,lights_fragment_end:V1,lightprobes_pars_fragment:W1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:Y1,map_fragment:Z1,map_pars_fragment:K1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ob,normal_fragment_begin:ab,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:db,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:xb,packing:vb,premultiplied_alpha_fragment:_b,project_vertex:yb,dithering_fragment:Sb,dithering_pars_fragment:bb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Cb,skinbase_vertex:Nb,skinning_pars_vertex:Rb,skinning_vertex:Pb,skinnormal_vertex:Lb,specularmap_fragment:Ib,specularmap_pars_fragment:Db,tonemapping_fragment:Fb,tonemapping_pars_fragment:Ub,transmission_fragment:Ob,transmission_pars_fragment:kb,uv_pars_fragment:zb,uv_pars_vertex:Bb,uv_vertex:Gb,worldpos_vertex:Hb,background_vert:jb,background_frag:Vb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:qb,cube_frag:$b,depth_vert:Yb,depth_frag:Zb,distance_vert:Kb,distance_frag:Qb,equirect_vert:Jb,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:xM,points_frag:vM,shadow_vert:_M,shadow_frag:yM,sprite_vert:SM,sprite_frag:bM},We={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Zi={basic:{uniforms:$n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:$n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:$n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:$n([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:$n([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Gt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:$n([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:$n([We.points,We.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:$n([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:$n([We.common,We.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:$n([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:$n([We.sprite,We.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:$n([We.common,We.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:$n([We.lights,We.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Zi.physical={uniforms:$n([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const lc={r:0,b:0,g:0},MM=new Qt,Kx=new vt;Kx.set(-1,0,0,0,1,0,0,0,1);function wM(s,e,t,r,o,l){const c=new Gt(0);let h=o===!0?0:1,f,p,v=null,S=0,y=null;function x(A){let U=A.isScene===!0?A.background:null;if(U&&U.isTexture){const N=A.backgroundBlurriness>0;U=e.get(U,N)}return U}function w(A){let U=!1;const N=x(A);N===null?b(c,h):N&&N.isColor&&(b(N,1),U=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(A,U){const N=x(U);N&&N.isCubeTexture?(p===void 0&&(p=new Qe(new yn(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:bo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,F,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(MM.makeRotationFromEuler(U.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Kx),p.material.toneMapped=It.getTransfer(N.colorSpace)!==Vt,(v!==N||S!==N.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=N,S=N.version,y=s.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new Qe(new La(2,2),new Ts({name:"BackgroundMaterial",uniforms:bo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,f.material.toneMapped=It.getTransfer(N.colorSpace)!==Vt,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||y!==s.toneMapping)&&(f.material.needsUpdate=!0,v=N,S=N.version,y=s.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function b(A,U){A.getRGB(lc,$x(s)),t.buffers.color.setClear(lc.r,lc.g,lc.b,U,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,U=1){c.set(A),h=U,b(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,b(c,h)},render:w,addToRenderList:T,dispose:_}}function EM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,c=!1;function h(W,V,Z,O,J){let ce=!1;const $=S(W,O,Z,V);l!==$&&(l=$,p(l.object)),ce=x(W,O,Z,J),ce&&w(W,O,Z,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,N(W,V,Z,O),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return s.createVertexArray()}function p(W){return s.bindVertexArray(W)}function v(W){return s.deleteVertexArray(W)}function S(W,V,Z,O){const J=O.wireframe===!0;let ce=r[V.id];ce===void 0&&(ce={},r[V.id]=ce);const $=W.isInstancedMesh===!0?W.id:0;let z=ce[$];z===void 0&&(z={},ce[$]=z);let G=z[Z.id];G===void 0&&(G={},z[Z.id]=G);let X=G[J];return X===void 0&&(X=y(f()),G[J]=X),X}function y(W){const V=[],Z=[],O=[];for(let J=0;J<t;J++)V[J]=0,Z[J]=0,O[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:O,object:W,attributes:{},index:null}}function x(W,V,Z,O){const J=l.attributes,ce=V.attributes;let $=0;const z=Z.getAttributes();for(const G in z)if(z[G].location>=0){const I=J[G];let K=ce[G];if(K===void 0&&(G==="instanceMatrix"&&W.instanceMatrix&&(K=W.instanceMatrix),G==="instanceColor"&&W.instanceColor&&(K=W.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;$++}return l.attributesNum!==$||l.index!==O}function w(W,V,Z,O){const J={},ce=V.attributes;let $=0;const z=Z.getAttributes();for(const G in z)if(z[G].location>=0){let I=ce[G];I===void 0&&(G==="instanceMatrix"&&W.instanceMatrix&&(I=W.instanceMatrix),G==="instanceColor"&&W.instanceColor&&(I=W.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),J[G]=K,$++}l.attributes=J,l.attributesNum=$,l.index=O}function T(){const W=l.newAttributes;for(let V=0,Z=W.length;V<Z;V++)W[V]=0}function b(W){_(W,0)}function _(W,V){const Z=l.newAttributes,O=l.enabledAttributes,J=l.attributeDivisors;Z[W]=1,O[W]===0&&(s.enableVertexAttribArray(W),O[W]=1),J[W]!==V&&(s.vertexAttribDivisor(W,V),J[W]=V)}function A(){const W=l.newAttributes,V=l.enabledAttributes;for(let Z=0,O=V.length;Z<O;Z++)V[Z]!==W[Z]&&(s.disableVertexAttribArray(Z),V[Z]=0)}function U(W,V,Z,O,J,ce,$){$===!0?s.vertexAttribIPointer(W,V,Z,J,ce):s.vertexAttribPointer(W,V,Z,O,J,ce)}function N(W,V,Z,O){T();const J=O.attributes,ce=Z.getAttributes(),$=V.defaultAttributeValues;for(const z in ce){const G=ce[z];if(G.location>=0){let X=J[z];if(X===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(X=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(X=W.instanceColor)),X!==void 0){const I=X.normalized,K=X.itemSize,me=e.get(X);if(me===void 0)continue;const Q=me.buffer,he=me.type,Se=me.bytesPerElement,Te=he===s.INT||he===s.UNSIGNED_INT||X.gpuType===Zh;if(X.isInterleavedBufferAttribute){const be=X.data,Ge=be.isInterleavedBuffer===!0?be.stride:be.itemSize,ft=X.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)_(G.location+re,be.meshPerAttribute);W.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let re=0;re<G.locationSize;re++)b(G.location+re);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let re=0;re<G.locationSize;re++)U(G.location+re,K/G.locationSize,he,I,Ge*Se,(ft+K/G.locationSize*re)*Se,Te)}else{if(X.isInstancedBufferAttribute){for(let be=0;be<G.locationSize;be++)_(G.location+be,X.meshPerAttribute);W.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let be=0;be<G.locationSize;be++)b(G.location+be);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let be=0;be<G.locationSize;be++)U(G.location+be,K/G.locationSize,he,I,K*Se,K/G.locationSize*be*Se,Te)}}else if($!==void 0){const I=$[z];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(G.location,I);break;case 3:s.vertexAttrib3fv(G.location,I);break;case 4:s.vertexAttrib4fv(G.location,I);break;default:s.vertexAttrib1fv(G.location,I)}}}}A()}function L(){j();for(const W in r){const V=r[W];for(const Z in V){const O=V[Z];for(const J in O){const ce=O[J];for(const $ in ce)v(ce[$].object),delete ce[$];delete O[J]}}delete r[W]}}function F(W){if(r[W.id]===void 0)return;const V=r[W.id];for(const Z in V){const O=V[Z];for(const J in O){const ce=O[J];for(const $ in ce)v(ce[$].object),delete ce[$];delete O[J]}}delete r[W.id]}function M(W){for(const V in r){const Z=r[V];for(const O in Z){const J=Z[O];if(J[W.id]===void 0)continue;const ce=J[W.id];for(const $ in ce)v(ce[$].object),delete ce[$];delete J[W.id]}}}function P(W){for(const V in r){const Z=r[V],O=W.isInstancedMesh===!0?W.id:0,J=Z[O];if(J!==void 0){for(const ce in J){const $=J[ce];for(const z in $)v($[z].object),delete $[z];delete J[ce]}delete Z[O],Object.keys(Z).length===0&&delete r[V]}}}function j(){k(),c=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:j,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:F,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:T,enableAttribute:b,disableUnusedAttributes:A}}function TM(s,e,t){let r;function o(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function c(f,p,v){v!==0&&(s.drawArraysInstanced(r,f,p,v),t.update(p,r,v))}function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,v);let y=0;for(let x=0;x<v;x++)y+=p[x];t.update(y,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function AM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Ji&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(M){const P=M===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==bi&&M!==Qi&&!P&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=f(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:N,maxSamples:L,samples:F}}function CM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new qr,h=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const x=S.length!==0||y||r!==0||o;return o=y,r=S.length,x},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,y){t=v(S,y,0)},this.setState=function(S,y,x){const w=S.clippingPlanes,T=S.clipIntersection,b=S.clipShadows,_=s.get(S);if(!o||w===null||w.length===0||l&&!b)l?v(null):p();else{const A=l?0:r,U=A*4;let N=_.clippingState||null;f.value=N,N=v(w,y,U,x);for(let L=0;L!==U;++L)N[L]=t[L];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=A}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,y,x,w){const T=S!==null?S.length:0;let b=null;if(T!==0){if(b=f.value,w!==!0||b===null){const _=x+T*4,A=y.matrixWorldInverse;h.getNormalMatrix(A),(b===null||b.length<_)&&(b=new Float32Array(_));for(let U=0,N=x;U!==T;++U,N+=4)c.copy(S[U]).applyMatrix4(A,h),c.normal.toArray(b,N),b[N+3]=c.constant}f.value=b,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}class hf extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Wx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new yn(5,5,5),l=new Ts({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:xo});l.uniforms.tEquirect.value=t;const c=new Qe(o,l),h=t.minFilter;return t.minFilter===Yr&&(t.minFilter=ni),new Vh(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}const Lg=256,NM=3,RM=20,Qx=256,Jx=16,PM=3,LM=new ne,IM=new Gt;class Pc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vh(1,10,null),this._boxMesh=new Qe(new yn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:h=LM}=l,f=this._renderer;this._setSize(c);const p=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const S=f.autoClear,y=f.autoClearColor,x=f.autoClearDepth,w=f.autoClearStencil,T=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,T===null&&(e.background=f.getClearColor(IM));const b=new Vh(r,o,v);return b.position.copy(h),b.update(f,e),f.autoClear=S,f.autoClearColor=y,f.autoClearDepth=x,f.autoClearStencil=w,e.background=T,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lg,Ox(e))}_fromTexture(e,t){e.mapping===_o||e.mapping===Aa?this._setSize(e.image.length===0?Lg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Ig(e,!1,!1),r=Math.log2(e)-NM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Ig(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_o||e.mapping===Aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=DM(),this._integrationMaterial=FM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Jx);for(let c=0;c<=r;c++){const h=Pc.lodToRoughness(c,r);if(c>r-PM)l.roughness.value=h,this._renderCube(e,c,this._integrationMaterial);else{const f=h>0?Math.log2(t)+.5*Math.log2(6/(Qx*Math.pow(h,4)))+.5:0;o.roughness.value=h,o.lodBias.value=f,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=UM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Ig(s,e,t){return new hf(s,{minFilter:Yr,generateMipmaps:e,type:nr,colorSpace:wc,depthBuffer:t})}function Ia(s,e,t){return new Ts({name:s,uniforms:e,vertexShader:bt.cube_vert,fragmentShader:t,side:ii,blending:xo,depthTest:!1,depthWrite:!1})}function DM(){return Ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function FM(){return Ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UM(){return Ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${RM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Dg(){return Ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Fg(){return Ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function OM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(y,x=!1){return y==null?null:x?c(y):l(y)}function l(y){if(y&&y.isTexture){const x=y.mapping;if(x===bd||x===Md)if(e.has(y)){const w=e.get(y).texture;return h(w,y.mapping)}else{const w=y.image;if(w&&w.height>0){const T=new hf(w.height);return T.fromEquirectangularTexture(s,y),e.set(y,T),y.addEventListener("dispose",p),h(T.texture,y.mapping)}else return null}}return y}function c(y){if(y&&y.isTexture&&y.isPMREMTexture!==!0){const x=y.mapping,w=x===bd||x===Md,T=x===_o||x===Aa;if(w||T){let b=t.get(y);const _=b!==void 0?b.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==_)return r===null&&(r=new Pc(s)),b=w?r.fromEquirectangular(y,b):r.fromCubemap(y,b),b.texture.pmremVersion=y.pmremVersion,t.set(y,b),b.texture;if(b!==void 0)return b.texture;{const A=y.image;return w&&A&&A.height>0||T&&A&&f(A)?(r===null&&(r=new Pc(s)),b=w?r.fromEquirectangular(y):r.fromCubemap(y),b.texture.pmremVersion=y.pmremVersion,t.set(y,b),y.addEventListener("dispose",v),b.texture):null}}}return y}function h(y,x){return x===bd?y.mapping=_o:x===Md&&(y.mapping=Aa),y}function f(y){let x=0;const w=6;for(let T=0;T<w;T++)y[T]!==void 0&&x++;return x===w}function p(y){const x=y.target;x.removeEventListener("dispose",p);const w=e.get(x);w!==void 0&&(e.delete(x),w.dispose())}function v(y){const x=y.target;x.removeEventListener("dispose",v);const w=t.get(x);w!==void 0&&(t.delete(x),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function kM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&_c("WebGLRenderer: "+r+" extension not supported."),o}}}function zM(s,e,t,r){const o={},l=new WeakMap,c=new FinalizationRegistry(w=>delete o[w]);function h(w){f(w.target)}function f(w){w.index!==null&&e.remove(w.index);for(const b in w.attributes)e.remove(w.attributes[b]);w.removeEventListener("dispose",h),delete o[w.id],c.unregister(w);const T=l.get(w);T&&(e.remove(T),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,T){return o[T.id]!==void 0||(T.addEventListener("dispose",h),o[T.id]=new WeakRef(T),c.register(T,T.id,T),t.memory.geometries++),T}function v(w){const T=w.attributes;for(const b in T)e.update(T[b],s.ARRAY_BUFFER)}function S(w){const T=w.index,b=w.attributes.position;let _=0;if(b===void 0)return;const A=T!==null?T.array.length:b.array.length/3-1,U=b.count>=65535?jx:Hx,N=new U(Math.ceil(A/3)*6,1),L=N.array;if(T!==null){const M=T.array;_=T.version;for(let P=0,j=0;P<A;P+=3){const k=M[P+0],W=M[P+1],V=M[P+2];L[j++]=k,L[j++]=W,L[j++]=W,L[j++]=V,L[j++]=V,L[j++]=k}}else{_=b.version;for(let M=0,P=0;M<A;M+=3){const j=M+0,k=M+1,W=M+2;L[P++]=j,L[P++]=k,L[P++]=k,L[P++]=W,L[P++]=W,L[P++]=j}}N.version=_;const F=l.get(w);F&&e.remove(F),l.set(w,N)}function y(w){const T=l.get(w);if(T){const b=w.index;b!==null&&T.version<b.version&&S(w)}else S(w);return l.get(w)}function x(){for(const w in o){const T=o[w].deref();T!==void 0&&f(T)}}return{get:p,update:v,getWireframeAttribute:y,dispose:x}}function BM(s,e,t){let r;function o(S){r=S}let l,c;function h(S){l=S.type,c=S.bytesPerElement}function f(S,y){s.drawElements(r,y,l,S*c),t.update(y,r,1)}function p(S,y,x){x!==0&&(s.drawElementsInstanced(r,y,l,S*c,x),t.update(y,r,x))}function v(S,y,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,S,0,x);let T=0;for(let b=0;b<x;b++)T+=y[b];t.update(T,r,1)}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=v}function GM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:zt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function HM(s,e,t){const r=new WeakMap,o=new pn;function l(c,h,f){const p=c.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==S){let k=function(){P.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var x=k;y!==void 0&&y.texture.dispose();const w=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;w===!0&&(N=1),T===!0&&(N=2),b===!0&&(N=3);let L=h.attributes.position.count*N,F=1;L>e.maxTextureSize&&(F=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const M=new Float32Array(L*F*4*S),P=new Bx(M,L,F,S);P.type=Qi,P.needsUpdate=!0;const j=N*4;for(let W=0;W<S;W++){const V=_[W],Z=A[W],O=U[W],J=L*F*4*W;for(let ce=0;ce<V.count;ce++){const $=ce*j;w===!0&&(o.fromBufferAttribute(V,ce),M[J+$+0]=o.x,M[J+$+1]=o.y,M[J+$+2]=o.z,M[J+$+3]=0),T===!0&&(o.fromBufferAttribute(Z,ce),M[J+$+4]=o.x,M[J+$+5]=o.y,M[J+$+6]=o.z,M[J+$+7]=0),b===!0&&(o.fromBufferAttribute(O,ce),M[J+$+8]=o.x,M[J+$+9]=o.y,M[J+$+10]=o.z,M[J+$+11]=O.itemSize===4?o.w:1)}}y={count:S,texture:P,size:new Dt(L,F)},r.set(h,y),h.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let b=0;b<p.length;b++)w+=p[b];const T=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function jM(s,e,t,r,o){let l=new WeakMap;function c(p){const v=o.render.frame,S=p.geometry,y=e.get(p,S);if(l.get(y)!==v&&(e.update(y),l.set(y,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==v&&(x.update(),l.set(x,v))}return y}function h(){l=new WeakMap}function f(p){const v=p.target;v.removeEventListener("dispose",f),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:h}}const VM={[vx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[yx]:"CINEON_TONE_MAPPING",[Sx]:"ACES_FILMIC_TONE_MAPPING",[Mx]:"AGX_TONE_MAPPING",[wx]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function WM(s,e,t,r,o,l){const c=new er(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,f=null,p=null;const v=new ri;v.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new on([0,2,0,0,2,0],2));const S=new FS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Qe(v,S),x=new kS(-1,1,1,-1,0,1);let w=null,T=null,b=!1,_,A=null,U=[],N=!1;this.setSize=function(L,F){c.setSize(L,F),h!==null&&h.setSize(L,F),f!==null&&f.setSize(L,F);for(let M=0;M<U.length;M++){const P=U[M];P.setSize&&P.setSize(L,F)}},this.setEffects=function(L){U=L,N=U.length>0&&U[0].isRenderPass===!0;const F=c.width,M=c.height;U.length>0&&h===null&&(h=new er(F,M,{type:nr,depthBuffer:!1,stencilBuffer:!1}),f=new er(F,M,{type:nr,depthBuffer:!1,stencilBuffer:!1}));const P=o===!0&&U.some(j=>j.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&p===null&&(p=new So(F,M),l===!0&&(p.format=Zr,p.type=yo)),c.dispose(),c.depthTexture=P?p:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let j=0;j<U.length;j++){const k=U[j];k.setSize&&k.setSize(F,M),P&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(p)}},this.begin=function(L,F){if(b||L.toneMapping===_r&&U.length===0)return!1;if(A=F,F!==null){const M=F.width,P=F.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return N===!1&&L.setRenderTarget(c),_=L.toneMapping,L.toneMapping=_r,!0},this.hasRenderPass=function(){return N},this.end=function(L,F){L.toneMapping=_,b=!0;let M=c,P=h;for(let j=0;j<U.length;j++){const k=U[j];k.enabled!==!1&&(k.render(L,P,M,F),k.needsSwap!==!1&&(M=P,P=P===h?f:h))}if(w!==L.outputColorSpace||T!==L.toneMapping){w=L.outputColorSpace,T=L.toneMapping,S.defines={},It.getTransfer(w)===Vt&&(S.defines.SRGB_TRANSFER="");const j=VM[T];j&&(S.defines[j]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=M.texture,L.setRenderTarget(A),L.render(y,x),A=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),h!==null&&h.dispose(),f!==null&&f.dispose(),v.dispose(),S.dispose()}}const e0=new Yn,t0=new So(1,1),n0=new Xx(1),i0=new Bx,r0=new fS,s0=new Wx,Ug=[],Og=[],kg=new Float32Array(16),zg=new Float32Array(9),Bg=new Float32Array(4);function Eo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Ug[o];if(l===void 0&&(l=new Float32Array(o),Ug[o]=l),e!==0){r.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(l,h)}return l}function En(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Oc(s,e){let t=Og[e];t===void 0&&(t=new Int32Array(e),Og[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function XM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function ZM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;Bg.set(r),s.uniformMatrix2fv(this.addr,!1,Bg),Tn(t,r)}}function KM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;zg.set(r),s.uniformMatrix3fv(this.addr,!1,zg),Tn(t,r)}}function QM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;kg.set(r),s.uniformMatrix4fv(this.addr,!1,kg),Tn(t,r)}}function JM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function kc(s){return s.version===0&&(s.compareFunction=Fx,s.needsUpdate=!0),s}function aw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=kc(t0):l=e0,t.setTexture2D(e||l,o)}function lw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||r0,o)}function cw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=kc(n0):l=s0,t.setTextureCube(e||l,o)}function uw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||i0,o)}function dw(s){switch(s){case 5126:return XM;case 35664:return qM;case 35665:return $M;case 35666:return YM;case 35674:return ZM;case 35675:return KM;case 35676:return QM;case 5124:case 35670:return JM;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function hw(s,e){s.uniform1fv(this.addr,e)}function fw(s,e){const t=Eo(e,this.size,2);s.uniform2fv(this.addr,t)}function pw(s,e){const t=Eo(e,this.size,3);s.uniform3fv(this.addr,t)}function mw(s,e){const t=Eo(e,this.size,4);s.uniform4fv(this.addr,t)}function gw(s,e){const t=Eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xw(s,e){const t=Eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vw(s,e){const t=Eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _w(s,e){s.uniform1iv(this.addr,e)}function yw(s,e){s.uniform2iv(this.addr,e)}function Sw(s,e){s.uniform3iv(this.addr,e)}function bw(s,e){s.uniform4iv(this.addr,e)}function Mw(s,e){s.uniform1uiv(this.addr,e)}function ww(s,e){s.uniform2uiv(this.addr,e)}function Ew(s,e){s.uniform3uiv(this.addr,e)}function Tw(s,e){s.uniform4uiv(this.addr,e)}function Aw(s,e,t){const r=this.cache,o=e.length,l=Oc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=kc(t0):c=e0;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||c,l[h])}function Cw(s,e,t){const r=this.cache,o=e.length,l=Oc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||r0,l[c])}function Nw(s,e,t){const r=this.cache,o=e.length,l=Oc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=kc(n0):c=s0;for(let h=0;h!==o;++h)t.setTextureCube(e[h]||c,l[h])}function Rw(s,e,t){const r=this.cache,o=e.length,l=Oc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||i0,l[c])}function Pw(s){switch(s){case 5126:return hw;case 35664:return fw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return xw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return bw;case 5125:return Mw;case 36294:return ww;case 36295:return Ew;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Rw}}class Lw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dw(t.type)}}class Iw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pw(t.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function Gg(s,e){s.seq.push(e),s.map[e.id]=e}function Fw(s,e,t){const r=s.name,o=r.length;for(qd.lastIndex=0;;){const l=qd.exec(r),c=qd.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&c+2===o){Gg(t,p===void 0?new Lw(h,s,e):new Iw(h,s,e));break}else{let S=t.map[h];S===void 0&&(S=new Dw(h),Gg(t,S)),t=S}}}class yc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(t,c),f=e.getUniformLocation(t,h.name);Fw(h,f,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Hg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Uw=37297;let Ow=0;function kw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return r.join(`
`)}const jg=new vt;function zw(s){It._getMatrix(jg,It.workingColorSpace,s);const e=`mat3( ${jg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case Ec:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+kw(s.getShaderSource(e),h)}else return l}function Bw(s,e){const t=zw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Gw={[vx]:"Linear",[_x]:"Reinhard",[yx]:"Cineon",[Sx]:"ACESFilmic",[Mx]:"AgX",[wx]:"Neutral",[bx]:"Custom"};function Hw(s,e){const t=Gw[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cc=new ne;function jw(){It.getLuminanceCoefficients(cc);const s=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function Ww(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Xw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function va(s){return s!==""}function Wg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(s){return s.replace(qw,$w)}function $w(s,e){const t=bt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xh(t)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(s){return s.replace(Yw,Zw)}function Zw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $g(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kw={[pc]:"SHADOWMAP_TYPE_PCF",[xa]:"SHADOWMAP_TYPE_VSM"};function Qw(s){return Kw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jw={[Aa]:"ENVMAP_MODE_REFRACTION"};function eE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Jw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tE={[xx]:"ENVMAP_BLENDING_MULTIPLY",[Ry]:"ENVMAP_BLENDING_MIX",[Py]:"ENVMAP_BLENDING_ADD"};function nE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tE[s.combine]||"ENVMAP_BLENDING_NONE"}function iE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=Qw(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=eE(t),S=nE(t),y=Vw(t),x=Ww(l),w=o.createProgram();let T,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(va).join(`
`),T.length>0&&(T+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(va).join(`
`),b.length>0&&(b+=`
`)):(T=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),b=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?bt.tonemapping_pars_fragment:"",t.toneMapping!==_r?Hw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,Bw("linearToOutputTexel",t.outputColorSpace),jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),c=Xh(c),c=Wg(c,t),c=Xg(c,t),h=Xh(h),h=Wg(h,t),h=Xg(h,t),c=qg(c),h=qg(h),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,T=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,b=["#define varying in",t.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=_+T+c,U=_+b+h,N=Hg(o,o.VERTEX_SHADER,A),L=Hg(o,o.FRAGMENT_SHADER,U);o.attachShader(w,N),o.attachShader(w,L),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(k){if(s.debug.checkShaderErrors){const W=o.getProgramInfoLog(w)||"",V=o.getShaderInfoLog(N)||"",Z=o.getShaderInfoLog(L)||"",O=W.trim(),J=V.trim(),ce=Z.trim();let $=!0,z=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,N,L);else{const G=Vg(o,N,"vertex"),X=Vg(o,L,"fragment");zt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+O+`
`+G+`
`+X)}else O!==""?gt("WebGLProgram: Program Info Log:",O):(J===""||ce==="")&&(z=!1);z&&(k.diagnostics={runnable:$,programLog:O,vertexShader:{log:J,prefix:T},fragmentShader:{log:ce,prefix:b}})}o.deleteShader(N),o.deleteShader(L),M=new yc(o,w),P=Xw(o,w)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(w,Uw)),j},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ow++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=L,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new oE(e),t.set(e,r)),r}}class oE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function aE(s){return s===Es||s===bc||s===Mc}function lE(s,e,t,r,o,l){const c=new of,h=new sE,f=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return f.add(M),M===0?"uv":`uv${M}`}function w(M,P,j,k,W,V){const Z=k.fog,O=W.geometry,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,ce=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=e.get(M.envMap||J,ce),z=y[M.type];let G=r.precision;M.precision!==null&&(G=r.getMaxPrecision(M.precision),G!==M.precision&&gt("WebGLProgram.getParameters:",M.precision,"not supported, using",G,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,I=X!==void 0?X.length:0;let K=0;O.morphAttributes.position!==void 0&&(K=1),O.morphAttributes.normal!==void 0&&(K=2),O.morphAttributes.color!==void 0&&(K=3);let me,Q,he,Se;if(z){const Pe=Zi[z];me=Pe.vertexShader,Q=Pe.fragmentShader}else{me=M.vertexShader,Q=M.fragmentShader;const Pe=h.getVertexShaderStage(M),Ye=h.getFragmentShaderStage(M);h.update(M,Pe,Ye),he=Pe.id,Se=Ye.id}const Te=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ge=W.isInstancedMesh===!0,ft=W.isBatchedMesh===!0,re=!!M.map,je=!!M.matcap,it=!!$,lt=it&&$.isPMREMTexture===!0,Ct=!!M.aoMap,St=!!M.lightMap,at=!!M.bumpMap&&M.wireframe===!1,Lt=!!M.normalMap,an=!!M.displacementMap,wt=!!M.emissiveMap,Nt=!!M.metalnessMap,Wt=!!M.roughnessMap,un=M.anisotropy>0,ee=M.clearcoat>0,Jt=M.diffuseRoughness>0,At=M.dispersion>0,pt=M.retroreflectivity>0,we=M.iridescence>0,Ut=M.sheen>0,Ve=M.transmission>0,ct=un&&!!M.anisotropyMap,D=ee&&!!M.clearcoatMap,E=ee&&!!M.clearcoatNormalMap,se=ee&&!!M.clearcoatRoughnessMap,Me=Jt&&!!M.diffuseRoughnessMap,_e=we&&!!M.iridescenceMap,Ne=we&&!!M.iridescenceThicknessMap,Le=Ut&&!!M.sheenColorMap,ge=Ut&&!!M.sheenRoughnessMap,xe=!!M.specularMap,Ie=!!M.specularColorMap,H=!!M.specularIntensityMap,ye=Ve&&!!M.transmissionMap,pe=Ve&&!!M.thicknessMap,ke=!!M.gradientMap,Re=!!M.alphaMap,De=M.alphaTest>0,te=!!M.alphaHash,Fe=!!M.extensions;let ve=_r;M.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ve=s.toneMapping);const qe=lt?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,ut={shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:Q,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:G,batching:ft,batchingColor:ft&&W._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,instancingMorph:Ge&&W.morphTexture!==null,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:re,matcap:je,envMap:it,envMapMode:it&&$.mapping,envMapPMREM:lt,envMapMaxLod:lt?qe.length-1:null,envMapSize:lt?qe[0].width:null,aoMap:Ct,lightMap:St,bumpMap:at,normalMap:Lt,displacementMap:an,emissiveMap:wt,normalMapObjectSpace:Lt&&M.normalMapType===Dy,normalMapTangentSpace:Lt&&M.normalMapType===rg,packedNormalMap:Lt&&M.normalMapType===rg&&aE(M.normalMap.format),metalnessMap:Nt,roughnessMap:Wt,anisotropy:un,anisotropyMap:ct,clearcoat:ee,clearcoatMap:D,clearcoatNormalMap:E,clearcoatRoughnessMap:se,diffuseRoughness:Jt,diffuseRoughnessMap:Me,dispersion:At,retroreflection:pt,iridescence:we,iridescenceMap:_e,iridescenceThicknessMap:Ne,sheen:Ut,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:xe,specularColorMap:Ie,specularIntensityMap:H,transmission:Ve,transmissionMap:ye,thicknessMap:pe,gradientMap:ke,opaque:M.transparent===!1&&M.blending===ba&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:De,alphaHash:te,combine:M.combine,mapUv:re&&x(M.map.channel),aoMapUv:Ct&&x(M.aoMap.channel),lightMapUv:St&&x(M.lightMap.channel),bumpMapUv:at&&x(M.bumpMap.channel),normalMapUv:Lt&&x(M.normalMap.channel),displacementMapUv:an&&x(M.displacementMap.channel),emissiveMapUv:wt&&x(M.emissiveMap.channel),metalnessMapUv:Nt&&x(M.metalnessMap.channel),roughnessMapUv:Wt&&x(M.roughnessMap.channel),anisotropyMapUv:ct&&x(M.anisotropyMap.channel),clearcoatMapUv:D&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:E&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&x(M.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(M.sheenRoughnessMap.channel),specularMapUv:xe&&x(M.specularMap.channel),specularColorMapUv:Ie&&x(M.specularColorMap.channel),specularIntensityMapUv:H&&x(M.specularIntensityMap.channel),transmissionMapUv:ye&&x(M.transmissionMap.channel),thicknessMapUv:pe&&x(M.thicknessMap.channel),alphaMapUv:Re&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Lt||un),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(re||Re),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Lt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:be,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:K,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&It.getTransfer(M.map.colorSpace)===Vt,decodeVideoTextureEmissive:wt&&M.emissiveMap.isVideoTexture===!0&&It.getTransfer(M.emissiveMap.colorSpace)===Vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ki,flipSided:M.side===ii,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=f.has(1),ut.vertexUv2s=f.has(2),ut.vertexUv3s=f.has(3),f.clear(),ut}function T(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)P.push(j),P.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(b(P,M),_(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function b(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function _(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function A(M){const P=y[M.type];let j;if(P){const k=Zi[P];j=LS.clone(k.uniforms)}else j=M.uniforms;return j}function U(M,P){let j=v.get(P);return j!==void 0?++j.usedTimes:(j=new iE(s,P,M,o),p.push(j),v.set(P,j)),j}function N(M){if(--M.usedTimes===0){const P=p.indexOf(M);p[P]=p[p.length-1],p.pop(),v.delete(M.cacheKey),M.destroy()}}function L(M){h.remove(M)}function F(){h.dispose()}return{getParameters:w,getProgramCacheKey:T,getUniforms:A,acquireProgram:U,releaseProgram:N,releaseShaderCache:L,programs:p,dispose:F}}function cE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function r(c){s.delete(c)}function o(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Yg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(y){let x=0;return y.isInstancedMesh&&(x+=2),y.isSkinnedMesh&&(x+=1),x}function h(y,x,w,T,b,_){let A=s[e];return A===void 0?(A={id:y.id,object:y,geometry:x,material:w,materialVariant:c(y),groupOrder:T,renderOrder:y.renderOrder,z:b,group:_},s[e]=A):(A.id=y.id,A.object=y,A.geometry=x,A.material=w,A.materialVariant=c(y),A.groupOrder=T,A.renderOrder=y.renderOrder,A.z=b,A.group=_),e++,A}function f(y,x,w,T,b,_,A){A.reversedDepth===!0&&(b=-b);const U=h(y,x,w,T,b,_);w.transmission>0?r.push(U):w.transparent===!0?o.push(U):t.push(U)}function p(y,x,w,T,b,_){const A=h(y,x,w,T,b,_);w.transmission>0?r.unshift(A):w.transparent===!0?o.unshift(A):t.unshift(A)}function v(y,x){t.length>1&&t.sort(y||uE),r.length>1&&r.sort(x||Yg),o.length>1&&o.sort(x||Yg)}function S(){for(let y=e,x=s.length;y<x;y++){const w=s[y];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:S,sort:v}}function dE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Zg,s.set(r,[c])):o>=l.length?(c=new Zg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new Gt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":t={color:new Gt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pE=0;function mE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s){const e=new hE,t=fE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const o=new ne,l=new Qt,c=new Qt;function h(p){let v=0,S=0,y=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let x=0,w=0,T=0,b=0,_=0,A=0,U=0,N=0,L=0,F=0,M=0,P=0,j=0,k=0;p.sort(mE);for(let V=0,Z=p.length;V<Z;V++){const O=p[V],J=O.color,ce=O.intensity,$=O.distance;let z=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Es?z=O.shadow.map.texture:z=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)v+=J.r*ce,S+=J.g*ce,y+=J.b*ce;else if(O.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(O.sh.coefficients[G],ce);k++}else if(O.isSunLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const X=O.shadow,I=t.get(O);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[w]=I,r.sunShadowMap[w]=z;const K=X.getViewportCount();for(let me=0;me<K;me++)r.sunShadowMatrix[T+me]=X.getMatrix(me),r.sunShadowCascade[T+me]=X._cascadeData[me];T+=K,w++}r.sun[x]=G,x++}else if(O.isDirectionalLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const X=O.shadow,I=t.get(O);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,r.directionalShadow[b]=I,r.directionalShadowMap[b]=z,r.directionalShadowMatrix[b]=O.shadow.matrix,L++}r.directional[b]=G,b++}else if(O.isSpotLight){const G=e.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(J).multiplyScalar(ce),G.distance=$,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,r.spot[A]=G;const X=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,X.updateMatrices(O),O.castShadow&&j++),r.spotLightMatrix[A]=X.matrix,O.castShadow){const I=t.get(O);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,r.spotShadow[A]=I,r.spotShadowMap[A]=z,M++}A++}else if(O.isRectAreaLight){const G=e.get(O);G.color.copy(J).multiplyScalar(ce),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),r.rectArea[U]=G,U++}else if(O.isPointLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),G.distance=O.distance,G.decay=O.decay,O.castShadow){const X=O.shadow,I=t.get(O);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,I.shadowCameraNear=X.camera.near,I.shadowCameraFar=X.camera.far,r.pointShadow[_]=I,r.pointShadowMap[_]=z,r.pointShadowMatrix[_]=O.shadow.matrix,F++}r.point[_]=G,_++}else if(O.isHemisphereLight){const G=e.get(O);G.skyColor.copy(O.color).multiplyScalar(ce),G.groundColor.copy(O.groundColor).multiplyScalar(ce),r.hemi[N]=G,N++}}U>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=y;const W=r.hash;(W.sunLength!==x||W.directionalLength!==b||W.pointLength!==_||W.spotLength!==A||W.rectAreaLength!==U||W.hemiLength!==N||W.numSunShadows!==w||W.numDirectionalShadows!==L||W.numPointShadows!==F||W.numSpotShadows!==M||W.numSpotMaps!==P||W.numLightProbes!==k)&&(r.sun.length=x,r.directional.length=b,r.spot.length=A,r.rectArea.length=U,r.point.length=_,r.hemi.length=N,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=F,r.pointShadowMap.length=F,r.pointShadowMatrix.length=F,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+P-j,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=k,W.sunLength=x,W.directionalLength=b,W.pointLength=_,W.spotLength=A,W.rectAreaLength=U,W.hemiLength=N,W.numSunShadows=w,W.numDirectionalShadows=L,W.numPointShadows=F,W.numSpotShadows=M,W.numSpotMaps=P,W.numLightProbes=k,r.version=pE++)}function f(p,v){let S=0,y=0,x=0,w=0,T=0,b=0;const _=v.matrixWorldInverse;for(let A=0,U=p.length;A<U;A++){const N=p[A];if(N.isSunLight){const L=r.sun[S];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),S++}else if(N.isDirectionalLight){const L=r.directional[y];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),y++}else if(N.isSpotLight){const L=r.spot[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),w++}else if(N.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),c.identity(),l.copy(N.matrixWorld),l.premultiply(_),c.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),T++}else if(N.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),x++}else if(N.isHemisphereLight){const L=r.hemi[b];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),b++}}}return{setup:h,setupView:f,state:r}}function Kg(s){const e=new gE(s),t=[],r=[],o=[];function l(S){v.camera=S,t.length=0,r.length=0,o.length=0}function c(S){S.isLightProbeGrid?o.push(S):t.push(S)}function h(S){r.push(S)}function f(){e.setup(t),o.sort((S,y)=>S.priority-y.priority||S.id-y.id)}function p(S){e.setupView(t,S)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:h}}function xE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let h;return c===void 0?(h=new Kg(s),e.set(o,[h])):l>=c.length?(h=new Kg(s),c.push(h)):h=c[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yE=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],SE=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Qg=new Qt,ha=new ne,$d=new ne;function bE(s,e,t){let r=new Cc;const o=new Dt,l=new Dt,c=new pn,h=new US,f=new OS,p={},v=t.maxTextureSize,S={[ws]:ii,[ii]:ws,[Ki]:Ki},y=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:vE,fragmentShader:_E}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const w=new ri;w.setAttribute("position",new Ms(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Qe(w,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let _=this.type;this.render=function(F,M,P){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||F.length===0)return;this.type===dy&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pc);const j=s.getRenderTarget(),k=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),V=s.state;V.setBlending(xo),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=_!==this.type;Z&&M.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(J=>J.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,J=F.length;O<J;O++){const ce=F[O],$=ce.shadow;if($===void 0){gt("WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const z=$.getFrameExtents();o.multiply(z),l.copy($.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/z.x),o.x=l.x*z.x,$.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/z.y),o.y=l.y*z.y,$.mapSize.y=l.y));const G=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=G,$.map===null||Z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===xa){if(ce.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new er(o.x,o.y,{format:Es,type:nr,minFilter:ni,magFilter:ni,generateMipmaps:!1}),$.map.texture.name=ce.name+".shadowMap",$.map.depthTexture=new So(o.x,o.y,Qi),$.map.depthTexture.name=ce.name+".shadowMapDepth",$.map.depthTexture.format=Kr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=On,$.map.depthTexture.magFilter=On}else ce.isPointLight?($.map=new hf(o.x),$.map.depthTexture=new Xx(o.x,tr)):($.map=new er(o.x,o.y),$.map.depthTexture=new So(o.x,o.y,tr)),$.map.depthTexture.name=ce.name+".shadowMap",$.map.depthTexture.format=Kr,this.type===pc?($.map.depthTexture.compareFunction=G?Dx:Ix,$.map.depthTexture.minFilter=ni,$.map.depthTexture.magFilter=ni):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=On,$.map.depthTexture.magFilter=On);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==o.x||$.map.height!==o.y)&&$.map.setSize(o.x,o.y);const X=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();ce.isPointLight!==!0&&$.updateMatrices(ce,P);const I=($.camera.layers.mask&4294967294)!==0?$.camera.layers:P.layers;for(let K=0;K<X;K++){const me=$.getCamera(K);if(ce.isPointLight){const Q=$.camera,he=$.matrix,Se=ce.distance||Q.far;Se!==Q.far&&(Q.far=Se,Q.updateProjectionMatrix()),ha.setFromMatrixPosition(ce.matrixWorld),Q.position.copy(ha),$d.copy(Q.position),$d.add(yE[K]),Q.up.copy(SE[K]),Q.lookAt($d),Q.updateMatrixWorld(),he.makeTranslation(-ha.x,-ha.y,-ha.z),Qg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Qg,Q.coordinateSystem,Q.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,K),s.clear();else{K===0&&(s.setRenderTarget($.map),s.clear());const Q=$.getViewport(K);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),V.viewport(c)}r=$.getFrustum(K),N(M,P,me,ce,I,this.type)}$.isPointLightShadow!==!0&&this.type===xa&&A($,P),$.needsUpdate=!1}_=this.type,b.needsUpdate=!1,s.setRenderTarget(j,k,W)};function A(F,M){const P=e.update(T);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null?F.mapPass=new er(o.x,o.y,{format:Es,type:nr}):(F.mapPass.width!==F.map.width||F.mapPass.height!==F.map.height)&&F.mapPass.setSize(F.map.width,F.map.height),y.uniforms.shadow_pass.value=F.map.depthTexture,y.uniforms.resolution.value.set(F.map.width,F.map.height),y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(M,null,P,y,T,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value.set(F.map.width,F.map.height),x.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(M,null,P,x,T,null)}function U(F,M,P,j){let k=null;const W=P.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(W!==void 0)k=W;else if(k=P.isPointLight===!0?f:h,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const V=k.uuid,Z=M.uuid;let O=p[V];O===void 0&&(O={},p[V]=O);let J=O[Z];J===void 0&&(J=k.clone(),O[Z]=J,M.addEventListener("dispose",L)),k=J}if(k.visible=M.visible,k.wireframe=M.wireframe,j===xa?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:S[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,k.map=M.map,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,P.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const V=s.properties.get(k);V.light=P}return k}function N(F,M,P,j,k,W){if(F.visible===!1)return;if(F.layers.test(k)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&W===xa)&&(!F.frustumCulled||F.intersectsFrustum(r))){F.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,F.matrixWorld);const O=e.update(F),J=F.material;if(Array.isArray(J)){const ce=O.groups;for(let $=0,z=ce.length;$<z;$++){const G=ce[$],X=J[G.materialIndex];if(X&&X.visible){const I=U(F,X,j,W);F.onBeforeShadow(s,F,M,P,O,I,G),s.renderBufferDirect(P,null,O,I,F,G),F.onAfterShadow(s,F,M,P,O,I,G)}}}else if(J.visible){const ce=U(F,J,j,W);F.onBeforeShadow(s,F,M,P,O,ce,null),s.renderBufferDirect(P,null,O,ce,F,null),F.onAfterShadow(s,F,M,P,O,ce,null)}}const Z=F.children;for(let O=0,J=Z.length;O<J;O++)N(Z[O],M,P,j,k,W)}function L(F){F.target.removeEventListener("dispose",L);for(const P in p){const j=p[P],k=F.target.uuid;k in j&&(j[k].dispose(),delete j[k])}}}function ME(s,e){function t(){let H=!1;const ye=new pn;let pe=null;const ke=new pn(0,0,0,0);return{setMask:function(Re){pe!==Re&&!H&&(s.colorMask(Re,Re,Re,Re),pe=Re)},setLocked:function(Re){H=Re},setClear:function(Re,De,te,Fe,ve){ve===!0&&(Re*=Fe,De*=Fe,te*=Fe),ye.set(Re,De,te,Fe),ke.equals(ye)===!1&&(s.clearColor(Re,De,te,Fe),ke.copy(ye))},reset:function(){H=!1,pe=null,ke.set(-1,0,0,0)}}}function r(){let H=!1,ye=!1,pe=null,ke=null,Re=null;return{setReversed:function(De){if(ye!==De){const te=e.get("EXT_clip_control");De?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),ye=De;const Fe=Re;Re=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(De){De?be(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(De){pe!==De&&!H&&(s.depthMask(De),pe=De)},setFunc:function(De){if(ye&&(De=Wy[De]),ke!==De){switch(De){case sh:s.depthFunc(s.NEVER);break;case oh:s.depthFunc(s.ALWAYS);break;case ah:s.depthFunc(s.LESS);break;case Ta:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case ch:s.depthFunc(s.GEQUAL);break;case uh:s.depthFunc(s.GREATER);break;case dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=De}},setLocked:function(De){H=De},setClear:function(De){Re!==De&&(Re=De,ye&&(De=1-De),s.clearDepth(De))},reset:function(){H=!1,pe=null,ke=null,Re=null,ye=!1}}}function o(){let H=!1,ye=null,pe=null,ke=null,Re=null,De=null,te=null,Fe=null,ve=null;return{setTest:function(qe){H||(qe?be(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(qe){ye!==qe&&!H&&(s.stencilMask(qe),ye=qe)},setFunc:function(qe,ut,Pe){(pe!==qe||ke!==ut||Re!==Pe)&&(s.stencilFunc(qe,ut,Pe),pe=qe,ke=ut,Re=Pe)},setOp:function(qe,ut,Pe){(De!==qe||te!==ut||Fe!==Pe)&&(s.stencilOp(qe,ut,Pe),De=qe,te=ut,Fe=Pe)},setLocked:function(qe){H=qe},setClear:function(qe){ve!==qe&&(s.clearStencil(qe),ve=qe)},reset:function(){H=!1,ye=null,pe=null,ke=null,Re=null,De=null,te=null,Fe=null,ve=null}}}const l=new t,c=new r,h=new o;let f={};const p=new WeakMap;let v={},S={},y={},x=new WeakMap,w=[],T=null,b=!1,_=null,A=null,U=null,N=null,L=null,F=null,M=null,P=new Gt(0,0,0),j=0,k=!1,W=null,V=null,Z=null,O=null,J=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=z>=2);let X=null,I={};const K=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),Q=new pn().fromArray(K),he=new pn().fromArray(me);function Se(H,ye,pe,ke){const Re=new Uint8Array(4),De=s.createTexture();s.bindTexture(H,De),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<pe;te++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(ye+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return De}const Te={};Te[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),be(s.DEPTH_TEST),c.setFunc(Ta),at(!1),Lt(eg),be(s.CULL_FACE),Ct(xo);function be(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function Ge(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function ft(H,ye){return y[H]!==ye?(s.bindFramebuffer(H,ye),y[H]=ye,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=ye),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function re(H,ye){let pe=w,ke=!1;if(H){pe=x.get(ye),pe===void 0&&(pe=[],x.set(ye,pe));const Re=H.textures;if(pe.length!==Re.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,te=Re.length;De<te;De++)pe[De]=s.COLOR_ATTACHMENT0+De;pe.length=Re.length,ke=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,ke=!0);ke&&s.drawBuffers(pe)}function je(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const it={[co]:s.FUNC_ADD,[fy]:s.FUNC_SUBTRACT,[py]:s.FUNC_REVERSE_SUBTRACT};it[my]=s.MIN,it[gy]=s.MAX;const lt={[xy]:s.ZERO,[vy]:s.ONE,[_y]:s.SRC_COLOR,[mx]:s.SRC_ALPHA,[Ey]:s.SRC_ALPHA_SATURATE,[My]:s.DST_COLOR,[Sy]:s.DST_ALPHA,[yy]:s.ONE_MINUS_SRC_COLOR,[gx]:s.ONE_MINUS_SRC_ALPHA,[wy]:s.ONE_MINUS_DST_COLOR,[by]:s.ONE_MINUS_DST_ALPHA,[Ty]:s.CONSTANT_COLOR,[Ay]:s.ONE_MINUS_CONSTANT_COLOR,[Cy]:s.CONSTANT_ALPHA,[Ny]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(H,ye,pe,ke,Re,De,te,Fe,ve,qe){if(H===xo){b===!0&&(Ge(s.BLEND),b=!1);return}if(b===!1&&(be(s.BLEND),b=!0),H!==hy){if(H!==_||qe!==k){if((A!==co||L!==co)&&(s.blendEquation(s.FUNC_ADD),A=co,L=co),qe)switch(H){case ba:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tg:s.blendFunc(s.ONE,s.ONE);break;case ng:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ig:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",H);break}else switch(H){case ba:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ng:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ig:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",H);break}U=null,N=null,F=null,M=null,P.set(0,0,0),j=0,_=H,k=qe}return}Re=Re||ye,De=De||pe,te=te||ke,(ye!==A||Re!==L)&&(s.blendEquationSeparate(it[ye],it[Re]),A=ye,L=Re),(pe!==U||ke!==N||De!==F||te!==M)&&(s.blendFuncSeparate(lt[pe],lt[ke],lt[De],lt[te]),U=pe,N=ke,F=De,M=te),(Fe.equals(P)===!1||ve!==j)&&(s.blendColor(Fe.r,Fe.g,Fe.b,ve),P.copy(Fe),j=ve),_=H,k=!1}function St(H,ye){H.side===Ki?Ge(s.CULL_FACE):be(s.CULL_FACE);let pe=H.side===ii;ye&&(pe=!pe),at(pe),H.blending===ba&&H.transparent===!1?Ct(xo):Ct(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const ke=H.stencilWrite;h.setTest(ke),ke&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(H){W!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),W=H)}function Lt(H){H!==cy?(be(s.CULL_FACE),H!==V&&(H===eg?s.cullFace(s.BACK):H===uy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),V=H}function an(H){H!==Z&&($&&s.lineWidth(H),Z=H)}function wt(H,ye,pe){H?(be(s.POLYGON_OFFSET_FILL),(O!==ye||J!==pe)&&(O=ye,J=pe,c.getReversed()&&(ye=-ye,pe=-pe),s.polygonOffset(ye,pe))):Ge(s.POLYGON_OFFSET_FILL)}function Nt(H){H?be(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function Wt(H){H===void 0&&(H=s.TEXTURE0+ce-1),X!==H&&(s.activeTexture(H),X=H)}function un(H,ye,pe){pe===void 0&&(X===null?pe=s.TEXTURE0+ce-1:pe=X);let ke=I[pe];ke===void 0&&(ke={type:void 0,texture:void 0},I[pe]=ke),(ke.type!==H||ke.texture!==ye)&&(X!==pe&&(s.activeTexture(pe),X=pe),s.bindTexture(H,ye||Te[H]),ke.type=H,ke.texture=ye)}function ee(){const H=I[X];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Jt(){try{s.compressedTexImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function At(){try{s.compressedTexImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function pt(){try{s.texSubImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function we(){try{s.texSubImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function Ut(){try{s.compressedTexSubImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function ct(){try{s.texStorage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function D(){try{s.texStorage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function E(){try{s.texImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function se(){try{s.texImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function Me(H){return S[H]!==void 0?S[H]:s.getParameter(H)}function _e(H,ye){S[H]!==ye&&(s.pixelStorei(H,ye),S[H]=ye)}function Ne(H){Q.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Q.copy(H))}function Le(H){he.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),he.copy(H))}function ge(H,ye){let pe=p.get(ye);pe===void 0&&(pe=new WeakMap,p.set(ye,pe));let ke=pe.get(H);ke===void 0&&(ke=s.getUniformBlockIndex(ye,H.name),s.uniformBlockBinding(ye,ke,ke),pe.set(H,ke))}function xe(H,ye,pe){const Re=p.get(ye).get(H);f[Re]!==pe&&(s.bindBufferBase(s.UNIFORM_BUFFER,Re,pe),f[Re]=pe)}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},X=null,I={},y={},f={},x=new WeakMap,w=[],T=null,b=!1,_=null,A=null,U=null,N=null,L=null,F=null,M=null,P=new Gt(0,0,0),j=0,k=!1,W=null,V=null,Z=null,O=null,J=null,Q.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:be,disable:Ge,bindFramebuffer:ft,drawBuffers:re,useProgram:je,setBlending:Ct,setMaterial:St,setFlipSided:at,setCullFace:Lt,setLineWidth:an,setPolygonOffset:wt,setScissorTest:Nt,activeTexture:Wt,bindTexture:un,unbindTexture:ee,compressedTexImage2D:Jt,compressedTexImage3D:At,texImage2D:E,texImage3D:se,pixelStorei:_e,getParameter:Me,updateUBOMapping:ge,uniformBlockBinding:xe,texStorage2D:ct,texStorage3D:D,texSubImage2D:pt,texSubImage3D:we,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Ve,scissor:Ne,viewport:Le,reset:Ie}}function wE(s,e,t,r,o,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,v=new WeakMap,S=new Set;let y;const x=new WeakMap,w=new Set,T=new FinalizationRegistry(D=>w.delete(D));let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,E){return b?new OffscreenCanvas(D,E):Ac("canvas")}function A(D,E,se){let Me=1;const _e=ct(D);if((_e.width>se||_e.height>se)&&(Me=se/Math.max(_e.width,_e.height)),Me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ne=Math.floor(Me*_e.width),Le=Math.floor(Me*_e.height);y===void 0&&(y=_(Ne,Le));const ge=E?_(Ne,Le):y;return ge.width=Ne,ge.height=Le,ge.getContext("2d").drawImage(D,0,0,Ne,Le),gt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ne+"x"+Le+")."),ge}else return"data"in D&&gt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function U(D){return D.generateMipmaps}function N(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function F(D,E,se,Me,_e,Ne=!1){if(D!==null){if(s[D]!==void 0)return s[D];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Le;Me&&(Le=e.get("EXT_texture_norm16"),Le||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===s.RED&&(se===s.FLOAT&&(ge=s.R32F),se===s.HALF_FLOAT&&(ge=s.R16F),se===s.UNSIGNED_BYTE&&(ge=s.R8),se===s.UNSIGNED_SHORT&&Le&&(ge=Le.R16_EXT),se===s.SHORT&&Le&&(ge=Le.R16_SNORM_EXT)),E===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.R8UI),se===s.UNSIGNED_SHORT&&(ge=s.R16UI),se===s.UNSIGNED_INT&&(ge=s.R32UI),se===s.BYTE&&(ge=s.R8I),se===s.SHORT&&(ge=s.R16I),se===s.INT&&(ge=s.R32I)),E===s.RG&&(se===s.FLOAT&&(ge=s.RG32F),se===s.HALF_FLOAT&&(ge=s.RG16F),se===s.UNSIGNED_BYTE&&(ge=s.RG8),se===s.UNSIGNED_SHORT&&Le&&(ge=Le.RG16_EXT),se===s.SHORT&&Le&&(ge=Le.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RG8UI),se===s.UNSIGNED_SHORT&&(ge=s.RG16UI),se===s.UNSIGNED_INT&&(ge=s.RG32UI),se===s.BYTE&&(ge=s.RG8I),se===s.SHORT&&(ge=s.RG16I),se===s.INT&&(ge=s.RG32I)),E===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),se===s.UNSIGNED_INT&&(ge=s.RGB32UI),se===s.BYTE&&(ge=s.RGB8I),se===s.SHORT&&(ge=s.RGB16I),se===s.INT&&(ge=s.RGB32I)),E===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),se===s.UNSIGNED_INT&&(ge=s.RGBA32UI),se===s.BYTE&&(ge=s.RGBA8I),se===s.SHORT&&(ge=s.RGBA16I),se===s.INT&&(ge=s.RGBA32I)),E===s.RGB&&(se===s.UNSIGNED_SHORT&&Le&&(ge=Le.RGB16_EXT),se===s.SHORT&&Le&&(ge=Le.RGB16_SNORM_EXT),se===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),se===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),E===s.RGBA){const xe=Ne?Ec:It.getTransfer(_e);se===s.FLOAT&&(ge=s.RGBA32F),se===s.HALF_FLOAT&&(ge=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ge=xe===Vt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT&&Le&&(ge=Le.RGBA16_EXT),se===s.SHORT&&Le&&(ge=Le.RGBA16_SNORM_EXT),se===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function M(D,E){let se;return D?E===null||E===tr||E===yo?se=s.DEPTH24_STENCIL8:E===Qi?se=s.DEPTH32F_STENCIL8:E===Ca&&(se=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===tr||E===yo?se=s.DEPTH_COMPONENT24:E===Qi?se=s.DEPTH_COMPONENT32F:E===Ca&&(se=s.DEPTH_COMPONENT16),se}function P(D,E){return U(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function j(D){const E=new WeakRef(D);r.get(D).__ref=E,w.add(E),T.register(D,E,E)}function k(D){const E=r.get(D).__ref;E!==void 0&&(w.delete(E),T.unregister(E))}function W(D){Z(D.target)}function V(D){O(D.target)}function Z(D){D.removeEventListener("dispose",W),k(D),ce(D),D.isVideoTexture&&v.delete(D),D.isHTMLTexture&&S.delete(D)}function O(D){D.removeEventListener("dispose",V),k(D),z(D)}function J(){for(const D of w){const E=D.deref();E!==void 0&&(E.isRenderTarget===!0?O(E):Z(E))}w.clear(),S.clear()}function ce(D){const E=r.get(D);if(E.__webglInit===void 0)return;const se=D.source,Me=x.get(se);if(Me){const _e=Me[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&$(D),Object.keys(Me).length===0&&x.delete(se)}r.remove(D)}function $(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const se=D.source,Me=x.get(se);delete Me[E.__cacheKey],c.memory.textures--}function z(D){const E=r.get(D);E.__depthDisposeCallback&&E.__depthDisposeCallback();const se=D.depthTexture;if(se&&se.renderTarget===D&&Z(se),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ne=0;Ne<E.__webglFramebuffer[_e].length;Ne++)s.deleteFramebuffer(E.__webglFramebuffer[_e][Ne]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Me=D.textures;for(let _e=0,Ne=Me.length;_e<Ne;_e++){const Le=r.get(Me[_e]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),c.memory.textures--),r.remove(Me[_e])}r.remove(D)}let G=0;function X(){G=0}function I(){return G}function K(D){G=D}function me(){const D=G;return D>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+o.maxTextures),G+=1,D}function Q(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.mipmapsAutoUpdate),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function he(D,E){const se=r.get(D);if(D.isVideoTexture&&Ut(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&se.__version!==D.version){const Me=D.image;if(Me===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(se,D,E);return}}else D.isExternalTexture&&(se.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+E)}function Se(D,E){const se=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&se.__version!==D.version){St(se,D,E);return}else D.isExternalTexture&&(se.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+E)}function Te(D,E){const se=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&se.__version!==D.version){St(se,D,E);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+E)}function be(D,E){const se=r.get(D);if(D.version>0&&se.__version!==D.version){at(se,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+E)}const Ge={[hh]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[fh]:s.MIRRORED_REPEAT},ft={[On]:s.NEAREST,[Ly]:s.NEAREST_MIPMAP_NEAREST,[zl]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[wd]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},re={[Uy]:s.NEVER,[Fx]:s.ALWAYS,[Oy]:s.LESS,[Ix]:s.LEQUAL,[ky]:s.EQUAL,[Dx]:s.GEQUAL,[zy]:s.GREATER,[By]:s.NOTEQUAL};function je(D,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ni||E.magFilter===wd||E.magFilter===zl||E.magFilter===Yr||E.minFilter===ni||E.minFilter===wd||E.minFilter===zl||E.minFilter===Yr)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Ge[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Ge[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Ge[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ft[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ft[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==zl&&E.minFilter!==Yr||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function it(D,E){let se=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",W),j(E));const Me=E.source;let _e=x.get(Me);_e===void 0&&(_e={},x.set(Me,_e));const Ne=Q(E);if(Ne!==D.__cacheKey){_e[Ne]===void 0&&(_e[Ne]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,se=!0),_e[Ne].usedTimes++;const Le=_e[D.__cacheKey];Le!==void 0&&(_e[D.__cacheKey].usedTimes--,Le.usedTimes===0&&$(E)),D.__cacheKey=Ne,D.__webglTexture=_e[Ne].texture}return se}function lt(D,E,se){return Math.floor(Math.floor(D/se)/E)}function Ct(D,E,se,Me){const Ne=D.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,se,Me,E.data);else{Ne.sort((H,ye)=>H.start-ye.start);let Le=0;for(let H=1;H<Ne.length;H++){const ye=Ne[Le],pe=Ne[H],ke=ye.start+ye.count,Re=lt(pe.start,E.width,4),De=lt(ye.start,E.width,4);pe.start<=ke+1&&Re===De&&lt(pe.start+pe.count-1,E.width,4)===Re?ye.count=Math.max(ye.count,pe.start+pe.count-ye.start):(++Le,Ne[Le]=pe)}Ne.length=Le+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let H=0,ye=Ne.length;H<ye;H++){const pe=Ne[H],ke=Math.floor(pe.start/4),Re=Math.ceil(pe.count/4),De=ke%E.width,te=Math.floor(ke/E.width),Fe=Re,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,De),t.pixelStorei(s.UNPACK_SKIP_ROWS,te),t.texSubImage2D(s.TEXTURE_2D,0,De,te,Fe,ve,se,Me,E.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function St(D,E,se){let Me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Me=s.TEXTURE_3D);const _e=it(D,E),Ne=E.source;t.bindTexture(Me,D.__webglTexture,s.TEXTURE0+se);const Le=r.get(Ne);if(Ne.version!==Le.__version||_e===!0){if(t.activeTexture(s.TEXTURE0+se),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=It.getPrimaries(It.workingColorSpace),qe=E.colorSpace===$r?null:It.getPrimaries(E.colorSpace),ut=E.colorSpace===$r||ve===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=A(E.image,!1,o.maxTextureSize);xe=Ve(E,xe);const Ie=l.convert(E.format,E.colorSpace),H=l.convert(E.type);let ye=F(E.internalFormat,Ie,H,E.normalized,E.colorSpace,E.isVideoTexture);je(Me,E);let pe;const ke=E.mipmaps,Re=E.isVideoTexture!==!0,De=Le.__version===void 0||_e===!0,te=Ne.dataReady,Fe=P(E,xe);if(E.isDepthTexture)ye=M(E.format===Zr,E.type),De&&(Re?t.texStorage2D(s.TEXTURE_2D,1,ye,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,ye,xe.width,xe.height,0,Ie,H,null));else if(E.isDataTexture)if(ke.length>0){Re&&De&&t.texStorage2D(s.TEXTURE_2D,Fe,ye,ke[0].width,ke[0].height);for(let ve=0,qe=ke.length;ve<qe;ve++)pe=ke[ve],Re?te&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,pe.width,pe.height,Ie,H,pe.data):t.texImage2D(s.TEXTURE_2D,ve,ye,pe.width,pe.height,0,Ie,H,pe.data);E.generateMipmaps=!1}else Re?(De&&t.texStorage2D(s.TEXTURE_2D,Fe,ye,xe.width,xe.height),te&&Ct(E,xe,Ie,H)):t.texImage2D(s.TEXTURE_2D,0,ye,xe.width,xe.height,0,Ie,H,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Re&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ye,ke[0].width,ke[0].height,xe.depth);for(let ve=0,qe=ke.length;ve<qe;ve++)if(pe=ke[ve],E.format!==Ji)if(Ie!==null)if(Re){if(te)if(E.layerUpdates.size>0){const ut=Pg(pe.width,pe.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ye=pe.data.subarray(Pe*ut/pe.data.BYTES_PER_ELEMENT,(Pe+1)*ut/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Pe,pe.width,pe.height,1,Ie,Ye)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,xe.depth,Ie,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,ye,pe.width,pe.height,xe.depth,0,pe.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,xe.depth,Ie,H,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,ye,pe.width,pe.height,xe.depth,0,Ie,H,pe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Re&&De&&t.texStorage2D(s.TEXTURE_2D,Fe,ye,ke[0].width,ke[0].height);for(let ve=0,qe=ke.length;ve<qe;ve++)pe=ke[ve],E.format!==Ji?Ie!==null?Re?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,pe.width,pe.height,Ie,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,ye,pe.width,pe.height,0,pe.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?te&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,pe.width,pe.height,Ie,H,pe.data):t.texImage2D(s.TEXTURE_2D,ve,ye,pe.width,pe.height,0,Ie,H,pe.data)}else if(E.isDataArrayTexture)if(Re){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ye,xe.width,xe.height,xe.depth),te)if(E.layerUpdates.size>0){const ve=Pg(xe.width,xe.height,E.format,E.type);for(const qe of E.layerUpdates){const ut=xe.data.subarray(qe*ve/xe.data.BYTES_PER_ELEMENT,(qe+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,xe.width,xe.height,1,Ie,H,ut)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,H,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,xe.width,xe.height,xe.depth,0,Ie,H,xe.data);else if(E.isData3DTexture)Re?(De&&t.texStorage3D(s.TEXTURE_3D,Fe,ye,xe.width,xe.height,xe.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,H,xe.data)):t.texImage3D(s.TEXTURE_3D,0,ye,xe.width,xe.height,xe.depth,0,Ie,H,xe.data);else if(E.isFramebufferTexture){if(De)if(Re)t.texStorage2D(s.TEXTURE_2D,Fe,ye,xe.width,xe.height);else{let ve=xe.width,qe=xe.height;for(let ut=0;ut<Fe;ut++)t.texImage2D(s.TEXTURE_2D,ut,ye,ve,qe,0,Ie,H,null),ve>>=1,qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),S.add(E),ve.onpaint=qe=>{const ut=qe.changedElements;for(const Pe of S)ut.includes(Pe.image)&&(Pe.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const ut=s.RGBA,Pe=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,Pe,Ye,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Re&&De){const ve=ct(ke[0]);t.texStorage2D(s.TEXTURE_2D,Fe,ye,ve.width,ve.height)}for(let ve=0,qe=ke.length;ve<qe;ve++)pe=ke[ve],Re?te&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ie,H,pe):t.texImage2D(s.TEXTURE_2D,ve,ye,Ie,H,pe);E.generateMipmaps=!1}else if(Re){if(De){const ve=ct(xe);t.texStorage2D(s.TEXTURE_2D,Fe,ye,ve.width,ve.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,H,xe)}else t.texImage2D(s.TEXTURE_2D,0,ye,Ie,H,xe);U(E)&&E.mipmapsAutoUpdate===!0&&N(Me),Le.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function at(D,E,se){if(E.image.length!==6)return;const Me=it(D,E),_e=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+se);const Ne=r.get(_e);if(_e.version!==Ne.__version||Me===!0){t.activeTexture(s.TEXTURE0+se);const Le=It.getPrimaries(It.workingColorSpace),ge=E.colorSpace===$r?null:It.getPrimaries(E.colorSpace),xe=E.colorSpace===$r||Le===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,H=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let Pe=0;Pe<6;Pe++)!Ie&&!H?ye[Pe]=A(E.image[Pe],!0,o.maxCubemapSize):ye[Pe]=H?E.image[Pe].image:E.image[Pe],ye[Pe]=Ve(E,ye[Pe]);const pe=ye[0],ke=l.convert(E.format,E.colorSpace),Re=l.convert(E.type);let De=F(E.internalFormat,ke,Re,E.normalized,E.colorSpace);const te=E.isVideoTexture!==!0,Fe=Ne.__version===void 0||Me===!0,ve=_e.dataReady;let qe=P(E,pe);je(s.TEXTURE_CUBE_MAP,E);let ut;if(E.isDepthTexture){if(De=M(E.format===Zr,E.type),Fe)if(te)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,De,pe.width,pe.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,De,pe.width,pe.height,0,ke,Re,null)}else if(Ie){te&&Fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,De,pe.width,pe.height);for(let Pe=0;Pe<6;Pe++){ut=ye[Pe].mipmaps;for(let Ye=0;Ye<ut.length;Ye++){const Ht=ut[Ye];E.format!==Ji?ke!==null?te?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye,0,0,Ht.width,Ht.height,ke,Ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye,De,Ht.width,Ht.height,0,Ht.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye,0,0,Ht.width,Ht.height,ke,Re,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye,De,Ht.width,Ht.height,0,ke,Re,Ht.data)}}}else{if(ut=E.mipmaps,te&&Fe){ut.length>0&&qe++;const Pe=ct(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,De,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(H){te?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ye[Pe].width,ye[Pe].height,ke,Re,ye[Pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,De,ye[Pe].width,ye[Pe].height,0,ke,Re,ye[Pe].data);for(let Ye=0;Ye<ut.length;Ye++){const In=ut[Ye].image[Pe].image;te?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye+1,0,0,In.width,In.height,ke,Re,In.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye+1,De,In.width,In.height,0,ke,Re,In.data)}}else{te?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ke,Re,ye[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,De,ke,Re,ye[Pe]);for(let Ye=0;Ye<ut.length;Ye++){const Ht=ut[Ye];te?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye+1,0,0,ke,Re,Ht.image[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ye+1,De,ke,Re,Ht.image[Pe])}}}U(E)&&E.mipmapsAutoUpdate===!0&&N(s.TEXTURE_CUBE_MAP),Ne.__version=_e.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Lt(D,E,se,Me,_e,Ne){const Le=l.convert(se.format,se.colorSpace),ge=l.convert(se.type),xe=F(se.internalFormat,Le,ge,se.normalized,se.colorSpace),Ie=r.get(E),H=r.get(se);if(H.__renderTarget=E,!Ie.__hasExternalTextures){const ye=Math.max(1,E.width>>Ne),pe=Math.max(1,E.height>>Ne);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ne,xe,ye,pe,E.depth,0,Le,ge,null):t.texImage2D(_e,Ne,xe,ye,pe,0,Le,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),we(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,_e,H.__webglTexture,0,pt(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,_e,H.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function an(D,E,se){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const Me=E.depthTexture,_e=Me&&Me.isDepthTexture?Me.type:null,Ne=M(E.stencilBuffer,_e),Le=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;we(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(E),Ne,E.width,E.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(E),Ne,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,D)}else{const Me=E.textures;for(let _e=0;_e<Me.length;_e++){const Ne=Me[_e],Le=l.convert(Ne.format,Ne.colorSpace),ge=l.convert(Ne.type),xe=F(Ne.internalFormat,Le,ge,Ne.normalized,Ne.colorSpace);we(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(E),xe,E.width,E.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(E),xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(D,E,se){const Me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=r.get(E.depthTexture);_e.__renderTarget=E;const Ne=Me?E.depthTexture.image[0]:E.depthTexture.image;(!_e.__webglTexture||Ne.width!==E.width||Ne.height!==E.height)&&(Ne.width=E.width,Ne.height=E.height,E.depthTexture.needsUpdate=!0),Me?be(E.depthTexture,0):he(E.depthTexture,0);const Le=_e.__webglTexture,ge=pt(E),xe=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+se:s.TEXTURE_2D,Ie=E.depthTexture.format===Zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Kr)we(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,xe,Le,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,xe,Le,0);else if(E.depthTexture.format===Zr)we(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,xe,Le,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,xe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(D){const E=r.get(D),se=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Me=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Me){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Me.removeEventListener("dispose",_e)};Me.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=Me}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(se)for(let Me=0;Me<6;Me++)wt(E.__webglFramebuffer[Me],D,Me);else D.texture.mipmaps.length>0?wt(E.__webglFramebuffer[0],D,0):wt(E.__webglFramebuffer,D,0);else if(se){E.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Me]),E.__webglDepthbuffer[Me]===void 0)E.__webglDepthbuffer[Me]=s.createRenderbuffer(),an(E.__webglDepthbuffer[Me],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Ne)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),an(E.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(D,E,se){const Me=r.get(D);E!==void 0&&Lt(Me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Nt(D)}function un(D){const E=D.texture,se=r.get(D),Me=r.get(E);D.addEventListener("dispose",V),j(D);const _e=D.textures,Ne=D.isWebGLCubeRenderTarget===!0,Le=_e.length>1;if(Le||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=E.version,c.memory.textures++),Ne){se.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps.length>0){se.__webglFramebuffer[ge]=[];for(let xe=0;xe<E.mipmaps.length;xe++)se.__webglFramebuffer[ge][xe]=s.createFramebuffer()}else se.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(E.mipmaps.length>0){se.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)se.__webglFramebuffer[ge]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Le)for(let ge=0,xe=_e.length;ge<xe;ge++){const Ie=r.get(_e[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&we(D)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ge=0;ge<_e.length;ge++){const xe=_e[ge];se.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[ge]);const Ie=l.convert(xe.format,xe.colorSpace),H=l.convert(xe.type),ye=F(xe.internalFormat,Ie,H,xe.normalized,xe.colorSpace,D.isXRRenderTarget===!0),pe=pt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,ye,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,se.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),an(se.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),je(s.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Lt(se.__webglFramebuffer[ge][xe],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Lt(se.__webglFramebuffer[ge],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);U(E)?N(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let ge=0,xe=_e.length;ge<xe;ge++){const Ie=_e[ge],H=r.get(Ie);let ye=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,H.__webglTexture),je(ye,Ie),Lt(se.__webglFramebuffer,D,Ie,s.COLOR_ATTACHMENT0+ge,ye,0),U(Ie)&&N(ye)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,Me.__webglTexture),je(ge,E),E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Lt(se.__webglFramebuffer[xe],D,E,s.COLOR_ATTACHMENT0,ge,xe);else Lt(se.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,ge,0);U(E)?N(ge):E.mipmaps.length>0&&s.texParameteri(ge,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&Nt(D)}function ee(D){const E=D.textures;for(let se=0,Me=E.length;se<Me;se++){const _e=E[se];if(U(_e)&&_e.mipmapsAutoUpdate===!0){const Ne=L(D),Le=r.get(_e).__webglTexture;t.bindTexture(Ne,Le),N(Ne),t.unbindTexture()}}}const Jt=[];function At(D){if(D.samples>0){if(we(D)===!1){const E=D.textures,se=D.width,Me=D.height;let _e=s.COLOR_BUFFER_BIT;const Ne=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(D),ge=E.length>1;if(ge)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const H=r.get(E[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,H,0)}s.blitFramebuffer(0,0,se,Me,0,0,se,Me,_e,s.NEAREST),f===!0&&(Jt.length=0,Jt.push(s.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Jt.push(Ne),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const H=r.get(E[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,H,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&f){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function pt(D){return Math.min(o.maxSamples,D.samples)}function we(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(D){const E=c.render.frame;v.get(D)!==E&&(v.set(D,E),D.update())}function Ve(D,E){const se=D.colorSpace,Me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||se!==wc&&se!==$r&&(It.getTransfer(se)===Vt?(Me!==Ji||_e!==bi)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",se)),E}function ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=me,this.resetTextureUnits=X,this.getTextureUnits=I,this.setTextureUnits=K,this.setTexture2D=he,this.setTexture2DArray=Se,this.setTexture3D=Te,this.setTextureCube=be,this.rebindTextures=Wt,this.setupRenderTarget=un,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=we,this.dispose=J}function EE(s,e){function t(r,o=$r){let l;const c=It.getTransfer(o);if(r===bi)return s.UNSIGNED_BYTE;if(r===Kh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Nx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Tx)return s.BYTE;if(r===Ax)return s.SHORT;if(r===Ca)return s.UNSIGNED_SHORT;if(r===Zh)return s.INT;if(r===tr)return s.UNSIGNED_INT;if(r===Qi)return s.FLOAT;if(r===nr)return s.HALF_FLOAT;if(r===Rx)return s.ALPHA;if(r===Px)return s.RGB;if(r===Ji)return s.RGBA;if(r===Kr)return s.DEPTH_COMPONENT;if(r===Zr)return s.DEPTH_STENCIL;if(r===Lx)return s.RED;if(r===Jh)return s.RED_INTEGER;if(r===Es)return s.RG;if(r===ef)return s.RG_INTEGER;if(r===tf)return s.RGBA_INTEGER;if(r===mc||r===gc||r===xc||r===vc)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===mc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===mc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===xh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ph)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vh||r===_h||r===yh||r===Sh||r===bh||r===bc||r===Mh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===vh||r===_h)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===yh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sh)return l.COMPRESSED_R11_EAC;if(r===bh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===bc)return l.COMPRESSED_RG11_EAC;if(r===Mh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===wh||r===Eh||r===Th||r===Ah||r===Ch||r===Nh||r===Rh||r===Ph||r===Lh||r===Ih||r===Dh||r===Fh||r===Uh||r===Oh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Th)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ch)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kh||r===zh||r===Bh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===kh)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gh||r===Hh||r===Mc||r===jh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Gh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new qx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ts({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new La(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends Qr{constructor(e,t){super();const r=this;let o=null,l=1,c=null,h="local-floor",f=1,p=null,v=null,S=null,y=null,x=null,w=null;const T=typeof XRWebGLBinding<"u",b=new CE,_={},A=t.getContextAttributes();let U=null,N=null;const L=[],F=[],M=new Dt;let P=null,j=null;const k=new Fi;k.viewport=new pn;const W=new Fi;W.viewport=new pn;const V=[k,W],Z=new zS;let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=L[Q];return he===void 0&&(he=new Pd,L[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=L[Q];return he===void 0&&(he=new Pd,L[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=L[Q];return he===void 0&&(he=new Pd,L[Q]=he),he.getHandSpace()};function ce(Q){const he=F.indexOf(Q.inputSource);if(he===-1)return;const Se=L[he];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,p||c),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",z);for(let Q=0;Q<L.length;Q++){const he=F[Q];he!==null&&(F[Q]=null,L[Q].disconnect(he))}O=null,J=null,b.reset();for(const Q in _)delete _[Q];if(e.setRenderTarget(U),x=null,y=null,S=null,o=null,N=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),j!==null){const Q=j.camera;Q.fov=j.fov,Q.zoom=j.zoom,Q.updateProjectionMatrix(),j=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return S===null&&T&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",$),o.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Te=null,be=null;A.depth&&(be=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?Zr:Kr,Te=A.stencil?yo:tr);const Ge={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};S=this.getBinding(),y=S.createProjectionLayer(Ge),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new er(y.textureWidth,y.textureHeight,{format:Ji,type:bi,depthTexture:new So(y.textureWidth,y.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}else{const Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new er(x.framebufferWidth,x.framebufferHeight,{format:Ji,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await o.requestReferenceSpace(h),me.setContext(o),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(Q){for(let he=0;he<Q.removed.length;he++){const Se=Q.removed[he],Te=F.indexOf(Se);Te>=0&&(F[Te]=null,L[Te].disconnect(Se))}for(let he=0;he<Q.added.length;he++){const Se=Q.added[he];let Te=F.indexOf(Se);if(Te===-1){for(let Ge=0;Ge<L.length;Ge++)if(Ge>=F.length){F.push(Se),Te=Ge;break}else if(F[Ge]===null){F[Ge]=Se,Te=Ge;break}if(Te===-1)break}const be=L[Te];be&&be.connect(Se)}}function G(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let he=Q.near,Se=Q.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(Se=b.depthFar)),Z.near=W.near=k.near=he,Z.far=W.far=k.far=Se,(O!==Z.near||J!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),O=Z.near,J=Z.far),Z.layers.mask=Q.layers.mask|6,k.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const Te=Q.parent,be=Z.cameras;G(Z,Te);for(let Ge=0;Ge<be.length;Ge++)G(be[Ge],Te);Z.projectionMatrix.copy(k.projectionMatrix),Z.projectionMatrixInverse.copy(k.projectionMatrixInverse),j===null&&Q.isPerspectiveCamera&&(j={camera:Q,fov:Q.fov,zoom:Q.zoom}),X(Q,Z,Te)};function X(Q,he,Se){Se===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Na*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&x===null))return f},this.setFoveation=function(Q){f=Q,y!==null&&(y.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(Q){return _[Q]};let I=null;function K(Q,he){if(v=he.getViewerPose(p||c),w=he,v!==null){const Se=v.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let Te=!1;Se.length!==Z.cameras.length&&(Z.cameras.length=0,Te=!0);for(let re=0;re<Se.length;re++){const je=Se[re];let it=null;if(x!==null)it=x.getViewport(je);else{const Ct=S.getViewSubImage(y,je);it=Ct.viewport,re===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(N))}let lt=V[re];lt===void 0&&(lt=new Fi,lt.layers.enable(re),lt.viewport=new pn,V[re]=lt),lt.matrix.fromArray(je.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(je.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(it.x,it.y,it.width,it.height),re===0&&(Z.matrix.copy(lt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Te===!0&&Z.cameras.push(lt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){S=r.getBinding();const re=S.getDepthInformation(Se[0]);re&&re.isValid&&re.texture&&b.init(re,o.renderState)}if(be&&be.includes("camera-access")&&T){e.state.unbindTexture(),S=r.getBinding();for(let re=0;re<Se.length;re++){const je=Se[re].camera;if(je){let it=_[je];it||(it=new qx,_[je]=it);const lt=S.getCameraImage(je);it.sourceTexture=lt}}}}for(let Se=0;Se<L.length;Se++){const Te=F[Se],be=L[Se];Te!==null&&be!==void 0&&be.update(Te,he,p||c)}I&&I(Q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const me=new Zx;me.setAnimationLoop(K),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const RE=new Qt,o0=new vt;o0.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function t(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function r(b,_){_.color.getRGB(b.fogColor.value,$x(s)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function o(b,_,A,U,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(b,_):_.isMeshLambertMaterial?(l(b,_),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(b,_),S(b,_)):_.isMeshPhongMaterial?(l(b,_),v(b,_),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(b,_),y(b,_),_.isMeshPhysicalMaterial&&x(b,_,N)):_.isMeshMatcapMaterial?(l(b,_),w(b,_)):_.isMeshDepthMaterial?l(b,_):_.isMeshDistanceMaterial?(l(b,_),T(b,_)):_.isMeshNormalMaterial?l(b,_):_.isLineBasicMaterial?(c(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?f(b,_,A,U):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,t(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,t(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,t(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===ii&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,t(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===ii&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,t(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,t(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const A=e.get(_),U=A.envMap,N=A.envMapRotation;U&&(b.envMap.value=U,b.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(N)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(o0),b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,b.aoMapTransform))}function c(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,t(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function f(b,_,A,U){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*A,b.scale.value=U*.5,_.map&&(b.map.value=_.map,t(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,t(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,t(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,t(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function v(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function S(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function y(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function x(b,_,A){b.ior.value=_.ior,_.diffuseRoughness>0&&(b.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(b.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,b.diffuseRoughnessMapTransform))),_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ii&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.retroreflectivity>0&&(b.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,b.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=A.texture,b.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,_){_.matcap&&(b.matcap.value=_.matcap)}function T(b,_){const A=e.get(_).light;b.referencePosition.value.setFromMatrixPosition(A.matrixWorld),b.nearDistance.value=A.shadow.camera.near,b.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,t,r){let o={},l={};function c(A,U){const N=U.program;r.uniformBlockBinding(A,N,o[A.id])}function h(A,U){let N=o[A.id];N===void 0&&(w(A),N=f(A),o[A.id]=N,A.addEventListener("dispose",b));const L=U.program;r.updateUBOMapping(A,L);const F=e.render.frame;l[A.id]!==F&&(p(A),l[A.id]=F)}function f(A){const U=s.createBuffer(),N=A.__size,L=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,N,L),s.bindBuffer(s.UNIFORM_BUFFER,null),U}function p(A){const U=o[A.id],N=A.uniforms,L=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,M=N.length;F<M;F++){const P=N[F];if(Array.isArray(P))for(let j=0,k=P.length;j<k;j++)v(P[j],F,j,L);else v(P,F,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(A,U,N,L){if(y(A,U,N,L)===!0){const F=A.__offset,M=A.value;if(Array.isArray(M)){let P=0;for(let j=0;j<M.length;j++){const k=M[j],W=T(k,!0);S(k,A.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else S(M,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,F,A.__data)}}function S(A,U,N){typeof A=="number"||typeof A=="boolean"?U[N]=A:A.isMatrix3?(U[N]=A.elements[0],U[N+1]=A.elements[1],U[N+2]=A.elements[2],U[N+3]=0,U[N+4]=A.elements[3],U[N+5]=A.elements[4],U[N+6]=A.elements[5],U[N+7]=0,U[N+8]=A.elements[6],U[N+9]=A.elements[7],U[N+10]=A.elements[8],U[N+11]=0):ArrayBuffer.isView(A)?U.set(A.subarray(0,U.length-N),N):A.toArray(U,N)}function y(A,U,N,L){const F=A.value,M=U+"_"+N;if(Array.isArray(F)){L[M]===void 0&&(L[M]=[]);const P=L[M];let j=!1;for(let k=0;k<F.length;k++)x(F[k],P,k)===!0&&(j=!0);return j}return x(F,L,M)}function x(A,U,N){if(U[N]===void 0)return typeof A=="number"||typeof A=="boolean"?U[N]=A:ArrayBuffer.isView(A)?U[N]=A.slice():U[N]=A.clone(),!0;{const L=U[N];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return U[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(L.equals(A)===!1)return L.copy(A),!0}}return!1}function w(A){const U=A.uniforms;let N=0;const L=16;for(let M=0,P=U.length;M<P;M++){const j=Array.isArray(U[M])?U[M]:[U[M]];for(let k=0,W=j.length;k<W;k++){const V=j[k],Z=Array.isArray(V.value)?V.value:[V.value],O=Array.isArray(U[M])||Array.isArray(V.value);let J=N;for(let $=0,z=Z.length;$<z;$++){const G=Z[$],X=T(G,O),I=N%L,K=I%X.boundary,me=I+K;N+=K,me!==0&&L-me<X.storage&&(N+=L-me),$===0&&(J=N),N+=X.storage}const ce=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new ce((N-J)/Float32Array.BYTES_PER_ELEMENT),V.__offset=J}}const F=N%L;return F>0&&(N+=L-F),A.__size=N,A.__cache={},this}function T(A,U){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=16,N.storage=48):A.isMatrix4?(N.boundary=16,N.storage=64):A.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(N.boundary=16,N.storage=A.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",A),U===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function b(A){const U=A.target;U.removeEventListener("dispose",b),s.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function _(){for(const A in o)s.deleteBuffer(o[A]);o={},l={}}return{bind:c,update:h,dispose:_}}const IE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function DE(){return $i===null&&($i=new NS(IE,16,16,Es,nr),$i.name="DFG_LUT",$i.minFilter=ni,$i.magFilter=ni,$i.wrapS=vr,$i.wrapT=vr,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class FE{constructor(e={}){const{canvas:t=jy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:y=!1,outputBufferType:x=bi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const T=x,b=new Set([tf,ef,Jh]),_=new Set([bi,tr,Ca,yo,Kh,Qh]),A=new Uint32Array(4),U=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let L=null,F=null;const M=[],P=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let W=!1,V=null,Z=null,O=null,J=null;this._outputColorSpace=_i;let ce=0,$=0,z=null,G=-1,X=null;const I=new pn,K=new pn;let me=null;const Q=new Gt(0);let he=0,Se=t.width,Te=t.height,be=1,Ge=null,ft=null;const re=new pn(0,0,Se,Te),je=new pn(0,0,Se,Te);let it=!1;const lt=new Cc,Ct=new cf;let St=!1,at=!1;const Lt=new Qt,an=new ne,wt=new pn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function un(){return z===null?be:1}let ee=r;function Jt(R,q){return t.getContext(R,q)}let At,pt,we,Ut,Ve,ct,D,E,se,Me,_e,Ne,Le,ge,xe,Ie,H,ye,pe,ke,Re,De,te;try{const R={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),ee===null){const q="webgl2";if(ee=Jt(q,R),ee===null)throw Jt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(R){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),zt("WebGLRenderer: "+R.message),R}function Fe(){At=new kM(ee),At.init(),Re=new EE(ee,At),pt=new AM(ee,At,e,Re),we=new ME(ee,At),pt.reversedDepthBuffer&&y&&we.buffers.depth.setReversed(!0),Z=ee.createFramebuffer(),O=ee.createFramebuffer(),J=ee.createFramebuffer(),Ut=new GM(ee),Ve=new cE,ct=new wE(ee,At,we,Ve,pt,Re,Ut),D=new OM(k),E=new jS(ee),De=new EM(ee,E),se=new zM(ee,E,Ut,De),Me=new jM(ee,se,E,De,Ut),ye=new HM(ee,pt,ct),xe=new CM(Ve),_e=new lE(k,D,At,pt,De,xe),Ne=new PE(k,Ve),Le=new dE,ge=new xE(At),H=new wM(k,D,we,Me,w,f),Ie=new bE(k,Me,pt),te=new LE(ee,Ut,pt,we),pe=new TM(ee,At,Ut),ke=new BM(ee,At,Ut),Ut.programs=_e.programs,k.capabilities=pt,k.extensions=At,k.properties=Ve,k.renderLists=Le,k.shadowMap=Ie,k.state=we,k.info=Ut}T!==bi&&(j=new WM(T,t.width,t.height,h,o,l));const ve=new NE(k,ee);this.xr=ve,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(R){R!==void 0&&(be=R,this.setSize(Se,Te,!1))},this.getSize=function(R){return R.set(Se,Te)},this.setSize=function(R,q,ue=!0){if(ve.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=R,Te=q,t.width=Math.floor(R*be),t.height=Math.floor(q*be),ue===!0&&(t.style.width=R+"px",t.style.height=q+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Se*be,Te*be).floor()},this.setDrawingBufferSize=function(R,q,ue){Se=R,Te=q,be=ue,t.width=Math.floor(R*ue),t.height=Math.floor(q*ue),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===bi){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,q,ue,ae){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,q,ue,ae),we.viewport(I.copy(re).multiplyScalar(un()).round())},this.getScissor=function(R){return R.copy(je)},this.setScissor=function(R,q,ue,ae){R.isVector4?je.set(R.x,R.y,R.z,R.w):je.set(R,q,ue,ae),we.scissor(K.copy(je).multiplyScalar(un()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(R){we.setScissorTest(it=R)},this.setOpaqueSort=function(R){Ge=R},this.setTransparentSort=function(R){ft=R},this.getClearColor=function(R){return R.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ue=!0){let ae=0;if(R){let oe=!1;if(z!==null){const Be=z.texture.format;oe=b.has(Be)}if(oe){const Be=z.texture.type,Ze=_.has(Be),ze=H.getClearColor(),He=H.getClearAlpha(),Je=ze.r,mt=ze.g,yt=ze.b;Ze?(A[0]=Je,A[1]=mt,A[2]=yt,A[3]=He,ee.clearBufferuiv(ee.COLOR,0,A)):(U[0]=Je,U[1]=mt,U[2]=yt,U[3]=He,ee.clearBufferiv(ee.COLOR,0,U))}else ae|=ee.COLOR_BUFFER_BIT}q&&(ae|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&ee.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),V=R},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),H.dispose(),Le.dispose(),ge.dispose(),ct.dispose(),Ve.dispose(),D.dispose(),Me.dispose(),se.dispose(),De.dispose(),te.dispose(),_e.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Da),ve.removeEventListener("sessionend",zi),Bi.stop()};function qe(R){R.preventDefault(),ag("WebGLRenderer: Context Lost."),W=!0}function ut(){ag("WebGLRenderer: Context Restored."),W=!1;const R=Ut.autoReset,q=Ie.enabled,ue=Ie.autoUpdate,ae=Ie.needsUpdate,oe=Ie.type;Fe(),Ut.autoReset=R,Ie.enabled=q,Ie.autoUpdate=ue,Ie.needsUpdate=ae,Ie.type=oe}function Pe(R){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ye(R){const q=R.target;q.removeEventListener("dispose",Ye),Ht(q)}function Ht(R){In(R),Ve.remove(R)}function In(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(ue){_e.releaseProgram(ue)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ue,ae,oe,Be){q===null&&(q=Nt);const Ze=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,ze=No(R,q,ue,ae,oe);we.setMaterial(ae,Ze);let He=ue.index,Je=1;if(ae.wireframe===!0){if(He=se.getWireframeAttribute(ue),He===void 0)return;Je=2}const mt=ue.drawRange,yt=ue.attributes.position;let et=mt.start*Je,Et=(mt.start+mt.count)*Je;Be!==null&&(et=Math.max(et,Be.start*Je),Et=Math.min(Et,(Be.start+Be.count)*Je)),He!==null?(et=Math.max(et,0),Et=Math.min(Et,He.count)):yt!=null&&(et=Math.max(et,0),Et=Math.min(Et,yt.count));const tn=Et-et;if(tn<0||tn===1/0)return;De.setup(oe,ae,ze,ue,He);let jt,Bt=pe;if(He!==null&&(jt=E.get(He),Bt=ke,Bt.setIndex(jt)),oe.isMesh)ae.wireframe===!0?(we.setLineWidth(ae.wireframeLinewidth*un()),Bt.setMode(ee.LINES)):Bt.setMode(ee.TRIANGLES);else if(oe.isLine){let dn=ae.linewidth;dn===void 0&&(dn=1),we.setLineWidth(dn*un()),oe.isLineSegments?Bt.setMode(ee.LINES):oe.isLineLoop?Bt.setMode(ee.LINE_LOOP):Bt.setMode(ee.LINE_STRIP)}else oe.isPoints?Bt.setMode(ee.POINTS):oe.isSprite&&Bt.setMode(ee.TRIANGLES);if(oe.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Bt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const dn=oe._multiDrawStarts,tt=oe._multiDrawCounts,Sn=oe._multiDrawCount,st=He?E.get(He).bytesPerElement:1,Gi=Ve.get(ae).currentProgram.getUniforms();for(let bn=0;bn<Sn;bn++)Gi.setValue(ee,"_gl_DrawID",bn),Bt.render(dn[bn]/st,tt[bn])}else if(oe.isInstancedMesh)Bt.renderInstances(et,tn,oe.count);else if(ue.isInstancedBufferGeometry){const dn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,tt=Math.min(ue.instanceCount,dn);Bt.renderInstances(et,tn,tt)}else Bt.render(et,tn)};function wi(R,q,ue,ae){V!==null&&R.isNodeMaterial&&V.setObject(ae,R),St===!0&&xe.setState(R,ue,!1),R.transparent===!0&&R.side===Ki&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,ts(R,q,ae),R.side=ws,R.needsUpdate=!0,ts(R,q,ae),R.side=Ki):ts(R,q,ae)}this.compile=function(R,q,ue=null){ue===null&&(ue=R),V!==null&&V.renderStart(R,q,ue),F=ge.get(ue),F.init(q),P.push(F),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(F.pushLight(oe),oe.castShadow&&F.pushShadow(oe))}),R!==ue&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(F.pushLight(oe),oe.castShadow&&F.pushShadow(oe))}),F.setupLights(),V!==null&&V.updateLights(F.state.lightsArray),at=this.localClippingEnabled,St=xe.init(this.clippingPlanes,at),St===!0&&xe.setGlobalState(this.clippingPlanes,q),V!==null&&Ie.render(F.state.shadowsArray,ue,q);const ae=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Be=oe.material;if(Be)if(Array.isArray(Be))for(let Ze=0;Ze<Be.length;Ze++){const ze=Be[Ze];wi(ze,ue,q,oe),ae.add(ze)}else wi(Be,ue,q,oe),ae.add(Be)}),F=P.pop(),V!==null&&V.renderEnd(),ae},this.compileAsync=function(R,q,ue=null){const ae=this.compile(R,q,ue);return new Promise(oe=>{function Be(){if(ae.forEach(function(Ze){const He=Ve.get(Ze).currentProgram;(He===void 0||He.isReady())&&ae.delete(Ze)}),ae.size===0){oe(R);return}setTimeout(Be,10)}At.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Jr=null;function si(R){Jr&&Jr(R)}function Da(){Bi.stop()}function zi(){Bi.start()}const Bi=new Zx;Bi.setAnimationLoop(si),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){Jr=R,ve.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},ve.addEventListener("sessionstart",Da),ve.addEventListener("sessionend",zi),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;V!==null&&V.renderStart(R,q);const ue=ve.enabled===!0&&ve.isPresenting===!0,ae=j!==null&&(z===null||ue)&&j.begin(k,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(q),q=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,q,z),F=ge.get(R,P.length),F.init(q),F.state.textureUnits=ct.getTextureUnits(),P.push(F),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?Ct.setFromArrayCamera(q):lt.setFromProjectionMatrix(Lt,ki,q.reversedDepth),at=this.localClippingEnabled,St=xe.init(this.clippingPlanes,at),L=Le.get(R,M.length),L.init(),M.push(L),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){const Ze=k.xr.getDepthSensingMesh();Ze!==null&&As(Ze,q,-1/0,k.sortObjects)}As(R,q,0,k.sortObjects),L.finish(),V!==null&&V.updateLights(F.state.lightsArray),k.sortObjects===!0&&L.sort(Ge,ft),Wt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Wt&&H.addToRenderList(L,R),this.info.autoReset===!0&&this.info.reset(),St===!0&&xe.beginShadows();const oe=F.state.shadowsArray;if(Ie.render(oe,R,q),St===!0&&xe.endShadows(),(ae&&j.hasRenderPass())===!1){const Ze=L.opaque,ze=L.transmissive;if(F.setupLights(),q.isArrayCamera){const He=q.cameras;if(ze.length>0)for(let Je=0,mt=He.length;Je<mt;Je++){const yt=He[Je];To(Ze,ze,R,yt)}Wt&&H.render(R);for(let Je=0,mt=He.length;Je<mt;Je++){const yt=He[Je];Fa(L,R,yt,yt.viewport)}}else ze.length>0&&To(Ze,ze,R,q),Wt&&H.render(R),Fa(L,R,q)}z!==null&&$===0&&(ct.updateMultisampleRenderTarget(z),ct.updateRenderTargetMipmap(z)),ae&&j.end(k),R.isScene===!0&&R.onAfterRender(k,R,q),De.resetDefaultState(),G=-1,X=null,P.pop(),P.length>0?(F=P[P.length-1],ct.setTextureUnits(F.state.textureUnits),St===!0&&xe.setGlobalState(k.clippingPlanes,F.state.camera)):F=null,M.pop(),M.length>0?L=M[M.length-1]:L=null,V!==null&&V.renderEnd()};function As(R,q,ue,ae){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){const Ze=q.isArrayCamera?Ct:lt;if(!R.frustumCulled||R.intersectsFrustum(Ze)){ae&&wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Lt);const ze=Me.update(R),He=R.material;He.visible&&L.push(R,ze,He,ue,wt.z,null,q)}}else if(R.isMesh||R.isLine||R.isPoints){const Ze=q.isArrayCamera?Ct:lt;if(!R.frustumCulled||R.intersectsFrustum(Ze)){const ze=Me.update(R),He=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),wt.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),wt.copy(ze.boundingSphere.center)),wt.applyMatrix4(R.matrixWorld).applyMatrix4(Lt)),Array.isArray(He)){const Je=ze.groups;for(let mt=0,yt=Je.length;mt<yt;mt++){const et=Je[mt],Et=He[et.materialIndex];Et&&Et.visible&&L.push(R,ze,Et,ue,wt.z,et,q)}}else He.visible&&L.push(R,ze,He,ue,wt.z,null,q)}}}const Be=R.children;for(let Ze=0,ze=Be.length;Ze<ze;Ze++)As(Be[Ze],q,ue,ae)}function Fa(R,q,ue,ae){const{opaque:oe,transmissive:Be,transparent:Ze}=R;F.setupLightsView(ue),St===!0&&xe.setGlobalState(k.clippingPlanes,ue),ae&&we.viewport(I.copy(ae)),oe.length>0&&es(oe,q,ue),Be.length>0&&es(Be,q,ue),Ze.length>0&&es(Ze,q,ue),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function To(R,q,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ae.id]===void 0){const et=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ae.id]=new er(1,1,{generateMipmaps:!0,type:et?nr:bi,minFilter:Yr,samples:Math.max(4,pt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Be=F.state.transmissionRenderTarget[ae.id],Ze=ae.viewport||I;Be.setSize(Ze.z*k.transmissionResolutionScale,Ze.w*k.transmissionResolutionScale);const ze=k.getRenderTarget(),He=k.getActiveCubeFace(),Je=k.getActiveMipmapLevel();k.setRenderTarget(Be),k.getClearColor(Q),he=k.getClearAlpha(),he<1&&k.setClearColor(16777215,.5),k.clear(),Wt&&H.render(ue);const mt=k.toneMapping;k.toneMapping=_r;const yt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),F.setupLightsView(ae),St===!0&&xe.setGlobalState(k.clippingPlanes,ae),es(R,ue,ae),ct.updateMultisampleRenderTarget(Be),ct.updateRenderTargetMipmap(Be),At.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Et=0,tn=q.length;Et<tn;Et++){const jt=q[Et],{object:Bt,geometry:dn,material:tt,group:Sn}=jt;if(tt.side===Ki&&Bt.layers.test(ae.layers)){const st=tt.side;tt.side=ii,tt.needsUpdate=!0,Ao(Bt,ue,ae,dn,tt,Sn),tt.side=st,tt.needsUpdate=!0,et=!0}}et===!0&&(ct.updateMultisampleRenderTarget(Be),ct.updateRenderTargetMipmap(Be))}k.setRenderTarget(ze,He,Je),k.setClearColor(Q,he),yt!==void 0&&(ae.viewport=yt),k.toneMapping=mt}function es(R,q,ue){const ae=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,Be=R.length;oe<Be;oe++){const Ze=R[oe],{object:ze,geometry:He,group:Je}=Ze;let mt=Ze.material;mt.allowOverride===!0&&ae!==null&&(mt=ae),ze.layers.test(ue.layers)&&Ao(ze,q,ue,He,mt,Je)}}function Ao(R,q,ue,ae,oe,Be){V!==null&&oe.isNodeMaterial&&V.setObject(R,oe),R.onBeforeRender(k,q,ue,ae,oe,Be),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(k,q,ue,ae,R,Be),oe.transparent===!0&&oe.side===Ki&&oe.forceSinglePass===!1?(oe.side=ii,oe.needsUpdate=!0,k.renderBufferDirect(ue,q,ae,oe,R,Be),oe.side=ws,oe.needsUpdate=!0,k.renderBufferDirect(ue,q,ae,oe,R,Be),oe.side=Ki):k.renderBufferDirect(ue,q,ae,oe,R,Be),R.onAfterRender(k,q,ue,ae,oe,Be)}function Co(R){let q=0;for(const ue of R)ue.texture!==null&&q++;return q}function ts(R,q,ue){q.isScene!==!0&&(q=Nt);const ae=Ve.get(R),oe=F.state.lights,Be=F.state.shadowsArray,Ze=oe.state.version,ze=_e.getParameters(R,oe.state,Be,q,ue,F.state.lightProbeGridArray),He=_e.getProgramCacheKey(ze);let Je=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ae.fog=q.fog;const mt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=D.get(R.envMap||ae.environment,mt),ae.envMapRotation=ae.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",Ye),Je=new Map,ae.programs=Je,ae.programVariants=new Map);let yt=Je.get(He);if(yt!==void 0){if(ae.currentProgram===yt&&ae.lightsStateVersion===Ze)return Ua(R,ze),yt}else ze.uniforms=_e.getUniforms(R),V!==null&&R.isNodeMaterial&&V.build(R,ue,ze),R.onBeforeCompile(ze,k),yt=_e.acquireProgram(ze,He),Je.set(He,yt),ae.uniforms=ze.uniforms;const et=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=xe.uniform),Ua(R,ze),ae.needsLights=Cs(R),ae.lightsStateVersion=Ze,ae.needsLights&&(et.ambientLightColor.value=oe.state.ambient,et.lightProbe.value=oe.state.probe,et.sunLights.value=oe.state.sun,et.sunLightShadows.value=oe.state.sunShadow,et.directionalLights.value=oe.state.directional,et.directionalLightShadows.value=oe.state.directionalShadow,et.spotLights.value=oe.state.spot,et.spotLightShadows.value=oe.state.spotShadow,et.rectAreaLights.value=oe.state.rectArea,et.ltc_1.value=oe.state.rectAreaLTC1,et.ltc_2.value=oe.state.rectAreaLTC2,et.pointLights.value=oe.state.point,et.pointLightShadows.value=oe.state.pointShadow,et.hemisphereLights.value=oe.state.hemi,et.sunShadowMatrix.value=oe.state.sunShadowMatrix,et.sunShadowCascade.value=oe.state.sunShadowCascade,et.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,et.spotLightMatrix.value=oe.state.spotLightMatrix,et.spotLightMap.value=oe.state.spotLightMap,et.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.numLightProbeGrids=Co(F.state.lightProbeGridArray),ae.currentProgram=yt,ae.uniformsList=null,yt}function zc(R,q,ue,ae,oe){const Be=Ve.get(R),Ze=Be.currentProgram.id+","+ae+","+oe;let ze=Be.programVariants.get(Ze);return ze===void 0?(ze=ts(R,q,ue),Be.programVariants.set(Ze,ze)):(Be.currentProgram=ze,Be.uniformsList=null,Be.outputColorSpace=ae,Be.toneMapping=oe),ze}function en(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=yc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ua(R,q){const ue=Ve.get(R);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function No(R,q,ue,ae,oe){q.isScene!==!0&&(q=Nt),ct.resetTextureUnits();const Be=q.fog,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?q.environment:null,ze=z===null?k.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:It.workingColorSpace,He=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=D.get(ae.envMap||Ze,He),mt=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,yt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,tn=!!ue.morphAttributes.color;let jt=_r;ae.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(jt=k.toneMapping);const Bt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,dn=Bt!==void 0?Bt.length:0,tt=Ve.get(ae),Sn=F.state.lights;if(St===!0&&(at===!0||R!==X)){const Ot=R===X&&ae.id===G;xe.setState(ae,R,Ot)}let st=!1,Gi=!1;ae.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==Sn.state.version||oe.isBatchedMesh&&tt.batching===!1||!oe.isBatchedMesh&&tt.batching===!0||oe.isBatchedMesh&&tt.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&tt.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&tt.instancing===!1||!oe.isInstancedMesh&&tt.instancing===!0||oe.isSkinnedMesh&&tt.skinning===!1||!oe.isSkinnedMesh&&tt.skinning===!0||oe.isInstancedMesh&&tt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&tt.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&tt.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&tt.instancingMorph===!1&&oe.morphTexture!==null||tt.envMap!==Je||ae.fog===!0&&tt.fog!==Be||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==mt||tt.vertexTangents!==yt||tt.morphTargets!==et||tt.morphNormals!==Et||tt.morphColors!==tn||tt.morphTargetsCount!==dn||tt.numLightProbeGrids!==Co(F.state.lightProbeGridArray)?st=!0:(tt.outputColorSpace!==ze||tt.toneMapping!==jt)&&(Gi=!0):(st=!0,tt.__version=ae.version);let bn=tt.currentProgram;(st===!0||Gi===!0)&&(bn=Gi===!0?zc(ae,q,oe,ze,jt):ts(ae,q,oe),V&&ae.isNodeMaterial&&V.onUpdateProgram(ae,bn,tt));let Sr=!1,Ei=!1,Hi=!1;const Rt=bn.getUniforms(),mn=tt.uniforms;if(we.useProgram(bn.program)&&(Sr=!0,Ei=!0,Hi=!0),ae.id!==G&&(G=ae.id,Ei=!0),Sr||X!==R){we.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(ee,"projectionMatrix",R.projectionMatrix),Rt.setValue(ee,"viewMatrix",R.matrixWorldInverse);const Xt=Rt.map.cameraPosition;Xt!==void 0&&Xt.setValue(ee,an.setFromMatrixPosition(R.matrixWorld)),pt.logarithmicDepthBuffer&&Rt.setValue(ee,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Rt.setValue(ee,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,Ei=!0,Hi=!0)}if(tt.needsLights&&(Sn.state.sunShadowMap.length>0&&Rt.setValue(ee,"sunShadowMap",Sn.state.sunShadowMap,ct),Sn.state.directionalShadowMap.length>0&&Rt.setValue(ee,"directionalShadowMap",Sn.state.directionalShadowMap,ct),Sn.state.spotShadowMap.length>0&&Rt.setValue(ee,"spotShadowMap",Sn.state.spotShadowMap,ct),Sn.state.pointShadowMap.length>0&&Rt.setValue(ee,"pointShadowMap",Sn.state.pointShadowMap,ct)),oe.isSkinnedMesh){Rt.setOptional(ee,oe,"bindMatrix"),Rt.setOptional(ee,oe,"bindMatrixInverse");const Ot=oe.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Rt.setValue(ee,"boneTexture",Ot.boneTexture,ct))}oe.isBatchedMesh&&(Rt.setOptional(ee,oe,"batchingTexture"),Rt.setValue(ee,"batchingTexture",oe._matricesTexture,ct),Rt.setOptional(ee,oe,"batchingIdTexture"),Rt.setValue(ee,"batchingIdTexture",oe._indirectTexture,ct),Rt.setOptional(ee,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Rt.setValue(ee,"batchingColorTexture",oe._colorsTexture,ct));const kn=ue.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&ye.update(oe,ue,bn),(Ei||tt.receiveShadow!==oe.receiveShadow)&&(tt.receiveShadow=oe.receiveShadow,Rt.setValue(ee,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=DE()),Ei){if(Rt.setValue(ee,"toneMappingExposure",k.toneMappingExposure),tt.needsLights&&Oa(mn,Hi),Be&&ae.fog===!0&&Ne.refreshFogUniforms(mn,Be),Ne.refreshMaterialUniforms(mn,ae,be,Te,F.state.transmissionRenderTarget[R.id]),tt.needsLights&&tt.numLightProbeGrids>0){const Ot=N;let Xt=0;for(const An of F.state.lightProbeGridArray)An.texture!==null&&(Ot.textures[Xt]=An.texture,Ot.min[Xt]=An.boundingBox.min,Ot.max[Xt]=An.boundingBox.max,Ot.resolution[Xt]=An.resolution,Xt++);for(const An in Ot)Ot[An].length=Xt;mn.probesSH.value=Ot.textures,mn.probesMin.value=Ot.min,mn.probesMax.value=Ot.max,mn.probesResolution.value=Ot.resolution}yc.upload(ee,en(tt),mn,ct)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(yc.upload(ee,en(tt),mn,ct),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Rt.setValue(ee,"center",oe.center),Rt.setValue(ee,"modelViewMatrix",oe.modelViewMatrix),Rt.setValue(ee,"normalMatrix",oe.normalMatrix),Rt.setValue(ee,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const Ot=ae.uniformsGroups;for(let Xt=0,An=Ot.length;Xt<An;Xt++){const br=Ot[Xt];te.update(br,bn),te.bind(br,bn)}}return bn}function Oa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.sunLights.needsUpdate=q,R.sunLightShadows.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Cs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,q,ue){const ae=Ve.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ue=Ve.get(R);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ue=0){z=R,ce=q,$=ue;let ae=null,oe=!1,Be=!1;if(R){const ze=Ve.get(R);if(ze.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(ee.FRAMEBUFFER,ze.__webglFramebuffer),I.copy(R.viewport),K.copy(R.scissor),me=R.scissorTest,we.viewport(I),we.scissor(K),we.setScissorTest(me),G=-1;return}else if(ze.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(ze.__hasExternalTextures)ct.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const mt=R.depthTexture;if(ze.__boundDepthTexture!==mt){if(mt!==null&&Ve.has(mt)&&(R.width!==mt.image.width||R.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Be=!0);const Je=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ae=Je[q][ue]:ae=Je[q],oe=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?ae=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[ue]:ae=Je,I.copy(R.viewport),K.copy(R.scissor),me=R.scissorTest}else I.copy(re).multiplyScalar(be).floor(),K.copy(je).multiplyScalar(be).floor(),me=it;if(ue!==0&&(ae=Z),we.bindFramebuffer(ee.FRAMEBUFFER,ae)&&we.drawBuffers(R,ae),we.viewport(I),we.scissor(K),we.setScissorTest(me),oe){const ze=Ve.get(R.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,ue)}else if(Be){const ze=q;for(let He=0;He<R.textures.length;He++){const Je=Ve.get(R.textures[He]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+He,Je.__webglTexture,ue,ze)}}else if(R!==null&&ue!==0){const ze=Ve.get(R.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,ze.__webglTexture,ue)}G=-1};function ka(R){const q=Ve.get(R);return(q.__readFormat!==R.format||q.__readType!==R.type)&&(q.__readFormat=R.format,q.__readType=R.type,q.__formatReadable=pt.textureFormatReadable(R.format),q.__typeReadable=pt.textureTypeReadable(R.type)),q}this.readRenderTargetPixels=function(R,q,ue,ae,oe,Be,Ze,ze=0){if(!(R&&R.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(He=He[Ze],Array.isArray(He)&&(He=He[0])),He){we.bindFramebuffer(ee.FRAMEBUFFER,He);try{const Je=R.textures[ze],mt=Je.format,yt=Je.type;R.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+ze);const et=ka(Je);if(et.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ae&&ue>=0&&ue<=R.height-oe&&ee.readPixels(q,ue,ae,oe,Re.convert(mt),Re.convert(yt),Be)}finally{const Je=z!==null?Ve.get(z).__webglFramebuffer:null;we.bindFramebuffer(ee.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,q,ue,ae,oe,Be,Ze,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(He=He[Ze],Array.isArray(He)&&(He=He[0])),He)if(q>=0&&q<=R.width-ae&&ue>=0&&ue<=R.height-oe){we.bindFramebuffer(ee.FRAMEBUFFER,He);const Je=R.textures[ze],mt=Je.format,yt=Je.type;R.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+ze);const et=ka(Je);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,Et),ee.bufferData(ee.PIXEL_PACK_BUFFER,Be.byteLength,ee.STREAM_READ),ee.readPixels(q,ue,ae,oe,Re.convert(mt),Re.convert(yt),0),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,null);const tn=z!==null?Ve.get(z).__webglFramebuffer:null;we.bindFramebuffer(ee.FRAMEBUFFER,tn);const jt=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await Vy(ee,jt,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,Et),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,Be),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,null),ee.deleteBuffer(Et),ee.deleteSync(jt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ue=0){const ae=Math.pow(2,-ue),oe=Math.floor(R.image.width*ae),Be=Math.floor(R.image.height*ae),Ze=q!==null?q.x:0,ze=q!==null?q.y:0;ct.setTexture2D(R,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,ue,0,0,Ze,ze,oe,Be),we.unbindTexture()},this.copyTextureToTexture=function(R,q,ue=null,ae=null,oe=0,Be=0){let Ze,ze,He,Je,mt,yt,et,Et,tn;const jt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(ue!==null)Ze=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,He=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,mt=ue.min.y,yt=ue.isBox3?ue.min.z:0;else{const Rt=Math.pow(2,-oe);Ze=Math.floor(jt.width*Rt),ze=Math.floor(jt.height*Rt),R.isDataArrayTexture?He=jt.depth:R.isData3DTexture?He=Math.floor(jt.depth*Rt):He=1,Je=0,mt=0,yt=0}ae!==null?(et=ae.x,Et=ae.y,tn=ae.z):(et=0,Et=0,tn=0);const Bt=Re.convert(q.format),dn=Re.convert(q.type);let tt;q.isData3DTexture?(ct.setTexture3D(q,0),tt=ee.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ct.setTexture2DArray(q,0),tt=ee.TEXTURE_2D_ARRAY):(ct.setTexture2D(q,0),tt=ee.TEXTURE_2D),we.activeTexture(ee.TEXTURE0),we.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,q.flipY),we.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),we.pixelStorei(ee.UNPACK_ALIGNMENT,q.unpackAlignment);const Sn=we.getParameter(ee.UNPACK_ROW_LENGTH),st=we.getParameter(ee.UNPACK_IMAGE_HEIGHT),Gi=we.getParameter(ee.UNPACK_SKIP_PIXELS),bn=we.getParameter(ee.UNPACK_SKIP_ROWS),Sr=we.getParameter(ee.UNPACK_SKIP_IMAGES);we.pixelStorei(ee.UNPACK_ROW_LENGTH,jt.width),we.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,jt.height),we.pixelStorei(ee.UNPACK_SKIP_PIXELS,Je),we.pixelStorei(ee.UNPACK_SKIP_ROWS,mt),we.pixelStorei(ee.UNPACK_SKIP_IMAGES,yt);const Ei=R.isDataArrayTexture||R.isData3DTexture,Hi=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Rt=Ve.get(R),mn=Ve.get(q),kn=Ve.get(Rt.__renderTarget),Ot=Ve.get(mn.__renderTarget);we.bindFramebuffer(ee.READ_FRAMEBUFFER,kn.__webglFramebuffer),we.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Xt=0;Xt<He;Xt++)Ei&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,oe,yt+Xt),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Be,tn+Xt)),ee.blitFramebuffer(Je,mt,Je+Ze,mt+ze,et,Et,et+Ze,Et+ze,ee.DEPTH_BUFFER_BIT,ee.NEAREST);we.bindFramebuffer(ee.READ_FRAMEBUFFER,null),we.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||Ve.has(R)){const Rt=Ve.get(R),mn=Ve.get(q);we.bindFramebuffer(ee.READ_FRAMEBUFFER,O),we.bindFramebuffer(ee.DRAW_FRAMEBUFFER,J);for(let kn=0;kn<He;kn++)Ei?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Rt.__webglTexture,oe,yt+kn):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Rt.__webglTexture,oe),Hi?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,mn.__webglTexture,Be,tn+kn):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,mn.__webglTexture,Be),oe!==0?ee.blitFramebuffer(Je,mt,Je+Ze,mt+ze,et,Et,et+Ze,Et+ze,ee.COLOR_BUFFER_BIT,ee.NEAREST):Hi?ee.copyTexSubImage3D(tt,Be,et,Et,tn+kn,Je,mt,Ze,ze):ee.copyTexSubImage2D(tt,Be,et,Et,Je,mt,Ze,ze);we.bindFramebuffer(ee.READ_FRAMEBUFFER,null),we.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else Hi?R.isDataTexture||R.isData3DTexture?ee.texSubImage3D(tt,Be,et,Et,tn,Ze,ze,He,Bt,dn,jt.data):q.isCompressedArrayTexture?ee.compressedTexSubImage3D(tt,Be,et,Et,tn,Ze,ze,He,Bt,jt.data):ee.texSubImage3D(tt,Be,et,Et,tn,Ze,ze,He,Bt,dn,jt):R.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,Be,et,Et,Ze,ze,Bt,dn,jt.data):R.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,Be,et,Et,jt.width,jt.height,Bt,jt.data):ee.texSubImage2D(ee.TEXTURE_2D,Be,et,Et,Ze,ze,Bt,dn,jt);we.pixelStorei(ee.UNPACK_ROW_LENGTH,Sn),we.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,st),we.pixelStorei(ee.UNPACK_SKIP_PIXELS,Gi),we.pixelStorei(ee.UNPACK_SKIP_ROWS,bn),we.pixelStorei(ee.UNPACK_SKIP_IMAGES,Sr),Be===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&ee.generateMipmap(tt),we.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){ce=0,$=0,z=null,we.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const vs=new BS,fn=new ne,Xr=new ne,rn=new Un,Jg={X:new ne(1,0,0),Y:new ne(0,1,0),Z:new ne(0,0,1)},Yd={type:"change"},ex={type:"mouseDown",mode:null},tx={type:"mouseUp",mode:null},nx={type:"objectChange"};class UE extends GS{constructor(e,t=null){super(void 0,t);const r=new HE(this);this._root=r;const o=new jE;this._gizmo=o,r.add(o);const l=new VE;this._plane=l,r.add(l);const c=this;function h(U,N){let L=N;Object.defineProperty(c,U,{get:function(){return L!==void 0?L:N},set:function(F){L!==F&&(L=F,l[U]=F,o[U]=F,c.dispatchEvent({type:U+"-changed",value:F}),c.dispatchEvent(Yd))}}),c[U]=N,l[U]=N,o[U]=N}h("camera",e),h("object",void 0),h("enabled",!0),h("axis",null),h("mode","translate"),h("translationSnap",null),h("rotationSnap",null),h("scaleSnap",null),h("space","world"),h("size",1),this.viewport=null,h("dragging",!1),h("showX",!0),h("showY",!0),h("showZ",!0),h("showXY",!0),h("showYZ",!0),h("showXZ",!0),h("showXYZE",!0),h("showE",!0),h("minX",-1/0),h("maxX",1/0),h("minY",-1/0),h("maxY",1/0),h("minZ",-1/0),h("maxZ",1/0);const f=new ne,p=new ne,v=new Un,S=new Un,y=new ne,x=new Un,w=new ne,T=new ne,b=new ne,_=0,A=new ne;h("worldPosition",f),h("worldPositionStart",p),h("worldQuaternion",v),h("worldQuaternionStart",S),h("cameraPosition",y),h("cameraQuaternion",x),h("pointStart",w),h("pointEnd",T),h("rotationAxis",b),h("rotationAngle",_),h("eye",A),this._offset=new ne,this._startNorm=new ne,this._endNorm=new ne,this._cameraScale=new ne,this._parentPosition=new ne,this._parentQuaternion=new Un,this._parentQuaternionInv=new Un,this._parentScale=new ne,this._worldScaleStart=new ne,this._worldQuaternionInv=new Un,this._worldScale=new ne,this._positionStart=new ne,this._quaternionStart=new Un,this._scaleStart=new ne,this._getPointer=OE.bind(this),this._onPointerDown=zE.bind(this),this._onPointerHover=kE.bind(this),this._onPointerMove=BE.bind(this),this._onPointerUp=GE.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&vs.setFromCamera(e,this.camera);const t=Zd(this._gizmo.picker[this.mode],vs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&vs.setFromCamera(e,this.camera);const t=Zd(this._plane,vs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,ex.mode=this.mode,this.dispatchEvent(ex)}}pointerMove(e){const t=this.axis,r=this.mode,o=this.object;let l=this.space;if(r==="scale"?l="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(l="world"),o===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&vs.setFromCamera(e,this.camera);const c=Zd(this._plane,vs,!0);if(c){if(this.pointEnd.copy(c.point).sub(this.worldPositionStart),r==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),l==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),l==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),o.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(l==="local"&&(o.position.applyQuaternion(rn.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.position.applyQuaternion(this._quaternionStart)),l==="world"&&(o.getWorldPosition(fn),t.search("X")!==-1&&(fn.x=Math.round(fn.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(fn.y=Math.round(fn.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(fn.z=Math.round(fn.z/this.translationSnap)*this.translationSnap),o.position.copy(o.parent.worldToLocal(fn)))),o.position.x=Math.max(this.minX,Math.min(this.maxX,o.position.x)),o.position.y=Math.max(this.minY,Math.min(this.maxY,o.position.y)),o.position.z=Math.max(this.minZ,Math.min(this.maxZ,o.position.z));else if(r==="scale"){if(t.search("XYZ")!==-1){let h=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(h*=-1),Xr.set(h,h,h)}else fn.copy(this.pointStart),Xr.copy(this.pointEnd),fn.applyQuaternion(this._worldQuaternionInv),Xr.applyQuaternion(this._worldQuaternionInv),Xr.divide(fn),t.search("X")===-1&&(Xr.x=1),t.search("Y")===-1&&(Xr.y=1),t.search("Z")===-1&&(Xr.z=1);o.scale.copy(this._scaleStart).multiply(Xr),this.scaleSnap&&(t.search("X")!==-1&&(o.scale.x=Math.round(o.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(o.scale.y=Math.round(o.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(o.scale.z=Math.round(o.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(r==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const h=20/this.worldPosition.distanceTo(fn.setFromMatrixPosition(this.camera.matrixWorld));let f=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(fn.copy(this.rotationAxis).cross(this.eye))*h):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Jg[t]),fn.copy(Jg[t]),l==="local"&&fn.applyQuaternion(this.worldQuaternion),fn.cross(this.eye),fn.length()===0?f=!0:this.rotationAngle=this._offset.dot(fn.normalize())*h),(t==="E"||f)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),l==="local"&&t!=="E"&&t!=="XYZE"?(o.quaternion.copy(this._quaternionStart),o.quaternion.multiply(rn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),o.quaternion.copy(rn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),o.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Yd),this.dispatchEvent(nx)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(tx.mode=this.mode,this.dispatchEvent(tx)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Yd),this.dispatchEvent(nx),this.pointStart.copy(this.pointEnd))}getRaycaster(){return vs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,r,o){const l=this._gizmo.materialLib;l.xAxis.color.set(e),l.yAxis.color.set(t),l.zAxis.color.set(r),l.active.color.set(o),l.xAxisTransparent.color.set(e),l.yAxisTransparent.color.set(t),l.zAxisTransparent.color.set(r),l.activeTransparent.color.set(o),l.xAxis._color&&l.xAxis._color.set(e),l.yAxis._color&&l.yAxis._color.set(t),l.zAxis._color&&l.zAxis._color.set(r),l.active._color&&l.active._color.set(o),l.xAxisTransparent._color&&l.xAxisTransparent._color.set(e),l.yAxisTransparent._color&&l.yAxisTransparent._color.set(t),l.zAxisTransparent._color&&l.zAxisTransparent._color.set(r),l.activeTransparent._color&&l.activeTransparent._color.set(o)}}function OE(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect(),t=this.viewport;let r,o,l,c;return t!==null?(r=t.x,o=e.height-t.y-t.w,l=t.z,c=t.w):(r=0,o=0,l=e.width,c=e.height),{x:(s.clientX-e.left-r)/l*2-1,y:-(s.clientY-e.top-o)/c*2+1,button:s.button}}}function kE(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function zE(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function BE(s){this.enabled&&this.pointerMove(this._getPointer(s))}function GE(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Zd(s,e,t){const r=e.intersectObject(s,!0);for(let o=0;o<r.length;o++)if(r[o].object.visible||t)return r[o];return!1}const uc=new Mi,qt=new ne(0,1,0),ix=new ne(0,0,0),rx=new Qt,dc=new Un,Sc=new Un,Yi=new ne,Lc=new Qt,_a=new ne(1,0,0),_s=new ne(0,1,0),ya=new ne(0,0,1),hc=new ne,fa=new ne,pa=new ne;class HE extends Ln{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),this.parent&&(Lc.copy(this.parent.matrixWorld).invert(),Lc.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class jE extends Ln{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new lf({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Vx({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),r=e.clone();r.opacity=.15;const o=t.clone();o.opacity=.5;const l=e.clone();l.color.setHex(16711680);const c=e.clone();c.color.setHex(65280);const h=e.clone();h.color.setHex(255);const f=e.clone();f.color.setHex(16711680),f.opacity=.5;const p=e.clone();p.color.setHex(65280),p.opacity=.5;const v=e.clone();v.color.setHex(255),v.opacity=.5;const S=e.clone();S.opacity=.25;const y=e.clone();y.color.setHex(16776960),y.opacity=.25;const x=e.clone();x.color.setHex(16776960);const w=e.clone();w.color.setHex(7895160),this.materialLib={xAxis:l,yAxis:c,zAxis:h,active:x,xAxisTransparent:f,yAxisTransparent:p,zAxisTransparent:v,activeTransparent:y};const T=new Wn(0,.04,.1,12);T.translate(0,.05,0);const b=new yn(.08,.08,.08);b.translate(0,.04,0);const _=new ri;_.setAttribute("position",new on([0,0,0,1,0,0],3));const A=new Wn(.0075,.0075,.5,3);A.translate(0,.25,0);function U(J,ce){const $=new ys(J,.0075,3,64,ce*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function N(){const J=new ri;return J.setAttribute("position",new on([0,0,0,1,1,1],3)),J}const L={X:[[new Qe(T,l),[.5,0,0],[0,0,-Math.PI/2]],[new Qe(T,l),[-.5,0,0],[0,0,Math.PI/2]],[new Qe(A,l),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Qe(T,c),[0,.5,0]],[new Qe(T,c),[0,-.5,0],[Math.PI,0,0]],[new Qe(A,c)]],Z:[[new Qe(T,h),[0,0,.5],[Math.PI/2,0,0]],[new Qe(T,h),[0,0,-.5],[-Math.PI/2,0,0]],[new Qe(A,h),null,[Math.PI/2,0,0]]],XYZ:[[new Qe(new ho(.1,0),S),[0,0,0]]],XY:[[new Qe(new yn(.15,.15,.01),v),[.15,.15,0]]],YZ:[[new Qe(new yn(.15,.15,.01),f),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Qe(new yn(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]]},F={X:[[new Qe(new Wn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new Qe(new Wn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Qe(new Wn(.2,0,.6,4),r),[0,.3,0]],[new Qe(new Wn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Qe(new Wn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new Qe(new Wn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Qe(new ho(.2,0),r)]],XY:[[new Qe(new yn(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new Qe(new yn(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Qe(new yn(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]]},M={START:[[new Qe(new ho(.01,2),o),null,null,null,"helper"]],END:[[new Qe(new ho(.01,2),o),null,null,null,"helper"]],DELTA:[[new Vr(N(),o),null,null,null,"helper"]],X:[[new Vr(_,o),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vr(_,o),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vr(_,o),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new Qe(U(.5,1),w),null,[0,Math.PI/2,0]]],X:[[new Qe(U(.5,.5),l)]],Y:[[new Qe(U(.5,.5),c),null,[0,0,-Math.PI/2]]],Z:[[new Qe(U(.5,.5),h),null,[0,Math.PI/2,0]]],E:[[new Qe(U(.75,1),y),null,[0,Math.PI/2,0]]]},j={AXIS:[[new Vr(_,o),[-1e3,0,0],null,[1e6,1,1],"helper"]]},k={XYZE:[[new Qe(new df(.25,10,8),r)]],X:[[new Qe(new ys(.5,.1,4,24),r),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Qe(new ys(.5,.1,4,24),r),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Qe(new ys(.5,.1,4,24),r),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Qe(new ys(.75,.1,2,24),r)]]},W={X:[[new Qe(b,l),[.5,0,0],[0,0,-Math.PI/2]],[new Qe(A,l),[0,0,0],[0,0,-Math.PI/2]],[new Qe(b,l),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Qe(b,c),[0,.5,0]],[new Qe(A,c)],[new Qe(b,c),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Qe(b,h),[0,0,.5],[Math.PI/2,0,0]],[new Qe(A,h),[0,0,0],[Math.PI/2,0,0]],[new Qe(b,h),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Qe(new yn(.15,.15,.01),v),[.15,.15,0]]],YZ:[[new Qe(new yn(.15,.15,.01),f),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Qe(new yn(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Qe(new yn(.1,.1,.1),S)]]},V={X:[[new Qe(new Wn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new Qe(new Wn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Qe(new Wn(.2,0,.6,4),r),[0,.3,0]],[new Qe(new Wn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Qe(new Wn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new Qe(new Wn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Qe(new yn(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new Qe(new yn(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Qe(new yn(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Qe(new yn(.2,.2,.2),r),[0,0,0]]]},Z={X:[[new Vr(_,o),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vr(_,o),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vr(_,o),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(J){const ce=new Ln;for(const $ in J)for(let z=J[$].length;z--;){const G=J[$][z][0].clone(),X=J[$][z][1],I=J[$][z][2],K=J[$][z][3],me=J[$][z][4];G.name=$,G.tag=me,X&&G.position.set(X[0],X[1],X[2]),I&&G.rotation.set(I[0],I[1],I[2]),K&&G.scale.set(K[0],K[1],K[2]),G.updateMatrix();const Q=G.geometry.clone();Q.applyMatrix4(G.matrix),G.geometry=Q,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),ce.add(G)}return ce}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(L)),this.add(this.gizmo.rotate=O(P)),this.add(this.gizmo.scale=O(W)),this.add(this.picker.translate=O(F)),this.add(this.picker.rotate=O(k)),this.add(this.picker.scale=O(V)),this.add(this.helper.translate=O(M)),this.add(this.helper.rotate=O(j)),this.add(this.helper.scale=O(Z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const r=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Sc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let o=[];o=o.concat(this.picker[this.mode].children),o=o.concat(this.gizmo[this.mode].children),o=o.concat(this.helper[this.mode].children);for(let l=0;l<o.length;l++){const c=o[l];c.visible=!0,c.rotation.set(0,0,0),c.position.copy(this.worldPosition);let h;if(this.camera.isOrthographicCamera?h=(this.camera.top-this.camera.bottom)/this.camera.zoom:h=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),c.scale.set(1,1,1).multiplyScalar(h*this.size/4),c.tag==="helper"){c.visible=!1,c.name==="AXIS"?(c.visible=!!this.axis,this.axis==="X"&&(rn.setFromEuler(uc.set(0,0,0)),c.quaternion.copy(r).multiply(rn),Math.abs(qt.copy(_a).applyQuaternion(r).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="Y"&&(rn.setFromEuler(uc.set(0,0,Math.PI/2)),c.quaternion.copy(r).multiply(rn),Math.abs(qt.copy(_s).applyQuaternion(r).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="Z"&&(rn.setFromEuler(uc.set(0,Math.PI/2,0)),c.quaternion.copy(r).multiply(rn),Math.abs(qt.copy(ya).applyQuaternion(r).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="XYZE"&&(rn.setFromEuler(uc.set(0,Math.PI/2,0)),qt.copy(this.rotationAxis),c.quaternion.setFromRotationMatrix(rx.lookAt(ix,qt,_s)),c.quaternion.multiply(rn),c.visible=this.dragging),this.axis==="E"&&(c.visible=!1)):c.name==="START"?(c.position.copy(this.worldPositionStart),c.visible=this.dragging):c.name==="END"?(c.position.copy(this.worldPosition),c.visible=this.dragging):c.name==="DELTA"?(c.position.copy(this.worldPositionStart),c.quaternion.copy(this.worldQuaternionStart),fn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),fn.applyQuaternion(this.worldQuaternionStart.clone().invert()),c.scale.copy(fn),c.visible=this.dragging):(c.quaternion.copy(r),this.dragging?c.position.copy(this.worldPositionStart):c.position.copy(this.worldPosition),this.axis&&(c.visible=this.axis.search(c.name)!==-1));continue}c.quaternion.copy(r),this.mode==="translate"||this.mode==="scale"?(c.name==="X"&&Math.abs(qt.copy(_a).applyQuaternion(r).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="Y"&&Math.abs(qt.copy(_s).applyQuaternion(r).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="Z"&&Math.abs(qt.copy(ya).applyQuaternion(r).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="XY"&&Math.abs(qt.copy(ya).applyQuaternion(r).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="YZ"&&Math.abs(qt.copy(_a).applyQuaternion(r).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="XZ"&&Math.abs(qt.copy(_s).applyQuaternion(r).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1)):this.mode==="rotate"&&(dc.copy(r),qt.copy(this.eye).applyQuaternion(rn.copy(r).invert()),c.name.search("E")!==-1&&c.quaternion.setFromRotationMatrix(rx.lookAt(this.eye,ix,_s)),c.name==="X"&&(rn.setFromAxisAngle(_a,Math.atan2(-qt.y,qt.z)),rn.multiplyQuaternions(dc,rn),c.quaternion.copy(rn)),c.name==="Y"&&(rn.setFromAxisAngle(_s,Math.atan2(qt.x,qt.z)),rn.multiplyQuaternions(dc,rn),c.quaternion.copy(rn)),c.name==="Z"&&(rn.setFromAxisAngle(ya,Math.atan2(qt.y,qt.x)),rn.multiplyQuaternions(dc,rn),c.quaternion.copy(rn))),c.visible=c.visible&&(c.name.indexOf("X")===-1||this.showX),c.visible=c.visible&&(c.name.indexOf("Y")===-1||this.showY),c.visible=c.visible&&(c.name.indexOf("Z")===-1||this.showZ),c.visible=c.visible&&(c.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),c.visible=c.visible&&(c.name.indexOf("XY")===-1||this.showXY),c.visible=c.visible&&(c.name.indexOf("YZ")===-1||this.showYZ),c.visible=c.visible&&(c.name.indexOf("XZ")===-1||this.showXZ),c.visible=c.visible&&(c.name!=="E"||this.showE),c.visible=c.visible&&(c.name!=="XYZE"||this.showXYZE),c.material._color=c.material._color||c.material.color.clone(),c.material._opacity=c.material._opacity||c.material.opacity,c.material.color.copy(c.material._color),c.material.opacity=c.material._opacity,this.enabled&&this.axis&&(c.name===this.axis?(c.material.color.copy(this.materialLib.active.color),c.material.opacity=1):this.axis.split("").some(function(f){return c.name===f})&&(c.material.color.copy(this.materialLib.active.color),c.material.opacity=1))}super.updateMatrixWorld(e)}}class VE extends Qe{constructor(){super(new La(1e5,1e5,2,2),new lf({visible:!1,wireframe:!0,side:Ki,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),hc.copy(_a).applyQuaternion(t==="local"?this.worldQuaternion:Sc),fa.copy(_s).applyQuaternion(t==="local"?this.worldQuaternion:Sc),pa.copy(ya).applyQuaternion(t==="local"?this.worldQuaternion:Sc),qt.copy(fa),this.mode){case"translate":case"scale":switch(this.axis){case"X":qt.copy(this.eye).cross(hc),Yi.copy(hc).cross(qt);break;case"Y":qt.copy(this.eye).cross(fa),Yi.copy(fa).cross(qt);break;case"Z":qt.copy(this.eye).cross(pa),Yi.copy(pa).cross(qt);break;case"XY":Yi.copy(pa);break;case"YZ":Yi.copy(hc);break;case"XZ":qt.copy(pa),Yi.copy(fa);break;case"XYZ":case"E":Yi.set(0,0,0);break}break;case"rotate":default:Yi.set(0,0,0)}Yi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Lc.lookAt(fn.set(0,0,0),Yi,qt),this.quaternion.setFromRotationMatrix(Lc)),super.updateMatrixWorld(e)}}const Kd=180/Math.PI,Qd=Math.PI/180;function ma(s){return{x:s.x,y:s.z,z:-s.y}}function Jd(s){return{x:s.x,y:-s.z,z:s.y}}const fc="YXZ";function WE(s){return[s.x*Qd,s.z*Qd,-s.y*Qd]}function eh(s,e,t){return{x:s*Kd,y:-t*Kd,z:e*Kd}}const XE=()=>{const s=Xe.useRef(null),{visible:e,openedAt:t,activeStudio:r,hasSelectedProp:o,gizmoMode:l,snapEnabled:c,coords:h,heading:f,rotation:p,cameraMode:v,updateTransform:S,selectedGroupId:y,selectedFamilyId:x}=sn(),w=Mt(z=>z.selectedProp),T=Mt(z=>z.selectedFamilyId),b=Xe.useRef(null),_=Xe.useRef(new Ln),A=Xe.useRef(null),U=Xe.useRef(null),N=Xe.useRef(new ne),L=Xe.useRef(new ne),F=Xe.useRef(new Un),M=Xe.useRef(null),P=Xe.useRef(null),j=Xe.useRef(!1),k=Xe.useRef({x:0,y:0}),W=Xe.useRef(!1),V=Xe.useRef(!1),Z=Xe.useRef(new Set);Xe.useEffect(()=>{if(!e||v!=="freecam")return;let z,G=performance.now();const X=I=>{const K=Math.min((I-G)/1e3,.1);G=I;const me=Z.current;if(me.size>0){let Q=0,he=0,Se=0;(me.has("keyw")||me.has("keyz"))&&(Q+=1),me.has("keys")&&(Q-=1),(me.has("keya")||me.has("keyq"))&&(he-=1),me.has("keyd")&&(he+=1),me.has("space")&&(Se+=1),(me.has("controlleft")||me.has("controlright"))&&(Se-=1);const Te=me.has("shiftleft")||me.has("shiftright");(Q!==0||he!==0||Se!==0)&&Ue("freecamMove",{forward:Q,right:he,up:Se,fast:Te,dt:K}).catch(()=>{})}z=requestAnimationFrame(X)};return z=requestAnimationFrame(X),()=>cancelAnimationFrame(z)},[e,v]),Xe.useEffect(()=>{if(!s.current)return;const z=s.current,G=z.clientWidth||window.innerWidth,X=z.clientHeight||window.innerHeight,I=new FE({alpha:!0,antialias:!0});I.setClearColor(0,0),I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.setSize(G,X),z.appendChild(I.domElement),U.current=I;const K=new SS,me=new Fi(48,G/X,.01,2e3);A.current=me;const Q=_.current;K.add(Q);const he=new UE(me,I.domElement);he.size=.85,he.space="world",he.attach(Q);const Se=typeof he.getHelper=="function"?he.getHelper():he;K.add(Se),b.current=he,he.addEventListener("dragging-changed",ft=>{const re=!!ft.value;if(W.current=re,re){const je=new Mi().setFromQuaternion(Q.quaternion,fc);M.current=Jd({x:Q.position.x+N.current.x,y:Q.position.y+N.current.y,z:Q.position.z+N.current.z}),P.current=eh(je.x,je.y,je.z)}else if(L.current.copy(Q.position).add(N.current),F.current.copy(Q.quaternion),M.current=null,P.current=null,sn.getState().activeStudio==="prop")if(Mt.getState().selectedFamilyId)Mt.getState().saveCurrentFamily();else{const it=new Mi().setFromQuaternion(F.current,fc),lt=Jd({x:L.current.x,y:L.current.y,z:L.current.z}),Ct=eh(it.x,it.y,it.z);Ue("propStudio:saveEntity",{position:lt,rotation:Ct}).catch(()=>{})}Ue("setDragging",{dragging:re}).catch(()=>{})}),he.addEventListener("objectChange",()=>{if(V.current)return;L.current.copy(Q.position).add(N.current),F.current.copy(Q.quaternion);const ft=new Mi().setFromQuaternion(F.current,fc),re=Jd({x:L.current.x,y:L.current.y,z:L.current.z}),je=eh(ft.x,ft.y,ft.z);if(sn.getState().activeStudio==="prop"){if(Mt.getState().selectedFamilyId){const an=M.current||re,wt=P.current||je,Nt=re.x-an.x,Wt=re.y-an.y,un=re.z-an.z,ee=je.z-wt.z;M.current=re,P.current=je,Mt.getState().updateFamilyTransform({x:Nt,y:Wt,z:un},ee,je);return}Ue("propStudio:moveEntity",{position:re,rotation:je}).catch(()=>{}),Mt.getState().updatePropPosition(re,!1),Mt.getState().updatePropRotation(je,!1);return}const{selectedFamilyId:it,applyToFamily:lt,getCurrentLightFamily:Ct,selectedGroupId:St}=sn.getState(),at=it||(lt&&Ct?Ct():null);Ue("moveEntity",{position:re,rotation:je,familyId:at,applyToFamily:!!at,group:at||St,applyToGroup:!!at}).catch(()=>{}),S(re,je.z,je)});let Te;const be=()=>{Te=requestAnimationFrame(be),I.render(K,me)};be();const Ge=()=>{if(!I||!me)return;const ft=window.innerWidth,re=window.innerHeight;me.aspect=ft/Math.max(1,re),me.updateProjectionMatrix(),I.setSize(ft,re)};return window.addEventListener("resize",Ge),()=>{cancelAnimationFrame(Te),window.removeEventListener("resize",Ge),he.dispose(),I.dispose(),z.contains(I.domElement)&&z.removeChild(I.domElement)}},[S]),Xe.useEffect(()=>{const z=b.current,G=_.current;z&&(r==="prop"?w||T?(z.attach(G),z.enabled=!0):(z.detach(),z.enabled=!1):o||x||y?(z.attach(G),z.enabled=!0):(z.detach(),z.enabled=!1))},[r,w,T,o,x,y]),Xe.useEffect(()=>{const z=b.current;z&&(z.setMode(l),c?(z.setTranslationSnap(.25),z.setRotationSnap(aS.degToRad(15))):(z.setTranslationSnap(null),z.setRotationSnap(null)))},[l,c]),Xe.useEffect(()=>{var K;if(W.current)return;const z=_.current;if(!z)return;let G,X;if(r==="prop")if(w)G=ma(w.coords),X=w.rotation||{x:0,y:0,z:w.heading||0};else if(T){const me=Object.values(Mt.getState().props).filter(Te=>Te.familyId===T||Te.group===T&&!Te.familyId);if(me.length===0)return;let Q=0,he=0,Se=0;for(const Te of me)Q+=Te.coords.x,he+=Te.coords.y,Se+=Te.coords.z;G=ma({x:Q/me.length,y:he/me.length,z:Se/me.length}),X={x:0,y:0,z:me[0].heading||((K=me[0].rotation)==null?void 0:K.z)||0}}else return;else G=ma(h),X=p||{x:0,y:0,z:f};const I=WE(X);L.current.set(G.x,G.y,G.z),F.current.setFromEuler(new Mi(I[0],I[1],I[2],fc)),z.position.copy(L.current).sub(N.current),z.quaternion.copy(F.current)},[r,w,T,h,f,p]),Xe.useEffect(()=>{const z=G=>{const X=G.data;if(X&&X.action==="camera"&&A.current){const I=A.current,K=ma(X.position),me=new ne(K.x,K.y,K.z),Q=ma(X.forward),he=_.current,Se=b.current;if(Se&&Se.dragging){L.current.copy(he.position).add(N.current),F.current.copy(he.quaternion);const be=N.current.distanceToSquared(me)>1e-6;N.current.copy(me),be&&he.position.copy(L.current).sub(N.current)}else N.current.copy(me),he.position.copy(L.current).sub(N.current),he.quaternion.copy(F.current);I.position.set(0,0,0),I.up.set(0,1,0);const Te=new ne(Q.x,Q.y,Q.z);Te.lengthSq()<1e-4&&Te.set(0,0,-1),I.lookAt(Te),I.fov=X.fov||48,I.aspect=window.innerWidth/Math.max(1,window.innerHeight),I.updateProjectionMatrix()}};return window.addEventListener("message",z),()=>{window.removeEventListener("message",z)}},[]);const O=z=>{j.current=!0,k.current={x:z.clientX,y:z.clientY}},J=z=>{j.current=!1;const G=Math.abs(z.clientX-k.current.x),X=Math.abs(z.clientY-k.current.y);G<6&&X<6&&!W.current&&z.button===0&&sn.getState().activeStudio==="prop"&&Ue("propStudio:worldClick",{screenX:z.clientX,screenY:z.clientY,screenWidth:window.innerWidth,screenHeight:window.innerHeight}).catch(()=>{})},ce=z=>{j.current&&!W.current&&Ue("rotateCamera",{x:z.movementX,y:z.movementY}).catch(()=>{})},$=z=>{z.cancelable&&z.preventDefault(),Ue("zoomCamera",{delta:z.deltaY}).catch(()=>{})};return Xe.useEffect(()=>{if(!e)return;const z=I=>{const K=I.target;if(K.tagName==="INPUT"||K.tagName==="TEXTAREA")return;if(Z.current.add(I.code.toLowerCase()),(I.code==="ShiftLeft"||I.key==="Shift"&&I.location!==2||I.which===16&&I.location!==2)&&!I.repeat){const he=sn.getState();if(!(he.cameraMode==="freecam"&&(Z.current.has("keyw")||Z.current.has("keyz")||Z.current.has("keys")||Z.current.has("keya")||Z.current.has("keyq")||Z.current.has("keyd")||Z.current.has("space")))){if(he.activeStudio==="prop"){I.preventDefault(),Mt.getState().duplicateSelectedProp();return}if(he.hasSelectedProp||he.selectedLightId){I.preventDefault(),he.duplicateSelectedLight();return}else he.showToast("Sélectionnez d'abord un prop pour le dupliquer (LShift)","info")}}if(I.key==="Delete"||I.key==="Backspace"){const he=sn.getState();if(he.activeStudio==="prop"){I.preventDefault(),Mt.getState().deleteSelectedProp();return}if(he.hasSelectedProp&&he.selectedLightId){I.preventDefault(),he.deleteSelectedLight();return}}const Q=I.key.toLowerCase();if(Q==="e"||Q==="1")I.preventDefault(),sn.getState().setGizmoMode("translate");else if(Q==="r"||Q==="2")I.preventDefault(),sn.getState().setGizmoMode("rotate");else if(Q==="x")I.preventDefault(),sn.getState().toggleSnap();else if(Q==="f")I.preventDefault(),sn.getState().toggleCameraMode();else if(Q==="g")I.preventDefault(),sn.getState().activeStudio==="prop"?Mt.getState().snapGround():sn.getState().requestGroundSnap();else if(Q==="i")sn.getState().activeStudio==="prop"&&(I.preventDefault(),Mt.getState().applyPhysics());else if(Q==="c")I.preventDefault(),sn.getState().toggleCatalog();else if(I.key==="F5"||Q==="escape"){if(I.preventDefault(),I.key==="F5"&&Date.now()-t<600)return;sn.getState().requestCancel()}},G=I=>{Z.current.delete(I.code.toLowerCase())},X=()=>{Z.current.clear()};return window.addEventListener("keydown",z),window.addEventListener("keyup",G),window.addEventListener("blur",X),()=>{window.removeEventListener("keydown",z),window.removeEventListener("keyup",G),window.removeEventListener("blur",X)}},[e,t]),d.jsx("div",{ref:s,onPointerDown:O,onPointerUp:J,onPointerMove:ce,onWheel:$,onContextMenu:z=>z.preventDefault(),className:"absolute inset-0 w-full h-full pointer-events-auto z-10 overflow-hidden"})},qE=()=>{const{toast:s}=sn();if(!s)return null;const e={success:d.jsx(g_,{className:"w-3.5 h-3.5 text-hud-success"}),error:d.jsx($h,{className:"w-3.5 h-3.5 text-hud-error"}),info:d.jsx(N_,{className:"w-3.5 h-3.5 text-hud-accent"})},t={success:"border-l-2 border-l-hud-success",error:"border-l-2 border-l-hud-error",info:"border-l-2 border-l-hud-accent"};return d.jsx("div",{className:"fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in duration-150",children:d.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded bg-hud-panel border border-hud-border ${t[s.type]} shadow-md text-xs font-medium text-hud-text`,children:[e[s.type],d.jsx("span",{children:s.message})]})})},sx=()=>{const{rgb:s,setRgb:e,recentColors:t,addRecentColor:r,showToast:o}=sn(),l=po(s.r,s.g,s.b),c=Xe.useRef(l);c.current=l;const[h,f]=Xe.useState(l),[p,v]=Xe.useState(!1),[S,y]=Xe.useState({x:.15,y:.15}),[x,w]=Xe.useState(.85),T=Xe.useRef(null),b=Xe.useRef(null),_=Xe.useRef(!1),A=Xe.useRef(!1);Xe.useEffect(()=>{f(po(s.r,s.g,s.b))},[s]);const U=Xe.useCallback((V,Z,O)=>{const J=V*360,ce=Math.max(0,Math.min(1,1-Z*.15)),$=Math.max(0,Math.min(1,(1-Z)*O)),z=$*ce,G=z*(1-Math.abs(J/60%2-1)),X=$-z;let I=0,K=0,me=0;return J>=0&&J<60?(I=z,K=G,me=0):J>=60&&J<120?(I=G,K=z,me=0):J>=120&&J<180?(I=0,K=z,me=G):J>=180&&J<240?(I=0,K=G,me=z):J>=240&&J<300?(I=G,K=0,me=z):(I=z,K=0,me=G),{r:Math.round((I+X)*255),g:Math.round((K+X)*255),b:Math.round((me+X)*255)}},[]),N=Xe.useCallback((V,Z)=>{if(!T.current)return;const O=T.current.getBoundingClientRect(),J=Math.max(0,Math.min(1,(V-O.left)/O.width)),ce=Math.max(0,Math.min(1,(Z-O.top)/O.height));y({x:J,y:ce});const $=U(J,ce,x);e($)},[U,x,e]),L=Xe.useCallback(V=>{if(!b.current)return;const Z=b.current.getBoundingClientRect(),O=Math.max(0,Math.min(1,(V-Z.top)/Z.height)),J=Math.max(.05,1-O);w(J);const ce=U(S.x,S.y,J);e(ce)},[U,S,e]);Xe.useEffect(()=>{const V=O=>{_.current&&N(O.clientX,O.clientY),A.current&&L(O.clientY)},Z=()=>{(_.current||A.current)&&(_.current=!1,A.current=!1,c.current&&r(c.current))};return window.addEventListener("pointermove",V),window.addEventListener("pointerup",Z),()=>{window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",Z)}},[N,L,r]);const F=V=>{let Z=V.target.value;!Z.startsWith("#")&&Z.length>0&&(Z="#"+Z),f(Z);const O=_d(Z);O&&(e(O),Z.length===7&&r(Z))},M=()=>{_d(h)?r(h):f(l)},P=()=>{r(l),o(`Couleur ${l.toUpperCase()} mémorisée`,"info")},j=()=>{var V;(V=navigator.clipboard)==null||V.writeText(l),v(!0),o(`Code couleur ${l} copié`,"info"),setTimeout(()=>v(!1),1400)},k=()=>{const V={r:255,g:180,b:60};e(V),y({x:.1,y:.1}),w(.9),r(po(V.r,V.g,V.b))},W=V=>{const Z=_d(V);Z&&(e(Z),r(V))};return d.jsxs("div",{className:"flex flex-col gap-2 select-none",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsxs("button",{onClick:P,title:"Valider et mémoriser cette nuance",className:"flex-1 h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border flex items-center gap-2 transition-colors text-left",children:[d.jsx("div",{className:"w-3.5 h-3.5 rounded-sm border border-hud-border shrink-0",style:{backgroundColor:l}}),d.jsx("span",{className:"text-xs font-medium text-hud-text",children:"Select Color"})]}),d.jsxs("div",{className:"relative flex items-center",children:[d.jsx("input",{type:"text",value:h,onChange:F,onBlur:M,maxLength:7,className:"w-20 h-7 px-1.5 text-center bg-hud-surface border border-hud-border rounded text-xs font-mono text-hud-text uppercase focus:outline-none focus:border-hud-accent",placeholder:"#EF4352"}),d.jsx("button",{onClick:j,title:"Copier le code HEX",className:"absolute right-1 text-hud-muted hover:text-hud-text p-0.5",children:p?d.jsx(Si,{className:"w-3 h-3 text-hud-success"}):d.jsx(Dc,{className:"w-3 h-3"})})]}),d.jsxs("button",{onClick:k,title:"Réinitialiser par défaut",className:"h-7 px-2 flex items-center gap-1 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs text-hud-muted hover:text-hud-text transition-colors",children:[d.jsx(nh,{className:"w-3 h-3"}),d.jsx("span",{children:"Clear"})]})]}),d.jsxs("div",{className:"flex gap-1.5 h-36",children:[d.jsx("div",{ref:T,onPointerDown:V=>{_.current=!0,N(V.clientX,V.clientY)},className:"flex-1 relative rounded border border-hud-border overflow-hidden cursor-crosshair",style:{background:`
              linear-gradient(to bottom, transparent 0%, #000000 100%),
              linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)
            `},children:d.jsx("div",{className:"absolute w-3.5 h-3.5 rounded-full border border-white pointer-events-none -translate-x-1/2 -translate-y-1/2",style:{left:`${S.x*100}%`,top:`${S.y*100}%`,backgroundColor:l,boxShadow:"0 0 0 1px rgba(0,0,0,0.5)"}})}),d.jsx("div",{ref:b,onPointerDown:V=>{A.current=!0,L(V.clientY)},className:"w-5 relative rounded border border-hud-border overflow-hidden cursor-pointer",style:{background:`linear-gradient(to bottom, ${l} 0%, rgba(255,255,255,0.7) 50%, #ffffff 100%)`},children:d.jsx("div",{className:"absolute left-0 right-0 h-2 -translate-y-1/2 rounded-sm border border-white pointer-events-none",style:{top:`${(1-x)*100}%`,backgroundColor:l,boxShadow:"0 0 0 1px rgba(0,0,0,0.5)"}})})]}),d.jsx("div",{className:"pt-0.5",children:d.jsx("div",{className:"grid grid-cols-8 gap-1",children:t.map((V,Z)=>{const O=V.toLowerCase()===l.toLowerCase();return d.jsx("button",{onClick:()=>W(V),title:`Appliquer ${V}`,className:`h-5 rounded-sm border transition-colors ${O?"border-hud-accent ring-1 ring-hud-accent":"border-hud-border hover:border-hud-borderLight"}`,style:{backgroundColor:V}},`${V}-${Z}`)})})})]})},th=()=>{var ft;const{nearbyLights:s,selectedLightId:e,selectExistingLight:t,deleteSelectedLight:r,groups:o,families:l,collapsedFolders:c,toggleFolderCollapse:h,createGroup:f,renameGroup:p,deleteGroup:v,createFamily:S,renameFamily:y,deleteFamily:x,moveFamilyToGroup:w,assignLightToGroup:T,assignLightToFamily:b,assignMultipleLights:_,selectedFamilyId:A,setSelectedFamilyId:U,multiSelectedIds:N,toggleMultiSelectId:L,selectAllNearby:F,clearMultiSelect:M}=sn(),[P,j]=Xe.useState(null),[k,W]=Xe.useState(null),[V,Z]=Xe.useState(""),[O,J]=Xe.useState(null),[ce,$]=Xe.useState(null),[z,G]=Xe.useState(!1),X=(re,je,it)=>re.familyId===je||re.group===je&&!re.familyId||it&&re.group===it&&!re.familyId,I=re=>re.familyId?l.find(je=>je.id===re.familyId)||null:re.group&&l.find(je=>je.id===re.group||je.name===re.group)||null,K=re=>re.groupId&&o.find(je=>je.id===re.groupId)||null,me=async()=>{const re=V.trim();P==="group"?await f(re||`Nouveau Groupe ${o.length+1}`):P==="family"&&await S(re||`Nouvelle Famille ${l.length+1}`,k,N),j(null),W(null),Z("")},Q=async()=>{if(!O)return;const re=O.name.trim();re&&(O.type==="group"?await p(O.id,re):await y(O.id,re)),J(null)},he=s.length>0&&N.length===s.length,Se=s.filter(re=>{const je=I(re),it=K(re);return!je&&!it}),Te=l.filter(re=>!re.groupId);return d.jsxs("div",{className:"pt-2 select-none",children:[d.jsxs("div",{className:"flex items-center justify-between pb-1.5 mb-2 border-b border-hud-border",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Plan de travail"}),d.jsxs("span",{className:"text-[9px] text-hud-muted font-mono",children:["(",s.length," spot",s.length>1?"s":"",")"]})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsxs("button",{onClick:()=>{j("group"),W(null),Z(`Groupe ${o.length+1}`)},className:"h-5 px-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-text text-[10px] font-medium flex items-center gap-1 transition-colors",title:"Créer un nouveau dossier d'organisation (Groupe)",children:[d.jsx(ux,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"+ Groupe"})]}),d.jsxs("button",{onClick:()=>{j("family"),W(null),Z(`Famille ${l.length+1}`)},className:"h-5 px-1.5 rounded bg-hud-accent/15 hover:bg-hud-accent/25 border border-hud-accent/40 text-hud-accent text-[10px] font-semibold flex items-center gap-1 transition-colors",title:"Créer une famille synchronisée pour lier des lumières",children:[d.jsx(Kt,{className:"w-3 h-3 text-hud-accent"}),d.jsx("span",{children:"+ Famille"})]}),s.length>0&&d.jsx("button",{onClick:()=>he?M():F(),className:"w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text hover:bg-hud-surface transition-colors ml-0.5",title:he?"Tout désélectionner":"Tout sélectionner",children:he?d.jsx(ih,{className:"w-3.5 h-3.5 text-hud-accent"}):d.jsx(rh,{className:"w-3.5 h-3.5"})})]})]}),P&&d.jsxs("div",{className:"p-2 mb-2 rounded bg-hud-surface border border-hud-accent/40 flex flex-col gap-1.5 animate-fadeIn",children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[d.jsxs("span",{className:"font-semibold text-hud-accent flex items-center gap-1",children:[P==="group"?d.jsx(Ss,{className:"w-3.5 h-3.5"}):d.jsx(Kt,{className:"w-3.5 h-3.5"}),P==="group"?"Nouveau Groupe (Dossier)":"Nouvelle Famille (Synchronisée)",k&&d.jsxs("span",{className:"text-[10px] text-hud-muted font-normal",children:["dans « ",(ft=o.find(re=>re.id===k))==null?void 0:ft.name," »"]})]}),d.jsx("button",{onClick:()=>j(null),className:"text-hud-muted hover:text-hud-text",children:d.jsx(xr,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:V,onChange:re=>Z(re.target.value),onKeyDown:re=>re.key==="Enter"&&me(),placeholder:"Nom...",className:"flex-1 h-6 px-1.5 rounded bg-hud-bg border border-hud-border text-xs text-hud-text placeholder-hud-muted/60 focus:outline-none focus:border-hud-accent"}),d.jsxs("button",{onClick:me,className:"h-6 px-2 rounded bg-hud-accent text-white font-semibold text-[11px] hover:bg-hud-accentHover transition-colors flex items-center gap-1 shrink-0",children:[d.jsx(Si,{className:"w-3 h-3"}),d.jsx("span",{children:"OK"})]})]})]}),N.length>0&&d.jsxs("div",{className:"p-2 mb-2 rounded bg-hud-surface border border-hud-border flex flex-col gap-1.5 animate-fadeIn",children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[d.jsxs("span",{className:"font-semibold text-hud-text",children:[N.length," spot",N.length>1?"s":""," sélectionné",N.length>1?"s":""]}),d.jsx("button",{onClick:M,className:"text-[10px] text-hud-muted hover:text-hud-text underline transition-colors",children:"Annuler"})]}),d.jsxs("div",{className:"flex items-center gap-1 relative",children:[d.jsxs("button",{onClick:()=>{j("family"),W(null),Z(`Famille ${l.length+1}`)},className:"flex-1 h-6 rounded bg-hud-accent/20 hover:bg-hud-accent/30 border border-hud-accent/40 text-hud-accent text-[11px] font-medium flex items-center justify-center gap-1 transition-colors",title:"Créer une famille pour lier et synchroniser ces spots",children:[d.jsx(Kt,{className:"w-3 h-3"}),d.jsx("span",{children:"Créer Famille"})]}),d.jsxs("button",{onClick:()=>G(!z),className:"h-6 px-2 rounded bg-hud-bg hover:bg-hud-surfaceHover border border-hud-border text-hud-text text-[11px] font-medium flex items-center gap-1 transition-colors",title:"Classer dans un groupe ou une famille existante",children:[d.jsx("span",{children:"Assigner..."}),d.jsx(yi,{className:"w-3 h-3 text-hud-muted"})]}),d.jsx("button",{onClick:()=>_(N,null,null),className:"h-6 px-2 rounded bg-hud-bg hover:bg-hud-error/20 hover:text-hud-error border border-hud-border text-hud-muted text-[11px] font-medium flex items-center justify-center gap-1 transition-colors",title:"Détacher de tout groupe et famille (libérer à la racine)",children:d.jsx(uo,{className:"w-3 h-3"})}),z&&d.jsxs("div",{className:"absolute right-0 top-7 z-50 w-48 bg-hud-panel border border-hud-border rounded shadow-xl p-1 text-xs flex flex-col gap-0.5 max-h-56 overflow-y-auto",onMouseLeave:()=>G(!1),children:[d.jsx("span",{className:"text-[9px] uppercase font-bold text-hud-muted px-1.5 py-1",children:"Assigner au Groupe :"}),o.map(re=>d.jsxs("button",{onClick:()=>{_(N,re.id,void 0),G(!1)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors truncate",children:[d.jsx(Ss,{className:"w-3 h-3 text-hud-muted shrink-0"}),d.jsx("span",{className:"truncate",children:re.name})]},re.id)),o.length===0&&d.jsx("span",{className:"text-[10px] text-hud-muted italic px-2 py-0.5",children:"Aucun groupe créé"}),d.jsx("div",{className:"border-t border-hud-border my-1"}),d.jsx("span",{className:"text-[9px] uppercase font-bold text-hud-accent px-1.5 py-1",children:"Lier à la Famille :"}),l.map(re=>d.jsxs("button",{onClick:()=>{_(N,void 0,re.id),G(!1)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors truncate",children:[d.jsx(Kt,{className:"w-3 h-3 text-hud-accent shrink-0"}),d.jsx("span",{className:"truncate",children:re.name})]},re.id)),l.length===0&&d.jsx("span",{className:"text-[10px] text-hud-muted italic px-2 py-0.5",children:"Aucune famille créée"})]})]})]}),s.length===0?d.jsx("div",{className:"py-3 px-2 text-center text-[11px] text-hud-muted/70 bg-hud-surface/40 rounded border border-hud-border/50",children:"Aucune lumière à portée (25m)"}):d.jsxs("div",{className:"space-y-1 max-h-[340px] overflow-y-auto pr-0.5 scrollbar-thin",children:[o.map(re=>{const je=!!c[`grp_${re.id}`],it=l.filter(at=>at.groupId===re.id),lt=s.filter(at=>at.groupId===re.id&&!I(at)),Ct=s.filter(at=>{if(at.groupId===re.id)return!0;const Lt=I(at);return Lt&&Lt.groupId===re.id}),St=(O==null?void 0:O.id)===re.id;return d.jsxs("div",{className:"rounded border border-hud-border/60 bg-hud-bg/40 overflow-hidden",children:[d.jsxs("div",{className:"h-7 px-1.5 bg-hud-surface/60 hover:bg-hud-surface flex items-center justify-between gap-1 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[d.jsx("button",{onClick:()=>h(`grp_${re.id}`),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text transition-colors",title:je?"Déplier le groupe":"Replier le groupe",children:je?d.jsx(mo,{className:"w-3.5 h-3.5"}):d.jsx(yi,{className:"w-3.5 h-3.5"})}),je?d.jsx(Ss,{className:"w-3.5 h-3.5 text-hud-muted shrink-0"}):d.jsx(Ea,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),St?d.jsxs("div",{className:"flex items-center gap-1 flex-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:O.name,onChange:at=>J({...O,name:at.target.value}),onKeyDown:at=>at.key==="Enter"&&Q(),className:"h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"}),d.jsx("button",{onClick:Q,className:"text-hud-accent hover:text-white",children:d.jsx(Si,{className:"w-3 h-3"})})]}):d.jsx("span",{onDoubleClick:()=>J({id:re.id,type:"group",name:re.name}),className:"text-xs font-semibold text-hud-text truncate cursor-pointer",title:"Double-clic pour renommer",children:re.name}),d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted shrink-0 ml-1",children:["(",Ct.length,")"]})]}),d.jsxs("div",{className:"flex items-center gap-0.5 relative",children:[d.jsx("button",{onClick:()=>{j("family"),W(re.id),Z(`Famille ${l.length+1}`)},className:"w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-accent transition-colors",title:"Créer une famille dans ce groupe",children:d.jsx(Fc,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>$(ce===`grp_${re.id}`?null:`grp_${re.id}`),className:"w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text transition-colors",title:"Options du groupe",children:d.jsx(Sa,{className:"w-3 h-3"})}),ce===`grp_${re.id}`&&d.jsxs("div",{className:"absolute right-0 top-6 z-50 w-36 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5",onMouseLeave:()=>$(null),children:[d.jsxs("button",{onClick:()=>{J({id:re.id,type:"group",name:re.name}),$(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5",children:[d.jsx(go,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Renommer"})]}),d.jsxs("button",{onClick:()=>{v(re.id),$(null)},className:"h-6 px-2 rounded hover:bg-hud-error/20 hover:text-hud-error text-left text-hud-muted flex items-center gap-1.5",children:[d.jsx(bs,{className:"w-3 h-3"}),d.jsx("span",{children:"Supprimer"})]})]})]})]}),!je&&d.jsxs("div",{className:"pl-3.5 pr-1 py-1 space-y-1 border-t border-hud-border/40",children:[it.map(at=>be(at,!0)),lt.map(at=>Ge(at,"group")),it.length===0&&lt.length===0&&d.jsx("div",{className:"py-1 text-[10px] text-hud-muted/60 italic pl-2",children:"Dossier vide"})]})]},re.id)}),Te.map(re=>be(re,!1)),Se.length>0&&d.jsxs("div",{className:"pt-1",children:[d.jsxs("div",{className:"px-1.5 pb-1 text-[9px] font-bold uppercase tracking-wider text-hud-muted/80",children:["Lumières non groupées (",Se.length,")"]}),d.jsx("div",{className:"space-y-0.5",children:Se.map(re=>Ge(re,"root"))})]})]})]});function be(re,je){const it=!!c[`fam_${re.id}`],lt=s.filter(at=>X(at,re.id,re.name)),Ct=A===re.id,St=(O==null?void 0:O.id)===re.id;return d.jsxs("div",{className:`rounded border transition-colors ${Ct?"border-hud-accent/60 bg-hud-accent/10":"border-hud-border/50 bg-hud-surface/40 hover:bg-hud-surface/70"}`,children:[d.jsxs("div",{className:"h-6 px-1.5 flex items-center justify-between gap-1",children:[d.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[d.jsx("button",{onClick:at=>{at.stopPropagation(),h(`fam_${re.id}`)},className:"w-3.5 h-3.5 flex items-center justify-center text-hud-muted hover:text-hud-text",title:it?"Déplier la famille":"Replier la famille",children:it?d.jsx(mo,{className:"w-3 h-3"}):d.jsx(yi,{className:"w-3 h-3"})}),d.jsx(Kt,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),St?d.jsxs("div",{className:"flex items-center gap-1 flex-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:O.name,onChange:at=>J({...O,name:at.target.value}),onKeyDown:at=>at.key==="Enter"&&Q(),className:"h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"}),d.jsx("button",{onClick:Q,className:"text-hud-accent hover:text-white",children:d.jsx(Si,{className:"w-3 h-3"})})]}):d.jsx("span",{onClick:()=>U(Ct?null:re.id),onDoubleClick:()=>J({id:re.id,type:"family",name:re.name}),className:"text-xs font-semibold text-hud-text hover:text-hud-accent truncate cursor-pointer",title:"Cliquer pour inspecter et synchroniser cette famille (Double-clic pour renommer)",children:re.name}),d.jsxs("span",{className:"text-[9px] font-mono text-hud-accent shrink-0 ml-0.5",children:["(",lt.length,")"]})]}),d.jsxs("div",{className:"flex items-center gap-0.5 relative",children:[d.jsx("button",{onClick:()=>$(ce===`fam_${re.id}`?null:`fam_${re.id}`),className:"w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text",title:"Options de la famille",children:d.jsx(Sa,{className:"w-3 h-3"})}),ce===`fam_${re.id}`&&d.jsxs("div",{className:"absolute right-0 top-6 z-50 w-44 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5",onMouseLeave:()=>$(null),children:[d.jsxs("button",{onClick:()=>{U(re.id),$(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-accent flex items-center gap-1.5",children:[d.jsx(Kt,{className:"w-3 h-3"}),d.jsx("span",{children:"Inspecter / Déplacer"})]}),d.jsxs("button",{onClick:()=>{J({id:re.id,type:"family",name:re.name}),$(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5",children:[d.jsx(go,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Renommer"})]}),d.jsx("div",{className:"border-t border-hud-border my-0.5"}),d.jsx("span",{className:"text-[9px] uppercase font-bold text-hud-muted px-1.5 py-0.5",children:"Déplacer vers :"}),je&&d.jsxs("button",{onClick:()=>{w(re.id,null),$(null)},className:"h-5 px-2 rounded hover:bg-hud-surface text-left text-hud-muted hover:text-hud-text flex items-center gap-1",children:[d.jsx(dx,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Racine (sans groupe)"})]}),o.filter(at=>at.id!==re.groupId).map(at=>d.jsxs("button",{onClick:()=>{w(re.id,at.id),$(null)},className:"h-5 px-2 rounded hover:bg-hud-surface text-left text-hud-muted hover:text-hud-text flex items-center gap-1 truncate",children:[d.jsx(Ss,{className:"w-2.5 h-2.5 shrink-0"}),d.jsx("span",{className:"truncate",children:at.name})]},at.id)),d.jsx("div",{className:"border-t border-hud-border my-0.5"}),d.jsxs("button",{onClick:()=>{x(re.id),$(null)},className:"h-6 px-2 rounded hover:bg-hud-error/20 hover:text-hud-error text-left text-hud-muted flex items-center gap-1.5",children:[d.jsx(uo,{className:"w-3 h-3"}),d.jsx("span",{children:"Dissoudre famille"})]})]})]})]}),!it&&d.jsxs("div",{className:"pl-3.5 pr-1 py-1 space-y-0.5 border-t border-hud-border/30",children:[lt.map(at=>Ge(at,"family")),lt.length===0&&d.jsx("div",{className:"py-1 text-[10px] text-hud-muted/60 italic pl-1",children:"Aucune lumière dans cette famille"})]})]},re.id)}function Ge(re,je){const it=re.id===e,lt=N.includes(re.id),Ct=po(re.rgb.r,re.rgb.g,re.rgb.b);return d.jsxs("div",{onClick:()=>t(re.id),className:`group h-6 px-1.5 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${it?"bg-hud-surface text-hud-text border-l-2 border-l-hud-accent shadow-sm":lt?"bg-hud-surface/90 text-hud-text":"text-hud-muted hover:text-hud-text hover:bg-hud-surface/60"}`,children:[d.jsx("input",{type:"checkbox",checked:lt,onChange:St=>{St.stopPropagation(),L(re.id)},className:"w-3 h-3 rounded bg-hud-bg border border-hud-border accent-hud-accent cursor-pointer shrink-0"}),d.jsx("div",{className:"w-2.5 h-2.5 rounded-sm border border-hud-border shrink-0 shadow-sm",style:{backgroundColor:Ct}}),d.jsx("span",{className:"text-[11px] truncate flex-1 font-medium text-hud-text",children:re.label||re.model}),d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted shrink-0",children:[re.distance.toFixed(1),"m"]}),je==="family"&&d.jsx("button",{onClick:St=>{St.stopPropagation(),b(re.id,null)},title:"Retirer cette lumière de la famille",className:"w-4 h-4 hidden group-hover:flex items-center justify-center rounded text-hud-muted hover:text-hud-accent hover:bg-hud-bg transition-colors shrink-0",children:d.jsx(uo,{className:"w-2.5 h-2.5"})}),je==="group"&&d.jsx("button",{onClick:St=>{St.stopPropagation(),T(re.id,null)},title:"Retirer cette lumière du groupe",className:"w-4 h-4 hidden group-hover:flex items-center justify-center rounded text-hud-muted hover:text-hud-error hover:bg-hud-bg transition-colors shrink-0",children:d.jsx(uo,{className:"w-2.5 h-2.5"})}),it&&d.jsx("button",{onClick:St=>{St.stopPropagation(),r()},title:"Supprimer ce spot (Suppr)",className:"w-4 h-4 flex items-center justify-center rounded text-hud-muted hover:text-hud-error hover:bg-hud-bg transition-colors shrink-0",children:d.jsx(bs,{className:"w-2.5 h-2.5"})})]},re.id)}},$E=()=>{const{hasSelectedProp:s,selectedLightId:e,nearbyLights:t,availableProps:r,propIndex:o,intensity:l,radius:c,renderDistance:h,textureVariation:f,collision:p,castShadow:v,shape:S,shapeParam:y,invertDirection:x,nativeLight:w,coords:T,heading:b,rotation:_,transformPanelOpen:A,setIntensity:U,setRadius:N,setRenderDistance:L,setTextureVariation:F,toggleCollision:M,toggleCastShadow:P,duplicateSelectedLight:j,setShape:k,setShapeParam:W,toggleInvertDirection:V,toggleNativeLight:Z,updateTransform:O,setTransformPanelOpen:J,requestGroundSnap:ce,requestSave:$,requestCancel:z,deleteSelectedLight:G,deselectProp:X,toggleCatalog:I,attachedInfo:K,requestAttachNearestVehicle:me,requestAttachPed:Q,requestAttachRaycast:he,requestDetach:Se,selectedGroupId:Te,setSelectedGroupId:be,selectedFamilyId:Ge,setSelectedFamilyId:ft,applyToFamily:re,setApplyToFamily:je,families:it,groups:lt,getCurrentLightFamily:Ct,saveCurrentFamily:St,deleteFamily:at,getCurrentLightGroup:Lt}=sn(),an=r[o]||{model:"prop_worklight_02a",label:"Spot Halogène Double"},wt=(D,E,se,Me)=>{const _e=Math.max(0,Math.min(100,(D-E)/(se-E)*100));return{background:`linear-gradient(to right, ${Me} 0%, ${Me} ${_e}%, #252A31 ${_e}%, #252A31 100%)`}},Nt=Ct(),Wt=Nt?it.find(D=>D.id===Nt):null,un=Wt?Wt.name:Nt,ee=Nt?t.filter(D=>D.familyId===Nt||D.group===Nt&&!D.familyId).length:0,Jt=Lt(),At=Jt?lt.find(D=>D.id===Jt):null,pt=At?At.name:Jt,we=Ge||Te,Ut=we?it.find(D=>D.id===we):null,Ve=Ut?Ut.name:we,ct=we?t.filter(D=>D.familyId===we||D.group===we&&!D.familyId):[];return d.jsx("aside",{role:"dialog","aria-label":"Inspecteur de lumière",className:"fixed right-4 top-3 z-40 w-80 bg-hud-panel border border-hud-border rounded shadow-md p-3 select-none pointer-events-auto flex flex-col gap-2.5 max-h-[94vh] overflow-y-auto",children:we?d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-hud-border",children:[d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx(Kt,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),d.jsxs("span",{className:"text-xs font-bold text-hud-text truncate block",children:["Famille : ",Ve]})]}),d.jsxs("span",{className:"text-[10px] text-hud-muted font-mono block truncate mt-0.5",children:[ct.length," projecteurs synchronisés"]})]}),d.jsx("button",{onClick:()=>{ft(null),be(null)},className:"px-2 h-6 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-muted hover:text-hud-text text-[11px] transition-colors",children:"Quitter"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"pb-1 mb-1.5 border-b border-hud-border flex items-center justify-between",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Couleur synchronisée"}),d.jsx("span",{className:"text-[9px] font-mono text-hud-accent",children:"Tous les spots"})]}),d.jsx(sx,{})]}),d.jsxs("div",{className:"pt-1 border-t border-hud-border",children:[d.jsx("div",{className:"pb-1 mb-2 border-b border-hud-border",children:d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Paramètres Lumineux du Groupe"})}),d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-hud-muted text-[10px] uppercase font-bold tracking-wider block mb-1.5",children:"Forme de la Lumière"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1",children:[d.jsxs("button",{onClick:()=>k("cone"),className:`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${S==="cone"?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Faisceau Conique (Spot directionnel avec angle réglable)",children:[d.jsx(Zm,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Conique"})]}),d.jsxs("button",{onClick:()=>k("sphere"),className:`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${S==="sphere"?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Sphérique (Omnidirectionnel 360°)",children:[d.jsx(Ym,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Sphérique"})]}),d.jsxs("button",{onClick:()=>k("box"),className:`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${S==="box"?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Volumétrique / Boîte (Éclairage de zone)",children:[d.jsx(Ui,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Cubique"})]})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:S==="cone"?"Angle du Faisceau (Ouverture)":S==="sphere"?"Multiplicateur de Rayon Sphère":"Étirement Volumétrique"}),d.jsx("span",{className:"font-mono text-hud-text font-medium text-[11px]",children:S==="cone"?`${y.toFixed(0)}°`:`${y.toFixed(1)}x`})]}),d.jsx("input",{type:"range",min:S==="cone"?"15":"0.2",max:S==="cone"?"120":"3.0",step:S==="cone"?"1":"0.1",value:y,onChange:D=>W(parseFloat(D.target.value)),style:wt(y,S==="cone"?15:.2,S==="cone"?120:3,"#E58A32"),className:"w-full h-1.5 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:"Puissance (Intensité)"}),d.jsx("span",{className:"font-mono text-hud-text font-medium text-[11px]",children:l.toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.5",max:"50.0",step:"0.5",value:l,onChange:D=>U(parseFloat(D.target.value)),style:wt(l,.5,50,"#E58A32"),className:"w-full h-1.5 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:"Portée (Rayon)"}),d.jsxs("span",{className:"font-mono text-hud-text font-medium text-[11px]",children:[c.toFixed(1),"m"]})]}),d.jsx("input",{type:"range",min:"2.0",max:"60.0",step:"1.0",value:c,onChange:D=>N(parseFloat(D.target.value)),style:wt(c,2,60,"#E58A32"),className:"w-full h-1.5 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-1.5 pt-1",children:[d.jsxs("button",{onClick:V,className:`h-7 px-2 rounded flex items-center justify-center gap-1.5 border text-[11px] font-medium transition-colors ${x?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Inverser le sens du faisceau lumineux à 180° pour tout le groupe",children:[d.jsx(nh,{className:"w-3 h-3"}),d.jsx("span",{children:"Inverser (180°)"})]}),d.jsxs("button",{onClick:Z,className:`h-7 px-2 rounded flex items-center justify-center gap-1.5 border text-[11px] font-medium transition-colors ${w?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Activer ou éteindre la lumière native par défaut des props du groupe",children:[d.jsx(Qm,{className:"w-3 h-3"}),d.jsxs("span",{children:["Lampe GTA : ",w?"ON":"OFF"]})]})]})]})]}),d.jsxs("div",{className:"pt-1 border-t border-hud-border",children:[d.jsxs("button",{onClick:()=>J(!A),className:"w-full flex items-center justify-between pb-1 text-left",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Position & Alignement du Groupe"}),A?d.jsx($m,{className:"w-3.5 h-3.5 text-hud-muted"}):d.jsx(yi,{className:"w-3.5 h-3.5 text-hud-muted"})]}),A&&d.jsxs("div",{className:"space-y-2 mt-2 pt-2 border-t border-hud-border/50",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1",children:"Position (m)"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-center",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisX block mb-0.5",children:"X"}),d.jsx("input",{type:"number",step:"0.05",value:T.x.toFixed(2),onChange:D=>O({x:parseFloat(D.target.value)||T.x}),className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisY block mb-0.5",children:"Y"}),d.jsx("input",{type:"number",step:"0.05",value:T.y.toFixed(2),onChange:D=>O({y:parseFloat(D.target.value)||T.y}),className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisZ block mb-0.5",children:"Z"}),d.jsx("input",{type:"number",step:"0.05",value:T.z.toFixed(2),onChange:D=>O({z:parseFloat(D.target.value)||T.z}),className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]})]})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1",children:"Rotation (°)"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-center",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisX block mb-0.5",children:"X"}),d.jsx("input",{type:"number",step:"1",value:parseFloat(((_==null?void 0:_.x)??0).toFixed(1)),onChange:D=>{const E=parseFloat(D.target.value);isNaN(E)||O({},void 0,{..._||{x:0,y:0,z:b},x:E})},className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisY block mb-0.5",children:"Y"}),d.jsx("input",{type:"number",step:"1",value:parseFloat(((_==null?void 0:_.y)??0).toFixed(1)),onChange:D=>{const E=parseFloat(D.target.value);isNaN(E)||O({},void 0,{..._||{x:0,y:0,z:b},y:E})},className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisZ block mb-0.5",children:"Z"}),d.jsx("input",{type:"number",step:"1",value:parseFloat((((_==null?void 0:_.z)??b)%360).toFixed(1)),onChange:D=>{const E=parseFloat(D.target.value);isNaN(E)||O({},E,{..._||{x:0,y:0,z:b},z:E})},className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]})]})]}),d.jsxs("button",{onClick:ce,title:"Plaquer tout le groupe au sol (G)",className:"w-full h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs text-hud-text transition-colors",children:[d.jsx(Xm,{className:"w-3.5 h-3.5 text-hud-muted"}),d.jsx("span",{children:"Plaquer le groupe au sol"}),d.jsx("kbd",{className:"text-[9px] font-mono text-hud-muted ml-0.5 px-1 py-0.2 bg-hud-bg rounded border border-hud-border/70",children:"G"})]})]})]}),d.jsxs("footer",{className:"grid grid-cols-2 gap-1.5 pt-2 border-t border-hud-border",children:[d.jsxs("button",{onClick:()=>at(we),className:"h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-error/20 hover:text-hud-error border border-hud-border text-hud-muted text-xs font-medium transition-colors",children:[d.jsx(uo,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Dissoudre"})]}),d.jsxs("button",{onClick:St,className:"h-7 flex items-center justify-center gap-1.5 rounded bg-hud-accent hover:bg-hud-accentHover text-white text-xs font-semibold uppercase tracking-wider transition-colors",children:[d.jsx(Si,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Sauvegarder"})]})]}),d.jsx(th,{})]}):s?d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-hud-border",children:[d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("span",{className:"text-xs font-bold text-hud-text truncate block",children:an.label}),d.jsx("span",{className:"text-[10px] text-hud-muted font-mono block truncate",children:e?`ID: ${e}`:an.model==="none"?"Source libre (sans prop)":"Nouveau placement"})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:j,title:"Dupliquer instantanément (LShift)",className:"w-6 h-6 flex items-center justify-center rounded text-hud-muted hover:text-hud-accent hover:bg-hud-surface transition-colors",children:d.jsx(Dc,{className:"w-3.5 h-3.5"})}),e&&d.jsx("button",{onClick:G,title:"Supprimer cette lumière (Touche Suppr)",className:"w-6 h-6 flex items-center justify-center rounded text-hud-muted hover:text-hud-error hover:bg-hud-surface transition-colors",children:d.jsx(bs,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:X,title:"Désélectionner",className:"px-2 h-6 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-muted hover:text-hud-text text-[11px] transition-colors",children:"Désélectionner"})]})]}),(Nt||Jt)&&d.jsxs("div",{className:"p-2 rounded bg-hud-surface/70 border border-hud-border flex flex-col gap-1.5 text-xs",children:[Nt&&d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[d.jsxs("span",{onClick:()=>ft(Nt),className:"text-[10px] font-bold text-hud-accent bg-hud-accent/15 px-1.5 py-0.5 rounded border border-hud-accent/30 shrink-0 cursor-pointer hover:bg-hud-accent/25 transition-colors flex items-center gap-1",title:"Ouvrir l'inspecteur de cette famille",children:[d.jsx(Kt,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:un})]}),d.jsxs("span",{className:"text-[10px] text-hud-muted truncate",children:["(",ee," spot",ee>1?"s":"",")"]})]}),d.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-[11px] text-hud-text hover:text-white shrink-0",children:[d.jsx("input",{type:"checkbox",checked:re,onChange:D=>je(D.target.checked),className:"w-3.5 h-3.5 rounded bg-hud-bg border border-hud-border accent-hud-accent cursor-pointer"}),d.jsx("span",{children:"Synchroniser famille"})]})]}),Jt&&d.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-hud-muted",children:[d.jsx(Ea,{className:"w-3 h-3 text-hud-muted"}),d.jsxs("span",{children:["Dossier : ",d.jsx("strong",{className:"text-hud-text",children:pt})]})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"pb-1 mb-1.5 border-b border-hud-border",children:d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Couleur de la lumière"})}),d.jsx(sx,{})]}),d.jsxs("div",{className:"pt-1 border-t border-hud-border",children:[d.jsx("div",{className:"pb-1 mb-2 border-b border-hud-border",children:d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Paramètres Lumineux"})}),d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-hud-muted text-[10px] uppercase font-bold tracking-wider block mb-1.5",children:"Forme de la Lumière"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1",children:[d.jsxs("button",{onClick:()=>k("cone"),className:`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${S==="cone"?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Faisceau Conique (Spot directionnel avec angle réglable)",children:[d.jsx(Zm,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Conique"})]}),d.jsxs("button",{onClick:()=>k("sphere"),className:`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${S==="sphere"?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Sphérique (Omnidirectionnel 360°)",children:[d.jsx(Ym,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Sphérique"})]}),d.jsxs("button",{onClick:()=>k("box"),className:`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${S==="box"?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Volumétrique / Boîte (Éclairage de zone)",children:[d.jsx(Ui,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Cubique"})]})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:S==="cone"?"Angle du Faisceau (Ouverture)":S==="sphere"?"Multiplicateur de Rayon Sphère":"Étirement Volumétrique"}),d.jsx("span",{className:"font-mono text-hud-text font-medium text-[11px]",children:S==="cone"?`${y.toFixed(0)}°`:`${y.toFixed(1)}x`})]}),d.jsx("input",{type:"range",min:S==="cone"?"15":"0.2",max:S==="cone"?"120":"3.0",step:S==="cone"?"1":"0.1",value:y,onChange:D=>W(parseFloat(D.target.value)),style:wt(y,S==="cone"?15:.2,S==="cone"?120:3,"#E58A32"),className:"w-full h-1.5 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:"Puissance (Intensité)"}),d.jsx("span",{className:"font-mono text-hud-text font-medium text-[11px]",children:l.toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.5",max:"50.0",step:"0.5",value:l,onChange:D=>U(parseFloat(D.target.value)),style:wt(l,.5,50,"#E58A32"),className:"w-full h-1.5 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:"Portée (Rayon)"}),d.jsxs("span",{className:"font-mono text-hud-text font-medium text-[11px]",children:[c.toFixed(1),"m"]})]}),d.jsx("input",{type:"range",min:"2.0",max:"60.0",step:"1.0",value:c,onChange:D=>N(parseFloat(D.target.value)),style:wt(c,2,60,"#E58A32"),className:"w-full h-1.5 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:[d.jsxs("button",{onClick:V,className:`h-7 px-1.5 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${x?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Inverser le sens du faisceau lumineux à 180°",children:[d.jsx(nh,{className:"w-3 h-3"}),d.jsx("span",{children:"Inverser"})]}),d.jsxs("button",{onClick:Z,className:`h-7 px-1.5 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${w?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Activer ou éteindre la lumière native par défaut du modèle 3D GTA",children:[d.jsx(Qm,{className:"w-3 h-3"}),d.jsx("span",{children:"Lampe GTA"})]}),d.jsxs("button",{onClick:P,className:`h-7 px-1.5 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${v?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Bloquer le faisceau par les obstacles et projeter des ombres dynamiques réelles (GTA V)",children:[d.jsx(px,{className:"w-3 h-3"}),d.jsx("span",{children:"Ombres"})]})]}),d.jsxs("div",{className:"pt-2 mt-1 border-t border-hud-border/50 space-y-2",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[d.jsx("span",{className:"text-hud-muted text-[11px]",children:"Distance d'affichage (Render Distance)"}),d.jsxs("span",{className:"font-mono text-hud-accent text-xs",children:[h.toFixed(0),"m"]})]}),d.jsx("input",{type:"range",min:"15",max:"200",step:"5",value:h,onChange:D=>L(parseFloat(D.target.value)),style:wt(h,15,200,"#E58A32"),className:"w-full h-1 rounded-sm appearance-none cursor-pointer"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[d.jsxs("div",{className:"flex items-center justify-between h-7 px-2 rounded bg-hud-surface border border-hud-border text-[11px]",children:[d.jsx("span",{className:"text-hud-muted",children:"Texture :"}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:()=>F(Math.max(0,f-1)),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text font-bold",children:"-"}),d.jsx("span",{className:"font-mono text-hud-accent text-xs w-4 text-center",children:f}),d.jsx("button",{onClick:()=>F(f+1),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text font-bold",children:"+"})]})]}),d.jsxs("button",{onClick:M,className:`h-7 px-2 rounded flex items-center justify-center gap-1.5 border text-[11px] font-medium transition-colors ${p?"bg-hud-accent/20 border-hud-accent text-hud-accent":"bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover"}`,title:"Activer ou désactiver la collision physique avec le monde et les joueurs",children:[d.jsx(Y_,{className:"w-3 h-3"}),d.jsxs("span",{children:["Collision : ",p?"ON":"OFF"]})]})]})]})]})]}),d.jsxs("div",{className:"pt-1 border-t border-hud-border",children:[d.jsxs("button",{onClick:()=>J(!A),className:"w-full flex items-center justify-between pb-1 text-left",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Position & Alignement"}),A?d.jsx($m,{className:"w-3.5 h-3.5 text-hud-muted"}):d.jsx(yi,{className:"w-3.5 h-3.5 text-hud-muted"})]}),A&&d.jsxs("div",{className:"space-y-2 mt-2 pt-2 border-t border-hud-border/50",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1",children:"Position (m)"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-center",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisX block mb-0.5",children:"X"}),d.jsx("input",{type:"number",step:"0.05",value:T.x.toFixed(2),onChange:D=>O({x:parseFloat(D.target.value)||T.x}),className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisY block mb-0.5",children:"Y"}),d.jsx("input",{type:"number",step:"0.05",value:T.y.toFixed(2),onChange:D=>O({y:parseFloat(D.target.value)||T.y}),className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisZ block mb-0.5",children:"Z"}),d.jsx("input",{type:"number",step:"0.05",value:T.z.toFixed(2),onChange:D=>O({z:parseFloat(D.target.value)||T.z}),className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]})]})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1",children:"Rotation (°)"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-center",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisX block mb-0.5",children:"X"}),d.jsx("input",{type:"number",step:"1",value:parseFloat(((_==null?void 0:_.x)??0).toFixed(1)),onChange:D=>{const E=parseFloat(D.target.value);isNaN(E)||O({},void 0,{..._||{x:0,y:0,z:b},x:E})},className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisY block mb-0.5",children:"Y"}),d.jsx("input",{type:"number",step:"1",value:parseFloat(((_==null?void 0:_.y)??0).toFixed(1)),onChange:D=>{const E=parseFloat(D.target.value);isNaN(E)||O({},void 0,{..._||{x:0,y:0,z:b},y:E})},className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] font-bold text-hud-axisZ block mb-0.5",children:"Z"}),d.jsx("input",{type:"number",step:"1",value:parseFloat((((_==null?void 0:_.z)??b)%360).toFixed(1)),onChange:D=>{const E=parseFloat(D.target.value);isNaN(E)||O({},E,{..._||{x:0,y:0,z:b},z:E})},className:"w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"})]})]})]}),d.jsxs("button",{onClick:ce,title:"Plaquer au sol (G)",className:"w-full h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs text-hud-text transition-colors",children:[d.jsx(Xm,{className:"w-3.5 h-3.5 text-hud-muted"}),d.jsx("span",{children:"Plaquer au sol"}),d.jsx("kbd",{className:"text-[9px] font-mono text-hud-muted ml-0.5 px-1 py-0.2 bg-hud-bg rounded border border-hud-border/70",children:"G"})]})]})]}),d.jsxs("div",{className:"pt-1 border-t border-hud-border",children:[d.jsxs("div",{className:"pb-1 mb-1.5 border-b border-hud-border flex items-center justify-between",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Fixation / Attachement"}),(K==null?void 0:K.isAttached)&&d.jsx("span",{className:"text-[9px] font-mono text-hud-success font-semibold px-1 py-0.2 bg-hud-surface rounded border border-hud-border",children:"Attaché"})]}),K!=null&&K.isAttached?d.jsxs("div",{className:"space-y-1.5",children:[d.jsx("div",{className:"flex items-center justify-between text-xs px-2 py-1.5 bg-hud-surface border border-hud-border rounded",children:d.jsxs("div",{className:"flex items-center gap-1.5 min-w-0 flex-1",children:[K.type==="vehicle"?d.jsx(qm,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}):K.type==="ped"?d.jsx(Jm,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}):d.jsx(F_,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),d.jsx("span",{className:"text-[11px] font-medium text-hud-text truncate",children:K.name||"Entité cible"})]})}),d.jsxs("button",{onClick:Se,className:"w-full h-7 rounded bg-hud-surface hover:bg-hud-error/20 hover:text-hud-error hover:border-hud-error/50 border border-hud-border text-xs text-hud-muted transition-colors flex items-center justify-center gap-1.5",children:[d.jsx(ny,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Détacher de l'entité"})]})]}):d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[d.jsxs("button",{onClick:me,title:"Fixer au véhicule le plus proche",className:"h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-[11px] font-medium text-hud-text transition-colors flex items-center justify-center gap-1.5",children:[d.jsx(qm,{className:"w-3.5 h-3.5 text-hud-muted"}),d.jsx("span",{children:"Véhicule Proche"})]}),d.jsxs("button",{onClick:Q,title:"Fixer à mon personnage (Ped)",className:"h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-[11px] font-medium text-hud-text transition-colors flex items-center justify-center gap-1.5",children:[d.jsx(Jm,{className:"w-3.5 h-3.5 text-hud-muted"}),d.jsx("span",{children:"Mon Ped"})]})]}),d.jsxs("button",{onClick:he,title:"Viser une entité (véhicule, ped, prop) avec le centre de la caméra",className:"w-full h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-[11px] font-medium text-hud-text transition-colors flex items-center justify-center gap-1.5",children:[d.jsx(S_,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:"Viser une Entité (Raycast)"})]})]})]}),d.jsxs("footer",{className:"grid grid-cols-2 gap-1.5 pt-2 border-t border-hud-border",children:[d.jsxs("button",{onClick:z,className:"h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-text text-xs font-medium transition-colors",children:[d.jsx(xr,{className:"w-3.5 h-3.5 text-hud-muted"}),d.jsx("span",{children:"Fermer"})]}),d.jsxs("button",{onClick:$,className:"h-7 flex items-center justify-center gap-1.5 rounded bg-hud-accent hover:bg-hud-accentHover text-white text-xs font-semibold uppercase tracking-wider transition-colors",children:[d.jsx(Si,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Sauvegarder"})]})]}),d.jsx(th,{})]}):d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"pb-2 border-b border-hud-border",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted block",children:"Inspecteur"}),d.jsx("p",{className:"text-xs text-hud-text mt-0.5",children:"Aucun spot sélectionné"}),d.jsx("p",{className:"text-[11px] text-hud-muted mt-1 leading-normal",children:"Sélectionnez une lumière dans la liste ci-dessous, ouvrez le catalogue ou groupez plusieurs lumières pour les ajuster d'un coup."}),d.jsxs("button",{onClick:I,className:"w-full h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs font-medium text-hud-text transition-colors mt-2",children:[d.jsx(Ea,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:"Ouvrir Catalogue [C]"})]})]}),d.jsx(th,{})]})})},YE=()=>{const{availableProps:s,propIndex:e,catalogOpen:t,selectedCategory:r,searchQuery:o,setCatalogOpen:l,toggleCatalog:c,setSelectedCategory:h,setSearchQuery:f,spawnNewProp:p}=sn(),v=Xe.useMemo(()=>{const y=new Set;return s.forEach(x=>{x.category&&y.add(x.category)}),["Tous",...Array.from(y)]},[s]),S=Xe.useMemo(()=>s.filter(y=>{const x=r==="Tous"||y.category===r,w=o.trim()===""||y.label.toLowerCase().includes(o.toLowerCase())||y.model.toLowerCase().includes(o.toLowerCase());return x&&w}),[s,r,o]);return d.jsx("nav",{"aria-label":"Navigateur de props",className:"fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-auto",children:t?d.jsxs("div",{className:"w-[84vw] max-w-4xl bg-hud-panel border border-hud-border rounded shadow-lg p-2.5 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-hud-border",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-muted",children:"Navigateur d'assets"}),d.jsxs("span",{className:"text-[10px] text-hud-muted font-mono",children:["(",S.length,")"]})]}),d.jsxs("div",{className:"relative w-48",children:[d.jsx(hx,{className:"w-3 h-3 text-hud-muted absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"}),d.jsx("input",{type:"text",placeholder:"Filtrer par nom...",value:o,onChange:y=>f(y.target.value),className:"w-full h-6 pl-7 pr-6 bg-hud-surface border border-hud-border rounded text-xs text-hud-text placeholder:text-hud-muted/70 focus:outline-none focus:border-hud-accent"}),o&&d.jsx("button",{onClick:()=>f(""),className:"absolute right-1.5 top-1/2 -translate-y-1/2 text-hud-muted hover:text-hud-text",children:d.jsx(xr,{className:"w-3 h-3"})})]}),d.jsx("div",{className:"flex items-center gap-1 overflow-x-auto",children:v.map(y=>d.jsx("button",{onClick:()=>h(y),className:`px-2 py-0.5 rounded text-xs font-medium transition-colors ${r===y?"bg-hud-surface text-hud-text border border-hud-borderLight":"text-hud-muted hover:text-hud-text hover:bg-hud-surface/40"}`,children:y},y))}),d.jsxs("button",{onClick:()=>l(!1),className:"flex items-center gap-1 px-1.5 py-0.5 rounded text-hud-muted hover:text-hud-text hover:bg-hud-surface text-xs transition-colors ml-auto",children:[d.jsx("span",{children:"Réduire"}),d.jsx(yi,{className:"w-3.5 h-3.5"})]})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 max-h-44 overflow-y-auto pr-0.5",children:S.map(y=>{const x=s.findIndex(T=>T.model===y.model),w=x===e;return d.jsxs("button",{onClick:()=>p(x),className:`group flex flex-col p-2 rounded text-left transition-colors border ${w?"bg-hud-surface border-hud-accent":"bg-hud-surface/60 hover:bg-hud-surface border-transparent hover:border-hud-border"}`,children:[d.jsx("div",{className:"w-7 h-7 rounded-sm bg-hud-bg/80 border border-hud-border flex items-center justify-center text-hud-muted group-hover:text-hud-text mb-1.5",children:y.model==="none"?d.jsx(Mo,{className:"w-3.5 h-3.5 text-hud-accent"}):d.jsx(Ui,{className:"w-3.5 h-3.5"})}),d.jsx("span",{className:"text-xs font-medium text-hud-text truncate w-full",children:y.label}),d.jsx("span",{className:"text-[10px] text-hud-muted font-mono truncate w-full",children:y.model==="none"?"Sans modèle 3D":y.model})]},y.model)})})]}):d.jsxs("button",{onClick:c,title:"Ouvrir le catalogue de modèles (Touche C)",className:"h-7 px-3 rounded bg-hud-panel border border-hud-border shadow-md flex items-center gap-2 text-xs font-medium text-hud-text hover:bg-hud-surface transition-colors",children:[d.jsx(Ea,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:"Catalogue Props"}),d.jsx("kbd",{className:"text-[9px] font-mono text-hud-muted px-1 py-0.2 bg-hud-bg rounded border border-hud-border/70",children:"C"})]})})},ZE=()=>d.jsxs(d.Fragment,{children:[d.jsx($E,{}),d.jsx(YE,{})]}),KE=fo.memo(({item:s,onSpawn:e,onCaptureSingle:t,hasThumbnail:r,thumbVersion:o})=>{const[l,c]=Xe.useState(!1),[h,f]=Xe.useState(!1),p=y=>{var x;y.stopPropagation(),(x=navigator.clipboard)==null||x.writeText(s.model),f(!0),setTimeout(()=>f(!1),1500)},v=y=>{y.stopPropagation(),c(!1),t(s.model)},S=`thumbnails/${s.model}.webp${o?`?v=${o}`:""}`;return d.jsxs("div",{onClick:()=>e(s.model),className:"group relative p-2 rounded-lg bg-hud-surface/40 hover:bg-hud-surface border border-hud-border/70 hover:border-hud-accent/70 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md select-none",children:[d.jsxs("div",{className:"w-full h-28 rounded bg-hud-bg/80 border border-hud-border/50 overflow-hidden flex items-center justify-center relative mb-2",children:[!l&&r?d.jsx("img",{src:S,alt:s.label,onError:()=>c(!0),className:"w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-200",loading:"lazy",decoding:"async"}):d.jsxs("div",{className:"flex flex-col items-center justify-center text-hud-muted/50 p-2 text-center group-hover:text-hud-muted transition-colors",children:[d.jsx(Ui,{className:"w-8 h-8 stroke-[1.2] mb-1"}),d.jsx("span",{className:"text-[9px] font-mono tracking-tight opacity-75",children:"Sans miniature"})]}),d.jsx("span",{className:"absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-hud-panel/90 backdrop-blur-sm border border-hud-border/70 text-[9px] font-semibold text-hud-text tracking-tight shadow-sm",children:s.category}),d.jsx("button",{onClick:v,className:"absolute bottom-1.5 right-1.5 w-6 h-6 rounded bg-hud-panel/90 hover:bg-hud-accent text-hud-muted hover:text-white border border-hud-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm",title:"Capturer / Régénérer la miniature GTA V de ce prop",children:d.jsx(cx,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"space-y-0.5 min-w-0 pb-1",children:[d.jsx("span",{className:"text-xs font-bold text-hud-text truncate block group-hover:text-hud-accent transition-colors",title:s.label,children:s.label}),d.jsxs("div",{className:"flex items-center justify-between gap-1",children:[d.jsx("span",{className:"text-[10px] font-mono text-hud-muted truncate block",title:s.model,children:s.model}),d.jsx("button",{onClick:p,className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text opacity-0 group-hover:opacity-100 transition-opacity shrink-0",title:"Copier le spawn name",children:h?d.jsx(Si,{className:"w-3 h-3 text-green-400"}):d.jsx(Dc,{className:"w-3 h-3"})})]})]}),d.jsxs("div",{className:"pt-1.5 border-t border-hud-border/40 flex items-center justify-between text-[10px]",children:[d.jsx("span",{className:"text-hud-muted/70 font-mono text-[9px]",children:"GTA V"}),d.jsxs("span",{className:"text-hud-accent font-semibold flex items-center gap-0.5 opacity-90 group-hover:opacity-100 transition-opacity",children:[d.jsx(Fc,{className:"w-3 h-3"}),d.jsx("span",{children:"Placer"})]})]})]})}),QE=fo.memo(({item:s,onSpawn:e,onDuplicate:t,onDelete:r,onEdit:o})=>{var v,S,y,x;const[l,c]=Xe.useState(!1),[h,f]=Xe.useState(!1),p=s.thumbnail?s.thumbnail:(S=(v=s.propsData)==null?void 0:v[0])!=null&&S.model?`thumbnails/${s.propsData[0].model}.webp`:null;return d.jsxs("div",{onClick:()=>e(s.id),className:"group relative p-2.5 rounded-xl bg-hud-surface/40 hover:bg-hud-surface/90 border border-hud-border hover:border-amber-500/70 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg select-none",children:[d.jsxs("div",{className:"w-full h-28 rounded-lg bg-hud-bg/80 border border-hud-border/60 overflow-hidden flex items-center justify-center relative mb-2 group-hover:border-amber-500/40 transition-colors",children:[!l&&p?d.jsx("img",{src:p,alt:s.name,onError:()=>c(!0),className:"w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-200",loading:"lazy",decoding:"async"}):d.jsxs("div",{className:"flex flex-col items-center justify-center text-amber-400/60 p-2 text-center",children:[d.jsx(Kt,{className:"w-9 h-9 stroke-[1.4] mb-1"}),d.jsx("span",{className:"text-[9px] font-mono tracking-tight opacity-75",children:"Assemblage"})]}),d.jsxs("span",{className:"absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-hud-panel/90 backdrop-blur-sm border border-amber-500/40 text-[9px] font-semibold text-amber-300 tracking-tight shadow-sm flex items-center gap-1",children:[d.jsx(Mo,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:s.category||"Général"})]}),d.jsxs("span",{className:"absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-hud-panel/90 backdrop-blur-sm border border-hud-border text-[9px] font-mono font-bold text-hud-text shadow-sm flex items-center gap-1",children:[d.jsx(Kt,{className:"w-2.5 h-2.5 text-hud-accent"}),d.jsxs("span",{children:[s.propsCount||((y=s.propsData)==null?void 0:y.length)||0," props"]})]}),d.jsxs("div",{onClick:w=>w.stopPropagation(),className:"absolute bottom-1.5 right-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-hud-panel/95 backdrop-blur-sm p-0.5 rounded border border-hud-border",children:[d.jsx("button",{onClick:()=>o(s),className:"w-5 h-5 rounded hover:bg-hud-surface text-hud-muted hover:text-hud-text flex items-center justify-center transition-colors",title:"Modifier l'assemblage",children:d.jsx(go,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>t(s.id),className:"w-5 h-5 rounded hover:bg-hud-surface text-hud-muted hover:text-hud-accent flex items-center justify-center transition-colors",title:"Dupliquer l'assemblage",children:d.jsx(Dc,{className:"w-3 h-3"})}),h?d.jsx("button",{onClick:()=>r(s.id),className:"px-1.5 h-5 rounded bg-red-600 hover:bg-red-700 text-white text-[9px] font-bold flex items-center justify-center transition-colors animate-pulse",title:"Confirmer la suppression",children:"Supprimer ?"}):d.jsx("button",{onClick:()=>{f(!0),setTimeout(()=>f(!1),3e3)},className:"w-5 h-5 rounded hover:bg-red-500/20 text-hud-muted hover:text-red-400 flex items-center justify-center transition-colors",title:"Supprimer du catalogue",children:d.jsx(bs,{className:"w-3 h-3"})})]})]}),d.jsxs("div",{className:"space-y-1 min-w-0 pb-1",children:[d.jsx("span",{className:"text-xs font-bold text-hud-text truncate block group-hover:text-amber-400 transition-colors",title:s.name,children:s.name}),s.description?d.jsx("p",{className:"text-[10px] text-hud-muted truncate",title:s.description,children:s.description}):d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted/70 block",children:["Composition de ",s.propsCount||((x=s.propsData)==null?void 0:x.length)||0," objets"]})]}),d.jsxs("div",{className:"pt-1.5 border-t border-hud-border/50 flex items-center justify-between text-[10px]",children:[d.jsx("span",{className:"text-hud-muted font-medium text-[9px]",children:"Prêt à placer"}),d.jsxs("span",{className:"text-amber-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform",children:[d.jsx(Fc,{className:"w-3 h-3"}),d.jsx("span",{children:"Placer"})]})]})]})}),JE=["Général","Bar","Salon","Chantier","Bureau","Médical","Stockage","Extérieur"],eT=()=>{const{assemblageModalOpen:s,assemblageModalFamilyId:e,editingAssemblage:t,closeSaveAssemblageModal:r,saveFamilyAsAssemblage:o,updateAssemblageMetadata:l,families:c,props:h}=Mt(),f=c.find(L=>L.id===e),p=Object.values(h).filter(L=>L.familyId===e||L.group===e&&!L.familyId),[v,S]=Xe.useState(""),[y,x]=Xe.useState("Général"),[w,T]=Xe.useState(""),[b,_]=Xe.useState(!1),[A,U]=Xe.useState(!1);if(Xe.useEffect(()=>{t?(S(t.name),x(t.category||"Général"),T(t.description||"")):f&&(S(f.name),x("Général"),T(""))},[t,f,s]),!s)return null;const N=async L=>{if(L.preventDefault(),!!v.trim()){_(!0);try{t&&!e?(await l(t.id,{name:v.trim(),category:y.trim()||"Général",description:w.trim()}),r()):e&&await o({familyId:e,name:v.trim(),category:y.trim()||"Général",description:w.trim(),id:t==null?void 0:t.id})}finally{_(!1)}}};return d.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150",children:d.jsxs("div",{className:"w-full max-w-lg bg-hud-panel border border-hud-border rounded-xl shadow-2xl overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"p-4 border-b border-hud-border flex items-center justify-between bg-hud-surface/40",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400",children:d.jsx(Kt,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsxs("h2",{className:"text-sm font-bold text-hud-text flex items-center gap-2",children:[d.jsx("span",{children:t?"Modifier l'Assemblage":"Enregistrer comme Assemblage (Préfab)"}),d.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[10px] font-semibold border border-amber-500/20",children:[p.length||(t==null?void 0:t.propsCount)||0," props"]})]}),d.jsx("p",{className:"text-[11px] text-hud-muted",children:"Créez un modèle réutilisable à volonté dans le catalogue de props."})]})]}),d.jsx("button",{onClick:r,className:"w-7 h-7 rounded-lg hover:bg-hud-surface text-hud-muted hover:text-hud-text flex items-center justify-center transition-colors",children:d.jsx(xr,{className:"w-4 h-4"})})]}),d.jsxs("form",{onSubmit:N,className:"p-4 space-y-4",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1",children:["Nom de l'assemblage ",d.jsx("span",{className:"text-red-400",children:"*"})]}),d.jsx("input",{type:"text",required:!0,value:v,onChange:L=>S(L.target.value),placeholder:"Ex: Comptoir de Bar Complet, Salon Moderne...",className:"w-full h-8 px-3 bg-hud-surface border border-hud-border rounded-lg text-xs text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-amber-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1",children:"Catégorie personnalisée"}),d.jsx("input",{type:"text",value:y,onChange:L=>x(L.target.value),placeholder:"Ex: Bar, Salon, Chantier...",className:"w-full h-8 px-3 bg-hud-surface border border-hud-border rounded-lg text-xs text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-amber-500 mb-1.5"}),d.jsx("div",{className:"flex flex-wrap gap-1",children:JE.map(L=>d.jsx("button",{type:"button",onClick:()=>x(L),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${y===L?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-hud-surface hover:bg-hud-surface/80 text-hud-muted hover:text-hud-text border border-hud-border"}`,children:L},L))})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1",children:["Description ",d.jsx("span",{className:"text-hud-muted/60 font-normal lowercase",children:"(facultative)"})]}),d.jsx("textarea",{rows:2,value:w,onChange:L=>T(L.target.value),placeholder:"Détails sur la composition, utilisation recommandée...",className:"w-full p-2 bg-hud-surface border border-hud-border rounded-lg text-xs text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-amber-500 resize-none"})]}),p.length>0&&d.jsxs("div",{children:[d.jsxs("span",{className:"block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1.5",children:["Props inclus (",p.length,")"]}),d.jsx("div",{className:"max-h-28 overflow-y-auto space-y-1 p-2 rounded-lg bg-hud-bg/60 border border-hud-border/70 scrollbar-thin scrollbar-thumb-hud-borderLight",children:p.map(L=>d.jsxs("div",{className:"flex items-center justify-between text-xs py-0.5 px-1 rounded hover:bg-hud-surface/60",children:[d.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[d.jsx(Ui,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),d.jsx("span",{className:"font-medium text-hud-text truncate",children:L.label||L.model})]}),d.jsx("span",{className:"font-mono text-[10px] text-hud-muted truncate ml-2",children:L.model})]},L.id))})]}),d.jsxs("div",{className:"p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-[11px] text-amber-200/90 flex items-start gap-2",children:[d.jsx(Mo,{className:"w-4 h-4 text-amber-400 shrink-0 mt-0.5"}),d.jsx("span",{children:"L'enregistrement crée une copie autonome. Votre famille actuelle et ses objets ne seront ni modifiés ni supprimés."})]}),t&&e&&d.jsxs("div",{className:"p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-[11px] text-red-200 flex items-start gap-2",children:[d.jsx($h,{className:"w-4 h-4 text-red-400 shrink-0 mt-0.5"}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("span",{className:"font-semibold block",children:"Remplacement de la composition existante"}),d.jsx("p",{className:"text-[10px] opacity-80",children:"Cette action remplacera les objets sauvegardés dans cet assemblage par la composition actuelle de la famille."}),d.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer pt-1",children:[d.jsx("input",{type:"checkbox",checked:A,onChange:L=>U(L.target.checked),className:"rounded border-hud-border"}),d.jsx("span",{className:"text-[10px] font-bold text-white",children:"Confirmer le remplacement de la composition"})]})]})]}),d.jsxs("div",{className:"pt-2 border-t border-hud-border flex items-center justify-end gap-2",children:[d.jsx("button",{type:"button",onClick:r,className:"px-3 h-8 rounded-lg bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-xs text-hud-muted hover:text-hud-text transition-colors",children:"Annuler"}),d.jsxs("button",{type:"submit",disabled:!!(b||!v.trim()||t&&e&&!A),className:"px-4 h-8 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none text-xs font-bold text-black flex items-center gap-1.5 transition-colors shadow-md",children:[d.jsx(W_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:b?"Enregistrement...":t?"Mettre à jour l'Assemblage":"Enregistrer l'Assemblage"})]})]})]})]})})},tT=()=>{const{catalogOpen:s,categories:e,catalog:t,selectedCategory:r,searchQuery:o,customModelInput:l,nearbyProps:c,selectedPropId:h,selectedProp:f,toastMessage:p,toastType:v,groups:S,families:y,collapsedFolders:x,toggleFolderCollapse:w,createGroup:T,renameGroup:b,deleteGroup:_,createFamily:A,renameFamily:U,deleteFamily:N,moveFamilyToGroup:L,assignMultipleProps:F,selectedFamilyId:M,setSelectedFamilyId:P,multiSelectedIds:j,toggleMultiSelectId:k,selectAllNearby:W,clearMultiSelect:V,setCatalogOpen:Z,setSelectedCategory:O,setSearchQuery:J,setCustomModelInput:ce,selectProp:$,deselectProp:z,spawnProp:G,placeCustomModel:X,updatePropPosition:I,updatePropRotation:K,updatePropProperties:me,exitEditor:Q,existingThumbnails:he,thumbVersions:Se,isGeneratingThumbs:Te,thumbProgress:be,generateThumbs:Ge,generateSingleThumb:ft,cancelThumbs:re,assemblages:je,openSaveAssemblageModal:it,spawnAssemblage:lt,duplicateAssemblage:Ct,deleteAssemblage:St}=Mt(),[at,Lt]=Xe.useState(!1),[an,wt]=Xe.useState(!1),[Nt,Wt]=Xe.useState(null),[un,ee]=Xe.useState(null),[Jt,At]=Xe.useState(""),[pt,we]=Xe.useState(null),[Ut,Ve]=Xe.useState(null),[ct,D]=Xe.useState(!1),E=te=>te.familyId?y.find(Fe=>Fe.id===te.familyId)||null:te.group&&y.find(Fe=>Fe.id===te.group||Fe.name===te.group)||null,se=async()=>{const te=Jt.trim();Nt==="group"?await T(te||`Nouveau Groupe ${S.length+1}`):Nt==="family"&&await A(te||`Nouvelle Famille ${y.length+1}`,un,j),Wt(null),ee(null),At("")},Me=async()=>{if(!pt)return;const te=pt.name.trim();te&&(pt.type==="group"?await b(pt.id,te):await U(pt.id,te)),we(null)},_e=c.length>0&&j.length===c.length,Ne=Xe.useMemo(()=>{const te=o.trim().toLowerCase();return je.filter(Fe=>te?Fe.name.toLowerCase().includes(te)||Fe.category&&Fe.category.toLowerCase().includes(te)||Fe.description&&Fe.description.toLowerCase().includes(te):!0)},[je,o]),Le=Xe.useMemo(()=>r==="Assemblages"?[]:t.filter(te=>{const Fe=r==="Everything"||te.category===r,ve=o.trim().toLowerCase(),qe=ve===""||te.label.toLowerCase().includes(ve)||te.model.toLowerCase().includes(ve);return Fe&&qe}),[t,r,o]),[ge,xe]=Xe.useState(36);Xe.useEffect(()=>{xe(36)},[r,o]);const Ie=te=>{const{scrollTop:Fe,scrollHeight:ve,clientHeight:qe}=te.currentTarget;ve-Fe-qe<180&&xe(ut=>ut+24)},H=Xe.useMemo(()=>Le.slice(0,ge),[Le,ge]),ye=Xe.useMemo(()=>Ne.slice(0,ge),[Ne,ge]),pe=c.filter(te=>!te.groupId&&!E(te)),ke=y.filter(te=>!te.groupId),Re=te=>{var Fe;(Fe=navigator.clipboard)==null||Fe.writeText(te),Lt(!0),setTimeout(()=>Lt(!1),1800)},De=te=>{const Fe=h===te.id,ve=j.includes(te.id);return d.jsxs("div",{className:`h-7 px-1.5 rounded flex items-center justify-between text-xs transition-colors group ${Fe?"bg-hud-surface text-hud-text border border-hud-borderLight shadow-sm font-semibold":"hover:bg-hud-surface/40 text-hud-muted hover:text-hud-text"}`,children:[d.jsxs("div",{className:"flex items-center gap-1.5 min-w-0 flex-1",children:[d.jsx("button",{onClick:qe=>{qe.stopPropagation(),k(te.id)},className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-accent transition-colors shrink-0",title:"Sélectionner pour action groupée",children:ve?d.jsx(ih,{className:"w-3.5 h-3.5 text-hud-accent"}):d.jsx(rh,{className:"w-3.5 h-3.5 opacity-50 group-hover:opacity-100"})}),d.jsxs("button",{onClick:()=>$(te.id),className:"flex items-center gap-1.5 min-w-0 flex-1 text-left",children:[d.jsx(Ui,{className:`w-3 h-3 shrink-0 ${Fe?"text-hud-accent":"text-hud-muted"}`}),d.jsx("span",{className:"truncate",children:te.label||te.model})]})]}),d.jsx("div",{className:"flex items-center gap-1 shrink-0 ml-1",children:te.distance!==void 0&&d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted",children:[te.distance.toFixed(1),"m"]})})]},te.id)};return d.jsxs(d.Fragment,{children:[d.jsx("nav",{"aria-label":"Catalogue de props",className:"fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-auto",children:s?d.jsxs("div",{className:"w-[92vw] max-w-5xl bg-hud-panel border border-hud-border rounded-xl shadow-2xl p-3 flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-150",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-hud-border",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 rounded bg-hud-surface flex items-center justify-center border border-hud-borderLight text-hud-accent",children:r==="Assemblages"?d.jsx(Kt,{className:"w-3.5 h-3.5 text-amber-400"}):d.jsx(Ui,{className:"w-3.5 h-3.5"})}),d.jsx("div",{children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-hud-text",children:r==="Assemblages"?"Assemblages (Préfabs)":"Catalogue de Props"}),d.jsx("span",{className:"text-[10px] text-hud-muted font-mono",children:r==="Assemblages"?`(${Ne.length} assemblages)`:`(${Le.length} objets)`})]})})]}),d.jsxs("div",{className:"relative w-56 sm:w-64",children:[d.jsx(hx,{className:"w-3.5 h-3.5 text-hud-muted absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"}),d.jsx("input",{type:"text",placeholder:"Rechercher par nom ou modèle...",value:o,onChange:te=>J(te.target.value),className:"w-full h-7 pl-8 pr-6 bg-hud-surface border border-hud-border rounded text-xs text-hud-text placeholder:text-hud-muted/70 focus:outline-none focus:border-hud-accent"}),o&&d.jsx("button",{onClick:()=>J(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-hud-muted hover:text-hud-text",children:d.jsx(xr,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[Te?d.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium animate-pulse",children:[d.jsx(O_,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:be?`${be.current} / ${be.total} (${be.model})`:"Capture en cours..."}),d.jsx("button",{onClick:()=>re(),className:"ml-1 px-1.5 py-0.5 rounded bg-red-500/20 hover:bg-red-500 text-red-200 hover:text-white text-[10px] transition-colors",title:"Arrêter la génération",children:"Arrêter"})]}):d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>wt(te=>!te),className:"flex items-center gap-1.5 px-2.5 h-7 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-muted hover:text-hud-text text-xs transition-colors",title:"Générer des miniatures avec screenshot-basic",children:[d.jsx(cx,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:"Miniatures"}),d.jsx(yi,{className:"w-3 h-3 opacity-60"})]}),an&&d.jsxs("div",{className:"absolute right-0 bottom-full mb-1 w-52 bg-hud-panel border border-hud-border rounded-lg shadow-2xl py-1 z-50 text-xs",children:[d.jsxs("button",{onClick:()=>{wt(!1),Ge("missing")},className:"w-full text-left px-3 py-1.5 hover:bg-hud-surface flex items-center gap-2 text-hud-text",children:[d.jsx(Mo,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:"Générer les manquantes"})]}),d.jsxs("button",{onClick:()=>{wt(!1),Ge("all")},className:"w-full text-left px-3 py-1.5 hover:bg-hud-surface flex items-center gap-2 text-hud-text",children:[d.jsx(H_,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsxs("span",{children:["Tout régénérer (",t.length,")"]})]})]})]}),d.jsxs("button",{onClick:()=>Z(!1),className:"flex items-center gap-1 px-2.5 h-7 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-muted hover:text-hud-text text-xs transition-colors",title:"Masquer le catalogue (Touche C)",children:[d.jsx(yi,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Masquer [C]"})]})]})]}),d.jsx("div",{className:"flex items-center gap-1 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-hud-borderLight/40",children:e.map(te=>{const Fe=r===te,ve=te==="Assemblages";return d.jsxs("button",{onClick:()=>O(te),className:`px-2.5 py-0.5 rounded text-[11px] font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${Fe?ve?"bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-sm font-bold":"bg-hud-surface text-hud-text border border-hud-borderLight shadow-sm font-semibold":ve?"text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 border border-amber-500/30":"text-hud-muted hover:text-hud-text hover:bg-hud-surface/40 border border-transparent"}`,children:[ve&&d.jsx(Kt,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:te}),ve&&je.length>0&&d.jsx("span",{className:"px-1 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-mono",children:je.length})]},te)})}),d.jsx("div",{onScroll:Ie,className:"max-h-72 overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-hud-borderLight/40",children:r==="Assemblages"?Ne.length===0?d.jsxs("div",{className:"p-8 text-center bg-hud-bg/40 rounded-xl border border-hud-border flex flex-col items-center justify-center",children:[d.jsx(Kt,{className:"w-10 h-10 text-amber-400/50 mb-2 stroke-[1.2]"}),d.jsx("span",{className:"text-xs font-bold text-hud-text mb-1",children:o?"Aucun assemblage ne correspond à votre recherche":"Aucun assemblage enregistré"}),d.jsxs("p",{className:"text-[11px] text-hud-muted max-w-sm mb-2",children:["Créez une famille contenant plusieurs props dans le panneau de droite, puis cliquez sur"," ",d.jsx("span",{className:"text-amber-300 font-semibold",children:'"Assemblage"'})," pour sauvegarder votre composition réutilisable !"]})]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5",children:ye.map(te=>d.jsx(QE,{item:te,onSpawn:lt,onDuplicate:Ct,onDelete:St,onEdit:Fe=>it("",Fe)},te.id))}),ge<Ne.length&&d.jsxs("div",{className:"py-2 text-center text-[10px] text-hud-muted font-mono",children:["Affichage de ",ye.length," sur ",Ne.length," assemblages (défiler pour voir plus...)"]})]}):Le.length===0?d.jsx("div",{className:"p-6 text-center text-hud-muted text-xs bg-hud-bg/40 rounded border border-hud-border",children:"Aucun prop ne correspond à votre recherche."}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5",children:H.map(te=>d.jsx(KE,{item:te,onSpawn:G,onCaptureSingle:ft,hasThumbnail:!!he[te.model],thumbVersion:Se[te.model]},te.model))}),ge<Le.length&&d.jsxs("div",{className:"py-2 text-center text-[10px] text-hud-muted font-mono",children:["Affichage de ",H.length," sur ",Le.length," props (défiler pour charger la suite...)"]})]})})]}):d.jsxs("button",{onClick:()=>Z(!0),className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-hud-panel border border-hud-borderLight shadow-xl text-hud-text hover:text-white hover:border-hud-accent text-xs font-semibold transition-all hover:scale-105 active:scale-95",title:"Afficher le catalogue de props (Touche C)",children:[d.jsx(Ui,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:"Catalogue de Props [C]"}),d.jsxs("span",{className:"text-[10px] text-hud-muted font-mono",children:["(",t.length,")"]})]})}),d.jsxs("aside",{"aria-label":"Inspecteur de prop et Plan de travail",className:"fixed top-14 right-4 z-30 w-80 max-h-[calc(100vh-4.5rem)] bg-hud-panel border border-hud-border rounded-lg shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden select-none pointer-events-auto",children:[f?d.jsxs("div",{className:"space-y-2 pb-2 border-b border-hud-border",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[d.jsx("div",{className:"w-6 h-6 rounded bg-hud-surface flex items-center justify-center border border-hud-border text-hud-accent shrink-0",children:d.jsx(Ui,{className:"w-3.5 h-3.5"})}),d.jsxs("div",{className:"truncate",children:[d.jsx("span",{className:"text-xs font-bold text-hud-text uppercase tracking-wider block truncate",children:f.label||f.model}),d.jsx("span",{onClick:()=>Re(f.model),className:"text-[9px] font-mono text-hud-muted hover:text-hud-text cursor-pointer truncate block",title:"Cliquer pour copier le nom du modèle",children:at?"Copié !":f.model})]})]}),d.jsx("button",{onClick:z,className:"w-5 h-5 rounded hover:bg-hud-surface text-hud-muted hover:text-hud-text flex items-center justify-center transition-colors shrink-0",title:"Désélectionner (Échap)",children:d.jsx(xr,{className:"w-3.5 h-3.5"})})]}),d.jsx("div",{className:"grid grid-cols-3 gap-1 pt-1",children:["x","y","z"].map(te=>d.jsxs("div",{className:"flex items-center gap-1 bg-hud-surface/50 border border-hud-border rounded px-1.5 py-0.5",children:[d.jsx("span",{className:"text-[9px] font-mono uppercase text-hud-muted font-bold",children:te}),d.jsx("input",{type:"number",step:"0.05",value:f.coords[te]!==void 0?Number(f.coords[te]).toFixed(2):"0.00",onChange:Fe=>{const ve=parseFloat(Fe.target.value);isNaN(ve)||I({[te]:ve},!1)},onBlur:Fe=>{const ve=parseFloat(Fe.target.value);isNaN(ve)||I({[te]:ve},!0)},className:"w-full bg-transparent text-[11px] font-mono text-hud-text text-right focus:outline-none"})]},te))}),d.jsx("div",{className:"grid grid-cols-3 gap-1",children:["x","y","z"].map(te=>d.jsxs("div",{className:"flex items-center gap-1 bg-hud-surface/50 border border-hud-border rounded px-1.5 py-0.5",children:[d.jsx("span",{className:"text-[9px] font-mono uppercase text-hud-accent font-bold",children:te==="z"?"Yaw":te==="x"?"Roll":"Pitch"}),d.jsx("input",{type:"number",step:"5",value:f.rotation&&f.rotation[te]!==void 0?Math.round(f.rotation[te]):"0",onChange:Fe=>{const ve=parseFloat(Fe.target.value);isNaN(ve)||K({[te]:ve},!1)},onBlur:Fe=>{const ve=parseFloat(Fe.target.value);isNaN(ve)||K({[te]:ve},!0)},className:"w-full bg-transparent text-[11px] font-mono text-hud-text text-right focus:outline-none"})]},te))}),d.jsxs("div",{className:"space-y-1.5 pt-1 border-t border-hud-border/40",children:[d.jsxs("div",{className:"flex items-center justify-between gap-2",children:[d.jsx("span",{className:"text-[10px] text-hud-text font-medium",children:"Render distance"}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("input",{type:"number",min:"10",max:"400",step:"5",value:f.renderDistance||150,onChange:te=>{const Fe=parseFloat(te.target.value);isNaN(Fe)||me({renderDistance:Fe},!1)},onBlur:te=>{const Fe=parseFloat(te.target.value);isNaN(Fe)||me({renderDistance:Fe},!0)},className:"w-16 h-6 px-1 bg-hud-surface border border-hud-border rounded text-[11px] font-mono text-hud-text text-center focus:outline-none focus:border-hud-accent"}),d.jsx("span",{className:"text-[9px] font-mono text-hud-muted",children:"m"})]})]}),d.jsxs("div",{className:"flex items-center justify-between gap-2",children:[d.jsx("span",{className:"text-[10px] text-hud-text font-medium",children:"Texture variation"}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:()=>{const te=f.textureVariation||0;te>0&&me({textureVariation:te-1},!0)},className:"w-5 h-5 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-xs flex items-center justify-center",children:"-"}),d.jsx("span",{className:"w-6 text-center text-xs font-mono text-hud-text",children:f.textureVariation||0}),d.jsx("button",{onClick:()=>{const te=f.textureVariation||0;te<15&&me({textureVariation:te+1},!0)},className:"w-5 h-5 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-xs flex items-center justify-center",children:"+"})]})]}),d.jsxs("div",{className:"flex items-center justify-between gap-2 pt-0.5",children:[d.jsx("span",{className:"text-[10px] text-hud-text font-medium",children:"Collision"}),d.jsx("button",{onClick:()=>{me({collision:f.collision===!1},!0)},className:`px-2.5 py-0.5 rounded text-[10px] font-medium transition-colors ${f.collision!==!1?"bg-hud-accent text-white font-semibold":"bg-hud-surface text-hud-muted border border-hud-border"}`,children:f.collision!==!1?"Activée":"Désactivée"})]})]})]}):d.jsxs("div",{className:"p-2.5 text-center space-y-1.5 bg-hud-bg/50 border border-hud-border rounded",children:[d.jsx("span",{className:"text-[10px] font-bold text-hud-text uppercase tracking-wider block",children:"Aucun prop sélectionné"}),d.jsx("span",{className:"text-[9px] text-hud-muted block leading-relaxed",children:"Cliquez sur un prop dans le monde 3D ou sélectionnez-en un ci-dessous."}),d.jsxs("div",{className:"pt-1.5 border-t border-hud-border space-y-1",children:[d.jsx("span",{className:"text-[9px] font-mono uppercase text-hud-muted block text-left",children:"Placer un modèle GTA V custom :"}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("input",{type:"text",placeholder:"prop_bench_01a...",value:l,onChange:te=>ce(te.target.value),onKeyDown:te=>{te.key==="Enter"&&X()},className:"flex-1 h-6 px-2 bg-hud-surface border border-hud-border rounded text-[11px] text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-hud-accent font-mono"}),d.jsx("button",{onClick:X,className:"h-6 px-2 rounded bg-hud-accent hover:bg-hud-accent/90 text-white text-[10px] font-semibold transition-colors shrink-0 shadow-sm",children:"Placer"})]})]})]}),d.jsxs("div",{className:"flex-1 flex flex-col min-h-0 space-y-1.5",children:[d.jsxs("div",{className:"flex items-center justify-between pb-1 border-b border-hud-border",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx(Kt,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-hud-text",children:"Plan de travail"}),d.jsx("span",{className:"text-[9px] font-mono px-1 rounded bg-hud-surface border border-hud-border text-hud-muted",children:c.length})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsxs("button",{onClick:()=>{Wt("group"),ee(null),At(`Groupe ${S.length+1}`)},className:"h-5 px-1.5 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-[10px] font-medium flex items-center gap-1 transition-colors",title:"Créer un groupe (dossier organisationnel)",children:[d.jsx(ux,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"+ Groupe"})]}),d.jsxs("button",{onClick:()=>{Wt("family"),ee(null),At(`Famille ${y.length+1}`)},className:"h-5 px-1.5 rounded bg-hud-accent/20 hover:bg-hud-accent/30 border border-hud-accent/40 text-hud-accent text-[10px] font-semibold flex items-center gap-1 transition-colors",title:"Créer une famille (synchronisation & manipulation rigide)",children:[d.jsx(Kt,{className:"w-3 h-3 text-hud-accent"}),d.jsx("span",{children:"+ Famille"})]})]})]}),Nt&&d.jsxs("div",{className:"p-2 rounded bg-hud-surface border border-hud-border flex flex-col gap-1.5 animate-in fade-in duration-100",children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px] font-semibold text-hud-text",children:[d.jsx("span",{children:Nt==="group"?"Nouveau Groupe (Dossier)":`Nouvelle Famille${un?" (dans groupe)":""}`}),d.jsx("button",{onClick:()=>Wt(null),className:"text-hud-muted hover:text-hud-text",children:d.jsx(xr,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:Jt,onChange:te=>At(te.target.value),onKeyDown:te=>te.key==="Enter"&&se(),placeholder:"Nom...",className:"flex-1 h-6 px-1.5 rounded bg-hud-bg border border-hud-border text-xs text-hud-text placeholder-hud-muted/60 focus:outline-none focus:border-hud-accent"}),d.jsxs("button",{onClick:se,className:"h-6 px-2 rounded bg-hud-accent text-white font-semibold text-[11px] hover:bg-hud-accent/90 transition-colors flex items-center gap-1 shrink-0",children:[d.jsx(Si,{className:"w-3 h-3"}),d.jsx("span",{children:"OK"})]})]})]}),j.length>0&&d.jsxs("div",{className:"p-2 rounded bg-hud-surface border border-hud-border flex flex-col gap-1.5 animate-in fade-in duration-100",children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[d.jsxs("span",{className:"font-semibold text-hud-text",children:[j.length," prop",j.length>1?"s":""," sélectionné",j.length>1?"s":""]}),d.jsx("button",{onClick:V,className:"text-[10px] text-hud-muted hover:text-hud-text underline transition-colors",children:"Annuler"})]}),d.jsxs("div",{className:"flex items-center gap-1 relative",children:[d.jsxs("button",{onClick:()=>{Wt("family"),ee(null),At(`Famille ${y.length+1}`)},className:"flex-1 h-6 rounded bg-hud-accent/20 hover:bg-hud-accent/30 border border-hud-accent/40 text-hud-accent text-[11px] font-medium flex items-center justify-center gap-1 transition-colors",title:"Créer une famille pour lier et manipuler ensemble ces props",children:[d.jsx(Kt,{className:"w-3 h-3"}),d.jsx("span",{children:"Créer Famille"})]}),d.jsxs("button",{onClick:()=>D(!ct),className:"h-6 px-2 rounded bg-hud-bg hover:bg-hud-surface border border-hud-border text-hud-text text-[11px] font-medium flex items-center gap-1 transition-colors",title:"Classer dans un groupe ou une famille existante",children:[d.jsx("span",{children:"Assigner..."}),d.jsx(yi,{className:"w-3 h-3 text-hud-muted"})]}),d.jsx("button",{onClick:()=>F(j,null,null),className:"h-6 px-2 rounded bg-hud-bg hover:bg-red-950/40 hover:text-red-300 border border-hud-border text-hud-muted text-[11px] font-medium flex items-center justify-center gap-1 transition-colors",title:"Détacher de tout groupe et famille (libérer à la racine)",children:d.jsx(uo,{className:"w-3 h-3"})}),ct&&d.jsxs("div",{className:"absolute right-0 top-7 z-50 w-48 bg-hud-panel border border-hud-border rounded shadow-xl p-1 text-xs flex flex-col gap-0.5 max-h-56 overflow-y-auto",onMouseLeave:()=>D(!1),children:[d.jsx("span",{className:"text-[9px] uppercase font-bold text-hud-muted px-1.5 py-1",children:"Assigner au Groupe :"}),S.map(te=>d.jsxs("button",{onClick:()=>{F(j,te.id,void 0),D(!1)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors truncate",children:[d.jsx(Ss,{className:"w-3 h-3 text-hud-muted shrink-0"}),d.jsx("span",{className:"truncate",children:te.name})]},te.id)),S.length===0&&d.jsx("span",{className:"text-[10px] text-hud-muted italic px-2 py-0.5",children:"Aucun groupe créé"}),d.jsx("div",{className:"border-t border-hud-border my-1"}),d.jsx("span",{className:"text-[9px] uppercase font-bold text-hud-accent px-1.5 py-1",children:"Lier à la Famille :"}),y.map(te=>d.jsxs("button",{onClick:()=>{F(j,void 0,te.id),D(!1)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors truncate",children:[d.jsx(Kt,{className:"w-3 h-3 text-hud-accent shrink-0"}),d.jsx("span",{className:"truncate",children:te.name})]},te.id)),y.length===0&&d.jsx("span",{className:"text-[10px] text-hud-muted italic px-2 py-0.5",children:"Aucune famille créée"})]})]})]}),c.length===0?d.jsx("div",{className:"py-4 px-2 text-center text-[11px] text-hud-muted bg-hud-surface/40 rounded border border-hud-border",children:"Aucun prop détecté à proximité."}):d.jsxs("div",{className:"flex-1 overflow-y-auto pr-0.5 space-y-1.5 scrollbar-thin scrollbar-thumb-hud-borderLight/40 max-h-72",children:[d.jsx("div",{className:"flex items-center justify-between px-1 text-[10px] text-hud-muted",children:d.jsxs("button",{onClick:()=>_e?V():W(),className:"flex items-center gap-1 hover:text-hud-text transition-colors",children:[_e?d.jsx(ih,{className:"w-3 h-3 text-hud-accent"}):d.jsx(rh,{className:"w-3 h-3"}),d.jsx("span",{children:_e?"Tout décocher":"Tout cocher"})]})}),S.map(te=>{const Fe=!!x[`grp_${te.id}`],ve=y.filter(Ye=>Ye.groupId===te.id),qe=c.filter(Ye=>Ye.groupId===te.id&&!E(Ye)),ut=c.filter(Ye=>{if(Ye.groupId===te.id)return!0;const Ht=E(Ye);return Ht&&Ht.groupId===te.id}),Pe=(pt==null?void 0:pt.id)===te.id;return d.jsxs("div",{className:"rounded border border-hud-border/60 bg-hud-bg/40 overflow-hidden",children:[d.jsxs("div",{className:"h-7 px-1.5 bg-hud-surface/60 hover:bg-hud-surface flex items-center justify-between gap-1 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[d.jsx("button",{onClick:()=>w(`grp_${te.id}`),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text transition-colors",title:Fe?"Déplier le groupe":"Replier le groupe",children:Fe?d.jsx(mo,{className:"w-3.5 h-3.5"}):d.jsx(yi,{className:"w-3.5 h-3.5"})}),Fe?d.jsx(Ss,{className:"w-3.5 h-3.5 text-hud-muted shrink-0"}):d.jsx(Ea,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),Pe?d.jsxs("div",{className:"flex items-center gap-1 flex-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:pt.name,onChange:Ye=>we({...pt,name:Ye.target.value}),onKeyDown:Ye=>Ye.key==="Enter"&&Me(),className:"h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"}),d.jsx("button",{onClick:Me,className:"text-hud-accent hover:text-white",children:d.jsx(Si,{className:"w-3 h-3"})})]}):d.jsx("span",{onDoubleClick:()=>we({id:te.id,type:"group",name:te.name}),className:"text-xs font-semibold text-hud-text truncate cursor-pointer",title:"Double-clic pour renommer",children:te.name}),d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted shrink-0 ml-1",children:["(",ut.length,")"]})]}),d.jsxs("div",{className:"flex items-center gap-0.5 relative",children:[d.jsx("button",{onClick:()=>{Wt("family"),ee(te.id),At(`Famille ${y.length+1}`)},className:"w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-accent transition-colors",title:"Créer une famille dans ce groupe",children:d.jsx(Fc,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>Ve(Ut===`grp_${te.id}`?null:`grp_${te.id}`),className:"w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text transition-colors",title:"Options du groupe",children:d.jsx(Sa,{className:"w-3 h-3"})}),Ut===`grp_${te.id}`&&d.jsxs("div",{className:"absolute right-0 top-6 z-50 w-36 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5",onMouseLeave:()=>Ve(null),children:[d.jsxs("button",{onClick:()=>{we({id:te.id,type:"group",name:te.name}),Ve(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors",children:[d.jsx(go,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Renommer"})]}),d.jsxs("button",{onClick:()=>{_(te.id),Ve(null)},className:"h-6 px-2 rounded hover:bg-red-950/40 text-left text-red-300 flex items-center gap-1.5 transition-colors",children:[d.jsx(bs,{className:"w-3 h-3 text-red-400"}),d.jsx("span",{children:"Supprimer"})]})]})]})]}),!Fe&&d.jsxs("div",{className:"p-1 pl-3 space-y-1 border-t border-hud-border/40",children:[ve.map(Ye=>{const Ht=!!x[`fam_${Ye.id}`],In=c.filter(si=>si.familyId===Ye.id||si.group===Ye.id&&!si.familyId),wi=M===Ye.id,Jr=(pt==null?void 0:pt.id)===Ye.id;return d.jsxs("div",{className:`rounded border transition-colors ${wi?"border-hud-accent/60 bg-hud-accent/10":"border-hud-border/50 bg-hud-surface/30"}`,children:[d.jsxs("div",{className:"h-6 px-1.5 flex items-center justify-between gap-1",children:[d.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[d.jsx("button",{onClick:()=>w(`fam_${Ye.id}`),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text",children:Ht?d.jsx(mo,{className:"w-3 h-3"}):d.jsx(yi,{className:"w-3 h-3"})}),d.jsx(Kt,{className:"w-3 h-3 text-hud-accent shrink-0"}),Jr?d.jsxs("div",{className:"flex items-center gap-1 flex-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:pt.name,onChange:si=>we({...pt,name:si.target.value}),onKeyDown:si=>si.key==="Enter"&&Me(),className:"h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"}),d.jsx("button",{onClick:Me,className:"text-hud-accent hover:text-white",children:d.jsx(Si,{className:"w-3 h-3"})})]}):d.jsx("span",{onDoubleClick:()=>we({id:Ye.id,type:"family",name:Ye.name}),className:"text-xs font-medium text-hud-text truncate cursor-pointer",title:"Double-clic pour renommer",children:Ye.name}),d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted shrink-0 ml-1",children:["(",In.length,")"]})]}),d.jsxs("div",{className:"flex items-center gap-1 relative",children:[d.jsxs("button",{onClick:si=>{si.stopPropagation(),it(Ye.id)},className:"px-1.5 h-4.5 rounded text-[9px] font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-colors",title:"Enregistrer cette famille comme Assemblage (Préfab)",children:[d.jsx(Kt,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Assemblage"})]}),d.jsx("button",{onClick:()=>P(wi?null:Ye.id),className:`px-1.5 h-4.5 rounded text-[9px] font-bold tracking-tight transition-colors ${wi?"bg-hud-accent text-white shadow-sm":"bg-hud-surface hover:bg-hud-surface/80 text-hud-muted hover:text-hud-text border border-hud-border"}`,title:"Attacher le Gizmo à cette famille pour déplacement collectif rigide",children:wi?"Famille Active":"Sélect. Famille"}),d.jsx("button",{onClick:()=>Ve(Ut===`fam_${Ye.id}`?null:`fam_${Ye.id}`),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text",children:d.jsx(Sa,{className:"w-3 h-3"})}),Ut===`fam_${Ye.id}`&&d.jsxs("div",{className:"absolute right-0 top-5 z-50 w-40 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5",onMouseLeave:()=>Ve(null),children:[d.jsxs("button",{onClick:()=>{it(Ye.id),Ve(null)},className:"h-6 px-2 rounded hover:bg-amber-500/20 text-left text-amber-300 flex items-center gap-1.5 font-medium",children:[d.jsx(Kt,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:"Enregistrer Assemblage"})]}),d.jsx("div",{className:"border-t border-hud-border/40 my-0.5"}),d.jsxs("button",{onClick:()=>{we({id:Ye.id,type:"family",name:Ye.name}),Ve(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5",children:[d.jsx(go,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Renommer"})]}),d.jsxs("button",{onClick:()=>{L(Ye.id,null),Ve(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5",children:[d.jsx(dx,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Sortir du groupe"})]}),d.jsxs("button",{onClick:()=>{N(Ye.id),Ve(null)},className:"h-6 px-2 rounded hover:bg-red-950/40 text-left text-red-300 flex items-center gap-1.5",children:[d.jsx(bs,{className:"w-3 h-3 text-red-400"}),d.jsx("span",{children:"Dissoudre"})]})]})]})]}),!Ht&&d.jsx("div",{className:"p-1 pl-4 space-y-0.5 border-t border-hud-border/30",children:In.length===0?d.jsx("span",{className:"text-[10px] text-hud-muted italic px-1 block",children:"Aucun prop dans cette famille"}):In.map(De)})]},Ye.id)}),qe.map(De),ve.length===0&&qe.length===0&&d.jsx("span",{className:"text-[10px] text-hud-muted italic px-1 py-0.5 block",children:"Dossier vide (glissez ou assignez des props ici)"})]})]},te.id)}),ke.map(te=>{const Fe=!!x[`fam_${te.id}`],ve=c.filter(Pe=>Pe.familyId===te.id||Pe.group===te.id&&!Pe.familyId),qe=M===te.id,ut=(pt==null?void 0:pt.id)===te.id;return d.jsxs("div",{className:`rounded border transition-colors ${qe?"border-hud-accent/60 bg-hud-accent/10":"border-hud-border/60 bg-hud-surface/40"}`,children:[d.jsxs("div",{className:"h-7 px-1.5 flex items-center justify-between gap-1",children:[d.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[d.jsx("button",{onClick:()=>w(`fam_${te.id}`),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text",children:Fe?d.jsx(mo,{className:"w-3.5 h-3.5"}):d.jsx(yi,{className:"w-3.5 h-3.5"})}),d.jsx(Kt,{className:"w-3.5 h-3.5 text-hud-accent shrink-0"}),ut?d.jsxs("div",{className:"flex items-center gap-1 flex-1",children:[d.jsx("input",{type:"text",autoFocus:!0,value:pt.name,onChange:Pe=>we({...pt,name:Pe.target.value}),onKeyDown:Pe=>Pe.key==="Enter"&&Me(),className:"h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"}),d.jsx("button",{onClick:Me,className:"text-hud-accent hover:text-white",children:d.jsx(Si,{className:"w-3 h-3"})})]}):d.jsx("span",{onDoubleClick:()=>we({id:te.id,type:"family",name:te.name}),className:"text-xs font-semibold text-hud-text truncate cursor-pointer",title:"Double-clic pour renommer",children:te.name}),d.jsxs("span",{className:"text-[9px] font-mono text-hud-muted shrink-0 ml-1",children:["(",ve.length,")"]})]}),d.jsxs("div",{className:"flex items-center gap-1 relative",children:[d.jsxs("button",{onClick:Pe=>{Pe.stopPropagation(),it(te.id)},className:"px-1.5 h-4.5 rounded text-[9px] font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-colors",title:"Enregistrer cette famille comme Assemblage (Préfab)",children:[d.jsx(Kt,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Assemblage"})]}),d.jsx("button",{onClick:()=>P(qe?null:te.id),className:`px-1.5 h-4.5 rounded text-[9px] font-bold tracking-tight transition-colors ${qe?"bg-hud-accent text-white shadow-sm":"bg-hud-surface hover:bg-hud-surface/80 text-hud-muted hover:text-hud-text border border-hud-border"}`,title:"Attacher le Gizmo à cette famille pour déplacement collectif rigide",children:qe?"Famille Active":"Sélect. Famille"}),d.jsx("button",{onClick:()=>Ve(Ut===`fam_${te.id}`?null:`fam_${te.id}`),className:"w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text",children:d.jsx(Sa,{className:"w-3 h-3"})}),Ut===`fam_${te.id}`&&d.jsxs("div",{className:"absolute right-0 top-6 z-50 w-40 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5",onMouseLeave:()=>Ve(null),children:[d.jsxs("button",{onClick:()=>{it(te.id),Ve(null)},className:"h-6 px-2 rounded hover:bg-amber-500/20 text-left text-amber-300 flex items-center gap-1.5 font-medium",children:[d.jsx(Kt,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:"Enregistrer Assemblage"})]}),d.jsx("div",{className:"border-t border-hud-border/40 my-0.5"}),d.jsxs("button",{onClick:()=>{we({id:te.id,type:"family",name:te.name}),Ve(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5",children:[d.jsx(go,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Renommer"})]}),S.length>0&&d.jsx("div",{className:"border-t border-hud-border my-0.5"}),S.map(Pe=>d.jsxs("button",{onClick:()=>{L(te.id,Pe.id),Ve(null)},className:"h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 truncate",children:[d.jsx(Ss,{className:"w-3 h-3 text-hud-muted shrink-0"}),d.jsxs("span",{className:"truncate",children:["Déplacer dans ",Pe.name]})]},Pe.id)),d.jsx("div",{className:"border-t border-hud-border my-0.5"}),d.jsxs("button",{onClick:()=>{N(te.id),Ve(null)},className:"h-6 px-2 rounded hover:bg-red-950/40 text-left text-red-300 flex items-center gap-1.5",children:[d.jsx(bs,{className:"w-3 h-3 text-red-400"}),d.jsx("span",{children:"Dissoudre"})]})]})]})]}),!Fe&&d.jsx("div",{className:"p-1 pl-4 space-y-0.5 border-t border-hud-border/40",children:ve.length===0?d.jsx("span",{className:"text-[10px] text-hud-muted italic px-1 block",children:"Aucun prop dans cette famille"}):ve.map(De)})]},te.id)}),pe.length>0&&d.jsxs("div",{className:"rounded border border-hud-border/40 bg-hud-surface/20 p-1 space-y-0.5",children:[d.jsxs("div",{className:"px-1 py-0.5 text-[9px] uppercase font-bold text-hud-muted flex items-center justify-between",children:[d.jsx("span",{children:"Props libres à la racine"}),d.jsxs("span",{className:"font-mono",children:["(",pe.length,")"]})]}),pe.map(De)]})]})]}),d.jsx("div",{className:"pt-2 mt-auto border-t border-hud-border",children:d.jsxs("button",{onClick:Q,className:"w-full h-7 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors",children:[d.jsx(xr,{className:"w-3 h-3 text-hud-muted"}),d.jsx("span",{children:"Fermer [✕]"})]})})]}),p&&d.jsxs("div",{role:"status",className:"fixed bottom-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded bg-hud-panel border border-hud-borderLight shadow-2xl flex items-center gap-2 text-xs font-medium text-hud-text animate-in fade-in slide-in-from-bottom-2 duration-150",children:[v==="error"&&d.jsx($h,{className:"w-3.5 h-3.5 text-red-400"}),v==="warning"&&d.jsx(fx,{className:"w-3.5 h-3.5 text-amber-400"}),v==="success"&&d.jsx(Si,{className:"w-3.5 h-3.5 text-green-400"}),v==="info"&&d.jsx(Ui,{className:"w-3.5 h-3.5 text-hud-accent"}),d.jsx("span",{children:p})]}),d.jsx(eT,{})]})},nT=()=>d.jsxs("aside",{role:"region","aria-label":"FX Studio",className:"fixed right-4 top-3 z-40 w-80 bg-hud-panel border border-hud-border rounded shadow-md p-3.5 select-none pointer-events-auto flex flex-col gap-3",children:[d.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-hud-border",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 rounded bg-hud-surface flex items-center justify-center border border-hud-borderLight text-hud-accent",children:d.jsx(Km,{className:"w-3.5 h-3.5"})}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-hud-text",children:"FX Studio"}),d.jsx("span",{className:"text-[10px] text-hud-muted block",children:"Effets visuels & particules"})]})]}),d.jsx("span",{className:"text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-hud-accent/15 border border-hud-accent/30 text-hud-accent font-semibold",children:"En développement"})]}),d.jsx("div",{className:"p-2.5 rounded bg-hud-bg/60 border border-hud-border space-y-2",children:d.jsxs("p",{className:"text-[11px] text-hud-muted leading-relaxed",children:["Le ",d.jsx("strong",{className:"text-hud-text",children:"FX Studio"})," viendra enrichir vos scènes avec des particules, de la fumée, des étincelles et des effets visuels atmosphériques en temps réel."]})}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-hud-muted/80 block",children:"Fonctionnalités à venir"}),d.jsxs("div",{className:"space-y-1 text-[11px]",children:[d.jsxs("div",{className:"flex items-center gap-2 p-1.5 rounded bg-hud-surface/40 border border-hud-border/60 text-hud-text",children:[d.jsx(Km,{className:"w-3 h-3 text-hud-muted shrink-0"}),d.jsx("span",{children:"Particules de fumée, feu & brouillard"})]}),d.jsxs("div",{className:"flex items-center gap-2 p-1.5 rounded bg-hud-surface/40 border border-hud-border/60 text-hud-text",children:[d.jsx(Mo,{className:"w-3 h-3 text-hud-muted shrink-0"}),d.jsx("span",{children:"Gestion de la taille, densité et vitesse"})]}),d.jsxs("div",{className:"flex items-center gap-2 p-1.5 rounded bg-hud-surface/40 border border-hud-border/60 text-hud-text",children:[d.jsx(sy,{className:"w-3 h-3 text-hud-muted shrink-0"}),d.jsx("span",{children:"Liaison aux props et véhicules"})]})]})]}),d.jsxs("div",{className:"pt-2 border-t border-hud-border flex items-center gap-2 text-[10px] text-hud-muted",children:[d.jsx(fx,{className:"w-3.5 h-3.5 text-hud-muted shrink-0"}),d.jsx("span",{children:"Basculez sur Light Studio pour configurer vos lumières."})]})]}),iT=()=>{const{visible:s,activeStudio:e,initialize:t,setVisible:r,updateTransform:o,setNearbyLights:l,setHierarchy:c,handleLightDuplicated:h,setAttachedInfo:f,setProps:p}=sn();return Xe.useEffect(()=>{const v=y=>{const x=y.data;if(!(!x||!x.action))if(x.action==="open")t({props:x.props,defaults:x.defaults,coords:x.coords,heading:x.heading,rotation:x.rotation,hierarchy:x.hierarchy,toolkitName:x.toolkitName,studios:x.studios,defaultStudio:x.defaultStudio}),Mt.getState().initializeCatalog(x.propCategories||[],x.propCatalog||[]);else if(x.action==="close")r(!1);else if(x.action==="syncHierarchy")x.hierarchy&&c(x.hierarchy);else if(x.action==="updateTransform")o(x.coords,x.heading,x.rotation);else if(x.action==="onLightDuplicated"&&x.light)h(x.light);else if(x.action==="updateNearbyLights")l(x.lights||[]),x.hierarchy&&c(x.hierarchy);else if(x.action==="updateProps")x.props&&p(x.props);else if(x.action==="updateAttachment")f(x.attached?{isAttached:!0,type:x.targetType,name:x.targetName}:null);else if(x.action==="propStudio:syncProps")Mt.getState().setProps(x.props,x.locks,x.hierarchy,x.assemblages);else if(x.action==="propStudio:syncAssemblages")Mt.getState().setAssemblages(x.assemblages||[]);else if(x.action==="propStudio:assemblageSaved"){const w=x.assemblage;w&&Mt.setState(T=>({assemblages:T.assemblages.some(b=>b.id===w.id)?T.assemblages.map(b=>b.id===w.id?w:b):[w,...T.assemblages]}))}else if(x.action==="propStudio:assemblageDeleted"){const w=x.id;w&&Mt.setState(T=>({assemblages:T.assemblages.filter(b=>b.id!==w)}))}else if(x.action==="propStudio:assemblagePlaced"){const w=x.data;w&&w.familyId&&Mt.getState().setSelectedFamilyId(w.familyId)}else x.action==="propStudio:syncHierarchy"?x.hierarchy&&Mt.getState().setHierarchy(x.hierarchy):x.action==="propStudio:updateNearbyProps"?(Mt.getState().setNearbyProps(x.props||[]),x.count!==void 0&&Mt.getState().setLoadedPropsCount(x.count)):x.action==="propStudio:syncSingleProp"?Mt.getState().syncSingleProp(x.prop):x.action==="propStudio:syncLock"?Mt.getState().syncLock(x.propId,x.lock):x.action==="propStudio:onPropSelected"?Mt.getState().setSelectedPropDirect(x.prop):x.action==="propStudio:propDeleted"?Mt.getState().onPropDeleted(x.propId):x.action==="propStudio:updateLoadedCount"?Mt.getState().setLoadedPropsCount(x.count):x.action==="propStudio:updateTransform"?(Mt.getState().updatePropPosition(x.coords,!1),x.rotation&&Mt.getState().updatePropRotation(x.rotation,!1)):x.action==="propStudio:syncThumbnails"?Mt.getState().setExistingThumbnails(x.thumbnails||[]):x.action==="propStudio:thumbnailAdded"?Mt.getState().addExistingThumbnail(x.model):x.action==="propStudio:thumbBatchStart"?Mt.getState().setIsGeneratingThumbs(!0):x.action==="propStudio:thumbProgress"?Mt.getState().setThumbProgress(x):x.action==="propStudio:thumbBatchEnd"?(Mt.getState().setIsGeneratingThumbs(!1),Mt.getState().setThumbProgress(null),Mt.getState().showToast(`Génération terminée : ${x.success||0}/${x.total||0} miniatures créées.`,x.errors>0?"warning":"success")):x.action==="propStudio:notify"&&Mt.getState().showToast(x.message,x.type||"info")};return window.addEventListener("message",v),!window.invokeNative&&!s&&(t({coords:{x:120.45,y:-450.8,z:35.2},heading:90}),Mt.getState().initializeCatalog(["Bar","Construction","Interior","Kitchen","Living room","Office"],[{model:"prop_sofa_01",label:"Canapé 3 places cuir",category:"Living room"},{model:"prop_table_03",label:"Table à manger rectangulaire",category:"Tables"},{model:"prop_barrier_work05",label:"Barrière de chantier",category:"Construction"}])),()=>{window.removeEventListener("message",v)}},[s,t,r,o]),s?d.jsxs("div",{className:"w-screen h-screen relative overflow-hidden select-none font-sans",children:[d.jsx(XE,{}),d.jsx(ay,{}),d.jsx(ly,{}),e==="light"&&d.jsx(ZE,{}),e==="prop"&&d.jsx(tT,{}),e==="fx"&&d.jsx(nT,{}),d.jsx(qE,{})]}):null};$v.createRoot(document.getElementById("root")).render(d.jsx(fo.StrictMode,{children:d.jsx(iT,{})}));
