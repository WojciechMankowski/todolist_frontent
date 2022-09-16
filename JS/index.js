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
let task_home = 0;
let task_pr = 0;
let task_ang = 0;
let task_buy = 0;
let sumTask = 0;

const creatinChart = () => {

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Angieski', 'Zakupy', "Obowiązki domowe", "Programowanie"],
        datasets: [{
            label: '# of Votes',
            data: [task_ang, task_buy, task_home, task_pr],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  
}
const addTaskToCategories = (category) => {
  const span_pr = document.querySelector('.chart_pr')
  const span_buy = document.querySelector('.chart_buy')
  const span_ang = document.querySelector('.chart_ang')
  const span_home = document.querySelector('.chart_home')
  if (category == "pr") {
    task_pr += 1;
    span_pr.dataset.pr = task_pr
  } else if (category == "buy") {
    task_buy += 1;
    span_buy.dataset.buy = task_buy
  } else if (category == "ang") {
    task_ang += 1;
    span_ang.dataset.ang = task_ang
  } else if (category == "home") {
    task_home += 1;
    span_home.dataset.home = task_home
  }
  sumTask += 1;
  creatinChart()
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
  sumTask -= 1;
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
  const id = idTask - removeList.length;
  console.log(`id: ${id}`); 
  removeTaskToCategories(Tasks[id].category)
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
creatinChart()
