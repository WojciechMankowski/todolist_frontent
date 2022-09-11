const input_name = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("button");
const listTasks = document.querySelector("ul");

let nextTask = 0;

let taks = [
  {
    title: "Dokończyć pisanie aplikacji todo",
    categories: "Programowanie",
    finished: false,
  },
];

const show_new_task = () => {
  listTasks.appendChild(creatElement(taks[nextTask]));
};

const add_new_task = () => {
  nextTask++;
  const title = input_name.value;
  const categories = select.value;
  const task = {
    title: title,
    categories: categories,
    finished: false,
  };
  taks.push(task);
  show_new_task();
};
const render = () => {
  taks.forEach((element) => {
    listTasks.appendChild(creatElement(element));
  });
};
const change = () => {
  const notDone = document.querySelectorAll(".notDone:checked");
  console.log(notDone);
  const listDone = [...notDone]
  const element = listDone[0]
  
  if (element.className === "notDone"){
    console.log(element.className);
  }
};

const creatElement = (task) => {
  const element_li = document.createElement("li");
  const element_checbox = document.createElement("input");
  element_checbox.type = "checkbox";
  element_checbox.classList.add("notDone");
  element_checbox.addEventListener("click", change);
  element_checbox.accessKey = task.title;
  const element_strong = document.createElement("strong");
  element_strong.innerText = task.title;
  const classLi = `${task.title}`;
  element_li.className = classLi;
  element_li.appendChild(element_checbox);
  element_li.appendChild(element_strong);
  return element_li;
};

render();
btn.addEventListener("click", add_new_task);
