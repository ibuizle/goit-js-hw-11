import{S as d,a as m,i as n}from"./assets/vendor-D2fEQMtT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const o=s.map(e=>`
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
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function h(){u.style.display="block"}function l(){u.style.display="none"}const b="https://pixabay.com/api/",L="53339323-41a78725396da037424652e11";async function w(s){const o={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(b,{params:o})).data}const f=document.querySelector(".form");f.addEventListener("submit",S);async function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Enter search query!",position:"topRight"});return}g(),h();try{const e=await w(o);if(e.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}p(e.hits)}catch(e){n.error({message:"Error fetching images",position:"topRight"}),console.error(e)}finally{l(),f.reset()}}
//# sourceMappingURL=index.js.map
