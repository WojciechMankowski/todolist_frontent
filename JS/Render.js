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
const createIcon = (category) => {
  let icon = document.createElement("i");
  if (category == "home") {
    icon.className = "fa-solid fa-house-chimney";
  } else if (category == "buy") {
    icon.className = "fa-solid fa-money-bill";
  } else if (category == "ang") {
    icon.className = "fa-solid fa-book-open-reader";
  } else if (category == "pr") {
    icon.className = "fa-solid fa-laptop-code";
  }
  return icon;
};
export const createDiv = (task) => {
  const div = document.createElement("div");
  div.appendChild(checbox(task.done));
  div.appendChild(createIcon(task.category));
  div.appendChild(createSpan(task));
  idTask += 1;
  return div;
};

export const render = (task) => {
  const div = document.createElement("div");
  div.appendChild(checbox(task.done));
  div.appendChild(createIcon(task.category));
  div.appendChild(createSpan(task));
  idTask += 1;
  return div;
};
