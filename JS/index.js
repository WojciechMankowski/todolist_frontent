import creatElement from './createElement.js';

const input_name = document.querySelector('input');
const select = document.querySelector('select');
const btn = document.querySelector('button');
const listTasks = document.querySelector('ul');

let nextTask = 0;


let taks = [
	{
		title: 'Dokończyć pisanie aplikacji todo',
		categories: 'Programowanie',
		finished: false,
	},
	{
		title: 'Dokończyć pisanie ',
		categories: 'Programowanie',
		finished: false,
	},
	{
		title: 'aplikacji todo',
		categories: 'Programowanie',
		finished: false,
	},
	{
		title: 'todo',
		categories: 'Programowanie',
		finished: false,
	},
];

const show_new_task = () => {
	listTasks.appendChild(creatElement(taks[nextTask], changeOfState));
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
<<<<<<< HEAD
const changeOfState = () => {
	const notDones = [...document.querySelectorAll('.notDone:checked')];
	notDones
		.filter((element) => {
      const classNames = element.classList[0]
      return classNames === 'notDone'})
		.forEach((element) => {
      element.classList.replace('notDone', 'done')
    });
    const dones = [...document.querySelectorAll('.done')];
    dones.forEach(element => {
      const id = element.classList[1]
      taks[id].finished = true
      const nameClass = `.${id}`
      const elementsLi = listTasks.querySelectorAll('li')
      const elementLi = elementsLi[id]
      elementLi.classList.add("done")
    })
};

const render = () => {
	taks.forEach((element) => {
		listTasks.appendChild(creatElement(element, changeOfState));
	});
=======
const render = () => {
  taks.forEach((element) => {
    listTasks.appendChild(creatElement(element));
  });
};
const change = () => {
  const notDone = document.querySelectorAll(".notDone:checked");
  console.log(notDone);
  const listDone = [...notDone];
  listDone
    .filter((element) => element.className === "notDone")
    .forEach((element) => {
      const key = element.accessKey;
      const li = document.getElementsByClassName(key)[0];
      li.classList.replace(key, "done");
    });
};
let nextLi = 0;
const creatElement = (task) => {
  const element_li = document.createElement("li");
  const element_checbox = document.createElement("input");
  element_checbox.type = "checkbox";
  element_checbox.classList.add("notDone");
  element_checbox.addEventListener("click", change);
  element_checbox.accessKey = nextLi;
  const element_strong = document.createElement("strong");
  element_strong.innerText = task.title;
  element_li.classList.add(nextLi);
  element_li.appendChild(element_checbox);
  element_li.appendChild(element_strong);
  nextLi++;
  return element_li;
>>>>>>> fd39b9a1f68c7e42b0a8ce8bb9e6a8c470b25fde
};

render();
btn.addEventListener('click', add_new_task);
