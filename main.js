(()=>{"use strict";const t="task.lists",e="task.selectedListId";let d=JSON.parse(localStorage.getItem(t))||[],n=localStorage.getItem(e);const s=document.querySelector("#content");s.appendChild((()=>{const t=document.createElement("div");t.classList.add("header-cont");const e=document.createElement("h1");return e.classList.add("header-title"),e.innerHTML="To Do list Project",t.appendChild(e),t})()),s.appendChild((()=>{const t=document.createElement("div");t.classList.add("body-cont","flex","w-3/6","mx-auto","pt-24");const e=document.createElement("div");e.classList.add("proj-cont");const d=document.createElement("div");d.classList.add("pro-title-cont");const n=document.createElement("h2");n.classList.add("pro-title"),n.innerHTML="MY PROJECTS";const s=document.createElement("div");s.classList.add("list-cont");const l=document.createElement("ul");l.classList.add("all-projects");const a=document.createElement("form");a.setAttribute("action",""),a.classList.add("pro-form","flex","flex-col");const c=document.createElement("input");c.classList.add("pro-input"),c.setAttribute("type","text"),c.setAttribute("placeholder","Add a New Project");const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("pro-btn"),i.innerHTML="New Project";const o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("btn-delet"),o.innerHTML="Delete project",t.appendChild(e),e.appendChild(d),d.appendChild(n),e.appendChild(s),s.appendChild(l),s.appendChild(a),a.appendChild(c),a.appendChild(i),s.appendChild(o);const r=document.createElement("div");r.classList.add("task-cont");const p=document.createElement("div");p.classList.add("list-title-cont");const u=document.createElement("h2");u.classList.add("list-title"),u.innerHTML="MY LISTS";const m=document.createElement("div");m.classList.add("list-container");const b=document.createElement("ul");b.classList.add("all-lists");const L=document.createElement("form");L.setAttribute("action",""),L.classList.add("list-form","flex","flex-col","border","border-gray-400","rounded-md","p-3");const h=document.createElement("input");h.classList.add("list-title-input","border-b","border-gray-600","pt-2"),h.setAttribute("type","text"),h.setAttribute("placeholder","Add Title");const C=document.createElement("input");C.classList.add("list-description-input","border-b","border-gray-600","pt-2"),C.setAttribute("type","text"),C.setAttribute("placeholder","Add Description");const E=document.createElement("input");E.classList.add("list-due-date-input","border-b","border-gray-600","pt-2"),E.setAttribute("type","text"),E.setAttribute("placeholder","Set Due Date");const y=document.createElement("input");y.classList.add("list-priority-input","border-b","border-gray-600","pt-2"),y.setAttribute("type","text"),y.setAttribute("placeholder","Set Priority");const g=document.createElement("button");g.setAttribute("type","button"),g.classList.add("list-add-btn","w-max","mx-auto","px-2","mt-2","bg-green-400","rounded-md"),g.innerHTML="New List";const A=document.createElement("button");return A.setAttribute("type","button"),A.classList.add("list-delete-btn","bg-red-400","rounded-md"),A.innerHTML="Delete List",p.appendChild(u),m.appendChild(b),L.appendChild(h),L.appendChild(C),L.appendChild(E),L.appendChild(y),L.appendChild(g),r.appendChild(p),r.appendChild(m),m.appendChild(L),m.appendChild(A),t.appendChild(r),t})());const l=document.querySelector(".all-projects"),a=document.querySelector(".pro-form"),c=document.querySelector(".pro-input"),i=document.querySelector(".btn-delet"),o=()=>{(t=>{for(;t.firstChild;)t.removeChild(t.firstChild)})(l),d.forEach((t=>{const e=document.createElement("li");e.dataset.projId=t.id,e.classList.add("list-proj"),e.innerText=t.name,t.id===n&&e.classList.add("active-pro"),l.appendChild(e)}))},r=()=>{localStorage.setItem(t,JSON.stringify(d)),localStorage.setItem(e,n),o()};s.addEventListener("click",(t=>{"li"===t.target.tagName.toLowerCase()&&(n=t.target.dataset.projId,r())})),a.addEventListener("submit",(t=>{t.preventDefault();const e=c.value;if(null==e||""===e)return;const n=(s=e,{id:Date.now().toString(),name:s,tasks:[]});var s;c.value=null,d.push(n),r()})),console.log(i),i.addEventListener("click",(t=>{d=d.filter((t=>t.id!==n)),n=null,r()})),o()})();