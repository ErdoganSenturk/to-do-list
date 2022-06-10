
let entry = document.querySelector(".form-control");
let buton = document.querySelector(".btn");
let sectionTodo = document.querySelector(".section-todo");
let divTodo = document.querySelector(".input-group");



buton.addEventListener("click", ()=>{
    if(!entry){
        alert("enter your to-do")
    } else { 
        let par = document.createElement("p");
        let deleteTodo = document.createElement("div");
        let checkTodo = document.createElement("input");
        checkTodo.classList.add("checkTodo");
        checkTodo.setAttribute("type", "checkbox");
        deleteTodo.classList.add("deleteTodo");
        deleteTodo.innerText = "Delete";
        par.innerText =  entry.value;
        sectionTodo.appendChild(par);
        par.appendChild(checkTodo);
        checkTodo.appendChild(deleteTodo)
        par.appendChild(deleteTodo);
        entry.value = "";

        deleteTodo.addEventListener("click", function () {
        sectionTodo.removeChild(par);
        });
        checkTodo.addEventListener("change", function(){
            par.classList.toggle("checked");
        })
    } 
}
)





