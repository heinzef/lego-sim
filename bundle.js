var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function l(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(l)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const s="undefined"!=typeof window;let c=s?()=>window.performance.now():()=>Date.now(),u=s?t=>requestAnimationFrame(t):t;const f=new Set;let d,p=!1;function b(){f.forEach(t=>{t[0](c())||(f.delete(t),t[1]())}),(p=f.size>0)&&u(b)}function h(t){let e;return p||(p=!0,u(b)),{promise:new Promise(n=>{f.add(e=[t,n])}),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function k(){return t=" ",document.createTextNode(t);var t}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let w,O=0,_={};function x(t,e,n,l,r,o,a,i=0){const s=16.666/l;let c="{\n";for(let t=0;t<=1;t+=s){const l=e+(n-e)*o(t);c+=100*t+`%{${a(l,1-l)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`;if(!_[f]){if(!d){const t=$("style");document.head.appendChild(t),d=t.sheet}_[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${l}ms linear ${r}ms 1 both`,O+=1,f}function E(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--O&&u(()=>{if(O)return;let t=d.cssRules.length;for(;t--;)d.deleteRule(t);_={}})}function M(t){w=t}const j=[],q=[],C=[],S=[],T=Promise.resolve();let P,R=!1;function A(t){C.push(t)}function B(){const t=new Set;do{for(;j.length;){const t=j.shift();M(t),N(t.$$)}for(;q.length;)q.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];t.has(n)||(n(),t.add(n))}C.length=0}while(j.length);for(;S.length;)S.pop()();R=!1}function N(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(A))}function I(){return P||(P=Promise.resolve()).then(()=>{P=null}),P}function L(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const z=new Set;let D;function F(){D={r:0,c:[],p:D}}function G(){D.r||o(D.c),D=D.p}function H(t,e){t&&t.i&&(z.delete(t),t.i(e))}function J(t,e,n,l){if(t&&t.o){if(z.has(t))return;z.add(t),D.c.push(()=>{z.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}const K={duration:0};function Q(n,l,r){let o,i,s=l(n,r),u=!1,f=0;function d(){o&&E(n,o)}function p(){const{delay:l=0,duration:r=300,easing:a=e,tick:p=t,css:b}=s||K;b&&(o=x(n,0,1,r,l,a,b,f++)),p(0,1);const m=c()+l,g=m+r;i&&i.abort(),u=!0,A(()=>L(n,!0,"start")),i=h(t=>{if(u){if(t>=g)return p(1,0),L(n,!0,"end"),d(),u=!1;if(t>=m){const e=a((t-m)/r);p(e,1-e)}}return u})}let b=!1;return{start(){b||(E(n),a(s)?(s=s(),I().then(p)):p())},invalidate(){b=!1},end(){u&&(d(),u=!1)}}}function U(n,l,r){let i,s=l(n,r),u=!0;const f=D;function d(){const{delay:l=0,duration:r=300,easing:a=e,tick:d=t,css:p}=s||K;p&&(i=x(n,1,0,r,l,a,p));const b=c()+l,m=b+r;A(()=>L(n,!1,"start")),h(t=>{if(u){if(t>=m)return d(0,1),L(n,!1,"end"),--f.r||o(f.c),!1;if(t>=b){const e=a((t-b)/r);d(1-e,e)}}return u})}return f.r+=1,a(s)?I().then(()=>{s=s(),d()}):d(),{end(t){t&&s.tick&&s.tick(1,0),u&&(i&&E(n,i),u=!1)}}}function V(t,e){J(t,1,1,()=>{e.delete(t.key)})}function W(t,e,n,l,r,o,a,i,s,c,u,f){let d=t.length,p=o.length,b=d;const h={};for(;b--;)h[t[b].key]=b;const m=[],g=new Map,y=new Map;for(b=p;b--;){const t=f(r,o,b),i=n(t);let s=a.get(i);s?l&&s.p(e,t):(s=c(i,t)).c(),g.set(i,m[b]=s),i in h&&y.set(i,Math.abs(b-h[i]))}const $=new Set,k=new Set;function v(t){H(t,1),t.m(i,u),a.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],l=e.key,r=n.key;e===n?(u=e.first,d--,p--):g.has(r)?!a.has(l)||$.has(l)?v(e):k.has(r)?d--:y.get(l)>y.get(r)?(k.add(l),v(e)):($.add(r),d--):(s(n,a),d--)}for(;d--;){const e=t[d];g.has(e.key)||s(e,a)}for(;p;)v(m[p-1]);return m}function X(t,e){t.$$.dirty||(j.push(t),R||(R=!0,T.then(B)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function Y(e,n,i,s,c,u){const f=w;M(e);const d=n.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:null};let b=!1;var h;p.ctx=i?i(e,d,(t,n,l=n)=>(p.ctx&&c(p.ctx[t],p.ctx[t]=l)&&(p.bound[t]&&p.bound[t](l),b&&X(e,t)),n)):d,p.update(),b=!0,o(p.before_update),p.fragment=s(p.ctx),n.target&&(n.hydrate?p.fragment.l((h=n.target,Array.from(h.childNodes))):p.fragment.c(),n.intro&&H(e.$$.fragment),function(t,e,n){const{fragment:r,on_mount:i,on_destroy:s,after_update:c}=t.$$;r.m(e,n),A(()=>{const e=i.map(l).filter(a);s?s.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(A)}(e,n.target,n.anchor),B()),M(f)}class Z{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function tt(t){const e=t-1;return e*e*e+1}function et(t){var{fallback:e}=t,l=function(t,e){var n={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(n[l]=t[l]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(t);r<l.length;r++)e.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(t,l[r])&&(n[l[r]]=t[l[r]])}return n}(t,["fallback"]);const r=new Map,o=new Map;function i(t,r,o){return(i,s)=>(t.set(s.key,{rect:i.getBoundingClientRect()}),()=>{if(r.has(s.key)){const{rect:t}=r.get(s.key);return r.delete(s.key),function(t,e,r){const{delay:o=0,duration:i=(t=>30*Math.sqrt(t)),easing:s=tt}=n(n({},l),r),c=e.getBoundingClientRect(),u=t.left-c.left,f=t.top-c.top,d=t.width/c.width,p=t.height/c.height,b=Math.sqrt(u*u+f*f),h=getComputedStyle(e),m="none"===h.transform?"":h.transform,g=+h.opacity;return{delay:o,duration:a(i)?i(b):i,easing:s,css:(t,e)=>`\n\t\t\t\topacity: ${t*g};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${m} translate(${e*u}px,${e*f}px) scale(${t+(1-t)*d}, ${t+(1-t)*p});\n\t\t\t`}}(t,i,s)}return t.delete(s.key),e&&e(i,s,o)})}return[i(o,r,!1),i(r,o,!0)]}function nt(t,e,n){const l=Object.create(t);return l.ball=e[n],l}function lt(t,e,n){const l=Object.create(t);return l.ball=e[n],l}function rt(t,e,n){const l=Object.create(t);return l.ball=e[n],l}function ot(t,e){var n,l,r,o,a,i,s;function c(){return e.click_handler(e)}return{key:t,first:null,c(){var t,o,a,i;n=$("div"),v(l=$("img"),"src",r=e.ball.basketball?ut:ct),v(l,"alt","ball"),o="click",a=c,(t=n).addEventListener(o,a,i),s=(()=>t.removeEventListener(o,a,i)),this.first=n},m(t,e){g(t,n,e),m(n,l),i=!0},p(t,n){e=n,i&&!t.balls||r===(r=e.ball.basketball?ut:ct)||v(l,"src",r)},i(t){i||(A(()=>{a&&a.end(1),o||(o=Q(l,e.receive,{key:e.ball.id})),o.start()}),i=!0)},o(t){o&&o.invalidate(),a=U(l,e.send,{key:e.ball.id}),i=!1},d(t){t&&(y(n),a&&a.end()),s()}}}function at(t,e){var n,l,r,o,a,i,s;return{key:t,first:null,c(){n=$("div"),l=$("img"),o=k(),v(l,"src",r=e.ball.basketball?ut:ct),v(l,"alt","ball"),this.first=n},m(t,e){g(t,n,e),m(n,l),m(n,o),s=!0},p(t,e){s&&!t.rampOne||r===(r=e.ball.basketball?ut:ct)||v(l,"src",r)},i(t){s||(A(()=>{i&&i.end(1),a||(a=Q(n,e.receive,{key:e.ball.id})),a.start()}),s=!0)},o(t){a&&a.invalidate(),i=U(n,e.send,{key:e.ball.id}),s=!1},d(t){t&&(y(n),i&&i.end())}}}function it(t,e){var n,l,r,o,a,i,s;return{key:t,first:null,c(){n=$("div"),l=$("img"),o=k(),v(l,"src",r=e.ball.basketball?ut:ct),v(l,"alt","ball"),this.first=n},m(t,e){g(t,n,e),m(n,l),m(n,o),s=!0},p(t,e){s&&!t.rampTwo||r===(r=e.ball.basketball?ut:ct)||v(l,"src",r)},i(t){s||(A(()=>{i&&i.end(1),a||(a=Q(n,e.receive,{key:e.ball.id})),a.start()}),s=!0)},o(t){a&&a.invalidate(),i=U(n,e.send,{key:e.ball.id}),s=!1},d(t){t&&(y(n),i&&i.end())}}}function st(t){var e,n,l,r,o,a,i,s,c=[],u=new Map,f=[],d=new Map,p=[],b=new Map;let h=t.balls;const w=t=>t.ball.id;for(let e=0;e<h.length;e+=1){let n=rt(t,h,e),l=w(n);u.set(l,c[e]=ot(l,n))}let O=t.rampOne;const _=t=>t.ball.id;for(let e=0;e<O.length;e+=1){let n=lt(t,O,e),l=_(n);d.set(l,f[e]=at(l,n))}let x=t.rampTwo;const E=t=>t.ball.id;for(let e=0;e<x.length;e+=1){let n=nt(t,x,e),l=E(n);b.set(l,p[e]=it(l,n))}return{c(){e=$("div"),n=$("div");for(let t=0;t<c.length;t+=1)c[t].c();l=k(),r=$("div"),o=$("div");for(let t=0;t<f.length;t+=1)f[t].c();a=k(),i=$("div");for(let t=0;t<p.length;t+=1)p[t].c();v(n,"class","pool svelte-1cqywrl"),v(o,"class","ramp svelte-1cqywrl"),v(i,"class","ramp svelte-1cqywrl"),v(r,"class","ramp-container svelte-1cqywrl"),v(e,"class","board svelte-1cqywrl")},m(t,u){g(t,e,u),m(e,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null);m(e,l),m(e,r),m(r,o);for(let t=0;t<f.length;t+=1)f[t].m(o,null);m(r,a),m(r,i);for(let t=0;t<p.length;t+=1)p[t].m(i,null);s=!0},p(t,e){const l=e.balls;F(),c=W(c,t,w,1,e,l,u,n,V,ot,null,rt),G();const r=e.rampOne;F(),f=W(f,t,_,1,e,r,d,o,V,at,null,lt),G();const a=e.rampTwo;F(),p=W(p,t,E,1,e,a,b,i,V,it,null,nt),G()},i(t){if(!s){for(let t=0;t<h.length;t+=1)H(c[t]);for(let t=0;t<O.length;t+=1)H(f[t]);for(let t=0;t<x.length;t+=1)H(p[t]);s=!0}},o(t){for(let t=0;t<c.length;t+=1)J(c[t]);for(let t=0;t<f.length;t+=1)J(f[t]);for(let t=0;t<p.length;t+=1)J(p[t]);s=!1},d(t){t&&y(e);for(let t=0;t<c.length;t+=1)c[t].d();for(let t=0;t<f.length;t+=1)f[t].d();for(let t=0;t<p.length;t+=1)p[t].d()}}}let ct="icons/soccer.png",ut="icons/basketball.png";function ft(t,e,n){const[l,r]=et({duration:t=>Math.sqrt(1200*t)});let o=1,a=[{id:o++,basketball:!0},{id:o++,basketball:!0},{id:o++,basketball:!1},{id:o++,basketball:!1},{id:o++,basketball:!0},{id:o++,basketball:!1},{id:o++,basketball:!0},{id:o++,basketball:!0},{id:o++,basketball:!1}],i=[...a],s=[],c=[];function u(t){t.basketball?n("rampOne",s=[t,...s]):n("rampTwo",c=[t,...c]),n("balls",i=i.filter(e=>t.id!=e.id))}setInterval(()=>{i.length>0?u(i[0]):(n("balls",i=[...a]),n("rampOne",s=[]),n("rampTwo",c=[]))},1e3);return{send:l,receive:r,balls:i,rampOne:s,rampTwo:c,filterBall:u,click_handler:({ball:t})=>u(t)}}return new class extends Z{constructor(t){super(),Y(this,t,ft,st,i,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
