import{_ as d,u as h,L as _,r as m,o as c,e as x,w as f,b as t,t as s,c as u,f as g,F as y}from"./index-e2a797f1.js";import{_ as v}from"./Group19-49c36de6.js";const b={data(){return{store:h(),controller:new AbortController,timer:setTimeout(console.log("will it"),2e3)}},components:{Layout:_},methods:{removeCart(e){delete this.store.cart[e],this.store.uid!=""?fetch("/api/deleteCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:e,2:this.store.uid})}):localStorage.setItem("cart",JSON.stringify(this.store.cart))},incrementProductCount:function(e){this.store.cart[e].quantity++,clearTimeout(this.timer),this.timer=setTimeout(()=>this.updateCart(e),1e3)},decrementProductCount(e){this.store.cart[e].quantity>1&&(this.store.cart[e].quantity--,clearTimeout(this.timer),this.timer=setTimeout(()=>this.updateCart(e),1e3))},updateCart(e){console.log("works"),this.store.uid!=""?fetch("/api/updateCart",{method:"POST",signal:this.controller.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify({1:parseInt(e),2:this.store.cart[e].quantity,3:this.store.uid})}):localStorage.setItem("cart",JSON.stringify(this.store.cart))}}},C={class:"flex justify-center text-[30px] mb-[10px]"},w={class:"text-gray-700"},P=t("div",{class:"flex justify-center mb-[5%]"},[t("hr",{class:"w-full bg-gray-700 h-[2px]"})],-1),k={class:"grid grid-flow-row gap-20"},S={class:"flex justify-center gap-[100px] max-[650px]:grid max-[650px]:grid-cols-2"},j=t("div",{class:"relative max-[650px]:justify-self-center"},[t("img",{class:"w-[100px] h-[100px] rounded-[5px]",src:v})],-1),A={class:"text-[25px] text-center"},T={class:"mb-[10px]"},q={class:"grid grid-flow-col self-center justify-self-center w-[160px] ml-[200px]"},B=["onClick"],O=t("p",null,"-",-1),D=[O],E={class:"justify-self-center text-[20px] mx-[4px]"},L=["onClick"],N=t("p",null,"+",-1),F=[N],I={class:"justify-self-center"},J={class:"text-[30px] text-center"},U=["onClick"],V={class:"text-center mt-[60px] mb-[60px]"},z={class:"text-[40px]"};function G(e,l,H,K,o,i){const p=m("Layout");return c(),x(p,null,{default:f(()=>[t("div",null,[t("div",C,[t("h1",w,s(o.store.langProp.cart),1)]),P,t("div",k,[(c(!0),u(y,null,g(o.store.cart,(r,n)=>(c(),u("div",S,[j,t("div",A,[t("h1",T,s(o.store.langProp.med),1),t("span",null,s(o.store.langProp.volume)+": "+s(r.volume)+s(o.store.langProp.volumeShort),1)]),t("div",q,[t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] pb-[2px] rounded-full hover:bg-[#EAAD02]",onClick:a=>i.decrementProductCount(n)},D,8,B),t("p",E,s(r.quantity)+" "+s(o.store.langProp.quantityShort),1),t("button",{class:"justify-self-end w-[30px] h-[30px] pb-[2px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:a=>i.incrementProductCount(n)},F,8,L)]),t("div",I,[t("p",J,s(o.store.sumItem(n))+" "+s(o.store.langProp.currency),1),t("div",{onClick:a=>i.removeCart(n),class:"flex justify-center bg-[#EAAD02] h-[35px] w-[160px] rounded-[6px] px-2 text-center text-white hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},[t("button",null,s(o.store.langProp.remove),1)],8,U)])]))),256))]),t("div",V,[t("p",z,s(o.store.langProp.total)+": "+s(o.store.sum())+" "+s(o.store.langProp.currency),1),t("button",{onClick:l[0]||(l[0]=(...r)=>e.purchaseUser&&e.purchaseUser(...r)),class:"w-[200px] text-center bg-[#EAAD02] px-4 py-2 rounded-[12px] text-white hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},s(o.store.langProp.buy),1)])])]),_:1})}const R=d(b,[["render",G]]);export{R as default};
