import { createDiv, render } from "./Render.js";
import { renderChart } from "./Chart.js";
const input_name = document.querySelector("input");
const btn = document.querySelector("button");
const element_lisTasks = document.querySelector(".lisTasks");
const categories_select = document.querySelector("#categories");

const Tasks = [];
const checboxList = [];
let removeList = [];

let nextTask = 0;
let idTask = 0;
let task_home = 0;
let task_pr = 0;
let task_ang = 0;
let task_buy = 0;

const addTaskToCategories = (category) => {
  if (category == "pr") {
    task_pr += 1;
  } else if (category == "buy") {
    task_buy += 1;
  } else if (category == "ang") {
    task_ang += 1;
  } else if (category == "home") {
    task_home += 1;
  }
  renderChart(task_ang, task_buy, task_home, task_pr);
};
const removeTaskToCategories = (category) => {
  if (category == "pr") {
    task_pr -= 1;
  } else if (category == "buy") {
    task_buy -= 1;
  } else if (category == "ang") {
    task_ang -= 1;
  } else if (category == "home") {
    task_home -= 1;
  }
  renderChart(task_ang, task_buy, task_home, task_pr);
};

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
  let id = idTask-1;
  removeTaskToCategories(Tasks[id].category);
  Tasks.pop(id);
  let element_remove;
  const div = [...element_lisTasks.querySelectorAll("div")];
  div.filter((element) => {
    if (element.id == id) {
      element_remove = element;
    }
  });
  element_remove.remove();
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
  idTask = 0;
  removeList.forEach((element) => {
    console.log(idTask, element);
    element.addEventListener("click", () => removeTask(idTask));
    idTask++;
  });
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
  addTaskToCategories(task.category);
  // console.log(Tasks[nextTask]);
  element_lisTasks.appendChild(createDiv(Tasks[nextTask]));
  nextTask += 1;
  getchecbox();
  getBtnRemove();
};

btn.addEventListener("click", addTask);
Tasks.forEach((element) => {
  element_lisTasks.appendChild(render(element)), (nextTask += 1);
});
getchecbox();
getBtnRemove();
renderChart(task_ang, task_buy, task_home, task_pr);
