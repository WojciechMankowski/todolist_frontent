let nextElement = 0;
export const creatElement = (nodeElement, functions, label="") => {
	const element = document.createElement(nodeElement)
	element.innerText = label
	element.addEventListener('click', functions)
	return element
};





