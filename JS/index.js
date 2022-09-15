import { createDiv, render } from "./Render.js";

const input_name = document.querySelector("input");
const btn = document.querySelector("button");
const element_lisTasks = document.querySelector(".lisTasks");
const categories_select = document.querySelector("#categories");
const Tasks = [
  {
    title: "Kup huba do macbooka",
    done: true,
    category: "buy",
  },
];
const checboxList = [];
let removeList = [];

let nextTask = 0;
let idTask = 0;

const checkTheCheckbox = () => {
  const listSpan = [...element_lisTasks.querySelectorAll("span")];
  let checbox = checboxList.filter(
    (element) => element.checked && element.className == "checkbox"
  )[0];
  checbox.classList.replace("checkbox", "done");
  const id_task = checbox.id;
  const span = listSpan[id_task];
  Tasks[id_task].done = true;
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
Tasks.forEach((element) => {
  element_lisTasks.appendChild(render(element)), (nextTask += 1);
});
getchecbox();
getBtnRemove();

const addTask = () => {
  const nameTask = input_name.value;
  const category = categories_select.value;
  Tasks.push({
    title: nameTask,
    done: false,
    category: category,
  });
  element_lisTasks.appendChild(createDiv(Tasks[nextTask]));
  nextTask += 1;
  getchecbox();
  getBtnRemove();
};

btn.addEventListener("click", addTask);
