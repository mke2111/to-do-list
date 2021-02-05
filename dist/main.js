(()=>{"use strict";const e="task.lists",t="task.selectedListId";let n=JSON.parse(localStorage.getItem(e))||[],d=localStorage.getItem(t);const a=document.querySelector("#content");a.appendChild((()=>{const e=document.createElement("div");e.classList.add("header-cont");const t=document.createElement("h1");return t.classList.add("header-title"),t.innerHTML="To Do list Project",e.appendChild(t),e})()),a.appendChild((()=>{const e=document.createElement("div");e.classList.add("body-cont","flex","w-3/6","mx-auto","pt-24");const t=document.createElement("div");t.classList.add("proj-cont");const n=document.createElement("div");n.classList.add("pro-title-cont");const d=document.createElement("h2");d.classList.add("pro-title"),d.innerHTML="MY PROJECTS";const a=document.createElement("div");a.classList.add("list-cont");const s=document.createElement("ul");s.classList.add("all-projects");const c=document.createElement("form");c.setAttribute("action",""),c.classList.add("pro-form","flex","flex-col");const l=document.createElement("input");l.classList.add("pro-input"),l.setAttribute("type","text"),l.setAttribute("placeholder","Add a New Project");const o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("pro-btn"),o.innerHTML="New Project";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("btn-delet"),i.innerHTML="Delete project";const r=document.createElement("div");r.classList.add("task-cont");const u=document.createElement("div");u.classList.add("task-title-cont","flex");const p=document.createElement("h2");p.classList.add("task-title"),p.innerHTML="My tasks";const m=document.createElement("p");m.classList.add("tasks-count"),m.innerHTML="1 task remaining";const L=document.createElement("div");L.classList.add("tasks-body");const h=document.createElement("div");h.classList.add("task-conteiner");const k=document.createElement("div");k.classList.add("new-task-creator");const E=document.createElement("form");E.classList.add("task-form");const C=document.createElement("input");C.type="text",C.classList.add("task-input"),C.placeholder="Add a New task";const f=document.createElement("button");f.classList.add("create-task-btn"),f.type="button",f.innerHTML="Create";const v=document.createElement("div");v.classList.add("delete-cont");const y=document.createElement("button");return y.classList.add("clear-btn"),y.type="button",y.innerHTML="Clear Completed Tasks",e.appendChild(t),e.appendChild(r),t.appendChild(n),n.appendChild(d),t.appendChild(a),a.appendChild(s),a.appendChild(c),c.appendChild(l),c.appendChild(o),a.appendChild(i),r.appendChild(u),r.appendChild(L),r.appendChild(v),u.appendChild(p),u.appendChild(m),L.appendChild(h),L.appendChild(k),k.appendChild(E),E.appendChild(C),E.appendChild(f),v.appendChild(y),e})());const s=document.querySelector(".all-projects"),c=document.querySelector(".pro-form"),l=document.querySelector(".pro-input"),o=document.querySelector(".pro-btn"),i=document.querySelector(".btn-delet"),r=document.querySelector(".task-cont"),u=document.querySelector(".task-title"),p=document.querySelector(".tasks-count"),m=document.querySelector(".task-conteiner"),L=document.getElementById("task-template"),h=document.querySelector(".task-form"),k=document.querySelector(".task-input"),E=document.querySelector(".create-task-btn"),C=document.querySelector(".clear-btn"),f=e=>({id:Date.now().toString(),name:e,tasks:[{id:"qweqwe",name:"asdqwe",complete:!1}]}),v=e=>({id:Date.now().toString(),name:e,complete:!1}),y=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},b=()=>{localStorage.setItem(e,JSON.stringify(n)),localStorage.setItem(t,d)},S=e=>{const t=e.tasks.filter((e=>!e.complete)).length,n=1===t?"task":"tasks";p.innerHTML=`${t} ${n} remaining`},g=()=>{y(s),q();const e=n.find((e=>e.id===d));null==d?r.style.display="none":(r.style.display="",u.innerHTML=e.name,S(e),y(m),(e=>{e.tasks.forEach((e=>{const t=document.importNode(L.content,!0),n=t.querySelector("input");n.id=e.id,n.checked=e.complete;const d=t.querySelector("label");d.htmlFor=e.id,d.append(e.name),m.appendChild(t)}))})(e))},q=()=>{n.forEach((e=>{const t=document.createElement("li");t.dataset.projId=e.id,t.classList.add("list-proj"),t.innerText=e.name,e.id===d&&t.classList.add("active-pro"),s.appendChild(t)}))},T=()=>{b(),g()};a.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(d=e.target.dataset.projId,T())})),c.addEventListener("submit",(e=>{e.preventDefault();const t=l.value;if(null==t||""===t)return;const d=f(t);l.value=null,n.push(d),T()})),h.addEventListener("submit",(e=>{e.preventDefault();const t=k.value;if(null==t||""===t)return;const a=v(t);k.value=null,n.find((e=>e.id===d)).tasks.push(a),T()})),E.addEventListener("click",(e=>{e.preventDefault();const t=k.value;if(null==t||""===t)return;const a=v(t);k.value=null,n.find((e=>e.id===d)).tasks.push(a),T()})),m.addEventListener("click",(e=>{if("input"===e.target.tagName.toLowerCase()){const t=n.find((e=>e.id===d));t.tasks.find((t=>t.id===e.target.id)).complete=e.target.checked,b(),S(t)}})),o.addEventListener("click",(e=>{e.preventDefault();const t=l.value;if(null==t||""===t)return;const d=f(t);l.value=null,n.push(d),T()})),i.addEventListener("click",(e=>{n=n.filter((e=>e.id!==d)),d=null,T()})),C.addEventListener("click",(e=>{const t=n.find((e=>e.id===d));t.tasks=t.tasks.filter((e=>!e.complete)),T()})),g()})();