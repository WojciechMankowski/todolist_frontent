let idTask = 0;

const createSpan = (text) => {
  const span = document.createElement("span");
  span.innerText = text;
  span.classList.add("notDone");
  span.id = idTask;
  return span;
};

const checbox = () => {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = idTask;
  input.classList.add('checkbox')
  return input;
};

export const createDiv = (text) => {
  const div = document.createElement("div");
  div.appendChild(checbox());
  div.appendChild(createSpan(text));
  idTask += 1;
  return div;
};

export const render = (task) => {
  const div = document.createElement("div");
  div.appendChild(checbox());
  div.appendChild(createSpan(task));
  idTask += 1;
  return div;
};
