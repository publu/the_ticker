import{d as g,t as l,K as _,o as a,b as s}from"./modules/vue-CHHLRvXz.js";import{u as d}from"./slidev/context-BHJlDyX8.js";import{_ as u}from"./index-DMrocUas.js";const h={class:"giphy-container"},m=["src"],f={key:1,class:"loading"},y=g({__name:"GiphyImage",props:{tag:{type:String,required:!0}},setup(r){d();const i=r,e=l(""),t={baseURL:"https://api.giphy.com/v1/gifs/",apiKey:"0UTRbFtkMxAplrohufYco5IY74U8hOes",tag:i.tag,type:"random",rating:"pg-13"},c=async()=>{const n=`${t.baseURL}${t.type}?api_key=${t.apiKey}&tag=${t.tag}&rating=${t.rating}`;try{const p=await(await fetch(n)).json();e.value=p.data.images.original.url}catch(o){console.error("Error fetching GIF:",o)}};return _(()=>{c()}),(n,o)=>(a(),s("div",h,[e.value?(a(),s("img",{key:0,src:e.value,alt:"Random GIF",class:"w-full h-auto rounded-lg shadow-lg"},null,8,m)):(a(),s("div",f,"Loading..."))]))}}),I=u(y,[["__scopeId","data-v-166f52e7"]]);export{I as _};