"use strict";(globalThis["webpackChunklp2m_app"]=globalThis["webpackChunklp2m_app"]||[]).push([[25],{4025:(e,l,a)=>{a.r(l),a.d(l,{default:()=>W});var i=a(1347),t=a(7763),n=a(8633),s=a(8094),u=a(7509),v=a(1099),c=a(4187),o=a(455);const d={key:0,class:"q-pa-sm"},p={key:1},r=(0,i.Lk)("div",{class:"text-caption text-italic"},"Judul",-1),m=(0,i.Lk)("div",{class:"text-caption text-italic"},"File",-1),k=["href"],b=(0,i.Lk)("div",{class:"text-caption text-italic"},"Tipe",-1),q=(0,i.Lk)("div",{class:"text-caption text-italic"},"Reviewer",-1),w=(0,i.Lk)("div",{class:"text-caption text-italic"},"Kesimpulan",-1),L={class:"text-subtitle1"},_={class:"q-mt-sm"},x=(0,i.Lk)("div",{class:"text-caption text-italic"},"Review",-1),g=["innerHTML"],f={__name:"IndexPage",setup(e){const{params:l}=(0,o.lq)(),a=(0,c.KR)(!1),f=(0,c.KR)({}),F=(0,c.KR)({}),y=(0,c.KR)(!1),A=(0,c.KR)({});async function C(){const e=await(0,s.A)({endPoint:`penelitian-review/${l.id}`,loading:a});e&&(f.value=e.review,F.value=e.penelitian)}(0,i.sV)((async()=>{await C(),Object.assign(A.value,f.value)}));const R=async()=>{const e={kesimpulan:A.value.kesimpulan,review:A.value.review},i=await(0,u.A)({endPoint:`penelitian-review/${l.id}`,data:e,loading:a});i&&(y.value=!1,await C())};return(e,l)=>{const s=(0,i.g2)("q-btn"),u=(0,i.g2)("q-spinner-cube"),c=(0,i.g2)("RouterLink"),o=(0,i.g2)("q-card-section"),Q=(0,i.g2)("q-separator"),h=(0,i.g2)("q-input"),K=(0,i.g2)("q-editor"),V=(0,i.g2)("q-form"),S=(0,i.g2)("q-card");return(0,i.uX)(),(0,i.Wv)(S,null,{default:(0,i.k6)((()=>[(0,i.bF)(v.A,null,{action:(0,i.k6)((()=>[(0,i.bF)(s,{"no-caps":"",icon:"sync",dense:"",class:"q-px-sm q-mr-sm",outline:"",onClick:C})])),default:(0,i.k6)((()=>[(0,i.eW)(" Review Penelitian ")])),_:1}),a.value?((0,i.uX)(),(0,i.CE)("div",d,[(0,i.bF)(u,{color:"brown-12",size:"8em",class:"flex q-ma-lg q-mx-auto"})])):((0,i.uX)(),(0,i.CE)("div",p,[(0,i.bF)(o,{class:"q-pa-sm flex justify-start q-gutter-md"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",null,[r,(0,i.Lk)("div",null,(0,t.v_)(F.value?.judul),1)]),(0,i.Lk)("div",null,[m,(0,i.Lk)("div",null,[(0,i.Lk)("a",{href:f.value?.file_url},(0,t.v_)(f.value?.file?.split("~").pop()),9,k)])]),(0,i.Lk)("div",null,[b,(0,i.Lk)("div",null,(0,t.v_)(f.value?.type?.toUpperCase()),1)]),(0,i.Lk)("div",null,[q,(0,i.Lk)("div",null,[(0,i.bF)(c,{to:`/settings/users/${F.value?.reviewer_user_id}`},{default:(0,i.k6)((()=>[(0,i.eW)((0,t.v_)(F.value?.reviewer_user_name),1)])),_:1},8,["to"])])])])),_:1}),(0,i.bF)(Q),(0,i.bF)(s,{"no-caps":"",label:"Review",icon:"edit",dense:"",class:"q-px-sm q-ma-sm",outline:"",onClick:l[0]||(l[0]=e=>y.value=!y.value)}),y.value?((0,i.uX)(),(0,i.Wv)(o,{key:1,class:"q-pa-sm"},{default:(0,i.k6)((()=>[(0,i.bF)(V,{onSubmit:(0,n.D$)(R,["prevent"])},{default:(0,i.k6)((()=>[(0,i.bF)(h,{class:"q-mt-sm",dense:"",outlined:"",label:"Kesimpulan",modelValue:A.value.kesimpulan,"onUpdate:modelValue":l[1]||(l[1]=e=>A.value.kesimpulan=e)},null,8,["modelValue"]),(0,i.bF)(K,{class:"q-mt-sm",modelValue:A.value.review,"onUpdate:modelValue":l[2]||(l[2]=e=>A.value.review=e)},null,8,["modelValue"]),(0,i.bF)(s,{color:"brown-8",type:"submit",label:"Simpan",class:"q-mt-sm","no-caps":""})])),_:1})])),_:1})):((0,i.uX)(),(0,i.Wv)(o,{key:0,class:"q-pa-sm"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",null,[w,(0,i.Lk)("div",L,(0,t.v_)(f.value?.kesimpulan),1)]),(0,i.Lk)("div",_,[x,(0,i.Lk)("div",{innerHTML:f.value?.review},null,8,g)])])),_:1}))]))])),_:1})}}};var F=a(3341),y=a(2677),A=a(1402),C=a(222),R=a(6915),Q=a(3417),h=a(6395),K=a(5950),V=a(272),S=a.n(V);const T=f,W=T;S()(f,"components",{QCard:F.A,QBtn:y.A,QSpinnerCube:A.A,QCardSection:C.A,QSeparator:R.A,QForm:Q.A,QInput:h.A,QEditor:K.A})}}]);