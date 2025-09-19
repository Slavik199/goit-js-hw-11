import{a as m,S as f,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="52371243-7a3c347b3b0dd4397f9276a68",g="https://pixabay.com/api/";async function h(s){try{return(await m.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw new Error("Failed to fetch images: "+r.message)}}const u=document.querySelector(".gallery"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: ${t}</p>
            <p>Views: ${i}</p>
            <p>Comments: ${p}</p>
            <p>Downloads: ${d}</p>
          </div>
        </li>
      `).join("");u.innerHTML=r,L.refresh()}function w(){u.innerHTML=""}function b(){document.querySelector(".loader").classList.add("active")}function c(){document.querySelector(".loader").classList.remove("active")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}w(),b();try{const o=await h(r);if(c(),o.hits.length===0){n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}catch(o){c(),n.error({title:"Error",message:o.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
