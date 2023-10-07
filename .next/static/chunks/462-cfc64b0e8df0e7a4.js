(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return o}});let n=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class r{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}}let u=globalThis.AsyncLocalStorage;function o(){return u?new u:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(8754),n(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return v},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return a.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return a.useServerInsertedHTML},useRouter:function(){return m},useParams:function(){return g},useSelectedLayoutSegments:function(){return b},useSelectedLayoutSegment:function(){return y},redirect:function(){return s.redirect},notFound:function(){return c.notFound}});let r=n(7294),u=n(4224),o=n(8463),i=n(5182),l=n(2526),a=n(3014),s=n(8781),c=n(8147),f=Symbol("internal for urlsearchparams readonly");function d(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw d()}delete(){throw d()}set(){throw d()}sort(){throw d()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function v(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(o.SearchParamsContext),t=(0,r.useMemo)(()=>e?new p(e):null,[e]);return t}function h(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(o.PathnameContext)}function m(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(u.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(u.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],u=Array.isArray(r),o=u?r[1]:r;if(!o||o.startsWith("__PAGE__"))continue;let i=u&&("c"===r[2]||"oc"===r[2]);i?n[r[0]]=r[1].split("/"):u&&(n[r[0]]=r[1]),n=e(t,n)}return n}(e.tree):null}function b(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(u.LayoutRouterContext);return function e(t,n,r,u){let o;if(void 0===r&&(r=!0),void 0===u&&(u=[]),r)o=t[1][n];else{var i;let e=t[1];o=null!=(i=e.children)?i:Object.values(e)[0]}if(!o)return u;let a=o[0],s=(0,l.getSegmentValue)(a);return!s||s.startsWith("__PAGE__")?u:(u.push(s),e(o,n,!1,u))}(t,e)}function y(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=b(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return u}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function u(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,n){"use strict";var r,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return l},redirect:function(){return a},isRedirectError:function(){return s},getURLFromRedirectError:function(){return c},getRedirectTypeFromError:function(){return f}});let o=n(4505),i="NEXT_REDIRECT";function l(e,t){let n=Error(i);n.digest=i+";"+t+";"+e;let r=o.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function a(e,t){throw void 0===t&&(t="replace"),l(e,t)}function s(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===i&&("replace"===n||"push"===n)&&"string"==typeof r}function c(e){return s(e)?e.digest.split(";",3)[2]:null}function f(e){if(!s(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(u=r||(r={})).push="push",u.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return u}});let r=n(8530),u=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return i}});let r=n(1757),u=r._(n(7294)),o=u.default.createContext(null);function i(e){let t=(0,u.useContext)(o);t&&t(e)}},9332:function(e,t,n){e.exports=n(1414)},4080:function(e,t,n){"use strict";n.d(t,{u:function(){return R}});var r,u=n(7294),o=n(2351),i=n(6567),l=n(2984),a=n(4879),s=n(6723),c=n(3855),f=n(2180),d=n(3784),p=n(9362);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var m=n(4192),g=n(3781),b=n(4067);function y(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let E=(0,u.createContext)(null);E.displayName="TransitionContext";var S=((r=S||{}).Visible="visible",r.Hidden="hidden",r);let O=(0,u.createContext)(null);function j(e){return"children"in e?j(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function C(e,t){let n=(0,c.E)(e),r=(0,u.useRef)([]),i=(0,a.t)(),s=(0,m.G)(),f=(0,g.z)((e,t=o.l4.Hidden)=>{let u=r.current.findIndex(({el:t})=>t===e);-1!==u&&((0,l.E)(t,{[o.l4.Unmount](){r.current.splice(u,1)},[o.l4.Hidden](){r.current[u].state="hidden"}}),s.microTask(()=>{var e;!j(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,o.l4.Unmount)}),p=(0,u.useRef)([]),v=(0,u.useRef)(Promise.resolve()),h=(0,u.useRef)({enter:[],leave:[],idle:[]}),b=(0,g.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(h.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),y=(0,g.z)((e,t,n)=>{Promise.all(h.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:r,register:d,unregister:f,onStart:b,onStop:y,wait:v,chains:h}),[d,f,r,b,y,h,v])}function _(){}O.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function T(e){var t;let n={};for(let r of P)n[r]=null!=(t=e[r])?t:_;return n}let w=o.AN.RenderStrategy,M=(0,o.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l,...a}=e,c=(0,u.useRef)(null),p=(0,d.T)(c,t);(0,f.H)();let v=(0,i.oJ)();if(void 0===n&&null!==v&&(n=(v&i.ZM.Open)===i.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,m]=(0,u.useState)(n?"visible":"hidden"),b=C(()=>{m("hidden")}),[y,S]=(0,u.useState)(!0),_=(0,u.useRef)([n]);(0,s.e)(()=>{!1!==y&&_.current[_.current.length-1]!==n&&(_.current.push(n),S(!1))},[_,n]);let P=(0,u.useMemo)(()=>({show:n,appear:r,initial:y}),[n,r,y]);(0,u.useEffect)(()=>{if(n)m("visible");else if(j(b)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&m("hidden")}else m("hidden")},[n,b]);let T={unmount:l},M=(0,g.z)(()=>{var t;y&&S(!1),null==(t=e.beforeEnter)||t.call(e)}),x=(0,g.z)(()=>{var t;y&&S(!1),null==(t=e.beforeLeave)||t.call(e)});return u.createElement(O.Provider,{value:b},u.createElement(E.Provider,{value:P},(0,o.sY)({ourProps:{...T,as:u.Fragment,children:u.createElement(F,{ref:p,...T,...a,beforeEnter:M,beforeLeave:x})},theirProps:{},defaultTag:u.Fragment,features:w,visible:"visible"===h,name:"Transition"})))}),F=(0,o.yV)(function(e,t){var n;let r,{beforeEnter:S,afterEnter:_,beforeLeave:P,afterLeave:M,enter:F,enterFrom:x,enterTo:R,entered:L,leave:k,leaveFrom:A,leaveTo:N,...H}=e,I=(0,u.useRef)(null),z=(0,d.T)(I,t),U=H.unmount?o.l4.Unmount:o.l4.Hidden,{show:V,appear:Z,initial:q}=function(){let e=(0,u.useContext)(E);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[D,G]=(0,u.useState)(V?"visible":"hidden"),Y=function(){let e=(0,u.useContext)(O);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:$,unregister:W}=Y,B=(0,u.useRef)(null);(0,u.useEffect)(()=>$(I),[$,I]),(0,u.useEffect)(()=>{if(U===o.l4.Hidden&&I.current){if(V&&"visible"!==D){G("visible");return}return(0,l.E)(D,{hidden:()=>W(I),visible:()=>$(I)})}},[D,I,$,W,V,U]);let J=(0,c.E)({enter:y(F),enterFrom:y(x),enterTo:y(R),entered:y(L),leave:y(k),leaveFrom:y(A),leaveTo:y(N)}),X=(n={beforeEnter:S,afterEnter:_,beforeLeave:P,afterLeave:M},r=(0,u.useRef)(T(n)),(0,u.useEffect)(()=>{r.current=T(n)},[n]),r),K=(0,f.H)();(0,u.useEffect)(()=>{if(K&&"visible"===D&&null===I.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[I,D,K]);let Q=q&&!Z,ee=!K||Q||B.current===V?"idle":V?"enter":"leave",et=function(e=0){let[t,n]=(0,u.useState)(e),r=(0,a.t)(),o=(0,u.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),i=(0,u.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{et.addFlag(i.ZM.Opening),X.current.beforeEnter()},leave:()=>{et.addFlag(i.ZM.Closing),X.current.beforeLeave()},idle:()=>{}})),er=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{et.removeFlag(i.ZM.Opening),X.current.afterEnter()},leave:()=>{et.removeFlag(i.ZM.Closing),X.current.afterLeave()},idle:()=>{}})),eu=C(()=>{G("hidden"),W(I)},Y);(function({container:e,direction:t,classes:n,onStart:r,onStop:u}){let o=(0,a.t)(),i=(0,m.G)(),f=(0,c.E)(t);(0,s.e)(()=>{let t=(0,p.k)();i.add(t.dispose);let a=e.current;if(a&&"idle"!==f.current&&o.current){var s,c,d;let e,o,i,m,g,b,y;return t.dispose(),r.current(f.current),t.add((s=n.current,c="enter"===f.current,d=()=>{t.dispose(),u.current(f.current)},o=c?"enter":"leave",i=(0,p.k)(),m=void 0!==d?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,d(...t)}):()=>{},"enter"===o&&(a.removeAttribute("hidden"),a.style.display=""),g=(0,l.E)(o,{enter:()=>s.enter,leave:()=>s.leave}),b=(0,l.E)(o,{enter:()=>s.enterTo,leave:()=>s.leaveTo}),y=(0,l.E)(o,{enter:()=>s.enterFrom,leave:()=>s.leaveFrom}),h(a,...s.enter,...s.enterTo,...s.enterFrom,...s.leave,...s.leaveFrom,...s.leaveTo,...s.entered),v(a,...g,...y),i.nextFrame(()=>{h(a,...y),v(a,...b),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[o,i]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=o+i;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(a,()=>(h(a,...g),v(a,...s.entered),m()))}),i.dispose)),t.dispose}},[t])})({container:I,classes:J,direction:ee,onStart:(0,c.E)(e=>{eu.onStart(I,e,en)}),onStop:(0,c.E)(e=>{eu.onStop(I,e,er),"leave"!==e||j(eu)||(G("hidden"),W(I))})}),(0,u.useEffect)(()=>{Q&&(U===o.l4.Hidden?B.current=null:B.current=V)},[V,Q,D]);let eo=H;return Z&&V&&q&&(eo={...eo,className:(0,b.A)(H.className,...J.current.enter,...J.current.enterFrom)}),u.createElement(O.Provider,{value:eu},u.createElement(i.up,{value:(0,l.E)(D,{visible:i.ZM.Open,hidden:i.ZM.Closed})|et.flags},(0,o.sY)({ourProps:{ref:z},theirProps:eo,defaultTag:"div",features:w,visible:"visible"===D,name:"Transition.Child"})))}),x=(0,o.yV)(function(e,t){let n=null!==(0,u.useContext)(E),r=null!==(0,i.oJ)();return u.createElement(u.Fragment,null,!n&&r?u.createElement(M,{ref:t,...e}):u.createElement(F,{ref:t,...e}))}),R=Object.assign(M,{Child:x,Root:M})},4192:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var r=n(7294),u=n(9362);function o(){let[e]=(0,r.useState)(u.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(7294),u=n(3855);let o=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},4879:function(e,t,n){"use strict";n.d(t,{t:function(){return o}});var r=n(7294),u=n(6723);function o(){let e=(0,r.useRef)(!1);return(0,u.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(7294),u=n(7896);let o=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(7294),u=n(6723);function o(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(7294),u=n(7896);function o(){let[e,t]=(0,r.useState)(u.O.isHandoffComplete);return e&&!1===u.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>u.O.handoff(),[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return l},h:function(){return i}});var r=n(7294),u=n(3781);let o=Symbol();function i(e,t=!0){return Object.assign(e,{[o]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[o]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return i},oJ:function(){return l},up:function(){return a}});var r,u=n(7294);let o=(0,u.createContext)(null);o.displayName="OpenClosedContext";var i=((r=i||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,u.useContext)(o)}function a({value:e,children:t}){return u.createElement(o.Provider,{value:e},t)}},4067:function(e,t,n){"use strict";function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},9362:function(e,t,n){"use strict";n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(1021)},7896:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);let i=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}n.d(t,{E:function(){return r}})},1021:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return a},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var r,u,o=n(7294),i=n(4067),l=n(2984),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:o=!0,name:i}){let a=d(t,e);if(o)return f(a,n,r,i);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=a;if(e)return f(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return f(a,n,r,i)}function f(e,t={},n,r){let{as:u=n,children:l,refName:a="ref",...s}=h(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(u===o.Fragment&&Object.keys(v(s)).length>0){if(!(0,o.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,o.cloneElement)(f,Object.assign({},d(f.props,v(h(s,["ref"]))),p,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),n))}return(0,o.createElement)(u,Object.assign({},h(s,["ref"]),u!==o.Fragment&&c,u!==o.Fragment&&p),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function p(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function h(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);