(()=>{"use strict";const e=document.querySelector("#content");e.classList.add("bg-red-50","h-screen","pt-6"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("text-center");const t=document.createElement("h2");t.classList.add("text-red-700","text-4xl"),t.innerText="Your daily To-Do list";const d=document.createElement("div");d.classList.add("flex","flex-row","justify-around","mx-40","pt-6");const o=document.createElement("button");o.classList.add("bg-green-400","px-5","py-2","rounded-full","hidden","todo-btn"),o.innerText="New To-Do";const n=document.createElement("button");return n.classList.add("bg-green-400","px-5","py-2","rounded-full","pro-btn"),n.innerText="New Project",d.appendChild(o),d.appendChild(n),e.appendChild(t),e.appendChild(d),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("w-3/6","mx-auto","pt-8","todo-form","hidden");const t=document.createElement("form");t.classList.add("border","ro","border-gray-800","flex","flex-col");const d=document.createElement("input");d.setAttribute("type","text"),d.classList.add("border","border-gray-400","py-3"),d.setAttribute("placeholder","To-Do title");const o=document.createElement("input");o.setAttribute("type","text"),o.classList.add("border","border-gray-400","py-3"),o.setAttribute("placeholder","To-Do description");const n=document.createElement("input");n.setAttribute("type","date"),n.classList.add("border","border-gray-400","py-3"),n.setAttribute("placeholder","To-Do dueDAte");const s=document.createElement("input");s.setAttribute("type","text"),s.classList.add("border","border-gray-400","py-3"),s.setAttribute("placeholder","To-Do priority");const r=document.createElement("button");return r.textContent="Create To-Do",r.classList.add("bg-blue-500","px-2"),t.appendChild(d),t.appendChild(o),t.appendChild(n),t.appendChild(s),t.appendChild(r),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("w-3/6","mx-auto","pt-8","pro-form","hidden");const t=document.createElement("form");t.classList.add("border","ro","border-gray-800","flex","flex-col");const d=document.createElement("input");d.setAttribute("type","text"),d.classList.add("border","border-gray-400","py-3"),d.setAttribute("placeholder","Project title");const o=document.createElement("button");return o.textContent="Create Project",o.classList.add("bg-blue-500","px-2"),e.appendChild(t),t.appendChild(d),t.appendChild(o),e})());const t=document.querySelector(".todo-btn"),d=document.querySelector(".todo-form"),o=document.querySelector(".pro-btn"),n=document.querySelector(".pro-form");o.addEventListener("click",(()=>{n.classList.contains("hidden")?(n.classList.remove("hidden"),n.classList.add("block")):n.classList.contains("block")&&(n.classList.remove("block"),n.classList.add("hidden"))})),t.addEventListener("click",(()=>{d.classList.contains("hidden")?(d.classList.remove("hidden"),d.classList.add("block")):d.classList.contains("block")&&(d.classList.remove("block"),d.classList.add("hidden"))}))})();