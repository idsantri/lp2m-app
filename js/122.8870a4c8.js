"use strict";(globalThis["webpackChunklp2m_app"]=globalThis["webpackChunklp2m_app"]||[]).push([[122],{9122:(a,l,e)=>{e.r(l),e.d(l,{default:()=>_});var n=e(1347),t=e(9502),s=e(8094),u=e(4187),o=e(9855),i=e(7887);const d={__name:"IndexPage",setup(a){const l=(0,u.KR)(!1),e=(0,u.KR)([]),d=(0,u.KR)(!1);async function r(){const a=await(0,s.A)({endPoint:"user/penelitian",loading:l});e.value=a.penelitian}(0,n.sV)((async()=>{await r()}));const c=[{name:"cr_at",label:"Dibuat",align:"left",field:"cr_at",sortable:!0,format:a=>(0,t.GP)(new Date(a),"yyyy-MM-dd")},{name:"judul",label:"Judul",align:"left",field:"judul",sortable:!0},{name:"status_proposal",label:"Status Proposal",align:"left",field:"status_proposal",sortable:!0},{name:"status_laporan",label:"Status Laporan",align:"left",field:"status_laporan",sortable:!0}];return(a,t)=>{const s=(0,n.g2)("q-btn"),u=(0,n.g2)("q-table"),r=(0,n.g2)("q-card"),p=(0,n.g2)("q-dialog");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(r,{class:"",style:{}},{default:(0,n.k6)((()=>[(0,n.bF)(o.A,null,{action:(0,n.k6)((()=>[(0,n.bF)(s,{"no-caps":"",label:"Tambah",icon:"add",dense:"",class:"q-px-md q-mr-sm",outline:"",onClick:t[0]||(t[0]=a=>d.value=!0)})])),default:(0,n.k6)((()=>[(0,n.eW)("Data Penelitian ")])),_:1}),(0,n.bF)(u,{class:"q-px-sm",rows:e.value,columns:c,"row-key":"id",loading:l.value,onRowClick:t[1]||(t[1]=(l,e,n)=>a.$router.push(`/user/penelitian/${e.id}`))},null,8,["rows","loading"])])),_:1}),(0,n.bF)(p,{modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=a=>d.value=a)},{default:(0,n.k6)((()=>[(0,n.bF)(i.A,{data:{},onSuccessSubmit:t[2]||(t[2]=l=>a.$router.push(`/user/penelitian/${l.id}`)),onSuccessDelete:a=>null})])),_:1},8,["modelValue"])],64)}}};var r=e(3341),c=e(2677),p=e(1765),b=e(45),m=e(272),g=e.n(m);const f=d,_=f;g()(d,"components",{QCard:r.A,QBtn:c.A,QTable:p.A,QDialog:b.A})}}]);