"use strict";(globalThis["webpackChunklp2m_app"]=globalThis["webpackChunklp2m_app"]||[]).push([[838],{3838:(e,n,o)=>{o.r(n),o.d(n,{default:()=>A});var t=o(1347),r=o(8633),i=o(4257),a=o(4187),l=o(455),s=o(5469),u=o(1131),c=o(4280),d=function(e,n,o,t){function r(e){return e instanceof o?e:new o((function(n){n(e)}))}return new(o||(o=Promise))((function(o,i){function a(e){try{s(t.next(e))}catch(n){i(n)}}function l(e){try{s(t["throw"](e))}catch(n){i(n)}}function s(e){e.done?o(e.value):r(e.value).then(a,l)}s((t=t.apply(e,n||[])).next())}))};function p(e){return d(this,arguments,void 0,(function*({endPoint:e,data:n,confirm:o=!1,message:t="Simpan data?",loading:r,notify:i=!0,params:a}){if(o){const e=yield(0,s.Ix)(t,!0);if(!e)return!1}try{r&&"boolean"===typeof r.value&&(r.value=!0);const o=yield u.A.post(e,n,{params:a});return i&&(0,s.VX)(o.data.message),o.data}catch(l){return(0,c.A)(l),!1}finally{r&&"boolean"===typeof r.value&&(r.value=!1)}}))}const f=p,v=(0,t.Lk)("div",{class:"q-pa-xs",style:{height:"12rem"}},null,-1),m={__name:"LogoutPage",emits:["title","errors"],setup(e,{emit:n}){const o=n;o("title","Keluar"),o("errors",[]);const u=(0,a.KR)(!0),c=(0,l.rd)();return(0,t.sV)((async()=>{const e=await(0,s.Ix)("Keluar dari Aplikasi?",!0);e?(await f({endPoint:"logout"}),(0,i.A)().$reset(),c.push("/")):c.go(-1)})),(e,n)=>{const o=(0,t.g2)("q-spinner-cube");return(0,t.uX)(),(0,t.CE)(t.FK,null,[v,(0,t.bo)((0,t.bF)(o,{color:"brown-12",size:"14em",class:"absolute-center"},null,512),[[r.aG,u.value]])],64)}}};var g=o(1402),y=o(272),h=o.n(y);const b=m,A=b;h()(m,"components",{QSpinnerCube:g.A})},4280:(e,n,o)=>{o.d(n,{A:()=>l});var t=o(9100),r=o(9463),i=o(5469);function a(e){var n,o,a,l,s,u,c;if(t.A.isAxiosError(e))if(e.response){const t=null===(n=e.response.data)||void 0===n?void 0:n.message;t?(0,i.UG)((0,r.KJ)(t)):console.log(`Response error during ${null===(a=null===(o=e.config)||void 0===o?void 0:o.method)||void 0===a?void 0:a.toUpperCase()} ${null===(l=e.config)||void 0===l?void 0:l.url}`,e)}else console.error(`General error during ${null===(u=null===(s=e.config)||void 0===s?void 0:s.method)||void 0===u?void 0:u.toUpperCase()} ${null===(c=e.config)||void 0===c?void 0:c.url}`,e);else console.error("Unexpected error: ",e)}const l=a},9463:(e,n,o)=>{o.d(n,{$r:()=>t,KJ:()=>i});const t=e=>{let n=[];return Array.isArray(e)?n=e:"object"===typeof e?n=Object.keys(e).map((n=>e[n])):n.push(e),n};const r=e=>Array.isArray(e)&&e.every((e=>"object"!==typeof e));function i(e){let n="";return r(e)?(n='<ul style="padding:0; padding-left:8px; min-width:250px;max-width:400px">',n+=e.map((e=>`<li>${e}</li>`)).join(""),n+="</ul>"):n=e,n}}}]);