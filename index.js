import{S as d,a as f,i as a}from"./assets/vendor-D2fEQMtT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=document.querySelector(".gallery"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <ul class="img-info">
          <li><b>Likes:</b> ${e.likes}</li>
          <li><b>Views:</b> ${e.views}</li>
          <li><b>Comments:</b> ${e.comments}</li>
          <li><b>Downloads:</b> ${e.downloads}</li>
        </ul>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}const g="https://pixabay.com/api/",h="53339323-41a78725396da037424652e11";async function b(s,o=1){const e={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await f.get(g,{params:e})).data}const l=document.querySelector(".form"),u=document.querySelector(".loader");function L(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}l.addEventListener("submit",q);async function q(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.error({message:"Enter search query!",position:"topRight"});return}y(),L();try{const e=await b(o);if(e.hits.length===0){a.warning({message:"No images found. Try another query.",position:"topRight"});return}p(e.hits),l.reset()}catch(e){a.error({message:"Error fetching images",position:"topRight"}),console.error(e)}finally{w()}}
//# sourceMappingURL=index.js.map
