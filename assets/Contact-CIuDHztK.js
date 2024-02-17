import{r as L,j as a}from"./index-BdRk9Rzf.js";const o={origin:"https://api.emailjs.com",blockHeadless:!1},b=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},T=(e,s="https://api.emailjs.com")=>{if(!e)return;const t=b(e);o.publicKey=t.publicKey,o.blockHeadless=t.blockHeadless,o.blockList=t.blockList,o.limitRate=t.limitRate,o.origin=t.origin||s};class u{constructor(s=0,t="Network Error"){this.status=s,this.text=t}}const p=async(e,s,t={})=>{const i=await fetch(o.origin+e,{method:"POST",headers:t,body:s}),r=await i.text(),n=new u(i.status,r);if(i.ok)return n;throw n},g=(e,s,t)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s||typeof s!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},N=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},j=e=>e.webdriver||!e.languages||e.languages.length===0,v=()=>new u(451,"Unavailable For Headless Browser"),E=(e,s)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof s!="string")throw"The BlockList watchVariable has to be a string"},F=e=>{var s;return!((s=e.list)!=null&&s.length)||!e.watchVariable},_=(e,s)=>e instanceof FormData?e.get(s):e[s],y=(e,s)=>{if(F(e))return!1;E(e.list,e.watchVariable);const t=_(s,e.watchVariable);return typeof t!="string"?!1:e.list.includes(t)},w=()=>new u(403,"Forbidden"),H=(e,s)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(s&&typeof s!="string")throw"The LimitRate ID has to be a string"},S=(e,s,t)=>{const i=Number(t.getItem(e)||0);return s-Date.now()+i},f=(e,s,t)=>{setTimeout(()=>{t.removeItem(e)},s)},x=(e,s,t)=>{if(!t.throttle)return!1;H(t.throttle,t.id);const i=t.id||s,r=S(i,t.throttle,e);return r>0?(f(i,r,e),!0):(e.setItem(i,Date.now().toString()),f(i,t.throttle,e),!1)},k=()=>new u(429,"Too Many Requests"),V=(e,s,t,i)=>{const r=b(i),n=r.publicKey||o.publicKey,l=r.blockHeadless||o.blockHeadless,m={...o.blockList,...r.blockList},c={...o.limitRate,...r.limitRate};return l&&j(navigator)?Promise.reject(v()):(g(n,e,s),N(t),t&&y(m,t)?Promise.reject(w()):x(localStorage,location.pathname,c)?Promise.reject(k()):p("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:n,service_id:e,template_id:s,template_params:t}),{"Content-type":"application/json"}))},D=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},O=e=>typeof e=="string"?document.querySelector(e):e,P=(e,s,t,i)=>{const r=b(i),n=r.publicKey||o.publicKey,l=r.blockHeadless||o.blockHeadless,m={...o.blockList,...r.blockList},c={...o.limitRate,...r.limitRate};if(l&&j(navigator))return Promise.reject(v());const h=O(t);g(n,e,s),D(h);const d=new FormData(h);return y(m,d)?Promise.reject(w()):x(localStorage,location.pathname,c)?Promise.reject(k()):(d.append("lib_version","4.1.0"),d.append("service_id",e),d.append("template_id",s),d.append("user_id",n),p("/api/v1.0/email/send-form",d))},R={init:T,send:V,sendForm:P};R.init("YOUR_USER_ID");const I=()=>{const[e,s]=L.useState({name:"",email:"",message:""}),t=r=>{const{name:n,value:l}=r.target;s(m=>({...m,[n]:l}))},i=r=>{r.preventDefault();const n={...e};R.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",n).then(c=>{console.log("Correo enviado con éxito!",c.text)}).catch(c=>{console.error("Error al enviar el correo:",c.text)}),s({name:"",email:"",message:""})};return a.jsx("div",{id:"contact",className:"container",children:a.jsx("div",{className:"row justify-content-center",children:a.jsx("div",{className:"col-md-6",children:a.jsx("div",{className:"card",children:a.jsxs("div",{className:"card-body",children:[a.jsx("h2",{className:"card-title",children:"Formulario de Contacto"}),a.jsxs("form",{onSubmit:i,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Nombre:"}),a.jsx("input",{type:"text",className:"form-control",id:"name",name:"name",value:e.name,onChange:t,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email:"}),a.jsx("input",{type:"email",className:"form-control",id:"email",name:"email",value:e.email,onChange:t,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Mensaje:"}),a.jsx("textarea",{className:"form-control",id:"message",name:"message",rows:4,value:e.message,onChange:t,required:!0})]}),a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Enviar"})]})]})})})})})};export{I as default};