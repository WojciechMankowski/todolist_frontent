// znaleścienie inputa, selevt i przycisku
const input_name = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("button");
let nextTask = 0;
// znalezienie listy UL
const listTasks = document.querySelector("ul");
// stworzenie listy zadań
let taks = [
  {
    title: "Dokończyć pisanie aplikacji todo",
    categories: "Programowanie",
    finished: false,
  },
  {
    title: "Pojść na warszty",
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
// renderowanie listy zadań
const render = (index) => {
  taks.forEach((element) => {
    listTasks.appendChild(creatElement(element));
  });
};
// tworzenia elementu do wyświetlania zadania
const creatElement = (task) => {
  const element_li = document.createElement("li");
  const element_checbox = document.createElement("input");
  element_checbox.type = "checkbox";
  const element_strong = document.createElement("strong");
  element_strong.innerText = task.title;
  element_li.appendChild(element_checbox);
  element_li.appendChild(element_strong);
  return element_li;
};
render(0);
btn.addEventListener("click", add_new_task);
