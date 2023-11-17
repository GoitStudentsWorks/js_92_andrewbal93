import"./assets/mobMenu-c82bdde5.js";import{a as d,N as q}from"./assets/vendor-77e6b4aa.js";d.defaults.baseURL="https://books-backend.p.goit.global/";async function k(){return(await d.get("/books/category-list")).data}async function h(){return(await d.get("/books/top-books")).data}async function f(t){return(await d.get(`/books/category?category=${t}`)).data}async function M(t){return(await d.get(`/books/${t}`)).data}h();function w(t,e){const o=e===0?"mobile-visible":"",n=e<3?"tablet-visible":"",s=e<5?"desktop-visible":"",i=e===4?"lastBooktemp":"";return`

  <li id="${t._id}" class="listener" onclick="openModal('${t._id}')">
        <div class="book-category-card ${o} ${n} ${s} ${i}">
        <div class="overlay-div">
          <img class="bookByCategory-img" src="${t.book_image}" alt="${t.title}">
          <p class="overlay-txt">quick view</p>
        </div>
        <div class="book-category-details">
          <h3 class="book-category-title">${t.title}</h3>
          <p class="book-category-author">${t.author}</p>
        </div>
      </div>
    </li>
  `}function T(t,e){const o=document.querySelector(`.book-category[data-category="${t}"]`);if(o){const n=o.querySelector(".mask"),s=e.map((r,c)=>w(r,c)).join(""),i=o.querySelector(".books-category-list");i.innerHTML=s,n.style.display="none"}}function v(){h().then(t=>{t.forEach(e=>{T(e.list_name,e.books)})}).catch(t=>console.error("Помилка при завантаженні категорій книг:",t))}function $(t){const e=document.createElement("div");e.className="book-category",e.setAttribute("data-category",t);const o=document.createElement("div");o.className="category-title";const n=document.createElement("div");n.className="mask",n.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=t.toUpperCase(),o.appendChild(s);const i=document.createElement("div");i.className="books";const r=document.createElement("ul");r.className="books-category-list",i.appendChild(r);const c=document.createElement("button");return c.id=t.replace(/\s+/g,"_"),c.classList.add("see-more"),c.textContent="SEE MORE",c.addEventListener("click",x),e.appendChild(o),e.appendChild(n),e.appendChild(i),e.appendChild(c),e}function x(){window.scrollTo({top:0,behavior:"smooth"})}function L(){const t=document.querySelector(".best-sellers-list");k().then(e=>{e.forEach(o=>{const n=$(o.list_name);t.appendChild(n)})}).catch(e=>console.error("Error loading books:",e))}document.addEventListener("DOMContentLoaded",()=>{L(),v()});const _=document.querySelector(".category-list-container");k().then(t=>`<li class="category-list-item">
        <button class="category-btn category-btn-active" type="button">All categories</button>
      </li>`+t.map(n=>`<li class="category-list-item">

        <button class="category-btn" type="button">${n.list_name}</button>
      </li>`).join("")).then(t=>_.insertAdjacentHTML("beforeend",t));function A(t){var e=document.querySelectorAll(".category-list-container li button");e.forEach(function(o){o.classList.remove("category-btn-active"),(o.textContent.trim()===t.trim()||S.textContent.trim()==="Best Sellers Books"&&o.textContent.trim()==="All categories")&&o.classList.add("category-btn-active")})}const N=new MutationObserver(t=>{t.forEach(e=>{if(e.type==="childList"||e.type==="characterData"){const o=e.target.textContent;A(o)}})}),S=document.querySelector("h1");N.observe(S,{childList:!0,characterData:!0,subtree:!0});window.openModal=H;const a=document.querySelector(".modal"),m=a.querySelector(".modal-body"),D=a.querySelector(".modal-close");async function H(t){try{const e=await M(t);a.setAttribute("data-book",JSON.stringify(e)),j(e),a.classList.add("open"),document.body.style.overflow="hidden",E(O(e))}catch{q.Notify.failure("error")}}function O(t){return(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(o=>o._id===t._id)}const y=function(){a.classList.remove("open"),document.body.style.overflow=""};D.addEventListener("click",y);m.addEventListener("click",function(t){t.target===m&&y()});document.addEventListener("keydown",function(t){t.key==="Escape"&&y()});const C=a.querySelector(".add-to-list"),I=a.querySelector(".under-btn-text");function J(t){t.stopPropagation();let e=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(a.getAttribute("data-book")),n=e.some(s=>s._id===o._id);n?e=e.filter(s=>s._id!==o._id):e.push(o),localStorage.setItem("shoppingList",JSON.stringify(e)),E(!n)}C.addEventListener("click",J);function j(t){var c,b;const e=document.querySelector(".book-cover"),o=document.querySelector(".book-title"),n=document.querySelector(".book-author"),s=document.querySelector(".book-description"),i=document.querySelector(".marketplace-logo.amazon"),r=document.querySelector(".marketplace-logo.apple-books");e.src=t.book_image,e.alt=t.title,o.textContent=t.title,n.textContent=t.author,s.textContent=t.description||"No description available",i.href=((c=t.buy_links.find(u=>u.name==="Amazon"))==null?void 0:c.url)||"",r.href=((b=t.buy_links.find(u=>u.name==="Apple Books"))==null?void 0:b.url)||""}function E(t){const e=t?"Remove from the shopping list":"Add to shopping list";C.textContent=e,I.style.display=t?"block":"none"}const z=document.querySelector(".category-list-container"),l=document.querySelector(".best-sellers-list"),g=document.querySelector(".bestselllersTitle");z.addEventListener("click",R);function R(t){const e=t.target.textContent.trim();e==="All categories"?(l.innerHTML="",l.classList.remove("books-list"),L(),v(),p("Best Sellers Books")):f(e).then(o=>{B(o),p(o[0].list_name)}).catch(o=>{console.error("Error loading books:",o)})}function B(t){l.innerHTML="",t.forEach(e=>{l.innerHTML+=U(e)}),l.classList.add("books-list")}function U({title:t,author:e,book_image:o,_id:n}){return`<div class="book-category">
             <div class="books">
               <ul class="books-category-list">
                 <li id="${n}" class="listener" onclick="openModal('${n}')">
                   <div class="book-category-card mobile-visible tablet-visible">
                    <div class="overlay-div">
                      <img class='bookByCategory-img' src="${o}" alt="${t}" />
                      <p class="overlay-txt">quick view</p>
                    </div> 
                    <div class="book-category-details">
                       <h3 class="book-category-title">${t}</h3>
                       <p class="book-category-author">${e}</p>
                     </div>
                   </div>
                 </li>
               </ul>
             </div>
           </div>`}function p(t){g.textContent=t,V(g)}function V(t){let e=t.textContent.trim().split(" ");if(e.length>1){let o=e.pop();t.innerHTML=e.join(" ")+' <span class="last-word">'+o+"</span>"}}function W(t){f(t).then(e=>{B(e),p(e[0].list_name)}).catch(e=>{console.error("Error loading books:",e)})}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",function(t){t.target.classList.contains("see-more")&&W(t.target.id.replace(/_/g," "))})});window.onscroll=function(){F()};function F(){const t=document.querySelector(".scrollup");document.body.scrollTop>500||document.documentElement.scrollTop>500?t.style.display="block":t.style.display="none"}function P(){window.scrollTo({top:0,behavior:"smooth"})}const G=document.querySelector(".scrollup");G.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
