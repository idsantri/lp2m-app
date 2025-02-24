"use strict";(globalThis["webpackChunklp2m_app"]=globalThis["webpackChunklp2m_app"]||[]).push([[996],{404:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(1347),o=t(7763);const l=(0,a.Lk)("div",null,[(0,a.Lk)("img",{src:"/icons/icon-256x256.png",alt:"logo/lambang"})],-1),i=[l],s={__name:"LogoCircle",props:{size:{type:Number,default:100},border:{type:Number,default:4}},setup(e){return(n,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"container-logo",style:(0,o.Tr)({width:`${e.size}px`,height:`${e.size}px`,borderWidth:`${e.border}px`})},i,4))}},r=s,u=r},675:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(1131),o=t(4280),l=t(5469),i=function(e,n,t,a){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{r(a.next(e))}catch(n){l(n)}}function s(e){try{r(a["throw"](e))}catch(n){l(n)}}function r(e){e.done?t(e.value):o(e.value).then(i,s)}r((a=a.apply(e,n||[])).next())}))};function s(e){return i(this,arguments,void 0,(function*({endPoint:e,message:n='<span style="color: red">Hapus data ini?</span>',params:t,loading:i,notify:s=!0,config:r}){const u=yield(0,l.Ix)(n,!0);if(!u)return!1;try{i&&"boolean"===typeof i.value&&(i.value=!0);const n=Object.assign({},r);t&&(n.params=t);const{data:o}=yield a.A.delete(e,n);return s&&(0,l.VX)(o.message),!0}catch(c){return(0,o.A)(c),!1}finally{i&&"boolean"===typeof i.value&&(i.value=!1)}}))}const r=s},783:(e,n,t)=>{function a(e){return e.split(" ").map((e=>e[0].toUpperCase()+e.substring(1).toLowerCase())).join(" ")}function o(e){return e.split("-").map((e=>e[0].toUpperCase()+e.substring(1).toLowerCase())).join(" ")}t.d(n,{Zj:()=>o,nx:()=>a})},4280:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(9100),o=t(9463),l=t(5469);function i(e){var n,t,i,s,r,u,c;if(a.A.isAxiosError(e))if(e.response){const a=null===(n=e.response.data)||void 0===n?void 0:n.message;a?(0,l.UG)((0,o.KJ)(a)):console.log(`Response error during ${null===(i=null===(t=e.config)||void 0===t?void 0:t.method)||void 0===i?void 0:i.toUpperCase()} ${null===(s=e.config)||void 0===s?void 0:s.url}`,e)}else console.error(`General error during ${null===(u=null===(r=e.config)||void 0===r?void 0:r.method)||void 0===u?void 0:u.toUpperCase()} ${null===(c=e.config)||void 0===c?void 0:c.url}`,e);else console.error("Unexpected error: ",e)}const s=i},6162:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(6305),o=t(6779);function l(e){const n={};return e.forEach((e=>{n[e.url]=[]})),n}const i=(0,a.nY)("lists-input",{state:()=>l(o.A),getters:{},actions:{checkState(e){return!!this.$state.hasOwnProperty(e)},getByStateName(e){return this[e]},getByStateName_arr(e){return this[e].map((e=>e.val0))}},persist:{storage:localStorage}})},6194:(e,n,t)=>{t.d(n,{M:()=>i});var a=t(1131),o=t(4280),l=function(e,n,t,a){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{r(a.next(e))}catch(n){l(n)}}function s(e){try{r(a["throw"](e))}catch(n){l(n)}}function r(e){e.done?t(e.value):o(e.value).then(i,s)}r((a=a.apply(e,n||[])).next())}))};function i(e){return l(this,arguments,void 0,(function*({loadingArray:e,loading:n,key:t,sort:l=null,url:i=""}){e&&(e.value[t]=!0),n&&"boolean"===typeof n.value&&(n.value=!0);const s=(null===i||void 0===i?void 0:i.length)?i:`lists/${t}`,r=t.replace(/-/g,"_");try{const{data:e}=yield a.A.get(s),n=e.data[r];return"asc"===l||!0===l?n.sort(((e,n)=>e.val0.localeCompare(n.val0,void 0,{sensitivity:"base"}))):"desc"!==l&&!1!==l||n.sort(((e,n)=>n.val0.localeCompare(e.val0,void 0,{sensitivity:"base"}))),n}catch(u){return(0,o.A)(u),!1}finally{e&&(e.value[t]=!1),n&&"boolean"===typeof n.value&&(n.value=!1)}}))}},6779:(e,n,t)=>{t.d(n,{A:()=>l});const a=[{url:"prodi",label:"Prodi",style:"single",column:1,protected:!1,sort:"asc"},{url:"status-review",label:"Status Review",style:"single",column:1,protected:!1,sort:"asc"}],o=Object.values(a).sort(((e,n)=>e.label>n.label?1:-1)),l=o},7509:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(1131),o=t(4280),l=t(5469),i=function(e,n,t,a){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{r(a.next(e))}catch(n){l(n)}}function s(e){try{r(a["throw"](e))}catch(n){l(n)}}function r(e){e.done?t(e.value):o(e.value).then(i,s)}r((a=a.apply(e,n||[])).next())}))};function s(e){return i(this,arguments,void 0,(function*({endPoint:e,data:n,confirm:t=!0,message:i="Update data ini?",loading:s,notify:r=!0,params:u,config:c}){if(t){const e=yield(0,l.Ix)(i,!0);if(!e)return!1}try{s&&"boolean"===typeof s.value&&(s.value=!0);const t=Object.assign({},c);u&&(t.params=u);const o=yield a.A.put(e,n,t);return r&&(0,l.VX)(o.data.message),o.data.data}catch(d){return(0,o.A)(d),!1}finally{s&&"boolean"===typeof s.value&&(s.value=!1)}}))}const r=s},7887:(e,n,t)=>{t.d(n,{A:()=>P});var a=t(1347),o=t(8633),l=t(4187),i=t(7509),s=t(9987);const r={__name:"FormActions",props:{btnDelete:Boolean},setup(e){const n=e;return(e,t)=>{const o=(0,a.g2)("q-btn"),l=(0,a.g2)("q-space"),i=(0,a.g2)("q-card-actions"),s=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(i,{class:"flex bg-brown-6"},{default:(0,a.k6)((()=>[n.btnDelete?((0,a.uX)(),(0,a.Wv)(o,{key:0,label:"Hapus",class:"bg-red text-red-1","no-caps":"",onClick:t[0]||(t[0]=n=>e.$emit("onDelete"))})):(0,a.Q3)("",!0),(0,a.bF)(l),(0,a.bo)((0,a.bF)(o,{label:"Tutup",class:"bg-brown-11","no-caps":"",id:"btn-close-crud"},null,512),[[s]]),(0,a.bF)(o,{type:"submit",label:"Simpan",class:"bg-brown-10 text-brown-11","no-caps":""})])),_:1})}}};var u=t(5034),c=t(2677),d=t(5873),p=t(1038),f=t(272),v=t.n(f);const g=r,m=g;v()(r,"components",{QCardActions:u.A,QBtn:c.A,QSpace:d.A}),v()(r,"directives",{ClosePopup:p.A});var b=t(9678),y=t(675);const h={key:0},A={__name:"CrudPenelitian",props:{data:Object},emits:["successSubmit","successDelete"],setup(e,{emit:n}){const t=e,r=n,u=(0,l.KR)({}),c=(0,l.KR)(!1);async function d(){const e={judul:u.value.judul,deskripsi:u.value.deskripsi,anggota:u.value.anggota};let n=null;n=u.value.id?await(0,i.A)({endPoint:`user/penelitian/${u.value.id}`,data:e,confirm:!0,notify:!0,loading:c}):await(0,b.A)({endPoint:"user/penelitian",data:e,notify:!0,loading:c}),n&&(document.getElementById("btn-close-crud").click(),r("successSubmit",n.penelitian))}const p=async()=>{const e=await(0,y.A)({endPoint:`user/penelitian/${u.value.id}`,loading:c});e&&r("successDelete")};return(0,a.sV)((async()=>{Object.assign(u.value,t.data)})),(e,n)=>{const l=(0,a.g2)("q-spinner-cube"),i=(0,a.g2)("q-dialog"),r=(0,a.g2)("q-input"),f=(0,a.g2)("q-card-section"),v=(0,a.g2)("q-form"),g=(0,a.g2)("q-card");return(0,a.uX)(),(0,a.Wv)(g,{class:"full-width",style:{"max-width":"425px"}},{default:(0,a.k6)((()=>[(0,a.bF)(v,{onSubmit:(0,o.D$)(d,["prevent"])},{default:(0,a.k6)((()=>[(0,a.bF)(s.A,{title:"Input Penelitian","is-new":!!t.data.id},null,8,["is-new"]),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[c.value?((0,a.uX)(),(0,a.CE)("div",h,[(0,a.bF)(i,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=e=>c.value=e),persistent:""},{default:(0,a.k6)((()=>[(0,a.bF)(l,{color:"brown-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])),_:1},8,["modelValue"])])):(0,a.Q3)("",!0),(0,a.bF)(r,{class:"q-mt-sm",dense:"",outlined:"",label:"Judul",modelValue:u.value.judul,"onUpdate:modelValue":n[1]||(n[1]=e=>u.value.judul=e),hint:"Tidak boleh sama dengan judul yang sudah ada"},null,8,["modelValue"]),(0,a.bF)(r,{class:"q-mt-sm",dense:"",outlined:"",label:"Anggota",modelValue:u.value.anggota,"onUpdate:modelValue":n[2]||(n[2]=e=>u.value.anggota=e),hint:"Selain Anda sendiri jika ada. Jika lebih dari 1 maka pisahkan dengan titik koma (;)"},null,8,["modelValue"]),(0,a.bF)(r,{class:"q-mt-lg",dense:"",outlined:"",label:"Deskripsi",modelValue:u.value.deskripsi,"onUpdate:modelValue":n[3]||(n[3]=e=>u.value.deskripsi=e),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,a.bF)(m,{"btn-delete":!!t.data.id,onOnDelete:p},null,8,["btn-delete"])])),_:1})])),_:1})}}};var w=t(3341),x=t(3417),k=t(222),C=t(45),j=t(1402),q=t(6395);const $=A,P=$;v()(A,"components",{QCard:w.A,QForm:x.A,QCardSection:k.A,QDialog:C.A,QSpinnerCube:j.A,QInput:q.A})},8094:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(1131),o=t(4280),l=t(5469),i=function(e,n,t,a){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{r(a.next(e))}catch(n){l(n)}}function s(e){try{r(a["throw"](e))}catch(n){l(n)}}function r(e){e.done?t(e.value):o(e.value).then(i,s)}r((a=a.apply(e,n||[])).next())}))};function s(e){return i(this,arguments,void 0,(function*({endPoint:e,loading:n,params:t,notify:i=!1,config:s}){try{n&&"boolean"===typeof n.value&&(n.value=!0);const o=Object.assign({},s);t&&(o.params=t);const{data:r}=yield a.A.get(e,o);return i&&(0,l.VX)(r.message),r.data}catch(r){return(0,o.A)(r),!1}finally{n&&"boolean"===typeof n.value&&(n.value=!1)}}))}const r=s},9463:(e,n,t)=>{t.d(n,{$r:()=>a,KJ:()=>l});const a=e=>{let n=[];return Array.isArray(e)?n=e:"object"===typeof e?n=Object.keys(e).map((n=>e[n])):n.push(e),n};const o=e=>Array.isArray(e)&&e.every((e=>"object"!==typeof e));function l(e){let n="";return o(e)?(n='<ul style="padding:0; padding-left:8px; min-width:250px;max-width:400px">',n+=e.map((e=>`<li>${e}</li>`)).join(""),n+="</ul>"):n=e,n}},9678:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(1131),o=t(4280),l=t(5469),i=function(e,n,t,a){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,l){function i(e){try{r(a.next(e))}catch(n){l(n)}}function s(e){try{r(a["throw"](e))}catch(n){l(n)}}function r(e){e.done?t(e.value):o(e.value).then(i,s)}r((a=a.apply(e,n||[])).next())}))};function s(e){return i(this,arguments,void 0,(function*({endPoint:e,data:n,confirm:t=!1,message:i="Simpan data?",loading:s,notify:r=!0,config:u,params:c}){if(t){const e=yield(0,l.Ix)(i,!0);if(!e)return!1}try{s&&"boolean"===typeof s.value&&(s.value=!0);const t=Object.assign({},u);c&&(t.params=c);const o=yield a.A.post(e,n,t);return r&&(0,l.VX)(o.data.message),o.data.data}catch(d){return(0,o.A)(d),!1}finally{s&&"boolean"===typeof s.value&&(s.value=!1)}}))}const r=s},9855:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(1347);const o={class:"flex items-center"},l={class:"text-subtitle2"};function i(e,n){const t=(0,a.g2)("q-space"),i=(0,a.g2)("q-btn"),s=(0,a.g2)("q-card-section");return(0,a.uX)(),(0,a.Wv)(s,{class:"bg-brown-7 text-brown-11 q-pa-sm"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",o,[(0,a.Lk)("div",l,[(0,a.RG)(e.$slots,"default",{},(()=>[(0,a.eW)("Judul")]))]),(0,a.bF)(t),(0,a.RG)(e.$slots,"action"),(0,a.bF)(i,{"no-caps":"",label:"Kembali",icon:"reply",dense:"",class:"q-px-md",outline:"",onClick:n[0]||(n[0]=n=>e.$router.go(-1))})])])),_:3})}var s=t(2968),r=t(222),u=t(5873),c=t(2677),d=t(272),p=t.n(d);const f={},v=(0,s.A)(f,[["render",i]]),g=v;p()(f,"components",{QCardSection:r.A,QSpace:u.A,QBtn:c.A})}}]);