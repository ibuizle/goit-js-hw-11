import{S as d,a as f,i as n}from"./assets/vendor-D2fEQMtT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const c=document.querySelector(".gallery"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const o=s.map(e=>`
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
    `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}const h="https://pixabay.com/api/",g="53339323-41a78725396da037424652e11",l=document.querySelector(".loader");function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}async function w(s,o=1){const e={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};b();try{return(await f.get(h,{params:e})).data}catch(i){throw console.error("Pixabay API error:",i),i}finally{L()}}const u=document.querySelector(".form");u.addEventListener("submit",S);async function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Enter search query!",position:"topRight"});return}y();try{const e=await w(o);if(e.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e.hits)}catch(e){n.error({message:"Error fetching images",position:"topRight"}),console.error(e)}finally{u.reset()}}
//# sourceMappingURL=index.js.map
