"use strict";(globalThis["webpackChunklp2m_app"]=globalThis["webpackChunklp2m_app"]||[]).push([[698],{4698:(a,e,l)=>{l.r(e),l.d(e,{default:()=>A});var n=l(1347),t=l(7763),s=l(4187),u=l(8094),o=l(1099),d=l(8050),c=l(7379),i=l(4257);const b=(0,n.Lk)("span",{class:"text-weight-light"}," Data Pengabdian ",-1),p={class:"text-subtitle1"},r={__name:"IndexPengabdian",setup(a){const e=(0,s.KR)(!1),l=(0,s.KR)([]),r=(0,s.KR)(!1),{getUser:g}=(0,i.A)();async function m(){const a=await(0,u.A)({endPoint:"projects/by-user",loading:e});a&&(l.value=a.projects)}return(0,n.sV)((async()=>{await m()})),(a,u)=>{const i=(0,n.g2)("q-btn"),m=(0,n.g2)("q-card"),k=(0,n.g2)("q-dialog");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(m,{class:"",style:{}},{default:(0,n.k6)((()=>[(0,n.bF)(o.A,null,{action:(0,n.k6)((()=>[(0,n.bF)(i,{"no-caps":"",label:"Tambah",icon:"add",dense:"",class:"q-px-md q-mr-sm",outline:"",onClick:u[0]||(u[0]=a=>r.value=!0)})])),default:(0,n.k6)((()=>[b,(0,n.Lk)("span",p,(0,t.v_)((0,s.R1)(g).full_name),1)])),_:1}),(0,n.bF)(c.A,{data:l.value,loading:e.value,"filter-by":"pengabdian"},null,8,["data","loading"])])),_:1}),(0,n.bF)(k,{modelValue:r.value,"onUpdate:modelValue":u[2]||(u[2]=a=>r.value=a)},{default:(0,n.k6)((()=>[(0,n.bF)(d.A,{data:{jenis:"Pengabdian"},onSuccessSubmit:u[1]||(u[1]=e=>a.$router.push(`/projects/${e.id}`)),onSuccessDelete:a=>null})])),_:1},8,["modelValue"])],64)}}};var g=l(3341),m=l(2677),k=l(45),h=l(272),v=l.n(h);const _=r,A=_;v()(r,"components",{QCard:g.A,QBtn:m.A,QDialog:k.A})}}]);