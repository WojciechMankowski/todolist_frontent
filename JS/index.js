import { createDiv, render } from "./Render.js";

const input_name = document.querySelector("input");
const btn = document.querySelector("button");
const element_lisTasks = document.querySelector(".lisTasks");
const categories_select = document.querySelector("#categories");
const Tasks = [];
const checboxList = [];
let removeList = [];

let nextTask = 0;
let idTask = 0;
let nextTaskInLocalStorge = 0;

const checkTheCheckbox = () => {
  const listSpan = [...element_lisTasks.querySelectorAll("span")];
  let checbox = checboxList.filter(
    (element) => element.checked && element.className == "checkbox"
  )[0];
  checbox.classList.replace("checkbox", "done");
  const id_task = checbox.id;
  const span = listSpan[id_task];
  removeInLocalStorage(id_task)
  Tasks[id_task].done = true;
  saveInLocalStorage(Tasks[id_task])
  span.classList.replace("notDone", "done");
};

const removeTask = (idTask) => {
  const id = idTask - removeList.length;
  console.log(`id: ${id}`);
  Tasks.pop(id);
  const span = [...document.querySelectorAll("div")];
  console.log("spans", span);
  const el = span.filter((element) => element.id == id)[0];
  el.remove();
};
const getchecbox = () => {
  checboxList.push(...document.querySelectorAll(".checkbox"));
  checboxList.forEach((element) => {
    element.addEventListener("click", checkTheCheckbox);
  });
};

const getBtnRemove = () => {
  removeList = [];
  removeList.push(...document.querySelectorAll(".remove"));
  removeList.forEach((element) => {
    element.addEventListener("click", () => removeTask(idTask));
    idTask++;
  });
};
const removeInLocalStorage = (key) => {
  console.log(key);
  localStorage.removeItem(key)
  
}
const readInLocalStorage = () => {
  for (let i = 0; i != localStorage.length; i++) {
    const element = localStorage.getItem(i);
    const task = JSON.parse(element);
    Tasks.push(task);
  }
};
const saveInLocalStorage = (data) => {
  localStorage.setItem(nextTaskInLocalStorge, JSON.stringify(data));
  nextTaskInLocalStorge += 1;
};
const addTask = () => {
  const nameTask = input_name.value;
  const category = categories_select.value;
  const task = {
    title: nameTask,
    done: false,
    category: category,
  };
  Tasks.push(task);
  saveInLocalStorage(task);
  element_lisTasks.appendChild(createDiv(Tasks[nextTask]));
  nextTask += 1;
  getchecbox();
  getBtnRemove();
};
readInLocalStorage();
btn.addEventListener("click", addTask);
Tasks.forEach((element) => {
  element_lisTasks.appendChild(render(element)), (nextTask += 1);
});

getchecbox();
getBtnRemove();
