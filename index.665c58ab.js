const e=document.getElementById("input-box"),t=document.getElementById("list-container"),n=document.querySelector(".todo-app__button");function o(e){let t=e.target;t.classList.contains("todo-app__item")&&(t.classList.toggle("todo-app__item--checked"),i()),t.classList.contains("todo-app__item-remove")&&(t.parentElement.remove(),i())}function a(){let n=e.value.trim();if(!n){alert("You have to write something!");return}let o=document.createElement("li");o.className="todo-app__item",o.innerHTML=`
        ${n}
        <span class="todo-app__item-remove">&times;</span>
    `,t.appendChild(o),e.value="",e.focus(),i()}function i(){localStorage.setItem("todoItems",t.innerHTML)}document.addEventListener("DOMContentLoaded",()=>{(function(){let e=localStorage.getItem("todoItems");e&&(t.innerHTML=e)})(),n.addEventListener("click",a),e.addEventListener("keypress",e=>{"Enter"===e.key&&a()}),t.addEventListener("click",o)});
//# sourceMappingURL=index.665c58ab.js.map
