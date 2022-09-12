let nextElement = 0;
const creatElement = (task, change) => {
	const element_li = document.createElement('li');

	const element_checbox = document.createElement('input');
	element_checbox.type = 'checkbox';
	element_checbox.classList.add('notDone');
    element_checbox.classList.add(nextElement)
	element_checbox.addEventListener('click', change);
	element_checbox.accessKey = task.title;

	const element_strong = document.createElement('strong');
	element_strong.innerText = task.title;

	
	element_li.className = nextElement;
	element_li.appendChild(element_checbox);
	element_li.appendChild(element_strong);

	nextElement++;
	return element_li;
};

export default creatElement;
