function v(){}const I=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function w(t){t.forEach(Z)}function T(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ot(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ft(t){return Object.keys(t).length===0}function Pt(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?ut(n.ctx.slice(),t[1](r(e))):n.ctx}function Lt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Tt(t,e,n,r,s,o){if(s){const i=tt(e,n,r,o);t.p(i,s)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Bt(t){return t==null?"":t}const et=typeof window!="undefined";let W=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):v;const k=new Set;function nt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&G(nt)}function J(t){let e;return k.size===0&&G(nt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function _t(){z=!0}function dt(){z=!1}function ht(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:ht(1,s,u=>e[n[u]].claim_order,a))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const o=[],i=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);o.reverse(),i.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<i.length;l++){for(;a<o.length&&i[l].claim_order>=o[a].claim_order;)a++;const _=a<o.length?o[a]:null;t.insertBefore(i[l],_)}}function pt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=rt("style");return gt(it(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function xt(t,e){if(z){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){z&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function It(){return K(" ")}function Wt(){return K("")}function Gt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,s=!1){wt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function kt(t,e,n,r){return st(t,s=>s.nodeName===e,s=>{const o=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||o.push(c.name)}o.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Kt(t,e,n){return kt(t,e,n,rt)}function Et(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>K(e),!0)}function Qt(t){return Et(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Xt(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Map;let O=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:yt(e),rules:{}};return D.set(t,n),n}function P(t,e,n,r,s,o,i,c=0){const l=16.666/r;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*o(m);a+=m*100+`%{${i(g,1-g)}}
`}const _=a+`100% {${i(n,1-n)}}
}`,f=`__svelte_${At(_)}_${c}`,u=it(t),{stylesheet:d,rules:h}=D.get(u)||Nt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${s}ms 1 both`,O+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),O-=s,O||jt())}function jt(){G(()=>{O||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let C;function j(t){C=t}function B(){if(!C)throw new Error("Function called outside component initialization");return C}function Zt(t){B().$$.on_mount.push(t)}function te(t){B().$$.after_update.push(t)}function ee(t){B().$$.on_destroy.push(t)}function ne(t,e){return B().$$.context.set(t,e),e}function ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const N=[],X=[],q=[],Y=[],lt=Promise.resolve();let H=!1;function ct(){H||(H=!0,lt.then(ot))}function re(){return ct(),lt}function E(t){q.push(t)}const F=new Set;let M=0;function ot(){const t=C;do{for(;M<N.length;){const e=N[M];M++,j(e),Ct(e.$$)}for(j(null),N.length=0,M=0;X.length;)X.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(N.length);for(;Y.length;)Y.pop()();H=!1,F.clear(),j(t)}function Ct(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let A;function Q(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function $(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const R=new Set;let y;function se(){y={r:0,c:[],p:y}}function le(){y.r||w(y.c),y=y.p}function St(t,e){t&&t.i&&(R.delete(t),t.i(e))}function ce(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),y.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const U={duration:0};function oe(t,e,n){let r=e(t,n),s=!1,o,i,c=0;function l(){o&&L(t,o)}function a(){const{delay:f=0,duration:u=300,easing:d=I,tick:h=v,css:p}=r||U;p&&(o=P(t,0,1,u,f,d,p,c++)),h(0,1);const m=W()+f,g=m+u;i&&i.abort(),s=!0,E(()=>$(t,!0,"start")),i=J(x=>{if(s){if(x>=g)return h(1,0),$(t,!0,"end"),l(),s=!1;if(x>=m){const b=d((x-m)/u);h(b,1-b)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),T(r)?(r=r(),Q().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function ae(t,e,n){let r=e(t,n),s=!0,o;const i=y;i.r+=1;function c(){const{delay:l=0,duration:a=300,easing:_=I,tick:f=v,css:u}=r||U;u&&(o=P(t,1,0,a,l,_,u));const d=W()+l,h=d+a;E(()=>$(t,!1,"start")),J(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--i.r||w(i.c),!1;if(p>=d){const m=_((p-d)/a);f(1-m,m)}}return s})}return T(r)?Q().then(()=>{r=r(),c()}):c(),{end(l){l&&r.tick&&r.tick(1,0),s&&(o&&L(t,o),s=!1)}}}function ue(t,e,n,r){let s=e(t,n),o=r?0:1,i=null,c=null,l=null;function a(){l&&L(t,l)}function _(u,d){const h=u.b-o;return d*=Math.abs(h),{a:o,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=I,tick:m=v,css:g}=s||U,x={start:W()+d,b:u};u||(x.group=y,y.r+=1),i||c?c=x:(g&&(a(),l=P(t,o,u,h,d,p,g)),u&&m(0,1),i=_(x,h),E(()=>$(t,u,"start")),J(b=>{if(c&&b>c.start&&(i=_(c,h),c=null,$(t,i.b,"start"),g&&(a(),l=P(t,o,i.b,i.duration,0,p,s.css))),i){if(b>=i.end)m(o=i.b,1-o),$(t,i.b,"end"),c||(i.b?a():--i.group.r||w(i.group.c)),i=null;else if(b>=i.start){const at=b-i.start;o=i.a+i.d*p(at/i.duration),m(o,1-o)}}return!!(i||c)}))}return{run(u){T(s)?Q().then(()=>{s=s(),f(u)}):f(u)},end(){a(),i=c=null}}}function fe(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],c=e[o];if(c){for(const l in i)l in c||(r[l]=1);for(const l in c)s[l]||(n[l]=c[l],s[l]=1);t[o]=c}else for(const l in i)s[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Mt(t,e,n,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||E(()=>{const l=o.map(Z).filter(T);i?i.push(...l):w(l),t.$$.on_mount=[]}),c.forEach(E)}function qt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,r,s,o,i,c=[-1]){const l=C;j(t);const a=t.$$={fragment:null,ctx:null,props:o,update:v,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:V(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&Rt(t,f)),u}):[],a.update(),_=!0,w(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){_t();const f=$t(e.target);a.fragment&&a.fragment.l(f),f.forEach(bt)}else a.fragment&&a.fragment.c();e.intro&&St(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),dt(),ot()}j(l)}class pe{$destroy(){qt(this,1),this.$destroy=v}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as A,_e as B,qt as C,ut as D,re as E,Ot as F,Xt as G,xt as H,Gt as I,w as J,Yt as K,Pt as L,Tt as M,zt as N,Lt as O,E as P,oe as Q,ae as R,pe as S,I as T,Bt as U,Ht as V,ee as W,ie as X,ue as Y,T as Z,$t as a,Jt as b,Kt as c,bt as d,rt as e,Vt as f,Ft as g,Et as h,me as i,Ut as j,It as k,Wt as l,Qt as m,v as n,se as o,ce as p,le as q,St as r,Dt as s,K as t,ne as u,te as v,Zt as w,de as x,he as y,Mt as z};