(()=>{"use strict";const e="task.lists",t="task.selectedListId";let d=JSON.parse(localStorage.getItem(e))||[],n=localStorage.getItem(t);const r=document.querySelector("#content");r.classList.add("bg-gray-200","h-screen"),r.appendChild((()=>{const e=document.createElement("div");e.classList.add("header-cont","pt-5");const t=document.createElement("h1");return t.classList.add("header-title","text-center","text-blue-700","text-4xl","font-bold"),t.innerHTML="Your To-Do Lists",e.appendChild(t),e})()),r.appendChild((()=>{const e=document.createElement("div");e.classList.add("body-cont","flex","w-4/6","mx-auto","pt-19","mt-12","shadow-2xl","bg-blue-200","rounded-lg","justify-around","border-r-2","border-blue-900");const t=document.createElement("div");t.classList.add("proj-cont","border-r-2","border-blue-300","pr-5","w-1/4","p-5");const d=document.createElement("div");d.classList.add("pro-title-cont");const n=document.createElement("h2");n.classList.add("pro-title","border-b-2","w-max","border-gray-500"),n.innerHTML="MY PROJECTS";const r=document.createElement("div");r.classList.add("list-cont");const o=document.createElement("ul");o.classList.add("all-projects","text-red-600");const a=document.createElement("form");a.setAttribute("action",""),a.classList.add("pro-form","flex","flex-col");const s=document.createElement("input");s.classList.add("pro-input"),s.setAttribute("type","text"),s.setAttribute("placeholder","Add a New Project");const c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("pro-btn","bg-green-500","hover:bg-green-700","px-2","py-1","rounded-md","text-white"),c.innerHTML="New Project";const l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("btn-delet","bg-red-500","hover:bg-red-700","px-2","py-1","rounded-md","text-white","mt-3"),l.innerHTML="Delete project";const i=document.createElement("div");i.classList.add("task-cont","w-3/4","p-5");const p=document.createElement("div");p.classList.add("task-title-cont","flex","justify-around","mb-3","border-b-2","border-gray-500");const u=document.createElement("h2");u.classList.add("task-title","text-red-600"),u.innerHTML="My tasks";const m=document.createElement("p");m.classList.add("tasks-count"),m.innerHTML="1 task remaining";const h=document.createElement("div");h.classList.add("tasks-body");const y=document.createElement("div");y.classList.add("task-conteiner","text-blue-800");const b=document.createElement("div");b.classList.add("new-task-creator");const L=document.createElement("form");L.classList.add("task-form","hidden","w-min");const k=document.createElement("input");k.type="text",k.classList.add("task-input","border","border-gray-300","rounded-md","my-1"),k.placeholder="Add title";const E=document.createElement("input");E.type="text",E.classList.add("task-description","border","border-gray-300","rounded-md","my-1"),E.placeholder="Add description";const g=document.createElement("input");g.type="date",g.classList.add("task-duedate","border","border-gray-300","rounded-md","my-1"),g.placeholder="Add duedate";const f=document.createElement("select");f.classList.add("task-priority","border","border-gray-300","rounded-md","my-1"),f.placeholder="Add priority",["HIGH","MEDIUM","LOW"].forEach((e=>{const t=document.createElement("option");t.innerText=e,f.options.add(t)}));const C=document.createElement("button");C.classList.add("create-task-btn","bg-green-500","hover:bg-green-700","px-2","py-1","rounded-md","text-white"),C.type="button",C.innerHTML="Create";const v=document.createElement("h6");v.innerText="Enter all form fields",v.style.display="none",v.classList.add("text-red-700","text-xs","error");const x=document.createElement("div");x.classList.add("delete-cont","flex","justify-between","w-3/6","pt-5");const S=document.createElement("button");S.classList.add("clear-btn","bg-red-500","hover:bg-red-700","px-2","py-1","rounded-md","text-white"),S.type="button",S.innerHTML="Clear Completed";const q=document.createElement("button");return q.classList.add("add-form","bg-blue-500","hover:bg-blue-700","px-2","py-1","rounded-md","text-white"),q.type="button",q.innerHTML="Add Task",e.appendChild(t),e.appendChild(i),t.appendChild(d),d.appendChild(n),t.appendChild(r),r.appendChild(o),r.appendChild(a),a.appendChild(s),a.appendChild(c),r.appendChild(l),i.appendChild(p),i.appendChild(h),i.appendChild(x),p.appendChild(u),p.appendChild(m),h.appendChild(y),h.appendChild(b),b.appendChild(L),L.appendChild(k),L.appendChild(E),L.appendChild(g),L.appendChild(f),L.appendChild(v),L.appendChild(C),x.appendChild(S),x.appendChild(q),e})());const o=document.querySelector(".all-projects"),a=document.querySelector(".pro-input"),s=document.querySelector(".pro-btn"),c=document.querySelector(".btn-delet"),l=document.querySelector(".task-cont"),i=document.querySelector(".task-title"),p=document.querySelector(".tasks-count"),u=document.querySelector(".task-conteiner"),m=document.getElementById("task-template"),h=document.querySelector(".task-form"),y=document.querySelector(".task-input"),b=document.querySelector(".task-description"),L=document.querySelector(".task-duedate"),k=document.querySelector(".task-priority"),E=document.querySelector(".create-task-btn"),g=document.querySelector(".add-form"),f=document.querySelector(".error"),C=document.querySelector(".clear-btn"),v=e=>({id:Date.now().toString(),name:e,tasks:[{id:"qweqwe",name:"name",description:"description",duedate:"duedate",priority:"priority",complete:!1}]}),x=v("Default");d.includes("Default")&&d.push(x);const S=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},q=()=>{localStorage.setItem(e,JSON.stringify(d)),localStorage.setItem(t,n)},w=e=>{const t=e.tasks.filter((e=>!e.complete)).length,d=1===t?"task":"tasks";p.innerHTML=`${t} ${d} remaining`},T=()=>{S(o),d.forEach((e=>{const t=document.createElement("li");t.dataset.projId=e.id,t.classList.add("list-proj","cursor-pointer","pb-2","font-medium"),t.innerText=e.name,e.id===n&&t.classList.add("active-pro","font-bold"),o.appendChild(t)}));const e=d.find((e=>e.id===n));null==n?l.style.display="none":(l.style.display="",i.innerHTML=e.name,w(e),S(u),(e=>{e.tasks.forEach((e=>{const t=document.importNode(m.content,!0),d=t.querySelector("input");d.id=e.id,d.checked=e.complete;const n=t.querySelector("label");n.htmlFor=e.id,n.append(e.name);const r=t.querySelector(".description");r.htmlFor=e.id,r.append(e.description);const o=t.querySelector(".duedate");o.htmlFor=e.id,o.append(e.duedate);const a=t.querySelector(".priority");a.htmlFor=e.id,a.append(e.priority),u.appendChild(t)}))})(e))},M=()=>{q(),T()};r.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(n=e.target.dataset.projId,M())})),E.addEventListener("click",(e=>{e.preventDefault();const t=y.value,r=b.value,o=L.value,a=k.value;if(""===t||""===r||""===o||""===a)return void(f.style.display="block");f.style.display="none";const s=(c=t,l=r,i=o,p=a,{id:Date.now().toString(),name:c,description:l,duedate:i,priority:p,complete:!1});var c,l,i,p;[y,b,L,k].forEach((e=>{e.value=null})),d.find((e=>e.id===n)).tasks.push(s),h.classList.remove("block"),h.classList.add("hidden"),M()})),u.addEventListener("click",(e=>{if("input"===e.target.tagName.toLowerCase()){const t=d.find((e=>e.id===n));t.tasks.find((t=>t.id===e.target.id)).complete=e.target.checked,q(),w(t)}})),s.addEventListener("click",(e=>{e.preventDefault();const t=a.value;if(null==t||""===t)return;const n=v(t);a.value=null,d.push(n),M()})),c.addEventListener("click",(e=>{d=d.filter((e=>e.id!==n)),n=null,M()})),C.addEventListener("click",(e=>{const t=d.find((e=>e.id===n));t.tasks=t.tasks.filter((e=>!e.complete)),M()})),g.addEventListener("click",(()=>{h.classList.contains("hidden")?(h.classList.remove("hidden"),h.classList.add("block")):(h.classList.remove("block"),h.classList.add("hidden"))})),T()})();