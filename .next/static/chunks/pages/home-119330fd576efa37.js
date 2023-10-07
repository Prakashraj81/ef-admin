(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4309:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(1505)}])},4080:function(e,t,n){"use strict";n.d(t,{u:function(){return A}});var r,i=n(7294),u=n(2351),l=n(6567),o=n(2984),s=n(4879),a=n(6723),c=n(3855),f=n(2180),d=n(3784),m=n(9362);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var v=n(4192),g=n(3781),E=n(4067);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,i.createContext)(null);y.displayName="TransitionContext";var T=((r=T||{}).Visible="visible",r.Hidden="hidden",r);let O=(0,i.createContext)(null);function C(e){return"children"in e?C(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function F(e,t){let n=(0,c.E)(e),r=(0,i.useRef)([]),l=(0,s.t)(),a=(0,v.G)(),f=(0,g.z)((e,t=u.l4.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&((0,o.E)(t,{[u.l4.Unmount](){r.current.splice(i,1)},[u.l4.Hidden](){r.current[i].state="hidden"}}),a.microTask(()=>{var e;!C(r)&&l.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,u.l4.Unmount)}),m=(0,i.useRef)([]),p=(0,i.useRef)(Promise.resolve()),h=(0,i.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(h.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?p.current=p.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(h.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:d,unregister:f,onStart:E,onStop:b,wait:p,chains:h}),[d,f,r,E,b,h,p])}function w(){}O.displayName="NestingContext";let S=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function N(e){var t;let n={};for(let r of S)n[r]=null!=(t=e[r])?t:w;return n}let j=u.AN.RenderStrategy,k=(0,u.yV)(function(e,t){let{show:n,appear:r=!1,unmount:o,...s}=e,c=(0,i.useRef)(null),m=(0,d.T)(c,t);(0,f.H)();let p=(0,l.oJ)();if(void 0===n&&null!==p&&(n=(p&l.ZM.Open)===l.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,v]=(0,i.useState)(n?"visible":"hidden"),E=F(()=>{v("hidden")}),[b,T]=(0,i.useState)(!0),w=(0,i.useRef)([n]);(0,a.e)(()=>{!1!==b&&w.current[w.current.length-1]!==n&&(w.current.push(n),T(!1))},[w,n]);let S=(0,i.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,i.useEffect)(()=>{if(n)v("visible");else if(C(E)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&v("hidden")}else v("hidden")},[n,E]);let N={unmount:o},k=(0,g.z)(()=>{var t;b&&T(!1),null==(t=e.beforeEnter)||t.call(e)}),R=(0,g.z)(()=>{var t;b&&T(!1),null==(t=e.beforeLeave)||t.call(e)});return i.createElement(O.Provider,{value:E},i.createElement(y.Provider,{value:S},(0,u.sY)({ourProps:{...N,as:i.Fragment,children:i.createElement(P,{ref:m,...N,...s,beforeEnter:k,beforeLeave:R})},theirProps:{},defaultTag:i.Fragment,features:j,visible:"visible"===h,name:"Transition"})))}),P=(0,u.yV)(function(e,t){var n;let r,{beforeEnter:T,afterEnter:w,beforeLeave:S,afterLeave:k,enter:P,enterFrom:R,enterTo:A,entered:L,leave:x,leaveFrom:H,leaveTo:M,..._}=e,z=(0,i.useRef)(null),Z=(0,d.T)(z,t),V=_.unmount?u.l4.Unmount:u.l4.Hidden,{show:q,appear:Y,initial:$}=function(){let e=(0,i.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[I,U]=(0,i.useState)(q?"visible":"hidden"),D=function(){let e=(0,i.useContext)(O);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:G}=D,J=(0,i.useRef)(null);(0,i.useEffect)(()=>B(z),[B,z]),(0,i.useEffect)(()=>{if(V===u.l4.Hidden&&z.current){if(q&&"visible"!==I){U("visible");return}return(0,o.E)(I,{hidden:()=>G(z),visible:()=>B(z)})}},[I,z,B,G,q,V]);let X=(0,c.E)({enter:b(P),enterFrom:b(R),enterTo:b(A),entered:b(L),leave:b(x),leaveFrom:b(H),leaveTo:b(M)}),W=(n={beforeEnter:T,afterEnter:w,beforeLeave:S,afterLeave:k},r=(0,i.useRef)(N(n)),(0,i.useEffect)(()=>{r.current=N(n)},[n]),r),K=(0,f.H)();(0,i.useEffect)(()=>{if(K&&"visible"===I&&null===z.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[z,I,K]);let Q=$&&!Y,ee=!K||Q||J.current===q?"idle":q?"enter":"leave",et=function(e=0){let[t,n]=(0,i.useState)(e),r=(0,s.t)(),u=(0,i.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),l=(0,i.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:u,hasFlag:l,removeFlag:(0,i.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,i.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,g.z)(e=>(0,o.E)(e,{enter:()=>{et.addFlag(l.ZM.Opening),W.current.beforeEnter()},leave:()=>{et.addFlag(l.ZM.Closing),W.current.beforeLeave()},idle:()=>{}})),er=(0,g.z)(e=>(0,o.E)(e,{enter:()=>{et.removeFlag(l.ZM.Opening),W.current.afterEnter()},leave:()=>{et.removeFlag(l.ZM.Closing),W.current.afterLeave()},idle:()=>{}})),ei=F(()=>{U("hidden"),G(z)},D);(function({container:e,direction:t,classes:n,onStart:r,onStop:i}){let u=(0,s.t)(),l=(0,v.G)(),f=(0,c.E)(t);(0,a.e)(()=>{let t=(0,m.k)();l.add(t.dispose);let s=e.current;if(s&&"idle"!==f.current&&u.current){var a,c,d;let e,u,l,v,g,E,b;return t.dispose(),r.current(f.current),t.add((a=n.current,c="enter"===f.current,d=()=>{t.dispose(),i.current(f.current)},u=c?"enter":"leave",l=(0,m.k)(),v=void 0!==d?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,d(...t)}):()=>{},"enter"===u&&(s.removeAttribute("hidden"),s.style.display=""),g=(0,o.E)(u,{enter:()=>a.enter,leave:()=>a.leave}),E=(0,o.E)(u,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),b=(0,o.E)(u,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom}),h(s,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),p(s,...g,...b),l.nextFrame(()=>{h(s,...b),p(s,...E),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[u,l]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),o=u+l;if(0!==o){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},o),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(s,()=>(h(s,...g),p(s,...a.entered),v()))}),l.dispose)),t.dispose}},[t])})({container:z,classes:X,direction:ee,onStart:(0,c.E)(e=>{ei.onStart(z,e,en)}),onStop:(0,c.E)(e=>{ei.onStop(z,e,er),"leave"!==e||C(ei)||(U("hidden"),G(z))})}),(0,i.useEffect)(()=>{Q&&(V===u.l4.Hidden?J.current=null:J.current=q)},[q,Q,I]);let eu=_;return Y&&q&&$&&(eu={...eu,className:(0,E.A)(_.className,...X.current.enter,...X.current.enterFrom)}),i.createElement(O.Provider,{value:ei},i.createElement(l.up,{value:(0,o.E)(I,{visible:l.ZM.Open,hidden:l.ZM.Closed})|et.flags},(0,u.sY)({ourProps:{ref:Z},theirProps:eu,defaultTag:"div",features:j,visible:"visible"===I,name:"Transition.Child"})))}),R=(0,u.yV)(function(e,t){let n=null!==(0,i.useContext)(y),r=null!==(0,l.oJ)();return i.createElement(i.Fragment,null,!n&&r?i.createElement(k,{ref:t,...e}):i.createElement(P,{ref:t,...e}))}),A=Object.assign(k,{Child:R,Root:k})},4192:function(e,t,n){"use strict";n.d(t,{G:function(){return u}});var r=n(7294),i=n(9362);function u(){let[e]=(0,r.useState)(i.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(7294),i=n(3855);let u=function(e){let t=(0,i.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},4879:function(e,t,n){"use strict";n.d(t,{t:function(){return u}});var r=n(7294),i=n(6723);function u(){let e=(0,r.useRef)(!1);return(0,i.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var r=n(7294),i=n(7896);let u=(e,t)=>{i.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(7294),i=n(6723);function u(e){let t=(0,r.useRef)(e);return(0,i.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(7294),i=n(7896);function u(){let[e,t]=(0,r.useState)(i.O.isHandoffComplete);return e&&!1===i.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>i.O.handoff(),[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return o},h:function(){return l}});var r=n(7294),i=n(3781);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function o(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,i.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return l},oJ:function(){return o},up:function(){return s}});var r,i=n(7294);let u=(0,i.createContext)(null);u.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function o(){return(0,i.useContext)(u)}function s({value:e,children:t}){return i.createElement(u.Provider,{value:e},t)}},4067:function(e,t,n){"use strict";function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},9362:function(e,t,n){"use strict";n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,i)=>(e.addEventListener(t,r,i),n.add(()=>e.removeEventListener(t,r,i))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(1021)},7896:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=Object.defineProperty,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}n.d(t,{E:function(){return r}})},1021:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return s},l4:function(){return a},sY:function(){return c},yV:function(){return m}});var r,i,u=n(7294),l=n(4067),o=n(2984),s=((r=s||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),a=((i=a||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:u=!0,name:l}){let s=d(t,e);if(u)return f(s,n,r,l);let a=null!=i?i:0;if(2&a){let{static:e=!1,...t}=s;if(e)return f(t,n,r,l)}if(1&a){let{unmount:e=!0,...t}=s;return(0,o.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return f(s,n,r,l)}function f(e,t={},n,r){let{as:i=n,children:o,refName:s="ref",...a}=h(e,["unmount","static"]),c=void 0!==e.ref?{[s]:e.ref}:{},f="function"==typeof o?o(t):o;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let m={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(i===u.Fragment&&Object.keys(p(a)).length>0){if(!(0,u.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,l.A)(null==e?void 0:e.className(...t),a.className):(0,l.A)(null==e?void 0:e.className,a.className),n=t?{className:t}:{};return(0,u.cloneElement)(f,Object.assign({},d(f.props,p(h(a,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),n))}return(0,u.createElement)(i,Object.assign({},h(a,["ref"]),i!==u.Fragment&&c,i!==u.Fragment&&m),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let i of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...r)}}});return t}function m(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function h(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}},function(e){e.O(0,[61,30,588,201,763,505,774,888,179],function(){return e(e.s=4309)}),_N_E=e.O()}]);