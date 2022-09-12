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
};

render();
btn.addEventListener('click', add_new_task);
