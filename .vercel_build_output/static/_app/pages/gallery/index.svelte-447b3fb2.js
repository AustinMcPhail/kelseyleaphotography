import{S as B,i as G,s as H,e as g,t as S,c as d,a as b,h as z,d as h,b as m,g as w,H as v,j as F,k as A,m as q,U as I,n as P,x as N,y as O,z as U,r as y,p as k,C as J,l as V,q as K,V as L,o as M}from"../../chunks/index-085ef875.js";import{u as Q}from"../../chunks/sanityClient-c27f389e.js";import{P as R}from"../../chunks/PageTitle-432aa8d1.js";function j(o){let e,s;return{c(){e=g("p"),s=S(o[1]),this.h()},l(t){e=d(t,"P",{class:!0});var n=b(e);s=z(n,o[1]),n.forEach(h),this.h()},h(){m(e,"class","svelte-i7386i")},m(t,n){w(t,e,n),v(e,s)},p(t,n){n&2&&F(s,t[1])},d(t){t&&h(e)}}}function W(o){let e,s,t,n,u,i,_,l,r,a=o[1]&&j(o);return{c(){e=g("a"),s=g("div"),t=g("div"),n=g("h2"),u=S(o[0]),i=A(),a&&a.c(),_=A(),l=g("div"),this.h()},l(c){e=d(c,"A",{rel:!0,class:!0,style:!0,href:!0});var f=b(e);s=d(f,"DIV",{class:!0});var E=b(s);t=d(E,"DIV",{});var p=b(t);n=d(p,"H2",{class:!0});var T=b(n);u=z(T,o[0]),T.forEach(h),i=q(p),a&&a.l(p),p.forEach(h),E.forEach(h),_=q(f),l=d(f,"DIV",{class:!0}),b(l).forEach(h),f.forEach(h),this.h()},h(){m(n,"class","svelte-i7386i"),m(s,"class","svelte-i7386i"),m(l,"class","img svelte-i7386i"),m(e,"rel","prefetch"),m(e,"class",r=I(o[2])+" svelte-i7386i"),m(e,"style",`--previewImage: url("${o[4]}");`),m(e,"href",o[3])},m(c,f){w(c,e,f),v(e,s),v(s,t),v(t,n),v(n,u),v(t,i),a&&a.m(t,null),v(e,_),v(e,l)},p(c,[f]){f&1&&F(u,c[0]),c[1]?a?a.p(c,f):(a=j(c),a.c(),a.m(t,null)):a&&(a.d(1),a=null),f&4&&r!==(r=I(c[2])+" svelte-i7386i")&&m(e,"class",r),f&8&&m(e,"href",c[3])},i:P,o:P,d(c){c&&h(e),a&&a.d()}}}function X(o,e,s){let{cover:t}=e,{title:n}=e,{quote:u}=e,{style:i}=e,{linkToAlbum:_}=e;const l=Q(t).url();return o.$$set=r=>{"cover"in r&&s(5,t=r.cover),"title"in r&&s(0,n=r.title),"quote"in r&&s(1,u=r.quote),"style"in r&&s(2,i=r.style),"linkToAlbum"in r&&s(3,_=r.linkToAlbum)},[n,u,i,_,l,t]}class Y extends B{constructor(e){super(),G(this,e,X,W,H,{cover:5,title:0,quote:1,style:2,linkToAlbum:3})}}function C(o,e,s){const t=o.slice();return t[1]=e[s],t[3]=s,t}function D(o){let e,s;return e=new Y({props:{title:o[1].title,cover:o[1].cover,linkToAlbum:o[1].url,style:o[3]%2===0?"dark":"light"}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){U(e,t,n),s=!0},p(t,n){const u={};n&1&&(u.title=t[1].title),n&1&&(u.cover=t[1].cover),n&1&&(u.linkToAlbum=t[1].url),e.$set(u)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function Z(o){let e,s,t,n;e=new R({props:{title:"Gallery",quote:"Beauty can be found in all things."}});let u=o[0],i=[];for(let l=0;l<u.length;l+=1)i[l]=D(C(o,u,l));const _=l=>k(i[l],1,1,()=>{i[l]=null});return{c(){N(e.$$.fragment),s=A();for(let l=0;l<i.length;l+=1)i[l].c();t=V()},l(l){O(e.$$.fragment,l),s=q(l);for(let r=0;r<i.length;r+=1)i[r].l(l);t=V()},m(l,r){U(e,l,r),w(l,s,r);for(let a=0;a<i.length;a+=1)i[a].m(l,r);w(l,t,r),n=!0},p(l,[r]){if(r&1){u=l[0];let a;for(a=0;a<u.length;a+=1){const c=C(l,u,a);i[a]?(i[a].p(c,r),y(i[a],1)):(i[a]=D(c),i[a].c(),y(i[a],1),i[a].m(t.parentNode,t))}for(M(),a=u.length;a<i.length;a+=1)_(a);K()}},i(l){if(!n){y(e.$$.fragment,l);for(let r=0;r<u.length;r+=1)y(i[r]);n=!0}},o(l){k(e.$$.fragment,l),i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)k(i[r]);n=!1},d(l){J(e,l),l&&h(s),L(i,l),l&&h(t)}}}async function le({fetch:o}){try{const t=await(await o("/gallery/gallery.json")).json();if(t)return{props:t}}catch{return{status:500,error:new Error("Could not load gallery")}}}function x(o,e,s){let{albums:t=[]}=e;return o.$$set=n=>{"albums"in n&&s(0,t=n.albums)},[t]}class ae extends B{constructor(e){super(),G(this,e,x,Z,H,{albums:0})}}export{ae as default,le as load};