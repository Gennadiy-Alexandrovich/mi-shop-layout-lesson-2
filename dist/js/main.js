(()=>{"use strict";const e=e=>{e.classList.add("d-block"),setTimeout((()=>{e.classList.add("show")}),200)},t=e=>{e.classList.remove("show"),setTimeout((()=>{e.classList.remove("d-block")}),500)};(()=>{const o=document.getElementById("open-auth-btn"),n=document.getElementById("auth-modal"),s=n.querySelectorAll(".close-btn"),l=n.querySelector(".login-btn"),c=document.getElementById("open-cart-btn"),a=document.getElementById("logout-btn"),d=n.querySelectorAll(".form-control"),r=document.getElementById("cart-modal");function i(){o.classList.add("d-none"),c.classList.remove("d-none"),a.classList.remove("d-none"),t(n)}o.addEventListener("click",(()=>{e(n)})),s.forEach((e=>{e.addEventListener("click",(()=>{t(n),d.forEach((function(e){e.value=""}))}))})),l.addEventListener("click",(()=>{const e=n.querySelector("#login-control"),t=n.querySelector("#password-control"),o={login:e.value,password:t.value};localStorage.setItem("auth",JSON.stringify(o)),i()})),a.addEventListener("click",(()=>{localStorage.removeItem("auth"),o.classList.remove("d-none"),c.classList.add("d-none"),a.classList.add("d-none")})),c.addEventListener("click",(()=>{e(r)})),JSON.parse(localStorage.getItem("auth"))&&i()})()})();