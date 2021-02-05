(()=>{"use strict";const e="task.lists",t="task.selectedListId";let n=JSON.parse(localStorage.getItem(e))||[],d=localStorage.getItem(t);const s=document.querySelector("#content");s.appendChild((()=>{const e=document.createElement("div");e.classList.add("header-cont");const t=document.createElement("h1");return t.classList.add("header-title"),t.innerHTML="To Do list Project",e.appendChild(t),e})()),s.appendChild((()=>{const e=document.createElement("div");e.classList.add("body-cont","flex");const t=document.createElement("div");t.classList.add("proj-cont");const n=document.createElement("div");n.classList.add("pro-title-cont");const d=document.createElement("h2");d.classList.add("pro-title"),d.innerHTML="MY PROJECT'S LIST";const s=document.createElement("div");s.classList.add("list-cont");const a=document.createElement("ul");a.classList.add("all-projects");const c=document.createElement("form");c.setAttribute("action",""),c.classList.add("pro-form");const l=document.createElement("input");l.classList.add("pro-input"),l.setAttribute("type","text"),l.setAttribute("placeholder","Add a New Project");const o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("pro-btn"),o.innerHTML="New Project";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("btn-delet"),i.innerHTML="Delete project";const r=document.createElement("div");r.classList.add("task-cont");const p=document.createElement("div");p.classList.add("task-title-cont","flex");const u=document.createElement("h2");u.classList.add("task-title"),u.innerHTML="My tasks";const m=document.createElement("p");m.classList.add("tasks-count"),m.innerHTML="1 task remaining";const L=document.createElement("div");L.classList.add("tasks-body");const h=document.createElement("div");h.classList.add("task-conteiner","flex");const C=document.createElement("input");C.classList.add("input-check"),C.type="checkbox";const E=document.createElement("label");E.classList.add("task-label");const k=document.createElement("span");k.classList.add("custom-check"),k.innerHTML="Test task";const y=document.createElement("div");y.classList.add("new-task-creator");const b=document.createElement("form");b.classList.add("task-form");const v=document.createElement("input");v.type="text",v.classList.add("task-input"),v.placeholder="Add a New task";const f=document.createElement("button");f.type="button",f.innerHTML="Create";const S=document.createElement("div");S.classList.add("delete-cont");const T=document.createElement("button");return T.classList.add("clear-btn"),T.type="button",T.innerHTML="Clear Completed Tasks",e.appendChild(t),e.appendChild(r),t.appendChild(n),n.appendChild(d),t.appendChild(s),s.appendChild(a),s.appendChild(c),c.appendChild(l),c.appendChild(o),s.appendChild(i),r.appendChild(p),r.appendChild(L),r.appendChild(S),p.appendChild(u),p.appendChild(m),L.appendChild(h),h.appendChild(C),h.appendChild(E),E.appendChild(k),L.appendChild(y),y.appendChild(b),b.appendChild(v),b.appendChild(f),S.appendChild(T),e})());const a=document.querySelector(".all-projects"),c=document.querySelector(".pro-form"),l=document.querySelector(".pro-input"),o=document.querySelector(".pro-btn"),i=document.querySelector(".btn-delet"),r=document.querySelector(".task-cont"),p=document.querySelector(".task-title"),u=document.querySelector(".tasks-count"),m=(document.querySelector(".task-conteiner"),e=>({id:Date.now().toString(),name:e,tasks:[]})),L=()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(a),h();const e=n.find((e=>e.id===d));null==d?r.style.display="none":(r.style.display="",p.innerHTML=e.name,(e=>{const t=e.tasks.filter((e=>!e.complete)).length,n=1===t?"task":"tasks";u.innerHTML=`${t} ${n} remaining`})(e))},h=()=>{n.forEach((e=>{const t=document.createElement("li");t.dataset.projId=e.id,t.classList.add("list-proj"),t.innerText=e.name,e.id===d&&t.classList.add("active-pro"),a.appendChild(t)}))},C=()=>{localStorage.setItem(e,JSON.stringify(n)),localStorage.setItem(t,d),L()};s.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(d=e.target.dataset.projId,C())})),c.addEventListener("submit",(e=>{e.preventDefault();const t=l.value;if(null==t||""===t)return;const d=m(t);l.value=null,n.push(d),C()})),o.addEventListener("click",(e=>{e.preventDefault();const t=l.value;if(null==t||""===t)return;const d=m(t);l.value=null,n.push(d),C()})),i.addEventListener("click",(e=>{n=n.filter((e=>e.id!==d)),d=null,C()})),L()})();