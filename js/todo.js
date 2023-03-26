const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoButton = toDoList.querySelector("button");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(params) {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), 
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const id = li.id;
    li.remove();
    toDos = toDos.filter((toDo) =>toDo.id !==parseInt(li.id));
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(toDos);
    parsedToDos.forEach(paintToDo);
}