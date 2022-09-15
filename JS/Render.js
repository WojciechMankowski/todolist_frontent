let idTask = 0;

const createSpan = (task) => {
  const span = document.createElement("span");
  span.innerText = task.title;
  if (task.done) {
    span.classList.add("done");
  } else {
    span.classList.add("notDone");
  }
  span.id = idTask;
  return span;
};

const checbox = (done) => {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = idTask;
  input.classList.add("checkbox");
  if (done) {
    input.checked = true;
  }
  return input;
};

export const createDiv = (task) => {
  const div = document.createElement("div");
  div.appendChild(checbox(task.done));
  div.appendChild(createSpan(task));
  idTask += 1;
  return div;
};

export const render = (task) => {
  const div = document.createElement("div");
  div.appendChild(checbox(task.done));
  div.appendChild(createSpan(task));
  idTask += 1;
  return div;
};
