import{_ as M}from"../AudioPlayer-CNdpWYtf.js";import{_ as L}from"../GiphyImage-Cqr85ic9.js";import{d as b,K as O,M as D,o as C,c as B,F as G,aB as E,v as d,aC as x,aD as K,l as m,ae as z,aE as q,b as P,e as i,f as V,i as $,k as h,aa as I,q as H,s as U,B as T}from"../modules/vue-CHHLRvXz.js";import{ad as W,ae as X,af as j,C as J,_ as Q}from"../index-DMrocUas.js";import{u as R,f as Y}from"context-BHJlDyX8.js";import"../modules/shiki-CHb-23XF.js";const Z=b({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(a){const s=a,{$clicksContext:n}=R(),p=W();let f=+s.size;return Number.isNaN(f)&&(console.warn(`[slidev] Invalid size for VClickGap: ${s.size}`),f=1),O(()=>{const c=n.currentOffset+f-1;n.register(p,{max:c,delta:f})}),D(()=>{n.unregister(p)}),(c,l)=>(C(),B(G))}}),w=["ul","ol"],ee=b({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var v,g;const a=+this.every,s=X(this.at),n=typeof s=="string";if(!s){console.warn("[slidev] Invalid at prop for v-clicks component:",s);return}const p=E("click"),f=(o,t)=>z(o,[[p,t,"",{hide:this.hide,fade:this.fade}]]),c=o=>o.flatMap(t=>x(t)&&typeof t.type=="symbol"&&Array.isArray(t.children)?c(t.children):[t]);let l=(g=(v=this.$slots).default)==null?void 0:g.call(v);if(!l)return;l=c(j(l));const k=(o,t=1)=>c(o).map(r=>{if(!x(r))return r;if(w.includes(r.type)&&Array.isArray(r.children)){const _=u(r.children,t+1);return d(r,{},_)}return d(r)});let N=1,e=0;const u=(o,t=1)=>c(o).map(r=>{if(!x(r)||r.type===K)return r;const _=+s+Math.ceil(N++/a)-1;let S;t<+this.depth&&Array.isArray(r.children)?S=d(r,{},k(r.children,t)):S=d(r);const A=_-e;return e=_,f(S,n?A>=0?`+${A}`:`${A}`:_)}),y=()=>m(Z,{size:+s+Math.ceil((N-1)/a)-1-e});if(this.handleSpecialElements){if(l.length===1&&w.includes(l[0].type)&&Array.isArray(l[0].children))return d(l[0],{},[...u(l[0].children),y()]);if(l.length===1&&l[0].type==="table"){const o=l[0];if(Array.isArray(o.children))return d(o,{},o.children.map(t=>x(t)?t.type==="tbody"&&Array.isArray(t.children)?d(t,{},[...u(t.children),y()]):d(t):t))}}return[...u(l),y()]}}),te=b({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:a=>d("span",a)}},render(){return d(ee,{every:J,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var a,s;return(s=(a=this.$slots).default)==null?void 0:s.call(a).map(n=>n.type===q?this.wrapText(n):n)}})}}),se=b({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(a){const s=a;return(n,p)=>(C(),P("div",{class:$(["slidev-layout two-columns w-full h-full grid grid-cols-2",s.layoutClass])},[i("div",{class:$(["col-left",s.class])},[V(n.$slots,"default")],2),i("div",{class:$(["col-right",s.class])},[V(n.$slots,"right")],2)],2))}}),re={class:"text-xl"},le={class:"ml-4"},ne={class:"text-center mb-4"},ae={__name:"slides.md__slidev_3",setup(a){const{$slidev:s,$nav:n,$clicksContext:p,$clicks:f,$page:c,$renderContext:l,$frontmatter:k}=R();return p.setup(),(N,e)=>{const u=te,y=L,v=M,g=E("click");return C(),B(se,H(U(T(Y)(T(k),2))),{right:h(o=>[i("div",le,[z((C(),P("div",ne,e[6]||(e[6]=[i("h3",null,"THE PROCESS",-1)]))),[[g]]),e[7]||(e[7]=i("div",{class:"border-2 border-green-500 p-4 rounded-lg bg-black/50"},[i("pre",{class:"text-sm"},`      1. Extract voice data 📊
      2. Feed to RVC model 🤖
      3. ?????? 
      4. PROFIT 💰
    `)],-1))]),m(v)]),default:h(()=>[e[8]||(e[8]=i("h1",null,"🧠 VITALIK’S VOICE REVELATION 🎙️",-1)),i("div",re,[m(u,null,{default:h(()=>e[0]||(e[0]=[I("Found Vitalik's sacred interview 🎤")])),_:1}),e[3]||(e[3]=i("br",null,null,-1)),m(u,null,{default:h(()=>e[1]||(e[1]=[I("Trained RVC model to channel his essence 🤖")])),_:1}),e[4]||(e[4]=i("br",null,null,-1)),m(u,null,{default:h(()=>e[2]||(e[2]=[I(`Created "What's the ticker?" (v16) 🎵`)])),_:1}),e[5]||(e[5]=i("br",null,null,-1))]),m(y,{tag:"matrix"})]),_:1},16)}}},fe=Q(ae,[["__scopeId","data-v-228d4e86"]]);export{fe as default};
